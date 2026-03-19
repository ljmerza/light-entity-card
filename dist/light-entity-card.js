/*! For license information please see light-entity-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(n,t,i)},s=(i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,p=globalThis,g=p.trustedTypes,_=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&h(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const o=r.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(void 0!==t){const o=this.constructor;if(!1===n&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}var k;function x(t,e,i){return e=E(e),function(t,e){if(e&&("object"==N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,S()?Reflect.construct(e,i||[],E(t).constructor):e.apply(t,i))}function S(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(S=function(){return!!t})()}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function A(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=O(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function O(t,e){if(t){if("string"==typeof t)return T(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,R(n.key),n)}}function I(t,e,i){return e&&U(t.prototype,e),i&&U(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function R(t){var e=function(t){if("object"!=N(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=N(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==N(e)?e:e+""}function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,m?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.2");var M=globalThis,H=function(t){return t},V=M.trustedTypes,W=V?V.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,L="$lit$",B="lit$".concat(Math.random().toFixed(9).slice(2),"$"),D="?"+B,F="<".concat(D,">"),z=document,q=function(){return z.createComment("")},K=function(t){return null===t||"object"!=N(t)&&"function"!=typeof t},J=Array.isArray,Z="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,Y=RegExp(">|".concat(Z,"(?:([^\\s\"'>=/]+)(").concat(Z,"*=").concat(Z,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),tt=/'/g,et=/"/g,it=/^(?:script|style|textarea|title)$/i,nt=function(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:t,strings:e,values:n}}},rt=nt(1),ot=(nt(2),nt(3),Symbol.for("lit-noChange")),st=Symbol.for("lit-nothing"),at=new WeakMap,ct=z.createTreeWalker(z,129);function ht(t,e){if(!J(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==W?W.createHTML(e):e}var lt=function(t,e){for(var i,n=t.length-1,r=[],o=2===e?"<svg>":3===e?"<math>":"",s=G,a=0;a<n;a++){for(var c=t[a],h=void 0,l=void 0,d=-1,u=0;u<c.length&&(s.lastIndex=u,null!==(l=s.exec(c)));)u=s.lastIndex,s===G?"!--"===l[1]?s=Q:void 0!==l[1]?s=X:void 0!==l[2]?(it.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=Y):void 0!==l[3]&&(s=Y):s===Y?">"===l[0]?(s=null!=i?i:G,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,h=l[1],s=void 0===l[3]?Y:'"'===l[3]?et:tt):s===et||s===tt?s=Y:s===Q||s===X?s=G:(s=Y,i=void 0);var f=s===Y&&t[a+1].startsWith("/>")?" ":"";o+=s===G?c+F:d>=0?(r.push(h),c.slice(0,d)+L+c.slice(d)+B+f):c+B+(-2===d?a:f)}return[ht(t,o+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]},dt=function(){return I(function t(e,i){var n,r=e.strings,o=e._$litType$;j(this,t),this.parts=[];var s=0,a=0,c=r.length-1,h=this.parts,l=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,o,s,a=[],c=!0,h=!1;try{if(o=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;c=!1}else for(;!(c=(n=o.call(i)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){h=!0,r=t}finally{try{if(!c&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(h)throw r}}return a}}(t,e)||O(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(lt(r,o),2),d=l[0],u=l[1];if(this.el=t.createElement(d,i),ct.currentNode=this.el.content,2===o||3===o){var f=this.el.content.firstChild;f.replaceWith.apply(f,function(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||O(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(f.childNodes))}for(;null!==(n=ct.nextNode())&&h.length<c;){if(1===n.nodeType){if(n.hasAttributes()){var p,g=P(n.getAttributeNames());try{for(g.s();!(p=g.n()).done;){var _=p.value;if(_.endsWith(L)){var m=u[a++],v=n.getAttribute(_).split(B),y=/([.?@])?(.*)/.exec(m);h.push({type:1,index:s,name:y[2],strings:v,ctor:"."===y[1]?vt:"?"===y[1]?yt:"@"===y[1]?bt:mt}),n.removeAttribute(_)}else _.startsWith(B)&&(h.push({type:6,index:s}),n.removeAttribute(_))}}catch(t){g.e(t)}finally{g.f()}}if(it.test(n.tagName)){var b=n.textContent.split(B),$=b.length-1;if($>0){n.textContent=V?V.emptyScript:"";for(var w=0;w<$;w++)n.append(b[w],q()),ct.nextNode(),h.push({type:2,index:++s});n.append(b[$],q())}}}else if(8===n.nodeType)if(n.data===D)h.push({type:2,index:s});else for(var k=-1;-1!==(k=n.data.indexOf(B,k+1));)h.push({type:7,index:s}),k+=B.length-1;s++}},null,[{key:"createElement",value:function(t,e){var i=z.createElement("template");return i.innerHTML=t,i}}])}();function ut(t,e){var i,n,r,o,s,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,c=arguments.length>3?arguments[3]:void 0;if(e===ot)return e;var h=void 0!==c?null===(i=a._$Co)||void 0===i?void 0:i[c]:a._$Cl,l=K(e)?void 0:e._$litDirective$;return(null===(n=h)||void 0===n?void 0:n.constructor)!==l&&(null!==(r=h)&&void 0!==r&&null!==(o=r._$AO)&&void 0!==o&&o.call(r,!1),void 0===l?h=void 0:(h=new l(t))._$AT(t,a,c),void 0!==c?(null!==(s=a._$Co)&&void 0!==s?s:a._$Co=[])[c]=h:a._$Cl=h),void 0!==h&&(e=ut(t,h._$AS(t,e.values),h,c)),e}var ft,pt,gt=function(){return I(function t(e,i){j(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:z).importNode(n,!0);ct.currentNode=o;for(var s=ct.nextNode(),a=0,c=0,h=r[0];void 0!==h;){var l;if(a===h.index){var d=void 0;2===h.type?d=new _t(s,s.nextSibling,this,t):1===h.type?d=new h.ctor(s,h.name,h.strings,this,t):6===h.type&&(d=new $t(s,this,t)),this._$AV.push(d),h=r[++c]}a!==(null===(l=h)||void 0===l?void 0:l.index)&&(s=ct.nextNode(),a++)}return ct.currentNode=z,o}},{key:"p",value:function(t){var e,i=0,n=P(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}])}(),_t=function(){return I(function t(e,i,n,r){var o;j(this,t),this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=null===(o=null==r?void 0:r.isConnected)||void 0===o||o},[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=ut(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),K(t)?t===st||null==t||""===t?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==ot&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return J(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"O",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"_",value:function(t){this._$AH!==st&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=dt.createElement(ht(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{var o=new gt(r,this),s=o.u(this.options);o.p(i),this.T(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=at.get(t.strings);return void 0===e&&at.set(t.strings,e=new dt(t)),e}},{key:"k",value:function(t){J(this._$AH)||(this._$AH=[],this._$AR());var e,i,n=this._$AH,r=0,o=P(t);try{for(o.s();!(i=o.n()).done;){var s=i.value;r===n.length?n.push(e=new _k(this.O(q()),this.O(q()),this,this.options)):e=n[r],e._$AI(s),r++}}catch(t){o.e(t)}finally{o.f()}r<n.length&&(this._$AR(e&&e._$AB.nextSibling,r),n.length=r)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t!==this._$AB;){var i,n=H(t).nextSibling;H(t).remove(),t=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),mt=function(){return I(function t(e,i,n,r,o){j(this,t),this.type=1,this._$AH=st,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=st},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=ut(this,t,e,0),(o=!K(t)||t!==this._$AH&&t!==ot)&&(this._$AH=t);else{var s,a,c=t;for(t=r[0],s=0;s<r.length-1;s++)(a=ut(this,c[i+s],e,s))===ot&&(a=this._$AH[s]),o||(o=!K(a)||a!==this._$AH[s]),a===st?t=st:t!==st&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}},{key:"j",value:function(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),vt=function(t){function e(){var t;return j(this,e),(t=x(this,e,arguments)).type=3,t}return A(e,t),I(e,[{key:"j",value:function(t){this.element[this.name]=t===st?void 0:t}}])}(mt),yt=function(t){function e(){var t;return j(this,e),(t=x(this,e,arguments)).type=4,t}return A(e,t),I(e,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}}])}(mt),bt=function(t){function e(t,i,n,r,o){var s;return j(this,e),(s=x(this,e,[t,i,n,r,o])).type=5,s}return A(e,t),I(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=ut(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:st)!==ot){var i=this._$AH,n=t===st&&i!==st||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==st&&(i===st||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}])}(mt),$t=function(){return I(function t(e,i,n){j(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){ut(this,t)}}])}(),wt=M.litHtmlPolyfillSupport;function kt(t){return kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kt(t)}function xt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,St(n.key),n)}}function St(t){var e=function(t){if("object"!=kt(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=kt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==kt(e)?e:e+""}function Et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function At(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(At=function(){return!!t})()}function Ct(t,e,i,n){var r=Pt(Ot(1&n?t.prototype:t),e,i);return 2&n&&"function"==typeof r?function(t){return r.apply(i,t)}:r}function Pt(){return Pt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=Ot(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}},Pt.apply(null,arguments)}function Ot(t){return Ot=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ot(t)}function Tt(t,e){return Tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Tt(t,e)}null!=wt&&wt(dt,_t),(null!==(k=M.litHtmlVersions)&&void 0!==k?k:M.litHtmlVersions=[]).push("3.3.2");var jt=globalThis,Ut=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,i){return e=Ot(e),function(t,e){if(e&&("object"==kt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Et(t)}(t,At()?Reflect.construct(e,i||[],Ot(t).constructor):e.apply(t,i))}(this,e,arguments)).renderOptions={host:Et(t)},t._$Do=void 0,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Tt(t,e)}(e,t),function(t,e){return e&&xt(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){var t,i,n=Ct(e,"createRenderRoot",this,3)([]);return null!==(i=(t=this.renderOptions).renderBefore)&&void 0!==i||(t.renderBefore=n.firstChild),n}},{key:"update",value:function(t){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),Ct(e,"update",this,3)([t]),this._$Do=function(t,e,i){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,o=r._$litPart$;if(void 0===o){var s,a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=o=new _t(e.insertBefore(q(),a),a,void 0,null!=i?i:{})}return o._$AI(t),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;Ct(e,"connectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;Ct(e,"disconnectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return ot}}])}(w);Ut._$litElement$=!0,Ut.finalized=!0,null===(ft=jt.litElementHydrateSupport)||void 0===ft||ft.call(jt,{LitElement:Ut});var It=jt.litElementPolyfillSupport;function Rt(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:n}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const r=this.renderOptions.creationScope=this.attachShadow({...n,customElements:t.registry});return s(r,this.constructor.elementStyles),r}}}null==It||It({LitElement:Ut}),(null!==(pt=jt.litElementVersions)&&void 0!==pt?pt:jt.litElementVersions=[]).push("4.2.2");const Nt=o`
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

`,Mt={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,warm_white_value:!0,color_picker:!0,effects_list:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,color_temp_in_kelvin:!1,transition:0,brightness_icon:"weather-sunny",white_icon:"file-word-box",warm_white_icon:"weather-sunset",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"},Ht=o`
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
`,Vt=(t,e)=>t.reduce((t,i)=>(i.defineId?t[i.defineId]=i:i.promise.then(t=>{void 0===e.registry.get(i.name)&&e.registry.define(i.name,t)}),t),{}),Wt=t=>({name:t,promise:customElements.whenDefined(t).then(()=>customElements.get(t))}),Lt=(t,e,i={},n={})=>{const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};class Bt extends(Rt(Ut)){static get elementDefinitions(){return Vt([Wt("ha-checkbox"),Wt("ha-formfield"),Wt("ha-form-string"),Wt("ha-select"),Wt("mwc-list-item")],Bt)}static get styles(){return Ht}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config={...Mt,...t}}get entityOptions(){const t=Object.keys(this.hass.states).filter(t=>["switch","light","group"].includes(t.substr(0,t.indexOf("."))));return t.sort(),t}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass||!this._config)return rt``;let{header:t}=this._config;if(!t&&this._config.entity){let e=this._config.entity.split(".")[1]||"";e&&(e=e.charAt(0).toUpperCase()+e.slice(1),t=e)}const e=this.entityOptions.map(t=>rt`<mwc-list-item value="${t}" ?selected=${t===this._config.entity}>${t}</mwc-list-item>`);return rt`
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
            .schema=${{name:"warm_white_icon",type:"string"}}
            label="Warm White Icon"
            .data="${this._config.warm_white_icon}"
            .configValue="${"warm_white_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-form-string
            .schema=${{name:"temperature_icon",type:"string"}}
            label="Temperature Icon"
            .data="${this._config.temperature_icon}"
            .configValue="${"temperature_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{name:"transition",type:"string"}}
            label="Transition (seconds)"
            .data="${String(this._config.transition||"")}"
            .configValue="${"transition"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
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
              <ha-formfield label="Color Temp in Kelvin">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_temp_in_kelvin}
                  .value="${"color_temp_in_kelvin"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show White Channel">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${"white_value"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Warm White">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.warm_white_value}
                  .value="${"warm_white_value"}"
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
              <ha-formfield label="Show Brightness %">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_brightness_percent}
                  .value="${"show_brightness_percent"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Color Temp %">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_color_temp_percent}
                  .value="${"show_color_temp_percent"}"
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
    `}configChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:e,value:i},detail:{value:n}}=t;this._config=null!=n?{...this._config,[e]:n}:{...this._config,[e]:i},Lt(this,"config-changed",{config:this._config})}checkboxConfigChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:e,checked:i}}=t;this._config={...this._config,[e]:i},Lt(this,"config-changed",{config:this._config})}}const Dt="light-entity-card-editor";customElements.define(Dt,Bt),console.info("light-entity-card v6.3.0");class Ft extends(Rt(Ut)){static get elementDefinitions(){return Vt([Wt("ha-card"),Wt("more-info-light"),Wt("ha-switch"),Wt("ha-icon"),Wt("state-badge"),Wt("ha-slider"),Wt("ha-hs-color-picker"),Wt("ha-select"),Wt("mwc-list-item")],Ft)}static get properties(){return{hass:{},config:{},_colorPickerValues:{state:!0}}}async firstUpdated(){if(this._firstUpdate=!0,!1!==this.config.color_picker&&this.config.entity.startsWith("light.")&&!customElements.get("ha-hs-color-picker")){const t=document.querySelector("home-assistant");if(t){const e=document.createElement("style");e.textContent="ha-more-info-dialog { display: none !important; }",t.shadowRoot.appendChild(e);const i=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});t.dispatchEvent(i);try{await Promise.race([customElements.whenDefined("ha-hs-color-picker"),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),5e3))])}catch{}finally{const i=new CustomEvent("hass-more-info",{detail:{entityId:""},bubbles:!0,composed:!0});t.dispatchEvent(i),e.remove()}}this.requestUpdate()}}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={...Mt,...t}}static async getConfigElement(){return document.createElement(Dt)}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}getCardSize(){if(!this.config||!this.__hass||!this.__hass.states[this.config.entity])return 1;let t=0;const e=this.__hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t,10)}getEntityLength(t){return/^light\./.test(t)?Ft.entityLength.light:/^switch\./.test(t)?Ft.entityLength.switch:0}get styles(){return Nt}isEntityOn(t){return"on"===t.state}render(){const t=this.hass.states[this.config.entity];if(!t)return rt`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(t),this.config.consolidate_entities?this._shownStateObjects=[t]:this._shownStateObjects=[...this._stateObjects];const e=this._shownStateObjects.reduce((t,e)=>rt`${t}${this.createEntityTemplate(e)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return rt`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${e}
      </ha-card>
    `}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.hass.states[t]).filter(Boolean):[t]}createEntityTemplate(t){const e=this.config.full_width_sliders?"ha-slider-full-width":"";return rt`
      ${this.createHeader(t)}
      <div class="light-entity-card-sliders ${e}">
        ${this.createBrightnessSlider(t)} ${this.createSpeedSlider(t)}
        ${this.createIntensitySlider(t)} ${this.createColorTemperature(t)}
        ${this.createWhiteValue(t)}
        ${this.createWarmWhiteValue(t)}
      </div>
      ${this.createColorPicker(t)} ${this.createEffectList(t)}
    `}createHeader(t){if(this.config.hide_header)return rt``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return rt`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(t)}
        <div class="light-entity-card__title">${e}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(t){return this.config.show_header_icon?rt`
      <div class="icon-container">
        <state-badge .stateObj=${t}></state-badge>
      </div>
    `:rt``}createBrightnessSlider(t){return!1===this.config.brightness||this.dontShowFeature("brightness",t)?rt``:rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Brightness">
          <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.brightness||0}"
          @change="${e=>this._setValue(e,t,"brightness")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.brightness,0,254,"brightness")}
      </div>
    `}createSpeedSlider(t){return!1===this.config.speed||this.dontShowFeature("speed",t)?rt``:rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Speed">
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
    `}createIntensitySlider(t){return!1===this.config.intensity||this.dontShowFeature("intensity",t)?rt``:rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Intensity">
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
    `}showPercent(t,e,i,n){if("brightness"===n&&void 0!==this.config.show_brightness_percent){if(!this.config.show_brightness_percent)return rt``}else if("color_temp"===n&&void 0!==this.config.show_color_temp_percent){if(!this.config.show_color_temp_percent)return rt``}else if("color_temp"===n&&this.config.color_temp_in_kelvin);else if(!this.config.show_slider_percent)return rt``;if("color_temp"===n&&this.config.color_temp_in_kelvin)return rt` <div class="percent-slider">${t}K</div> `;let r=parseInt(100*(t-e)/(i-e),10);return isNaN(r)&&(r=0),rt` <div class="percent-slider">${r}%</div> `}createColorTemperature(t){if(!1===this.config.color_temp)return rt``;if(this.dontShowFeature("colorTemp",t))return rt``;const e=void 0!==t.attributes.min_color_temp_kelvin;let i,n,r,o,s,a;if(this.config.color_temp_in_kelvin){let o,s,a;if(e?(a=t.attributes.color_temp_kelvin,o=t.attributes.min_color_temp_kelvin,s=t.attributes.max_color_temp_kelvin):(a=t.attributes.color_temp?Math.round(1e6/t.attributes.color_temp):null,o=t.attributes.max_mireds?Math.round(1e6/t.attributes.max_mireds):null,s=t.attributes.min_mireds?Math.round(1e6/t.attributes.min_mireds):null),!o||!s)return rt``;const c=Math.round((o+s)/2);i="number"==typeof a&&Number.isFinite(a)&&a>0?a:null,n=o,r=s;const h=i||c,l=this.showPercent(h,n,r,"color_temp");return rt`
        <div class="control light-entity-card-center">
          <div class="icon-container" title="Color Temperature">
            <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
          </div>
          <ha-slider
            class="light-entity-card-color_temp light-entity-card-color_temp--kelvin"
            min="${n}"
            max="${r}"
            .value=${h}
            @change="${i=>this._setColorTemp(i,t,e,!0)}"
          >
          </ha-slider>
          ${l}
        </div>
      `}if(e){const e=t.attributes.color_temp_kelvin,i=t.attributes.min_color_temp_kelvin,n=t.attributes.max_color_temp_kelvin;if(!i||!n)return rt``;a="number"==typeof e&&Number.isFinite(e)&&e>0?Math.round(1e6/e):null,o=Math.round(1e6/n),s=Math.round(1e6/i)}else if(a=t.attributes.color_temp,o=t.attributes.min_mireds,s=t.attributes.max_mireds,!o||!s)return rt``;const c=s&&o?s-o:0,h=c>0&&null!=a?Math.round((a-o)/c*100):50,l=this.showPercent(h,0,100,"color_temp");return rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Color Temperature">
          <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        </div>
        <ha-slider
          class="light-entity-card-color_temp"
          min="0"
          max="100"
          .value=${h}
          @change="${i=>this._setColorTemp(i,t,e,!1,o,s)}"
        >
        </ha-slider>
        ${l}
      </div>
    `}getWhiteValue(t,e=3){const i=t.attributes.rgbw_color,n=t.attributes.rgbww_color;return i&&3===e?i[3]||0:n&&e<n.length?n[e]||0:3===e&&void 0!==t.attributes.white_value?t.attributes.white_value??0:0}createWhiteValue(t){if(!1===this.config.white_value)return rt``;if(this.dontShowFeature("whiteValue",t))return rt``;const e=this.getWhiteValue(t,3);return rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="White">
          <ha-icon icon="hass:${this.config.white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${e}"
          @change="${e=>this._setWhiteValue(e,t,3)}"
        >
        </ha-slider>
        ${this.showPercent(e,0,254)}
      </div>
    `}createWarmWhiteValue(t){if(!1===this.config.warm_white_value)return rt``;if(this.dontShowFeature("warmWhiteValue",t))return rt``;const e=this.getWhiteValue(t,4);return rt`
      <div class="control light-entity-card-center">
        <div class="icon-container" title="Warm White">
          <ha-icon icon="hass:${this.config.warm_white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${e}"
          @change="${e=>this._setWhiteValue(e,t,4)}"
        >
        </ha-slider>
        ${this.showPercent(e,0,254)}
      </div>
    `}_setWhiteValue(t,e,i){const n=parseInt(t.target.value,10);if(isNaN(n))return;const r=e.attributes.supported_color_modes||[],o=e.attributes.rgbw_color,s=e.attributes.rgbww_color;if(r.includes("rgbw")&&3===i){const t=o?o.slice(0,3):e.attributes.rgb_color||[255,255,255];this.callEntityService({rgbw_color:[t[0],t[1],t[2],n]},e)}else if(r.includes("rgbww")){let t;if(s)t=s;else if(o)t=[o[0],o[1],o[2],o[3],0];else{const i=e.attributes.rgb_color||[255,255,255];t=[i[0],i[1],i[2],0,0]}const r=[...t];r[i]=n,this.callEntityService({rgbww_color:r},e)}else this.callEntityService({white_value:n},e)}createEffectList(t){if(!1===this.config.effects_list)return rt``;if(!this.config.persist_features&&!this.isEntityOn(t))return rt``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return rt``;const i=e.map(e=>this.createListItem(t,e)),n=this.hass.localize("ui.card.light.effect")||"Effect";return rt`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select 
          @closed="${t=>t.stopPropagation()}" 
          @selected=${e=>this.setEffect(e,t)} 
          label="${n}" 
        >
          ${i}
        </ha-select>
      </div>
    `}createListItem(t,e){return rt`<mwc-list-item value="${e}" ?selected=${e===t.attributes.effect}
      >${e}</mwc-list-item
    >`}createColorPicker(t){if(!1===this.config.color_picker)return rt``;if(this.dontShowFeature("color",t))return rt``;const e=t.attributes.hs_color||[0,0],i=this._colorPickerValues&&this._colorPickerValues[t.entity_id]||[e[0],e[1]/100];return rt`
      <div class="light-entity-card__color-picker">
        <ha-hs-color-picker
          .value=${i}
          @cursor-moved=${e=>{this._colorPickerValues={...this._colorPickerValues,[t.entity_id]:e.detail.value}}}
          @value-changed=${e=>this._onColorPickerChanged(e.detail.value,t)}
        ></ha-hs-color-picker>
      </div>
    `}dontShowFeature(t,e){if(this.config.force_features)return!1;if("speed"===t&&"speed"in e.attributes)return!1;if("intensity"===t&&"intensity"in e.attributes)return!1;let i=Ft.featureNames[t]&e.attributes.supported_features;const n=e.attributes.supported_color_modes||[];if(!i)switch(t){case"brightness":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"brightness"),!i){const t=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"colorTemp":if(n){const t=["color_temp"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"effectList":i=e.attributes.effect_list&&e.attributes.effect_list.length;break;case"color":{const t=["hs","rgb","rgbw","rgbww","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0;break}case"whiteValue":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"white_value"),!i){const t=["rgbw","rgbww"];i=n.some(e=>t.includes(e))}break;case"warmWhiteValue":{const t=["rgbww"];i=n.some(e=>t.includes(e));break}default:i=!1}return!i||!this.config.persist_features&&!this.isEntityOn(e)}_onColorPickerChanged(t,e){if(this._colorPickerValues){const{[e.entity_id]:t,...i}=this._colorPickerValues;this._colorPickerValues=i}this.setColorPicker(t,e)}setColorPicker(t,e){t&&this.callEntityService({hs_color:[t[0],100*t[1]]},e)}_setValue(t,e,i){const n=parseInt(t.target.value,10);isNaN(n)||parseInt(e.attributes[i],10)===n||this.callEntityService({[i]:n},e)}_setColorTemp(t,e,i,n,r,o){const s=parseInt(t.target.value,10);if(!isNaN(s))if(n)if(i){if(s===parseInt(e.attributes.color_temp_kelvin,10))return;this.callEntityService({color_temp_kelvin:s},e)}else{const t=Math.round(1e6/s);if(t===parseInt(e.attributes.color_temp,10))return;this.callEntityService({color_temp:t},e)}else{if(!Number.isFinite(r)||!Number.isFinite(o)||o<=r)return;const t=Math.round(r+s/100*(o-r));if(i){const i=Math.round(1e6/t);if(i===parseInt(e.attributes.color_temp_kelvin,10))return;this.callEntityService({color_temp_kelvin:i},e)}else{if(t===parseInt(e.attributes.color_temp,10))return;this.callEntityService({color_temp:t},e)}}}setToggle(t,e){const i=this.isEntityOn(e)?Ft.cmdToggle.off:Ft.cmdToggle.on;this.callEntityService({},e,i)}setEffect(t,e){t.target.value&&this.callEntityService({effect:t.target.value},e)}callEntityService(t,e,i){if(!this._firstUpdate)return;let n=e.entity_id.split(".")[0];"group"===n&&(n="homeassistant");const r=parseFloat(this.config.transition)||0;r>0&&"light"===n&&(t={...t,transition:r}),this.hass.callService(n,i||Ft.cmdToggle.on,{entity_id:e.entity_id,...t})}}customElements.define("light-entity-card",Ft),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"})})();