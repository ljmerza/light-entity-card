!function(){"use strict";const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},r={},n={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,l=new RegExp(`${o}|${a}`),h="$lit$";class c{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const r=[],n=e=>{const a=e.content,c=document.createTreeWalker(a,133,null,!1);let d=0;for(;c.nextNode();){s++;const e=c.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let n=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(o)>=0&&n++;for(;n-- >0;){const r=t.strings[i],n=u.exec(r)[2],o=n.toLowerCase()+h,a=e.getAttribute(o).split(l);this.parts.push({type:"attribute",index:s,name:n,strings:a}),e.removeAttribute(o),i+=a.length-1}}"TEMPLATE"===e.tagName&&n(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const n=e.parentNode,o=t.split(l),a=o.length-1;for(let t=0;t<a;t++)n.insertBefore(""===o[t]?p():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++s});""===o[a]?(n.insertBefore(p(),e),r.push(e)):e.data=o[a],i+=a}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&s!==d||(s++,t.insertBefore(p(),e)),d=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(r.push(e),s--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1})}}};n(e);for(const t of r)t.parentNode.removeChild(t)}}const d=t=>-1!==t.index,p=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class g{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,r=0;const n=t=>{const s=document.createTreeWalker(t,133,null,!1);let o=s.nextNode();for(;i<e.length&&null!==o;){const t=e[i];if(d(t))if(r===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));i++}else r++,"TEMPLATE"===o.nodeName&&n(o.content),o=s.nextNode();else this._parts.push(void 0),i++}};return n(t),s&&(document.adoptNode(t),customElements.upgrade(t)),t}}class f{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s],i=u.exec(t);e+=i?t.substr(0,i.index)+i[1]+i[2]+h+i[3]+o:t+a}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const m=t=>null===t||!("object"==typeof t||"function"==typeof t);class _{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new y(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||m(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class v{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=p()),t._insert(this.endNode=p())}insertAfterPart(t){t._insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r,t(this)}const t=this._pendingValue;t!==r&&(m(t)?t!==this.value&&this._commitText(t):t instanceof f?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===n?(this.value=n,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const s=new g(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new v(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r,t(this)}if(this._pendingValue===r)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=r}}class w extends _{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new b(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class b extends y{}let x=!1;try{const t={get capture(){return x=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class P{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r,t(this)}if(this._pendingValue===r)return;const t=this._pendingValue,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),n=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=C(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const C=t=>t&&(x?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const N=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];return"."===r?new w(t,e.slice(1),s).parts:"@"===r?[new P(t,e.slice(1),i.eventContext)]:"?"===r?[new S(t,e.slice(1),s)]:new _(t,e,s).parts}handleTextExpression(t){return new v(t)}};function E(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return void 0===(s=e.keyString.get(i))&&(s=new c(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const T=new Map,A=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=(t,...e)=>new f(t,e,"html",N),V=133;function $(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,V,null,!1);let n=R(i),o=i[n],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=i[n=R(i,n)]}h.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,V,null,!1);for(;s.nextNode();)e++;return e},R=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(d(e))return s}return-1};const U=(t,e)=>`${t}--${e}`;let M=!0;void 0===window.ShadyCSS?M=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),M=!1);const j=t=>e=>{const s=U(e.type,t);let i=T.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},T.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(o);if(void 0===(r=i.keyString.get(n))){const s=e.getTemplateElement();M&&window.ShadyCSS.prepareTemplateDom(s,t),r=new c(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},I=["html","svg"],L=new Set,z=(t,e,s)=>{L.add(s);const i=t.querySelectorAll("style");if(0===i.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const r=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{I.forEach(e=>{const s=T.get(U(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),$(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,V,null,!1);let o=R(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=O(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=R(r,o);return}o=R(r,o)}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),$(e,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:q},H=Promise.resolve(!0),W=1,J=4,D=8,G=16,K=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=H,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this.requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=q){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||F,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||F.toAttribute)(t,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|K,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=B){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|D,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~D}}_attributeToProperty(t,e){if(this._updateState&D)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||B;this._updateState=this._updateState|G,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~G}}requestUpdate(t,e){let s=!0;if(void 0!==t&&!this._changedProperties.has(t)){const i=this.constructor,r=i._classProperties.get(t)||B;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&G||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|J;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&K}get _hasRequestedUpdate(){return this._updateState&J}get hasUpdated(){return this._updateState&W}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&W||(this._updateState=this._updateState|W,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~J}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Q.finalized=!0;const X="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Z{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const tt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class et extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){tt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof f&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}et.finalized=!0,et.render=((t,e,s)=>{const r=s.scopeName,n=A.has(e),o=e instanceof ShadowRoot&&M&&t instanceof f,a=o&&!L.has(r),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let r=A.get(e);void 0===r&&(i(e,e.firstChild),A.set(e,r=new v(Object.assign({templateFactory:E},s))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:j(r)},s)),a){const t=A.get(l);A.delete(l),t.value instanceof g&&z(l,t.value.template,r),i(e,e.firstChild),e.appendChild(l),A.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)});const st=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Z)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Z(s,Y)})`
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
`;class it extends et{static get properties(){return{hass:Object,config:Object}}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}constructor(){super()}getCardSize(){if(!this.config||!this.__hass||!this.__hass.states[this.config.entity])return 1;let t=0;const e=this.__hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t,1)}getEntityLength(t){return/^light\./.test(t)?it.entityLength.light:/^switch\./.test(t)?it.entityLength.switch:0}get styles(){return st}get language(){return this.__hass.resources[this.__hass.language]}isEntityOn(t){return"on"===t.state}updated(){this._isUpdating=!1,this._shownStateObjects.forEach(t=>{const e=this.generateColorPickerId(t),s=this.shadowRoot.querySelectorAll(`#${e}`);if(s.length){const e=t.attributes.hs_color&&t.attributes.hs_color[0]||0,i=t.attributes.hs_color&&t.attributes.hs_color[1]/100||0;s[0].desiredHsColor={h:e,s:i}}})}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={group:!1,persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,color_picker:!0,...t}}render(){const t=this.__hass.states[this.config.entity];if(!t)throw Error(`Invalid entity: ${this.config.entity}`);return this._isUpdating=!0,this._shownStateObjects=this.getEntitiesToShow(t),this._shownStateObjects.reduce((t,e)=>k`
        ${t}
        ${this.createCard(e)}
      `,k`<style>${this.styles}</style>`)}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.__hass.states[t]):[t]}createCard(t){return k`
      <ha-card class='light-entity-card ${this.config.group?"group":""}'>
        ${this.createHeader(t)}
        <div class='light-entity-card-sliders'>
          ${this.createBrightnessSlider(t)}
          ${this.createColorTemperature(t)}
          ${this.createWhiteValue(t)}
        </div>
        ${this.createColorPicker(t)}
        ${this.createEffectList(t)}
      </ha-card>
    `}createHeader(t){if(!1===this.config.header)return k``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return k`
      <div class="light-entity-card__header">
        <div class='light-entity-card__title'>${e}</div>
        <div class='light-entity-card-center'>
          <paper-toggle-button ?checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}>
          </paper-toggle-button>
        </div>
      </div>
    `}createBrightnessSlider(t){return!1===this.config.brightness?k``:this.dontShowFeature("brightness",t)?k``:k`
      <div class='control light-entity-card-center'>
        <ha-icon icon="hass:weather-sunny"></ha-icon>
        <ha-slider 
          .value='${t.attributes.brightness}'
          @value-changed="${e=>this.setBrightness(e,t)}"
          min="1"
          max="255"
        >
      </div>
    `}createColorTemperature(t){return!1===this.config.color_temp?k``:this.dontShowFeature("colorTemp",t)?k``:k`
      <div class="control light-entity-card-center">
        <ha-icon icon="hass:thermometer"></ha-icon>
        <ha-slider
          class='light-entity-card-color_temp'
          min="${t.attributes.min_mireds}"
          max="${t.attributes.max_mireds}"
          .value=${t.attributes.color_temp}
          @value-changed="${e=>this.setColorTemp(e,t)}"
        ></ha-labeled-slider>
      </div>
    `}createWhiteValue(t){return!1===this.config.white_value?k``:this.dontShowFeature("whiteValue",t)?k``:k`
      <div class="control light-entity-card-center">
        <ha-icon icon="hass:file-word-box"></ha-icon>
        <ha-slider
          max="255"
          .value="${t.attributes.white_value}"
          @value-changed="${e=>this.setWhiteValue(e,t)}"
        ></ha-labeled-slider>
      </div>
    `}createEffectList(t){if(!1===this.config.effects_list)return k``;if(!this.config.persist_features&&!this.isEntityOn(t))return k``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return k``;const s=e.map(t=>k`<paper-item>${t}</paper-item>`),i=e.indexOf(t.attributes.effect),r=this.language["ui.card.light.effect"];return k`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <paper-dropdown-menu @value-changed=${e=>this.setEffect(e,t)} label="${r}">
          <paper-listbox selected="${i}" slot="dropdown-content" placeholder="${r}">
            ${s}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `}createColorPicker(t){return!1===this.config.color_picker?k``:this.dontShowFeature("color",t)?k``:k`
      <div class='light-entity-card__color-picker'>
        <ha-color-picker 
        id="${this.generateColorPickerId(t)}"
        class='control color' 
        saturation-segments=8 
        hue-segments=24 
        throttle=500
        @colorselected=${e=>this.setColorPicker(e,t)}
      >
        </ha-color-picker>
      </div>
    `}dontShowFeature(t,e){return!(it.featureNames[t]&e.attributes.supported_features)||(!this.config.persist_features&&!this.isEntityOn(e)||void 0)}generateColorPickerId(t){return`light-entity-card-${t.entity_id.replace(".","-")}`}setColorPicker(t,e){this.callEntityService({hs_color:[t.detail.hs.h,100*t.detail.hs.s]},e)}setBrightness(t,e){const s=parseInt(t.target.value,0);isNaN(s)||parseInt(e.attributes.brightness,0)===s||this.callEntityService({brightness:s},e)}setColorTemp(t,e){const s=parseInt(t.target.value,0);isNaN(s)||parseInt(e.attributes.color_temp,0)===s||this.callEntityService({color_temp:s},e)}setWhiteValue(t,e){const s=parseInt(t.target.value,0);isNaN(s)||parseInt(e.attributes.white_value,0)===s||this.callEntityService({white_value:s},e)}setToggle(t,e){const s=this.isEntityOn(e)?it.cmdToggle.off:it.cmdToggle.on;this.callEntityService({},e,s)}setEffect(t,e){this.callEntityService({effect:t.detail.value},e)}callEntityService(t,e,s){if(this._isUpdating)return;const i=e.entity_id.split(".")[0];this.hass.callService(i,s||it.cmdToggle.on,{entity_id:e.entity_id,...t})}}customElements.define("light-entity-card",it)}();
