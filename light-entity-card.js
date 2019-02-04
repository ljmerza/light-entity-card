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

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return 10;
  }

  /**
   * generates the CSS styles for this card
   * @return {TemplateResult}
   */
  get styles() {
    return html`
      .light-entity-card {
        padding: 16px;
      }

      .light-entity-card.group {
        padding-bottom: 0;
        padding-top: 0;
      }

      .light-entity-card__header {
        display: flex;
        justify-content: space-between;
        @apply --paper-font-headline;
        line-height: 40px;
        color: var(--primary-text-color);
        font-size: 24px;
      }

      .group .light-entity-card__header {
        font-size: 16px;
      }

      .group .light-entity-card-sliders {
        display: flex;
      }

      .light-entity-card__toggle {
        display: flex;
        cursor: pointer;
      }

      .light-entity-card__color-picker {
        display: flex;
        justify-content: space-around;
        --ha-color-picker-wheel-borderwidth: 5;
        --ha-color-picker-wheel-bordercolor: white;
        --ha-color-picker-wheel-shadow: none;
        --ha-color-picker-marker-borderwidth: 2;
        --ha-color-picker-marker-bordercolor: white;
      }

      .group .light-entity-card__color-picker {
        width: 50%;
        margin: 0 auto;
      }

      ha-labeled-slider { --paper-slider-input: {width: 100%} }

      .light-entity-card-color_temp {
          background-image: var(--ha-slider-background);
      }

      .group .light-entity-card-effectlist {
        margin-top: -25px;
      }

      .light-entity-card-center {
        display: flex;
        justify-content:center;
        cursor: pointer;
      }
    `;
  }

  constructor(){
    super();
  }
  
  get language() {
    return this.__hass.resources[this.__hass.language];
  }
  
  /**
   * check if the given entity is on or off
   * @param {LightEntity} entity
   * @return {Boolean}
   */
  isEntityOn(entity){
      return entity.state === 'on';
  }

  /**
   * bug in ha-color-picker dones't allow you to set desiredHsColor until
   * after it's in DOM so we wait until it's in the DOM and set it here
   * https://github.com/home-assistant/home-assistant-polymer/issues/2618
   */
  updated() {
    this._shownEntities.forEach(entity => {
      const id = this.generateColorPickerId(entity);
      const colorpickerElement = this.shadowRoot.querySelectorAll(`#${id}`);
    
      if(colorpickerElement.length && entity.attributes.hs_color){
        const h = entity.attributes.hs_color[0] || 0;
        const s = entity.attributes.hs_color[1] / 100 || 0;
        colorpickerElement[0].desiredHsColor = {h, s};
      }
    });
  }

  /**
   * checks and saves config of entity
   * @param {*} config 
   */
  setConfig(config) {
    if(!config.entity) throw Error(`entity required.`);
    
    this.config = {
      group: false, ...config
    };
  }

  updated(){
    this._isUpdating = false;
  }

  /**
   * generates a card for each given entiy in the config
   * @return {TemplateResult}
   */
  render() {
    const entity = this.__hass.states[this.config.entity];

    this._isUpdating = true;
    if (!entity) throw Error(`Invalid entity: ${this.config.entity}`);

    this._shownEntities = this.getEntitiesToShow(entity);

    return this._shownEntities.reduce((htmlTemplate, entity) => {
      htmlTemplate = html`
        ${htmlTemplate}
        ${this.createCard(entity)}
      `;

      return htmlTemplate;
      
    }, html`<style>${this.styles}</style>`);
  }

  /**
   * gets all the entities we need to build this card for
   * @param {LightEntity|GroupEntity} entity
   * @return {Array<LightEntity>}  
   */
  getEntitiesToShow(entity){
    if (entity.attributes.entity_id && Array.isArray(entity.attributes.entity_id))
      return entity.attributes.entity_id.map(entity_id => this.__hass.states[entity_id]);

    return [entity];
  }

  /**
   * creates a lignt entiy card for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createCard(entity){
    return html`
      <ha-card class='light-entity-card ${this.config.group ? 'group' : ''}'>
        ${this.createHeader(entity)}
        <div class='light-entity-card-sliders'>
          ${this.createBrightnessSlider(entity)}
          ${this.createColorTemperature(entity)}
          ${this.createWhiteValue(entity)}
        </div>
        ${this.createColorPicker(entity)}
        ${this.createEffectList(entity)}
      </ha-card>
    `;
  }

  /**
   * creates card header with state toggle for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createHeader(entity){
    const title = this.config.header || entity.attributes.friendly_name || entity.entity_id;

    return html`
      <div class="light-entity-card__header">
        <div class='light-entity-card__title'>${title}</div>
        <div class='light-entity-card-center'>
          <paper-toggle-button ?checked=${this.isEntityOn(entity)} @change=${(e) => this.setToggle(e, entity)}>
          </paper-toggle-button>
        </div>
      </div>
    `;
  }

  /**
   * creates brightness slider
   * @return {TemplateResult}
   */
  createBrightnessSlider(entity){
    if (!this.isEntityOn(entity) || !(LightEntityCard.featureNames.brightness & entity.attributes.supported_features))
      return html``;
    
    return html`
      <div class='control brightness light-entity-card-center'>
        <ha-labeled-slider 
          .value='${entity.attributes.brightness}'
          @value-changed="${(e) => this.setBrightness(e, entity)}"
          icon="hass:weather-sunny"
          min="1"
          max="255"
        >
      </div>
    `;
  }

  /**
   * creates color temperature slider for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createColorTemperature(entity) {
    if (!this.isEntityOn(entity) || !(LightEntityCard.featureNames.colorTemp & entity.attributes.supported_features))
      return html``;

    return html`
      <div class="control color_temp light-entity-card-center">
        <ha-labeled-slider
          .value=${entity.attributes.color_temp}
          icon="hass:thermometer"
          min="${entity.attributes.min_mireds}"
          max="${entity.attributes.max_mireds}"
          @value-changed="${(e) => this.setColorTemp(e, entity)}"
          class='light-entity-card-color_temp'
        ></ha-labeled-slider>
      </div>
    `;
  }

  /**
   * creates white value slider for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createWhiteValue(entity) {
    if (!this.isEntityOn(entity) || !(LightEntityCard.featureNames.whiteValue & entity.attributes.supported_features))
      return html``;

    return html`
      <div class="control white_value light-entity-card-center">
        <ha-labeled-slider
          icon="hass:file-word-box"
          max="255"
          .value="${entity.attributes.white_value}"
          @value-changed="${(e) => this.setWhiteValue(e, entity)}"
        ></ha-labeled-slider>
      </div>
    `;
  }

  /**
   * creates effect list dropdown for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createEffectList(entity){
    if (!this.isEntityOn(entity) || !(LightEntityCard.featureNames.effectList & entity.attributes.supported_features))
      return html``;

    const listItems = entity.attributes.effect_list.map(effect => html`<paper-item>${effect}</paper-item>`);
    const selectedIndex = entity.attributes.effect_list.indexOf(entity.attributes.effect);
    const caption = this.language['ui.card.light.effect'];

    return html`
      <div class="control effect_list light-entity-card-center light-entity-card-effectlist">
        <paper-dropdown-menu @value-changed=${(e) => this.setEffect(e, entity)} label="${caption}">
          <paper-listbox selected="${selectedIndex}" slot="dropdown-content" placeholder="${caption}">
            ${listItems}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  /**
   * creates color picker wheel for a given entity
   * @param {LightEntity} entity
   * @return {TemplateResult}
   */
  createColorPicker(entity){
    if (!this.isEntityOn(entity) || !(LightEntityCard.featureNames.color & entity.attributes.supported_features))
      return html``;

    return html`
      <div class='light-entity-card__color-picker'>
        <ha-color-picker 
        id="${this.generateColorPickerId(entity)}"
        class='control color' 
        saturation-segments=8 
        hue-segments=24 
        throttle=500
        @colorselected=${(e) => this.setColorPicker(e, entity)}
      >
        </ha-color-picker>
      </div>
    `;
  }

  generateColorPickerId(entity){
    const entity_id = entity.entity_id.replace('.', '-');
    return `light-entity-card-${entity_id}`;
  }

  /**
   * change to hs color for a given entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setColorPicker(event, entity) {
    this.callEntityService({ hs_color: [event.detail.hs.h, event.detail.hs.s * 100] }, entity);
  }

  /**
   * set the new brightness from the slider for a given entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setBrightness(event, entity){
    const brightness = parseInt(event.target.value, 10);
    if (isNaN(brightness)) return;

    this.callEntityService({ brightness: brightness }, entity);
  }

  /**
   * sets the current Color Temperature selected for a given entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setColorTemp(event, entity) {
    let colorTemp = parseInt(event.target.value, 10);
    if (isNaN(colorTemp)) return;
    
    this.callEntityService({ color_temp: colorTemp }, entity);
  }

  /**
   * sets the current white Value selected for a given entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setWhiteValue(event, entity) {
    const whiteValue = parseInt(event.target.value, 10);
    if (isNaN(whiteValue)) return;

    this.callEntityService({ white_value: whiteValue }, entity);
  }

  /**
   * sets the toggle state based on the given entity state
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setToggle(event, entity){
    const state = this.isEntityOn(entity) ? LightEntityCard.cmdToggle.off : LightEntityCard.cmdToggle.on;
    this.callEntityService({}, entity, state);
  }

  /**
   * sets the current effect selected for an entity
   * @param {CustomEvent} event
   * @param {LightEntity} entity
   */
  setEffect(event, entity){
    this.callEntityService({ effect: event.detail.value }, entity);
  }

  /**
   * call light service to update a state of an entity
   * @param {Object} payload
   * @param {LightEntity} entity
   * @param {String} state
   */
  callEntityService(payload, entity, state){
    if(this._isUpdating) return;
    const entityType = entity.entity_id.split('.')[0];

    this.hass.callService(entityType, state || LightEntityCard.cmdToggle.on, {
      entity_id: entity.entity_id,
      ...payload
    });
  }
}

customElements.define('light-entity-card', LightEntityCard);