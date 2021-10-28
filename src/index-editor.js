import { LitElement, html } from 'lit-element';
import style from './style-editor';
import defaultConfig from './defaults';

export const fireEvent = (node, type, detail = {}, options = {}) => {
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });

  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

export default class LightEntityCardEditor extends LitElement {
  static get styles() {
    return style;
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  setConfig(config) {
    this._config = {
      ...defaultConfig,
      ...config,
    };
  }

  get entityOptions() {
    const allEntities = Object.keys(this.hass.states).filter(eid => {
      return ['switch', 'light', 'group'].includes(eid.substr(0, eid.indexOf('.')));
    });

    allEntities.sort();
    return allEntities;
  }

  firstUpdated() {
    this._firstRendered = true;
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    // get header name
    let { header } = this._config;
    if (!header && this._config.entity) {
      let name = this._config.entity.split('.')[1] || '';
      if (name) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        header = name;
      }
    }

    // eslint-disable-next-line arrow-body-style
    // eslint-disable-next-line arrow-parens
    const options = this.entityOptions.map(entity => {
      return html`<paper-item>${entity}</paper-item>`;
    });

    return html`
      <div class="card-config">

        <div class=overall-config'>
          <paper-input
            label="Header"
            .value="${header}"
            .configValue="${'header'}"
            @value-changed="${this.configChanged}"
          ></paper-input>
        </div>

        <div class='entities'>
          <paper-dropdown-menu 
            label="Entity"
            @value-changed="${this.configChanged}" 
            .configValue="${'entity'}"
          >
            <paper-listbox 
              slot="dropdown-content" 
              .selected="${this.entityOptions.indexOf(this._config.entity)}"
            >
              ${options}
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-input
            label="Brightness Icon"
            .value="${this._config.brightness_icon}"
            .configValue="${'brightness_icon'}"
            @value-changed="${this.configChanged}"
          ></paper-input>
        </div>

        <div class='entities'>
         <paper-input
            label="White Icon"
            .value="${this._config.white_icon}"
            .configValue="${'white_icon'}"
            @value-changed="${this.configChanged}"
          ></paper-input>
          <paper-input
            label="Temperature Icon"
            .value="${this._config.temperature_icon}"
            .configValue="${'temperature_icon'}"
            @value-changed="${this.configChanged}"
          ></paper-input>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
            <ha-formfield label="Show Color Wheel">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}" 
                .checked=${this._config.color_wheel}
                .value="${'color_wheel'}"
              ></ha-checkbox>
            </ha-formfield>
            <ha-formfield label="Shorten Cards">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.shorten_cards}
                .value="${'shorten_cards'}"
              ></ha-checkbox>
            </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Persist Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.persist_features}
                  .value="${'persist_features'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Brightness">
                <ha-checkbox
                  @checked-changed="${this.checkboxConfigChanged}"
                  .checked=${this._config.brightness}
                  .value="${'brightness'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Temp">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_temp}
                  .value="${'color_temp'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show White Value">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${'white_value'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Picker">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_picker}
                  .value="${'color_picker'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Effects List">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.effects_list}
                  .value="${'effects_list'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Full Width Sliders">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.full_width_sliders}
                  .value="${'full_width_sliders'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Slider Percent">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_slider_percent}
                  .value="${'show_slider_percent'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Smooth Color Wheel">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.smooth_color_wheel}
                  .value="${'smooth_color_wheel'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Consolidate Entities">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.consolidate_entities}
                  .value="${'consolidate_entities'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Hide Header">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.hide_header}
                  .value="${'hide_header'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Child Card">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.child_card}
                  .value="${'child_card'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>
          </div>
      </div>
    `;
  }

  configChanged(ev) {
    if (!this._config || !this.hass || !this._firstRendered) return;
    const {
      target: { configValue, value },
      detail: { value: checkedValue },
    } = ev;

    if (checkedValue !== undefined || checkedValue !== null) {
      this._config = { ...this._config, [configValue]: checkedValue };
    } else {
      this._config = { ...this._config, [configValue]: value };
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }

  checkboxConfigChanged(ev) {
    if (!this._config || !this.hass || !this._firstRendered) return;
    const {
      target: { value, checked },
    } = ev;

    this._config = { ...this._config, [value]: checked };

    fireEvent(this, 'config-changed', { config: this._config });
  }
}
