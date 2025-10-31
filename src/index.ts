import { LitElement, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';

import style from './style';
import defaultConfig from './defaults';
import LightEntityCardEditor from './index-editor';
import buildElementDefinitions from './buildElementDefinitions';
import globalElementLoader from './globalElementLoader';
import { logger } from './utils/logger';
import type {
  HomeAssistant,
  LightEntityCardConfig,
  LightEntity,
  CardEntity,
  FeatureName,
  ColorPickerEvent,
} from './types/index';
import {
  VERSION,
  CARD_INFO,
  LIGHT_FEATURES,
  ENTITY_DOMAINS,
  LIGHT_SERVICES,
  SIZES,
  TIMING,
} from './constants';
import { renderBrightnessSlider, renderSpeedSlider, renderIntensitySlider } from './features/brightness';
import { renderColorTemperature } from './features/color-temperature';
import { renderWhiteValue } from './features/white-value';
import { renderColorPicker, handleColorChanged, createDebouncedColorHandler } from './features/color-picker';
import { renderEffectList, handleEffectChange } from './features/effects';

const editorName = CARD_INFO.EDITOR_NAME;
customElements.define(editorName, LightEntityCardEditor);

console.info(`light-entity-card v${VERSION}`);

class LightEntityCard extends ScopedRegistryHost(LitElement) {
  @property({ type: Object }) hass!: HomeAssistant;
  @property({ type: Object }) config!: LightEntityCardConfig;

  private _firstUpdate = false;
  private _stateObjects: CardEntity[] = [];
  private _shownStateObjects: CardEntity[] = [];

  // Debounced color change handler to prevent excessive API calls
  private _debouncedColorChange = createDebouncedColorHandler(
    (hsColor: [number, number], stateObj: CardEntity) => {
      this.callEntityService({ hs_color: hsColor }, stateObj);
    },
    100
  );

  static get elementDefinitions() {
    return buildElementDefinitions(
      [
        globalElementLoader('ha-card'),
        globalElementLoader('more-info-light'),
        globalElementLoader('ha-switch'),
        globalElementLoader('ha-icon'),
        globalElementLoader('state-badge'),
        globalElementLoader('ha-slider'),
        globalElementLoader('ha-color-picker'),
        globalElementLoader('ha-lovelace-color-picker'),
        globalElementLoader('ha-select'),
        globalElementLoader('mwc-list-item'),
      ],
      LightEntityCard
    );
  }

  async firstUpdated() {
    this._firstUpdate = true;

    // Ensure ha-color-picker is loaded
    await this._ensureColorPickerLoaded();
  }

  /**
   * Ensures ha-color-picker element is loaded
   * Uses multiple strategies to trigger element loading
   */
  private async _ensureColorPickerLoaded(): Promise<void> {
    try {
      // Check if element is already defined
      if (customElements.get('ha-color-picker')) {
        logger.debug('ha-color-picker already loaded');
        return;
      }

      logger.debug('Attempting to load ha-color-picker');

      // Strategy 1: Use Home Assistant card helpers to import the
      // more-info control for lights. This typically registers
      // ha-color-picker without showing any dialogs.
      if (!customElements.get('ha-color-picker') && (window as any).loadCardHelpers) {
        try {
          const helpers = await (window as any).loadCardHelpers();
          if (helpers?.importMoreInfoControl) {
            await helpers.importMoreInfoControl('light');
            logger.debug('importMoreInfoControl("light") resolved');
          } else if (helpers?.importMoreInfo) {
            await helpers.importMoreInfo('light');
            logger.debug('importMoreInfo("light") resolved');
          }

          // As an additional nudge, create a temporary built-in light card
          // and attach it briefly to the DOM to ensure its modules load.
          if (!customElements.get('ha-color-picker') && helpers?.createCardElement && this.config?.entity) {
            try {
              const tmp = await helpers.createCardElement({ type: 'light', entity: this.config.entity });
              // Set hass so the element can render and trigger dynamic imports
              // @ts-ignore
              tmp.hass = this.hass;
              const holder = document.createElement('div');
              holder.style.cssText = 'position:absolute; left:-99999px; top:-99999px; width:0; height:0; overflow:hidden;';
              holder.appendChild(tmp);
              // Append to the document so connectedCallback runs
              document.body.appendChild(holder);
              logger.debug('Attached temporary hui-light-card to DOM to trigger imports');

              // Wait a short moment or until the color picker is defined
              await Promise.race([
                customElements.whenDefined('ha-color-picker'),
                customElements.whenDefined('ha-lovelace-color-picker'),
                new Promise((resolve) => setTimeout(resolve, 1000)),
              ]);

              // Clean up
              try {
                document.body.removeChild(holder);
              } catch (_) {}
            } catch (e3) {
              logger.debug('Temporary hui-light-card creation/attach failed', e3);
            }
          }
        } catch (e) {
          logger.debug('loadCardHelpers failed', e);
        }
      }

      // Strategy 2: Retry helpers a few times in case helpers are not ready yet
      if (!customElements.get('ha-color-picker') && (window as any).loadCardHelpers) {
        for (let i = 0; i < 8 && !customElements.get('ha-color-picker'); i++) {
          try {
            const helpers = await (window as any).loadCardHelpers();
            if (helpers?.importMoreInfoControl) {
              await helpers.importMoreInfoControl('light');
              logger.debug('Retry importMoreInfoControl("light") resolved');
            } else if (helpers?.importMoreInfo) {
              await helpers.importMoreInfo('light');
              logger.debug('Retry importMoreInfo("light") resolved');
            }
          } catch (e) {
            // ignore
          }
          // eslint-disable-next-line no-await-in-loop
          await new Promise((r) => setTimeout(r, 250));
        }
      }

      // Strategy 3: Try to get the element from somewhere in the DOM
      if (!customElements.get('ha-color-picker')) {
        const existingPicker = document.querySelector('ha-color-picker');
        if (existingPicker) {
          logger.debug('Found existing ha-color-picker in DOM');
        }
      }

      // Wait for the element (either variant) with a reasonable timeout
      if (!customElements.get('ha-color-picker') && !customElements.get('ha-lovelace-color-picker')) {
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout waiting for ha-color-picker')), 3000)
        );

        try {
          await Promise.race([
            customElements.whenDefined('ha-color-picker'),
            customElements.whenDefined('ha-lovelace-color-picker'),
            timeout,
          ]);
          logger.debug('Color picker element loaded successfully');
          // Ensure we re-render so bindings (like desiredHsColor) apply
          this.requestUpdate();
        } catch (e) {
          logger.warn('ha-color-picker not available, color picker will not be displayed');
        }
      }

      // Regardless of the timeout outcome, attach listeners so if HA
      // defines the color picker later (e.g., after opening More Info),
      // we will re-render and show it.
      try {
        if (!customElements.get('ha-color-picker')) {
          customElements.whenDefined('ha-color-picker').then(() => {
            logger.debug('ha-color-picker became available later');
            this.requestUpdate();
          });
        }
        if (!customElements.get('ha-lovelace-color-picker')) {
          customElements.whenDefined('ha-lovelace-color-picker').then(() => {
            logger.debug('ha-lovelace-color-picker became available later');
            this.requestUpdate();
          });
        }
      } catch (_) {
        // no-op
      }
    } catch (error) {
      logger.warn('Failed to load ha-color-picker', error);
    }
  }

  /**
   * checks and saves config of entity
   * @param {*} config
   */
  setConfig(config) {
    if (!config.entity) throw Error('entity required.');

    this.config = {
      ...defaultConfig,
      ...config,
    };
  }

  static async getConfigElement() {
    // eslint-disable-next-line no-undef
    return document.createElement(editorName);
  }

  static get featureNames() {
    return LIGHT_FEATURES;
  }

  static get cmdToggle() {
    return {
      on: LIGHT_SERVICES.TURN_ON,
      off: LIGHT_SERVICES.TURN_OFF,
    };
  }

  static get entityLength() {
    return {
      light: SIZES.CARD_LENGTH_LIGHT,
      switch: SIZES.CARD_LENGTH_SWITCH,
    };
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    if (!this.config || !this.hass || !this.hass.states[this.config.entity]) {
      return 1;
    }

    let cardLength = 0;
    const entities = this.hass.states[this.config.entity];

    // if given a group entity then sum length of each entity by type
    // else just get the sible entity length
    if (Array.isArray(entities.attributes.entity_id)) {
      entities.attributes.entity_id.forEach(entity_id => (cardLength += this.getEntityLength(entity_id)));
    } else {
      cardLength += this.getEntityLength(entities.attributes.entity_id);
    }

    // if we are compacting the card account for that
    if (this.config.group) {
      cardLength *= 0.8;
    }

    return parseInt(cardLength.toString());
  }

  /**
   * determines the UI length of an entity
   * @param {string} entity_id
   */
  getEntityLength(entity_id) {
    if (/^light\./.test(entity_id)) {
      return LightEntityCard.entityLength.light;
    } else if (/^switch\./.test(entity_id)) {
      return LightEntityCard.entityLength.switch;
    } else {
      return 0;
    }
  }

  /**
   * generates the CSS styles for this card
   * @return {TemplateResult}
   */
  get styles() {
    return style;
  }

  get language() {
    return this.hass.resources[this.hass.language];
  }

  /**
   * check if the given entity is on or off
   * @param {LightEntity} stateObj
   * @return {Boolean}
   */
  isEntityOn(stateObj) {
    return stateObj.state === 'on';
  }

  /**
   * generates a card for each given entiy in the config
   * @return {TemplateResult}
   */
  render() {
    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;
    }

    this._stateObjects = this.getEntitiesToShow(entity);

    // need to find what state objects are actually going to be shown
    if (this.config.consolidate_entities) {
      this._shownStateObjects = [entity];
    } else {
      this._shownStateObjects = [...this._stateObjects];
    }

    const templates = this._shownStateObjects.reduce(
      (htmlTemplate, stateObj) => html`${htmlTemplate}${this.createEntityTemplate(stateObj)}`,
      // eslint-disable-next-line comma-dangle
      ''
    );

    const css = `light-entity-card ${this.config.shorten_cards ? ' group' : ''} ${
      this.config.child_card ? ' light-entity-child-card' : ''
    }`;

    return html`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${css}">
        ${templates}
      </ha-card>
    `;
  }

  /**
   * gets all the entities we need to build this card for
   * @param {LightEntity|GroupEntity} entities
   * @return {Array<LightEntity>}
   */
  getEntitiesToShow(entities) {
    if (entities.attributes.entity_id && Array.isArray(entities.attributes.entity_id))
      return entities.attributes.entity_id.map(entity_id => this.hass.states[entity_id]).filter(Boolean);

    return [entities];
  }

  /**
   * creates an entity's template
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createEntityTemplate(stateObj) {
    const sliderClass = this.config.full_width_sliders ? 'ha-slider-full-width' : '';

    return html`
      ${this.createHeader(stateObj)}
      <div class="light-entity-card-sliders ${sliderClass}">
        ${this.createBrightnessSlider(stateObj)} ${this.createSpeedSlider(stateObj)}
        ${this.createIntensitySlider(stateObj)} ${this.createColorTemperature(stateObj)}
        ${this.createWhiteValue(stateObj)}
      </div>
      ${this.createColorPicker(stateObj)} ${this.createEffectList(stateObj)}
    `;
  }

  /**
   * creates card header with state toggle for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createHeader(stateObj) {
    if (this.config.hide_header) return html``;
    const title = this.config.header || stateObj.attributes.friendly_name || stateObj.entity_id;

    return html`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(stateObj)}
        <div class="light-entity-card__title">${title}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(stateObj)} @change=${e => this.setToggle(e, stateObj)}></ha-switch>
        </div>
      </div>
    `;
  }

  showHeaderIcon(stateObj) {
    if (!this.config.show_header_icon) return html``;

    return html`
      <div class="icon-container">
        <state-badge .stateObj=${stateObj}></state-badge>
      </div>
    `;
  }

  /**
   * creates brightness slider
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createBrightnessSlider(stateObj) {
    return renderBrightnessSlider(stateObj, this.config, this._setValue.bind(this));
  }

  /**
   * creates speed slider
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createSpeedSlider(stateObj) {
    return renderSpeedSlider(stateObj, this.config, this._setValue.bind(this));
  }

  /**
   * creates intensity slider
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createIntensitySlider(stateObj) {
    return renderIntensitySlider(stateObj, this.config, this._setValue.bind(this));
  }

  /**
   * creates color temperature slider for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorTemperature(stateObj) {
    return renderColorTemperature(stateObj, this.config, this._setValue.bind(this));
  }

  /**
   * creates white value slider for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createWhiteValue(stateObj) {
    return renderWhiteValue(stateObj, this.config, this._setValue.bind(this));
  }

  /**
   * creates effect list dropdown for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createEffectList(stateObj) {
    return renderEffectList(
      stateObj,
      this.config,
      this.hass,
      this.language,
      (event, stateObj) => {
        handleEffectChange(event, stateObj, (effect, stateObj) => {
          this.callEntityService({ effect }, stateObj);
        });
      }
    );
  }

  /**
   * creates color picker wheel for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorPicker(stateObj) {
    return renderColorPicker(
      stateObj,
      this.config,
      this.hass,
      (event, stateObj) => {
        handleColorChanged(event, stateObj, this._debouncedColorChange);
      }
    );
  }


  _setValue(event, stateObj, valueName) {
    const newValue = parseInt(event.target.value, 0);
    if (isNaN(newValue) || parseInt(stateObj.attributes[valueName], 0) === newValue) return;

    this.callEntityService({ [valueName]: newValue }, stateObj);
  }

  /**
   * sets the toggle state based on the given entity state
   * @param {CustomEvent} event
   * @param {LightEntity} stateObj
   */
  setToggle(event, stateObj) {
    const newState = this.isEntityOn(stateObj) ? LightEntityCard.cmdToggle.off : LightEntityCard.cmdToggle.on;
    this.callEntityService({}, stateObj, newState);
  }

  /**
   * Calls a Home Assistant service to update the state of an entity
   *
   * This method includes error handling and logging to help debug issues.
   * It automatically determines the correct service domain (light, switch, or homeassistant).
   *
   * @param payload - Service data (brightness, color, etc.)
   * @param stateObj - The entity state object
   * @param state - Optional service name (defaults to 'turn_on')
   */
  callEntityService(payload: any, stateObj: any, state?: string): void {
    // Don't call services before the component is fully initialized
    if (!this._firstUpdate) {
      logger.debug('Skipping service call - component not yet initialized');
      return;
    }

    try {
      // Determine the correct service domain
      let entityType = stateObj.entity_id.split('.')[0];
      if (entityType === 'group') {
        entityType = 'homeassistant';
      }

      const service = state || LightEntityCard.cmdToggle.on;
      const serviceData = {
        entity_id: stateObj.entity_id,
        ...payload,
      };

      logger.debug('Calling service', {
        domain: entityType,
        service,
        data: serviceData,
      });

      this.hass.callService(entityType, service, serviceData);
    } catch (error) {
      logger.error('Failed to call service', error, {
        entity: stateObj.entity_id,
        payload,
        state,
      });

      // Optionally dispatch an event that the UI can listen to for error display
      this.dispatchEvent(
        new CustomEvent('service-call-error', {
          detail: {
            error: error instanceof Error ? error.message : 'Unknown error',
            entity: stateObj.entity_id,
          },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

customElements.define('light-entity-card', LightEntityCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'light-entity-card',
  name: 'Light Entity Card',
  description: 'Control lights and switches',
});
