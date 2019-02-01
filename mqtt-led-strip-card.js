var LitElement = LitElement || Object.getPrototypeOf(customElements.get("hui-error-entity-row"));
var html = LitElement.prototype.html;

class MqttLedStripCard extends LitElement {

	static get properties() {
   	return {
    	hass: Object,
    	config: Object,
    };
  }

  constructor(){
    super();

    this.setColorPicked = this.setColorPicked.bind(this);
    this.setBrightness = this.setBrightness.bind(this);
    this.setToggle = this.setToggle.bind(this);
    this.setEffect = this.setEffect.bind(this);

    this.cmdToggle = {
      on: 'ON',
      off: 'OFF'
    };

    this._updated = false;
  }

  get isOnState(){
    const entity = this.__hass.states[this.config.entity];
    return entity.state === 'on';
  }

  /**
   * let the mqtt updater know we are done building UI
   */
  updated() {
    this._updated = true;

    // bug in ha-color-picker dones't allow you to set desiredHsColor until  
    // after it's in DOM so we wait until it's in the DOM and set it here
    // https://github.com/home-assistant/home-assistant-polymer/issues/2618
    const colorpickerElement = this.shadowRoot.querySelectorAll('ha-color-picker');

    if(this.isOnState && colorpickerElement.length){
      const h = this.state.attributes.hs_color[0];
      const s = this.state.attributes.hs_color[1] / 100;
      colorpickerElement[0].desiredHsColor = {h, s};
    }
  }

  shouldUpdate(){
    return !this._updated;
  }

  setConfig(config) {
    if(!config.entity) throw Error(`entity required.`);
    if(!config.command_topic) throw Error(`command_topic required`);

    this.config = {
      brightness: true,
      color_wheel: true,
      ...config
    };
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {
    this.state = this.__hass.states[this.config.entity];
    if(!this.state) throw Error(`Invalid entity: ${this.config.entity}`);

    this._currentView = html`
      <ha-card class='mqtt-led-strip-card'>
        <style>${this.renderStyle()}</style>

        ${this.createHeader()}
        ${this.isOnState && this.config.brightness && this.createBrightnessSlider() || ''}
        ${this.isOnState && this.config.color_wheel && this.createColorPicker() || ''}
        ${this.isOnState && this.state.attributes.effect_list && this.createEntityList() || ''}
      </ha-card>
    `;

    return this._currentView;
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return 10;
  }

  static get styles() {

  }

  /**
   * generates the CSS styles for this card
   * @return {TemplateResult}
   */
  renderStyle() {
    return html`
        .mqtt-led-strip-card {
          padding: 16px;
        }

        .mqtt-led-strip-card__header {
          display: flex;
          justify-content: space-between;
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
          font-size: 24px;
        }

        .mqtt-led-strip-card__toggle {
          display: flex;
          cursor: pointer;
        }

        .mqtt-led-strip-card__color-picker {
          display: flex;
          justify-content: space-around;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .mqtt-led-strip-card_slider_items {
          display: flex;
          justify-content:center;
        }

        .mqtt-led-strip-card_slider_items ha-slider {
          cursor: pointer;
        }

        .mqtt-led-strip-card_slider_items iron-icon {
          margin-top: 4px;
        }
        
        .mqtt-led-strip-card__dropdown {
          cursor: pointer;
          display: flex;
          justify-content:center;
        }
    `;
  }

  /**
   * creates card header with state toggle
   * @return {TemplateResult}
   */
  createHeader(){
    const title = this.config.header || this.state.attributes.friendly_name || this.state.entity_id;

    return html`
      <div class="mqtt-led-strip-card__header">
        <div class='mqtt-led-strip-card__title'>${title}</div>
        <div class='mqtt-led-strip-card__toggle'>
          <paper-toggle-button ?checked=${this.isOnState} @change=${this.setToggle}>
          </paper-toggle-button>
        </div>
      </div>
    `;
  }

  /**
   * creates LED brightness slider
   * @return {TemplateResult}
   */
  createBrightnessSlider(){
    const brightness = this.state.attributes.brightness && (this.state.attributes.brightness/255)*100 || 0;
   
    return html`
      <div class='mqtt-led-strip-card_slider_items'>
        <iron-icon icon="hass:weather-sunny"></iron-icon>
        <ha-slider value='${brightness}' @value-changed="${this.setBrightness}">
      </div>
    `;
  }

  /**
   * creates effect list dropdown
   * @return {TemplateResult}
   */
  createEntityList(){
    const listItems = this.state.attributes.effect_list.map(effect => html`<paper-item>${effect}</paper-item>`);
    const selected = this.state.attributes.effect_list.indexOf(this.state.attributes.effect);

    return html`
      <div class='mqtt-led-strip-card__dropdown'>
        <paper-dropdown-menu @value-changed=${this.setEffect} placeholder='Effect'>
          <paper-listbox selected="${selected}" slot="dropdown-content">
            ${listItems}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  /**
   * creates color picker wheel
   * @return {TemplateResult}
   */
  createColorPicker(){
    return html`
      <div class='mqtt-led-strip-card__color-picker'>
        <ha-color-picker 
        class='control color' 
        saturation-segments=8 
        hue-segments=24 
        throttle=500
        @colorselected=${this.setColorPicked}
      >
        </ha-color-picker>
      </div>
    `;
  }

  /**
   * called when color wheel is picked
   * @param {CustomEvent} event
   */
  setColorPicked(event) {
  	const hsl = {
  		h: event.detail.hs.h / 360, 
      	s: event.detail.hs.s, 
      	l: this.state.attributes.brightness / 255
  	}

    const [r, g, b] = this.hslToRgb(hsl);
    this.setEntityState({color: {r,g,b}});
  }

  /**
   * set the new brightness from the slider
   * @param {CustomEvent} event
   */
  setBrightness(event){
    const brightness = event.detail.value * (255/100);
    this.setEntityState({brightness});
  }

  /**
   * sets the toggle state
   * @param {CustomEvent} event
   */
  setToggle(event){
    console.log({event, isOnState: this.isOnState});
    const state = this.isOnState ? this.cmdToggle.off : this.cmdToggle.on;
    this.setEntityState({state});
  }

  /**
   * sets the current effect selected
   * @param {CustomEvent} event
   */
  setEffect(event){
    this.setEntityState({effect: event.detail.value});
  }

  setEntityState(newState){
    console.log({newState});
    const payload = {
      topic: this.config.command_topic,
      payload: JSON.stringify(newState)
    };

    this.__hass.callService('mqtt', 'publish', payload)
      .then(() => {

        // if changing state then update UI
        if(newState.state) this._updated = false;
      })
      .catch(error => {
        throw new Error(`Could not publish to mqtt: ${error}`);
      });
  }

  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param {Number} h The hue
   * @param {Number} s The saturation
   * @param {Number} l The lightness
   * @return {Array<Number>} The RGB representation
   */
  hslToRgb({h, s, l}) {
    let r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic

    } else {

      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [ r * 255, g * 255, b * 255 ];
  }
}

customElements.define('mqtt-led-strip-card', MqttLedStripCard);