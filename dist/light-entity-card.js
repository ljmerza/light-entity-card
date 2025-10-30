function t(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p};let v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(i=>{const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)})})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=s,this[s]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.1");const y=window,b=y.trustedTypes,m=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,x=`<${w}>`,k=document,S=(t="")=>k.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),R=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),U=new WeakMap,L=k.createTreeWalker(k,129,null,!1);let D=class t{constructor({strings:e,_$litType$:i},n){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,c]=((t,e)=>{const i=t.length-1,n=[];let s,r=2===e?"<svg>":"",o=A;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===A?"!--"===l[1]?o=O:void 0!==l[1]?o=P:void 0!==l[2]?(H.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=T):void 0!==l[3]&&(o=T):o===T?">"===l[0]?(o=null!=s?s:A,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?T:'"'===l[3]?j:R):o===j||o===R?o=T:o===O||o===P?o=A:(o=T,s=void 0);const d=o===T&&t[e+1].startsWith("/>")?" ":"";r+=o===A?i+x:h>=0?(n.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+d):i+$+(-2===h?(n.push(void 0),e):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,n]})(e,i);if(this.el=t.createElement(h,n),L.currentNode=this.el.content,2===i){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&l.length<a;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?K:"@"===e[1]?G:V})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),L.nextNode(),l.push({type:2,index:++r});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===w)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}};function W(t,e,i=t,n){var s,r,o,a;if(e===M)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,n)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);L.currentNode=s;let r=L.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new B(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Z(r,this,t)),this.u.push(e),l=n[++a]}o!==(null==l?void 0:l.index)&&(r=L.nextNode(),o++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}let B=class t{constructor(t,e,i,n){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),E(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=D.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new z(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new D(t)),e}k(e){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,s=0;for(const r of e)s===i.length?i.push(n=new t(this.O(S()),this.O(S()),this,this.options)):n=i[s],n._$AI(r),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},V=class{constructor(t,e,i,n,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(void 0===s)t=W(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const n=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=W(this,n[i+o],e,o),a===M&&(a=this._$AH[o]),r||(r=!E(a)||a!==this._$AH[o]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+s[o+1]),this._$AH[o]=a}r&&!n&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}};class F extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const q=b?b.emptyScript:"";let K=class extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}},G=class extends V{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:N)===M)return;const n=this._$AH,s=t===N&&n!==N||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==N&&(n===N||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},Z=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const J=y.litHtmlPolyfillSupport;null==J||J(D,B),(null!==(_=y.litHtmlVersions)&&void 0!==_?_:y.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Y;let Q=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let o=r._$litPart$;if(void 0===o){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=o=new B(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}};Q.finalized=!0,Q._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
var st,rt,ot,at,lt,ht={},ct=[],dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function ut(t,e){for(var i in e)t[i]=e[i];return t}function ft(t){var e=t.parentNode;e&&e.removeChild(t)}function pt(t,e,i){var n,s,r,o,a=arguments;if(e=ut({},e),arguments.length>3)for(i=[i],n=3;n<arguments.length;n++)i.push(a[n]);if(null!=i&&(e.children=i),null!=t&&null!=t.defaultProps)for(s in t.defaultProps)void 0===e[s]&&(e[s]=t.defaultProps[s]);return o=e.key,null!=(r=e.ref)&&delete e.ref,null!=o&&delete e.key,gt(t,e,o,r)}function gt(t,e,i,n){var s={type:t,props:e,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return st.vnode&&st.vnode(s),s}function vt(t){return t.children}function _t(t,e){this.props=t,this.context=e}function yt(t,e){if(null==e)return t.__p?yt(t.__p,t.__p.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?yt(t):null}function bt(t){var e,i;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return bt(t)}}function mt(t){(!t.__d&&(t.__d=!0)&&1===rt.push(t)||at!==st.debounceRendering)&&(at=st.debounceRendering,(st.debounceRendering||ot)($t))}function $t(){var t,e,i,n,s,r,o,a;for(rt.sort(function(t,e){return e.__v.__b-t.__v.__b});t=rt.pop();)t.__d&&(i=void 0,n=void 0,r=(s=(e=t).__v).__e,o=e.__P,a=e.u,e.u=!1,o&&(i=[],n=Ct(o,s,ut({},s),e.__n,void 0!==o.ownerSVGElement,null,i,a,r??yt(s)),At(i,s),n!=r&&bt(s)))}function wt(t,e,i,n,s,r,o,a,l){var h,c,d,u,f,p,g,v=i&&i.__k||ct,_=v.length;if(a==ht&&(a=null!=r?r[0]:_?yt(i,0):null),h=0,e.__k=xt(e.__k,function(i){if(null!=i){if(i.__p=e,i.__b=e.__b+1,null===(d=v[h])||d&&i.key==d.key&&i.type===d.type)v[h]=void 0;else for(c=0;c<_;c++){if((d=v[c])&&i.key==d.key&&i.type===d.type){v[c]=void 0;break}d=null}if(u=Ct(t,i,d=d||ht,n,s,r,o,null,a,l),(c=i.ref)&&d.ref!=c&&(g||(g=[])).push(c,i.__c||u,i),null!=u){if(null==p&&(p=u),null!=i.l)u=i.l,i.l=null;else if(r==d||u!=a||null==u.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(u);else{for(f=a,c=0;(f=f.nextSibling)&&c<_;c+=2)if(f==u)break t;t.insertBefore(u,a)}"option"==e.type&&(t.value="")}a=u.nextSibling,"function"==typeof e.type&&(e.l=u)}}return h++,i}),e.__e=p,null!=r&&"function"!=typeof e.type)for(h=r.length;h--;)null!=r[h]&&ft(r[h]);for(h=_;h--;)null!=v[h]&&Tt(v[h],v[h]);if(g)for(h=0;h<g.length;h++)Pt(g[h],g[++h],g[++h])}function xt(t,e,i){if(null==i&&(i=[]),null==t||"boolean"==typeof t)e&&i.push(e(null));else if(Array.isArray(t))for(var n=0;n<t.length;n++)xt(t[n],e,i);else i.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return gt(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=gt(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}(t)):t);return i}function kt(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]="number"==typeof i&&!1===dt.test(e)?i+"px":i??""}function St(t,e,i,n,s){var r,o,a,l,h;if("key"===(e=s?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(r=t.style,"string"==typeof i)r.cssText=i;else{if("string"==typeof n&&(r.cssText="",n=null),n)for(o in n)i&&o in i||kt(r,o,"");if(i)for(a in i)n&&i[a]===n[a]||kt(r,a,i[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),h=e.toLowerCase(),e=(h in t?h:e).slice(2),i?(n||t.addEventListener(e,Et,l),(t.t||(t.t={}))[e]=i):t.removeEventListener(e,Et,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&!s&&e in t?t[e]=i??"":"function"!=typeof i&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):null==i||!1===i?t.removeAttribute(e):t.setAttribute(e,i))}function Et(t){return this.t[t.type](st.event?st.event(t):t)}function Ct(t,e,i,n,s,r,o,a,l,h){var c,d,u,f,p,g,v,_,y,b,m=e.type;if(void 0!==e.constructor)return null;(c=st.__b)&&c(e);try{t:if("function"==typeof m){if(_=e.props,y=(c=m.contextType)&&n[c.__c],b=c?y?y.props.value:c.__p:n,i.__c?v=(d=e.__c=i.__c).__p=d.__E:("prototype"in m&&m.prototype.render?e.__c=d=new m(_,b):(e.__c=d=new _t(_,b),d.constructor=m,d.render=Rt),y&&y.sub(d),d.props=_,d.state||(d.state={}),d.context=b,d.__n=n,u=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=m.getDerivedStateFromProps&&ut(d.__s==d.state?d.__s=ut({},d.__s):d.__s,m.getDerivedStateFromProps(_,d.__s)),u)null==m.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&o.push(d);else{if(null==m.getDerivedStateFromProps&&null==a&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,b),!a&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,b)){for(d.props=_,d.state=d.__s,d.__d=!1,d.__v=e,e.__e=null!=l?l!==i.__e?l:i.__e:null,e.__k=i.__k,c=0;c<e.__k.length;c++)e.__k[c]&&(e.__k[c].__p=e);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,b)}for(f=d.props,p=d.state,d.context=b,d.props=_,d.state=d.__s,(c=st.__r)&&c(e),d.__d=!1,d.__v=e,d.__P=t,c=d.render(d.props,d.state,d.context),e.__k=xt(null!=c&&c.type==vt&&null==c.key?c.props.children:c),null!=d.getChildContext&&(n=ut(ut({},n),d.getChildContext())),u||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,p)),wt(t,e,i,n,s,r,o,l,h),d.base=e.__e;c=d.__h.pop();)d.__s&&(d.state=d.__s),c.call(d);u||null==f||null==d.componentDidUpdate||d.componentDidUpdate(f,p,g),v&&(d.__E=d.__p=null)}else e.__e=Ot(i.__e,e,i,n,s,r,o,h);(c=st.diffed)&&c(e)}catch(t){st.__e(t,e,i)}return e.__e}function At(t,e){for(var i;i=t.pop();)try{i.componentDidMount()}catch(t){st.__e(t,i.__v)}st.__c&&st.__c(e)}function Ot(t,e,i,n,s,r,o,a){var l,h,c,d,u=i.props,f=e.props;if(s="svg"===e.type||s,null==t&&null!=r)for(l=0;l<r.length;l++)if(null!=(h=r[l])&&(null===e.type?3===h.nodeType:h.localName===e.type)){t=h,r[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=s?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),r=null}return null===e.type?u!==f&&(null!=r&&(r[r.indexOf(t)]=null),t.data=f):e!==i&&(null!=r&&(r=ct.slice.call(t.childNodes)),c=(u=i.props||ht).dangerouslySetInnerHTML,d=f.dangerouslySetInnerHTML,a||(d||c)&&(d&&c&&d.__html==c.__html||(t.innerHTML=d&&d.__html||"")),function(t,e,i,n,s){var r;for(r in i)r in e||St(t,r,null,i[r],n);for(r in e)s&&"function"!=typeof e[r]||"value"===r||"checked"===r||i[r]===e[r]||St(t,r,e[r],i[r],n)}(t,f,u,s,a),e.__k=e.props.children,d||wt(t,e,i,n,"foreignObject"!==e.type&&s,r,o,ht,a),a||("value"in f&&void 0!==f.value&&f.value!==t.value&&(t.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==t.checked&&(t.checked=f.checked))),t}function Pt(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){st.__e(t,i)}}function Tt(t,e,i){var n,s,r;if(st.unmount&&st.unmount(t),(n=t.ref)&&Pt(n,null,e),i||"function"==typeof t.type||(i=null!=(s=t.__e)),t.__e=t.l=null,null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){st.__e(t,e)}n.base=n.__P=null}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&Tt(n[r],e,i);null!=s&&ft(s)}function Rt(t,e,i){return this.constructor(t,i)}function jt(t,e,i){return e&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,e),t}function Ht(){return Ht=Object.assign||function(t){for(var e=arguments,i=1;i<arguments.length;i++){var n=e[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ht.apply(this,arguments)}st={},_t.prototype.setState=function(t,e){var i=this.__s!==this.state&&this.__s||(this.__s=ut({},this.state));("function"!=typeof t||(t=t(i,this.props)))&&ut(i,t),null!=t&&this.__v&&(this.u=!1,e&&this.__h.push(e),mt(this))},_t.prototype.forceUpdate=function(t){this.__v&&(t&&this.__h.push(t),this.u=!0,mt(this))},_t.prototype.render=vt,rt=[],ot="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,at=st.debounceRendering,st.__e=function(t,e,i){for(var n;e=e.__p;)if((n=e.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(t));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(t)}return mt(n.__E=n)}catch(e){t=e}throw t},lt=ht;var It="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",Mt="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",Nt="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",Ut=new RegExp("rgb"+Mt),Lt=new RegExp("rgba"+Nt),Dt=new RegExp("hsl"+Mt),Wt=new RegExp("hsla"+Nt),zt="^(?:#?|0x?)",Bt="([0-9a-fA-F]{1})",Vt="([0-9a-fA-F]{2})",Ft=new RegExp(zt+Bt+Bt+Bt+"$"),qt=new RegExp(zt+Bt+Bt+Bt+Bt+"$"),Kt=new RegExp(zt+Vt+Vt+Vt+"$"),Gt=new RegExp(zt+Vt+Vt+Vt+Vt+"$"),Zt=Math.log,Jt=Math.round,Xt=Math.floor;function Yt(t,e,i){return Math.min(Math.max(t,e),i)}function Qt(t,e){var i=t.indexOf("%")>-1,n=parseFloat(t);return i?e/100*n:n}function te(t){return parseInt(t,16)}function ee(t){return t.toString(16).padStart(2,"0")}var ie=function(){function t(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=Ht({},this.$)}var e=t.prototype;return e.set=function(e){if("string"==typeof e)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(e)?this.hexString=e:/^rgba?/.test(e)?this.rgbString=e:/^hsla?/.test(e)&&(this.hslString=e);else{if("object"!=typeof e)throw new Error("Invalid color value");e instanceof t?this.hsva=e.hsva:"r"in e&&"g"in e&&"b"in e?this.rgb=e:"h"in e&&"s"in e&&"v"in e?this.hsv=e:"h"in e&&"s"in e&&"l"in e?this.hsl=e:"kelvin"in e&&(this.kelvin=e.kelvin)}},e.setChannel=function(t,e,i){var n;this[t]=Ht({},this[t],((n={})[e]=i,n))},e.reset=function(){this.hsva=this.initialValue},e.clone=function(){return new t(this)},e.unbind=function(){this.onChange=void 0},t.hsvToRgb=function(t){var e=t.h/60,i=t.s/100,n=t.v/100,s=Xt(e),r=e-s,o=n*(1-i),a=n*(1-r*i),l=n*(1-(1-r)*i),h=s%6,c=[l,n,n,a,o,o][h],d=[o,o,l,n,n,a][h];return{r:Yt(255*[n,a,o,o,l,n][h],0,255),g:Yt(255*c,0,255),b:Yt(255*d,0,255)}},t.rgbToHsv=function(t){var e=t.r/255,i=t.g/255,n=t.b/255,s=Math.max(e,i,n),r=Math.min(e,i,n),o=s-r,a=0,l=s,h=0===s?0:o/s;switch(s){case r:a=0;break;case e:a=(i-n)/o+(i<n?6:0);break;case i:a=(n-e)/o+2;break;case n:a=(e-i)/o+4}return{h:60*a%360,s:Yt(100*h,0,100),v:Yt(100*l,0,100)}},t.hsvToHsl=function(t){var e=t.s/100,i=t.v/100,n=(2-e)*i,s=n<=1?n:2-n,r=s<1e-9?0:e*i/s;return{h:t.h,s:Yt(100*r,0,100),l:Yt(50*n,0,100)}},t.hslToHsv=function(t){var e=2*t.l,i=t.s*(e<=100?e:200-e)/100,n=e+i<1e-9?0:2*i/(e+i);return{h:t.h,s:Yt(100*n,0,100),v:Yt((e+i)/2,0,100)}},t.kelvinToRgb=function(t){var e,i,n,s=t/100;return s<66?(e=255,i=-155.25485562709179-.44596950469579133*(i=s-2)+104.49216199393888*Zt(i),n=s<20?0:.8274096064007395*(n=s-10)-254.76935184120902+115.67994401066147*Zt(n)):(e=351.97690566805693+.114206453784165*(e=s-55)-40.25366309332127*Zt(e),i=325.4494125711974+.07943456536662342*(i=s-50)-28.0852963507957*Zt(i),n=255),{r:Yt(Xt(e),0,255),g:Yt(Xt(i),0,255),b:Yt(Xt(n),0,255)}},t.rgbToKelvin=function(e){for(var i,n=e.r,s=e.b,r=2e3,o=4e4;o-r>.4;){i=.5*(o+r);var a=t.kelvinToRgb(i);a.b/a.r>=s/n?o=i:r=i}return i},jt(t,[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var e=this.$;if(t=Ht({},e,t),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var n in e)i[n]=t[n]!=e[n];this.$=t,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=t}},{key:"hsva",get:function(){return Ht({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=Ht({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return t.rgbToKelvin(this.rgb)},set:function(e){this.rgb=t.kelvinToRgb(e)}},{key:"red",get:function(){return this.rgb.r},set:function(t){this.rgb=Ht({},this.rgb,{r:t})}},{key:"green",get:function(){return this.rgb.g},set:function(t){this.rgb=Ht({},this.rgb,{g:t})}},{key:"blue",get:function(){return this.rgb.b},set:function(t){this.rgb=Ht({},this.rgb,{b:t})}},{key:"rgb",get:function(){var e=t.hsvToRgb(this.$),i=e.r,n=e.g,s=e.b;return{r:Jt(i),g:Jt(n),b:Jt(s)}},set:function(e){this.hsv=Ht({},t.rgbToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"rgba",get:function(){return Ht({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var e=t.hsvToHsl(this.$),i=e.h,n=e.s,s=e.l;return{h:Jt(i),s:Jt(n),l:Jt(s)}},set:function(e){this.hsv=Ht({},t.hslToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"hsla",get:function(){return Ht({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var e,i,n,s,r=1;if((e=Ut.exec(t))?(i=Qt(e[1],255),n=Qt(e[2],255),s=Qt(e[3],255)):(e=Lt.exec(t))&&(i=Qt(e[1],255),n=Qt(e[2],255),s=Qt(e[3],255),r=Qt(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:i,g:n,b:s,a:r}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+ee(t.r)+ee(t.g)+ee(t.b)},set:function(t){var e,i,n,s,r=255;if((e=Ft.exec(t))?(i=17*te(e[1]),n=17*te(e[2]),s=17*te(e[3])):(e=qt.exec(t))?(i=17*te(e[1]),n=17*te(e[2]),s=17*te(e[3]),r=17*te(e[4])):(e=Kt.exec(t))?(i=te(e[1]),n=te(e[2]),s=te(e[3])):(e=Gt.exec(t))&&(i=te(e[1]),n=te(e[2]),s=te(e[3]),r=te(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:i,g:n,b:s,a:r/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+ee(t.r)+ee(t.g)+ee(t.b)+ee(Xt(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var e,i,n,s,r=1;if((e=Dt.exec(t))?(i=Qt(e[1],360),n=Qt(e[2],100),s=Qt(e[3],100)):(e=Wt.exec(t))&&(i=Qt(e[1],360),n=Qt(e[2],100),s=Qt(e[3],100),r=Qt(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:i,s:n,l:s,a:r}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}]),t}();function ne(t){var e,i=t.width,n=t.sliderSize,s=t.borderWidth,r=t.handleRadius,o=t.padding,a=t.sliderShape,l="horizontal"===t.layoutDirection;return n=null!=(e=n)?e:2*o+2*r,"circle"===a?{handleStart:t.padding+t.handleRadius,handleRange:i-2*o-2*r,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-s/2}:{handleStart:n/2,handleRange:i-n,radius:n/2,x:0,y:0,width:l?n:i,height:l?i:n}}function se(t,e){var i=ne(t),n=i.width,s=i.height,r=i.handleRange,o=i.handleStart,a="horizontal"===t.layoutDirection,l=function(t,e){var i=e.hsva,n=e.rgb;switch(t.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*i.a;case"kelvin":var s=t.minTemperature,r=t.maxTemperature-s,o=(e.kelvin-s)/r*100;return Math.max(0,Math.min(o,100));case"hue":return i.h/=3.6;case"saturation":return i.s;default:return i.v}}(t,e),h=a?n/2:s/2,c=o+l/100*r;return a&&(c=-1*c+r+2*o),{x:a?h:c,y:a?c:h}}var re,oe=2*Math.PI,ae=function(t,e){return Math.sqrt(t*t+e*e)};function le(t){return t.width/2-t.padding-t.handleRadius-t.borderWidth}function he(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function ce(t,e,i){var n=t.wheelAngle,s=t.wheelDirection;return i&&"clockwise"===s?e=n+e:"clockwise"===s?e=360-n+e:i&&"anticlockwise"===s?e=n+180-e:"anticlockwise"===s&&(e=n-e),function(t,e){return(t%e+e)%e}(e,360)}function de(t,e,i){var n=he(t),s=n.cx,r=n.cy,o=le(t);e=s-e,i=r-i;var a=ce(t,Math.atan2(-i,-e)*(360/oe)),l=Math.min(ae(e,i),o);return{h:Math.round(a),s:Math.round(100/o*l)}}function ue(t){var e=t.width,i=t.boxHeight;return{width:e,height:null!=i?i:e,radius:t.padding+t.handleRadius}}function fe(t,e,i){var n=ue(t),s=n.width,r=n.height,o=n.radius,a=(e-o)/(s-2*o)*100,l=(i-o)/(r-2*o)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function pe(t){re||(re=document.getElementsByTagName("base"));var e=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(e),n=/iPhone|iPod|iPad/i.test(e),s=window.location;return(i||n)&&re.length>0?s.protocol+"//"+s.host+s.pathname+s.search+t:t}function ge(t,e,i,n){for(var s=0;s<n.length;s++){var r=n[s].x-e,o=n[s].y-i;if(Math.sqrt(r*r+o*o)<t.handleRadius)return s}return null}function ve(t){return{boxSizing:"border-box",border:t.borderWidth+"px solid "+t.borderColor}}function _e(t,e,i){return t+"-gradient("+e+", "+i.map(function(t){var e=t[0];return t[1]+" "+e+"%"}).join(",")+")"}function ye(t){return"string"==typeof t?t:t+"px"}var be=["mousemove","touchmove","mouseup","touchend"],me=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(t){var e=this.handleEvent.bind(this),i={onMouseDown:e,ontouchstart:e},n="horizontal"===t.layoutDirection,s=null===t.margin?t.sliderMargin:t.margin,r={overflow:"visible",display:n?"inline-block":"block"};return t.index>0&&(r[n?"marginLeft":"marginTop"]=s),pt(vt,null,t.children(this.uid,i,r))},e.prototype.handleEvent=function(t){var e=this,i=this.props.onInput,n=this.base.getBoundingClientRect();t.preventDefault();var s=t.touches?t.changedTouches[0]:t,r=s.clientX-n.left,o=s.clientY-n.top;switch(t.type){case"mousedown":case"touchstart":!1!==i(r,o,0)&&be.forEach(function(t){document.addEventListener(t,e,{passive:!1})});break;case"mousemove":case"touchmove":i(r,o,1);break;case"mouseup":case"touchend":i(r,o,2),be.forEach(function(t){document.removeEventListener(t,e,{passive:!1})})}},e}(_t);function $e(t){var e=t.r,i=t.url,n=e,s=e;return pt("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+ye(t.x)+", "+ye(t.y)+")",willChange:"transform",top:ye(-e),left:ye(-e),width:ye(2*e),height:ye(2*e),position:"absolute",overflow:"visible"}},i&&pt("use",Object.assign({xlinkHref:pe(i)},t.props)),!i&&pt("circle",{cx:n,cy:s,r:e,fill:"none","stroke-width":2,stroke:"#000"}),!i&&pt("circle",{cx:n,cy:s,r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}function we(t){var e=t.activeIndex,i=void 0!==e&&e<t.colors.length?t.colors[e]:t.color,n=ne(t),s=n.width,r=n.height,o=n.radius,a=se(t,i),l=function(t,e){var i=e.hsv,n=e.rgb;switch(t.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var s=[],r=t.minTemperature,o=t.maxTemperature,a=o-r,l=r,h=0;l<o;l+=a/8,h+=1){var c=ie.kelvinToRgb(l),d=c.r,u=c.g,f=c.b;s.push([12.5*h,"rgb("+d+","+u+","+f+")"])}return s;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=ie.hsvToHsl({h:i.h,s:0,v:i.v}),g=ie.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];default:var v=ie.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+v.h+","+v.s+"%,"+v.l+"%)"]]}}(t,i);return pt(me,Object.assign({},t,{onInput:function(e,n,s){var r=function(t,e,i){var n,s=ne(t),r=s.handleRange,o=s.handleStart;n="horizontal"===t.layoutDirection?-1*i+r+o:e-o,n=Math.max(Math.min(n,r),0);var a=Math.round(100/r*n);switch(t.sliderType){case"kelvin":var l=t.minTemperature;return l+(t.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}(t,e,n);t.parent.inputActive=!0,i[t.sliderType]=r,t.onInput(s,t.id)}}),function(e,n,h){return pt("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:ye(s),height:ye(r),borderRadius:ye(o),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},h)}),pt("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:ye(o),background:_e("linear","horizontal"===t.layoutDirection?"to top":"to right",l)},ve(t))}),pt($e,{isActive:!0,index:i.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:a.x,y:a.y}))})}function xe(t){var e=ue(t),i=e.width,n=e.height,s=e.radius,r=t.colors,o=t.parent,a=t.activeIndex,l=void 0!==a&&a<t.colors.length?t.colors[a]:t.color,h=[[[0,"#fff"],[100,"hsl("+l.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]],c=r.map(function(e){return function(t,e){var i=ue(t),n=i.width,s=i.height,r=i.radius,o=e.hsv,a=r,l=n-2*r,h=s-2*r;return{x:a+o.s/100*l,y:a+(h-o.v/100*h)}}(t,e)});return pt(me,Object.assign({},t,{onInput:function(e,i,n){if(0===n){var s=ge(t,e,i,c);null!==s?o.setActiveColor(s):(o.inputActive=!0,l.hsv=fe(t,e,i),t.onInput(n,t.id))}else 1===n&&(o.inputActive=!0,l.hsv=fe(t,e,i));t.onInput(n,t.id)}}),function(e,o,a){return pt("div",Object.assign({},o,{className:"IroBox",style:Object.assign({},{width:ye(i),height:ye(n),position:"relative"},a)}),pt("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:ye(s)},ve(t),{background:_e("linear","to bottom",h[1])+","+_e("linear","to right",h[0])})}),r.filter(function(t){return t!==l}).map(function(e){return pt($e,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:c[e.index].x,y:c[e.index].y})}),pt($e,{isActive:!0,index:l.index,fill:l.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:c[l.index].x,y:c[l.index].y}))})}$e.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},we.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});function ke(t){var e=he(t).width,i=t.colors;t.borderWidth;var n=t.parent,s=t.color,r=s.hsv,o=i.map(function(e){return function(t,e){var i=e.hsv,n=he(t),s=n.cx,r=n.cy,o=le(t),a=(180+ce(t,i.h,!0))*(oe/360),l=i.s/100*o,h="clockwise"===t.wheelDirection?-1:1;return{x:s+l*Math.cos(a)*h,y:r+l*Math.sin(a)*h}}(t,e)}),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return pt(me,Object.assign({},t,{onInput:function(e,i,r){if(0===r){if(!function(t,e,i){var n=he(t),s=n.cx,r=n.cy,o=t.width/2;return ae(s-e,r-i)<o}(t,e,i))return!1;var a=ge(t,e,i,o);null!==a?n.setActiveColor(a):(n.inputActive=!0,s.hsv=de(t,e,i),t.onInput(r,t.id))}else 1===r&&(n.inputActive=!0,s.hsv=de(t,e,i));t.onInput(r,t.id)}}),function(n,l,h){return pt("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:ye(e),height:ye(e),position:"relative"},h)}),pt("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(t.wheelAngle+90)+"deg)",background:"clockwise"===t.wheelDirection?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"})}),pt("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),t.wheelLightness&&pt("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-r.v/100})}),pt("div",{className:"IroWheelBorder",style:Object.assign({},a,ve(t))}),i.filter(function(t){return t!==s}).map(function(e){return pt($e,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:o[e.index].x,y:o[e.index].y})}),pt($e,{isActive:!0,index:s.index,fill:s.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:o[s.index].x,y:o[s.index].y}))})}var Se=function(t){function e(e){var i=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id,(e.colors.length>0?e.colors:[e.color]).forEach(function(t){return i.addColor(t)}),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var i=new ie(t,this.onColorChange.bind(this));this.colors.splice(e,0,i),this.colors.forEach(function(t,e){return t.index=e}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach(function(t,e){return t.index=e}),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t,e){var i=this;void 0===e&&(e=0),this.colors.forEach(function(t){return t.unbind()}),this.colors=[],t.forEach(function(t){return i.addColor(t)}),this.setActiveColor(e),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var i=this,n=this.events;(Array.isArray(t)?t:[t]).forEach(function(t){(n[t]||(n[t]=[])).push(e),i.deferredEvents[t]&&(i.deferredEvents[t].forEach(function(t){e.apply(null,t)}),i.deferredEvents[t]=[])})},e.prototype.off=function(t,e){var i=this;(Array.isArray(t)?t:[t]).forEach(function(t){var n=i.events[t];n&&n.splice(n.indexOf(e),1)})},e.prototype.emit=function(t){for(var e=this,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var s=this.activeEvents;!!s.hasOwnProperty(t)&&s[t]||(s[t]=!0,(this.events[t]||[]).forEach(function(t){return t.apply(e,i)}),s[t]=!1)},e.prototype.deferredEmit=function(t){for(var e,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var s=this.deferredEvents;(e=this).emit.apply(e,[t].concat(i)),(s[t]||(s[t]=[])).push(i)},e.prototype.setOptions=function(t){this.setState(t)},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach(function(t){return t.reset()}),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t,e){0===t?this.emit("input:start",this.color,e):1===t?this.emit("input:move",this.color,e):2===t&&this.emit("input:end",this.color,e)},e.prototype.render=function(t,e){var i=this,n=e.layout;return Array.isArray(n)||(n=[{component:ke},{component:we}],e.transparency&&n.push({component:we,options:{sliderType:"alpha"}})),pt("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},n.map(function(t,n){var s=t.component,r=t.options;return pt(s,Object.assign({},e,r,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:n}))}))},e}(_t);Se.defaultProps=Object.assign({},{width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},{colors:[],display:"block",id:null,layout:"default",margin:null});var Ee,Ce,Ae,Oe=(Ce=function(t,e){var i,n=document.createElement("div");function s(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(i.base),i.onMount(e)}return function(t,e,i){var n,s,r;st.__p&&st.__p(t,e),s=(n=i===lt)?null:e.__k,t=pt(vt,null,[t]),r=[],Ct(e,e.__k=t,s||ht,ht,void 0!==e.ownerSVGElement,s?null:ct.slice.call(e.childNodes),r,!1,ht,n),At(r,t)}(pt(Ee,Object.assign({},{ref:function(t){return i=t}},e)),n),"loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s),i},Ce.prototype=(Ee=Se).prototype,Object.assign(Ce,Ee),Ce.__component=Ee,Ce);!function(t){var e;t.version="5.5.2",t.Color=ie,t.ColorPicker=Oe,(e=t.ui||(t.ui={})).h=pt,e.ComponentBase=me,e.Handle=$e,e.Slider=we,e.Wheel=ke,e.Box=xe}(Ae||(Ae={}));var Pe=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=window,Re=Te.ShadowRoot&&(void 0===Te.ShadyCSS||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function je(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:n}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const s=this.renderOptions.creationScope=this.attachShadow({...n,customElements:t.registry});return((t,e)=>{Re?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),n=Te.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})})(s,this.constructor.elementStyles),s}}}const He=o`
  .IroSlider {
    display: none !important;
  }

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
`;var Ie={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",color_wheel:!0,persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,color_picker:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,brightness_icon:"weather-sunny",white_icon:"file-word-box",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"};const Me=o`
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
`,Ne=(t,e)=>t.reduce((t,i)=>(i.defineId?t[i.defineId]=i:i.promise.then(t=>{void 0===e.registry.get(i.name)&&e.registry.define(i.name,t)}),t),{}),Ue=t=>({name:t,promise:customElements.whenDefined(t).then(()=>customElements.get(t))}),Le=(t,e,i={},n={})=>{const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s};class De extends(je(Q)){constructor(){super(...arguments),this._config={},this._firstRendered=!1}static get elementDefinitions(){return Ne([Ue("ha-checkbox"),Ue("ha-formfield"),Ue("ha-form-string"),Ue("ha-select"),Ue("mwc-list-item")],De)}static get styles(){return Me}setConfig(t){this._config={...Ie,...t}}get entityOptions(){const t=Object.keys(this.hass.states).filter(t=>["switch","light","group"].includes(t.substr(0,t.indexOf("."))));return t.sort(),t}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass)return I``;let{header:t}=this._config;if(!t&&this._config.entity){let e=this._config.entity.split(".")[1]||"";e&&(e=e.charAt(0).toUpperCase()+e.slice(1),t=e)}const e=this.entityOptions.map(t=>I`<mwc-list-item value="${t}" ?selected=${t===this._config.entity}>${t}</mwc-list-item>`);return I`
      <div class="card-config">

        <div class=overall-config'>
          <ha-form-string
            .schema=${{name:"header",type:"string"}}
            label="Header"
            .data="${t}"
            .configValue="${"header"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-select
            label="Entity"
            @selected="${this.configChanged}" 
            @closed="${t=>t.stopPropagation()}" 
            .configValue="${"entity"}"
          >
            ${e}
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
    `}configChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:e,value:i},detail:{value:n}}=t;this._config=null!=n?{...this._config,[e]:n}:{...this._config,[e]:i},Le(this,"config-changed",{config:this._config})}checkboxConfigChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:e,checked:i}}=t;this._config={...this._config,[e]:i},Le(this,"config-changed",{config:this._config})}}t([it({type:Object})],De.prototype,"hass",void 0),t([it({type:Object})],De.prototype,"_config",void 0);const We="light-entity-card-editor";customElements.define(We,De),console.info("light-entity-card v6.1.3");class ze extends(je(Q)){constructor(){super(...arguments),this._firstUpdate=!1,this._firstRendered=!1,this._stateObjects=[],this._shownStateObjects=[]}static get elementDefinitions(){return Ne([Ue("ha-card"),Ue("more-info-light"),Ue("ha-switch"),Ue("ha-icon"),Ue("state-badge"),Ue("ha-slider"),Ue("ha-color-picker"),Ue("ha-select"),Ue("mwc-list-item")],ze)}async firstUpdated(){this.setColorWheels(),this._firstUpdate=!0}async updated(){this.setColorWheels()}setColorWheels(){if(!this._shownStateObjects)return;const t=this.getColorPickerWidth();for(const e of this._shownStateObjects){const i=this.renderRoot.getElementById(`picker-${e.entity_id}`);if(!i)continue;i.innerHTML="";let n={h:0,s:0,l:50};if(e.attributes.hs_color){n={h:parseInt(e.attributes.hs_color[0]),s:parseInt(e.attributes.hs_color[1]),l:50}}new Pe.ColorPicker(i,{sliderSize:0,color:n,width:t,wheelLightness:!1}).on("input:end",t=>this.setColorPicker(t.hsl,e))}}getColorPickerWidth(){const t=this.shadowRoot.querySelector(".light-entity-card"),e=t?.offsetWidth||0,i=this.config.shorten_cards,n=e-(i?100:50),s=i?200:300;return s>n?n:s}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={...Ie,...t}}static async getConfigElement(){return document.createElement(We)}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}getCardSize(){if(!this.config||!this.hass||!this.hass.states[this.config.entity])return 1;let t=0;const e=this.hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t.toString())}getEntityLength(t){return/^light\./.test(t)?ze.entityLength.light:/^switch\./.test(t)?ze.entityLength.switch:0}get styles(){return He}get language(){return this.hass.resources[this.hass.language]}isEntityOn(t){return"on"===t.state}render(){const t=this.hass.states[this.config.entity];if(!t)return I`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(t),this.config.consolidate_entities?this._shownStateObjects=[t]:this._shownStateObjects=[...this._stateObjects];const e=this._shownStateObjects.reduce((t,e)=>I`${t}${this.createEntityTemplate(e)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return setTimeout(()=>{this.setColorWheels()},100),I`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${e}
      </ha-card>
    `}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.hass.states[t]).filter(Boolean):[t]}createEntityTemplate(t){const e=this.config.full_width_sliders?"ha-slider-full-width":"";return I`
      ${this.createHeader(t)}
      <div class="light-entity-card-sliders ${e}">
        ${this.createBrightnessSlider(t)} ${this.createSpeedSlider(t)}
        ${this.createIntensitySlider(t)} ${this.createColorTemperature(t)}
        ${this.createWhiteValue(t)}
      </div>
      ${this.createColorPicker(t)} ${this.createEffectList(t)}
    `}createHeader(t){if(this.config.hide_header)return I``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return I`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(t)}
        <div class="light-entity-card__title">${e}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(t){return this.config.show_header_icon?I`
      <div class="icon-container">
        <state-badge .stateObj=${t}></state-badge>
      </div>
    `:I``}createBrightnessSlider(t){return!1===this.config.brightness||this.dontShowFeature("brightness",t)?I``:I`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.brightness||0}"
          @change="${e=>this._setValue(e,t,"brightness")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.brightness,0,254)}
      </div>
    `}createSpeedSlider(t){return!1===this.config.speed||this.dontShowFeature("speed",t)?I``:I`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.speed_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.speed||0}"
          @change="${e=>this._setValue(e,t,"speed")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.speed,0,254)}
      </div>
    `}createIntensitySlider(t){return!1===this.config.speed||this.dontShowFeature("intensity",t)?I``:I`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.intensity_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.intensity||0}"
          @change="${e=>this._setValue(e,t,"intensity")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.intensity,0,254)}
      </div>
    `}showPercent(t,e,i){if(!this.config.show_slider_percent)return I``;let n=Math.floor(100*(t-e)/(i-e));return isNaN(n)&&(n=0),I` <div class="percent-slider">${n}%</div> `}createColorTemperature(t){if(!1===this.config.color_temp)return I``;if(this.dontShowFeature("colorTemp",t))return I``;const e=this.showPercent(t.attributes.color_temp,t.attributes.min_mireds-1,t.attributes.max_mireds-1);return I`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        </div>
        <ha-slider
          class="light-entity-card-color_temp"
          min="${t.attributes.min_mireds}"
          max="${t.attributes.max_mireds}"
          .value=${t.attributes.color_temp||0}
          @change="${e=>this._setValue(e,t,"color_temp")}"
        >
        </ha-slider>
        ${e}
      </div>
    `}createWhiteValue(t){return!1===this.config.white_value||this.dontShowFeature("whiteValue",t)?I``:I`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${t.attributes.white_value||0}"
          @change="${e=>this._setValue(e,t,"white_value")}"
        >
        </ha-slider>
        ${this.showPercent(t.attributes.white_value,0,254)}
      </div>
    `}createEffectList(t){if(!1===this.config.effects_list)return I``;if(!this.config.persist_features&&!this.isEntityOn(t))return I``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return I``;const i=e.map(e=>this.createListItem(t,e)),n=this.language["ui.card.light.effect"];return I`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select 
          @closed="${t=>t.stopPropagation()}" 
          @selected=${e=>this.setEffect(e,t)} 
          label="${n}" 
        >
          ${i}
        </ha-select>
      </div>
    `}createListItem(t,e){return I`<mwc-list-item value="${e}" ?selected=${e===t.attributes.effect}
      >${e}</mwc-list-item
    >`}createColorPicker(t){return!1===this.config.color_picker||this.dontShowFeature("color",t)?I``:I`
      <div class="light-entity-card__color-picker">
        <div id="picker-${t.entity_id}"></div>
      </div>
    `}dontShowFeature(t,e){if(this.config.force_features)return!1;if("speed"===t&&"speed"in e.attributes)return!0;if("intensity"===t&&"intensity"in e.attributes)return!0;let i=ze.featureNames[t]&e.attributes.supported_features;const n=e.attributes.supported_color_modes||[];if(!i)switch(t){case"brightness":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"brightness"),!i){const t=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"colorTemp":if(n){const t=["color_temp"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"effectList":i=e.attributes.effect_list&&e.attributes.effect_list.length;break;case"color":if(!i){const t=["hs","rgb","rgbw","rgbww","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"whiteValue":i=Object.prototype.hasOwnProperty.call(e.attributes,"white_value");break;default:i=!1}return!i||(!this.config.persist_features&&!this.isEntityOn(e)||void 0)}setColorPicker(t,e){this.callEntityService({hs_color:[t.h,t.s]},e)}_setValue(t,e,i){const n=parseInt(t.target.value,0);isNaN(n)||parseInt(e.attributes[i],0)===n||this.callEntityService({[i]:n},e)}setToggle(t,e){const i=this.isEntityOn(e)?ze.cmdToggle.off:ze.cmdToggle.on;this.callEntityService({},e,i)}setEffect(t,e){t.target.value&&this.callEntityService({effect:t.target.value},e)}callEntityService(t,e,i){if(!this._firstUpdate)return;let n=e.entity_id.split(".")[0];"group"===n&&(n="homeassistant"),this.hass.callService(n,i||ze.cmdToggle.on,{entity_id:e.entity_id,...t})}}t([it({type:Object})],ze.prototype,"hass",void 0),t([it({type:Object})],ze.prototype,"config",void 0),customElements.define("light-entity-card",ze),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"});
//# sourceMappingURL=light-entity-card.js.map
