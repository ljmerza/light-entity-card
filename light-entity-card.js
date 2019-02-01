var LitElement = LitElement || Object.getPrototypeOf(customElements.get("hui-error-entity-row"));
var html = LitElement.prototype.html;

class LightEntityCard extends LitElement {

  static get properties() {
    return {
    	hass: Object,
      config: Object
    };
  }

  static get featureNames(){
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
      off: 'turn_off'
    };
  }

  constructor(){
    super();
    
    this.setToggle = this.setToggle.bind(this);
    this.setWhiteValue = this.setWhiteValue.bind(this);
    this.setColorTemp = this.setColorTemp.bind(this);
    this.setBrightness = this.setBrightness.bind(this);
    this.setColorPicker = this.setColorPicker.bind(this);
    this.setEffect = this.setEffect.bind(this);
  }

  get isOnState(){
    const entity = this.__hass.states[this.config.entity];
    return entity.state === 'on';
  }

  get language() {
    return this.__hass.resources[this.__hass.language];
  }

  /**
   * bug in ha-color-picker dones't allow you to set desiredHsColor until
   * after it's in DOM so we wait until it's in the DOM and set it here
   * https://github.com/home-assistant/home-assistant-polymer/issues/2618
   */
  updated() {
    const colorpickerElement = this.shadowRoot.querySelectorAll('ha-color-picker');

    if (colorpickerElement.length && this.state.attributes.hs_color){
      const h = this.state.attributes.hs_color[0] || 0;
      const s = this.state.attributes.hs_color[1] / 100 || 0;
      colorpickerElement[0].desiredHsColor = {h, s};
    }
  }

  /**
   * checks and saves config of entity
   * @param {*} config 
   */
  setConfig(config) {
    if(!config.entity) throw Error(`entity required.`);
    this.config = {...config};
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {
    this.state = this.__hass.states[this.config.entity];
    if(!this.state) throw Error(`Invalid entity: ${this.config.entity}`);

    return html`
      <ha-card class='light-enitity-card'>
        <style>${this.renderStyle()}</style>

        ${this.createHeader()}
        ${this.createBrightnessSlider()}
        ${this.createColorTemperature()}
        ${this.createWhiteValue()}
        ${this.createColorPicker()}
        ${this.createEffectList()}
      </ha-card>
    `;
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return 10;
  }

  /**
   * lit-html css parser isn't included in HA so use wrapper here until it is
   */
  renderStyle() {
    return this.styles;
  }

  /**
   * generates the CSS styles for this card
   * @return {TemplateResult}
   */
  get styles() {
    return html`
        .light-enitity-card {
          padding: 16px;
        }

        .light-enitity-card__header {
          display: flex;
          justify-content: space-between;
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
          font-size: 24px;
        }

        .light-enitity-card__toggle {
          display: flex;
          cursor: pointer;
        }

        .light-enitity-card__color-picker {
          display: flex;
          justify-content: space-around;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .light-entity-card-color_temp {
            background-image: var(--ha-slider-background);
        }

        .light-entity-card-center {
          display: flex;
          justify-content:center;
          cursor: pointer;
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
      <div class="light-enitity-card__header">
        <div class='light-enitity-card__title'>${title}</div>
        <div class='light-entity-card-center'>
          <paper-toggle-button ?checked=${this.isOnState} @change=${this.setToggle}>
          </paper-toggle-button>
        </div>
      </div>
    `;
  }

  /**
   * creates brightness slider
   * @return {TemplateResult}
   */
  createBrightnessSlider(){
    if (!this.isOnState || !(LightEntityCard.featureNames.brightness & this.state.attributes.supported_features))
      return html``;
    
    return html`
      <div class='control brightness light-entity-card-center'>
        <ha-labeled-slider 
          .value='${this.state.attributes.brightness}' 
          @value-changed="${this.setBrightness}"
          icon="hass:weather-sunny"
          min="1"
          max="255"
        >
      </div>
    `;
  }

  /**
   * creates color temperature slider
   * @return {TemplateResult}
   */
  createColorTemperature() {
    if (!this.isOnState || !(LightEntityCard.featureNames.colorTemp & this.state.attributes.supported_features))
      return html``;

    return html`
      <div class="control color_temp light-entity-card-center">
        <ha-labeled-slider
          .value=${this.state.attributes.color_temp}
          icon="hass:thermometer"
          min="${this.state.attributes.min_mireds}"
          max="${this.state.attributes.max_mireds}"
          @value-changed="${this.setColorTemp}"
          class='light-entity-card-color_temp'
        ></ha-labeled-slider>
      </div>
    `;
  }

  /**
   * creates white value slider
   * @return {TemplateResult}
   */
  createWhiteValue() {
    if (!this.isOnState || !(LightEntityCard.featureNames.whiteValue & this.state.attributes.supported_features))
      return html``;

    return html`
      <div class="control white_value light-entity-card-center">
        <ha-labeled-slider
          icon="hass:file-word-box"
          max="255"
          .value="${this.state.attributes.white_value}"
          @value-changed="${this.setWhiteValue}"
        ></ha-labeled-slider>
      </div>
    `;
  }

  /**
   * creates effect list dropdown
   * @return {TemplateResult}
   */
  createEffectList(){
    if (!this.isOnState || !(LightEntityCard.featureNames.effectList & this.state.attributes.supported_features))
      return html``;

    const listItems = this.state.attributes.effect_list.map(effect => html`<paper-item>${effect}</paper-item>`);
    const selectedIndex = this.state.attributes.effect_list.indexOf(this.state.attributes.effect);
    const caption = this.language['ui.card.light.effect'];

    return html`
      <div class="control effect_list light-entity-card-center">
        <paper-dropdown-menu @value-changed=${this.setEffect} label="${caption}">
          <paper-listbox selected="${selectedIndex}" slot="dropdown-content">
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
    if (!this.isOnState || !(LightEntityCard.featureNames.color & this.state.attributes.supported_features))
      return html``;

    return html`
      <div class='light-enitity-card__color-picker'>
        <ha-color-picker 
        class='control color' 
        saturation-segments=8 
        hue-segments=24 
        throttle=500
        @colorselected=${this.setColorPicker}
      >
        </ha-color-picker>
      </div>
    `;
  }

  /**
   * called when color wheel is picked
   * @param {CustomEvent} event
   */
  setColorPicker(event) {
    this.callEntityService({ hs_color: [event.detail.hs.h, event.detail.hs.s * 100] }, "turn_on");
  }

  /**
   * set the new brightness from the slider
   * @param {CustomEvent} event
   */
  setBrightness(event){
    const brightness = parseInt(event.target.value, 10);
    if (isNaN(brightness)) return;

    this.callEntityService({ brightness: brightness }, "turn_on");
  }

  /**
   * sets the current Color Temperature selected
   * @param {CustomEvent} event
   */
  setColorTemp(event) {
    let colorTemp = parseInt(event.target.value, 10);
    if (isNaN(colorTemp)) return;
    
    this.callEntityService({ color_temp: colorTemp }, "turn_on");
  }

  /**
   * sets the current white Value selected
   * @param {CustomEvent} event
   */
  setWhiteValue(event) {
    const whiteValue = parseInt(event.target.value, 10);
    if (isNaN(whiteValue)) return;

    this.callEntityService({ white_value: whiteValue }, "turn_on");
  }

  /**
   * sets the toggle state based on the current entity state
   */
  setToggle(){
    const state = this.isOnState ? LightEntityCard.cmdToggle.off : LightEntityCard.cmdToggle.on;
    this.callEntityService({}, state);
  }

  /**
   * sets the current effect selected
   * @param {CustomEvent} event
   */
  setEffect(event){
    this.callEntityService({ effect: event.detail.value }, LightEntityCard.cmdToggle.on);
  }

  /**
   * 
   * @param {Object} payload
   * @param {String} state
   */
  callEntityService(payload, state){
    this.hass.callService("light", state, {
      entity_id: this.state.entity_id,
      ...payload
    });
  }
}

customElements.define('light-entity-card', LightEntityCard);