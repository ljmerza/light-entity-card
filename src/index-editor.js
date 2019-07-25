import { LitElement, html } from 'lit-element';
import style from './style-editor';
import defaultConfig from './defaults';


const fireEvent = (node, type, detail = {}, options = {}) => {
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
      ...config
    };
  }

  get entityOptions() {
    return Object.keys(this.hass.states).filter(eid => {
      return ['switch', 'light', 'group'].includes( eid.substr(0, eid.indexOf('.')) )
    });
  }

  firstUpdated(){
    this._firstRendered = true;
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    // get header name
    let header = this._config.header;
    if (!header && this._config.entity){
      let name = this._config.entity.split('.')[1] || '';
      if (name){
        name = name.charAt(0).toUpperCase() + name.slice(1);
        header = name;
      }
    }

    return html`
      <div class="card-config">

        <div class=overall-config'>
          <paper-input
            label="Header"
            .value="${header}"
            .configValue="${"header"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>

        <div class='entities'>
          <paper-dropdown-menu 
            label="Entity"
            @value-changed="${this._valueChanged}" 
            .configValue="${"entity"}"
          >
            <paper-listbox 
              slot="dropdown-content" 
              .selected="${this.entityOptions.indexOf(this._config.entity)}"
            >
              ${
                this.entityOptions.map(entity => {
                  return html`<paper-item>${entity}</paper-item>`;
                })
              }
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-input
            label="Brightness Icon"
            .value="${this._config.brightness_icon}"
            .configValue="${"brightness_icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>

        <div class='entities'>
         <paper-input
            label="White Icon"
            .value="${this._config.white_icon}"
            .configValue="${"white_icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            label="Temperature Icon"
            .value="${this._config.temperature_icon}"
            .configValue="${"temperature_icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.color_wheel}
                .configValue="${"color_wheel"}"
              >Show Color Wheel</paper-checkbox>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.group}
                .configValue="${"group"}"
              >Group Entities</paper-checkbox>
            </div>

            <div class='checkbox-options'>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.persist_features}
                .configValue="${"persist_features"}"
              >Persist Features</paper-checkbox>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.brightness}
                .configValue="${"brightness"}"
              >Show Brightness</paper-checkbox>
            </div>

            <div class='checkbox-options'>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.color_temp}
                .configValue="${"color_temp"}"
              >Show Color Temp</paper-checkbox>
             <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.white_value}
                .configValue="${"white_value"}"
              >Show White Value</paper-checkbox>
            </div>

            <div class='checkbox-options'>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.color_picker}
                .configValue="${"color_picker"}"
              >Show Color Picker</paper-checkbox>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.effects_list}
                .configValue="${"effects_list"}"
              >Show Effects List</paper-checkbox>
            </div>

            <div class='checkbox-options'>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.full_width_sliders}
                .configValue="${"full_width_sliders"}"
              >Full Width Sliders</paper-checkbox>
              <paper-checkbox
                @checked-changed="${this._valueChanged}" 
                .checked=${this._config.show_slider_percent}
                .configValue="${"show_slider_percent"}"
              >Show Slider Percent</paper-checkbox>
            </div>
          </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass || !this._firstRendered) return;
    const { target: { configValue, value }, detail: { value: checkedValue} } = ev;

    if (checkedValue !== undefined || checkedValue !== null){
      this._config = { ...this._config, [configValue]: checkedValue };
    } else {
      this._config = { ...this._config, [configValue]: value };
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }
}

