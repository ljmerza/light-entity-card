function e(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,s)},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",u=l.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},p=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p};let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):s.forEach(i=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var s;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:f).toAttribute(t,i.type);this._$El=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,o=s._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=s.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:f;this._$El=o,this[o]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const v=window,y=v.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,w="?"+b,k=`<${w}>`,E=document,C=(e="")=>E.createComment(e),x=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,T=/>/g,P=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),I=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),j=new WeakMap,L=E.createTreeWalker(E,129,null,!1),D=(e,t)=>{const i=e.length-1,s=[];let o,r=2===t?"<svg>":"",n=S;for(let t=0;t<i;t++){const i=e[t];let c,a,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,a=n.exec(i),null!==a);)h=n.lastIndex,n===S?"!--"===a[1]?n=O:void 0!==a[1]?n=T:void 0!==a[2]?(H.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=P):void 0!==a[3]&&(n=P):n===P?">"===a[0]?(n=null!=o?o:S,l=-1):void 0===a[1]?l=-2:(l=n.lastIndex-a[2].length,c=a[1],n=void 0===a[3]?P:'"'===a[3]?R:U):n===R||n===U?n=P:n===O||n===T?n=S:(n=P,o=void 0);const d=n===P&&e[t+1].startsWith("/>")?" ":"";r+=n===S?i+k:l>=0?(s.push(c),i.slice(0,l)+"$lit$"+i.slice(l)+b+d):i+b+(-2===l?(s.push(void 0),t):d)}const c=r+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(c):c,s]};class B{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const n=e.length-1,c=this.parts,[a,l]=D(e,t);if(this.el=B.createElement(a,i),L.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=L.nextNode())&&c.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const i=l[r++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(i);c.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?q:"?"===t[1]?K:"@"===t[1]?J:W})}else c.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(H.test(s.tagName)){const e=s.textContent.split(b),t=e.length-1;if(t>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],C()),L.nextNode(),c.push({type:2,index:++o});s.append(e[t],C())}}}else if(8===s.nodeType)if(s.data===w)c.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(b,e+1));)c.push({type:7,index:o}),e+=b.length-1}o++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function V(e,t,i=e,s){var o,r,n,c;if(t===I)return t;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const l=x(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(e),a._$AT(e,i,s)),void 0!==s?(null!==(n=(c=i)._$Co)&&void 0!==n?n:c._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(t=V(e,a._$AS(e,t.values),a,s)),t}class z{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),n=0,c=0,a=s[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new F(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new Z(r,this,e)),this.u.push(t),a=s[++c]}n!==(null==a?void 0:a.index)&&(r=L.nextNode(),n++)}return o}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class F{constructor(e,t,i,s){var o;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),x(e)?e===M||null==e||""===e?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==I&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>A(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==M&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new z(o,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return void 0===t&&j.set(e.strings,t=new B(e)),t}k(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new F(this.O(C()),this.O(C()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}let W=class{constructor(e,t,i,s,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(void 0===o)e=V(this,e,t,0),r=!x(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const s=e;let n,c;for(e=o[0],n=0;n<o.length-1;n++)c=V(this,s[i+n],t,n),c===I&&(c=this._$AH[n]),r||(r=!x(c)||c!==this._$AH[n]),c===M?e=M:e!==M&&(e+=(null!=c?c:"")+o[n+1]),this._$AH[n]=c}r&&!s&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}};class q extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}}const G=y?y.emptyScript:"";class K extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class J extends W{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=V(this,e,t,0))&&void 0!==i?i:M)===I)return;const s=this._$AH,o=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==M&&(s===M||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const Q=v.litHtmlPolyfillSupport;null==Q||Q(B,F),(null!==(m=v.litHtmlVersions)&&void 0!==m?m:v.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Y;class ee extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=r._$litPart$;if(void 0===n){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new F(t.insertBefore(C(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return I}}ee.finalized=!0,ee._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function se(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ie(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oe;null===(oe=window.HTMLSlotElement)||void 0===oe||oe.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re=window,ne=re.ShadowRoot&&(void 0===re.ShadyCSS||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ce(e){return class extends e{createRenderRoot(){const e=this.constructor,{registry:t,elementDefinitions:i,shadowRootOptions:s}=e;i&&!t&&(e.registry=new CustomElementRegistry,Object.entries(i).forEach(([t,i])=>e.registry.define(t,i)));const o=this.renderOptions.creationScope=this.attachShadow({...s,customElements:e.registry});return((e,t)=>{ne?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const i=document.createElement("style"),s=re.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)})})(o,this.constructor.elementStyles),o}}}const ae=n`
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
    justify-content: space-around;
    margin-top: 10px;
    min-height: 200px;
  }

  .light-entity-card__color-picker ha-color-picker {
    width: 100%;
    max-width: 300px;
    height: 200px;
    margin: 0 auto;
    display: block;
  }
  
  .light-entity-card-color_temp {
    background-image: var(--ha-slider-background);
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
    gap: 12px;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;var le={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",color_wheel:!0,persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,color_picker:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,brightness_icon:"weather-sunny",white_icon:"file-word-box",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"};const he=n`
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
`,de=(e,t)=>e.reduce((e,i)=>(i.defineId?e[i.defineId]=i:i.promise.then(e=>{void 0===t.registry.get(i.name)&&t.registry.define(i.name,e)}),e),{}),ue=e=>({name:e,promise:customElements.whenDefined(e).then(()=>customElements.get(e))}),fe=(e,t,i={},s={})=>{const o=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,e.dispatchEvent(o),o};class pe extends(ce(ee)){constructor(){super(...arguments),this._config={},this._firstRendered=!1}static get elementDefinitions(){return de([ue("ha-checkbox"),ue("ha-formfield"),ue("ha-form-string"),ue("ha-select"),ue("mwc-list-item")],pe)}static get styles(){return he}setConfig(e){this._config={...le,...e}}get entityOptions(){const e=Object.keys(this.hass.states).filter(e=>["switch","light","group"].includes(e.substr(0,e.indexOf("."))));return e.sort(),e}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass)return N``;let{header:e}=this._config;if(!e&&this._config.entity){let t=this._config.entity.split(".")[1]||"";t&&(t=t.charAt(0).toUpperCase()+t.slice(1),e=t)}const t=this.entityOptions.map(e=>N`<mwc-list-item value="${e}" ?selected=${e===this._config.entity}>${e}</mwc-list-item>`);return N`
      <div class="card-config">

        <div class=overall-config'>
          <ha-form-string
            .schema=${{name:"header",type:"string"}}
            label="Header"
            .data="${e}"
            .configValue="${"header"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-select
            label="Entity"
            @selected="${this.configChanged}" 
            @closed="${e=>e.stopPropagation()}" 
            .configValue="${"entity"}"
          >
            ${t}
          </ha-select>
          <ha-form-string
            .schema=${{name:"brightness_icon",type:"string"}}
            label="Brightness Icon"
            .data="${this._config.brightness_icon}"
            .configValue="${"brightness_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
         <ha-form-string
           .schema=${{name:"white_icon",type:"string"}}
           label="White Icon"
            .data="${this._config.white_icon}"
            .configValue="${"white_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{name:"temperature_icon",type:"string"}}
            label="Temperature Icon"
            .data="${this._config.temperature_icon}"
            .configValue="${"temperature_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
            <ha-formfield label="Show Color Wheel">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}" 
                .checked=${this._config.color_wheel}
                .value="${"color_wheel"}"
              ></ha-checkbox>
            </ha-formfield>
            <ha-formfield label="Shorten Cards">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.shorten_cards}
                .value="${"shorten_cards"}"
              ></ha-checkbox>
            </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Persist Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.persist_features}
                  .value="${"persist_features"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Brightness">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.brightness}
                  .value="${"brightness"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Temp">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_temp}
                  .value="${"color_temp"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show White Value">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${"white_value"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Speed">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.speed}
                  .value="${"speed"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Intensity">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.intensity}
                  .value="${"intensity"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Picker">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_picker}
                  .value="${"color_picker"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Effects List">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.effects_list}
                  .value="${"effects_list"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Full Width Sliders">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.full_width_sliders}
                  .value="${"full_width_sliders"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Slider Percent">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_slider_percent}
                  .value="${"show_slider_percent"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Hide Header">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.hide_header}
                  .value="${"hide_header"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Header Icon">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_header_icon}
                  .value="${"show_header_icon"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Child Card">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.child_card}
                  .value="${"child_card"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Force Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.force_features}
                  .value="${"force_features"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
            <ha-formfield label="Consolidate Entities">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.consolidate_entities}
                .value="${"consolidate_entities"}"
              ></ha-checkbox>
            </ha-formfield>
          </div>
          </div>
      </div>
    `}configChanged(e){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:t,value:i},detail:{value:s}}=e;this._config=null!=s?{...this._config,[t]:s}:{...this._config,[t]:i},fe(this,"config-changed",{config:this._config})}checkboxConfigChanged(e){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:t,checked:i}}=e;this._config={...this._config,[t]:i},fe(this,"config-changed",{config:this._config})}}var ge;e([se({type:Object})],pe.prototype,"hass",void 0),e([se({type:Object})],pe.prototype,"_config",void 0),function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e[e.NONE=4]="NONE"}(ge||(ge={}));class _e{constructor(){this.level=ge.INFO,this.prefix="[light-entity-card]"}setLevel(e){this.level=e}getLevel(){return this.level}debug(e,...t){this.level<=ge.DEBUG&&this.prefix}info(e,...t){this.level<=ge.INFO&&console.info(`${this.prefix} ${e}`,...t)}warn(e,...t){this.level<=ge.WARN&&console.warn(`${this.prefix} ${e}`,...t)}error(e,t,...i){this.level<=ge.ERROR&&(t instanceof Error?console.error(`${this.prefix} ${e}`,t.message,t.stack,...i):console.error(`${this.prefix} ${e}`,t,...i))}withPrefix(e){const t=new _e;return t.prefix=`[light-entity-card:${e}]`,t.level=this.level,t}}const me=new _e;"undefined"==typeof window||"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname&&"5000"!==window.location.port||me.setLevel(ge.DEBUG);const ve={BRIGHTNESS:1,COLOR_TEMP:2,EFFECT:4,FLASH:8,COLOR:16,TRANSITION:32,WHITE_VALUE:128},ye="turn_on",$e="turn_off",be=10,we=1;function ke(e,t,i,s){if(!s)return N``;let o=0;return void 0===e||isNaN(e)||(o=Math.floor(100*(e-t)/(i-t)),isNaN(o)&&(o=0)),N` <div class="percent-slider">${o}%</div> `}function Ee(e,t,i,s,o,r,n){return N`
    <div class="control light-entity-card-center">
      <div class="icon-container">
        <ha-icon icon="hass:${e}"></ha-icon>
      </div>
      <ha-slider
        class="${""}"
        .value="${t||0}"
        @change="${o}"
        min="${i}"
        max="${s}"
      ></ha-slider>
      ${ke(t,i,s,r)}
    </div>
  `}function Ce(e,t,i){if(i.force_features)return!1;const s=function(e,t){if("speed"===e&&"speed"in t.attributes)return!0;if("intensity"===e&&"intensity"in t.attributes)return!0;const i=ve[e.toUpperCase()]&(t.attributes.supported_features||0);let s=Boolean(i);const o=t.attributes.supported_color_modes||[];s||(s=function(e,t,i){switch(e){case"brightness":if(Object.prototype.hasOwnProperty.call(t.attributes,"brightness"))return!0;const s=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];return i.some(e=>s.includes(e));case"colorTemp":return i.includes("color_temp");case"effectList":return Boolean(t.attributes.effect_list&&t.attributes.effect_list.length>0);case"color":const o=["hs","rgb","rgbw","rgbww","xy"];return i.some(e=>o.includes(e));case"whiteValue":return Object.prototype.hasOwnProperty.call(t.attributes,"white_value");case"speed":case"intensity":return!1;default:return me.warn("Unknown feature name in checkModernColorModeSupport",{featureName:e}),!1}}(e,t,o));return me.debug("Feature support details",{feature:e,entity:t.entity_id,supported:s,legacyFlag:i,colorModes:o}),s}(e,t);return me.debug("Feature support check",{feature:e,entity:t.entity_id,supported:s,willHide:!s||!i.persist_features&&"on"!==t.state}),!s||!i.persist_features&&"on"!==t.state}function xe(e,t=100){return function(e,t){let i=null;return function(...s){null!==i&&clearTimeout(i),i=window.setTimeout(()=>{i=null,e(...s)},t)}}((t,i)=>{me.debug("Applying color change",{hsColor:t,entity:i.entity_id}),e(t,i)},t)}function Ae(e,t,i){let s;if(e.detail?.value?.hs?s=e.detail.value.hs:e.detail?.hs?s=e.detail.hs:e.detail?.value&&Array.isArray(e.detail.value)&&(s=e.detail.value),o=s,!(Array.isArray(o)&&2===o.length&&"number"==typeof o[0]&&"number"==typeof o[1]&&o[0]>=0&&o[0]<=360&&o[1]>=0&&o[1]<=100))return void me.warn("Invalid HS color received from color picker",{detail:e.detail,entity:t.entity_id});var o;const r=[Math.round(100*s[0])/100,Math.round(100*s[1])/100];me.debug("Color picker changed",{entity:t.entity_id,color:r}),i(r,t)}function Se(e,t,i,s,o){if(!1===t.effects_list)return N``;if(!t.persist_features&&"on"!==e.state)return N``;const r=function(e,t,i){if(t.effects_list&&Array.isArray(t.effects_list))return me.debug("Using custom effects list",{effects:t.effects_list}),t.effects_list;if("string"==typeof t.effects_list&&i.states[t.effects_list]){const e=i.states[t.effects_list],s=e.attributes&&e.attributes.options||[];return me.debug("Using effects from input_select entity",{entity:t.effects_list,effects:s}),s}return e.attributes.effect_list||[]}(e,t,i);if(!t.effects_list&&Ce("effectList",e,t))return N``;if(!r||0===r.length)return N``;const n=r.map(t=>function(e,t){return N`<mwc-list-item value="${t}" ?selected=${t===e.attributes.effect}
    >${t}</mwc-list-item
  >`}(e,t)),c=s["ui.card.light.effect"]||"Effect";return N`
    <div class="control light-entity-card-center light-entity-card-effectlist">
      <ha-select
        @closed="${e=>e.stopPropagation()}"
        @selected=${t=>o(t,e)}
        label="${c}"
      >
        ${n}
      </ha-select>
    </div>
  `}const Oe="light-entity-card-editor";customElements.define(Oe,pe),console.info("light-entity-card v6.1.3");class Te extends(ce(ee)){constructor(){super(...arguments),this._firstUpdate=!1,this._stateObjects=[],this._shownStateObjects=[],this._debouncedColorChange=xe((e,t)=>{this.callEntityService({hs_color:e},t)},100)}static get elementDefinitions(){return de([ue("ha-card"),ue("more-info-light"),ue("ha-switch"),ue("ha-icon"),ue("state-badge"),ue("ha-slider"),ue("ha-color-picker"),ue("ha-lovelace-color-picker"),ue("ha-select"),ue("mwc-list-item")],Te)}async firstUpdated(){this._firstUpdate=!0,await this._ensureColorPickerLoaded()}async _ensureColorPickerLoaded(){try{if(customElements.get("ha-color-picker"))return void me.debug("ha-color-picker already loaded");if(me.debug("Attempting to load ha-color-picker"),!customElements.get("ha-color-picker")&&window.loadCardHelpers)try{const e=await window.loadCardHelpers();if(e?.importMoreInfoControl?(await e.importMoreInfoControl("light"),me.debug('importMoreInfoControl("light") resolved')):e?.importMoreInfo&&(await e.importMoreInfo("light"),me.debug('importMoreInfo("light") resolved')),!customElements.get("ha-color-picker")&&e?.createCardElement&&this.config?.entity)try{const t=await e.createCardElement({type:"light",entity:this.config.entity});t.hass=this.hass;const i=document.createElement("div");i.style.cssText="position:absolute; left:-99999px; top:-99999px; width:0; height:0; overflow:hidden;",i.appendChild(t),document.body.appendChild(i),me.debug("Attached temporary hui-light-card to DOM to trigger imports"),await Promise.race([customElements.whenDefined("ha-color-picker"),customElements.whenDefined("ha-lovelace-color-picker"),new Promise(e=>setTimeout(e,1e3))]);try{document.body.removeChild(i)}catch(e){}}catch(e){me.debug("Temporary hui-light-card creation/attach failed",e)}}catch(e){me.debug("loadCardHelpers failed",e)}if(!customElements.get("ha-color-picker")&&window.loadCardHelpers)for(let e=0;e<8&&!customElements.get("ha-color-picker");e++){try{const e=await window.loadCardHelpers();e?.importMoreInfoControl?(await e.importMoreInfoControl("light"),me.debug('Retry importMoreInfoControl("light") resolved')):e?.importMoreInfo&&(await e.importMoreInfo("light"),me.debug('Retry importMoreInfo("light") resolved'))}catch(e){}await new Promise(e=>setTimeout(e,250))}if(!customElements.get("ha-color-picker")){document.querySelector("ha-color-picker")&&me.debug("Found existing ha-color-picker in DOM")}if(!customElements.get("ha-color-picker")&&!customElements.get("ha-lovelace-color-picker")){const e=new Promise((e,t)=>setTimeout(()=>t(new Error("Timeout waiting for ha-color-picker")),3e3));try{await Promise.race([customElements.whenDefined("ha-color-picker"),customElements.whenDefined("ha-lovelace-color-picker"),e]),me.debug("Color picker element loaded successfully"),this.requestUpdate()}catch(e){me.warn("ha-color-picker not available, color picker will not be displayed")}}try{customElements.get("ha-color-picker")||customElements.whenDefined("ha-color-picker").then(()=>{me.debug("ha-color-picker became available later"),this.requestUpdate()}),customElements.get("ha-lovelace-color-picker")||customElements.whenDefined("ha-lovelace-color-picker").then(()=>{me.debug("ha-lovelace-color-picker became available later"),this.requestUpdate()})}catch(e){}}catch(e){me.warn("Failed to load ha-color-picker",e)}}setConfig(e){if(!e.entity)throw Error("entity required.");this.config={...le,...e}}static async getConfigElement(){return document.createElement(Oe)}static get featureNames(){return ve}static get cmdToggle(){return{on:ye,off:$e}}static get entityLength(){return{light:be,switch:we}}getCardSize(){if(!this.config||!this.hass||!this.hass.states[this.config.entity])return 1;let e=0;const t=this.hass.states[this.config.entity];return Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.forEach(t=>e+=this.getEntityLength(t)):e+=this.getEntityLength(t.attributes.entity_id),this.config.group&&(e*=.8),parseInt(e.toString())}getEntityLength(e){return/^light\./.test(e)?Te.entityLength.light:/^switch\./.test(e)?Te.entityLength.switch:0}get styles(){return ae}get language(){return this.hass.resources[this.hass.language]}isEntityOn(e){return"on"===e.state}render(){const e=this.hass.states[this.config.entity];if(!e)return N`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(e),this.config.consolidate_entities?this._shownStateObjects=[e]:this._shownStateObjects=[...this._stateObjects];const t=this._shownStateObjects.reduce((e,t)=>N`${e}${this.createEntityTemplate(t)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return N`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${t}
      </ha-card>
    `}getEntitiesToShow(e){return e.attributes.entity_id&&Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.map(e=>this.hass.states[e]).filter(Boolean):[e]}createEntityTemplate(e){const t=this.config.full_width_sliders?"ha-slider-full-width":"";return N`
      ${this.createHeader(e)}
      <div class="light-entity-card-sliders ${t}">
        ${this.createBrightnessSlider(e)} ${this.createSpeedSlider(e)}
        ${this.createIntensitySlider(e)} ${this.createColorTemperature(e)}
        ${this.createWhiteValue(e)}
      </div>
      ${this.createColorPicker(e)} ${this.createEffectList(e)}
    `}createHeader(e){if(this.config.hide_header)return N``;const t=this.config.header||e.attributes.friendly_name||e.entity_id;return N`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(e)}
        <div class="light-entity-card__title">${t}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(e)} @change=${t=>this.setToggle(t,e)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(e){return this.config.show_header_icon?N`
      <div class="icon-container">
        <state-badge .stateObj=${e}></state-badge>
      </div>
    `:N``}createBrightnessSlider(e){return function(e,t,i){return!1===t.brightness||Ce("brightness",e,t)?N``:Ee(t.brightness_icon||"brightness-5",e.attributes.brightness||0,1,255,t=>i(t,e,"brightness"),t.show_slider_percent||!1)}(e,this.config,this._setValue.bind(this))}createSpeedSlider(e){return function(e,t,i){return!1===t.speed||Ce("speed",e,t)?N``:Ee(t.speed_icon||"speedometer",e.attributes.speed||0,1,255,t=>i(t,e,"speed"),t.show_slider_percent||!1)}(e,this.config,this._setValue.bind(this))}createIntensitySlider(e){return function(e,t,i){return!1===t.speed||Ce("intensity",e,t)?N``:Ee(t.intensity_icon||"brightness-7",e.attributes.intensity||0,1,255,t=>i(t,e,"intensity"),t.show_slider_percent||!1)}(e,this.config,this._setValue.bind(this))}createColorTemperature(e){return function(e,t,i){if(!1===t.color_temp)return N``;if(Ce("colorTemp",e,t))return N``;const s=t.temperature_icon||"thermometer",o=e.attributes.color_temp||0,r=e.attributes.min_mireds||153,n=e.attributes.max_mireds||500,c=ke(o,r-1,n-1,t.show_slider_percent||!1);return N`
    <div class="control light-entity-card-center">
      <div class="icon-container">
        <ha-icon icon="hass:${s}"></ha-icon>
      </div>
      <ha-slider
        class="light-entity-card-color_temp"
        min="${r}"
        max="${n}"
        .value=${o}
        @change="${t=>i(t,e,"color_temp")}"
      >
      </ha-slider>
      ${c}
    </div>
  `}(e,this.config,this._setValue.bind(this))}createWhiteValue(e){return function(e,t,i){return!1===t.white_value||Ce("whiteValue",e,t)?N``:Ee(t.white_icon||"file-word-box",e.attributes.white_value||0,0,255,t=>i(t,e,"white_value"),t.show_slider_percent||!1)}(e,this.config,this._setValue.bind(this))}createEffectList(e){return Se(e,this.config,this.hass,this.language,(e,t)=>{!function(e,t,i){e.target.value&&(me.debug("Effect selected",{entity:t.entity_id,effect:e.target.value}),i(e.target.value,t))}(e,t,(e,t)=>{this.callEntityService({effect:e},t)})})}createColorPicker(e){return function(e,t,i,s){if(!1===t.color_picker)return N``;if(Ce("color",e,t))return N``;const o=e.attributes.hs_color||[0,0],r="undefined"!=typeof customElements&&!!customElements.get("ha-color-picker"),n="undefined"!=typeof customElements&&!!customElements.get("ha-lovelace-color-picker");return r?N`
      <div class="light-entity-card__color-picker">
        <ha-color-picker
          .hass=${i}
          .desiredHsColor=${o}
          .value=${{hs:o}}
          @value-changed=${t=>s(t,e)}
          @color-changed=${t=>s(t,e)}
        ></ha-color-picker>
      </div>
    `:n?N`
      <div class="light-entity-card__color-picker">
        <ha-lovelace-color-picker
          .hass=${i}
          .desiredHsColor=${o}
          .value=${{hs:o}}
          @value-changed=${t=>s(t,e)}
          @color-changed=${t=>s(t,e)}
        ></ha-lovelace-color-picker>
      </div>
    `:N`<div class="light-entity-card__color-picker"></div>`}(e,this.config,this.hass,(e,t)=>{Ae(e,t,this._debouncedColorChange)})}_setValue(e,t,i){const s=parseInt(e.target.value,0);isNaN(s)||parseInt(t.attributes[i],0)===s||this.callEntityService({[i]:s},t)}setToggle(e,t){const i=this.isEntityOn(t)?Te.cmdToggle.off:Te.cmdToggle.on;this.callEntityService({},t,i)}callEntityService(e,t,i){if(this._firstUpdate)try{let s=t.entity_id.split(".")[0];"group"===s&&(s="homeassistant");const o=i||Te.cmdToggle.on,r={entity_id:t.entity_id,...e};me.debug("Calling service",{domain:s,service:o,data:r}),this.hass.callService(s,o,r)}catch(s){me.error("Failed to call service",s,{entity:t.entity_id,payload:e,state:i}),this.dispatchEvent(new CustomEvent("service-call-error",{detail:{error:s instanceof Error?s.message:"Unknown error",entity:t.entity_id},bubbles:!0,composed:!0}))}else me.debug("Skipping service call - component not yet initialized")}}e([se({type:Object})],Te.prototype,"hass",void 0),e([se({type:Object})],Te.prototype,"config",void 0),customElements.define("light-entity-card",Te),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"});
//# sourceMappingURL=light-entity-card.js.map
