(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),r=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(o,e)},i=(e,n)=>{t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;//# sourceMappingURL=css-tag.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$1;const e$1=window.trustedTypes,r$1=e$1?e$1.emptyScript:"",h=window.reactiveElementPolyfillSupport,o$1={toAttribute(t$$1,i$$1){switch(i$$1){case Boolean:t$$1=t$$1?r$1:null;break;case Object:case Array:t$$1=null==t$$1?t$$1:JSON.stringify(t$$1);}return t$$1},fromAttribute(t$$1,i$$1){let s$$1=t$$1;switch(i$$1){case Boolean:s$$1=null!==t$$1;break;case Number:s$$1=null===t$$1?null:Number(t$$1);break;case Object:case Array:try{s$$1=JSON.parse(t$$1);}catch(t$$1){s$$1=null;}}return s$$1}},n$1=(t$$1,i$$1)=>i$$1!==t$$1&&(i$$1==i$$1||t$$1==t$$1),l={attribute:!0,type:String,converter:o$1,reflect:!1,hasChanged:n$1};class a extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t$$1){var i$$1;null!==(i$$1=this.l)&&void 0!==i$$1||(this.l=[]),this.l.push(t$$1);}static get observedAttributes(){this.finalize();const t$$1=[];return this.elementProperties.forEach(((i$$1,s$$1)=>{const e=this._$Eh(s$$1,i$$1);void 0!==e&&(this._$Eu.set(e,s$$1),t$$1.push(e));})),t$$1}static createProperty(t$$1,i$$1=l){if(i$$1.state&&(i$$1.attribute=!1),this.finalize(),this.elementProperties.set(t$$1,i$$1),!i$$1.noAccessor&&!this.prototype.hasOwnProperty(t$$1)){const s$$1="symbol"==typeof t$$1?Symbol():"__"+t$$1,e=this.getPropertyDescriptor(t$$1,s$$1,i$$1);void 0!==e&&Object.defineProperty(this.prototype,t$$1,e);}}static getPropertyDescriptor(t$$1,i$$1,s$$1){return {get(){return this[i$$1]},set(e){const r$$1=this[t$$1];this[i$$1]=e,this.requestUpdate(t$$1,r$$1,s$$1);},configurable:!0,enumerable:!0}}static getPropertyOptions(t$$1){return this.elementProperties.get(t$$1)||l}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t$$1=Object.getPrototypeOf(this);if(t$$1.finalize(),this.elementProperties=new Map(t$$1.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t$$1=this.properties,i$$1=[...Object.getOwnPropertyNames(t$$1),...Object.getOwnPropertySymbols(t$$1)];for(const s$$1 of i$$1)this.createProperty(s$$1,t$$1[s$$1]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i$$1){const s$$1=[];if(Array.isArray(i$$1)){const e=new Set(i$$1.flat(1/0).reverse());for(const i$$1 of e)s$$1.unshift(S(i$$1));}else void 0!==i$$1&&s$$1.push(S(i$$1));return s$$1}static _$Eh(t$$1,i$$1){const s$$1=i$$1.attribute;return !1===s$$1?void 0:"string"==typeof s$$1?s$$1:"string"==typeof t$$1?t$$1.toLowerCase():void 0}o(){var t$$1;this._$Ep=new Promise((t$$1=>this.enableUpdating=t$$1)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t$$1=this.constructor.l)||void 0===t$$1||t$$1.forEach((t$$1=>t$$1(this)));}addController(t$$1){var i$$1,s$$1;(null!==(i$$1=this._$Eg)&&void 0!==i$$1?i$$1:this._$Eg=[]).push(t$$1),void 0!==this.renderRoot&&this.isConnected&&(null===(s$$1=t$$1.hostConnected)||void 0===s$$1||s$$1.call(t$$1));}removeController(t$$1){var i$$1;null===(i$$1=this._$Eg)||void 0===i$$1||i$$1.splice(this._$Eg.indexOf(t$$1)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t$$1,i$$1)=>{this.hasOwnProperty(i$$1)&&(this._$Et.set(i$$1,this[i$$1]),delete this[i$$1]);}));}createRenderRoot(){var t$$1;const s$$1=null!==(t$$1=this.shadowRoot)&&void 0!==t$$1?t$$1:this.attachShadow(this.constructor.shadowRootOptions);return i(s$$1,this.constructor.elementStyles),s$$1}connectedCallback(){var t$$1;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t$$1=this._$Eg)||void 0===t$$1||t$$1.forEach((t$$1=>{var i$$1;return null===(i$$1=t$$1.hostConnected)||void 0===i$$1?void 0:i$$1.call(t$$1)}));}enableUpdating(t$$1){}disconnectedCallback(){var t$$1;null===(t$$1=this._$Eg)||void 0===t$$1||t$$1.forEach((t$$1=>{var i$$1;return null===(i$$1=t$$1.hostDisconnected)||void 0===i$$1?void 0:i$$1.call(t$$1)}));}attributeChangedCallback(t$$1,i$$1,s$$1){this._$AK(t$$1,s$$1);}_$ES(t$$1,i$$1,s$$1=l){var e,r$$1;const h=this.constructor._$Eh(t$$1,s$$1);if(void 0!==h&&!0===s$$1.reflect){const n=(null!==(r$$1=null===(e=s$$1.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r$$1?r$$1:o$1.toAttribute)(i$$1,s$$1.type);this._$Ei=t$$1,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t$$1,i$$1){var s$$1,e,r$$1;const h=this.constructor,n=h._$Eu.get(t$$1);if(void 0!==n&&this._$Ei!==n){const t$$1=h.getPropertyOptions(n),l=t$$1.converter,a=null!==(r$$1=null!==(e=null===(s$$1=l)||void 0===s$$1?void 0:s$$1.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r$$1?r$$1:o$1.fromAttribute;this._$Ei=n,this[n]=a(i$$1,t$$1.type),this._$Ei=null;}}requestUpdate(t$$1,i$$1,s$$1){let e=!0;void 0!==t$$1&&(((s$$1=s$$1||this.constructor.getPropertyOptions(t$$1)).hasChanged||n$1)(this[t$$1],i$$1)?(this._$AL.has(t$$1)||this._$AL.set(t$$1,i$$1),!0===s$$1.reflect&&this._$Ei!==t$$1&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t$$1,s$$1))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t$$1){Promise.reject(t$$1);}const t$$1=this.scheduleUpdate();return null!=t$$1&&await t$$1,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t$$1;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t$$1,i$$1)=>this[i$$1]=t$$1)),this._$Et=void 0);let i$$1=!1;const s$$1=this._$AL;try{i$$1=this.shouldUpdate(s$$1),i$$1?(this.willUpdate(s$$1),null===(t$$1=this._$Eg)||void 0===t$$1||t$$1.forEach((t$$1=>{var i$$1;return null===(i$$1=t$$1.hostUpdate)||void 0===i$$1?void 0:i$$1.call(t$$1)})),this.update(s$$1)):this._$EU();}catch(t$$1){throw i$$1=!1,this._$EU(),t$$1}i$$1&&this._$AE(s$$1);}willUpdate(t$$1){}_$AE(t$$1){var i$$1;null===(i$$1=this._$Eg)||void 0===i$$1||i$$1.forEach((t$$1=>{var i$$1;return null===(i$$1=t$$1.hostUpdated)||void 0===i$$1?void 0:i$$1.call(t$$1)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t$$1)),this.updated(t$$1);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t$$1){return !0}update(t$$1){void 0!==this._$EC&&(this._$EC.forEach(((t$$1,i$$1)=>this._$ES(i$$1,this[i$$1],t$$1))),this._$EC=void 0),this._$EU();}updated(t$$1){}firstUpdated(t$$1){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:a}),(null!==(s$1=globalThis.reactiveElementVersions)&&void 0!==s$1?s$1:globalThis.reactiveElementVersions=[]).push("1.3.0");//# sourceMappingURL=reactive-element.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$1=globalThis.trustedTypes,s$2=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$2,n$2=`<${o$2}>`,l$1=document,h$1=(t="")=>l$1.createComment(t),r$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a$1=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a$1:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a$1?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$2:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$2+y):s+e$2+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$2?s$2.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$2)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$2),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$2),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=l.data.indexOf(e$2,t+1));)c.push({type:7,index:r}),t+=e$2.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$2(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$2(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r$2(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$1()),this.A(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$2(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$2(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S$1{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S$1{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.0");//# sourceMappingURL=lit-html.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l$2,o$3;class s$3 extends a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t$$1,e;const i$$1=super.createRenderRoot();return null!==(t$$1=(e=this.renderOptions).renderBefore)&&void 0!==t$$1||(e.renderBefore=i$$1.firstChild),i$$1}update(t$$1){const i$$1=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t$$1),this._$Dt=x(i$$1,this.renderRoot,this.renderOptions);}connectedCallback(){var t$$1;super.connectedCallback(),null===(t$$1=this._$Dt)||void 0===t$$1||t$$1.setConnected(!0);}disconnectedCallback(){var t$$1;super.disconnectedCallback(),null===(t$$1=this._$Dt)||void 0===t$$1||t$$1.setConnected(!1);}render(){return b}}s$3.finalized=!0,s$3._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$3});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$3});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.2.0");//# sourceMappingURL=lit-element.js.map

  //# sourceMappingURL=index.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$3(e){return class extends e{createRenderRoot(){const e=this.constructor,{registry:s$$1,elementDefinitions:n,shadowRootOptions:o$$1}=e;n&&!s$$1&&(e.registry=new CustomElementRegistry,Object.entries(n).forEach((([t$$1,s$$1])=>e.registry.define(t$$1,s$$1))));const i$$1=this.renderOptions.creationScope=this.attachShadow({...o$$1,customElements:e.registry});return i(i$$1,this.constructor.elementStyles),i$$1}}}//# sourceMappingURL=scoped-registry-mixin.js.map

  const style = r`
  .light-entity-card {
    padding: 16px;
  }

  .light-entity-child-card {
    box-shadow: none !important;
    padding: 0 !important;
  }

  .light-entity-card.group {
    padding-bottom: 0;
    padding-top: 0;
  }

  .ha-slider-full-width ha-slider {
    width: 100%;
  }

  .percent-slider {
    color: var(--primary-text-color);
    margin-top: 5px;
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
  
  .light-entity-card-color_temp {
    background-image: var(--ha-slider-background);
  }

  .group .light-entity-card-effectlist {
    margin-top: -25px;
  }

  .light-entity-card-center {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .light-entity-card-toggle {
    margin-right: 5px;
  }

  .hidden {
    display: none;
  }

  .icon-container {
    margin-top: 4px;
  }
`;

  var defaultConfig = {
    shorten_cards: false,
    consolidate_entities: false,
    child_card: false,
    hide_header: false,
    header: '',

    color_wheel: true,
    persist_features: false,
    brightness: true,
    color_temp: true,
    white_value: true,
    color_picker: true,
    smooth_color_wheel: false,
    speed: true,
    intensity: true,

    force_features: false,

    show_slider_percent: false,
    full_width_sliders: false,

    brightness_icon: 'weather-sunny',
    white_icon: 'file-word-box',
    temperature_icon: 'thermometer',
    speed_icon: 'speedometer',
    intensity_icon: 'transit-connection-horizontal',
  };

  const style$1 = r`
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

  const buildElementDefinitions = (elements, constructor) => elements.reduce((aggregate, element) => {
    if (element.defineId) {
      // eslint-disable-next-line no-param-reassign
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

  const globalElementLoader = name => ({
    name,
    promise: customElements.whenDefined(name).then(() => customElements.get(name)),
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Specifies an observer callback that is run when the decorated property
   * changes. The observer receives the current and old value as arguments.
   */
  const observer = (observer) => 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (proto, propName) => {
      // if we haven't wrapped `updated` in this class, do so
      if (!proto.constructor
          ._observers) {
          proto.constructor._observers = new Map();
          const userUpdated = proto.updated;
          proto.updated = function (changedProperties) {
              userUpdated.call(this, changedProperties);
              changedProperties.forEach((v, k) => {
                  const observers = this.constructor
                      ._observers;
                  const observer = observers.get(k);
                  if (observer !== undefined) {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      observer.call(this, this[k], v);
                  }
              });
          };
          // clone any existing observers (superclasses)
          // eslint-disable-next-line no-prototype-builtins
      }
      else if (!proto.constructor.hasOwnProperty('_observers')) {
          const observers = proto.constructor._observers;
          proto.constructor._observers = new Map();
          observers.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (v, k) => proto.constructor._observers.set(k, v));
      }
      // set this method
      proto.constructor._observers.set(propName, observer);
  };
  //# sourceMappingURL=observer.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Class that encapsulates the events handlers for `mwc-ripple`
   *
   *
   * Example:
   * ```
   * class XFoo extends LitElement {
   *   async getRipple() {
   *     this.renderRipple = true;
   *     await this.updateComplete;
   *     return this.renderRoot.querySelector('mwc-ripple');
   *   }
   *   rippleHandlers = new RippleHandlers(() => this.getRipple());
   *
   *   render() {
   *     return html`
   *       <div @mousedown=${this.rippleHandlers.startPress}></div>
   *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
   *     `;
   *   }
   * }
   * ```
   */
  class RippleHandlers {
      constructor(
      /** Function that returns a `mwc-ripple` */
      rippleFn) {
          this.startPress = (ev) => {
              rippleFn().then((r) => {
                  r && r.startPress(ev);
              });
          };
          this.endPress = () => {
              rippleFn().then((r) => {
                  r && r.endPress();
              });
          };
          this.startFocus = () => {
              rippleFn().then((r) => {
                  r && r.startFocus();
              });
          };
          this.endFocus = () => {
              rippleFn().then((r) => {
                  r && r.endFocus();
              });
          };
          this.startHover = () => {
              rippleFn().then((r) => {
                  r && r.startHover();
              });
          };
          this.endHover = () => {
              rippleFn().then((r) => {
                  r && r.endHover();
              });
          };
      }
  }
  //# sourceMappingURL=ripple-handlers.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  //# sourceMappingURL=custom-element.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}//# sourceMappingURL=property.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$2(t){return e$4({...t,state:!0})}//# sourceMappingURL=state.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$4=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};//# sourceMappingURL=base.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$6(e){return o$4({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}//# sourceMappingURL=event-options.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i$3(i,n){return o$4({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}//# sourceMappingURL=query.js.map

  //# sourceMappingURL=query-all.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function e$8(e){return o$4({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}//# sourceMappingURL=query-async.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$5;const e$9=null!=(null===(n$5=window.HTMLSlotElement)||void 0===n$5?void 0:n$5.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$3(n){const{slot:l,selector:t}=null!=n?n:{};return o$4({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$9(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}//# sourceMappingURL=query-assigned-elements.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function o$5(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$3({slot:s,flatten:n,selector:r}):o$4({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}//# sourceMappingURL=query-assigned-nodes.js.map

  //# sourceMappingURL=decorators.js.map

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$a=t=>(...e)=>({_$litDirective$:t,values:e});class i$4{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}//# sourceMappingURL=directive.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$6=e$a(class extends i$4{constructor(t){var i;if(super(t),t.type!==t$4.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(s)}const e=i.element.classList;this.et.forEach((t=>{t in s||(e.remove(t),this.et.delete(t));}));for(const t in s){const i=!!s[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.et.add(t)):(e.remove(t),this.et.delete(t)));}return b}});//# sourceMappingURL=class-map.js.map

  //# sourceMappingURL=class-map.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @fires request-selected {RequestSelectedDetail}
   * @fires list-item-rendered
   */
  class ListItemBase extends s$3 {
      constructor() {
          super(...arguments);
          this.value = '';
          this.group = null;
          this.tabindex = -1;
          this.disabled = false;
          this.twoline = false;
          this.activated = false;
          this.graphic = null;
          this.multipleGraphics = false;
          this.hasMeta = false;
          this.noninteractive = false;
          this.selected = false;
          this.shouldRenderRipple = false;
          this._managingList = null;
          this.boundOnClick = this.onClick.bind(this);
          this._firstChanged = true;
          this._skipPropRequest = false;
          this.rippleHandlers = new RippleHandlers(() => {
              this.shouldRenderRipple = true;
              return this.ripple;
          });
          this.listeners = [
              {
                  target: this,
                  eventNames: ['click'],
                  cb: () => {
                      this.onClick();
                  },
              },
              {
                  target: this,
                  eventNames: ['mouseenter'],
                  cb: this.rippleHandlers.startHover,
              },
              {
                  target: this,
                  eventNames: ['mouseleave'],
                  cb: this.rippleHandlers.endHover,
              },
              {
                  target: this,
                  eventNames: ['focus'],
                  cb: this.rippleHandlers.startFocus,
              },
              {
                  target: this,
                  eventNames: ['blur'],
                  cb: this.rippleHandlers.endFocus,
              },
              {
                  target: this,
                  eventNames: ['mousedown', 'touchstart'],
                  cb: (e) => {
                      const name = e.type;
                      this.onDown(name === 'mousedown' ? 'mouseup' : 'touchend', e);
                  },
              },
          ];
      }
      get text() {
          const textContent = this.textContent;
          return textContent ? textContent.trim() : '';
      }
      render() {
          const text = this.renderText();
          const graphic = this.graphic ? this.renderGraphic() : $ ``;
          const meta = this.hasMeta ? this.renderMeta() : $ ``;
          return $ `
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
      }
      renderRipple() {
          if (this.shouldRenderRipple) {
              return $ `
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
          }
          else if (this.activated) {
              return $ `<div class="fake-activated-ripple"></div>`;
          }
          else {
              return '';
          }
      }
      renderGraphic() {
          const graphicClasses = {
              multi: this.multipleGraphics,
          };
          return $ `
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$6(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
      }
      renderMeta() {
          return $ `
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
      }
      renderText() {
          const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
          return $ `
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
      }
      renderSingleLine() {
          return $ `<slot></slot>`;
      }
      renderTwoline() {
          return $ `
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
      }
      onClick() {
          this.fireRequestSelected(!this.selected, 'interaction');
      }
      onDown(upName, evt) {
          const onUp = () => {
              window.removeEventListener(upName, onUp);
              this.rippleHandlers.endPress();
          };
          window.addEventListener(upName, onUp);
          this.rippleHandlers.startPress(evt);
      }
      fireRequestSelected(selected, source) {
          if (this.noninteractive) {
              return;
          }
          const customEv = new CustomEvent('request-selected', { bubbles: true, composed: true, detail: { source, selected } });
          this.dispatchEvent(customEv);
      }
      connectedCallback() {
          super.connectedCallback();
          if (!this.noninteractive) {
              this.setAttribute('mwc-list-item', '');
          }
          for (const listener of this.listeners) {
              for (const eventName of listener.eventNames) {
                  listener.target.addEventListener(eventName, listener.cb, { passive: true });
              }
          }
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          for (const listener of this.listeners) {
              for (const eventName of listener.eventNames) {
                  listener.target.removeEventListener(eventName, listener.cb);
              }
          }
          if (this._managingList) {
              this._managingList.debouncedLayout ?
                  this._managingList.debouncedLayout(true) :
                  this._managingList.layout(true);
          }
      }
      // composed flag, event fire through shadow root and up through composed tree
      firstUpdated() {
          const ev = new Event('list-item-rendered', { bubbles: true, composed: true });
          this.dispatchEvent(ev);
      }
  }
  __decorate([
      i$3('slot')
  ], ListItemBase.prototype, "slotElement", void 0);
  __decorate([
      e$8('mwc-ripple')
  ], ListItemBase.prototype, "ripple", void 0);
  __decorate([
      e$4({ type: String })
  ], ListItemBase.prototype, "value", void 0);
  __decorate([
      e$4({ type: String, reflect: true })
  ], ListItemBase.prototype, "group", void 0);
  __decorate([
      e$4({ type: Number, reflect: true })
  ], ListItemBase.prototype, "tabindex", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true }),
      observer(function (value) {
          if (value) {
              this.setAttribute('aria-disabled', 'true');
          }
          else {
              this.setAttribute('aria-disabled', 'false');
          }
      })
  ], ListItemBase.prototype, "disabled", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true })
  ], ListItemBase.prototype, "twoline", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true })
  ], ListItemBase.prototype, "activated", void 0);
  __decorate([
      e$4({ type: String, reflect: true })
  ], ListItemBase.prototype, "graphic", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], ListItemBase.prototype, "multipleGraphics", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], ListItemBase.prototype, "hasMeta", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true }),
      observer(function (value) {
          if (value) {
              this.removeAttribute('aria-checked');
              this.removeAttribute('mwc-list-item');
              this.selected = false;
              this.activated = false;
              this.tabIndex = -1;
          }
          else {
              this.setAttribute('mwc-list-item', '');
          }
      })
  ], ListItemBase.prototype, "noninteractive", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true }),
      observer(function (value) {
          const role = this.getAttribute('role');
          const isAriaSelectable = role === 'gridcell' || role === 'option' ||
              role === 'row' || role === 'tab';
          if (isAriaSelectable && value) {
              this.setAttribute('aria-selected', 'true');
          }
          else if (isAriaSelectable) {
              this.setAttribute('aria-selected', 'false');
          }
          if (this._firstChanged) {
              this._firstChanged = false;
              return;
          }
          if (this._skipPropRequest) {
              return;
          }
          this.fireRequestSelected(value, 'property');
      })
  ], ListItemBase.prototype, "selected", void 0);
  __decorate([
      t$2()
  ], ListItemBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
      t$2()
  ], ListItemBase.prototype, "_managingList", void 0);
  //# sourceMappingURL=mwc-list-item-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles = r `:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
  //# sourceMappingURL=mwc-list-item.css.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function matches(element, selector) {
      var nativeMatches = element.matches
          || element.webkitMatchesSelector
          || element.msMatchesSelector;
      return nativeMatches.call(element, selector);
  }
  //# sourceMappingURL=ponyfill.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // Style preference for leading underscores.
  // tslint:disable:strip-private-property-underscore
  /**
   * Determines whether a node is an element.
   *
   * @param node Node to check
   */
  const isNodeElement = (node) => {
      return node.nodeType === Node.ELEMENT_NODE;
  };
  function addHasRemoveClass(element) {
      return {
          addClass: (className) => {
              element.classList.add(className);
          },
          removeClass: (className) => {
              element.classList.remove(className);
          },
          hasClass: (className) => element.classList.contains(className),
      };
  }
  const fn = () => { };
  const optionsBlock = {
      get passive() {
          return false;
      }
  };
  document.addEventListener('x', fn, optionsBlock);
  document.removeEventListener('x', fn);
  const deepActiveElementPath = (doc = window.document) => {
      let activeElement = doc.activeElement;
      const path = [];
      if (!activeElement) {
          return path;
      }
      while (activeElement) {
          path.push(activeElement);
          if (activeElement.shadowRoot) {
              activeElement = activeElement.shadowRoot.activeElement;
          }
          else {
              break;
          }
      }
      return path;
  };
  const doesElementContainFocus = (element) => {
      const activePath = deepActiveElementPath();
      if (!activePath.length) {
          return false;
      }
      const deepActiveElement = activePath[activePath.length - 1];
      const focusEv = new Event('check-if-focused', { bubbles: true, composed: true });
      let composedPath = [];
      const listener = (ev) => {
          composedPath = ev.composedPath();
      };
      document.body.addEventListener('check-if-focused', listener);
      deepActiveElement.dispatchEvent(focusEv);
      document.body.removeEventListener('check-if-focused', listener);
      return composedPath.indexOf(element) !== -1;
  };
  //# sourceMappingURL=utils.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /** @soyCompatible */
  class BaseElement extends s$3 {
      click() {
          if (this.mdcRoot) {
              this.mdcRoot.focus();
              this.mdcRoot.click();
              return;
          }
          super.click();
      }
      /**
       * Create and attach the MDC Foundation to the instance
       */
      createFoundation() {
          if (this.mdcFoundation !== undefined) {
              this.mdcFoundation.destroy();
          }
          if (this.mdcFoundationClass) {
              this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
              this.mdcFoundation.init();
          }
      }
      firstUpdated() {
          this.createFoundation();
      }
  }
  //# sourceMappingURL=base-element.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFoundation = /** @class */ (function () {
      function MDCFoundation(adapter) {
          if (adapter === void 0) { adapter = {}; }
          this.adapter = adapter;
      }
      Object.defineProperty(MDCFoundation, "cssClasses", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "strings", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "numbers", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "defaultAdapter", {
          get: function () {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
          },
          enumerable: false,
          configurable: true
      });
      MDCFoundation.prototype.init = function () {
          // Subclasses should override this method to perform initialization routines (registering events, etc.)
      };
      MDCFoundation.prototype.destroy = function () {
          // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
      };
      return MDCFoundation;
  }());
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  };
  var strings = {
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top',
  };
  var numbers = {
      DEACTIVATION_TIMEOUT_MS: 225,
      FG_DEACTIVATION_MS: 150,
      INITIAL_ORIGIN_SCALE: 0.6,
      PADDING: 10,
      TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
  };
  //# sourceMappingURL=constants.js.map

  /**
   * Stores result from supportsCssVariables to avoid redundant processing to
   * detect CSS custom variable support.
   */
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
      if (!evt) {
          return { x: 0, y: 0 };
      }
      var x = pageOffset.x, y = pageOffset.y;
      var documentX = x + clientRect.left;
      var documentY = y + clientRect.top;
      var normalizedX;
      var normalizedY;
      // Determine touch point relative to the ripple container.
      if (evt.type === 'touchstart') {
          var touchEvent = evt;
          normalizedX = touchEvent.changedTouches[0].pageX - documentX;
          normalizedY = touchEvent.changedTouches[0].pageY - documentY;
      }
      else {
          var mouseEvent = evt;
          normalizedX = mouseEvent.pageX - documentX;
          normalizedY = mouseEvent.pageY - documentY;
      }
      return { x: normalizedX, y: normalizedY };
  }
  //# sourceMappingURL=util.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  // Activation events registered on the root element of each instance for activation
  var ACTIVATION_EVENT_TYPES = [
      'touchstart', 'pointerdown', 'mousedown', 'keydown',
  ];
  // Deactivation events registered on documentElement when a pointer-related down event occurs
  var POINTER_DEACTIVATION_EVENT_TYPES = [
      'touchend', 'pointerup', 'mouseup', 'contextmenu',
  ];
  // simultaneous nested activations
  var activatedTargets = [];
  var MDCRippleFoundation = /** @class */ (function (_super) {
      __extends(MDCRippleFoundation, _super);
      function MDCRippleFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
          _this.activationAnimationHasEnded = false;
          _this.activationTimer = 0;
          _this.fgDeactivationRemovalTimer = 0;
          _this.fgScale = '0';
          _this.frame = { width: 0, height: 0 };
          _this.initialSize = 0;
          _this.layoutFrame = 0;
          _this.maxRadius = 0;
          _this.unboundedCoords = { left: 0, top: 0 };
          _this.activationState = _this.defaultActivationState();
          _this.activationTimerCallback = function () {
              _this.activationAnimationHasEnded = true;
              _this.runDeactivationUXLogicIfReady();
          };
          _this.activateHandler = function (e) {
              _this.activateImpl(e);
          };
          _this.deactivateHandler = function () {
              _this.deactivateImpl();
          };
          _this.focusHandler = function () {
              _this.handleFocus();
          };
          _this.blurHandler = function () {
              _this.handleBlur();
          };
          _this.resizeHandler = function () {
              _this.layout();
          };
          return _this;
      }
      Object.defineProperty(MDCRippleFoundation, "cssClasses", {
          get: function () {
              return cssClasses;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "strings", {
          get: function () {
              return strings;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "numbers", {
          get: function () {
              return numbers;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addClass: function () { return undefined; },
                  browserSupportsCssVars: function () { return true; },
                  computeBoundingRect: function () {
                      return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                  },
                  containsEventTarget: function () { return true; },
                  deregisterDocumentInteractionHandler: function () { return undefined; },
                  deregisterInteractionHandler: function () { return undefined; },
                  deregisterResizeHandler: function () { return undefined; },
                  getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                  isSurfaceActive: function () { return true; },
                  isSurfaceDisabled: function () { return true; },
                  isUnbounded: function () { return true; },
                  registerDocumentInteractionHandler: function () { return undefined; },
                  registerInteractionHandler: function () { return undefined; },
                  registerResizeHandler: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  updateCssVariable: function () { return undefined; },
              };
          },
          enumerable: false,
          configurable: true
      });
      MDCRippleFoundation.prototype.init = function () {
          var _this = this;
          var supportsPressRipple = this.supportsPressRipple();
          this.registerRootHandlers(supportsPressRipple);
          if (supportsPressRipple) {
              var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
              requestAnimationFrame(function () {
                  _this.adapter.addClass(ROOT_1);
                  if (_this.adapter.isUnbounded()) {
                      _this.adapter.addClass(UNBOUNDED_1);
                      // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                      _this.layoutInternal();
                  }
              });
          }
      };
      MDCRippleFoundation.prototype.destroy = function () {
          var _this = this;
          if (this.supportsPressRipple()) {
              if (this.activationTimer) {
                  clearTimeout(this.activationTimer);
                  this.activationTimer = 0;
                  this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
              }
              if (this.fgDeactivationRemovalTimer) {
                  clearTimeout(this.fgDeactivationRemovalTimer);
                  this.fgDeactivationRemovalTimer = 0;
                  this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
              }
              var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
              requestAnimationFrame(function () {
                  _this.adapter.removeClass(ROOT_2);
                  _this.adapter.removeClass(UNBOUNDED_2);
                  _this.removeCssVars();
              });
          }
          this.deregisterRootHandlers();
          this.deregisterDeactivationHandlers();
      };
      /**
       * @param evt Optional event containing position information.
       */
      MDCRippleFoundation.prototype.activate = function (evt) {
          this.activateImpl(evt);
      };
      MDCRippleFoundation.prototype.deactivate = function () {
          this.deactivateImpl();
      };
      MDCRippleFoundation.prototype.layout = function () {
          var _this = this;
          if (this.layoutFrame) {
              cancelAnimationFrame(this.layoutFrame);
          }
          this.layoutFrame = requestAnimationFrame(function () {
              _this.layoutInternal();
              _this.layoutFrame = 0;
          });
      };
      MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
          var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
          if (unbounded) {
              this.adapter.addClass(UNBOUNDED);
          }
          else {
              this.adapter.removeClass(UNBOUNDED);
          }
      };
      MDCRippleFoundation.prototype.handleFocus = function () {
          var _this = this;
          requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
      };
      MDCRippleFoundation.prototype.handleBlur = function () {
          var _this = this;
          requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
      };
      /**
       * We compute this property so that we are not querying information about the client
       * until the point in time where the foundation requests it. This prevents scenarios where
       * client-side feature-detection may happen too early, such as when components are rendered on the server
       * and then initialized at mount time on the client.
       */
      MDCRippleFoundation.prototype.supportsPressRipple = function () {
          return this.adapter.browserSupportsCssVars();
      };
      MDCRippleFoundation.prototype.defaultActivationState = function () {
          return {
              activationEvent: undefined,
              hasDeactivationUXRun: false,
              isActivated: false,
              isProgrammatic: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
          };
      };
      /**
       * supportsPressRipple Passed from init to save a redundant function call
       */
      MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
          var e_1, _a;
          if (supportsPressRipple) {
              try {
                  for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                      var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                      this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              if (this.adapter.isUnbounded()) {
                  this.adapter.registerResizeHandler(this.resizeHandler);
              }
          }
          this.adapter.registerInteractionHandler('focus', this.focusHandler);
          this.adapter.registerInteractionHandler('blur', this.blurHandler);
      };
      MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
          var e_2, _a;
          if (evt.type === 'keydown') {
              this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
          }
          else {
              try {
                  for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                      var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                      this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
          }
      };
      MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
          var e_3, _a;
          try {
              for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                  var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                  this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
              }
              finally { if (e_3) throw e_3.error; }
          }
          this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
          this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
          if (this.adapter.isUnbounded()) {
              this.adapter.deregisterResizeHandler(this.resizeHandler);
          }
      };
      MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
          var e_4, _a;
          this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
          try {
              for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                  var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                  this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
              }
          }
          catch (e_4_1) { e_4 = { error: e_4_1 }; }
          finally {
              try {
                  if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
              }
              finally { if (e_4) throw e_4.error; }
          }
      };
      MDCRippleFoundation.prototype.removeCssVars = function () {
          var _this = this;
          var rippleStrings = MDCRippleFoundation.strings;
          var keys = Object.keys(rippleStrings);
          keys.forEach(function (key) {
              if (key.indexOf('VAR_') === 0) {
                  _this.adapter.updateCssVariable(rippleStrings[key], null);
              }
          });
      };
      MDCRippleFoundation.prototype.activateImpl = function (evt) {
          var _this = this;
          if (this.adapter.isSurfaceDisabled()) {
              return;
          }
          var activationState = this.activationState;
          if (activationState.isActivated) {
              return;
          }
          // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
          var previousActivationEvent = this.previousActivationEvent;
          var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
          if (isSameInteraction) {
              return;
          }
          activationState.isActivated = true;
          activationState.isProgrammatic = evt === undefined;
          activationState.activationEvent = evt;
          activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
          var hasActivatedChild = evt !== undefined &&
              activatedTargets.length > 0 &&
              activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
          if (hasActivatedChild) {
              // Immediately reset activation state, while preserving logic that prevents touch follow-on events
              this.resetActivationState();
              return;
          }
          if (evt !== undefined) {
              activatedTargets.push(evt.target);
              this.registerDeactivationHandlers(evt);
          }
          activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
          if (activationState.wasElementMadeActive) {
              this.animateActivation();
          }
          requestAnimationFrame(function () {
              // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
              activatedTargets = [];
              if (!activationState.wasElementMadeActive
                  && evt !== undefined
                  && (evt.key === ' ' || evt.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                  if (activationState.wasElementMadeActive) {
                      _this.animateActivation();
                  }
              }
              if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this.activationState = _this.defaultActivationState();
              }
          });
      };
      MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
          return (evt !== undefined && evt.type === 'keydown') ?
              this.adapter.isSurfaceActive() :
              true;
      };
      MDCRippleFoundation.prototype.animateActivation = function () {
          var _this = this;
          var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
          var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
          var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal();
          var translateStart = '';
          var translateEnd = '';
          if (!this.adapter.isUnbounded()) {
              var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
              translateStart = startPoint.x + "px, " + startPoint.y + "px";
              translateEnd = endPoint.x + "px, " + endPoint.y + "px";
          }
          this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
          this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
          // Cancel any ongoing activation/deactivation animations
          clearTimeout(this.activationTimer);
          clearTimeout(this.fgDeactivationRemovalTimer);
          this.rmBoundedActivationClasses();
          this.adapter.removeClass(FG_DEACTIVATION);
          // Force layout in order to re-trigger the animation.
          this.adapter.computeBoundingRect();
          this.adapter.addClass(FG_ACTIVATION);
          this.activationTimer = setTimeout(function () {
              _this.activationTimerCallback();
          }, DEACTIVATION_TIMEOUT_MS);
      };
      MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
          var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
          var startPoint;
          if (wasActivatedByPointer) {
              startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
          }
          else {
              startPoint = {
                  x: this.frame.width / 2,
                  y: this.frame.height / 2,
              };
          }
          // Center the element around the start point.
          startPoint = {
              x: startPoint.x - (this.initialSize / 2),
              y: startPoint.y - (this.initialSize / 2),
          };
          var endPoint = {
              x: (this.frame.width / 2) - (this.initialSize / 2),
              y: (this.frame.height / 2) - (this.initialSize / 2),
          };
          return { startPoint: startPoint, endPoint: endPoint };
      };
      MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
          var _this = this;
          // This method is called both when a pointing device is released, and when the activation animation ends.
          // The deactivation animation should only run after both of those occur.
          var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
          var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
          var activationHasEnded = hasDeactivationUXRun || !isActivated;
          if (activationHasEnded && this.activationAnimationHasEnded) {
              this.rmBoundedActivationClasses();
              this.adapter.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer = setTimeout(function () {
                  _this.adapter.removeClass(FG_DEACTIVATION);
              }, numbers.FG_DEACTIVATION_MS);
          }
      };
      MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
          this.adapter.removeClass(FG_ACTIVATION);
          this.activationAnimationHasEnded = false;
          this.adapter.computeBoundingRect();
      };
      MDCRippleFoundation.prototype.resetActivationState = function () {
          var _this = this;
          this.previousActivationEvent = this.activationState.activationEvent;
          this.activationState = this.defaultActivationState();
          // Touch devices may fire additional events for the same interaction within a short time.
          // Store the previous event until it's safe to assume that subsequent events are for new interactions.
          setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      };
      MDCRippleFoundation.prototype.deactivateImpl = function () {
          var _this = this;
          var activationState = this.activationState;
          // This can happen in scenarios such as when you have a keyup event that blurs the element.
          if (!activationState.isActivated) {
              return;
          }
          var state = __assign({}, activationState);
          if (activationState.isProgrammatic) {
              requestAnimationFrame(function () {
                  _this.animateDeactivation(state);
              });
              this.resetActivationState();
          }
          else {
              this.deregisterDeactivationHandlers();
              requestAnimationFrame(function () {
                  _this.activationState.hasDeactivationUXRun = true;
                  _this.animateDeactivation(state);
                  _this.resetActivationState();
              });
          }
      };
      MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
          var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
          if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady();
          }
      };
      MDCRippleFoundation.prototype.layoutInternal = function () {
          var _this = this;
          this.frame = this.adapter.computeBoundingRect();
          var maxDim = Math.max(this.frame.height, this.frame.width);
          // Surface diameter is treated differently for unbounded vs. bounded ripples.
          // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
          // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
          // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
          // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
          // `overflow: hidden`.
          var getBoundedRadius = function () {
              var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
          };
          this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
          // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
          var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
          // Unbounded ripple size should always be even number to equally center align.
          if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
              this.initialSize = initialSize - 1;
          }
          else {
              this.initialSize = initialSize;
          }
          this.fgScale = "" + this.maxRadius / this.initialSize;
          this.updateLayoutCssVars();
      };
      MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
          var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
          this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
          this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
          if (this.adapter.isUnbounded()) {
              this.unboundedCoords = {
                  left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                  top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
              };
              this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
              this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
          }
      };
      return MDCRippleFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i$5=e$a(class extends i$4{constructor(t){var e;if(super(t),t.type!==t$4.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ct){this.ct=new Set;for(const t in r)this.ct.add(t);return this.render(r)}this.ct.forEach((t=>{null==r[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b}});//# sourceMappingURL=style-map.js.map

  //# sourceMappingURL=style-map.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /** @soyCompatible */
  class RippleBase extends BaseElement {
      constructor() {
          super(...arguments);
          this.primary = false;
          this.accent = false;
          this.unbounded = false;
          this.disabled = false;
          this.activated = false;
          this.selected = false;
          this.internalUseStateLayerCustomProperties = false;
          this.hovering = false;
          this.bgFocused = false;
          this.fgActivation = false;
          this.fgDeactivation = false;
          this.fgScale = '';
          this.fgSize = '';
          this.translateStart = '';
          this.translateEnd = '';
          this.leftPos = '';
          this.topPos = '';
          this.mdcFoundationClass = MDCRippleFoundation;
      }
      get isActive() {
          return matches(this.parentElement || this, ':active');
      }
      createAdapter() {
          return {
              browserSupportsCssVars: () => true,
              isUnbounded: () => this.unbounded,
              isSurfaceActive: () => this.isActive,
              isSurfaceDisabled: () => this.disabled,
              addClass: (className) => {
                  switch (className) {
                      case 'mdc-ripple-upgraded--background-focused':
                          this.bgFocused = true;
                          break;
                      case 'mdc-ripple-upgraded--foreground-activation':
                          this.fgActivation = true;
                          break;
                      case 'mdc-ripple-upgraded--foreground-deactivation':
                          this.fgDeactivation = true;
                          break;
                      default:
                          break;
                  }
              },
              removeClass: (className) => {
                  switch (className) {
                      case 'mdc-ripple-upgraded--background-focused':
                          this.bgFocused = false;
                          break;
                      case 'mdc-ripple-upgraded--foreground-activation':
                          this.fgActivation = false;
                          break;
                      case 'mdc-ripple-upgraded--foreground-deactivation':
                          this.fgDeactivation = false;
                          break;
                      default:
                          break;
                  }
              },
              containsEventTarget: () => true,
              registerInteractionHandler: () => undefined,
              deregisterInteractionHandler: () => undefined,
              registerDocumentInteractionHandler: () => undefined,
              deregisterDocumentInteractionHandler: () => undefined,
              registerResizeHandler: () => undefined,
              deregisterResizeHandler: () => undefined,
              updateCssVariable: (varName, value) => {
                  switch (varName) {
                      case '--mdc-ripple-fg-scale':
                          this.fgScale = value;
                          break;
                      case '--mdc-ripple-fg-size':
                          this.fgSize = value;
                          break;
                      case '--mdc-ripple-fg-translate-end':
                          this.translateEnd = value;
                          break;
                      case '--mdc-ripple-fg-translate-start':
                          this.translateStart = value;
                          break;
                      case '--mdc-ripple-left':
                          this.leftPos = value;
                          break;
                      case '--mdc-ripple-top':
                          this.topPos = value;
                          break;
                      default:
                          break;
                  }
              },
              computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
              getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
          };
      }
      startPress(ev) {
          this.waitForFoundation(() => {
              this.mdcFoundation.activate(ev);
          });
      }
      endPress() {
          this.waitForFoundation(() => {
              this.mdcFoundation.deactivate();
          });
      }
      startFocus() {
          this.waitForFoundation(() => {
              this.mdcFoundation.handleFocus();
          });
      }
      endFocus() {
          this.waitForFoundation(() => {
              this.mdcFoundation.handleBlur();
          });
      }
      startHover() {
          this.hovering = true;
      }
      endHover() {
          this.hovering = false;
      }
      /**
       * Wait for the MDCFoundation to be created by `firstUpdated`
       */
      waitForFoundation(fn) {
          if (this.mdcFoundation) {
              fn();
          }
          else {
              this.updateComplete.then(fn);
          }
      }
      update(changedProperties) {
          if (changedProperties.has('disabled')) {
              // stop hovering when ripple is disabled to prevent a stuck "hover" state
              // When re-enabled, the outer component will get a `mouseenter` event on
              // the first movement, which will call `startHover()`
              if (this.disabled) {
                  this.endHover();
              }
          }
          super.update(changedProperties);
      }
      /** @soyTemplate */
      render() {
          const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
          const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
          /** @classMap */
          const classes = {
              'mdc-ripple-surface--accent': this.accent,
              'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
              'mdc-ripple-surface--accent--activated': this.accent && this.activated,
              'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
              'mdc-ripple-surface--accent--selected': this.accent && this.selected,
              'mdc-ripple-surface--disabled': this.disabled,
              'mdc-ripple-surface--hover': this.hovering,
              'mdc-ripple-surface--primary': this.primary,
              'mdc-ripple-surface--selected': this.selected,
              'mdc-ripple-upgraded--background-focused': this.bgFocused,
              'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
              'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
              'mdc-ripple-upgraded--unbounded': this.unbounded,
              'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
          };
          return $ `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$6(classes)}"
          style="${i$5({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
      }
  }
  __decorate([
      i$3('.mdc-ripple-surface')
  ], RippleBase.prototype, "mdcRoot", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "primary", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "accent", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "unbounded", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "disabled", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "activated", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "selected", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "hovering", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "bgFocused", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "fgActivation", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "fgDeactivation", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "fgScale", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "fgSize", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "translateStart", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "translateEnd", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "leftPos", void 0);
  __decorate([
      t$2()
  ], RippleBase.prototype, "topPos", void 0);
  //# sourceMappingURL=mwc-ripple-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$1 = r `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
  //# sourceMappingURL=mwc-ripple.css.js.map

  class MwcRipple extends e$3(RippleBase) {
    static get defineId() { return 'mwc-ripple'; }

    static get elementDefinitions() {
      return buildElementDefinitions([], MwcRipple);
    }

    static get styles() {
      return styles$1;
    }
  }

  class MwcListItem extends e$3(ListItemBase) {
    static get defineId() { return 'mwc-list-item'; }

    static get elementDefinitions() {
      return buildElementDefinitions([MwcRipple], MwcListItem);
    }

    static get styles() {
      return styles;
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * KEY provides normalized string values for keys.
   */
  var KEY = {
      UNKNOWN: 'Unknown',
      BACKSPACE: 'Backspace',
      ENTER: 'Enter',
      SPACEBAR: 'Spacebar',
      PAGE_UP: 'PageUp',
      PAGE_DOWN: 'PageDown',
      END: 'End',
      HOME: 'Home',
      ARROW_LEFT: 'ArrowLeft',
      ARROW_UP: 'ArrowUp',
      ARROW_RIGHT: 'ArrowRight',
      ARROW_DOWN: 'ArrowDown',
      DELETE: 'Delete',
      ESCAPE: 'Escape',
      TAB: 'Tab',
  };
  var normalizedKeys = new Set();
  // IE11 has no support for new Map with iterable so we need to initialize this
  // by hand.
  normalizedKeys.add(KEY.BACKSPACE);
  normalizedKeys.add(KEY.ENTER);
  normalizedKeys.add(KEY.SPACEBAR);
  normalizedKeys.add(KEY.PAGE_UP);
  normalizedKeys.add(KEY.PAGE_DOWN);
  normalizedKeys.add(KEY.END);
  normalizedKeys.add(KEY.HOME);
  normalizedKeys.add(KEY.ARROW_LEFT);
  normalizedKeys.add(KEY.ARROW_UP);
  normalizedKeys.add(KEY.ARROW_RIGHT);
  normalizedKeys.add(KEY.ARROW_DOWN);
  normalizedKeys.add(KEY.DELETE);
  normalizedKeys.add(KEY.ESCAPE);
  normalizedKeys.add(KEY.TAB);
  var KEY_CODE = {
      BACKSPACE: 8,
      ENTER: 13,
      SPACEBAR: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      DELETE: 46,
      ESCAPE: 27,
      TAB: 9,
  };
  var mappedKeyCodes = new Map();
  // IE11 has no support for new Map with iterable so we need to initialize this
  // by hand.
  mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
  mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
  mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
  mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
  mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
  mappedKeyCodes.set(KEY_CODE.END, KEY.END);
  mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
  mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
  mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
  mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
  mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
  mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
  mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
  mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
  var navigationKeys = new Set();
  // IE11 has no support for new Set with iterable so we need to initialize this
  // by hand.
  navigationKeys.add(KEY.PAGE_UP);
  navigationKeys.add(KEY.PAGE_DOWN);
  navigationKeys.add(KEY.END);
  navigationKeys.add(KEY.HOME);
  navigationKeys.add(KEY.ARROW_LEFT);
  navigationKeys.add(KEY.ARROW_UP);
  navigationKeys.add(KEY.ARROW_RIGHT);
  navigationKeys.add(KEY.ARROW_DOWN);
  /**
   * normalizeKey returns the normalized string for a navigational action.
   */
  function normalizeKey(evt) {
      var key = evt.key;
      // If the event already has a normalized key, return it
      if (normalizedKeys.has(key)) {
          return key;
      }
      // tslint:disable-next-line:deprecation
      var mappedKey = mappedKeyCodes.get(evt.keyCode);
      if (mappedKey) {
          return mappedKey;
      }
      return KEY.UNKNOWN;
  }
  //# sourceMappingURL=keyboard.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var _a, _b;
  var cssClasses$1 = {
      LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
      LIST_ITEM_CLASS: 'mdc-list-item',
      LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
      LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
      LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
      LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
      ROOT: 'mdc-list',
  };
  var evolutionClassNameMap = (_a = {},
      _a["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
      _a["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-list-item',
      _a["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
      _a["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
      _a["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
      _a["" + cssClasses$1.ROOT] = 'mdc-list',
      _a);
  var deprecatedClassNameMap = (_b = {},
      _b["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
      _b["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
      _b["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
      _b["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
      _b["" + cssClasses$1.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
      _b["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
      _b["" + cssClasses$1.ROOT] = 'mdc-deprecated-list',
      _b);
  var strings$1 = {
      ACTION_EVENT: 'MDCList:action',
      ARIA_CHECKED: 'aria-checked',
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
      ARIA_CURRENT: 'aria-current',
      ARIA_DISABLED: 'aria-disabled',
      ARIA_ORIENTATION: 'aria-orientation',
      ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_SELECTED: 'aria-selected',
      ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
      ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a\n  ",
      DEPRECATED_SELECTOR: '.mdc-deprecated-list',
      FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
      RADIO_SELECTOR: 'input[type="radio"]',
      SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
  };
  var numbers$1 = {
      UNSET_INDEX: -1,
      TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
  };
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   *
   * @param evt keyboard event to be prevented.
   */
  var preventDefaultEvent = function (evt) {
      var target = evt.target;
      if (!target) {
          return;
      }
      var tagName = ("" + target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
          evt.preventDefault();
      }
  };
  //# sourceMappingURL=events.js.map

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * Initializes a state object for typeahead. Use the same reference for calls to
   * typeahead functions.
   *
   * @return The current state of the typeahead process. Each state reference
   *     represents a typeahead instance as the reference is typically mutated
   *     in-place.
   */
  function initState() {
      var state = {
          bufferClearTimeout: 0,
          currentFirstChar: '',
          sortedIndexCursor: 0,
          typeaheadBuffer: '',
      };
      return state;
  }
  /**
   * Initializes typeahead state by indexing the current list items by primary
   * text into the sortedIndexByFirstChar data structure.
   *
   * @param listItemCount numer of items in the list
   * @param getPrimaryTextByItemIndex function that returns the primary text at a
   *     given index
   *
   * @return Map that maps the first character of the primary text to the full
   *     list text and it's index
   */
  function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
      var sortedIndexByFirstChar = new Map();
      // Aggregate item text to index mapping
      for (var i = 0; i < listItemCount; i++) {
          var primaryText = getPrimaryTextByItemIndex(i).trim();
          if (!primaryText) {
              continue;
          }
          var firstChar = primaryText[0].toLowerCase();
          if (!sortedIndexByFirstChar.has(firstChar)) {
              sortedIndexByFirstChar.set(firstChar, []);
          }
          sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
      }
      // Sort the mapping
      // TODO(b/157162694): Investigate replacing forEach with Map.values()
      sortedIndexByFirstChar.forEach(function (values) {
          values.sort(function (first, second) {
              return first.index - second.index;
          });
      });
      return sortedIndexByFirstChar;
  }
  /**
   * Given the next desired character from the user, it attempts to find the next
   * list option matching the buffer. Wraps around if at the end of options.
   *
   * @param opts Options and accessors
   *   - nextChar - the next character to match against items
   *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
   *   - focusedItemIndex - the index of the currently focused item
   *   - focusItemAtIndex - function that focuses a list item at given index
   *   - skipFocus - whether or not to focus the matched item
   *   - isItemAtIndexDisabled - function that determines whether an item at a
   *        given index is disabled
   * @param state The typeahead state instance. See `initState`.
   *
   * @return The index of the matched item, or -1 if no match.
   */
  function matchItem(opts, state) {
      var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
      clearTimeout(state.bufferClearTimeout);
      state.bufferClearTimeout = setTimeout(function () {
          clearBuffer(state);
      }, numbers$1.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
      state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
      var index;
      if (state.typeaheadBuffer.length === 1) {
          index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
      }
      else {
          index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
      }
      if (index !== -1 && !skipFocus) {
          focusItemAtIndex(index);
      }
      return index;
  }
  /**
   * Matches the user's single input character in the buffer to the
   * next option that begins with such character. Wraps around if at
   * end of options. Returns -1 if no match is found.
   */
  function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
      var firstChar = state.typeaheadBuffer[0];
      var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
      if (!itemsMatchingFirstChar) {
          return -1;
      }
      // Has the same firstChar been recently matched?
      // Also, did starting index remain the same between key presses?
      // If both hold true, simply increment index.
      if (firstChar === state.currentFirstChar &&
          itemsMatchingFirstChar[state.sortedIndexCursor].index ===
              focusedItemIndex) {
          state.sortedIndexCursor =
              (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
          var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
          if (!isItemAtIndexDisabled(newIndex)) {
              return newIndex;
          }
      }
      // If we're here, it means one of the following happened:
      // - either firstChar or startingIndex has changed, invalidating the
      // cursor.
      // - The next item of typeahead is disabled, so we have to look further.
      state.currentFirstChar = firstChar;
      var newCursorPosition = -1;
      var cursorPosition;
      // Find the first non-disabled item as a fallback.
      for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
          if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
              newCursorPosition = cursorPosition;
              break;
          }
      }
      // Advance cursor to first item matching the firstChar that is positioned
      // after starting item. Cursor is unchanged from fallback if there's no
      // such item.
      for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
          if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex &&
              !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
              newCursorPosition = cursorPosition;
              break;
          }
      }
      if (newCursorPosition !== -1) {
          state.sortedIndexCursor = newCursorPosition;
          return itemsMatchingFirstChar[state.sortedIndexCursor].index;
      }
      return -1;
  }
  /**
   * Attempts to find the next item that matches all of the typeahead buffer.
   * Wraps around if at end of options. Returns -1 if no match is found.
   */
  function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
      var firstChar = state.typeaheadBuffer[0];
      var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
      if (!itemsMatchingFirstChar) {
          return -1;
      }
      // Do nothing if text already matches
      var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
      if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 &&
          !isItemAtIndexDisabled(startingItem.index)) {
          return startingItem.index;
      }
      // Find next item that matches completely; if no match, we'll eventually
      // loop around to same position
      var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
      var nextCursorPosition = -1;
      while (cursorPosition !== state.sortedIndexCursor) {
          var currentItem = itemsMatchingFirstChar[cursorPosition];
          var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
          var isEnabled = !isItemAtIndexDisabled(currentItem.index);
          if (matches && isEnabled) {
              nextCursorPosition = cursorPosition;
              break;
          }
          cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
      }
      if (nextCursorPosition !== -1) {
          state.sortedIndexCursor = nextCursorPosition;
          return itemsMatchingFirstChar[state.sortedIndexCursor].index;
      }
      return -1;
  }
  /**
   * Whether or not the given typeahead instaance state is currently typing.
   *
   * @param state The typeahead state instance. See `initState`.
   */
  function isTypingInProgress(state) {
      return state.typeaheadBuffer.length > 0;
  }
  /**
   * Clears the typeahaed buffer so that it resets item matching to the first
   * character.
   *
   * @param state The typeahead state instance. See `initState`.
   */
  function clearBuffer(state) {
      state.typeaheadBuffer = '';
  }
  /**
   * Given a keydown event, it calculates whether or not to automatically focus a
   * list item depending on what was typed mimicing the typeahead functionality of
   * a standard <select> element that is open.
   *
   * @param opts Options and accessors
   *   - event - the KeyboardEvent to handle and parse
   *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
   *   - focusedItemIndex - the index of the currently focused item
   *   - focusItemAtIndex - function that focuses a list item at given index
   *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
   *      is disabled
   *   - isTargetListItem - whether or not the event target is a list item
   * @param state The typeahead state instance. See `initState`.
   *
   * @returns index of the item matched by the keydown. -1 if not matched.
   */
  function handleKeydown(opts, state) {
      var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
      var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
      var isArrowUp = normalizeKey(event) === 'ArrowUp';
      var isArrowRight = normalizeKey(event) === 'ArrowRight';
      var isArrowDown = normalizeKey(event) === 'ArrowDown';
      var isHome = normalizeKey(event) === 'Home';
      var isEnd = normalizeKey(event) === 'End';
      var isEnter = normalizeKey(event) === 'Enter';
      var isSpace = normalizeKey(event) === 'Spacebar';
      if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp ||
          isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
          return -1;
      }
      var isCharacterKey = !isSpace && event.key.length === 1;
      if (isCharacterKey) {
          preventDefaultEvent(event);
          var matchItemOpts = {
              focusItemAtIndex: focusItemAtIndex,
              focusedItemIndex: focusedItemIndex,
              nextChar: event.key.toLowerCase(),
              sortedIndexByFirstChar: sortedIndexByFirstChar,
              skipFocus: false,
              isItemAtIndexDisabled: isItemAtIndexDisabled,
          };
          return matchItem(matchItemOpts, state);
      }
      if (!isSpace) {
          return -1;
      }
      if (isTargetListItem) {
          preventDefaultEvent(event);
      }
      var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
      if (typeaheadOnListItem) {
          var matchItemOpts = {
              focusItemAtIndex: focusItemAtIndex,
              focusedItemIndex: focusedItemIndex,
              nextChar: ' ',
              sortedIndexByFirstChar: sortedIndexByFirstChar,
              skipFocus: false,
              isItemAtIndexDisabled: isItemAtIndexDisabled,
          };
          // space participates in typeahead matching if in rapid typing mode
          return matchItem(matchItemOpts, state);
      }
      return -1;
  }
  //# sourceMappingURL=typeahead.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$1, _b$1;
  // ShadyDOM should submit <input> elements in component internals
  const USING_SHADY_DOM = (_b$1 = (_a$1 = window.ShadyDOM) === null || _a$1 === void 0 ? void 0 : _a$1.inUse) !== null && _b$1 !== void 0 ? _b$1 : false;
  /** @soyCompatible */
  class FormElement extends BaseElement {
      constructor() {
          super(...arguments);
          /**
           * Disabled state for the component. When `disabled` is set to `true`, the
           * component will not be added to form submission.
           */
          this.disabled = false;
          /**
           * Form element that contains this element
           */
          this.containingForm = null;
          this.formDataListener = (ev) => {
              if (!this.disabled) {
                  this.setFormData(ev.formData);
              }
          };
      }
      findFormElement() {
          // If the component internals are not in Shadow DOM, subscribing to form
          // data events could lead to duplicated data, which may not work correctly
          // on the server side.
          if (!this.shadowRoot || USING_SHADY_DOM) {
              return null;
          }
          const root = this.getRootNode();
          const forms = root.querySelectorAll('form');
          for (const form of Array.from(forms)) {
              if (form.contains(this)) {
                  return form;
              }
          }
          return null;
      }
      connectedCallback() {
          var _a;
          super.connectedCallback();
          this.containingForm = this.findFormElement();
          (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
      }
      disconnectedCallback() {
          var _a;
          super.disconnectedCallback();
          (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
          this.containingForm = null;
      }
      click() {
          if (this.formElement && !this.disabled) {
              this.formElement.focus();
              this.formElement.click();
          }
      }
      firstUpdated() {
          super.firstUpdated();
          if (this.shadowRoot) {
              this.mdcRoot.addEventListener('change', (e) => {
                  this.dispatchEvent(new Event('change', e));
              });
          }
      }
  }
  FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
  __decorate([
      e$4({ type: Boolean })
  ], FormElement.prototype, "disabled", void 0);
  //# sourceMappingURL=form-element.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$2 = {
      LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
      LABEL_REQUIRED: 'mdc-floating-label--required',
      LABEL_SHAKE: 'mdc-floating-label--shake',
      ROOT: 'mdc-floating-label',
  };
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
      __extends(MDCFloatingLabelFoundation, _super);
      function MDCFloatingLabelFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
          _this.shakeAnimationEndHandler = function () {
              _this.handleShakeAnimationEnd();
          };
          return _this;
      }
      Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
          get: function () {
              return cssClasses$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
          /**
           * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  getWidth: function () { return 0; },
                  registerInteractionHandler: function () { return undefined; },
                  deregisterInteractionHandler: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCFloatingLabelFoundation.prototype.init = function () {
          this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
      };
      MDCFloatingLabelFoundation.prototype.destroy = function () {
          this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
      };
      /**
       * Returns the width of the label element.
       */
      MDCFloatingLabelFoundation.prototype.getWidth = function () {
          return this.adapter.getWidth();
      };
      /**
       * Styles the label to produce a shake animation to indicate an error.
       * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
       */
      MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
          var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
          if (shouldShake) {
              this.adapter.addClass(LABEL_SHAKE);
          }
          else {
              this.adapter.removeClass(LABEL_SHAKE);
          }
      };
      /**
       * Styles the label to float or dock.
       * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
       */
      MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
          var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
          if (shouldFloat) {
              this.adapter.addClass(LABEL_FLOAT_ABOVE);
          }
          else {
              this.adapter.removeClass(LABEL_FLOAT_ABOVE);
              this.adapter.removeClass(LABEL_SHAKE);
          }
      };
      /**
       * Styles the label as required.
       * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
       */
      MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
          var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
          if (isRequired) {
              this.adapter.addClass(LABEL_REQUIRED);
          }
          else {
              this.adapter.removeClass(LABEL_REQUIRED);
          }
      };
      MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
          var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
          this.adapter.removeClass(LABEL_SHAKE);
      };
      return MDCFloatingLabelFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  //# sourceMappingURL=directive.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const createAdapter = (labelElement) => {
      return {
          addClass: (className) => labelElement.classList.add(className),
          removeClass: (className) => labelElement.classList.remove(className),
          getWidth: () => labelElement.scrollWidth,
          registerInteractionHandler: (evtType, handler) => {
              labelElement.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: (evtType, handler) => {
              labelElement.removeEventListener(evtType, handler);
          },
      };
  };
  class FloatingLabelDirective extends i$4 {
      constructor(partInfo) {
          super(partInfo);
          this.foundation = null;
          this.previousPart = null;
          switch (partInfo.type) {
              // Only allow Attribute and Part bindings
              case t$4.ATTRIBUTE:
              case t$4.PROPERTY:
                  break;
              default:
                  throw new Error('FloatingLabel directive only support attribute and property parts');
          }
      }
      /**
       * There is no PropertyPart in Lit 2 so far. For more info see:
       * https://github.com/lit/lit/issues/1863
       */
      update(part, [label]) {
          if (part !== this.previousPart) {
              if (this.foundation) {
                  this.foundation.destroy();
              }
              this.previousPart = part;
              const labelElement = part.element;
              labelElement.classList.add('mdc-floating-label');
              const adapter = createAdapter(labelElement);
              this.foundation = new MDCFloatingLabelFoundation(adapter);
              this.foundation.init();
          }
          return this.render(label);
      }
      render(_label) {
          return this.foundation;
      }
  }
  const floatingLabel = e$a(FloatingLabelDirective);
  //# sourceMappingURL=mwc-floating-label-directive.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$3 = {
      LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
      LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
  };
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCLineRippleFoundation = /** @class */ (function (_super) {
      __extends(MDCLineRippleFoundation, _super);
      function MDCLineRippleFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
          _this.transitionEndHandler = function (evt) {
              _this.handleTransitionEnd(evt);
          };
          return _this;
      }
      Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
          get: function () {
              return cssClasses$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
          /**
           * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  setStyle: function () { return undefined; },
                  registerEventHandler: function () { return undefined; },
                  deregisterEventHandler: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCLineRippleFoundation.prototype.init = function () {
          this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
      };
      MDCLineRippleFoundation.prototype.destroy = function () {
          this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
      };
      MDCLineRippleFoundation.prototype.activate = function () {
          this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
          this.adapter.addClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
      };
      MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
          this.adapter.setStyle('transform-origin', xCoordinate + "px center");
      };
      MDCLineRippleFoundation.prototype.deactivate = function () {
          this.adapter.addClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
      };
      MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
          // Wait for the line ripple to be either transparent or opaque
          // before emitting the animation end event
          var isDeactivating = this.adapter.hasClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
          if (evt.propertyName === 'opacity') {
              if (isDeactivating) {
                  this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
                  this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
              }
          }
      };
      return MDCLineRippleFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const createAdapter$1 = (lineElement) => {
      return {
          addClass: (className) => lineElement.classList.add(className),
          removeClass: (className) => lineElement.classList.remove(className),
          hasClass: (className) => lineElement.classList.contains(className),
          setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
          registerEventHandler: (evtType, handler) => {
              lineElement.addEventListener(evtType, handler);
          },
          deregisterEventHandler: (evtType, handler) => {
              lineElement.removeEventListener(evtType, handler);
          },
      };
  };
  class LineRippleDirective extends i$4 {
      constructor(partInfo) {
          super(partInfo);
          this.previousPart = null;
          this.foundation = null;
          switch (partInfo.type) {
              case t$4.ATTRIBUTE:
              case t$4.PROPERTY:
                  return;
              default:
                  throw new Error('LineRipple only support attribute and property parts.');
          }
      }
      /**
       * There is no PropertyPart in Lit 2 so far. For more info see:
       * https://github.com/lit/lit/issues/1863
       */
      update(part, _params) {
          if (this.previousPart !== part) {
              if (this.foundation) {
                  this.foundation.destroy();
              }
              this.previousPart = part;
              const lineElement = part.element;
              lineElement.classList.add('mdc-line-ripple');
              const adapter = createAdapter$1(lineElement);
              this.foundation = new MDCLineRippleFoundation(adapter);
              this.foundation.init();
          }
          return this.render();
      }
      render() {
          return this.foundation;
      }
  }
  const lineRipple = e$a(LineRippleDirective);
  //# sourceMappingURL=mwc-line-ripple-directive.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$4 = {
      ANCHOR: 'mdc-menu-surface--anchor',
      ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
      ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
      FIXED: 'mdc-menu-surface--fixed',
      IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
      OPEN: 'mdc-menu-surface--open',
      ROOT: 'mdc-menu-surface',
  };
  // tslint:disable:object-literal-sort-keys
  var strings$2 = {
      CLOSED_EVENT: 'MDCMenuSurface:closed',
      CLOSING_EVENT: 'MDCMenuSurface:closing',
      OPENED_EVENT: 'MDCMenuSurface:opened',
      FOCUSABLE_ELEMENTS: [
          'button:not(:disabled)',
          '[href]:not([aria-disabled="true"])',
          'input:not(:disabled)',
          'select:not(:disabled)',
          'textarea:not(:disabled)',
          '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
      ].join(', '),
  };
  // tslint:enable:object-literal-sort-keys
  var numbers$2 = {
      /** Total duration of menu-surface open animation. */
      TRANSITION_OPEN_DURATION: 120,
      /** Total duration of menu-surface close animation. */
      TRANSITION_CLOSE_DURATION: 75,
      /**
       * Margin left to the edge of the viewport when menu-surface is at maximum
       * possible height. Also used as a viewport margin.
       */
      MARGIN_TO_EDGE: 32,
      /**
       * Ratio of anchor width to menu-surface width for switching from corner
       * positioning to center positioning.
       */
      ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
      /**
       * Amount of time to wait before restoring focus when closing the menu
       * surface. This is important because if a touch event triggered the menu
       * close, and the subsequent mouse event occurs after focus is restored, then
       * the restored focus would be lost.
       */
      TOUCH_EVENT_WAIT_MS: 30,
  };
  /**
   * Enum for bits in the {@see Corner) bitmap.
   */
  var CornerBit;
  (function (CornerBit) {
      CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
      CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
      CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
      CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
  })(CornerBit || (CornerBit = {}));
  /**
   * Enum for representing an element corner for positioning the menu-surface.
   *
   * The START constants map to LEFT if element directionality is left
   * to right and RIGHT if the directionality is right to left.
   * Likewise END maps to RIGHT or LEFT depending on the directionality.
   */
  var Corner;
  (function (Corner) {
      Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
      Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
      Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
      Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
      Corner[Corner["TOP_START"] = 8] = "TOP_START";
      Corner[Corner["TOP_END"] = 12] = "TOP_END";
      Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
      Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
  })(Corner || (Corner = {}));
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$5 = {
      ACTIVATED: 'mdc-select--activated',
      DISABLED: 'mdc-select--disabled',
      FOCUSED: 'mdc-select--focused',
      INVALID: 'mdc-select--invalid',
      MENU_INVALID: 'mdc-select__menu--invalid',
      OUTLINED: 'mdc-select--outlined',
      REQUIRED: 'mdc-select--required',
      ROOT: 'mdc-select',
      WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
  };
  var strings$3 = {
      ARIA_CONTROLS: 'aria-controls',
      ARIA_DESCRIBEDBY: 'aria-describedby',
      ARIA_SELECTED_ATTR: 'aria-selected',
      CHANGE_EVENT: 'MDCSelect:change',
      HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
      LABEL_SELECTOR: '.mdc-floating-label',
      LEADING_ICON_SELECTOR: '.mdc-select__icon',
      LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
      MENU_SELECTOR: '.mdc-select__menu',
      OUTLINE_SELECTOR: '.mdc-notched-outline',
      SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
      SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
      VALUE_ATTR: 'data-value',
  };
  var numbers$3 = {
      LABEL_SCALE: 0.75,
      UNSET_INDEX: -1,
      CLICK_DEBOUNCE_TIMEOUT_MS: 330,
  };
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelectFoundation = /** @class */ (function (_super) {
      __extends(MDCSelectFoundation, _super);
      /* istanbul ignore next: optional argument is not a branch statement */
      /**
       * @param adapter
       * @param foundationMap Map from subcomponent names to their subfoundations.
       */
      function MDCSelectFoundation(adapter, foundationMap) {
          if (foundationMap === void 0) { foundationMap = {}; }
          var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
          // Disabled state
          _this.disabled = false;
          // isMenuOpen is used to track the state of the menu by listening to the
          // MDCMenuSurface:closed event For reference, menu.open will return false if
          // the menu is still closing, but isMenuOpen returns false only after the menu
          // has closed
          _this.isMenuOpen = false;
          // By default, select is invalid if it is required but no value is selected.
          _this.useDefaultValidation = true;
          _this.customValidity = true;
          _this.lastSelectedIndex = numbers$3.UNSET_INDEX;
          _this.clickDebounceTimeout = 0;
          _this.recentlyClicked = false;
          _this.leadingIcon = foundationMap.leadingIcon;
          _this.helperText = foundationMap.helperText;
          return _this;
      }
      Object.defineProperty(MDCSelectFoundation, "cssClasses", {
          get: function () {
              return cssClasses$5;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCSelectFoundation, "numbers", {
          get: function () {
              return numbers$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCSelectFoundation, "strings", {
          get: function () {
              return strings$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
          /**
           * See {@link MDCSelectAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  activateBottomLine: function () { return undefined; },
                  deactivateBottomLine: function () { return undefined; },
                  getSelectedIndex: function () { return -1; },
                  setSelectedIndex: function () { return undefined; },
                  hasLabel: function () { return false; },
                  floatLabel: function () { return undefined; },
                  getLabelWidth: function () { return 0; },
                  setLabelRequired: function () { return undefined; },
                  hasOutline: function () { return false; },
                  notchOutline: function () { return undefined; },
                  closeOutline: function () { return undefined; },
                  setRippleCenter: function () { return undefined; },
                  notifyChange: function () { return undefined; },
                  setSelectedText: function () { return undefined; },
                  isSelectAnchorFocused: function () { return false; },
                  getSelectAnchorAttr: function () { return ''; },
                  setSelectAnchorAttr: function () { return undefined; },
                  removeSelectAnchorAttr: function () { return undefined; },
                  addMenuClass: function () { return undefined; },
                  removeMenuClass: function () { return undefined; },
                  openMenu: function () { return undefined; },
                  closeMenu: function () { return undefined; },
                  getAnchorElement: function () { return null; },
                  setMenuAnchorElement: function () { return undefined; },
                  setMenuAnchorCorner: function () { return undefined; },
                  setMenuWrapFocus: function () { return undefined; },
                  focusMenuItemAtIndex: function () { return undefined; },
                  getMenuItemCount: function () { return 0; },
                  getMenuItemValues: function () { return []; },
                  getMenuItemTextAtIndex: function () { return ''; },
                  isTypeaheadInProgress: function () { return false; },
                  typeaheadMatchItem: function () { return -1; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      /** Returns the index of the currently selected menu item, or -1 if none. */
      MDCSelectFoundation.prototype.getSelectedIndex = function () {
          return this.adapter.getSelectedIndex();
      };
      MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu, skipNotify) {
          if (closeMenu === void 0) { closeMenu = false; }
          if (skipNotify === void 0) { skipNotify = false; }
          if (index >= this.adapter.getMenuItemCount()) {
              return;
          }
          if (index === numbers$3.UNSET_INDEX) {
              this.adapter.setSelectedText('');
          }
          else {
              this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
          }
          this.adapter.setSelectedIndex(index);
          if (closeMenu) {
              this.adapter.closeMenu();
          }
          if (!skipNotify && this.lastSelectedIndex !== index) {
              this.handleChange();
          }
          this.lastSelectedIndex = index;
      };
      MDCSelectFoundation.prototype.setValue = function (value, skipNotify) {
          if (skipNotify === void 0) { skipNotify = false; }
          var index = this.adapter.getMenuItemValues().indexOf(value);
          this.setSelectedIndex(index, /** closeMenu */ false, skipNotify);
      };
      MDCSelectFoundation.prototype.getValue = function () {
          var index = this.adapter.getSelectedIndex();
          var menuItemValues = this.adapter.getMenuItemValues();
          return index !== numbers$3.UNSET_INDEX ? menuItemValues[index] : '';
      };
      MDCSelectFoundation.prototype.getDisabled = function () {
          return this.disabled;
      };
      MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
          this.disabled = isDisabled;
          if (this.disabled) {
              this.adapter.addClass(cssClasses$5.DISABLED);
              this.adapter.closeMenu();
          }
          else {
              this.adapter.removeClass(cssClasses$5.DISABLED);
          }
          if (this.leadingIcon) {
              this.leadingIcon.setDisabled(this.disabled);
          }
          if (this.disabled) {
              // Prevent click events from focusing select. Simply pointer-events: none
              // is not enough since screenreader clicks may bypass this.
              this.adapter.removeSelectAnchorAttr('tabindex');
          }
          else {
              this.adapter.setSelectAnchorAttr('tabindex', '0');
          }
          this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
      };
      /** Opens the menu. */
      MDCSelectFoundation.prototype.openMenu = function () {
          this.adapter.addClass(cssClasses$5.ACTIVATED);
          this.adapter.openMenu();
          this.isMenuOpen = true;
          this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
      };
      /**
       * @param content Sets the content of the helper text.
       */
      MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
          if (this.helperText) {
              this.helperText.setContent(content);
          }
      };
      /**
       * Re-calculates if the notched outline should be notched and if the label
       * should float.
       */
      MDCSelectFoundation.prototype.layout = function () {
          if (this.adapter.hasLabel()) {
              var optionHasValue = this.getValue().length > 0;
              var isFocused = this.adapter.hasClass(cssClasses$5.FOCUSED);
              var shouldFloatAndNotch = optionHasValue || isFocused;
              var isRequired = this.adapter.hasClass(cssClasses$5.REQUIRED);
              this.notchOutline(shouldFloatAndNotch);
              this.adapter.floatLabel(shouldFloatAndNotch);
              this.adapter.setLabelRequired(isRequired);
          }
      };
      /**
       * Synchronizes the list of options with the state of the foundation. Call
       * this whenever menu options are dynamically updated.
       */
      MDCSelectFoundation.prototype.layoutOptions = function () {
          var menuItemValues = this.adapter.getMenuItemValues();
          var selectedIndex = menuItemValues.indexOf(this.getValue());
          this.setSelectedIndex(selectedIndex, /** closeMenu */ false, /** skipNotify */ true);
      };
      MDCSelectFoundation.prototype.handleMenuOpened = function () {
          if (this.adapter.getMenuItemValues().length === 0) {
              return;
          }
          // Menu should open to the last selected element, should open to first menu item otherwise.
          var selectedIndex = this.getSelectedIndex();
          var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
          this.adapter.focusMenuItemAtIndex(focusItemIndex);
      };
      MDCSelectFoundation.prototype.handleMenuClosing = function () {
          this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
      };
      MDCSelectFoundation.prototype.handleMenuClosed = function () {
          this.adapter.removeClass(cssClasses$5.ACTIVATED);
          this.isMenuOpen = false;
          // Unfocus the select if menu is closed without a selection
          if (!this.adapter.isSelectAnchorFocused()) {
              this.blur();
          }
      };
      /**
       * Handles value changes, via change event or programmatic updates.
       */
      MDCSelectFoundation.prototype.handleChange = function () {
          this.layout();
          this.adapter.notifyChange(this.getValue());
          var isRequired = this.adapter.hasClass(cssClasses$5.REQUIRED);
          if (isRequired && this.useDefaultValidation) {
              this.setValid(this.isValid());
          }
      };
      MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
          this.setSelectedIndex(index, /** closeMenu */ true);
      };
      /**
       * Handles focus events from select element.
       */
      MDCSelectFoundation.prototype.handleFocus = function () {
          this.adapter.addClass(cssClasses$5.FOCUSED);
          this.layout();
          this.adapter.activateBottomLine();
      };
      /**
       * Handles blur events from select element.
       */
      MDCSelectFoundation.prototype.handleBlur = function () {
          if (this.isMenuOpen) {
              return;
          }
          this.blur();
      };
      MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
          if (this.disabled || this.recentlyClicked) {
              return;
          }
          this.setClickDebounceTimeout();
          if (this.isMenuOpen) {
              this.adapter.closeMenu();
              return;
          }
          this.adapter.setRippleCenter(normalizedX);
          this.openMenu();
      };
      /**
       * Handles keydown events on select element. Depending on the type of
       * character typed, does typeahead matching or opens menu.
       */
      MDCSelectFoundation.prototype.handleKeydown = function (event) {
          if (this.isMenuOpen || !this.adapter.hasClass(cssClasses$5.FOCUSED)) {
              return;
          }
          var isEnter = normalizeKey(event) === KEY.ENTER;
          var isSpace = normalizeKey(event) === KEY.SPACEBAR;
          var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
          var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
          var isModifier = event.ctrlKey || event.metaKey;
          // Typeahead
          if (!isModifier &&
              (!isSpace && event.key && event.key.length === 1 ||
                  isSpace && this.adapter.isTypeaheadInProgress())) {
              var key = isSpace ? ' ' : event.key;
              var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
              if (typeaheadNextIndex >= 0) {
                  this.setSelectedIndex(typeaheadNextIndex);
              }
              event.preventDefault();
              return;
          }
          if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
              return;
          }
          // Increment/decrement index as necessary and open menu.
          if (arrowUp && this.getSelectedIndex() > 0) {
              this.setSelectedIndex(this.getSelectedIndex() - 1);
          }
          else if (arrowDown &&
              this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
              this.setSelectedIndex(this.getSelectedIndex() + 1);
          }
          this.openMenu();
          event.preventDefault();
      };
      /**
       * Opens/closes the notched outline.
       */
      MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
          if (!this.adapter.hasOutline()) {
              return;
          }
          var isFocused = this.adapter.hasClass(cssClasses$5.FOCUSED);
          if (openNotch) {
              var labelScale = numbers$3.LABEL_SCALE;
              var labelWidth = this.adapter.getLabelWidth() * labelScale;
              this.adapter.notchOutline(labelWidth);
          }
          else if (!isFocused) {
              this.adapter.closeOutline();
          }
      };
      /**
       * Sets the aria label of the leading icon.
       */
      MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
          if (this.leadingIcon) {
              this.leadingIcon.setAriaLabel(label);
          }
      };
      /**
       * Sets the text content of the leading icon.
       */
      MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
          if (this.leadingIcon) {
              this.leadingIcon.setContent(content);
          }
      };
      MDCSelectFoundation.prototype.getUseDefaultValidation = function () {
          return this.useDefaultValidation;
      };
      MDCSelectFoundation.prototype.setUseDefaultValidation = function (useDefaultValidation) {
          this.useDefaultValidation = useDefaultValidation;
      };
      MDCSelectFoundation.prototype.setValid = function (isValid) {
          if (!this.useDefaultValidation) {
              this.customValidity = isValid;
          }
          this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
          if (isValid) {
              this.adapter.removeClass(cssClasses$5.INVALID);
              this.adapter.removeMenuClass(cssClasses$5.MENU_INVALID);
          }
          else {
              this.adapter.addClass(cssClasses$5.INVALID);
              this.adapter.addMenuClass(cssClasses$5.MENU_INVALID);
          }
          this.syncHelperTextValidity(isValid);
      };
      MDCSelectFoundation.prototype.isValid = function () {
          if (this.useDefaultValidation &&
              this.adapter.hasClass(cssClasses$5.REQUIRED) &&
              !this.adapter.hasClass(cssClasses$5.DISABLED)) {
              // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
              // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
              return this.getSelectedIndex() !== numbers$3.UNSET_INDEX &&
                  (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
          }
          return this.customValidity;
      };
      MDCSelectFoundation.prototype.setRequired = function (isRequired) {
          if (isRequired) {
              this.adapter.addClass(cssClasses$5.REQUIRED);
          }
          else {
              this.adapter.removeClass(cssClasses$5.REQUIRED);
          }
          this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
          this.adapter.setLabelRequired(isRequired);
      };
      MDCSelectFoundation.prototype.getRequired = function () {
          return this.adapter.getSelectAnchorAttr('aria-required') === 'true';
      };
      MDCSelectFoundation.prototype.init = function () {
          var anchorEl = this.adapter.getAnchorElement();
          if (anchorEl) {
              this.adapter.setMenuAnchorElement(anchorEl);
              this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
          }
          this.adapter.setMenuWrapFocus(false);
          this.setDisabled(this.adapter.hasClass(cssClasses$5.DISABLED));
          this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses$5.INVALID));
          this.layout();
          this.layoutOptions();
      };
      /**
       * Unfocuses the select component.
       */
      MDCSelectFoundation.prototype.blur = function () {
          this.adapter.removeClass(cssClasses$5.FOCUSED);
          this.layout();
          this.adapter.deactivateBottomLine();
          var isRequired = this.adapter.hasClass(cssClasses$5.REQUIRED);
          if (isRequired && this.useDefaultValidation) {
              this.setValid(this.isValid());
          }
      };
      MDCSelectFoundation.prototype.syncHelperTextValidity = function (isValid) {
          if (!this.helperText) {
              return;
          }
          this.helperText.setValidity(isValid);
          var helperTextVisible = this.helperText.isVisible();
          var helperTextId = this.helperText.getId();
          if (helperTextVisible && helperTextId) {
              this.adapter.setSelectAnchorAttr(strings$3.ARIA_DESCRIBEDBY, helperTextId);
          }
          else {
              // Needed because screenreaders will read labels pointed to by
              // `aria-describedby` even if they are `aria-hidden`.
              this.adapter.removeSelectAnchorAttr(strings$3.ARIA_DESCRIBEDBY);
          }
      };
      MDCSelectFoundation.prototype.setClickDebounceTimeout = function () {
          var _this = this;
          clearTimeout(this.clickDebounceTimeout);
          this.clickDebounceTimeout = setTimeout(function () {
              _this.recentlyClicked = false;
          }, numbers$3.CLICK_DEBOUNCE_TIMEOUT_MS);
          this.recentlyClicked = true;
      };
      return MDCSelectFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const l$4=l=>null!=l?l:w;//# sourceMappingURL=if-defined.js.map

  //# sourceMappingURL=if-defined.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const createValidityObj = (customValidity = {}) => {
      /*
       * We need to make ValidityState an object because it is readonly and
       * we cannot use the spread operator. Also, we don't export
       * `CustomValidityState` because it is a leaky implementation and the user
       * already has access to `ValidityState` in lib.dom.ts. Also an interface
       * {a: Type} can be casted to {readonly a: Type} so passing any object
       * should be fine.
       */
      const objectifiedCustomValidity = {};
      // eslint-disable-next-line guard-for-in
      for (const propName in customValidity) {
          /*
           * Casting is needed because ValidityState's props are all readonly and
           * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
           * interface is the same as ValidityState (but not readonly), but the
           * function signature casts the output to ValidityState (thus readonly).
           */
          objectifiedCustomValidity[propName] =
              customValidity[propName];
      }
      return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
  };
  /**
   * @fires selected {SelectedDetail}
   * @fires action {ActionDetail}
   * @fires opened
   * @fires closed
   * @fires change
   * @fires invalid
   */
  class SelectBase extends FormElement {
      constructor() {
          super(...arguments);
          this.mdcFoundationClass = MDCSelectFoundation;
          this.disabled = false;
          this.outlined = false;
          this.label = '';
          this.outlineOpen = false;
          this.outlineWidth = 0;
          this.value = '';
          this.name = '';
          this.selectedText = '';
          this.icon = '';
          this.menuOpen = false;
          this.helper = '';
          this.validateOnInitialRender = false;
          this.validationMessage = '';
          this.required = false;
          this.naturalMenuWidth = false;
          this.isUiValid = true;
          this.fixedMenuPosition = false;
          // Transiently holds current typeahead prefix from user.
          this.typeaheadState = initState();
          this.sortedIndexByFirstChar = new Map();
          this.menuElement_ = null;
          this.listeners = [];
          this.onBodyClickBound = () => undefined;
          this._menuUpdateComplete = null;
          this.valueSetDirectly = false;
          this.validityTransform = null;
          this._validity = createValidityObj();
      }
      get items() {
          // memoize menuElement to prevent unnecessary querySelector calls.
          if (!this.menuElement_) {
              this.menuElement_ = this.menuElement;
          }
          if (this.menuElement_) {
              return this.menuElement_.items;
          }
          return [];
      }
      get selected() {
          const menuElement = this.menuElement;
          if (menuElement) {
              return menuElement.selected;
          }
          return null;
      }
      get index() {
          const menuElement = this.menuElement;
          if (menuElement) {
              return menuElement.index;
          }
          return -1;
      }
      get shouldRenderHelperText() {
          return !!this.helper || !!this.validationMessage;
      }
      get validity() {
          this._checkValidity(this.value);
          return this._validity;
      }
      render() {
          const classes = {
              'mdc-select--disabled': this.disabled,
              'mdc-select--no-label': !this.label,
              'mdc-select--filled': !this.outlined,
              'mdc-select--outlined': this.outlined,
              'mdc-select--with-leading-icon': !!this.icon,
              'mdc-select--required': this.required,
              'mdc-select--invalid': !this.isUiValid,
          };
          const menuClasses = {
              'mdc-select__menu--invalid': !this.isUiValid,
          };
          const labelledby = !!this.label ? 'label' : undefined;
          const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;
          return $ `
      <div
          class="mdc-select ${o$6(classes)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${l$4(labelledby)}
            aria-required=${this.required}
            aria-describedby=${l$4(describedby)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${o$6(menuClasses)}"
            activatable
            .fullwidth=${this.fixedMenuPosition ? false : !this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;
      }
      renderRipple() {
          if (this.outlined) {
              return w;
          }
          return $ `
      <span class="mdc-select__ripple"></span>
    `;
      }
      renderOutline() {
          if (!this.outlined) {
              return w;
          }
          return $ `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
      }
      renderLabel() {
          if (!this.label) {
              return w;
          }
          return $ `
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
      }
      renderLeadingIcon() {
          if (!this.icon) {
              return w;
          }
          return $ `<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`;
      }
      renderLineRipple() {
          if (this.outlined) {
              return w;
          }
          return $ `
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
      }
      renderHelperText() {
          if (!this.shouldRenderHelperText) {
              return w;
          }
          const showValidationMessage = this.validationMessage && !this.isUiValid;
          const classes = {
              'mdc-select-helper-text--validation-msg': showValidationMessage,
          };
          return $ `
        <p
          class="mdc-select-helper-text ${o$6(classes)}"
          id="helper-text">${showValidationMessage ? this.validationMessage : this.helper}</p>`;
      }
      createAdapter() {
          return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { activateBottomLine: () => {
                  if (this.lineRippleElement) {
                      this.lineRippleElement.lineRippleFoundation.activate();
                  }
              }, deactivateBottomLine: () => {
                  if (this.lineRippleElement) {
                      this.lineRippleElement.lineRippleFoundation.deactivate();
                  }
              }, hasLabel: () => {
                  return !!this.label;
              }, floatLabel: (shouldFloat) => {
                  if (this.labelElement) {
                      this.labelElement.floatingLabelFoundation.float(shouldFloat);
                  }
              }, getLabelWidth: () => {
                  if (this.labelElement) {
                      return this.labelElement.floatingLabelFoundation.getWidth();
                  }
                  return 0;
              }, setLabelRequired: (isRequired) => {
                  if (this.labelElement) {
                      this.labelElement.floatingLabelFoundation.setRequired(isRequired);
                  }
              }, hasOutline: () => this.outlined, notchOutline: (labelWidth) => {
                  const outlineElement = this.outlineElement;
                  if (outlineElement && !this.outlineOpen) {
                      this.outlineWidth = labelWidth;
                      this.outlineOpen = true;
                  }
              }, closeOutline: () => {
                  if (this.outlineElement) {
                      this.outlineOpen = false;
                  }
              }, setRippleCenter: (normalizedX) => {
                  if (this.lineRippleElement) {
                      const foundation = this.lineRippleElement.lineRippleFoundation;
                      foundation.setRippleCenter(normalizedX);
                  }
              }, notifyChange: async (value) => {
                  if (!this.valueSetDirectly && value === this.value) {
                      return;
                  }
                  this.valueSetDirectly = false;
                  this.value = value;
                  await this.updateComplete;
                  const ev = new Event('change', { bubbles: true });
                  this.dispatchEvent(ev);
              }, setSelectedText: (value) => this.selectedText = value, isSelectAnchorFocused: () => {
                  const selectAnchorElement = this.anchorElement;
                  if (!selectAnchorElement) {
                      return false;
                  }
                  const rootNode = selectAnchorElement.getRootNode();
                  return rootNode.activeElement === selectAnchorElement;
              }, getSelectAnchorAttr: (attr) => {
                  const selectAnchorElement = this.anchorElement;
                  if (!selectAnchorElement) {
                      return null;
                  }
                  return selectAnchorElement.getAttribute(attr);
              }, setSelectAnchorAttr: (attr, value) => {
                  const selectAnchorElement = this.anchorElement;
                  if (!selectAnchorElement) {
                      return;
                  }
                  selectAnchorElement.setAttribute(attr, value);
              }, removeSelectAnchorAttr: (attr) => {
                  const selectAnchorElement = this.anchorElement;
                  if (!selectAnchorElement) {
                      return;
                  }
                  selectAnchorElement.removeAttribute(attr);
              }, openMenu: () => {
                  this.menuOpen = true;
              }, closeMenu: () => {
                  this.menuOpen = false;
              }, addMenuClass: () => undefined, removeMenuClass: () => undefined, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
                  /* Handled by anchor directive */
              }, setMenuAnchorCorner: () => {
                  const menuElement = this.menuElement;
                  if (menuElement) {
                      menuElement.corner = 'BOTTOM_START';
                  }
              }, setMenuWrapFocus: (wrapFocus) => {
                  const menuElement = this.menuElement;
                  if (menuElement) {
                      menuElement.wrapFocus = wrapFocus;
                  }
              }, focusMenuItemAtIndex: (index) => {
                  const menuElement = this.menuElement;
                  if (!menuElement) {
                      return;
                  }
                  const element = menuElement.items[index];
                  if (!element) {
                      return;
                  }
                  element.focus();
              }, getMenuItemCount: () => {
                  const menuElement = this.menuElement;
                  if (menuElement) {
                      return menuElement.items.length;
                  }
                  return 0;
              }, getMenuItemValues: () => {
                  const menuElement = this.menuElement;
                  if (!menuElement) {
                      return [];
                  }
                  const items = menuElement.items;
                  return items.map((item) => item.value);
              }, getMenuItemTextAtIndex: (index) => {
                  const menuElement = this.menuElement;
                  if (!menuElement) {
                      return '';
                  }
                  const element = menuElement.items[index];
                  if (!element) {
                      return '';
                  }
                  return element.text;
              }, getSelectedIndex: () => this.index, setSelectedIndex: () => undefined, isTypeaheadInProgress: () => isTypingInProgress(this.typeaheadState), typeaheadMatchItem: (nextChar, startingIndex) => {
                  if (!this.menuElement) {
                      return -1;
                  }
                  const opts = {
                      focusItemAtIndex: (index) => {
                          this.menuElement.focusItemAtIndex(index);
                      },
                      focusedItemIndex: startingIndex ?
                          startingIndex :
                          this.menuElement.getFocusedItemIndex(),
                      nextChar,
                      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                      skipFocus: false,
                      isItemAtIndexDisabled: (index) => this.items[index].disabled,
                  };
                  const index = matchItem(opts, this.typeaheadState);
                  if (index !== -1) {
                      this.select(index);
                  }
                  return index;
              } });
      }
      checkValidity() {
          const isValid = this._checkValidity(this.value);
          if (!isValid) {
              const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
              this.dispatchEvent(invalidEvent);
          }
          return isValid;
      }
      reportValidity() {
          const isValid = this.checkValidity();
          this.isUiValid = isValid;
          return isValid;
      }
      _checkValidity(value) {
          const nativeValidity = this.formElement.validity;
          let validity = createValidityObj(nativeValidity);
          if (this.validityTransform) {
              const customValidity = this.validityTransform(value, validity);
              validity = Object.assign(Object.assign({}, validity), customValidity);
          }
          this._validity = validity;
          return this._validity.valid;
      }
      setCustomValidity(message) {
          this.validationMessage = message;
          this.formElement.setCustomValidity(message);
      }
      // tslint:disable:ban-ts-ignore
      async getUpdateComplete() {
          await this._menuUpdateComplete;
          // @ts-ignore
          const result = await super.getUpdateComplete();
          return result;
      }
      // tslint:enable:ban-ts-ignore
      async firstUpdated() {
          const menuElement = this.menuElement;
          if (menuElement) {
              this._menuUpdateComplete = menuElement.updateComplete;
              await this._menuUpdateComplete;
          }
          super.firstUpdated();
          this.mdcFoundation.isValid = () => true;
          this.mdcFoundation.setValid = () => undefined;
          this.mdcFoundation.setDisabled(this.disabled);
          if (this.validateOnInitialRender) {
              this.reportValidity();
          }
          // Select an option based on init value
          if (!this.selected) {
              if (!this.items.length && this.slotElement &&
                  this.slotElement.assignedNodes({ flatten: true }).length) {
                  // Shady DOM initial render fix
                  await new Promise((res) => requestAnimationFrame(res));
                  await this.layout();
              }
              const hasEmptyFirstOption = this.items.length && this.items[0].value === '';
              if (!this.value && hasEmptyFirstOption) {
                  this.select(0);
                  return;
              }
              this.selectByValue(this.value);
          }
          this.sortedIndexByFirstChar = initSortedIndex(this.items.length, (index) => this.items[index].text);
      }
      onItemsUpdated() {
          this.sortedIndexByFirstChar = initSortedIndex(this.items.length, (index) => this.items[index].text);
      }
      select(index) {
          const menuElement = this.menuElement;
          if (menuElement) {
              menuElement.select(index);
          }
      }
      selectByValue(value) {
          let indexToSelect = -1;
          for (let i$$1 = 0; i$$1 < this.items.length; i$$1++) {
              const item = this.items[i$$1];
              if (item.value === value) {
                  indexToSelect = i$$1;
                  break;
              }
          }
          this.valueSetDirectly = true;
          this.select(indexToSelect);
          this.mdcFoundation.handleChange();
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          for (const listener of this.listeners) {
              listener.target.removeEventListener(listener.name, listener.cb);
          }
      }
      focus() {
          const focusEvt = new CustomEvent('focus');
          const selectAnchorElement = this.anchorElement;
          if (selectAnchorElement) {
              selectAnchorElement.dispatchEvent(focusEvt);
              selectAnchorElement.focus();
          }
      }
      blur() {
          const focusEvt = new CustomEvent('blur');
          const selectAnchorElement = this.anchorElement;
          if (selectAnchorElement) {
              selectAnchorElement.dispatchEvent(focusEvt);
              selectAnchorElement.blur();
          }
      }
      onFocus() {
          if (this.mdcFoundation) {
              this.mdcFoundation.handleFocus();
          }
      }
      onBlur() {
          if (this.mdcFoundation) {
              this.mdcFoundation.handleBlur();
          }
          const menuElement = this.menuElement;
          if (menuElement && !menuElement.open) {
              this.reportValidity();
          }
      }
      onClick(evt) {
          if (this.mdcFoundation) {
              this.focus();
              const targetClientRect = evt.target.getBoundingClientRect();
              let xCoord = 0;
              if ('touches' in evt) {
                  xCoord = evt.touches[0].clientX;
              }
              else {
                  xCoord = evt.clientX;
              }
              const normalizedX = xCoord - targetClientRect.left;
              this.mdcFoundation.handleClick(normalizedX);
          }
      }
      onKeydown(evt) {
          const arrowUp = normalizeKey(evt) === KEY.ARROW_UP;
          const arrowDown = normalizeKey(evt) === KEY.ARROW_DOWN;
          if (arrowDown || arrowUp) {
              const shouldSelectNextItem = arrowUp && this.index > 0;
              const shouldSelectPrevItem = arrowDown && this.index < this.items.length - 1;
              if (shouldSelectNextItem) {
                  this.select(this.index - 1);
              }
              else if (shouldSelectPrevItem) {
                  this.select(this.index + 1);
              }
              evt.preventDefault();
              this.mdcFoundation.openMenu();
              return;
          }
          this.mdcFoundation.handleKeydown(evt);
      }
      // must capture to run before list foundation captures event
      handleTypeahead(event) {
          if (!this.menuElement) {
              return;
          }
          const focusedItemIndex = this.menuElement.getFocusedItemIndex();
          const target = isNodeElement(event.target) ?
              event.target :
              null;
          const isTargetListItem = target ? target.hasAttribute('mwc-list-item') : false;
          const opts = {
              event,
              focusItemAtIndex: (index) => {
                  this.menuElement.focusItemAtIndex(index);
              },
              focusedItemIndex,
              isTargetListItem,
              sortedIndexByFirstChar: this.sortedIndexByFirstChar,
              isItemAtIndexDisabled: (index) => this.items[index].disabled,
          };
          handleKeydown(opts, this.typeaheadState);
      }
      async onSelected(event) {
          if (!this.mdcFoundation) {
              await this.updateComplete;
          }
          this.mdcFoundation.handleMenuItemAction(event.detail.index);
          const item = this.items[event.detail.index];
          if (item) {
              this.value = item.value;
          }
      }
      onOpened() {
          if (this.mdcFoundation) {
              this.menuOpen = true;
              this.mdcFoundation.handleMenuOpened();
          }
      }
      onClosed() {
          if (this.mdcFoundation) {
              this.menuOpen = false;
              this.mdcFoundation.handleMenuClosed();
          }
      }
      setFormData(formData) {
          if (this.name && this.selected !== null) {
              formData.append(this.name, this.value);
          }
      }
      async layout(updateItems = true) {
          if (this.mdcFoundation) {
              this.mdcFoundation.layout();
          }
          await this.updateComplete;
          const menuElement = this.menuElement;
          if (menuElement) {
              menuElement.layout(updateItems);
          }
          const labelElement = this.labelElement;
          if (!labelElement) {
              this.outlineOpen = false;
              return;
          }
          const shouldFloat = !!this.label && !!this.value;
          labelElement.floatingLabelFoundation.float(shouldFloat);
          if (!this.outlined) {
              return;
          }
          this.outlineOpen = shouldFloat;
          await this.updateComplete;
          /* When the textfield automatically notches due to a value and label
           * being defined, the textfield may be set to `display: none` by the user.
           * this means that the notch is of size 0px. We provide this function so
           * that the user may manually resize the notch to the floated label's
           * width.
           */
          const labelWidth = labelElement.floatingLabelFoundation.getWidth();
          if (this.outlineOpen) {
              this.outlineWidth = labelWidth;
          }
      }
      async layoutOptions() {
          if (!this.mdcFoundation) {
              return;
          }
          this.mdcFoundation.layoutOptions();
      }
  }
  __decorate([
      i$3('.mdc-select')
  ], SelectBase.prototype, "mdcRoot", void 0);
  __decorate([
      i$3('.formElement')
  ], SelectBase.prototype, "formElement", void 0);
  __decorate([
      i$3('slot')
  ], SelectBase.prototype, "slotElement", void 0);
  __decorate([
      i$3('select')
  ], SelectBase.prototype, "nativeSelectElement", void 0);
  __decorate([
      i$3('input')
  ], SelectBase.prototype, "nativeInputElement", void 0);
  __decorate([
      i$3('.mdc-line-ripple')
  ], SelectBase.prototype, "lineRippleElement", void 0);
  __decorate([
      i$3('.mdc-floating-label')
  ], SelectBase.prototype, "labelElement", void 0);
  __decorate([
      i$3('mwc-notched-outline')
  ], SelectBase.prototype, "outlineElement", void 0);
  __decorate([
      i$3('.mdc-menu')
  ], SelectBase.prototype, "menuElement", void 0);
  __decorate([
      i$3('.mdc-select__anchor')
  ], SelectBase.prototype, "anchorElement", void 0);
  __decorate([
      e$4({ type: Boolean, attribute: 'disabled', reflect: true }),
      observer(function (value) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setDisabled(value);
          }
      })
  ], SelectBase.prototype, "disabled", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (_newVal, oldVal) {
          if (oldVal !== undefined && this.outlined !== oldVal) {
              this.layout(false);
          }
      })
  ], SelectBase.prototype, "outlined", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (_newVal, oldVal) {
          if (oldVal !== undefined && this.label !== oldVal) {
              this.layout(false);
          }
      })
  ], SelectBase.prototype, "label", void 0);
  __decorate([
      t$2()
  ], SelectBase.prototype, "outlineOpen", void 0);
  __decorate([
      t$2()
  ], SelectBase.prototype, "outlineWidth", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (value) {
          if (this.mdcFoundation) {
              const initialization = this.selected === null && !!value;
              const valueSetByUser = this.selected && this.selected.value !== value;
              if (initialization || valueSetByUser) {
                  this.selectByValue(value);
              }
              this.reportValidity();
          }
      })
  ], SelectBase.prototype, "value", void 0);
  __decorate([
      e$4()
  ], SelectBase.prototype, "name", void 0);
  __decorate([
      t$2()
  ], SelectBase.prototype, "selectedText", void 0);
  __decorate([
      e$4({ type: String })
  ], SelectBase.prototype, "icon", void 0);
  __decorate([
      t$2()
  ], SelectBase.prototype, "menuOpen", void 0);
  __decorate([
      e$4({ type: String })
  ], SelectBase.prototype, "helper", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], SelectBase.prototype, "validateOnInitialRender", void 0);
  __decorate([
      e$4({ type: String })
  ], SelectBase.prototype, "validationMessage", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], SelectBase.prototype, "required", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], SelectBase.prototype, "naturalMenuWidth", void 0);
  __decorate([
      t$2()
  ], SelectBase.prototype, "isUiValid", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], SelectBase.prototype, "fixedMenuPosition", void 0);
  __decorate([
      e$6({ capture: true })
  ], SelectBase.prototype, "handleTypeahead", null);
  //# sourceMappingURL=mwc-select-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$2 = r `.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
  //# sourceMappingURL=mwc-select.css.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$6 = {
      MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
      MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
      ROOT: 'mdc-menu',
  };
  var strings$4 = {
      ARIA_CHECKED_ATTR: 'aria-checked',
      ARIA_DISABLED_ATTR: 'aria-disabled',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]',
      LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
      SELECTED_EVENT: 'MDCMenu:selected',
      SKIP_RESTORE_FOCUS: 'data-menu-item-skip-restore-focus',
  };
  var numbers$4 = {
      FOCUS_ROOT_INDEX: -1,
  };
  var DefaultFocusState;
  (function (DefaultFocusState) {
      DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
      DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
      DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
      DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
  })(DefaultFocusState || (DefaultFocusState = {}));
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
      __extends(MDCMenuSurfaceFoundation, _super);
      function MDCMenuSurfaceFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation.defaultAdapter), adapter)) || this;
          _this.isSurfaceOpen = false;
          _this.isQuickOpen = false;
          _this.isHoistedElement = false;
          _this.isFixedPosition = false;
          _this.isHorizontallyCenteredOnViewport = false;
          _this.maxHeight = 0;
          _this.openBottomBias = 0;
          _this.openAnimationEndTimerId = 0;
          _this.closeAnimationEndTimerId = 0;
          _this.animationRequestId = 0;
          _this.anchorCorner = Corner.TOP_START;
          /**
           * Corner of the menu surface to which menu surface is attached to anchor.
           *
           *  Anchor corner --->+----------+
           *                    |  ANCHOR  |
           *                    +----------+
           *  Origin corner --->+--------------+
           *                    |              |
           *                    |              |
           *                    | MENU SURFACE |
           *                    |              |
           *                    |              |
           *                    +--------------+
           */
          _this.originCorner = Corner.TOP_START;
          _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
          _this.position = { x: 0, y: 0 };
          return _this;
      }
      Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
          get: function () {
              return cssClasses$4;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
          get: function () {
              return strings$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
          get: function () {
              return numbers$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
          get: function () {
              return Corner;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
          /**
           * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  hasAnchor: function () { return false; },
                  isElementInContainer: function () { return false; },
                  isFocused: function () { return false; },
                  isRtl: function () { return false; },
                  getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                  getAnchorDimensions: function () { return null; },
                  getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                  getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                  getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                  setPosition: function () { return undefined; },
                  setMaxHeight: function () { return undefined; },
                  setTransformOrigin: function () { return undefined; },
                  saveFocus: function () { return undefined; },
                  restoreFocus: function () { return undefined; },
                  notifyClose: function () { return undefined; },
                  notifyOpen: function () { return undefined; },
                  notifyClosing: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCMenuSurfaceFoundation.prototype.init = function () {
          var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
          if (!this.adapter.hasClass(ROOT)) {
              throw new Error(ROOT + " class required in root element.");
          }
          if (this.adapter.hasClass(OPEN)) {
              this.isSurfaceOpen = true;
          }
      };
      MDCMenuSurfaceFoundation.prototype.destroy = function () {
          clearTimeout(this.openAnimationEndTimerId);
          clearTimeout(this.closeAnimationEndTimerId);
          // Cancel any currently running animations.
          cancelAnimationFrame(this.animationRequestId);
      };
      /**
       * @param corner Default anchor corner alignment of top-left menu surface
       *     corner.
       */
      MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
          this.anchorCorner = corner;
      };
      /**
       * Flip menu corner horizontally.
       */
      MDCMenuSurfaceFoundation.prototype.flipCornerHorizontally = function () {
          this.originCorner = this.originCorner ^ CornerBit.RIGHT;
      };
      /**
       * @param margin Set of margin values from anchor.
       */
      MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
          this.anchorMargin.top = margin.top || 0;
          this.anchorMargin.right = margin.right || 0;
          this.anchorMargin.bottom = margin.bottom || 0;
          this.anchorMargin.left = margin.left || 0;
      };
      /** Used to indicate if the menu-surface is hoisted to the body. */
      MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
          this.isHoistedElement = isHoisted;
      };
      /**
       * Used to set the menu-surface calculations based on a fixed position menu.
       */
      MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
          this.isFixedPosition = isFixedPosition;
      };
      /**
       * @return Returns true if menu is in fixed (`position: fixed`) position.
       */
      MDCMenuSurfaceFoundation.prototype.isFixed = function () {
          return this.isFixedPosition;
      };
      /** Sets the menu-surface position on the page. */
      MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
          this.position.x = this.isFinite(x) ? x : 0;
          this.position.y = this.isFinite(y) ? y : 0;
      };
      /** Sets whether menu-surface should be horizontally centered to viewport. */
      MDCMenuSurfaceFoundation.prototype.setIsHorizontallyCenteredOnViewport = function (isCentered) {
          this.isHorizontallyCenteredOnViewport = isCentered;
      };
      MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
          this.isQuickOpen = quickOpen;
      };
      /**
       * Sets maximum menu-surface height on open.
       * @param maxHeight The desired max-height. Set to 0 (default) to
       *     automatically calculate max height based on available viewport space.
       */
      MDCMenuSurfaceFoundation.prototype.setMaxHeight = function (maxHeight) {
          this.maxHeight = maxHeight;
      };
      /**
       * Set to a positive integer to influence the menu to preferentially open
       * below the anchor instead of above.
       * @param bias A value of `x` simulates an extra `x` pixels of available space
       *     below the menu during positioning calculations.
       */
      MDCMenuSurfaceFoundation.prototype.setOpenBottomBias = function (bias) {
          this.openBottomBias = bias;
      };
      MDCMenuSurfaceFoundation.prototype.isOpen = function () {
          return this.isSurfaceOpen;
      };
      /**
       * Open the menu surface.
       */
      MDCMenuSurfaceFoundation.prototype.open = function () {
          var _this = this;
          if (this.isSurfaceOpen) {
              return;
          }
          this.adapter.saveFocus();
          if (this.isQuickOpen) {
              this.isSurfaceOpen = true;
              this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
              this.dimensions = this.adapter.getInnerDimensions();
              this.autoposition();
              this.adapter.notifyOpen();
          }
          else {
              this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
              this.animationRequestId = requestAnimationFrame(function () {
                  _this.dimensions = _this.adapter.getInnerDimensions();
                  _this.autoposition();
                  _this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                  _this.openAnimationEndTimerId = setTimeout(function () {
                      _this.openAnimationEndTimerId = 0;
                      _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                      _this.adapter.notifyOpen();
                  }, numbers$2.TRANSITION_OPEN_DURATION);
              });
              this.isSurfaceOpen = true;
          }
      };
      /**
       * Closes the menu surface.
       */
      MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
          var _this = this;
          if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
          if (!this.isSurfaceOpen) {
              return;
          }
          this.adapter.notifyClosing();
          if (this.isQuickOpen) {
              this.isSurfaceOpen = false;
              if (!skipRestoreFocus) {
                  this.maybeRestoreFocus();
              }
              this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
              this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
              this.adapter.notifyClose();
              return;
          }
          this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
          requestAnimationFrame(function () {
              _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
              _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
              _this.closeAnimationEndTimerId = setTimeout(function () {
                  _this.closeAnimationEndTimerId = 0;
                  _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                  _this.adapter.notifyClose();
              }, numbers$2.TRANSITION_CLOSE_DURATION);
          });
          this.isSurfaceOpen = false;
          if (!skipRestoreFocus) {
              this.maybeRestoreFocus();
          }
      };
      /** Handle clicks and close if not within menu-surface element. */
      MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
          var el = evt.target;
          if (this.adapter.isElementInContainer(el)) {
              return;
          }
          this.close();
      };
      /** Handle keys that close the surface. */
      MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
          var keyCode = evt.keyCode, key = evt.key;
          var isEscape = key === 'Escape' || keyCode === 27;
          if (isEscape) {
              this.close();
          }
      };
      MDCMenuSurfaceFoundation.prototype.autoposition = function () {
          var _a;
          // Compute measurements for autoposition methods reuse.
          this.measurements = this.getAutoLayoutmeasurements();
          var corner = this.getoriginCorner();
          var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
          var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
          var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
          var horizontalOffset = this.getHorizontalOriginOffset(corner);
          var verticalOffset = this.getVerticalOriginOffset(corner);
          var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
          var position = (_a = {},
              _a[horizontalAlignment] = horizontalOffset,
              _a[verticalAlignment] = verticalOffset,
              _a);
          // Center align when anchor width is comparable or greater than menu
          // surface, otherwise keep corner.
          if (anchorSize.width / surfaceSize.width >
              numbers$2.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
              horizontalAlignment = 'center';
          }
          // If the menu-surface has been hoisted to the body, it's no longer relative
          // to the anchor element
          if (this.isHoistedElement || this.isFixedPosition) {
              this.adjustPositionForHoistedElement(position);
          }
          this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
          this.adapter.setPosition(position);
          this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
          // If it is opened from the top then add is-open-below class
          if (!this.hasBit(corner, CornerBit.BOTTOM)) {
              this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
          }
      };
      /**
       * @return Measurements used to position menu surface popup.
       */
      MDCMenuSurfaceFoundation.prototype.getAutoLayoutmeasurements = function () {
          var anchorRect = this.adapter.getAnchorDimensions();
          var bodySize = this.adapter.getBodyDimensions();
          var viewportSize = this.adapter.getWindowDimensions();
          var windowScroll = this.adapter.getWindowScroll();
          if (!anchorRect) {
              // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
              anchorRect = {
                  top: this.position.y,
                  right: this.position.x,
                  bottom: this.position.y,
                  left: this.position.x,
                  width: 0,
                  height: 0,
              };
              // tslint:enable:object-literal-sort-keys
          }
          return {
              anchorSize: anchorRect,
              bodySize: bodySize,
              surfaceSize: this.dimensions,
              viewportDistance: {
                  // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                  top: anchorRect.top,
                  right: viewportSize.width - anchorRect.right,
                  bottom: viewportSize.height - anchorRect.bottom,
                  left: anchorRect.left,
                  // tslint:enable:object-literal-sort-keys
              },
              viewportSize: viewportSize,
              windowScroll: windowScroll,
          };
      };
      /**
       * Computes the corner of the anchor from which to animate and position the
       * menu surface.
       *
       * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
       * context. E.g., menu surface will be positioned from right side on TOP_END.
       */
      MDCMenuSurfaceFoundation.prototype.getoriginCorner = function () {
          var corner = this.originCorner;
          var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
          var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
          var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
          var availableTop;
          var availableBottom;
          if (isAnchoredToBottom) {
              availableTop =
                  viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
              availableBottom =
                  viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
          }
          else {
              availableTop =
                  viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
              availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE +
                  anchorSize.height - this.anchorMargin.top;
          }
          var isAvailableBottom = availableBottom - surfaceSize.height > 0;
          if (!isAvailableBottom &&
              availableTop > availableBottom + this.openBottomBias) {
              // Attach bottom side of surface to the anchor.
              corner = this.setBit(corner, CornerBit.BOTTOM);
          }
          var isRtl = this.adapter.isRtl();
          var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
          var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) ||
              this.hasBit(corner, CornerBit.RIGHT);
          // Whether surface attached to right side of anchor element.
          var isAnchoredToRight = false;
          // Anchored to start
          if (isRtl && isFlipRtl) {
              isAnchoredToRight = !hasRightBit;
          }
          else {
              // Anchored to right
              isAnchoredToRight = hasRightBit;
          }
          var availableLeft;
          var availableRight;
          if (isAnchoredToRight) {
              availableLeft =
                  viewportDistance.left + anchorSize.width + this.anchorMargin.right;
              availableRight = viewportDistance.right - this.anchorMargin.right;
          }
          else {
              availableLeft = viewportDistance.left + this.anchorMargin.left;
              availableRight =
                  viewportDistance.right + anchorSize.width - this.anchorMargin.left;
          }
          var isAvailableLeft = availableLeft - surfaceSize.width > 0;
          var isAvailableRight = availableRight - surfaceSize.width > 0;
          var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) &&
              this.hasBit(corner, CornerBit.RIGHT);
          if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl ||
              !isAvailableLeft && isOriginCornerAlignedToEnd) {
              // Attach left side of surface to the anchor.
              corner = this.unsetBit(corner, CornerBit.RIGHT);
          }
          else if (isAvailableLeft && isAnchoredToRight && isRtl ||
              (isAvailableLeft && !isAnchoredToRight && hasRightBit) ||
              (!isAvailableRight && availableLeft >= availableRight)) {
              // Attach right side of surface to the anchor.
              corner = this.setBit(corner, CornerBit.RIGHT);
          }
          return corner;
      };
      /**
       * @param corner Origin corner of the menu surface.
       * @return Maximum height of the menu surface, based on available space. 0
       *     indicates should not be set.
       */
      MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight = function (corner) {
          if (this.maxHeight > 0) {
              return this.maxHeight;
          }
          var viewportDistance = this.measurements.viewportDistance;
          var maxHeight = 0;
          var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
          var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
          var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
          // When maximum height is not specified, it is handled from CSS.
          if (isBottomAligned) {
              maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
              if (!isBottomAnchored) {
                  maxHeight += this.measurements.anchorSize.height;
              }
          }
          else {
              maxHeight = viewportDistance.bottom - this.anchorMargin.bottom +
                  this.measurements.anchorSize.height - MARGIN_TO_EDGE;
              if (isBottomAnchored) {
                  maxHeight -= this.measurements.anchorSize.height;
              }
          }
          return maxHeight;
      };
      /**
       * @param corner Origin corner of the menu surface.
       * @return Horizontal offset of menu surface origin corner from corresponding
       *     anchor corner.
       */
      MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset = function (corner) {
          var anchorSize = this.measurements.anchorSize;
          // isRightAligned corresponds to using the 'right' property on the surface.
          var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
          var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
          if (isRightAligned) {
              var rightOffset = avoidHorizontalOverlap ?
                  anchorSize.width - this.anchorMargin.left :
                  this.anchorMargin.right;
              // For hoisted or fixed elements, adjust the offset by the difference
              // between viewport width and body width so when we calculate the right
              // value (`adjustPositionForHoistedElement`) based on the element
              // position, the right property is correct.
              if (this.isHoistedElement || this.isFixedPosition) {
                  return rightOffset -
                      (this.measurements.viewportSize.width -
                          this.measurements.bodySize.width);
              }
              return rightOffset;
          }
          return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right :
              this.anchorMargin.left;
      };
      /**
       * @param corner Origin corner of the menu surface.
       * @return Vertical offset of menu surface origin corner from corresponding
       *     anchor corner.
       */
      MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset = function (corner) {
          var anchorSize = this.measurements.anchorSize;
          var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
          var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
          var y = 0;
          if (isBottomAligned) {
              y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top :
                  -this.anchorMargin.bottom;
          }
          else {
              y = avoidVerticalOverlap ?
                  (anchorSize.height + this.anchorMargin.bottom) :
                  this.anchorMargin.top;
          }
          return y;
      };
      /**
       * Calculates the offsets for positioning the menu-surface when the
       * menu-surface has been hoisted to the body.
       */
      MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement = function (position) {
          var e_1, _a;
          var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
          var props = Object.keys(position);
          try {
              for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                  var prop = props_1_1.value;
                  var value = position[prop] || 0;
                  if (this.isHorizontallyCenteredOnViewport &&
                      (prop === 'left' || prop === 'right')) {
                      position[prop] = (viewportSize.width - surfaceSize.width) / 2;
                      continue;
                  }
                  // Hoisted surfaces need to have the anchor elements location on the page
                  // added to the position properties for proper alignment on the body.
                  value += viewportDistance[prop];
                  // Surfaces that are absolutely positioned need to have additional
                  // calculations for scroll and bottom positioning.
                  if (!this.isFixedPosition) {
                      if (prop === 'top') {
                          value += windowScroll.y;
                      }
                      else if (prop === 'bottom') {
                          value -= windowScroll.y;
                      }
                      else if (prop === 'left') {
                          value += windowScroll.x;
                      }
                      else { // prop === 'right'
                          value -= windowScroll.x;
                      }
                  }
                  position[prop] = value;
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      /**
       * The last focused element when the menu surface was opened should regain
       * focus, if the user is focused on or within the menu surface when it is
       * closed.
       */
      MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus = function () {
          var _this = this;
          var isRootFocused = this.adapter.isFocused();
          var childHasFocus = document.activeElement &&
              this.adapter.isElementInContainer(document.activeElement);
          if (isRootFocused || childHasFocus) {
              // Wait before restoring focus when closing the menu surface. This is
              // important because if a touch event triggered the menu close, and the
              // subsequent mouse event occurs after focus is restored, then the
              // restored focus would be lost.
              setTimeout(function () {
                  _this.adapter.restoreFocus();
              }, numbers$2.TOUCH_EVENT_WAIT_MS);
          }
      };
      MDCMenuSurfaceFoundation.prototype.hasBit = function (corner, bit) {
          return Boolean(corner & bit); // tslint:disable-line:no-bitwise
      };
      MDCMenuSurfaceFoundation.prototype.setBit = function (corner, bit) {
          return corner | bit; // tslint:disable-line:no-bitwise
      };
      MDCMenuSurfaceFoundation.prototype.unsetBit = function (corner, bit) {
          return corner ^ bit;
      };
      /**
       * isFinite that doesn't force conversion to number type.
       * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
       */
      MDCMenuSurfaceFoundation.prototype.isFinite = function (num) {
          return typeof num === 'number' && isFinite(num);
      };
      return MDCMenuSurfaceFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenuFoundation = /** @class */ (function (_super) {
      __extends(MDCMenuFoundation, _super);
      function MDCMenuFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation.defaultAdapter), adapter)) || this;
          _this.closeAnimationEndTimerId = 0;
          _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
          _this.selectedIndex = -1;
          return _this;
      }
      Object.defineProperty(MDCMenuFoundation, "cssClasses", {
          get: function () {
              return cssClasses$6;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuFoundation, "strings", {
          get: function () {
              return strings$4;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuFoundation, "numbers", {
          get: function () {
              return numbers$4;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
          /**
           * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClassToElementAtIndex: function () { return undefined; },
                  removeClassFromElementAtIndex: function () { return undefined; },
                  addAttributeToElementAtIndex: function () { return undefined; },
                  removeAttributeFromElementAtIndex: function () { return undefined; },
                  getAttributeFromElementAtIndex: function () { return null; },
                  elementContainsClass: function () { return false; },
                  closeSurface: function () { return undefined; },
                  getElementIndex: function () { return -1; },
                  notifySelected: function () { return undefined; },
                  getMenuItemCount: function () { return 0; },
                  focusItemAtIndex: function () { return undefined; },
                  focusListRoot: function () { return undefined; },
                  getSelectedSiblingOfItemAtIndex: function () { return -1; },
                  isSelectableItemAtIndex: function () { return false; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCMenuFoundation.prototype.destroy = function () {
          if (this.closeAnimationEndTimerId) {
              clearTimeout(this.closeAnimationEndTimerId);
          }
          this.adapter.closeSurface();
      };
      MDCMenuFoundation.prototype.handleKeydown = function (evt) {
          var key = evt.key, keyCode = evt.keyCode;
          var isTab = key === 'Tab' || keyCode === 9;
          if (isTab) {
              this.adapter.closeSurface(/** skipRestoreFocus */ true);
          }
      };
      MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
          var _this = this;
          var index = this.adapter.getElementIndex(listItem);
          if (index < 0) {
              return;
          }
          this.adapter.notifySelected({ index: index });
          var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$4.SKIP_RESTORE_FOCUS) === 'true';
          this.adapter.closeSurface(skipRestoreFocus);
          // Wait for the menu to close before adding/removing classes that affect styles.
          this.closeAnimationEndTimerId = setTimeout(function () {
              // Recompute the index in case the menu contents have changed.
              var recomputedIndex = _this.adapter.getElementIndex(listItem);
              if (recomputedIndex >= 0 &&
                  _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
                  _this.setSelectedIndex(recomputedIndex);
              }
          }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
      };
      MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
          switch (this.defaultFocusState) {
              case DefaultFocusState.FIRST_ITEM:
                  this.adapter.focusItemAtIndex(0);
                  break;
              case DefaultFocusState.LAST_ITEM:
                  this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                  break;
              case DefaultFocusState.NONE:
                  // Do nothing.
                  break;
              default:
                  this.adapter.focusListRoot();
                  break;
          }
      };
      /**
       * Sets default focus state where the menu should focus every time when menu
       * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
       * default.
       */
      MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
          this.defaultFocusState = focusState;
      };
      /** @return Index of the currently selected list item within the menu. */
      MDCMenuFoundation.prototype.getSelectedIndex = function () {
          return this.selectedIndex;
      };
      /**
       * Selects the list item at `index` within the menu.
       * @param index Index of list item within the menu.
       */
      MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
          this.validatedIndex(index);
          if (!this.adapter.isSelectableItemAtIndex(index)) {
              throw new Error('MDCMenuFoundation: No selection group at specified index.');
          }
          var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
          if (prevSelectedIndex >= 0) {
              this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$4.ARIA_CHECKED_ATTR);
              this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$6.MENU_SELECTED_LIST_ITEM);
          }
          this.adapter.addClassToElementAtIndex(index, cssClasses$6.MENU_SELECTED_LIST_ITEM);
          this.adapter.addAttributeToElementAtIndex(index, strings$4.ARIA_CHECKED_ATTR, 'true');
          this.selectedIndex = index;
      };
      /**
       * Sets the enabled state to isEnabled for the menu item at the given index.
       * @param index Index of the menu item
       * @param isEnabled The desired enabled state of the menu item.
       */
      MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
          this.validatedIndex(index);
          if (isEnabled) {
              this.adapter.removeClassFromElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
              this.adapter.addAttributeToElementAtIndex(index, strings$4.ARIA_DISABLED_ATTR, 'false');
          }
          else {
              this.adapter.addClassToElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
              this.adapter.addAttributeToElementAtIndex(index, strings$4.ARIA_DISABLED_ATTR, 'true');
          }
      };
      MDCMenuFoundation.prototype.validatedIndex = function (index) {
          var menuSize = this.adapter.getMenuItemCount();
          var isIndexInRange = index >= 0 && index < menuSize;
          if (!isIndexInRange) {
              throw new Error('MDCMenuFoundation: No list item at specified index.');
          }
      };
      return MDCMenuFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const integerSort = (a, b) => {
      return a - b;
  };
  const findIndexDiff = (oldSet, newSet) => {
      const oldArr = Array.from(oldSet);
      const newArr = Array.from(newSet);
      const diff = { added: [], removed: [] };
      const oldSorted = oldArr.sort(integerSort);
      const newSorted = newArr.sort(integerSort);
      let i = 0;
      let j = 0;
      while (i < oldSorted.length || j < newSorted.length) {
          const oldVal = oldSorted[i];
          const newVal = newSorted[j];
          if (oldVal === newVal) {
              i++;
              j++;
              continue;
          }
          if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
              diff.removed.push(oldVal);
              i++;
              continue;
          }
          if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
              diff.added.push(newVal);
              j++;
              continue;
          }
      }
      return diff;
  };
  const ELEMENTS_KEY_ALLOWED_IN$1 = ['input', 'button', 'textarea', 'select'];
  function isIndexSet(selectedIndex) {
      return selectedIndex instanceof Set;
  }
  const createSetFromIndex = (index) => {
      const entry = index === numbers$1.UNSET_INDEX ? new Set() : index;
      return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
  };
  class MDCListFoundation extends MDCFoundation {
      constructor(adapter) {
          super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
          this.isMulti_ = false;
          this.wrapFocus_ = false;
          this.isVertical_ = true;
          this.selectedIndex_ = numbers$1.UNSET_INDEX;
          this.focusedItemIndex_ = numbers$1.UNSET_INDEX;
          this.useActivatedClass_ = false;
          this.ariaCurrentAttrValue_ = null;
      }
      static get strings() {
          return strings$1;
      }
      static get numbers() {
          return numbers$1;
      }
      static get defaultAdapter() {
          return {
              focusItemAtIndex: () => undefined,
              getFocusedElementIndex: () => 0,
              getListItemCount: () => 0,
              isFocusInsideList: () => false,
              isRootFocused: () => false,
              notifyAction: () => undefined,
              notifySelected: () => undefined,
              getSelectedStateForElementIndex: () => false,
              setDisabledStateForElementIndex: () => undefined,
              getDisabledStateForElementIndex: () => false,
              setSelectedStateForElementIndex: () => undefined,
              setActivatedStateForElementIndex: () => undefined,
              setTabIndexForElementIndex: () => undefined,
              setAttributeForElementIndex: () => undefined,
              getAttributeForElementIndex: () => null,
          };
      }
      /**
       * Sets the private wrapFocus_ variable.
       */
      setWrapFocus(value) {
          this.wrapFocus_ = value;
      }
      /**
       * Sets the private wrapFocus_ variable.
       */
      setMulti(value) {
          this.isMulti_ = value;
          const currentIndex = this.selectedIndex_;
          if (value) {
              // number to set
              if (!isIndexSet(currentIndex)) {
                  const isUnset = currentIndex === numbers$1.UNSET_INDEX;
                  this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
              }
          }
          else {
              // set to first sorted number in set
              if (isIndexSet(currentIndex)) {
                  if (currentIndex.size) {
                      const vals = Array.from(currentIndex).sort(integerSort);
                      this.selectedIndex_ = vals[0];
                  }
                  else {
                      this.selectedIndex_ = numbers$1.UNSET_INDEX;
                  }
              }
          }
      }
      /**
       * Sets the isVertical_ private variable.
       */
      setVerticalOrientation(value) {
          this.isVertical_ = value;
      }
      /**
       * Sets the useActivatedClass_ private variable.
       */
      setUseActivatedClass(useActivated) {
          this.useActivatedClass_ = useActivated;
      }
      getSelectedIndex() {
          return this.selectedIndex_;
      }
      setSelectedIndex(index) {
          if (!this.isIndexValid_(index)) {
              return;
          }
          if (this.isMulti_) {
              this.setMultiSelectionAtIndex_(createSetFromIndex(index));
          }
          else {
              this.setSingleSelectionAtIndex_(index);
          }
      }
      /**
       * Focus in handler for the list items.
       */
      handleFocusIn(_, listItemIndex) {
          if (listItemIndex >= 0) {
              this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
          }
      }
      /**
       * Focus out handler for the list items.
       */
      handleFocusOut(_, listItemIndex) {
          if (listItemIndex >= 0) {
              this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
          }
          /**
           * Between Focusout & Focusin some browsers do not have focus on any
           * element. Setting a delay to wait till the focus is moved to next element.
           */
          setTimeout(() => {
              if (!this.adapter.isFocusInsideList()) {
                  this.setTabindexToFirstSelectedItem_();
              }
          }, 0);
      }
      /**
       * Key handler for the list.
       */
      handleKeydown(event, isRootListItem, listItemIndex) {
          const isArrowLeft = normalizeKey(event) === 'ArrowLeft';
          const isArrowUp = normalizeKey(event) === 'ArrowUp';
          const isArrowRight = normalizeKey(event) === 'ArrowRight';
          const isArrowDown = normalizeKey(event) === 'ArrowDown';
          const isHome = normalizeKey(event) === 'Home';
          const isEnd = normalizeKey(event) === 'End';
          const isEnter = normalizeKey(event) === 'Enter';
          const isSpace = normalizeKey(event) === 'Spacebar';
          if (this.adapter.isRootFocused()) {
              if (isArrowUp || isEnd) {
                  event.preventDefault();
                  this.focusLastElement();
              }
              else if (isArrowDown || isHome) {
                  event.preventDefault();
                  this.focusFirstElement();
              }
              return;
          }
          let currentIndex = this.adapter.getFocusedElementIndex();
          if (currentIndex === -1) {
              currentIndex = listItemIndex;
              if (currentIndex < 0) {
                  // If this event doesn't have a mdc-deprecated-list-item ancestor from
                  // the current list (not from a sublist), return early.
                  return;
              }
          }
          let nextIndex;
          if ((this.isVertical_ && isArrowDown) ||
              (!this.isVertical_ && isArrowRight)) {
              this.preventDefaultEvent(event);
              nextIndex = this.focusNextElement(currentIndex);
          }
          else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
              this.preventDefaultEvent(event);
              nextIndex = this.focusPrevElement(currentIndex);
          }
          else if (isHome) {
              this.preventDefaultEvent(event);
              nextIndex = this.focusFirstElement();
          }
          else if (isEnd) {
              this.preventDefaultEvent(event);
              nextIndex = this.focusLastElement();
          }
          else if (isEnter || isSpace) {
              if (isRootListItem) {
                  // Return early if enter key is pressed on anchor element which triggers
                  // synthetic MouseEvent event.
                  const target = event.target;
                  if (target && target.tagName === 'A' && isEnter) {
                      return;
                  }
                  this.preventDefaultEvent(event);
                  this.setSelectedIndexOnAction_(currentIndex, true);
              }
          }
          this.focusedItemIndex_ = currentIndex;
          if (nextIndex !== undefined) {
              this.setTabindexAtIndex_(nextIndex);
              this.focusedItemIndex_ = nextIndex;
          }
      }
      /**
       * Click handler for the list.
       */
      handleSingleSelection(index, isInteraction, force) {
          if (index === numbers$1.UNSET_INDEX) {
              return;
          }
          this.setSelectedIndexOnAction_(index, isInteraction, force);
          this.setTabindexAtIndex_(index);
          this.focusedItemIndex_ = index;
      }
      /**
       * Focuses the next element on the list.
       */
      focusNextElement(index) {
          const count = this.adapter.getListItemCount();
          let nextIndex = index + 1;
          if (nextIndex >= count) {
              if (this.wrapFocus_) {
                  nextIndex = 0;
              }
              else {
                  // Return early because last item is already focused.
                  return index;
              }
          }
          this.adapter.focusItemAtIndex(nextIndex);
          return nextIndex;
      }
      /**
       * Focuses the previous element on the list.
       */
      focusPrevElement(index) {
          let prevIndex = index - 1;
          if (prevIndex < 0) {
              if (this.wrapFocus_) {
                  prevIndex = this.adapter.getListItemCount() - 1;
              }
              else {
                  // Return early because first item is already focused.
                  return index;
              }
          }
          this.adapter.focusItemAtIndex(prevIndex);
          return prevIndex;
      }
      focusFirstElement() {
          this.adapter.focusItemAtIndex(0);
          return 0;
      }
      focusLastElement() {
          const lastIndex = this.adapter.getListItemCount() - 1;
          this.adapter.focusItemAtIndex(lastIndex);
          return lastIndex;
      }
      /**
       * @param itemIndex Index of the list item
       * @param isEnabled Sets the list item to enabled or disabled.
       */
      setEnabled(itemIndex, isEnabled) {
          if (!this.isIndexValid_(itemIndex)) {
              return;
          }
          this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
      }
      /**
       * Ensures that preventDefault is only called if the containing element
       * doesn't consume the event, and it will cause an unintended scroll.
       */
      preventDefaultEvent(evt) {
          const target = evt.target;
          const tagName = `${target.tagName}`.toLowerCase();
          if (ELEMENTS_KEY_ALLOWED_IN$1.indexOf(tagName) === -1) {
              evt.preventDefault();
          }
      }
      setSingleSelectionAtIndex_(index, isInteraction = true) {
          if (this.selectedIndex_ === index) {
              return;
          }
          // unset previous
          if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
              this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
              if (this.useActivatedClass_) {
                  this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
              }
          }
          // set new
          if (isInteraction) {
              this.adapter.setSelectedStateForElementIndex(index, true);
          }
          if (this.useActivatedClass_) {
              this.adapter.setActivatedStateForElementIndex(index, true);
          }
          this.setAriaForSingleSelectionAtIndex_(index);
          this.selectedIndex_ = index;
          this.adapter.notifySelected(index);
      }
      setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
          const oldIndex = createSetFromIndex(this.selectedIndex_);
          const diff = findIndexDiff(oldIndex, newIndex);
          if (!diff.removed.length && !diff.added.length) {
              return;
          }
          for (const removed of diff.removed) {
              if (isInteraction) {
                  this.adapter.setSelectedStateForElementIndex(removed, false);
              }
              if (this.useActivatedClass_) {
                  this.adapter.setActivatedStateForElementIndex(removed, false);
              }
          }
          for (const added of diff.added) {
              if (isInteraction) {
                  this.adapter.setSelectedStateForElementIndex(added, true);
              }
              if (this.useActivatedClass_) {
                  this.adapter.setActivatedStateForElementIndex(added, true);
              }
          }
          this.selectedIndex_ = newIndex;
          this.adapter.notifySelected(newIndex, diff);
      }
      /**
       * Sets aria attribute for single selection at given index.
       */
      setAriaForSingleSelectionAtIndex_(index) {
          // Detect the presence of aria-current and get the value only during list
          // initialization when it is in unset state.
          if (this.selectedIndex_ === numbers$1.UNSET_INDEX) {
              this.ariaCurrentAttrValue_ =
                  this.adapter.getAttributeForElementIndex(index, strings$1.ARIA_CURRENT);
          }
          const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
          const ariaAttribute = isAriaCurrent ? strings$1.ARIA_CURRENT : strings$1.ARIA_SELECTED;
          if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
              this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
          }
          const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
          this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
      }
      setTabindexAtIndex_(index) {
          if (this.focusedItemIndex_ === numbers$1.UNSET_INDEX && index !== 0) {
              // If no list item was selected set first list item's tabindex to -1.
              // Generally, tabindex is set to 0 on first list item of list that has no
              // preselected items.
              this.adapter.setTabIndexForElementIndex(0, -1);
          }
          else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
              this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
          }
          this.adapter.setTabIndexForElementIndex(index, 0);
      }
      setTabindexToFirstSelectedItem_() {
          let targetIndex = 0;
          if (typeof this.selectedIndex_ === 'number' &&
              this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
              targetIndex = this.selectedIndex_;
          }
          else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
              targetIndex = Math.min(...this.selectedIndex_);
          }
          this.setTabindexAtIndex_(targetIndex);
      }
      isIndexValid_(index) {
          if (index instanceof Set) {
              if (!this.isMulti_) {
                  throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
              }
              if (index.size === 0) {
                  return true;
              }
              else {
                  let isOneInRange = false;
                  for (const entry of index) {
                      isOneInRange = this.isIndexInRange_(entry);
                      if (isOneInRange) {
                          break;
                      }
                  }
                  return isOneInRange;
              }
          }
          else if (typeof index === 'number') {
              if (this.isMulti_) {
                  throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
                      index);
              }
              return index === numbers$1.UNSET_INDEX || this.isIndexInRange_(index);
          }
          else {
              return false;
          }
      }
      isIndexInRange_(index) {
          const listSize = this.adapter.getListItemCount();
          return index >= 0 && index < listSize;
      }
      /**
       * Sets selected index on user action, toggles checkbox / radio based on
       * toggleCheckbox value. User interaction should not toggle list item(s) when
       * disabled.
       */
      setSelectedIndexOnAction_(index, isInteraction, force) {
          if (this.adapter.getDisabledStateForElementIndex(index)) {
              return;
          }
          let checkedIndex = index;
          if (this.isMulti_) {
              checkedIndex = new Set([index]);
          }
          if (!this.isIndexValid_(checkedIndex)) {
              return;
          }
          if (this.isMulti_) {
              this.toggleMultiAtIndex(index, force, isInteraction);
          }
          else {
              if (isInteraction || force) {
                  this.setSingleSelectionAtIndex_(index, isInteraction);
              }
              else {
                  const isDeselection = this.selectedIndex_ === index;
                  if (isDeselection) {
                      this.setSingleSelectionAtIndex_(numbers$1.UNSET_INDEX);
                  }
              }
          }
          if (isInteraction) {
              this.adapter.notifyAction(index);
          }
      }
      toggleMultiAtIndex(index, force, isInteraction = true) {
          let newSelectionValue = false;
          if (force === undefined) {
              newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
          }
          else {
              newSelectionValue = force;
          }
          const newSet = createSetFromIndex(this.selectedIndex_);
          if (newSelectionValue) {
              newSet.add(index);
          }
          else {
              newSet.delete(index);
          }
          this.setMultiSelectionAtIndex_(newSet, isInteraction);
      }
  }
  //# sourceMappingURL=mwc-list-foundation.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @fires selected {SelectedDetail}
   * @fires action {ActionDetail}
   * @fires items-updated
   * @fires opened
   * @fires closed
   */
  class MenuBase extends BaseElement {
      constructor() {
          super(...arguments);
          this.mdcFoundationClass = MDCMenuFoundation;
          this.listElement_ = null;
          this.anchor = null;
          this.open = false;
          this.quick = false;
          this.wrapFocus = false;
          this.innerRole = 'menu';
          this.innerAriaLabel = null;
          this.corner = 'TOP_START';
          this.x = null;
          this.y = null;
          this.absolute = false;
          this.multi = false;
          this.activatable = false;
          this.fixed = false;
          this.forceGroupSelection = false;
          this.fullwidth = false;
          this.menuCorner = 'START';
          this.stayOpenOnBodyClick = false;
          this.defaultFocus = 'LIST_ROOT';
          this._listUpdateComplete = null;
      }
      get listElement() {
          if (!this.listElement_) {
              this.listElement_ = this.renderRoot.querySelector('mwc-list');
              return this.listElement_;
          }
          return this.listElement_;
      }
      get items() {
          const listElement = this.listElement;
          if (listElement) {
              return listElement.items;
          }
          return [];
      }
      get index() {
          const listElement = this.listElement;
          if (listElement) {
              return listElement.index;
          }
          return -1;
      }
      get selected() {
          const listElement = this.listElement;
          if (listElement) {
              return listElement.selected;
          }
          return null;
      }
      render() {
          const itemRoles = this.innerRole === 'menu' ? 'menuitem' : 'option';
          return $ `
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${itemRoles}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
      }
      createAdapter() {
          return {
              addClassToElementAtIndex: (index, className) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return;
                  }
                  const element = listElement.items[index];
                  if (!element) {
                      return;
                  }
                  if (className === 'mdc-menu-item--selected') {
                      if (this.forceGroupSelection && !element.selected) {
                          listElement.toggle(index, true);
                      }
                  }
                  else {
                      element.classList.add(className);
                  }
              },
              removeClassFromElementAtIndex: (index, className) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return;
                  }
                  const element = listElement.items[index];
                  if (!element) {
                      return;
                  }
                  if (className === 'mdc-menu-item--selected') {
                      if (element.selected) {
                          listElement.toggle(index, false);
                      }
                  }
                  else {
                      element.classList.remove(className);
                  }
              },
              addAttributeToElementAtIndex: (index, attr, value) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return;
                  }
                  const element = listElement.items[index];
                  if (!element) {
                      return;
                  }
                  element.setAttribute(attr, value);
              },
              removeAttributeFromElementAtIndex: (index, attr) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return;
                  }
                  const element = listElement.items[index];
                  if (!element) {
                      return;
                  }
                  element.removeAttribute(attr);
              },
              getAttributeFromElementAtIndex: (index, attr) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return null;
                  }
                  const element = listElement.items[index];
                  if (!element) {
                      return null;
                  }
                  return element.getAttribute(attr);
              },
              elementContainsClass: (element, className) => element.classList.contains(className),
              closeSurface: () => {
                  this.open = false;
              },
              getElementIndex: (element) => {
                  const listElement = this.listElement;
                  if (listElement) {
                      return listElement.items.indexOf(element);
                  }
                  return -1;
              },
              notifySelected: () => { },
              getMenuItemCount: () => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return 0;
                  }
                  return listElement.items.length;
              },
              focusItemAtIndex: (index) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return;
                  }
                  const element = listElement.items[index];
                  if (element) {
                      element.focus();
                  }
              },
              focusListRoot: () => {
                  if (this.listElement) {
                      this.listElement.focus();
                  }
              },
              getSelectedSiblingOfItemAtIndex: (index) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return -1;
                  }
                  const elementAtIndex = listElement.items[index];
                  if (!elementAtIndex || !elementAtIndex.group) {
                      return -1;
                  }
                  for (let i$$1 = 0; i$$1 < listElement.items.length; i$$1++) {
                      if (i$$1 === index) {
                          continue;
                      }
                      const current = listElement.items[i$$1];
                      if (current.selected && current.group === elementAtIndex.group) {
                          return i$$1;
                      }
                  }
                  return -1;
              },
              isSelectableItemAtIndex: (index) => {
                  const listElement = this.listElement;
                  if (!listElement) {
                      return false;
                  }
                  const elementAtIndex = listElement.items[index];
                  if (!elementAtIndex) {
                      return false;
                  }
                  return elementAtIndex.hasAttribute('group');
              },
          };
      }
      onKeydown(evt) {
          if (this.mdcFoundation) {
              this.mdcFoundation.handleKeydown(evt);
          }
      }
      onAction(evt) {
          const listElement = this.listElement;
          if (this.mdcFoundation && listElement) {
              const index = evt.detail.index;
              const el = listElement.items[index];
              if (el) {
                  this.mdcFoundation.handleItemAction(el);
              }
          }
      }
      onOpened() {
          this.open = true;
          if (this.mdcFoundation) {
              this.mdcFoundation.handleMenuSurfaceOpened();
          }
      }
      onClosed() {
          this.open = false;
      }
      // tslint:disable:ban-ts-ignore
      async getUpdateComplete() {
          await this._listUpdateComplete;
          // @ts-ignore
          const result = await super.getUpdateComplete();
          return result;
      }
      // tslint:enable:ban-ts-ignore
      async firstUpdated() {
          super.firstUpdated();
          const listElement = this.listElement;
          if (listElement) {
              this._listUpdateComplete = listElement.updateComplete;
              await this._listUpdateComplete;
          }
      }
      select(index) {
          const listElement = this.listElement;
          if (listElement) {
              listElement.select(index);
          }
      }
      close() {
          this.open = false;
      }
      show() {
          this.open = true;
      }
      getFocusedItemIndex() {
          const listElement = this.listElement;
          if (listElement) {
              return listElement.getFocusedItemIndex();
          }
          return -1;
      }
      focusItemAtIndex(index) {
          const listElement = this.listElement;
          if (listElement) {
              listElement.focusItemAtIndex(index);
          }
      }
      layout(updateItems = true) {
          const listElement = this.listElement;
          if (listElement) {
              listElement.layout(updateItems);
          }
      }
  }
  __decorate([
      i$3('.mdc-menu')
  ], MenuBase.prototype, "mdcRoot", void 0);
  __decorate([
      i$3('slot')
  ], MenuBase.prototype, "slotElement", void 0);
  __decorate([
      e$4({ type: Object })
  ], MenuBase.prototype, "anchor", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true })
  ], MenuBase.prototype, "open", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "quick", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "wrapFocus", void 0);
  __decorate([
      e$4({ type: String })
  ], MenuBase.prototype, "innerRole", void 0);
  __decorate([
      e$4({ type: String })
  ], MenuBase.prototype, "innerAriaLabel", void 0);
  __decorate([
      e$4({ type: String })
  ], MenuBase.prototype, "corner", void 0);
  __decorate([
      e$4({ type: Number })
  ], MenuBase.prototype, "x", void 0);
  __decorate([
      e$4({ type: Number })
  ], MenuBase.prototype, "y", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "absolute", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "multi", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "activatable", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "fixed", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "forceGroupSelection", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "fullwidth", void 0);
  __decorate([
      e$4({ type: String })
  ], MenuBase.prototype, "menuCorner", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuBase.prototype, "stayOpenOnBodyClick", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (value) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setDefaultFocusState(DefaultFocusState[value]);
          }
      })
  ], MenuBase.prototype, "defaultFocus", void 0);
  //# sourceMappingURL=mwc-menu-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$3 = r `mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
  //# sourceMappingURL=mwc-menu.css.js.map

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // tslint:disable:no-bitwise
  // required for closure compiler
  const stringToCorner = {
      'TOP_LEFT': Corner.TOP_LEFT,
      'TOP_RIGHT': Corner.TOP_RIGHT,
      'BOTTOM_LEFT': Corner.BOTTOM_LEFT,
      'BOTTOM_RIGHT': Corner.BOTTOM_RIGHT,
      'TOP_START': Corner.TOP_START,
      'TOP_END': Corner.TOP_END,
      'BOTTOM_START': Corner.BOTTOM_START,
      'BOTTOM_END': Corner.BOTTOM_END,
  };
  /**
   * @fires opened
   * @fires closed
   */
  class MenuSurfaceBase extends BaseElement {
      constructor() {
          super(...arguments);
          this.mdcFoundationClass = MDCMenuSurfaceFoundation;
          this.absolute = false;
          this.fullwidth = false;
          this.fixed = false;
          this.x = null;
          this.y = null;
          // must be defined before open or else race condition in foundation occurs.
          this.quick = false;
          this.open = false;
          this.stayOpenOnBodyClick = false;
          this.bitwiseCorner = Corner.TOP_START;
          this.previousMenuCorner = null;
          // must be defined before observer of anchor corner for initialization
          this.menuCorner = 'START';
          this.corner = 'TOP_START';
          this.styleTop = '';
          this.styleLeft = '';
          this.styleRight = '';
          this.styleBottom = '';
          this.styleMaxHeight = '';
          this.styleTransformOrigin = '';
          this.anchor = null;
          this.previouslyFocused = null;
          this.previousAnchor = null;
          this.onBodyClickBound = () => undefined;
      }
      render() {
          const classes = {
              'mdc-menu-surface--fixed': this.fixed,
              'mdc-menu-surface--fullwidth': this.fullwidth,
          };
          const styles = {
              'top': this.styleTop,
              'left': this.styleLeft,
              'right': this.styleRight,
              'bottom': this.styleBottom,
              'max-height': this.styleMaxHeight,
              'transform-origin': this.styleTransformOrigin,
          };
          return $ `
      <div
          class="mdc-menu-surface ${o$6(classes)}"
          style="${i$5(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
      }
      createAdapter() {
          return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { hasAnchor: () => {
                  return !!this.anchor;
              }, notifyClose: () => {
                  const init = { bubbles: true, composed: true };
                  const ev = new CustomEvent('closed', init);
                  this.open = false;
                  this.mdcRoot.dispatchEvent(ev);
              }, notifyClosing: () => {
                  const init = { bubbles: true, composed: true };
                  const ev = new CustomEvent('closing', init);
                  this.mdcRoot.dispatchEvent(ev);
              }, notifyOpen: () => {
                  const init = { bubbles: true, composed: true };
                  const ev = new CustomEvent('opened', init);
                  this.open = true;
                  this.mdcRoot.dispatchEvent(ev);
              }, isElementInContainer: () => false, isRtl: () => {
                  if (this.mdcRoot) {
                      return getComputedStyle(this.mdcRoot).direction === 'rtl';
                  }
                  return false;
              }, setTransformOrigin: (origin) => {
                  const root = this.mdcRoot;
                  if (!root) {
                      return;
                  }
                  this.styleTransformOrigin = origin;
              }, isFocused: () => {
                  return doesElementContainFocus(this);
              }, saveFocus: () => {
                  const activeElementPath = deepActiveElementPath();
                  const pathLength = activeElementPath.length;
                  if (!pathLength) {
                      this.previouslyFocused = null;
                  }
                  this.previouslyFocused = activeElementPath[pathLength - 1];
              }, restoreFocus: () => {
                  if (!this.previouslyFocused) {
                      return;
                  }
                  if ('focus' in this.previouslyFocused) {
                      this.previouslyFocused.focus();
                  }
              }, getInnerDimensions: () => {
                  const mdcRoot = this.mdcRoot;
                  if (!mdcRoot) {
                      return { width: 0, height: 0 };
                  }
                  return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
              }, getAnchorDimensions: () => {
                  const anchorElement = this.anchor;
                  return anchorElement ? anchorElement.getBoundingClientRect() : null;
              }, getBodyDimensions: () => {
                  return {
                      width: document.body.clientWidth,
                      height: document.body.clientHeight,
                  };
              }, getWindowDimensions: () => {
                  return {
                      width: window.innerWidth,
                      height: window.innerHeight,
                  };
              }, getWindowScroll: () => {
                  return {
                      x: window.pageXOffset,
                      y: window.pageYOffset,
                  };
              }, setPosition: (position) => {
                  const mdcRoot = this.mdcRoot;
                  if (!mdcRoot) {
                      return;
                  }
                  this.styleLeft = 'left' in position ? `${position.left}px` : '';
                  this.styleRight = 'right' in position ? `${position.right}px` : '';
                  this.styleTop = 'top' in position ? `${position.top}px` : '';
                  this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
              }, setMaxHeight: async (height) => {
                  const mdcRoot = this.mdcRoot;
                  if (!mdcRoot) {
                      return;
                  }
                  // must set both for IE support as IE will not set a var
                  this.styleMaxHeight = height;
                  await this.updateComplete;
                  this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
              } });
      }
      onKeydown(evt) {
          if (this.mdcFoundation) {
              this.mdcFoundation.handleKeydown(evt);
          }
      }
      onBodyClick(evt) {
          if (this.stayOpenOnBodyClick) {
              return;
          }
          const path = evt.composedPath();
          if (path.indexOf(this) === -1) {
              this.close();
          }
      }
      registerBodyClick() {
          this.onBodyClickBound = this.onBodyClick.bind(this);
          // capture otherwise listener closes menu after quick menu opens
          document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
      }
      deregisterBodyClick() {
          document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
      }
      close() {
          this.open = false;
      }
      show() {
          this.open = true;
      }
  }
  __decorate([
      i$3('.mdc-menu-surface')
  ], MenuSurfaceBase.prototype, "mdcRoot", void 0);
  __decorate([
      i$3('slot')
  ], MenuSurfaceBase.prototype, "slotElement", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (isAbsolute) {
          if (this.mdcFoundation && !this.fixed) {
              this.mdcFoundation.setIsHoisted(isAbsolute);
          }
      })
  ], MenuSurfaceBase.prototype, "absolute", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuSurfaceBase.prototype, "fullwidth", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (isFixed) {
          if (this.mdcFoundation && !this.absolute) {
              this.mdcFoundation.setFixedPosition(isFixed);
          }
      })
  ], MenuSurfaceBase.prototype, "fixed", void 0);
  __decorate([
      e$4({ type: Number }),
      observer(function (value) {
          if (this.mdcFoundation && this.y !== null && value !== null) {
              this.mdcFoundation.setAbsolutePosition(value, this.y);
              this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
          }
      })
  ], MenuSurfaceBase.prototype, "x", void 0);
  __decorate([
      e$4({ type: Number }),
      observer(function (value) {
          if (this.mdcFoundation && this.x !== null && value !== null) {
              this.mdcFoundation.setAbsolutePosition(this.x, value);
              this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
          }
      })
  ], MenuSurfaceBase.prototype, "y", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (value) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setQuickOpen(value);
          }
      })
  ], MenuSurfaceBase.prototype, "quick", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true }),
      observer(function (isOpen, wasOpen) {
          if (this.mdcFoundation) {
              if (isOpen) {
                  this.mdcFoundation.open();
                  // wasOpen helps with first render (when it is `undefined`) perf
              }
              else if (wasOpen !== undefined) {
                  this.mdcFoundation.close();
              }
          }
      })
  ], MenuSurfaceBase.prototype, "open", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
  __decorate([
      t$2(),
      observer(function (value) {
          if (this.mdcFoundation) {
              if (value) {
                  this.mdcFoundation.setAnchorCorner(value);
              }
              else {
                  this.mdcFoundation.setAnchorCorner(value);
              }
          }
      })
  ], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (value) {
          if (this.mdcFoundation) {
              const isValidValue = value === 'START' || value === 'END';
              const isFirstTimeSet = this.previousMenuCorner === null;
              const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
              const initiallySetToEnd = isFirstTimeSet && value === 'END';
              if (isValidValue && (cornerChanged || initiallySetToEnd)) {
                  this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
                  this.mdcFoundation.flipCornerHorizontally();
                  this.previousMenuCorner = value;
              }
          }
      })
  ], MenuSurfaceBase.prototype, "menuCorner", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (value) {
          if (this.mdcFoundation) {
              if (value) {
                  let newCorner = stringToCorner[value];
                  if (this.menuCorner === 'END') {
                      newCorner = newCorner ^ CornerBit.RIGHT;
                  }
                  this.bitwiseCorner = newCorner;
              }
          }
      })
  ], MenuSurfaceBase.prototype, "corner", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleTop", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleLeft", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleRight", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleBottom", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
  __decorate([
      t$2()
  ], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);
  //# sourceMappingURL=mwc-menu-surface-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$4 = r `.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
  //# sourceMappingURL=mwc-menu-surface.css.js.map

  class MwcMenuSurface extends e$3(MenuSurfaceBase) {
    static get defineId() { return 'mwc-menu-surface'; }

    static get elementDefinitions() {
      return buildElementDefinitions([], MwcMenuSurface);
    }

    static get styles() {
      return styles$4;
    }
  }

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  function debounceLayout(callback, waitInMS = 50) {
      let timeoutId;
      // tslint:disable-next-line
      return function (updateItems = true) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
              callback(updateItems);
          }, waitInMS);
      };
  }
  const isListItem = (element) => {
      return element.hasAttribute('mwc-list-item');
  };
  function clearAndCreateItemsReadyPromise() {
      const oldResolver = this.itemsReadyResolver;
      this.itemsReady = new Promise((res) => {
          // TODO(b/175626389): Type '(value: never[] | PromiseLike<never[]>) => void'
          // is not assignable to type '(value?: never[] | PromiseLike<never[]> |
          // undefined) => void'.
          return this.itemsReadyResolver = res;
      });
      oldResolver();
  }
  /**
   * @fires selected {SelectedDetail}
   * @fires action {ActionDetail}
   * @fires items-updated
   */
  class ListBase extends BaseElement {
      constructor() {
          super();
          this.mdcAdapter = null;
          this.mdcFoundationClass = MDCListFoundation;
          this.activatable = false;
          this.multi = false;
          this.wrapFocus = false;
          this.itemRoles = null;
          this.innerRole = null;
          this.innerAriaLabel = null;
          this.rootTabbable = false;
          this.previousTabindex = null;
          this.noninteractive = false;
          this.itemsReadyResolver = (() => {
              //
          });
          this.itemsReady = Promise.resolve([]);
          // tslint:enable:ban-ts-ignore
          this.items_ = [];
          const debouncedFunction = debounceLayout(this.layout.bind(this));
          this.debouncedLayout = (updateItems = true) => {
              clearAndCreateItemsReadyPromise.call(this);
              debouncedFunction(updateItems);
          };
      }
      // tslint:disable:ban-ts-ignore
      async getUpdateComplete() {
          // @ts-ignore
          const result = await super.getUpdateComplete();
          await this.itemsReady;
          return result;
      }
      get items() {
          return this.items_;
      }
      updateItems() {
          var _a;
          const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
          const listItems = [];
          for (const node of nodes) {
              if (isListItem(node)) {
                  listItems.push(node);
                  node._managingList = this;
              }
              if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
                  node.setAttribute('role', 'separator');
              }
          }
          this.items_ = listItems;
          const selectedIndices = new Set();
          this.items_.forEach((item, index) => {
              if (this.itemRoles) {
                  item.setAttribute('role', this.itemRoles);
              }
              else {
                  item.removeAttribute('role');
              }
              if (item.selected) {
                  selectedIndices.add(index);
              }
          });
          if (this.multi) {
              this.select(selectedIndices);
          }
          else {
              const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
              this.select(index);
          }
          const itemsUpdatedEv = new Event('items-updated', { bubbles: true, composed: true });
          this.dispatchEvent(itemsUpdatedEv);
      }
      get selected() {
          const index = this.index;
          if (!isIndexSet(index)) {
              if (index === -1) {
                  return null;
              }
              return this.items[index];
          }
          const selected = [];
          for (const entry of index) {
              selected.push(this.items[entry]);
          }
          return selected;
      }
      get index() {
          if (this.mdcFoundation) {
              return this.mdcFoundation.getSelectedIndex();
          }
          return -1;
      }
      render() {
          const role = this.innerRole === null ? undefined : this.innerRole;
          const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
          const tabindex = this.rootTabbable ? '0' : '-1';
          return $ `
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l$4(role)}"
          aria-label="${l$4(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
      }
      renderPlaceholder() {
          var _a;
          const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
          if (this.emptyMessage !== undefined && nodes.length === 0) {
              return $ `
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
          }
          return null;
      }
      firstUpdated() {
          super.firstUpdated();
          if (!this.items.length) {
              // required because this is called before observers
              this.mdcFoundation.setMulti(this.multi);
              // for when children upgrade before list
              this.layout();
          }
      }
      onFocusIn(evt) {
          if (this.mdcFoundation && this.mdcRoot) {
              const index = this.getIndexOfTarget(evt);
              this.mdcFoundation.handleFocusIn(evt, index);
          }
      }
      onFocusOut(evt) {
          if (this.mdcFoundation && this.mdcRoot) {
              const index = this.getIndexOfTarget(evt);
              this.mdcFoundation.handleFocusOut(evt, index);
          }
      }
      onKeydown(evt) {
          if (this.mdcFoundation && this.mdcRoot) {
              const index = this.getIndexOfTarget(evt);
              const target = evt.target;
              const isRootListItem = isListItem(target);
              this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
          }
      }
      onRequestSelected(evt) {
          if (this.mdcFoundation) {
              let index = this.getIndexOfTarget(evt);
              // might happen in shady dom slowness. Recalc children
              if (index === -1) {
                  this.layout();
                  index = this.getIndexOfTarget(evt);
                  // still not found; may not be mwc-list-item. Unsupported case.
                  if (index === -1) {
                      return;
                  }
              }
              const element = this.items[index];
              if (element.disabled) {
                  return;
              }
              const selected = evt.detail.selected;
              const source = evt.detail.source;
              this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
              evt.stopPropagation();
          }
      }
      getIndexOfTarget(evt) {
          const elements = this.items;
          const path = evt.composedPath();
          for (const pathItem of path) {
              let index = -1;
              if (isNodeElement(pathItem) && isListItem(pathItem)) {
                  index = elements.indexOf(pathItem);
              }
              if (index !== -1) {
                  return index;
              }
          }
          return -1;
      }
      createAdapter() {
          this.mdcAdapter = {
              getListItemCount: () => {
                  if (this.mdcRoot) {
                      return this.items.length;
                  }
                  return 0;
              },
              getFocusedElementIndex: this.getFocusedItemIndex,
              getAttributeForElementIndex: (index, attr) => {
                  const listElement = this.mdcRoot;
                  if (!listElement) {
                      return '';
                  }
                  const element = this.items[index];
                  return element ? element.getAttribute(attr) : '';
              },
              setAttributeForElementIndex: (index, attr, val) => {
                  if (!this.mdcRoot) {
                      return;
                  }
                  const element = this.items[index];
                  if (element) {
                      element.setAttribute(attr, val);
                  }
              },
              focusItemAtIndex: (index) => {
                  const element = this.items[index];
                  if (element) {
                      element.focus();
                  }
              },
              setTabIndexForElementIndex: (index, value) => {
                  const item = this.items[index];
                  if (item) {
                      item.tabindex = value;
                  }
              },
              notifyAction: (index) => {
                  const init = { bubbles: true, composed: true };
                  init.detail = { index };
                  const ev = new CustomEvent('action', init);
                  this.dispatchEvent(ev);
              },
              notifySelected: (index, diff) => {
                  const init = { bubbles: true, composed: true };
                  init.detail = { index, diff };
                  const ev = new CustomEvent('selected', init);
                  this.dispatchEvent(ev);
              },
              isFocusInsideList: () => {
                  return doesElementContainFocus(this);
              },
              isRootFocused: () => {
                  const mdcRoot = this.mdcRoot;
                  const root = mdcRoot.getRootNode();
                  return root.activeElement === mdcRoot;
              },
              setDisabledStateForElementIndex: (index, value) => {
                  const item = this.items[index];
                  if (!item) {
                      return;
                  }
                  item.disabled = value;
              },
              getDisabledStateForElementIndex: (index) => {
                  const item = this.items[index];
                  if (!item) {
                      return false;
                  }
                  return item.disabled;
              },
              setSelectedStateForElementIndex: (index, value) => {
                  const item = this.items[index];
                  if (!item) {
                      return;
                  }
                  item.selected = value;
              },
              getSelectedStateForElementIndex: (index) => {
                  const item = this.items[index];
                  if (!item) {
                      return false;
                  }
                  return item.selected;
              },
              setActivatedStateForElementIndex: (index, value) => {
                  const item = this.items[index];
                  if (!item) {
                      return;
                  }
                  item.activated = value;
              },
          };
          return this.mdcAdapter;
      }
      selectUi(index, activate = false) {
          const item = this.items[index];
          if (item) {
              item.selected = true;
              item.activated = activate;
          }
      }
      deselectUi(index) {
          const item = this.items[index];
          if (item) {
              item.selected = false;
              item.activated = false;
          }
      }
      select(index) {
          if (!this.mdcFoundation) {
              return;
          }
          this.mdcFoundation.setSelectedIndex(index);
      }
      toggle(index, force) {
          if (this.multi) {
              this.mdcFoundation.toggleMultiAtIndex(index, force);
          }
      }
      onListItemConnected(e) {
          const target = e.target;
          this.layout(this.items.indexOf(target) === -1);
      }
      layout(updateItems = true) {
          if (updateItems) {
              this.updateItems();
          }
          const first = this.items[0];
          for (const item of this.items) {
              item.tabindex = -1;
          }
          if (first) {
              if (this.noninteractive) {
                  if (!this.previousTabindex) {
                      this.previousTabindex = first;
                  }
              }
              else {
                  first.tabindex = 0;
              }
          }
          this.itemsReadyResolver();
      }
      getFocusedItemIndex() {
          if (!this.mdcRoot) {
              return -1;
          }
          if (!this.items.length) {
              return -1;
          }
          const activeElementPath = deepActiveElementPath();
          if (!activeElementPath.length) {
              return -1;
          }
          for (let i$$1 = activeElementPath.length - 1; i$$1 >= 0; i$$1--) {
              const activeItem = activeElementPath[i$$1];
              if (isListItem(activeItem)) {
                  return this.items.indexOf(activeItem);
              }
          }
          return -1;
      }
      focusItemAtIndex(index) {
          for (const item of this.items) {
              if (item.tabindex === 0) {
                  item.tabindex = -1;
                  break;
              }
          }
          this.items[index].tabindex = 0;
          this.items[index].focus();
      }
      focus() {
          const root = this.mdcRoot;
          if (root) {
              root.focus();
          }
      }
      blur() {
          const root = this.mdcRoot;
          if (root) {
              root.blur();
          }
      }
  }
  __decorate([
      e$4({ type: String })
  ], ListBase.prototype, "emptyMessage", void 0);
  __decorate([
      i$3('.mdc-deprecated-list')
  ], ListBase.prototype, "mdcRoot", void 0);
  __decorate([
      o$5('', true, '*')
  ], ListBase.prototype, "assignedElements", void 0);
  __decorate([
      o$5('', true, '[tabindex="0"]')
  ], ListBase.prototype, "tabbableElements", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (value) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setUseActivatedClass(value);
          }
      })
  ], ListBase.prototype, "activatable", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (newValue, oldValue) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setMulti(newValue);
          }
          if (oldValue !== undefined) {
              this.layout();
          }
      })
  ], ListBase.prototype, "multi", void 0);
  __decorate([
      e$4({ type: Boolean }),
      observer(function (value) {
          if (this.mdcFoundation) {
              this.mdcFoundation.setWrapFocus(value);
          }
      })
  ], ListBase.prototype, "wrapFocus", void 0);
  __decorate([
      e$4({ type: String }),
      observer(function (_newValue, oldValue) {
          if (oldValue !== undefined) {
              this.updateItems();
          }
      })
  ], ListBase.prototype, "itemRoles", void 0);
  __decorate([
      e$4({ type: String })
  ], ListBase.prototype, "innerRole", void 0);
  __decorate([
      e$4({ type: String })
  ], ListBase.prototype, "innerAriaLabel", void 0);
  __decorate([
      e$4({ type: Boolean })
  ], ListBase.prototype, "rootTabbable", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true }),
      observer(function (value) {
          var _a, _b;
          if (value) {
              const tabbable = (_b = (_a = this.tabbableElements) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
              this.previousTabindex = tabbable;
              if (tabbable) {
                  tabbable.setAttribute('tabindex', '-1');
              }
          }
          else if (!value && this.previousTabindex) {
              this.previousTabindex.setAttribute('tabindex', '0');
              this.previousTabindex = null;
          }
      })
  ], ListBase.prototype, "noninteractive", void 0);
  //# sourceMappingURL=mwc-list-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$5 = r `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
  //# sourceMappingURL=mwc-list.css.js.map

  class MwcList extends e$3(ListBase) {
    static get defineId() { return 'mwc-list'; }

    static get elementDefinitions() {
      return buildElementDefinitions([MwcListItem], MwcList);
    }

    static get styles() {
      return styles$5;
    }
  }

  class MwcMenu extends e$3(MenuBase) {
    static get defineId() { return 'mwc-menu'; }

    static get elementDefinitions() {
      return buildElementDefinitions([MwcMenuSurface, MwcList], MwcMenu);
    }

    static get styles() {
      return styles$3;
    }
  }

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var strings$5 = {
      NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
  };
  var numbers$5 = {
      // This should stay in sync with $mdc-notched-outline-padding * 2.
      NOTCH_ELEMENT_PADDING: 8,
  };
  var cssClasses$7 = {
      NO_LABEL: 'mdc-notched-outline--no-label',
      OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
      OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
  };
  //# sourceMappingURL=constants.js.map

  /**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
      __extends(MDCNotchedOutlineFoundation, _super);
      function MDCNotchedOutlineFoundation(adapter) {
          return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
          get: function () {
              return strings$5;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
          get: function () {
              return cssClasses$7;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
          get: function () {
              return numbers$5;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
          /**
           * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  setNotchWidthProperty: function () { return undefined; },
                  removeNotchWidthProperty: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      /**
       * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
       */
      MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
          var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
          if (notchWidth > 0) {
              notchWidth += numbers$5.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
          }
          this.adapter.setNotchWidthProperty(notchWidth);
          this.adapter.addClass(OUTLINE_NOTCHED);
      };
      /**
       * Removes notched outline selector to close the notch in the outline.
       */
      MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
          var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
          this.adapter.removeClass(OUTLINE_NOTCHED);
          this.adapter.removeNotchWidthProperty();
      };
      return MDCNotchedOutlineFoundation;
  }(MDCFoundation));
  //# sourceMappingURL=foundation.js.map

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  class NotchedOutlineBase extends BaseElement {
      constructor() {
          super(...arguments);
          this.mdcFoundationClass = MDCNotchedOutlineFoundation;
          this.width = 0;
          this.open = false;
          this.lastOpen = this.open;
      }
      createAdapter() {
          return {
              addClass: (className) => this.mdcRoot.classList.add(className),
              removeClass: (className) => this.mdcRoot.classList.remove(className),
              setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
              removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
          };
      }
      openOrClose(shouldOpen, width) {
          if (!this.mdcFoundation) {
              return;
          }
          if (shouldOpen && width !== undefined) {
              this.mdcFoundation.notch(width);
          }
          else {
              this.mdcFoundation.closeNotch();
          }
      }
      render() {
          this.openOrClose(this.open, this.width);
          const classes = o$6({
              'mdc-notched-outline--notched': this.open,
          });
          return $ `
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
      }
  }
  __decorate([
      i$3('.mdc-notched-outline')
  ], NotchedOutlineBase.prototype, "mdcRoot", void 0);
  __decorate([
      e$4({ type: Number })
  ], NotchedOutlineBase.prototype, "width", void 0);
  __decorate([
      e$4({ type: Boolean, reflect: true })
  ], NotchedOutlineBase.prototype, "open", void 0);
  __decorate([
      i$3('.mdc-notched-outline__notch')
  ], NotchedOutlineBase.prototype, "notchElement", void 0);
  //# sourceMappingURL=mwc-notched-outline-base.js.map

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$6 = r `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
  //# sourceMappingURL=mwc-notched-outline.css.js.map

  class MwcNotchedOutline extends e$3(NotchedOutlineBase) {
    static get defineId() { return 'mwc-notched-outline'; }

    static get elementDefinitions() {
      return buildElementDefinitions([], MwcNotchedOutline);
    }

    static get styles() {
      return styles$6;
    }
  }

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   */
  const styles$7 = r `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
  //# sourceMappingURL=mwc-icon-host.css.js.map

  class MwcIcon extends e$3(s$3) {
    static get defineId() { return 'mwc-icon'; }

    static get elementDefinitions() {
      return buildElementDefinitions([], MwcIcon);
    }

    render() {
      return $`<span><slot></slot></span>`;
    }

    static get styles() {
      return styles$7;
    }
  }

  class MwcSelect extends e$3(SelectBase) {
    static get defineId() { return 'mwc-select'; }

    static get elementDefinitions() {
      return buildElementDefinitions([
        MwcMenu,
        MwcIcon,
        MwcNotchedOutline,
      ], MwcSelect);
    }

    static get styles() {
      return styles$2;
    }
  }

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

  class LightEntityCardEditor extends e$3(s$3) {
    static get elementDefinitions() {
      return buildElementDefinitions([
        globalElementLoader('ha-checkbox'),
        globalElementLoader('ha-formfield'),
        globalElementLoader('ha-form-string'),
        MwcListItem,
        MwcSelect,
      ], LightEntityCardEditor);
    }

    static get styles() {
      return style$1;
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
      const allEntities = Object.keys(this.hass.states).filter(eid => ['switch', 'light', 'group'].includes(eid.substr(0, eid.indexOf('.'))));

      allEntities.sort();
      return allEntities;
    }

    firstUpdated() {
      this._firstRendered = true;
    }

    render() {
      if (!this.hass) {
        return $``;
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
      const options = this.entityOptions.map(entity => $`<mwc-list-item value="${entity}" ?selected=${entity === this._config.entity}>${entity}</mwc-list-item>`);

      return $`
      <div class="card-config">

        <div class=overall-config'>
          <ha-form-string
            .schema=${{ name: 'header', type: 'string' }}
            label="Header"
            .data="${header}"
            .configValue="${'header'}"
            @value-changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <mwc-select
            .naturalMenuWidth=${true}
            label="Entity"
            @selected="${this.configChanged}" 
            @closed="${e => e.stopPropagation()}" 
            .configValue="${'entity'}"
          >
            ${options}
          </mwc-select>
          <ha-form-string
            .schema=${{ name: 'brightness_icon', type: 'string' }}
            label="Brightness Icon"
            .data="${this._config.brightness_icon}"
            .configValue="${'brightness_icon'}"
            @value-changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
         <ha-form-string
           .schema=${{ name: 'white_icon', type: 'string' }}
           label="White Icon"
            .data="${this._config.white_icon}"
            .configValue="${'white_icon'}"
            @value-changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{ name: 'temperature_icon', type: 'string' }}
            label="Temperature Icon"
            .data="${this._config.temperature_icon}"
            .configValue="${'temperature_icon'}"
            @value-changed="${this.configChanged}"
          ></ha-form-string>
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
              <ha-formfield label="Show White Value">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${'white_value'}"
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

            <div class='checkbox-options'>
              <ha-formfield label="Force Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.force_features}
                  .value="${'force_features'}"
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

  var name = "light-entity-card";
  var version = "5.0.0";
  var description = "A light-entity card for Home Assistant Lovelace UI";
  var keywords = [
  	"home-assistant",
  	"homeassistant",
  	"hass",
  	"automation",
  	"lovelace",
  	"custom-cards",
  	"light-entity"
  ];
  var repository = "git@github.com:ljmerza/light-entity-card.git";
  var author = "Leonardo Merza <ljmerza@gmail.com>";
  var license = "MIT";
  var dependencies = {
  	"@lit-labs/scoped-registry-mixin": "^1.0.0",
  	"@material/mwc-icon": "^0.25.3",
  	"@material/mwc-list": "^0.25.3",
  	"@material/mwc-menu": "^0.25.3",
  	"@material/mwc-notched-outline": "^0.25.3",
  	"@material/mwc-ripple": "^0.25.3",
  	"@material/mwc-select": "^0.25.3",
  	"core-js": "^2.6.5",
  	lit: "^2.1.2"
  };
  var devDependencies = {
  	"@babel/cli": "^7.4.3",
  	"@babel/core": "^7.4.3",
  	"@babel/plugin-proposal-class-properties": "^7.3.3",
  	"@babel/plugin-proposal-decorators": "^7.3.0",
  	"@babel/plugin-transform-template-literals": "^7.2.0",
  	"@babel/preset-env": "^7.3.1",
  	"@rollup/plugin-json": "^4.0.3",
  	"babel-plugin-iife-wrap": "^1.1.0",
  	"babel-preset-minify": "^0.5.0",
  	eslint: "^5.16.0",
  	"eslint-config-airbnb-base": "^13.1.0",
  	"eslint-plugin-import": "2.16.0",
  	rollup: "^0.66.6",
  	"rollup-plugin-node-resolve": "^3.4.0"
  };
  var resolutions = {
  	lit: "^2.1.2",
  	"lit-html": "2.1.2",
  	"lit-element": "3.1.2",
  	"@lit/reactive-element": "1.2.1"
  };
  var scripts = {
  	build: "npm run lint && npm run rollup && npm run babel",
  	rollup: "rollup -c",
  	babel: "babel dist/light-entity-card.js --out-file dist/light-entity-card.js",
  	lint: "eslint src/* --ext .js",
  	watch: "rollup -c --watch"
  };
  var packageJson = {
  	name: name,
  	version: version,
  	description: description,
  	keywords: keywords,
  	repository: repository,
  	author: author,
  	license: license,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	resolutions: resolutions,
  	scripts: scripts
  };

  const editorName = 'light-entity-card-editor';
  customElements.define(editorName, LightEntityCardEditor);

  /* eslint no-console: 0 */
  console.info(
    `%c  LIGHT-ENTITY-CARD   \n%c  Version ${packageJson.version}       `,
    'color: orange; font-weight: bold; background: black',
    // eslint-disable-next-line comma-dangle
    'color: white; font-weight: bold; background: dimgray'
  );

  class LightEntityCard extends e$3(s$3) {
    static get elementDefinitions() {
      return buildElementDefinitions(
        [
          globalElementLoader('ha-card'),
          globalElementLoader('more-info-light'),
          globalElementLoader('ha-switch'),
          globalElementLoader('ha-icon'),
          globalElementLoader('ha-slider'),
          globalElementLoader('ha-color-picker'),
          MwcSelect,
          MwcListItem,
        ],
        LightEntityCard
      );
    }

    async firstUpdated() {
      if (window.loadCardHelpers) {
        const helpers = await window.loadCardHelpers();
        helpers.importMoreInfoControl('light');
      }
    }

    static get properties() {
      return {
        hass: Object,
        config: Object,
      };
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

      this._hueSegments = this.config.smooth_color_wheel ? 0 : 24;
      this._saturationSegments = this.config.smooth_color_wheel ? 0 : 8;
    }

    static async getConfigElement() {
      // eslint-disable-next-line no-undef
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

      return parseInt(cardLength, 1);
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

    get language() {
      return this.__hass.resources[this.__hass.language];
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
     * bug in ha-color-picker dones't allow you to set desiredHsColor until
     * after it's in DOM so we wait until it's in the DOM and set it here
     * https://github.com/home-assistant/home-assistant-polymer/issues/2618
     */
    updated() {
      this._isUpdating = false;

      // eslint-disable-next-line arrow-parens
      this._shownStateObjects.forEach(stateObj => {
        const id = this.generateColorPickerId(stateObj);
        const colorpickerElement = this.shadowRoot.querySelectorAll(`#${id}`);

        if (colorpickerElement.length) {
          const h = (stateObj.attributes.hs_color && stateObj.attributes.hs_color[0]) || 0;
          const s$$1 = (stateObj.attributes.hs_color && stateObj.attributes.hs_color[1] / 100) || 0;
          colorpickerElement[0].desiredHsColor = { h, s: s$$1 };
        }
      });
    }

    /**
     * generates a card for each given entiy in the config
     * @return {TemplateResult}
     */
    render() {
      const entity = this.__hass.states[this.config.entity];
      if (!entity) {
        return $`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;
      }

      this._isUpdating = true;
      this._stateObjects = this.getEntitiesToShow(entity);

      // need to find what state objects are actually going to be shown
      if (this.config.consolidate_entities) {
        this._shownStateObjects = [entity];
      } else {
        this._shownStateObjects = [...this._stateObjects];
      }

      const templates = this._shownStateObjects.reduce(
        (htmlTemplate, stateObj) => $`${htmlTemplate}${this.createEntityTemplate(stateObj)}`,
        // eslint-disable-next-line comma-dangle
        ''
      );

      const css = `light-entity-card ${this.config.shorten_cards ? ' group' : ''} ${
      this.config.child_card ? ' light-entity-child-card' : ''
    }`;

      return $`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${css}">
        <more-info-light .hass=${this.hass}></more-info-light>
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
        return entities.attributes.entity_id.map(entity_id => this.__hass.states[entity_id]).filter(Boolean);

      return [entities];
    }

    /**
     * creates an entity's template
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createEntityTemplate(stateObj) {
      const sliderClass = this.config.full_width_sliders ? 'ha-slider-full-width' : '';

      return $`
      ${this.createHeader(stateObj)}
      <div class="light-entity-card-sliders ${sliderClass}">
        ${this.createBrightnessSlider(stateObj)} ${this.createSpeedSlider(stateObj)}
        ${this.createIntensitySlider(stateObj)} ${this.createColorTemperature(stateObj)}
        ${this.createWhiteValue(stateObj)}
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
      if (this.config.hide_header) return $``;
      const title = this.config.header || stateObj.attributes.friendly_name || stateObj.entity_id;

      return $`
      <div class="light-entity-card__header">
        <div class="light-entity-card__title">${title}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(stateObj)} @change=${e => this.setToggle(e, stateObj)}></ha-switch>
        </div>
      </div>
    `;
    }

    /**
     * creates brightness slider
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createBrightnessSlider(stateObj) {
      if (this.config.brightness === false) return $``;
      if (this.dontShowFeature('brightness', stateObj)) return $``;

      return $`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.brightness}"
          @value-changed="${event => this._setValue(event, stateObj, 'brightness')}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(stateObj.attributes.brightness, 0, 254)}
      </div>
    `;
    }

    /**
     * creates speed slider
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createSpeedSlider(stateObj) {
      if (this.config.speed === false) return $``;
      if (this.dontShowFeature('speed', stateObj)) return $``;

      return $`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.speed_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.speed}"
          @value-changed="${event => this._setValue(event, stateObj, 'speed')}"
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
      if (this.config.speed === false) return $``;
      if (this.dontShowFeature('intensity', stateObj)) return $``;

      return $`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.intensity_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${stateObj.attributes.intensity}"
          @value-changed="${event => this._setValue(event, stateObj, 'intensity')}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(stateObj.attributes.intensity, 0, 254)}
      </div>
    `;
    }

    /**
     * shows slider percent if config is set
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {TemplateResult}
     */
    showPercent(value, min, max) {
      if (!this.config.show_slider_percent) return $``;
      let percent = parseInt(((value - min) * 100) / (max - min), 0);
      if (isNaN(percent)) percent = 0;

      return $` <div class="percent-slider">${percent}%</div> `;
    }

    /**
     * creates color temperature slider for a given entity
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createColorTemperature(stateObj) {
      if (this.config.color_temp === false) return $``;
      if (this.dontShowFeature('colorTemp', stateObj)) return $``;

      const percent = this.showPercent(
        stateObj.attributes.color_temp,
        stateObj.attributes.min_mireds - 1,
        // eslint-disable-next-line comma-dangle
        stateObj.attributes.max_mireds - 1
      );

      return $`
      <div class="control light-entity-card-center">
        <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        <ha-slider
          class="light-entity-card-color_temp"
          min="${stateObj.attributes.min_mireds}"
          max="${stateObj.attributes.max_mireds}"
          .value=${stateObj.attributes.color_temp}
          @value-changed="${event => this._setValue(event, stateObj, 'color_temp')}"
        >
        </ha-slider>
        ${percent}
      </div>
    `;
    }

    /**
     * creates white value slider for a given entity
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createWhiteValue(stateObj) {
      if (this.config.white_value === false) return $``;
      if (this.dontShowFeature('whiteValue', stateObj)) return $``;

      return $`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${stateObj.attributes.white_value}"
          @value-changed="${event => this._setValue(event, stateObj, 'white_value')}"
        >
        </ha-slider>
        ${this.showPercent(stateObj.attributes.white_value, 0, 254)}
      </div>
    `;
    }

    /**
     * creates effect list dropdown for a given entity
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createEffectList(stateObj) {
      // do we disable effect list always?
      if (this.config.effects_list === false) return $``;

      // need to check state and persist_features here because if given custom effect list we may
      // want to sho that even if the feature doesn't exist so dont check that part to move forward just persist_features/state
      if (!this.config.persist_features && !this.isEntityOn(stateObj)) return $``;

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
        return $``;
      }

      const listItems = effect_list.map(effect => this.createListItem(stateObj, effect));
      const caption = this.language['ui.card.light.effect'];

      return $`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <mwc-select @selected=${e => this.setEffect(e, stateObj)} label="${caption}"> ${listItems} </mwc-select>
      </div>
    `;
    }

    createListItem(stateObj, effect) {
      return $`<mwc-list-item value="${effect}" ?selected=${effect === stateObj.attributes.effect}
      >${effect}</mwc-list-item
    >`;
    }

    /**
     * creates color picker wheel for a given entity
     * @param {LightEntity} stateObj
     * @return {TemplateResult}
     */
    createColorPicker(stateObj) {
      if (this.config.color_picker === false) return $``;
      if (this.dontShowFeature('color', stateObj)) return $``;

      return $`
      <div class="light-entity-card__color-picker">
        <ha-color-picker
          id="${this.generateColorPickerId(stateObj)}"
          class="control color"
          saturation-segments=${this._saturationSegments}
          hue-segments=${this._hueSegments}
          throttle="500"
          @colorselected=${e => this.setColorPicker(e, stateObj)}
        >
        </ha-color-picker>
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
      if (featureName === 'speed' && 'speed' in stateObj.attributes) return true;
      if (featureName === 'intensity' && 'intensity' in stateObj.attributes) return true;

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
          case 'color':
            if (!featureSupported) {
              const supportedModes = ['hs', 'rgb', 'rgbw', 'rgbww', 'xy'];
              featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0;
            }
            break;
          case 'whiteValue':
            featureSupported = Object.prototype.hasOwnProperty.call(stateObj.attributes, 'white_value');
            break;
          default:
            featureSupported = false;
            break;
        }
      }

      if (!featureSupported) return true;
      if (!this.config.persist_features && !this.isEntityOn(stateObj)) return true;
    }

    /**
     *
     * @param {LightEntity} stateObj
     */
    generateColorPickerId(stateObj) {
      const entity_id = stateObj.entity_id.replace('.', '-');
      return `light-entity-card-${entity_id}`;
    }

    /**
     * change to hs color for a given entity
     * @param {CustomEvent} event
     * @param {LightEntity} stateObj
     */
    setColorPicker(event, stateObj) {
      this.callEntityService({ hs_color: [event.detail.hs.h, event.detail.hs.s * 100] }, stateObj);
    }

    _setValue(event, stateObj, valueName) {
      const newValue = parseInt(event.target.value, 0);
      if (isNaN(newValue) || parseInt(stateObj.attributes[valueName], 0) === newValue) return;

      this.callEntityService({ [valueName]: newValue }, stateObj);
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
      this.callEntityService({ effect: event.target.value }, stateObj);
    }

    /**
     * call light service to update a state of an entity
     * @param {Object} payload
     * @param {LightEntity} entity
     * @param {String} state
     */
    callEntityService(payload, stateObj, state) {
      if (this._isUpdating) return;
      let entityType = stateObj.entity_id.split('.')[0];
      if (entityType === 'group') entityType = 'homeassistant';

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

})));
