import { LitElement, html } from 'lit';

import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';

import style from './style';
import defaultConfig from './defaults';
import LightEntityCardEditor from './index-editor';
import packageJson from '../package.json';
import buildElementDefinitions from './buildElementDefinitions';
import globalElementLoader from './globalElementLoader';

const editorName = 'light-entity-card-editor';
customElements.define(editorName, LightEntityCardEditor);

console.info(`light-entity-card v${packageJson.version}`);

class LightEntityCard extends ScopedRegistryHost(LitElement) {
  static get elementDefinitions() {
    return buildElementDefinitions(
      [
        globalElementLoader('ha-card'),
        globalElementLoader('more-info-light'),
        globalElementLoader('ha-switch'),
        globalElementLoader('ha-icon'),
        globalElementLoader('state-badge'),
        globalElementLoader('ha-slider'),
        globalElementLoader('ha-hs-color-picker'),
        globalElementLoader('ha-select'),
        globalElementLoader('mwc-list-item'),
      ],
      LightEntityCard
    );
  }
  
  static get properties() {
    return {
      hass: {},
      config: {},
      _colorPickerValues: { state: true },
    };
  }

  async firstUpdated() {
    this._firstUpdate = true;

    // ha-hs-color-picker is lazy-loaded by HA (only when more-info dialog opens).
    // Force it to load by opening a more-info dialog hidden via CSS, then closing it.
    const needsColorPicker = this.config.color_picker !== false
      && this.config.entity.startsWith('light.');
    if (needsColorPicker && !customElements.get('ha-hs-color-picker')) {
      const ha = document.querySelector('home-assistant');
      if (ha) {
        // Hide the dialog to prevent visible flash
        const hideStyle = document.createElement('style');
        hideStyle.textContent = 'ha-more-info-dialog { display: none !important; }';
        ha.shadowRoot.appendChild(hideStyle);

        const ev = new CustomEvent('hass-more-info', {
          detail: { entityId: this.config.entity },
          bubbles: true, composed: true,
        });
        ha.dispatchEvent(ev);

        try {
          await Promise.race([
            customElements.whenDefined('ha-hs-color-picker'),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 5000)),
          ]);
        } catch {
          // Timed out — color picker element not available, continue gracefully
        } finally {
          // Always close the hidden dialog and remove the style
          const closeEv = new CustomEvent('hass-more-info', {
            detail: { entityId: '' },
            bubbles: true, composed: true,
          });
          ha.dispatchEvent(closeEv);
          hideStyle.remove();
        }
      }
      this.requestUpdate();
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
     
    return document.createElement(editorName);
  }

  static get featureNames() {
    return {
      brightness: 1,
      colorTemp: 2,
      effectList: 4,
      color: 16,
      whiteValue: 128,
    };
  }

  static get cmdToggle() {
    return {
      on: 'turn_on',
      off: 'turn_off',
    };
  }

  static get entityLength() {
    return {
      light: 10,
      switch: 1,
    };
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    if (!this.config || !this.__hass || !this.__hass.states[this.config.entity]) {
      return 1;
    }

    let cardLength = 0;
    const entities = this.__hass.states[this.config.entity];

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

    return parseInt(cardLength, 10);
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
        ${this.createWarmWhiteValue(stateObj)}
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
    if (this.config.brightness === false) return html``;
    if (this.dontShowFeature('brightness', stateObj)) return html``;

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Brightness">
          <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.brightness || 0}"
          @change="${event => this._setValue(event, stateObj, 'brightness')}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(stateObj.attributes.brightness, 0, 254, 'brightness')}
      </div>
    `;
  }

  /**
   * creates speed slider
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createSpeedSlider(stateObj) {
    if (this.config.speed === false) return html``;
    if (this.dontShowFeature('speed', stateObj)) return html``;

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Speed">
          <ha-icon icon="hass:${this.config.speed_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.speed || 0}"
          @change="${event => this._setValue(event, stateObj, 'speed')}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(stateObj.attributes.speed, 0, 254)}
      </div>
    `;
  }

  /**
   * creates intensity slider
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createIntensitySlider(stateObj) {
    if (this.config.intensity === false) return html``;
    if (this.dontShowFeature('intensity', stateObj)) return html``;

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Intensity">
          <ha-icon icon="hass:${this.config.intensity_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.intensity || 0}"
          @change="${event => this._setValue(event, stateObj, 'intensity')}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(stateObj.attributes.intensity, 0, 254)}
      </div>
    `;
  }

  /**
   * shows slider value label if config is set
   * @param {number} value
   * @param {number} min
   * @param {number} max
   * @param {string} [sliderType] - 'brightness' or 'color_temp' for per-slider overrides
   * @return {TemplateResult}
   */
  showPercent(value, min, max, sliderType) {
    // Per-slider visibility overrides
    if (sliderType === 'brightness' && this.config.show_brightness_percent !== undefined) {
      if (!this.config.show_brightness_percent) return html``;
    } else if (sliderType === 'color_temp' && this.config.show_color_temp_percent !== undefined) {
      if (!this.config.show_color_temp_percent) return html``;
    } else if (sliderType === 'color_temp' && this.config.color_temp_in_kelvin) {
      // color_temp_in_kelvin implies showing the value label
    } else if (!this.config.show_slider_percent) {
      return html``;
    }

    // Show kelvin for color temp if configured (slider value is already in kelvin)
    if (sliderType === 'color_temp' && this.config.color_temp_in_kelvin) {
      return html` <div class="percent-slider">${value}K</div> `;
    }

    let percent = parseInt(((value - min) * 100) / (max - min), 10);
    if (isNaN(percent)) percent = 0;

    return html` <div class="percent-slider">${percent}%</div> `;
  }

  /**
   * creates color temperature slider for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorTemperature(stateObj) {
    if (this.config.color_temp === false) return html``;
    if (this.dontShowFeature('colorTemp', stateObj)) return html``;

    // HA 2026.3+ uses kelvin-based attributes; fall back to mireds for older HA
    const usesKelvin = stateObj.attributes.min_color_temp_kelvin !== undefined;
    const showInKelvin = this.config.color_temp_in_kelvin;

    let currentTemp, minTemp, maxTemp;
    if (showInKelvin) {
      // Slider works in kelvin so the native popup shows kelvin values.
      // Kelvin: low=warm, high=cool — slider left=warm, right=cool.
      let minK, maxK, kelvin;
      if (usesKelvin) {
        kelvin = stateObj.attributes.color_temp_kelvin;
        minK = stateObj.attributes.min_color_temp_kelvin;
        maxK = stateObj.attributes.max_color_temp_kelvin;
      } else {
        kelvin = stateObj.attributes.color_temp
          ? Math.round(1000000 / stateObj.attributes.color_temp) : null;
        minK = stateObj.attributes.max_mireds
          ? Math.round(1000000 / stateObj.attributes.max_mireds) : null;
        maxK = stateObj.attributes.min_mireds
          ? Math.round(1000000 / stateObj.attributes.min_mireds) : null;
      }
      if (!minK || !maxK) return html``;
      const midpoint = Math.round((minK + maxK) / 2);
      currentTemp = (typeof kelvin === 'number' && Number.isFinite(kelvin) && kelvin > 0)
        ? kelvin : null;
      minTemp = minK;
      maxTemp = maxK;
      const sliderValue = currentTemp || midpoint;
      const label = this.showPercent(sliderValue, minTemp, maxTemp, 'color_temp');

      return html`
        <div class="control light-entity-card-center">
          <div class="icon-container" title="Color Temperature">
            <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
          </div>
          <ha-slider
            class="light-entity-card-color_temp light-entity-card-color_temp--kelvin"
            min="${minTemp}"
            max="${maxTemp}"
            .value=${sliderValue}
            @change="${event => this._setColorTemp(event, stateObj, usesKelvin, true)}"
          >
          </ha-slider>
          ${label}
        </div>
      `;
    }

    // Compute mired range for percentage-based slider.
    // Slider works in 0–100 so the native popup shows a percentage value.
    let minMired, maxMired, currentMired;
    if (usesKelvin) {
      const kelvin = stateObj.attributes.color_temp_kelvin;
      const minK = stateObj.attributes.min_color_temp_kelvin;
      const maxK = stateObj.attributes.max_color_temp_kelvin;
      if (!minK || !maxK) return html``;
      currentMired = (typeof kelvin === 'number' && Number.isFinite(kelvin) && kelvin > 0)
        ? Math.round(1000000 / kelvin) : null;
      minMired = Math.round(1000000 / maxK);
      maxMired = Math.round(1000000 / minK);
    } else {
      currentMired = stateObj.attributes.color_temp;
      minMired = stateObj.attributes.min_mireds;
      maxMired = stateObj.attributes.max_mireds;
      if (!minMired || !maxMired) return html``;
    }

    const miredRange = (maxMired && minMired) ? maxMired - minMired : 0;
    const percentValue = (miredRange > 0 && currentMired != null)
      ? Math.round(((currentMired - minMired) / miredRange) * 100) : 50;
    const label = this.showPercent(percentValue, 0, 100, 'color_temp');

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Color Temperature">
          <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        </div>
        <ha-slider
          class="light-entity-card-color_temp"
          min="0"
          max="100"
          .value=${percentValue}
          @change="${event => this._setColorTemp(event, stateObj, usesKelvin, false, minMired, maxMired)}"
        >
        </ha-slider>
        ${label}
      </div>
    `;
  }

  /**
   * gets the current white value from entity state
   * supports modern rgbw_color/rgbww_color and legacy white_value
   * @param {LightEntity} stateObj
   * @param {number} index - index in the color tuple (3 for white/cool white, 4 for warm white)
   * @return {number}
   */
  getWhiteValue(stateObj, index = 3) {
    const rgbwColor = stateObj.attributes.rgbw_color;
    const rgbwwColor = stateObj.attributes.rgbww_color;

    if (rgbwColor && index === 3) return rgbwColor[3] || 0;
    if (rgbwwColor && index < rgbwwColor.length) return rgbwwColor[index] || 0;

    // Legacy fallback
    if (index === 3 && stateObj.attributes.white_value !== undefined) {
      return stateObj.attributes.white_value ?? 0;
    }

    return 0;
  }

  /**
   * creates white value slider for a given entity
   * supports modern RGBW/RGBWW color modes and legacy white_value
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createWhiteValue(stateObj) {
    if (this.config.white_value === false) return html``;
    if (this.dontShowFeature('whiteValue', stateObj)) return html``;

    const whiteValue = this.getWhiteValue(stateObj, 3);

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="White">
          <ha-icon icon="hass:${this.config.white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${whiteValue}"
          @change="${event => this._setWhiteValue(event, stateObj, 3)}"
        >
        </ha-slider>
        ${this.showPercent(whiteValue, 0, 254)}
      </div>
    `;
  }

  /**
   * creates warm white value slider for RGBWW entities
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createWarmWhiteValue(stateObj) {
    if (this.config.warm_white_value === false) return html``;
    if (this.dontShowFeature('warmWhiteValue', stateObj)) return html``;

    const warmWhiteValue = this.getWhiteValue(stateObj, 4);

    return html`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Warm White">
          <ha-icon icon="hass:${this.config.warm_white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${warmWhiteValue}"
          @change="${event => this._setWhiteValue(event, stateObj, 4)}"
        >
        </ha-slider>
        ${this.showPercent(warmWhiteValue, 0, 254)}
      </div>
    `;
  }

  /**
   * sets the white value for RGBW/RGBWW lights using modern color mode API
   * falls back to legacy white_value for older HA installations
   * @param {CustomEvent} event
   * @param {LightEntity} stateObj
   * @param {number} index - 3 for white/cool white, 4 for warm white
   */
  _setWhiteValue(event, stateObj, index) {
    const newValue = parseInt(event.target.value, 10);
    if (isNaN(newValue)) return;

    const colorModes = stateObj.attributes.supported_color_modes || [];
    const rgbwColor = stateObj.attributes.rgbw_color;
    const rgbwwColor = stateObj.attributes.rgbww_color;

    if (colorModes.includes('rgbw') && index === 3) {
      const rgb = rgbwColor ? rgbwColor.slice(0, 3) : (stateObj.attributes.rgb_color || [255, 255, 255]);
      this.callEntityService({ rgbw_color: [rgb[0], rgb[1], rgb[2], newValue] }, stateObj);
    } else if (colorModes.includes('rgbww')) {
      let base;
      if (rgbwwColor) {
        base = rgbwwColor;
      } else if (rgbwColor) {
        base = [rgbwColor[0], rgbwColor[1], rgbwColor[2], rgbwColor[3], 0];
      } else {
        const rgb = stateObj.attributes.rgb_color || [255, 255, 255];
        base = [rgb[0], rgb[1], rgb[2], 0, 0];
      }
      const newColor = [...base];
      newColor[index] = newValue;
      this.callEntityService({ rgbww_color: newColor }, stateObj);
    } else {
      // Legacy fallback
      this.callEntityService({ white_value: newValue }, stateObj);
    }
  }

  /**
   * creates effect list dropdown for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createEffectList(stateObj) {
    // do we disable effect list always?
    if (this.config.effects_list === false) return html``;

    // need to check state and persist_features here because if given custom effect list we may
    // want to sho that even if the feature doesn't exist so dont check that part to move forward just persist_features/state
    if (!this.config.persist_features && !this.isEntityOn(stateObj)) return html``;

    let effect_list = stateObj.attributes.effect_list || [];

    // if we were given a custom list then use that
    if (this.config.effects_list && Array.isArray(this.config.effects_list)) {
      effect_list = this.config.effects_list;
    } else if (this.config.effects_list && this.hass.states[this.config.effects_list]) {
      // else if given an input_select entity use that as effect list
      const inputSelect = this.hass.states[this.config.effects_list];
      effect_list = (inputSelect.attributes && inputSelect.attributes.options) || [];
    } else if (this.dontShowFeature('effectList', stateObj)) {
      // finally if no custom list nor feature exists then dont show effect list
      return html``;
    }

    const listItems = effect_list.map(effect => this.createListItem(stateObj, effect));
    const caption = this.hass.localize('ui.card.light.effect') || 'Effect';

    return html`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select 
          @closed="${e => e.stopPropagation()}" 
          @selected=${e => this.setEffect(e, stateObj)} 
          label="${caption}" 
        >
          ${listItems}
        </ha-select>
      </div>
    `;
  }

  createListItem(stateObj, effect) {
    return html`<mwc-list-item value="${effect}" ?selected=${effect === stateObj.attributes.effect}
      >${effect}</mwc-list-item
    >`;
  }

  /**
   * creates color picker wheel for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorPicker(stateObj) {
    if (this.config.color_picker === false) return html``;
    if (this.dontShowFeature('color', stateObj)) return html``;

    // ha-hs-color-picker uses saturation 0-1, HA uses 0-100
    const haHs = stateObj.attributes.hs_color || [0, 0];
    const pickerValue = (this._colorPickerValues && this._colorPickerValues[stateObj.entity_id])
      || [haHs[0], haHs[1] / 100];

    return html`
      <div class="light-entity-card__color-picker">
        <ha-hs-color-picker
          .value=${pickerValue}
          @cursor-moved=${(e) => { this._colorPickerValues = { ...this._colorPickerValues, [stateObj.entity_id]: e.detail.value }; }}
          @value-changed=${(e) => this._onColorPickerChanged(e.detail.value, stateObj)}
        ></ha-hs-color-picker>
      </div>
    `;
  }

  /**
   * do we show a feature or not?
   * @param {string} featureName
   * @param {LightEntity} stateObj
   * @return {boolean}
   */
  dontShowFeature(featureName, stateObj) {
    // show all feature if this is set to true
    if (this.config.force_features) return false;

    // WLED support
    if (featureName === 'speed' && 'speed' in stateObj.attributes) return false;
    if (featureName === 'intensity' && 'intensity' in stateObj.attributes) return false;

    // old deprecated way to seeing if supported feature
    let featureSupported = LightEntityCard.featureNames[featureName] & stateObj.attributes.supported_features;

    // support new color modes https://developers.home-assistant.io/docs/core/entity/light/#color-modes
    const colorModes = stateObj.attributes.supported_color_modes || [];

    if (!featureSupported) {
      switch (featureName) {
        case 'brightness':
          featureSupported = Object.prototype.hasOwnProperty.call(stateObj.attributes, 'brightness');
          if (!featureSupported) {
            const supportedModes = ['hs', 'rgb', 'rgbw', 'rgbww', 'white', 'brightness', 'color_temp', 'xy'];
            featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0;
          }

          break;
        case 'colorTemp':
          if (colorModes) {
            const supportedModes = ['color_temp'];
            featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0;
          }
          break;
        case 'effectList':
          featureSupported = stateObj.attributes.effect_list && stateObj.attributes.effect_list.length;
          break;
        case 'color': {
          const supportedModes = ['hs', 'rgb', 'rgbw', 'rgbww', 'xy'];
          featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0;
          break;
        }
        case 'whiteValue':
          featureSupported = Object.prototype.hasOwnProperty.call(stateObj.attributes, 'white_value');
          if (!featureSupported) {
            const supportedModes = ['rgbw', 'rgbww'];
            featureSupported = colorModes.some(mode => supportedModes.includes(mode));
          }
          break;
        case 'warmWhiteValue': {
          const supportedModes = ['rgbww'];
          featureSupported = colorModes.some(mode => supportedModes.includes(mode));
          break;
        }
        default:
          featureSupported = false;
          break;
      }
    }

    if (!featureSupported) return true;
    if (!this.config.persist_features && !this.isEntityOn(stateObj)) return true;
    return false;
  }

  /**
   * change to hs color for a given entity
   * @param {HSV} hsv
   * @param {LightEntity} stateObj
   */
  _onColorPickerChanged(value, stateObj) {
    if (this._colorPickerValues) {
      const { [stateObj.entity_id]: _discarded, ...rest } = this._colorPickerValues;
      this._colorPickerValues = rest;
    }
    this.setColorPicker(value, stateObj);
  }

  setColorPicker(value, stateObj) {
    if (!value) return;
    // Convert saturation back from 0-1 to 0-100 for HA
    this.callEntityService({ hs_color: [value[0], value[1] * 100] }, stateObj);
  }

  _setValue(event, stateObj, valueName) {
    const newValue = parseInt(event.target.value, 10);
    if (isNaN(newValue) || parseInt(stateObj.attributes[valueName], 10) === newValue) return;

    this.callEntityService({ [valueName]: newValue }, stateObj);
  }

  /**
   * handles color temperature slider changes, converting to the correct unit for HA
   * @param {CustomEvent} event
   * @param {LightEntity} stateObj
   * @param {boolean} usesKelvin - whether the HA entity uses kelvin-based attributes
   * @param {boolean} sliderInKelvin - whether the slider value is in kelvin
   * @param {number} [minMired] - min mired value (needed for percentage→mired conversion)
   * @param {number} [maxMired] - max mired value (needed for percentage→mired conversion)
   */
  _setColorTemp(event, stateObj, usesKelvin, sliderInKelvin, minMired, maxMired) {
    const rawValue = parseInt(event.target.value, 10);
    if (isNaN(rawValue)) return;

    if (sliderInKelvin) {
      // Slider value is kelvin
      if (usesKelvin) {
        if (rawValue === parseInt(stateObj.attributes.color_temp_kelvin, 10)) return;
        this.callEntityService({ color_temp_kelvin: rawValue }, stateObj);
      } else {
        const miredValue = Math.round(1000000 / rawValue);
        if (miredValue === parseInt(stateObj.attributes.color_temp, 10)) return;
        this.callEntityService({ color_temp: miredValue }, stateObj);
      }
    } else {
      // Slider value is percentage (0–100), convert back to mireds
      if (!Number.isFinite(minMired) || !Number.isFinite(maxMired) || maxMired <= minMired) return;
      const miredValue = Math.round(minMired + (rawValue / 100) * (maxMired - minMired));
      if (usesKelvin) {
        const kelvinValue = Math.round(1000000 / miredValue);
        if (kelvinValue === parseInt(stateObj.attributes.color_temp_kelvin, 10)) return;
        this.callEntityService({ color_temp_kelvin: kelvinValue }, stateObj);
      } else {
        if (miredValue === parseInt(stateObj.attributes.color_temp, 10)) return;
        this.callEntityService({ color_temp: miredValue }, stateObj);
      }
    }
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
   * sets the current effect selected for an entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setEffect(event, stateObj) {
    if(!event.target.value ) return;
    this.callEntityService({ effect: event.target.value }, stateObj);
  }

  /**
   * call light service to update a state of an entity
   * @param {Object} payload
   * @param {LightEntity} entity
   * @param {String} state
   */
  callEntityService(payload, stateObj, state) {
    if(!this._firstUpdate) return;

    let entityType = stateObj.entity_id.split('.')[0];
    if (entityType === 'group') entityType = 'homeassistant';

    const transition = parseFloat(this.config.transition) || 0;
    if (transition > 0 && entityType === 'light') {
      payload = { ...payload, transition };
    }

    this.hass.callService(entityType, state || LightEntityCard.cmdToggle.on, {
      entity_id: stateObj.entity_id,
      ...payload,
    });
  }
}

customElements.define('light-entity-card', LightEntityCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'light-entity-card',
  name: 'Light Entity Card',
  description: 'Control lights and switches',
});
