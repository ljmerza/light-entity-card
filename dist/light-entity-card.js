/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildElementDefinitions.js"
/*!****************************************!*\
  !*** ./src/buildElementDefinitions.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildElementDefinitions = (elements, constructor) => elements.reduce((aggregate, element) => {
  if (element.defineId) {
     
    aggregate[element.defineId] = element;
  } else {
    element.promise.then((clazz) => {
      if (constructor.registry.get(element.name) === undefined) {
        constructor.registry.define(element.name, clazz);
      }
    });
  }
  return aggregate;
}, {});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildElementDefinitions);


/***/ },

/***/ "./src/defaults.js"
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  shorten_cards: false,
  consolidate_entities: false,
  child_card: false,
  hide_header: false,
  show_header_icon: false,
  header: '',

  persist_features: false,
  brightness: true,
  color_temp: true,
  white_value: true,
  warm_white_value: true,
  color_picker: true,
  effects_list: true,
  speed: true,
  intensity: true,

  force_features: false,

  show_slider_percent: false,
  full_width_sliders: false,
  color_temp_in_kelvin: false,
  transition: 0,

  brightness_icon: 'weather-sunny',
  white_icon: 'file-word-box',
  warm_white_icon: 'weather-sunset',
  temperature_icon: 'thermometer',
  speed_icon: 'speedometer',
  intensity_icon: 'transit-connection-horizontal',
});


/***/ },

/***/ "./src/globalElementLoader.js"
/*!************************************!*\
  !*** ./src/globalElementLoader.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const globalElementLoader = name => ({
  name,
  promise: customElements.whenDefined(name).then(() => customElements.get(name)),
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalElementLoader);


/***/ },

/***/ "./src/index-editor.js"
/*!*****************************!*\
  !*** ./src/index-editor.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LightEntityCardEditor),
/* harmony export */   fireEvent: () => (/* binding */ fireEvent)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _lit_labs_scoped_registry_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit-labs/scoped-registry-mixin */ "./node_modules/@lit-labs/scoped-registry-mixin/development/scoped-registry-mixin.js");
/* harmony import */ var _style_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-editor */ "./src/style-editor.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults */ "./src/defaults.js");
/* harmony import */ var _buildElementDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildElementDefinitions */ "./src/buildElementDefinitions.js");
/* harmony import */ var _globalElementLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globalElementLoader */ "./src/globalElementLoader.js");







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

class LightEntityCardEditor extends (0,_lit_labs_scoped_registry_mixin__WEBPACK_IMPORTED_MODULE_1__.ScopedRegistryHost)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement) {
  static get elementDefinitions() {
    return (0,_buildElementDefinitions__WEBPACK_IMPORTED_MODULE_4__["default"])([
      (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_5__["default"])('ha-checkbox'),
      (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_5__["default"])('ha-formfield'),
      (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_5__["default"])('ha-form-string'),
      (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_5__["default"])('ha-select'),
      (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_5__["default"])('mwc-list-item'),
    ], LightEntityCardEditor);
  }

  static get styles() {
    return _style_editor__WEBPACK_IMPORTED_MODULE_2__["default"];
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  setConfig(config) {
    this._config = {
      ..._defaults__WEBPACK_IMPORTED_MODULE_3__["default"],
      ...config,
    };
  }

  get entityOptions() {
    const allEntities = Object.keys(this.hass.states).filter(eid => ['switch', 'light', 'group'].includes(eid.substr(0, eid.indexOf('.'))));

    allEntities.sort();
    return allEntities;
  }

  firstUpdated() {
    this._firstRendered = true;
  }

  render() {
    if (!this.hass || !this._config) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
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

     
     
    const options = this.entityOptions.map(entity => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<mwc-list-item value="${entity}" ?selected=${entity === this._config.entity}>${entity}</mwc-list-item>`);

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="card-config">

        <div class=overall-config'>
          <ha-form-string
            .schema=${{ name: 'header', type: 'string' }}
            label="Header"
            .data="${header}"
            .configValue="${'header'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-select
            label="Entity"
            @selected="${this.configChanged}" 
            @closed="${e => e.stopPropagation()}" 
            .configValue="${'entity'}"
          >
            ${options}
          </ha-select>
          <ha-form-string
            .schema=${{ name: 'brightness_icon', type: 'string' }}
            label="Brightness Icon"
            .data="${this._config.brightness_icon}"
            .configValue="${'brightness_icon'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
         <ha-form-string
           .schema=${{ name: 'white_icon', type: 'string' }}
           label="White Icon"
            .data="${this._config.white_icon}"
            .configValue="${'white_icon'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{ name: 'warm_white_icon', type: 'string' }}
            label="Warm White Icon"
            .data="${this._config.warm_white_icon}"
            .configValue="${'warm_white_icon'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-form-string
            .schema=${{ name: 'temperature_icon', type: 'string' }}
            label="Temperature Icon"
            .data="${this._config.temperature_icon}"
            .configValue="${'temperature_icon'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{ name: 'transition', type: 'string' }}
            label="Transition (seconds)"
            .data="${String(this._config.transition || '')}"
            .configValue="${'transition'}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
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
                  @change="${this.checkboxConfigChanged}"
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
              <ha-formfield label="Color Temp in Kelvin">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_temp_in_kelvin}
                  .value="${'color_temp_in_kelvin'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show White Channel">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${'white_value'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Warm White">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.warm_white_value}
                  .value="${'warm_white_value'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Speed">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.speed}
                  .value="${'speed'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Intensity">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.intensity}
                  .value="${'intensity'}"
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
              <ha-formfield label="Show Brightness %">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_brightness_percent}
                  .value="${'show_brightness_percent'}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Color Temp %">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_color_temp_percent}
                  .value="${'show_color_temp_percent'}"
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
              <ha-formfield label="Show Header Icon">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_header_icon}
                  .value="${'show_header_icon'}"
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

            <div class='checkbox-options'>
              <ha-formfield label="Force Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.force_features}
                  .value="${'force_features'}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
            <ha-formfield label="Consolidate Entities">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.consolidate_entities}
                .value="${'consolidate_entities'}"
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

    if (checkedValue !== undefined && checkedValue !== null) {
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


/***/ },

/***/ "./src/style-editor.js"
/*!*****************************!*\
  !*** ./src/style-editor.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


const style = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
  .entities {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  .entities ha-formfield {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .checkbox-options {
    display: flex;
  }
  
  mwc-select {
    width: 100%;
  }

  .checkbox-options ha-formfield,
  .entities mwc-switch,
  .entities ha-form-string {
    padding-right: 2%;
    width: 48%;
  }

  .checkbox-options ha-formfield {
    margin-top: 10px;
  }

  .overall-config {
    margin-bottom: 20px;
  }
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);


/***/ },

/***/ "./src/style.js"
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


const style = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
  .light-entity-card {
    padding: 16px;
  }

  .light-entity-child-card {
    box-shadow: none !important;
    padding: 0 !important;
  }

  .light-entity-card.group {
    padding-bottom: 5;
    padding-top: 0;
  }

  .ha-slider-full-width ha-slider {
    width: 100%;
  }

  .percent-slider {
    color: var(--primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    min-width: 40px;
    text-align: right;
  }

  .light-entity-card__header {
    display: flex;
    justify-content: space-between;
    @apply --paper-font-headline;
    line-height: 40px;
    color: var(--primary-text-color);
  }

  .group .light-entity-card__header {
  }

  .light-entity-card-sliders > div {
    margin-top: 10px;
  }

  .group .light-entity-card-sliders > div {
    margin-top: 0px;
  }

  .light-entity-card__toggle {
    display: flex;
    cursor: pointer;
  }

  .light-entity-card__color-picker {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .light-entity-card__color-picker ha-hs-color-picker {
    max-width: 300px;
    width: 100%;
  }
  
  .light-entity-card-color_temp {
    background-image: var(--ha-slider-background, linear-gradient(to right, #a6d1ff, #ffb74d));
    border-radius: 4px;
  }

  .light-entity-card-color_temp--kelvin {
    background-image: var(--ha-slider-background, linear-gradient(to right, #ffb74d, #a6d1ff));
  }

  .light-entity-card-effectlist {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .group .light-entity-card-effectlist {
    padding-bottom: 20px;
  }

  .light-entity-card-center {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);


/***/ },

/***/ "./node_modules/@lit-labs/scoped-registry-mixin/development/scoped-registry-mixin.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit-labs/scoped-registry-mixin/development/scoped-registry-mixin.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopedRegistryHost: () => (/* binding */ ScopedRegistryHost)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function ScopedRegistryHost(superclass) {
    return class ScopedRegistryMixin extends superclass {
        createRenderRoot() {
            const constructor = this.constructor;
            const { registry, elementDefinitions, shadowRootOptions } = constructor;
            if (elementDefinitions && !registry) {
                constructor.registry = new CustomElementRegistry();
                Object.entries(elementDefinitions).forEach(([tagName, klass]) => constructor.registry.define(tagName, klass));
            }
            const renderRoot = (this.renderOptions.creationScope = this.attachShadow({
                ...shadowRootOptions,
                customElements: constructor.registry,
            }));
            (0,_lit_reactive_element_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
            return renderRoot;
        }
    };
}
//# sourceMappingURL=scoped-registry-mixin.js.map

/***/ },

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
// Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic the native feature](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        for (const s of styles) {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        }
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets ||
    (NODE_MODE && global.CSSStyleSheet === undefined)
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ },

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
const { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, } = Object;
const NODE_MODE = false;
// Lets a minifier replace globalThis references with a minified name
const global = globalThis;
if (NODE_MODE) {
    global.customElements ??= customElements;
}
const DEV_MODE = true;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    global.litIssuedWarnings ??= new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!global.litIssuedWarnings.has(warning) &&
            !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    queueMicrotask(() => {
        issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
        // Issue polyfill support warning.
        if (global.ShadyDOM?.inUse && polyfillSupport === undefined) {
            issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
                `the \`polyfill-support\` module has not been loaded.`);
        }
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => !is(value, old);
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    useDefault: false,
    hasChanged: notEqual,
};
// Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
Symbol.metadata ??= Symbol('metadata');
// Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
global.litPropertyMetadata ??= new WeakMap();
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclasses to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
 extends HTMLElement {
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        this.__prepare();
        (this._initializers ??= []).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // Ensure we've created all properties
        this.finalize();
        // this.__attributeToPropertyMap is only undefined after finalize() in
        // ReactiveElement itself. ReactiveElement.observedAttributes is only
        // accessed with ReactiveElement as the receiver when a subclass or mixin
        // calls super.observedAttributes
        return (this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()]);
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // If this is a state property, force the attribute to false.
        if (options.state) {
            options.attribute = false;
        }
        this.__prepare();
        // Whether this property is wrapping accessors.
        // Helps control the initial value change and reflection logic.
        if (this.prototype.hasOwnProperty(name)) {
            options = Object.create(options);
            options.wrapped = true;
        }
        this.elementProperties.set(name, options);
        if (!options.noAccessor) {
            const key = DEV_MODE
                ? // Use Symbol.for in dev mode to make it easier to maintain state
                    // when doing HMR.
                    Symbol.for(`${String(name)} (@property() cache)`)
                : Symbol();
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                defineProperty(this.prototype, name, descriptor);
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
            get() {
                return this[key];
            },
            set(v) {
                this[key] = v;
            },
        };
        if (DEV_MODE && get == null) {
            if ('value' in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
                throw new Error(`Field ${JSON.stringify(String(name))} on ` +
                    `${this.name} was declared as a reactive property ` +
                    `but it's actually declared as a value on the prototype. ` +
                    `Usually this is due to using @property or @state on a method.`);
            }
            issueWarning('reactive-property-without-getter', `Field ${JSON.stringify(String(name))} on ` +
                `${this.name} was declared as a reactive property ` +
                `but it does not have a getter. This will be an error in a ` +
                `future version of Lit.`);
        }
        return {
            get,
            set(value) {
                const oldValue = get?.call(this);
                set?.call(this, value);
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
    }
    /**
     * Initializes static own properties of the class used in bookkeeping
     * for element properties, initializers, etc.
     *
     * Can be called multiple times by code that needs to ensure these
     * properties exist before using them.
     *
     * This method ensures the superclass is finalized so that inherited
     * property metadata can be copied down.
     * @nocollapse
     */
    static __prepare() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties', this))) {
            // Already prepared
            return;
        }
        // Finalize any superclasses
        const superCtor = getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [...superCtor._initializers];
        }
        // Initialize elementProperties from the superclass
        this.elementProperties = new Map(superCtor.elementProperties);
    }
    /**
     * Finishes setting up the class so that it's ready to be registered
     * as a custom element and instantiated.
     *
     * This method is called by the ReactiveElement.observedAttributes getter.
     * If you override the observedAttributes getter, you must either call
     * super.observedAttributes to trigger finalization, or call finalize()
     * yourself.
     *
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this))) {
            return;
        }
        this.finalized = true;
        this.__prepare();
        // Create properties from the static properties block:
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            const propKeys = [
                ...getOwnPropertyNames(props),
                ...getOwnPropertySymbols(props),
            ];
            for (const p of propKeys) {
                this.createProperty(p, props[p]);
            }
        }
        // Create properties from standard decorator metadata:
        const metadata = this[Symbol.metadata];
        if (metadata !== null) {
            const properties = litPropertyMetadata.get(metadata);
            if (properties !== undefined) {
                for (const [p, options] of properties) {
                    this.elementProperties.set(p, options);
                }
            }
        }
        // Create the attribute-to-property map
        this.__attributeToPropertyMap = new Map();
        for (const [p, options] of this.elementProperties) {
            const attr = this.__attributeNameForProperty(p, options);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        if (DEV_MODE) {
            if (this.hasOwnProperty('createProperty')) {
                issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' +
                    'The override will not be called with standard decorators');
            }
            if (this.hasOwnProperty('getPropertyDescriptor')) {
                issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' +
                    'The override will not be called with standard decorators');
            }
        }
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    constructor() {
        super();
        this.__instanceProperties = undefined;
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this.__initialize();
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */
    __initialize() {
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        // This enqueues a microtask that must run before the first update, so it
        // must be called before requestUpdate()
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        this.constructor._initializers?.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        (this.__controllers ??= new Set()).add(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            controller.hostConnected?.();
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        this.__controllers?.delete(controller);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs.
     */
    __saveInstanceProperties() {
        const instanceProperties = new Map();
        const elementProperties = this.constructor
            .elementProperties;
        for (const p of elementProperties.keys()) {
            if (this.hasOwnProperty(p)) {
                instanceProperties.set(p, this[p]);
                delete this[p];
            }
        }
        if (instanceProperties.size > 0) {
            this.__instanceProperties = instanceProperties;
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        const renderRoot = this.shadowRoot ??
            this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        // Create renderRoot before controllers `hostConnected`
        this.renderRoot ??=
            this.createRenderRoot();
        this.enableUpdating(true);
        this.__controllers?.forEach((c) => c.hostConnected?.());
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        this.__controllers?.forEach((c) => c.hostDisconnected?.());
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value) {
        const elemProperties = this.constructor.elementProperties;
        const options = elemProperties.get(name);
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = options.converter?.toAttribute !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.includes('migration') &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : options.converter?.fromAttribute !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            const convertedValue = converter.fromAttribute(value, options.type);
            this[propName] =
                convertedValue ??
                    this.__defaultValues?.get(propName) ??
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    convertedValue;
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @param useNewValue if true, the newValue argument is used instead of
     *     reading the property value. This is important to use if the reactive
     *     property is a standard private accessor, as opposed to a plain
     *     property, since private members can't be dynamically read by name.
     * @param newValue the new value of the property. This is only used if
     *     `useNewValue` is true.
     * @category updates
     */
    requestUpdate(name, oldValue, options, useNewValue = false, newValue) {
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            if (DEV_MODE && name instanceof Event) {
                issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
            }
            const ctor = this.constructor;
            if (useNewValue === false) {
                newValue = this[name];
            }
            options ??= ctor.getPropertyOptions(name);
            const changed = (options.hasChanged ?? notEqual)(newValue, oldValue) ||
                // When there is no change, check a corner case that can occur when
                // 1. there's a initial value which was not reflected
                // 2. the property is subsequently set to this value.
                // For example, `prop: {useDefault: true, reflect: true}`
                // and el.prop = 'foo'. This should be considered a change if the
                // attribute is not set because we will now reflect the property to the attribute.
                (options.useDefault &&
                    options.reflect &&
                    newValue === this.__defaultValues?.get(name) &&
                    !this.hasAttribute(ctor.__attributeNameForProperty(name, options)));
            if (changed) {
                this._$changeProperty(name, oldValue, options);
            }
            else {
                // Abort the request if the property should not be considered changed.
                return;
            }
        }
        if (this.isUpdatePending === false) {
            this.__updatePromise = this.__enqueueUpdate();
        }
    }
    /**
     * @internal
     */
    _$changeProperty(name, oldValue, { useDefault, reflect, wrapped }, initializeValue) {
        // Record default value when useDefault is used. This allows us to
        // restore this value when the attribute is removed.
        if (useDefault && !(this.__defaultValues ??= new Map()).has(name)) {
            this.__defaultValues.set(name, initializeValue ?? oldValue ?? this[name]);
            // if this is not wrapping an accessor, it must be an initial setting
            // and in this case we do not want to record the change or reflect.
            if (wrapped !== true || initializeValue !== undefined) {
                return;
            }
        }
        // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
        // vs just Map.set()
        if (!this._$changedProperties.has(name)) {
            // On the initial change, the old value should be `undefined`, except
            // with `useDefault`
            if (!this.hasUpdated && !useDefault) {
                oldValue = undefined;
            }
            this._$changedProperties.set(name, oldValue);
        }
        // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `__reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.
        if (reflect === true && this.__reflectingProperty !== name) {
            (this.__reflectingProperties ??= new Set()).add(name);
        }
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        const result = this.performUpdate();
        if (DEV_MODE &&
            this.constructor.enabledWarnings.includes('async-perform-update') &&
            typeof result?.then ===
                'function') {
            issueWarning('async-perform-update', `Element ${this.localName} returned a Promise from performUpdate(). ` +
                `This behavior is deprecated and will be removed in a future ` +
                `version of ReactiveElement.`);
        }
        return result;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * @category updates
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent?.({ kind: 'update' });
        if (!this.hasUpdated) {
            // Create renderRoot before first update. This occurs in `connectedCallback`
            // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
            this.renderRoot ??=
                this.createRenderRoot();
            if (DEV_MODE) {
                // Produce warning if any reactive properties on the prototype are
                // shadowed by class fields. Instance fields set before upgrade are
                // deleted by this point, so any own property is caused by class field
                // initialization in the constructor.
                const ctor = this.constructor;
                const shadowedProperties = [...ctor.elementProperties.keys()].filter((p) => this.hasOwnProperty(p) && p in getPrototypeOf(this));
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
            // Mixin instance properties once, if they exist.
            if (this.__instanceProperties) {
                // TODO (justinfagnani): should we use the stored value? Could a new value
                // have been set since we stored the own property value?
                for (const [p, value] of this.__instanceProperties) {
                    this[p] = value;
                }
                this.__instanceProperties = undefined;
            }
            // Trigger initial value reflection and populate the initial
            // `changedProperties` map, but only for the case of properties created
            // via `createProperty` on accessors, which will not have already
            // populated the `changedProperties` map since they are not set.
            // We can't know if these accessors had initializers, so we just set
            // them anyway - a difference from experimental decorators on fields and
            // standard decorators on auto-accessors.
            // For context see:
            // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
            const elementProperties = this.constructor
                .elementProperties;
            if (elementProperties.size > 0) {
                for (const [p, options] of elementProperties) {
                    const { wrapped } = options;
                    const value = this[p];
                    if (wrapped === true &&
                        !this._$changedProperties.has(p) &&
                        value !== undefined) {
                        this._$changeProperty(p, undefined, options, value);
                    }
                }
            }
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                this.__controllers?.forEach((c) => c.hostUpdate?.());
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        this.__controllers?.forEach((c) => c.hostUpdated?.());
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.includes('change-in-update')) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        // The forEach() expression will only run when __reflectingProperties is
        // defined, and it returns undefined, setting __reflectingProperties to
        // undefined
        this.__reflectingProperties &&= this.__reflectingProperties.forEach((p) => this.__propertyToAttribute(p, this[p]));
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties', ReactiveElement)] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized', ReactiveElement)] = new Map();
// Apply polyfills if available
polyfillSupport?.({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = [
        'change-in-update',
        'async-perform-update',
    ];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (!this.enabledWarnings.includes(warning)) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
(global.reactiveElementVersions ??= []).push('2.1.2');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    queueMicrotask(() => {
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
            `is not recommended.`);
    });
}
//# sourceMappingURL=reactive-element.js.map

/***/ },

/***/ "./node_modules/lit-element/development/lit-element.js"
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   mathml: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.mathml),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _global$litElementHyd, _global$litElementVer;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 * LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 * Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
var JSCompiler_renameProperty = function JSCompiler_renameProperty(prop, _obj) {
  return prop;
};
var DEV_MODE = true;
// Allows minifiers to rename references to globalThis
var global = globalThis;
var issueWarning;
if (DEV_MODE) {
  var _global$litIssuedWarn;
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  (_global$litIssuedWarn = global.litIssuedWarnings) !== null && _global$litIssuedWarn !== void 0 ? _global$litIssuedWarn : global.litIssuedWarnings = new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = function issueWarning(code, warning) {
    warning += " See https://lit.dev/msg/".concat(code, " for more information.");
    if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
var LitElement = /*#__PURE__*/function (_ReactiveElement) {
  function LitElement() {
    var _this;
    _classCallCheck(this, LitElement);
    _this = _callSuper(this, LitElement, arguments);
    /**
     * @category rendering
     */
    _this.renderOptions = {
      host: _this
    };
    _this.__childPart = undefined;
    return _this;
  }
  /**
   * @category rendering
   */
  _inherits(LitElement, _ReactiveElement);
  return _createClass(LitElement, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var _this$renderOptions, _this$renderOptions$r;
      var renderRoot = _superPropGet(LitElement, "createRenderRoot", this, 3)([]);
      // When adoptedStyleSheets are shimmed, they are inserted into the
      // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
      // any styles in Lit content render before adoptedStyleSheets. This is
      // important so that adoptedStyleSheets have precedence over styles in
      // the shadowRoot.
      (_this$renderOptions$r = (_this$renderOptions = this.renderOptions).renderBefore) !== null && _this$renderOptions$r !== void 0 ? _this$renderOptions$r : _this$renderOptions.renderBefore = renderRoot.firstChild;
      return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
  }, {
    key: "update",
    value: function update(changedProperties) {
      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var value = this.render();
      if (!this.hasUpdated) {
        this.renderOptions.isConnected = this.isConnected;
      }
      _superPropGet(LitElement, "update", this, 3)([changedProperties]);
      this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$__childPart;
      _superPropGet(LitElement, "connectedCallback", this, 3)([]);
      (_this$__childPart = this.__childPart) === null || _this$__childPart === void 0 || _this$__childPart.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$__childPart2;
      _superPropGet(LitElement, "disconnectedCallback", this, 3)([]);
      (_this$__childPart2 = this.__childPart) === null || _this$__childPart2 === void 0 || _this$__childPart2.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
  }, {
    key: "render",
    value: function render() {
      return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
  }]);
}(_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement);
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
// Install hydration if available
(_global$litElementHyd = global.litElementHydrateSupport) === null || _global$litElementHyd === void 0 || _global$litElementHyd.call(global, {
  LitElement: LitElement
});
// Apply polyfills if available
var polyfillSupport = DEV_MODE ? global.litElementPolyfillSupportDevMode : global.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 || polyfillSupport({
  LitElement: LitElement
});
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
var _$LE = {
  _$attributeToProperty: function _$attributeToProperty(el, name, value) {
    // eslint-disable-next-line
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: function _$changedProperties(el) {
    return el._$changedProperties;
  }
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_global$litElementVer = global.litElementVersions) !== null && _global$litElementVer !== void 0 ? _global$litElementVer : global.litElementVersions = []).push('4.2.2');
if (DEV_MODE && global.litElementVersions.length > 1) {
  queueMicrotask(function () {
    issueWarning('multiple-versions', "Multiple versions of Lit loaded. Loading multiple versions " + "is not recommended.");
  });
}

/***/ },

/***/ "./node_modules/lit-html/development/is-server.js"
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
var NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
var isServer = NODE_MODE;

/***/ },

/***/ "./node_modules/lit-html/development/lit-html.js"
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   mathml: () => (/* binding */ mathml),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
var _global$ShadyDOM, _global$ShadyDOM2, _global$litHtmlVersio;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var DEV_MODE = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE = false;
// Allows minifiers to rename references to globalThis
var global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
var debugLogEvent = DEV_MODE ? function (event) {
  var shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
var debugLogRenderId = 0;
var issueWarning;
if (DEV_MODE) {
  var _global$litIssuedWarn;
  (_global$litIssuedWarn = global.litIssuedWarnings) !== null && _global$litIssuedWarn !== void 0 ? _global$litIssuedWarn : global.litIssuedWarnings = new Set();
  /**
   * Issue a warning if we haven't already, based either on `code` or `warning`.
   * Warnings are disabled automatically only by `warning`; disabling via `code`
   * can be done by users.
   */
  issueWarning = function issueWarning(code, warning) {
    warning += code ? " See https://lit.dev/msg/".concat(code, " for more information.") : '';
    if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(function () {
    issueWarning('dev-mode', "Lit is in dev mode. Not recommended for production!");
  });
}
var wrap = ENABLE_SHADYDOM_NOPATCH && (_global$ShadyDOM = global.ShadyDOM) !== null && _global$ShadyDOM !== void 0 && _global$ShadyDOM.inUse && ((_global$ShadyDOM2 = global.ShadyDOM) === null || _global$ShadyDOM2 === void 0 ? void 0 : _global$ShadyDOM2.noPatch) === true ? global.ShadyDOM.wrap : function (node) {
  return node;
};
var trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
var policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
}) : undefined;
var identityFunction = function identityFunction(value) {
  return value;
};
var noopSanitizer = function noopSanitizer(_node, _name, _type) {
  return identityFunction;
};
/** Sets the global sanitizer factory. */
var setSanitizer = function setSanitizer(newSanitizer) {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error("Attempted to overwrite existing lit-html security policy." + " setSanitizeDOMValueFactory should be called at most once.");
  }
  sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = function _testOnlyClearSanitizerFactoryDoNotCallOrElse() {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = function createSanitizer(node, name, type) {
  return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
var boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
var marker = "lit$".concat(Math.random().toFixed(9).slice(2), "$");
// String used to tell if a comment is a marker comment
var markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
var nodeMarker = "<".concat(markerMatch, ">");
var d = NODE_MODE && global.document === undefined ? {
  createTreeWalker: function createTreeWalker() {
    return {};
  }
} : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
var createMarker = function createMarker() {
  return d.createComment('');
};
var isPrimitive = function isPrimitive(value) {
  return value === null || _typeof(value) != 'object' && typeof value != 'function';
};
var isArray = Array.isArray;
var isIterable = function isIterable(value) {
  return isArray(value) ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
};
var SPACE_CHAR = "[ \t\n\f\r]";
var ATTR_VALUE_CHAR = "[^ \t\n\f\r\"'`<>=]";
var NAME_CHAR = "[^\\s\"'>=/]";
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
var comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var tagEndRegex = new RegExp(">|".concat(SPACE_CHAR, "(?:(").concat(NAME_CHAR, "+)(").concat(SPACE_CHAR, "*=").concat(SPACE_CHAR, "*(?:").concat(ATTR_VALUE_CHAR, "|(\"|')|))|$)"), 'g');
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
var rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var MATHML_RESULT = 3;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
var tag = function tag(type) {
  return function (strings) {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some(function (s) {
      return s === undefined;
    })) {
      console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
    }
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    if (DEV_MODE) {
      // Import static-html.js results in a circular dependency which g3 doesn't
      // handle. Instead we know that static values must have the field
      // `_$litStatic$`.
      if (values.some(function (val) {
        return val === null || val === void 0 ? void 0 : val['_$litStatic$'];
      })) {
        issueWarning('', "Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n" + "Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions");
      }
    }
    return _defineProperty(_defineProperty(_defineProperty({}, '_$litType$', type), "strings", strings), "values", values);
  };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
var html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus not be properly contained within an `<svg>` HTML
 * element.
 */
var svg = tag(SVG_RESULT);
/**
 * Interprets a template literal as MathML fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const num = mathml`<mn>1</mn>`;
 *
 * const eq = html`
 *   <math>
 *     ${num}
 *   </math>`;
 * ```
 *
 * The `mathml` *tag function* should only be used for MathML fragments, or
 * elements that would be contained **inside** a `<math>` HTML element. A common
 * error is placing a `<math>` *element* in a template tagged with the `mathml`
 * tag function. The `<math>` element is an HTML element and should be used
 * within a template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an MathML fragment from the
 * `render()` method, as the MathML fragment will be contained within the
 * element's shadow root and thus not be properly contained within a `<math>`
 * HTML element.
 */
var mathml = tag(MATHML_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = Symbol["for"]('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
var nothing = Symbol["for"]('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - they must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
var templateCache = new WeakMap();
var walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  // A security check to prevent spoofing of Lit template results.
  // In the future, we may be able to replace this with Array.isTemplateObject,
  // though we might need to make that check inside of the html and svg
  // functions, because precompiled templates don't come in as
  // TemplateStringArray objects.
  if (!isArray(tsa) || !tsa.hasOwnProperty('raw')) {
    var message = 'invalid template strings array';
    if (DEV_MODE) {
      message = "\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g, '\n');
    }
    throw new Error(message);
  }
  return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
var getTemplateHtml = function getTemplateHtml(strings, type) {
  // Insert makers into the template HTML to represent the position of
  // bindings. The following code scans the template strings to determine the
  // syntactic position of the bindings. They can be in text position, where
  // we insert an HTML comment, attribute value position, where we insert a
  // sentinel string and re-write the attribute name, or inside a tag where
  // we insert the sentinel string.
  var l = strings.length - 1;
  // Stores the case-sensitive bound attribute names in the order of their
  // parts. ElementParts are also reflected in this array as undefined
  // rather than a string, to disambiguate from attribute bindings.
  var attrNames = [];
  var html = type === SVG_RESULT ? '<svg>' : type === MATHML_RESULT ? '<math>' : '';
  // When we're inside a raw text tag (not it's text content), the regex
  // will still be tagRegex so we can find attributes, but will switch to
  // this regex when the tag ends.
  var rawTextEndRegex;
  // The current parsing state, represented as a reference to one of the
  // regexes
  var regex = textEndRegex;
  for (var i = 0; i < l; i++) {
    var s = strings[i];
    // The index of the end of the last attribute name. When this is
    // positive at end of a string, it means we're in an attribute value
    // position and need to rewrite the attribute name.
    // We also use a special value of -2 to indicate that we encountered
    // the end of a string in attribute name position.
    var attrNameEndIndex = -1;
    var attrName = void 0;
    var lastIndex = 0;
    var match = void 0;
    // The conditions in this loop handle the current parse state, and the
    // assignments to the `regex` variable are the state transitions.
    while (lastIndex < s.length) {
      // Make sure we start searching from where we previously left off
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === '!--') {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== undefined) {
          // We started a weird comment, like </{
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== undefined) {
          if (rawTextElement.test(match[TAG_NAME])) {
            // Record if we encounter a raw-text element. We'll switch to
            // this regex at the end of the tag.
            rawTextEndRegex = new RegExp("</".concat(match[TAG_NAME]), 'g');
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
          if (DEV_MODE) {
            throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === '>') {
          // End of a tag. If we had started a raw-text element, use that
          // regex
          regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
          // We may be ending an unquoted attribute value, so make sure we
          // clear any pending attrNameEndIndex
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === undefined) {
          // Attribute name position
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        // Not one of the five state regexes, so it must be the dynamically
        // created raw text regex and we're at the close of that element.
        regex = tagEndRegex;
        rawTextEndRegex = undefined;
      }
    }
    if (DEV_MODE) {
      // If we have a attrNameEndIndex, which indicates that we should
      // rewrite the attribute name, assert that we're in a valid attribute
      // position - either in a tag, or a quoted attribute value.
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
    }
    // We have four cases:
    //  1. We're in text position, and not in a raw text element
    //     (regex === textEndRegex): insert a comment marker.
    //  2. We have a non-negative attrNameEndIndex which means we need to
    //     rewrite the attribute name to add a bound attribute suffix.
    //  3. We're at the non-first binding in a multi-binding attribute, use a
    //     plain marker.
    //  4. We're somewhere else inside the tag. If we're in attribute name
    //     position (attrNameEndIndex === -2), add a sequential suffix to
    //     generate a unique attribute name.
    // Detect a binding next to self-closing tag end and insert a space to
    // separate the marker from the tag end:
    var end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
    html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  var htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : type === MATHML_RESULT ? '</math>' : '');
  // Returned as an array for terseness
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = /*#__PURE__*/function () {
  function Template(// This property needs to remain unminified.
  _ref2, options) {
    var strings = _ref2.strings,
      type = _ref2['_$litType$'];
    _classCallCheck(this, Template);
    this.parts = [];
    var node;
    var nodeIndex = 0;
    var attrNameIndex = 0;
    var partCount = strings.length - 1;
    var parts = this.parts;
    // Create template element
    var _getTemplateHtml = getTemplateHtml(strings, type),
      _getTemplateHtml2 = _slicedToArray(_getTemplateHtml, 2),
      html = _getTemplateHtml2[0],
      attrNames = _getTemplateHtml2[1];
    this.el = Template.createElement(html, options);
    walker.currentNode = this.el.content;
    // Re-parent SVG or MathML nodes into template root
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      var wrapper = this.el.content.firstChild;
      wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
    }
    // Walk the template to find binding markers and create TemplateParts
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          var _tag = node.localName;
          // Warn if `textarea` includes an expression and throw if `template`
          // does since these are not supported. We do this by checking
          // innerHTML for anything that looks like a marker. This catches
          // cases like bindings in textarea there markers turn into text nodes.
          if (/^(?:textarea|template)$/i.test(_tag) && node.innerHTML.includes(marker)) {
            var m = "Expressions are not supported inside `".concat(_tag, "` ") + "elements. See https://lit.dev/msg/expression-in-".concat(_tag, " for more ") + "information.";
            if (_tag === 'template') {
              throw new Error(m);
            } else issueWarning('', m);
          }
        }
        // TODO (justinfagnani): for attempted dynamic tag names, we don't
        // increment the bindingIndex, and it'll be off by 1 in the element
        // and off by two after it.
        if (node.hasAttributes()) {
          var _iterator = _createForOfIteratorHelper(node.getAttributeNames()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var name = _step.value;
              if (name.endsWith(boundAttributeSuffix)) {
                var realName = attrNames[attrNameIndex++];
                var value = node.getAttribute(name);
                var statics = value.split(marker);
                var _m = /([.?@])?(.*)/.exec(realName);
                parts.push({
                  type: ATTRIBUTE_PART,
                  index: nodeIndex,
                  name: _m[2],
                  strings: statics,
                  ctor: _m[1] === '.' ? PropertyPart : _m[1] === '?' ? BooleanAttributePart : _m[1] === '@' ? EventPart : AttributePart
                });
                node.removeAttribute(name);
              } else if (name.startsWith(marker)) {
                parts.push({
                  type: ELEMENT_PART,
                  index: nodeIndex
                });
                node.removeAttribute(name);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        // TODO (justinfagnani): benchmark the regex against testing for each
        // of the 3 raw text element names.
        if (rawTextElement.test(node.tagName)) {
          // For raw text elements we need to split the text content on
          // markers, create a Text node for each segment, and create
          // a TemplatePart for each marker.
          var _strings = node.textContent.split(marker);
          var lastIndex = _strings.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : '';
            // Generate a new text node for each literal section
            // These nodes are also used as the markers for child parts
            for (var i = 0; i < lastIndex; i++) {
              node.append(_strings[i], createMarker());
              // Walk past the marker node we just added
              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            }
            // Note because this marker is added after the walker's current
            // node, it will be walked to in the outer loop (and ignored), so
            // we don't need to adjust nodeIndex here
            node.append(_strings[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        var data = node.data;
        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          var _i = -1;
          while ((_i = node.data.indexOf(marker, _i + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            });
            // Move to the end of the match
            _i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE) {
      // If there was a duplicate attribute on a tag, then when the tag is
      // parsed into an element the attribute gets de-duplicated. We can detect
      // this mismatch if we haven't precisely consumed every attribute name
      // when preparing the template. This works because `attrNames` is built
      // from the template string and `attrNameIndex` comes from processing the
      // resulting DOM.
      if (attrNames.length !== attrNameIndex) {
        throw new Error("Detected duplicate attribute bindings. This occurs if your template " + "has duplicate attributes on an element tag. For example " + "\"<input ?disabled=${true} ?disabled=${false}>\" contains a " + "duplicate \"disabled\" attribute. The error was detected in " + "the following template: \n" + '`' + strings.join('${...}') + '`');
      }
    }
    // We could set walker.currentNode to another node here to prevent a memory
    // leak, but every time we prepare a template, we immediately render it
    // and re-use the walker in new TemplateInstance._clone().
    debugLogEvent && debugLogEvent({
      kind: 'template prep',
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings: strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  return _createClass(Template, null, [{
    key: "createElement",
    value: function createElement(html, _options) {
      var el = d.createElement('template');
      el.innerHTML = html;
      return el;
    }
  }]);
}();
function resolveDirective(part, value) {
  var _parent$__directives, _currentDirective;
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : part;
  var attributeIndex = arguments.length > 3 ? arguments[3] : undefined;
  // Bail early if the value is explicitly noChange. Note, this means any
  // nested directive is still attached and is not run.
  if (value === noChange) {
    return value;
  }
  var currentDirective = attributeIndex !== undefined ? (_parent$__directives = parent.__directives) === null || _parent$__directives === void 0 ? void 0 : _parent$__directives[attributeIndex] : parent.__directive;
  var nextDirectiveConstructor = isPrimitive(value) ? undefined :
  // This property needs to remain unminified.
  value['_$litDirective$'];
  if (((_currentDirective = currentDirective) === null || _currentDirective === void 0 ? void 0 : _currentDirective.constructor) !== nextDirectiveConstructor) {
    var _currentDirective2, _currentDirective2$_$;
    // This property needs to remain unminified.
    (_currentDirective2 = currentDirective) === null || _currentDirective2 === void 0 || (_currentDirective2$_$ = _currentDirective2['_$notifyDirectiveConnectionChanged']) === null || _currentDirective2$_$ === void 0 || _currentDirective2$_$.call(_currentDirective2, false);
    if (nextDirectiveConstructor === undefined) {
      currentDirective = undefined;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== undefined) {
      var _parent$__directives2;
      ((_parent$__directives2 = parent.__directives) !== null && _parent$__directives2 !== void 0 ? _parent$__directives2 : parent.__directives = [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== undefined) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, parent) {
    _classCallCheck(this, TemplateInstance);
    this._$parts = [];
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  return _createClass(TemplateInstance, [{
    key: "parentNode",
    get: function get() {
      return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
  }, {
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
  }, {
    key: "_clone",
    value: function _clone(options) {
      var _options$creationScop;
      var _this$_$template = this._$template,
        content = _this$_$template.el.content,
        parts = _this$_$template.parts;
      var fragment = ((_options$creationScop = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _options$creationScop !== void 0 ? _options$creationScop : d).importNode(content, true);
      walker.currentNode = fragment;
      var node = walker.nextNode();
      var nodeIndex = 0;
      var partIndex = 0;
      var templatePart = parts[0];
      while (templatePart !== undefined) {
        var _templatePart;
        if (nodeIndex === templatePart.index) {
          var part = void 0;
          if (templatePart.type === CHILD_PART) {
            part = new ChildPart(node, node.nextSibling, this, options);
          } else if (templatePart.type === ATTRIBUTE_PART) {
            part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
          } else if (templatePart.type === ELEMENT_PART) {
            part = new ElementPart(node, this, options);
          }
          this._$parts.push(part);
          templatePart = parts[++partIndex];
        }
        if (nodeIndex !== ((_templatePart = templatePart) === null || _templatePart === void 0 ? void 0 : _templatePart.index)) {
          node = walker.nextNode();
          nodeIndex++;
        }
      }
      // We need to set the currentNode away from the cloned tree so that we
      // don't hold onto the tree even if the tree is detached and should be
      // freed.
      walker.currentNode = d;
      return fragment;
    }
  }, {
    key: "_update",
    value: function _update(values) {
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(this._$parts),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var part = _step2.value;
          if (part !== undefined) {
            debugLogEvent && debugLogEvent({
              kind: 'set part',
              part: part,
              value: values[i],
              valueIndex: i,
              values: values,
              templateInstance: this
            });
            if (part.strings !== undefined) {
              part._$setValue(values, part, i);
              // The number of values the part consumes is part.strings.length - 1
              // since values are in between template spans. We increment i by 1
              // later in the loop, so increment it by part.strings.length - 2 here
              i += part.strings.length - 2;
            } else {
              part._$setValue(values[i]);
            }
          }
          i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}();
var ChildPart = /*#__PURE__*/function () {
  function ChildPart(startNode, endNode, parent, options) {
    var _options$isConnected;
    _classCallCheck(this, ChildPart);
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    // The following fields will be patched onto ChildParts when required by
    // AsyncDirective
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    // Note __isConnected is only ever accessed on RootParts (i.e. when there is
    // no _$parent); the value on a non-root-part is "don't care", but checking
    // for parent would be more code
    this.__isConnected = (_options$isConnected = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _options$isConnected !== void 0 ? _options$isConnected : true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      // Explicitly initialize for consistent class shape.
      this._textSanitizer = undefined;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  return _createClass(ChildPart, [{
    key: "_$isConnected",
    get:
    // See comment in Disconnectable interface for why this is a getter
    function get() {
      var _this$_$parent$_$isCo, _this$_$parent;
      // ChildParts that are not at the root should always be created with a
      // parent; only RootChildNode's won't, so they return the local isConnected
      // state
      return (_this$_$parent$_$isCo = (_this$_$parent = this._$parent) === null || _this$_$parent === void 0 ? void 0 : _this$_$parent._$isConnected) !== null && _this$_$parent$_$isCo !== void 0 ? _this$_$parent$_$isCo : this.__isConnected;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var _parentNode;
      var parentNode = wrap(this._$startNode).parentNode;
      var parent = this._$parent;
      if (parent !== undefined && ((_parentNode = parentNode) === null || _parentNode === void 0 ? void 0 : _parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */) {
        // If the parentNode is a DocumentFragment, it may be because the DOM is
        // still in the cloned fragment during initial render; if so, get the real
        // parentNode the part will be committed into by asking the parent.
        parentNode = parent.parentNode;
      }
      return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
  }, {
    key: "startNode",
    get: function get() {
      return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
  }, {
    key: "endNode",
    get: function get() {
      return this._$endNode;
    }
  }, {
    key: "_$setValue",
    value: function _$setValue(value) {
      var directiveParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      if (DEV_MODE && this.parentNode === null) {
        throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
      }
      value = resolveDirective(this, value, directiveParent);
      if (isPrimitive(value)) {
        // Non-rendering child values. It's important that these do not render
        // empty text nodes to avoid issues with preventing default <slot>
        // fallback content.
        if (value === nothing || value == null || value === '') {
          if (this._$committedValue !== nothing) {
            debugLogEvent && debugLogEvent({
              kind: 'commit nothing to child',
              start: this._$startNode,
              end: this._$endNode,
              parent: this._$parent,
              options: this.options
            });
            this._$clear();
          }
          this._$committedValue = nothing;
        } else if (value !== this._$committedValue && value !== noChange) {
          this._commitText(value);
        }
        // This property needs to remain unminified.
      } else if (value['_$litType$'] !== undefined) {
        this._commitTemplateResult(value);
      } else if (value.nodeType !== undefined) {
        var _this$options;
        if (DEV_MODE && ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.host) === value) {
          this._commitText("[probable mistake: rendered a template's host in itself " + "(commonly caused by writing ${this} in a template]");
          console.warn("Attempted to render the template host", value, "inside itself. This is almost always a mistake, and in dev mode ", "we render some warning text. In production however, we'll ", "render it, which will usually result in an error, and sometimes ", "in the element disappearing from the DOM.");
          return;
        }
        this._commitNode(value);
      } else if (isIterable(value)) {
        this._commitIterable(value);
      } else {
        // Fallback, will render the string representation
        this._commitText(value);
      }
    }
  }, {
    key: "_insert",
    value: function _insert(node) {
      return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this._$committedValue !== value) {
        this._$clear();
        if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
          var _this$_$startNode$par;
          var parentNodeName = (_this$_$startNode$par = this._$startNode.parentNode) === null || _this$_$startNode$par === void 0 ? void 0 : _this$_$startNode$par.nodeName;
          if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
            var message = 'Forbidden';
            if (DEV_MODE) {
              if (parentNodeName === 'STYLE') {
                message = "Lit does not support binding inside style nodes. " + "This is a security risk, as style injection attacks can " + "exfiltrate data and spoof UIs. " + "Consider instead using css`...` literals " + "to compose styles, and do dynamic styling with " + "css custom properties, ::parts, <slot>s, " + "and by mutating the DOM rather than stylesheets.";
              } else {
                message = "Lit does not support binding inside script nodes. " + "This is a security risk, as it could allow arbitrary " + "code execution.";
              }
            }
            throw new Error(message);
          }
        }
        debugLogEvent && debugLogEvent({
          kind: 'commit node',
          start: this._$startNode,
          parent: this._$parent,
          value: value,
          options: this.options
        });
        this._$committedValue = this._insert(value);
      }
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      // If the committed value is a primitive it means we called _commitText on
      // the previous render, and we know that this._$startNode.nextSibling is a
      // Text node. We can now just replace the text content (.data) of the node.
      if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
        var node = wrap(this._$startNode).nextSibling;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
          if (this._textSanitizer === undefined) {
            this._textSanitizer = createSanitizer(node, 'data', 'property');
          }
          value = this._textSanitizer(value);
        }
        debugLogEvent && debugLogEvent({
          kind: 'commit text',
          node: node,
          value: value,
          options: this.options
        });
        node.data = value;
      } else {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
          var textNode = d.createTextNode('');
          this._commitNode(textNode);
          // When setting text content, for security purposes it matters a lot
          // what the parent is. For example, <style> and <script> need to be
          // handled with care, while <span> does not. So first we need to put a
          // text node into the document, then we can sanitize its content.
          if (this._textSanitizer === undefined) {
            this._textSanitizer = createSanitizer(textNode, 'data', 'property');
          }
          value = this._textSanitizer(value);
          debugLogEvent && debugLogEvent({
            kind: 'commit text',
            node: textNode,
            value: value,
            options: this.options
          });
          textNode.data = value;
        } else {
          this._commitNode(d.createTextNode(value));
          debugLogEvent && debugLogEvent({
            kind: 'commit text',
            node: wrap(this._$startNode).nextSibling,
            value: value,
            options: this.options
          });
        }
      }
      this._$committedValue = value;
    }
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(result) {
      var _this$_$committedValu;
      // This property needs to remain unminified.
      var values = result.values,
        type = result['_$litType$'];
      // If $litType$ is a number, result is a plain TemplateResult and we get
      // the template from the template cache. If not, result is a
      // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
      // to create the <template> element the first time we see it.
      var template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
      if (((_this$_$committedValu = this._$committedValue) === null || _this$_$committedValu === void 0 ? void 0 : _this$_$committedValu._$template) === template) {
        debugLogEvent && debugLogEvent({
          kind: 'template updating',
          template: template,
          instance: this._$committedValue,
          parts: this._$committedValue._$parts,
          options: this.options,
          values: values
        });
        this._$committedValue._update(values);
      } else {
        var instance = new TemplateInstance(template, this);
        var fragment = instance._clone(this.options);
        debugLogEvent && debugLogEvent({
          kind: 'template instantiated',
          template: template,
          instance: instance,
          parts: instance._$parts,
          options: this.options,
          fragment: fragment,
          values: values
        });
        instance._update(values);
        debugLogEvent && debugLogEvent({
          kind: 'template instantiated and updated',
          template: template,
          instance: instance,
          parts: instance._$parts,
          options: this.options,
          fragment: fragment,
          values: values
        });
        this._commitNode(fragment);
        this._$committedValue = instance;
      }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
  }, {
    key: "_$getTemplate",
    value: function _$getTemplate(result) {
      var template = templateCache.get(result.strings);
      if (template === undefined) {
        templateCache.set(result.strings, template = new Template(result));
      }
      return template;
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If value is an array, then the previous render was of an
      // iterable and value will contain the ChildParts from the previous
      // render. If value is not an array, clear this part and make a new
      // array for ChildParts.
      if (!isArray(this._$committedValue)) {
        this._$committedValue = [];
        this._$clear();
      }
      // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render
      var itemParts = this._$committedValue;
      var partIndex = 0;
      var itemPart;
      var _iterator3 = _createForOfIteratorHelper(value),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          if (partIndex === itemParts.length) {
            // If no existing part, create a new one
            // TODO (justinfagnani): test perf impact of always creating two parts
            // instead of sharing parts between nodes
            // https://github.com/lit/lit/issues/1266
            itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
          } else {
            // Reuse an existing part
            itemPart = itemParts[partIndex];
          }
          itemPart._$setValue(item);
          partIndex++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (partIndex < itemParts.length) {
        // itemParts always have end nodes
        this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
      }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives
     *     in those Parts.
     *
     * @internal
     */
  }, {
    key: "_$clear",
    value: function _$clear() {
      var _this$_$notifyConnect;
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : wrap(this._$startNode).nextSibling;
      var from = arguments.length > 1 ? arguments[1] : undefined;
      (_this$_$notifyConnect = this._$notifyConnectionChanged) === null || _this$_$notifyConnect === void 0 || _this$_$notifyConnect.call(this, false, true, from);
      while (start !== this._$endNode) {
        // The non-null assertion is safe because if _$startNode.nextSibling is
        // null, then _$endNode is also null, and we would not have entered this
        // loop.
        var n = wrap(start).nextSibling;
        wrap(start).remove();
        start = n;
      }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this method
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
  }, {
    key: "setConnected",
    value: function setConnected(isConnected) {
      if (this._$parent === undefined) {
        var _this$_$notifyConnect2;
        this.__isConnected = isConnected;
        (_this$_$notifyConnect2 = this._$notifyConnectionChanged) === null || _this$_$notifyConnect2 === void 0 || _this$_$notifyConnect2.call(this, isConnected);
      } else if (DEV_MODE) {
        throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
      }
    }
  }]);
}();
var AttributePart = /*#__PURE__*/function () {
  function AttributePart(element, name, strings, parent, options) {
    _classCallCheck(this, AttributePart);
    this.type = ATTRIBUTE_PART;
    /** @internal */
    this._$committedValue = nothing;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = undefined;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  return _createClass(AttributePart, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
  }, {
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }, {
    key: "_$setValue",
    value: function _$setValue(value) {
      var directiveParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var valueIndex = arguments.length > 2 ? arguments[2] : undefined;
      var noCommit = arguments.length > 3 ? arguments[3] : undefined;
      var strings = this.strings;
      // Whether any of the values has changed, for dirty-checking
      var change = false;
      if (strings === undefined) {
        // Single-value binding case
        value = resolveDirective(this, value, directiveParent, 0);
        change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
        if (change) {
          this._$committedValue = value;
        }
      } else {
        // Interpolation case
        var values = value;
        value = strings[0];
        var i, v;
        for (i = 0; i < strings.length - 1; i++) {
          v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
          if (v === noChange) {
            // If the user-provided value is `noChange`, use the previous value
            v = this._$committedValue[i];
          }
          change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
          if (v === nothing) {
            value = nothing;
          } else if (value !== nothing) {
            value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
          }
          // We always record each value, even if one is `nothing`, for future
          // change detection.
          this._$committedValue[i] = v;
        }
      }
      if (change && !noCommit) {
        this._commitValue(value);
      }
    }
    /** @internal */
  }, {
    key: "_commitValue",
    value: function _commitValue(value) {
      if (value === nothing) {
        wrap(this.element).removeAttribute(this.name);
      } else {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
          if (this._sanitizer === undefined) {
            this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
          }
          value = this._sanitizer(value !== null && value !== void 0 ? value : '');
        }
        debugLogEvent && debugLogEvent({
          kind: 'commit attribute',
          element: this.element,
          name: this.name,
          value: value,
          options: this.options
        });
        wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : '');
      }
    }
  }]);
}();
var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  function PropertyPart() {
    var _this;
    _classCallCheck(this, PropertyPart);
    _this = _callSuper(this, PropertyPart, arguments);
    _this.type = PROPERTY_PART;
    return _this;
  }
  /** @internal */
  _inherits(PropertyPart, _AttributePart);
  return _createClass(PropertyPart, [{
    key: "_commitValue",
    value: function _commitValue(value) {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === undefined) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
        }
        value = this._sanitizer(value);
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit property',
        element: this.element,
        name: this.name,
        value: value,
        options: this.options
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.element[this.name] = value === nothing ? undefined : value;
    }
  }]);
}(AttributePart);
var BooleanAttributePart = /*#__PURE__*/function (_AttributePart2) {
  function BooleanAttributePart() {
    var _this2;
    _classCallCheck(this, BooleanAttributePart);
    _this2 = _callSuper(this, BooleanAttributePart, arguments);
    _this2.type = BOOLEAN_ATTRIBUTE_PART;
    return _this2;
  }
  /** @internal */
  _inherits(BooleanAttributePart, _AttributePart2);
  return _createClass(BooleanAttributePart, [{
    key: "_commitValue",
    value: function _commitValue(value) {
      debugLogEvent && debugLogEvent({
        kind: 'commit boolean attribute',
        element: this.element,
        name: this.name,
        value: !!(value && value !== nothing),
        options: this.options
      });
      wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
    }
  }]);
}(AttributePart);
var EventPart = /*#__PURE__*/function (_AttributePart3) {
  function EventPart(element, name, strings, parent, options) {
    var _this3;
    _classCallCheck(this, EventPart);
    _this3 = _callSuper(this, EventPart, [element, name, strings, parent, options]);
    _this3.type = EVENT_PART;
    if (DEV_MODE && _this3.strings !== undefined) {
      throw new Error("A `<".concat(element.localName, ">` has a `@").concat(name, "=...` listener with ") + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
    }
    return _this3;
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _inherits(EventPart, _AttributePart3);
  return _createClass(EventPart, [{
    key: "_$setValue",
    value: function _$setValue(newListener) {
      var _resolveDirective;
      var directiveParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      newListener = (_resolveDirective = resolveDirective(this, newListener, directiveParent, 0)) !== null && _resolveDirective !== void 0 ? _resolveDirective : nothing;
      if (newListener === noChange) {
        return;
      }
      var oldListener = this._$committedValue;
      // If the new value is nothing or any options change we have to remove the
      // part as a listener.
      var shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
      // If the new value is not nothing and we removed the listener, we have
      // to add the part as a listener.
      var shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
      debugLogEvent && debugLogEvent({
        kind: 'commit event listener',
        element: this.element,
        name: this.name,
        value: newListener,
        options: this.options,
        removeListener: shouldRemoveListener,
        addListener: shouldAddListener,
        oldListener: oldListener
      });
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.name, this, oldListener);
      }
      if (shouldAddListener) {
        this.element.addEventListener(this.name, this, newListener);
      }
      this._$committedValue = newListener;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this._$committedValue === 'function') {
        var _this$options$host, _this$options2;
        this._$committedValue.call((_this$options$host = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.host) !== null && _this$options$host !== void 0 ? _this$options$host : this.element, event);
      } else {
        this._$committedValue.handleEvent(event);
      }
    }
  }]);
}(AttributePart);
var ElementPart = /*#__PURE__*/function () {
  function ElementPart(element, parent, options) {
    _classCallCheck(this, ElementPart);
    this.element = element;
    this.type = ELEMENT_PART;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  return _createClass(ElementPart, [{
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }, {
    key: "_$setValue",
    value: function _$setValue(value) {
      debugLogEvent && debugLogEvent({
        kind: 'commit to element binding',
        element: this.element,
        value: value,
        options: this.options
      });
      resolveDirective(this, value);
    }
  }]);
}();
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
var _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
// Apply polyfills if available
var polyfillSupport = DEV_MODE ? global.litHtmlPolyfillSupportDevMode : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 || polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_global$litHtmlVersio = global.litHtmlVersions) !== null && _global$litHtmlVersio !== void 0 ? _global$litHtmlVersio : global.litHtmlVersions = []).push('3.3.2');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  queueMicrotask(function () {
    issueWarning('multiple-versions', "Multiple versions of Lit loaded. " + "Loading multiple versions is not recommended.");
  });
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
var render = function render(value, container, options) {
  var _options$renderBefore;
  if (DEV_MODE && container == null) {
    // Give a clearer error message than
    //     Uncaught TypeError: Cannot read properties of null (reading
    //     '_$litPart$')
    // which reads like an internal Lit error.
    throw new TypeError("The container to render into may not be ".concat(container));
  }
  var renderId = DEV_MODE ? debugLogRenderId++ : 0;
  var partOwnerNode = (_options$renderBefore = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _options$renderBefore !== void 0 ? _options$renderBefore : container;
  // This property needs to remain unminified.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var part = partOwnerNode['_$litPart$'];
  debugLogEvent && debugLogEvent({
    kind: 'begin render',
    id: renderId,
    value: value,
    container: container,
    options: options,
    part: part
  });
  if (part === undefined) {
    var _options$renderBefore2;
    var endNode = (_options$renderBefore2 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _options$renderBefore2 !== void 0 ? _options$renderBefore2 : null;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
  }
  part._$setValue(value);
  debugLogEvent && debugLogEvent({
    kind: 'end render',
    id: renderId,
    value: value,
    container: container,
    options: options,
    part: part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

/***/ },

/***/ "./node_modules/lit/index.js"
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   _$LE: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   isServer: () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   mathml: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.mathml),
/* harmony export */   noChange: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./package.json"
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"light-entity-card","version":"6.3.0","description":"A light-entity card for Home Assistant Lovelace UI","keywords":["home-assistant","homeassistant","hass","automation","lovelace","custom-cards","light-entity"],"repository":"git@github.com:ljmerza/light-entity-card.git","author":"Leonardo Merza <ljmerza@gmail.com>","license":"MIT","dependencies":{"@lit-labs/scoped-registry-mixin":"^1.0.4","@material/mwc-icon":"^0.27.0","@material/mwc-list":"^0.27.0","@material/mwc-menu":"^0.27.0","@material/mwc-notched-outline":"^0.27.0","@material/mwc-select":"^0.27.0","core-js":"^3.49.0","lit":"^3.3.2","lit-element":"^4.2.2"},"devDependencies":{"@babel/cli":"^7.28.6","@babel/core":"^7.29.0","@babel/preset-env":"^7.29.2","@eslint/js":"^10.0.1","babel-loader":"^10.1.1","eslint":"^10.0.3","webpack":"^5.105.4","webpack-cli":"^7.0.2","webpack-merge":"^6.0.1"},"scripts":{"lint":"eslint  --fix ./src","start":"webpack --watch --config webpack/config.dev.js","build":"webpack --config webpack/config.prod.js"}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _lit_labs_scoped_registry_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit-labs/scoped-registry-mixin */ "./node_modules/@lit-labs/scoped-registry-mixin/development/scoped-registry-mixin.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/style.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults */ "./src/defaults.js");
/* harmony import */ var _index_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-editor */ "./src/index-editor.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.json */ "./package.json");
/* harmony import */ var _buildElementDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildElementDefinitions */ "./src/buildElementDefinitions.js");
/* harmony import */ var _globalElementLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./globalElementLoader */ "./src/globalElementLoader.js");











const editorName = 'light-entity-card-editor';
customElements.define(editorName, _index_editor__WEBPACK_IMPORTED_MODULE_4__["default"]);

console.info(`light-entity-card v${_package_json__WEBPACK_IMPORTED_MODULE_5__.version}`);

class LightEntityCard extends (0,_lit_labs_scoped_registry_mixin__WEBPACK_IMPORTED_MODULE_1__.ScopedRegistryHost)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement) {
  static get elementDefinitions() {
    return (0,_buildElementDefinitions__WEBPACK_IMPORTED_MODULE_6__["default"])(
      [
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-card'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('more-info-light'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-switch'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-icon'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('state-badge'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-slider'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-hs-color-picker'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('ha-select'),
        (0,_globalElementLoader__WEBPACK_IMPORTED_MODULE_7__["default"])('mwc-list-item'),
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
      ..._defaults__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    return _style__WEBPACK_IMPORTED_MODULE_2__["default"];
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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
      (htmlTemplate, stateObj) => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`${htmlTemplate}${this.createEntityTemplate(stateObj)}`,
       
      ''
    );

    const css = `light-entity-card ${this.config.shorten_cards ? ' group' : ''} ${
      this.config.child_card ? ' light-entity-child-card' : ''
    }`;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.hide_header) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    const title = this.config.header || stateObj.attributes.friendly_name || stateObj.entity_id;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (!this.config.show_header_icon) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.brightness === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('brightness', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.speed === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('speed', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.intensity === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('intensity', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
      if (!this.config.show_brightness_percent) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    } else if (sliderType === 'color_temp' && this.config.show_color_temp_percent !== undefined) {
      if (!this.config.show_color_temp_percent) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    } else if (sliderType === 'color_temp' && this.config.color_temp_in_kelvin) {
      // color_temp_in_kelvin implies showing the value label
    } else if (!this.config.show_slider_percent) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    }

    // Show kelvin for color temp if configured (slider value is already in kelvin)
    if (sliderType === 'color_temp' && this.config.color_temp_in_kelvin) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)` <div class="percent-slider">${value}K</div> `;
    }

    let percent = parseInt(((value - min) * 100) / (max - min), 10);
    if (isNaN(percent)) percent = 0;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)` <div class="percent-slider">${percent}%</div> `;
  }

  /**
   * creates color temperature slider for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorTemperature(stateObj) {
    if (this.config.color_temp === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('colorTemp', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

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
      if (!minK || !maxK) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
      const midpoint = Math.round((minK + maxK) / 2);
      currentTemp = (typeof kelvin === 'number' && Number.isFinite(kelvin) && kelvin > 0)
        ? kelvin : null;
      minTemp = minK;
      maxTemp = maxK;
      const sliderValue = currentTemp || midpoint;
      const label = this.showPercent(sliderValue, minTemp, maxTemp, 'color_temp');

      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
      if (!minK || !maxK) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
      currentMired = (typeof kelvin === 'number' && Number.isFinite(kelvin) && kelvin > 0)
        ? Math.round(1000000 / kelvin) : null;
      minMired = Math.round(1000000 / maxK);
      maxMired = Math.round(1000000 / minK);
    } else {
      currentMired = stateObj.attributes.color_temp;
      minMired = stateObj.attributes.min_mireds;
      maxMired = stateObj.attributes.max_mireds;
      if (!minMired || !maxMired) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    }

    const miredRange = (maxMired && minMired) ? maxMired - minMired : 0;
    const percentValue = (miredRange > 0 && currentMired != null)
      ? Math.round(((currentMired - minMired) / miredRange) * 100) : 50;
    const label = this.showPercent(percentValue, 0, 100, 'color_temp');

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.white_value === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('whiteValue', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    const whiteValue = this.getWhiteValue(stateObj, 3);

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.warm_white_value === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('warmWhiteValue', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    const warmWhiteValue = this.getWhiteValue(stateObj, 4);

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    if (this.config.effects_list === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    // need to check state and persist_features here because if given custom effect list we may
    // want to sho that even if the feature doesn't exist so dont check that part to move forward just persist_features/state
    if (!this.config.persist_features && !this.isEntityOn(stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

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
      return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    }

    const listItems = effect_list.map(effect => this.createListItem(stateObj, effect));
    const caption = this.hass.localize('ui.card.light.effect') || 'Effect';

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<mwc-list-item value="${effect}" ?selected=${effect === stateObj.attributes.effect}
      >${effect}</mwc-list-item
    >`;
  }

  /**
   * creates color picker wheel for a given entity
   * @param {LightEntity} stateObj
   * @return {TemplateResult}
   */
  createColorPicker(stateObj) {
    if (this.config.color_picker === false) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
    if (this.dontShowFeature('color', stateObj)) return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;

    // ha-hs-color-picker uses saturation 0-1, HA uses 0-100
    const haHs = stateObj.attributes.hs_color || [0, 0];
    const pickerValue = (this._colorPickerValues && this._colorPickerValues[stateObj.entity_id])
      || [haHs[0], haHs[1] / 100];

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
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

})();

/******/ })()
;
//# sourceMappingURL=light-entity-card.js.map