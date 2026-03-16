/*! For license information please see light-entity-card.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(n,t,i)},s=(i,n)=>{e?i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(e=>{const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)})},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var l;const c=window,h=c.trustedTypes,u=h?h.emptyScript:"",d=c.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p},v="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}function y(t,e,i){return e=m(e),function(t,e){if(e&&("object"==P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,i||[],m(t).constructor):e.apply(t,i))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(b=function(){return!!t})()}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function k(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=x(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function x(t,e){if(t){if("string"==typeof t)return S(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function C(t,e,i){return e&&A(t.prototype,e),i&&A(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t){var e=function(t){if("object"!=P(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=P(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:e+""}function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}var T;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:_}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");var j=window,R=j.trustedTypes,I=R?R.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,M="$lit$",H="lit$".concat((Math.random()+"").slice(9),"$"),N="?"+H,U="<".concat(N,">"),W=document,L=function(){return W.createComment("")},D=function(t){return null===t||"object"!=P(t)&&"function"!=typeof t},V=Array.isArray,B="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,q=/>/g,K=RegExp(">|".concat(B,"(?:([^\\s\"'>=/]+)(").concat(B,"*=").concat(B,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),G=/'/g,Z=/"/g,J=/^(?:script|style|textarea|title)$/i,X=function(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:t,strings:e,values:n}}},Y=X(1),Q=(X(2),Symbol.for("lit-noChange")),tt=Symbol.for("lit-nothing"),et=new WeakMap,it=W.createTreeWalker(W,129,null,!1);function nt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(e):e}var rt=function(t,e){for(var i,n=t.length-1,r=[],o=2===e?"<svg>":"",s=z,a=0;a<n;a++){for(var l=t[a],c=void 0,h=void 0,u=-1,d=0;d<l.length&&(s.lastIndex=d,null!==(h=s.exec(l)));)d=s.lastIndex,s===z?"!--"===h[1]?s=F:void 0!==h[1]?s=q:void 0!==h[2]?(J.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=K):void 0!==h[3]&&(s=K):s===K?">"===h[0]?(s=null!=i?i:z,u=-1):void 0===h[1]?u=-2:(u=s.lastIndex-h[2].length,c=h[1],s=void 0===h[3]?K:'"'===h[3]?Z:G):s===Z||s===G?s=K:s===F||s===q?s=z:(s=K,i=void 0);var f=s===K&&t[a+1].startsWith("/>")?" ":"";o+=s===z?l+U:u>=0?(r.push(c),l.slice(0,u)+M+l.slice(u)+H+f):l+H+(-2===u?(r.push(void 0),a):f)}return[nt(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),r]},ot=function(){return C(function t(e,i){var n,r=e.strings,o=e._$litType$;E(this,t),this.parts=[];var s=0,a=0,l=r.length-1,c=this.parts,h=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,o,s,a=[],l=!0,c=!1;try{if(o=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=o.call(i)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(t,e)||x(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(rt(r,o),2),u=h[0],d=h[1];if(this.el=t.createElement(u,i),it.currentNode=this.el.content,2===o){var f=this.el.content,p=f.firstChild;p.remove(),f.append.apply(f,function(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(p.childNodes))}for(;null!==(n=it.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes()){var g,v=[],_=k(n.getAttributeNames());try{for(_.s();!(g=_.n()).done;){var y=g.value;if(y.endsWith(M)||y.startsWith(H)){var b=d[a++];if(v.push(y),void 0!==b){var m=n.getAttribute(b.toLowerCase()+M).split(H),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:w[2],strings:m,ctor:"."===w[1]?dt:"?"===w[1]?pt:"@"===w[1]?gt:ut})}else c.push({type:6,index:s})}}}catch(t){_.e(t)}finally{_.f()}for(var $=0,A=v;$<A.length;$++){var C=A[$];n.removeAttribute(C)}}if(J.test(n.tagName)){var O=n.textContent.split(H),P=O.length-1;if(P>0){n.textContent=R?R.emptyScript:"";for(var T=0;T<P;T++)n.append(O[T],L()),it.nextNode(),c.push({type:2,index:++s});n.append(O[P],L())}}}else if(8===n.nodeType)if(n.data===N)c.push({type:2,index:s});else for(var j=-1;-1!==(j=n.data.indexOf(H,j+1));)c.push({type:7,index:s}),j+=H.length-1;s++}},null,[{key:"createElement",value:function(t,e){var i=W.createElement("template");return i.innerHTML=t,i}}])}();function st(t,e){var i,n,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===Q)return e;var l=void 0!==a?null===(i=s._$Co)||void 0===i?void 0:i[a]:s._$Cl,c=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Co)&&void 0!==r?r:o._$Co=[])[a]=l:s._$Cl=l),void 0!==l&&(e=st(t,l._$AS(t,e.values),l,a)),e}var at,lt,ct=function(){return C(function t(e,i){E(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:W).importNode(n,!0);it.currentNode=o;for(var s=it.nextNode(),a=0,l=0,c=r[0];void 0!==c;){if(a===c.index){var h=void 0;2===c.type?h=new ht(s,s.nextSibling,this,t):1===c.type?h=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(h=new vt(s,this,t)),this._$AV.push(h),c=r[++l]}a!==(null==c?void 0:c.index)&&(s=it.nextNode(),a++)}return it.currentNode=W,o}},{key:"v",value:function(t){var e,i=0,n=k(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}])}(),ht=function(){function t(e,i,n,r){var o;E(this,t),this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return C(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=st(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),D(t)?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):function(t){return V(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.T(t):this._(t)}},{key:"k",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"$",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}},{key:"_",value:function(t){this._$AH!==tt&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(W.createTextNode(t)),this._$AH=t}},{key:"g",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ot.createElement(nt(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{var o=new ct(r,this),s=o.u(this.options);o.v(i),this.$(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=et.get(t.strings);return void 0===e&&et.set(t.strings,e=new ot(t)),e}},{key:"T",value:function(e){V(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,o=0,s=k(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;o===r.length?r.push(i=new t(this.k(L()),this.k(L()),this,this.options)):i=r[o],i._$AI(a),o++}}catch(t){s.e(t)}finally{s.f()}o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,i);e&&e!==this._$AB;){var n=e.nextSibling;e.remove(),e=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),ut=function(){return C(function t(e,i,n,r,o){E(this,t),this.type=1,this._$AH=tt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=tt},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=st(this,t,e,0),(o=!D(t)||t!==this._$AH&&t!==Q)&&(this._$AH=t);else{var s,a,l=t;for(t=r[0],s=0;s<r.length-1;s++)(a=st(this,l[i+s],e,s))===Q&&(a=this._$AH[s]),o||(o=!D(a)||a!==this._$AH[s]),a===tt?t=tt:t!==tt&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}},{key:"j",value:function(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),dt=function(t){function e(){var t;return E(this,e),(t=y(this,e,arguments)).type=3,t}return w(e,t),C(e,[{key:"j",value:function(t){this.element[this.name]=t===tt?void 0:t}}])}(ut),ft=R?R.emptyScript:"",pt=function(t){function e(){var t;return E(this,e),(t=y(this,e,arguments)).type=4,t}return w(e,t),C(e,[{key:"j",value:function(t){t&&t!==tt?this.element.setAttribute(this.name,ft):this.element.removeAttribute(this.name)}}])}(ut),gt=function(t){function e(t,i,n,r,o){var s;return E(this,e),(s=y(this,e,[t,i,n,r,o])).type=5,s}return w(e,t),C(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=st(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:tt)!==Q){var i=this._$AH,n=t===tt&&i!==tt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==tt&&(i===tt||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}])}(ut),vt=function(){return C(function t(e,i,n){E(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){st(this,t)}}])}(),_t=j.litHtmlPolyfillSupport;function yt(t){return yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(t)}function bt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,mt(n.key),n)}}function mt(t){var e=function(t){if("object"!=yt(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=yt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==yt(e)?e:e+""}function wt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $t(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return($t=function(){return!!t})()}function kt(t,e,i,n){var r=xt(St(1&n?t.prototype:t),e,i);return 2&n&&"function"==typeof r?function(t){return r.apply(i,t)}:r}function xt(){return xt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=St(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}},xt.apply(null,arguments)}function St(t){return St=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},St(t)}function Et(t,e){return Et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Et(t,e)}null==_t||_t(ot,ht),(null!==(T=j.litHtmlVersions)&&void 0!==T?T:j.litHtmlVersions=[]).push("2.8.0");var At=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,i){return e=St(e),function(t,e){if(e&&("object"==yt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return wt(t)}(t,$t()?Reflect.construct(e,i||[],St(t).constructor):e.apply(t,i))}(this,e,arguments)).renderOptions={host:wt(t)},t._$Do=void 0,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Et(t,e)}(e,t),function(t,e){return e&&bt(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){var t,i,n=kt(e,"createRenderRoot",this,3)([]);return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=n.firstChild),n}},{key:"update",value:function(t){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),kt(e,"update",this,3)([t]),this._$Do=function(t,e,i){var n,r,o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new ht(e.insertBefore(L(),a),a,void 0,null!=i?i:{})}return s._$AI(t),s}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;kt(e,"connectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;kt(e,"disconnectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return Q}}])}(_);At.finalized=!0,At._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:At});var Ct=globalThis.litElementPolyfillSupport;null==Ct||Ct({LitElement:At}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");var Ot,Pt,Tt,jt,Rt,It={},Mt=[],Ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function Nt(t,e){for(var i in e)t[i]=e[i];return t}function Ut(t){var e=t.parentNode;e&&e.removeChild(t)}function Wt(t,e,i){var n,r,o,s,a=arguments;if(e=Nt({},e),arguments.length>3)for(i=[i],n=3;n<arguments.length;n++)i.push(a[n]);if(null!=i&&(e.children=i),null!=t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===e[r]&&(e[r]=t.defaultProps[r]);return s=e.key,null!=(o=e.ref)&&delete e.ref,null!=s&&delete e.key,Lt(t,e,s,o)}function Lt(t,e,i,n){var r={type:t,props:e,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return Ot.vnode&&Ot.vnode(r),r}function Dt(t){return t.children}function Vt(t,e){this.props=t,this.context=e}function Bt(t,e){if(null==e)return t.__p?Bt(t.__p,t.__p.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?Bt(t):null}function zt(t){var e,i;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return zt(t)}}function Ft(t){(!t.__d&&(t.__d=!0)&&1===Pt.push(t)||jt!==Ot.debounceRendering)&&(jt=Ot.debounceRendering,(Ot.debounceRendering||Tt)(qt))}function qt(){var t,e,i,n,r,o,s,a;for(Pt.sort(function(t,e){return e.__v.__b-t.__v.__b});t=Pt.pop();)t.__d&&(i=void 0,n=void 0,o=(r=(e=t).__v).__e,s=e.__P,a=e.u,e.u=!1,s&&(i=[],n=Yt(s,r,Nt({},r),e.__n,void 0!==s.ownerSVGElement,null,i,a,null==o?Bt(r):o),Qt(i,r),n!=o&&zt(r)))}function Kt(t,e,i,n,r,o,s,a,l){var c,h,u,d,f,p,g,v=i&&i.__k||Mt,_=v.length;if(a==It&&(a=null!=o?o[0]:_?Bt(i,0):null),c=0,e.__k=Gt(e.__k,function(i){if(null!=i){if(i.__p=e,i.__b=e.__b+1,null===(u=v[c])||u&&i.key==u.key&&i.type===u.type)v[c]=void 0;else for(h=0;h<_;h++){if((u=v[h])&&i.key==u.key&&i.type===u.type){v[h]=void 0;break}u=null}if(d=Yt(t,i,u=u||It,n,r,o,s,null,a,l),(h=i.ref)&&u.ref!=h&&(g||(g=[])).push(h,i.__c||d,i),null!=d){if(null==p&&(p=d),null!=i.l)d=i.l,i.l=null;else if(o==u||d!=a||null==d.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(d);else{for(f=a,h=0;(f=f.nextSibling)&&h<_;h+=2)if(f==d)break t;t.insertBefore(d,a)}"option"==e.type&&(t.value="")}a=d.nextSibling,"function"==typeof e.type&&(e.l=d)}}return c++,i}),e.__e=p,null!=o&&"function"!=typeof e.type)for(c=o.length;c--;)null!=o[c]&&Ut(o[c]);for(c=_;c--;)null!=v[c]&&ee(v[c],v[c]);if(g)for(c=0;c<g.length;c++)te(g[c],g[++c],g[++c])}function Gt(t,e,i){if(null==i&&(i=[]),null==t||"boolean"==typeof t)e&&i.push(e(null));else if(Array.isArray(t))for(var n=0;n<t.length;n++)Gt(t[n],e,i);else i.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return Lt(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=Lt(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}(t)):t);return i}function Zt(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]="number"==typeof i&&!1===Ht.test(e)?i+"px":null==i?"":i}function Jt(t,e,i,n,r){var o,s,a,l,c;if("key"===(e=r?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(o=t.style,"string"==typeof i)o.cssText=i;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(s in n)i&&s in i||Zt(o,s,"");if(i)for(a in i)n&&i[a]===n[a]||Zt(o,a,i[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),i?(n||t.addEventListener(e,Xt,l),(t.t||(t.t={}))[e]=i):t.removeEventListener(e,Xt,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&!r&&e in t?t[e]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):null==i||!1===i?t.removeAttribute(e):t.setAttribute(e,i))}function Xt(t){return this.t[t.type](Ot.event?Ot.event(t):t)}function Yt(t,e,i,n,r,o,s,a,l,c){var h,u,d,f,p,g,v,_,y,b,m=e.type;if(void 0!==e.constructor)return null;(h=Ot.__b)&&h(e);try{t:if("function"==typeof m){if(_=e.props,y=(h=m.contextType)&&n[h.__c],b=h?y?y.props.value:h.__p:n,i.__c?v=(u=e.__c=i.__c).__p=u.__E:("prototype"in m&&m.prototype.render?e.__c=u=new m(_,b):(e.__c=u=new Vt(_,b),u.constructor=m,u.render=ie),y&&y.sub(u),u.props=_,u.state||(u.state={}),u.context=b,u.__n=n,d=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=m.getDerivedStateFromProps&&Nt(u.__s==u.state?u.__s=Nt({},u.__s):u.__s,m.getDerivedStateFromProps(_,u.__s)),d)null==m.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&s.push(u);else{if(null==m.getDerivedStateFromProps&&null==a&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(_,b),!a&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(_,u.__s,b)){for(u.props=_,u.state=u.__s,u.__d=!1,u.__v=e,e.__e=null!=l?l!==i.__e?l:i.__e:null,e.__k=i.__k,h=0;h<e.__k.length;h++)e.__k[h]&&(e.__k[h].__p=e);break t}null!=u.componentWillUpdate&&u.componentWillUpdate(_,u.__s,b)}for(f=u.props,p=u.state,u.context=b,u.props=_,u.state=u.__s,(h=Ot.__r)&&h(e),u.__d=!1,u.__v=e,u.__P=t,h=u.render(u.props,u.state,u.context),e.__k=Gt(null!=h&&h.type==Dt&&null==h.key?h.props.children:h),null!=u.getChildContext&&(n=Nt(Nt({},n),u.getChildContext())),d||null==u.getSnapshotBeforeUpdate||(g=u.getSnapshotBeforeUpdate(f,p)),Kt(t,e,i,n,r,o,s,l,c),u.base=e.__e;h=u.__h.pop();)u.__s&&(u.state=u.__s),h.call(u);d||null==f||null==u.componentDidUpdate||u.componentDidUpdate(f,p,g),v&&(u.__E=u.__p=null)}else e.__e=function(t,e,i,n,r,o,s,a){var l,c,h,u,d=i.props,f=e.props;if(r="svg"===e.type||r,null==t&&null!=o)for(l=0;l<o.length;l++)if(null!=(c=o[l])&&(null===e.type?3===c.nodeType:c.localName===e.type)){t=c,o[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),o=null}return null===e.type?d!==f&&(null!=o&&(o[o.indexOf(t)]=null),t.data=f):e!==i&&(null!=o&&(o=Mt.slice.call(t.childNodes)),h=(d=i.props||It).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,a||(u||h)&&(u&&h&&u.__html==h.__html||(t.innerHTML=u&&u.__html||"")),function(t,e,i,n,r){var o;for(o in i)o in e||Jt(t,o,null,i[o],n);for(o in e)r&&"function"!=typeof e[o]||"value"===o||"checked"===o||i[o]===e[o]||Jt(t,o,e[o],i[o],n)}(t,f,d,r,a),e.__k=e.props.children,u||Kt(t,e,i,n,"foreignObject"!==e.type&&r,o,s,It,a),a||("value"in f&&void 0!==f.value&&f.value!==t.value&&(t.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==t.checked&&(t.checked=f.checked))),t}(i.__e,e,i,n,r,o,s,c);(h=Ot.diffed)&&h(e)}catch(t){Ot.__e(t,e,i)}return e.__e}function Qt(t,e){for(var i;i=t.pop();)try{i.componentDidMount()}catch(t){Ot.__e(t,i.__v)}Ot.__c&&Ot.__c(e)}function te(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){Ot.__e(t,i)}}function ee(t,e,i){var n,r,o;if(Ot.unmount&&Ot.unmount(t),(n=t.ref)&&te(n,null,e),i||"function"==typeof t.type||(i=null!=(r=t.__e)),t.__e=t.l=null,null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){Ot.__e(t,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&ee(n[o],e,i);null!=r&&Ut(r)}function ie(t,e,i){return this.constructor(t,i)}function ne(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function re(){return re=Object.assign||function(t){for(var e=arguments,i=1;i<arguments.length;i++){var n=e[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},re.apply(this,arguments)}Ot={},Vt.prototype.setState=function(t,e){var i=this.__s!==this.state&&this.__s||(this.__s=Nt({},this.state));("function"!=typeof t||(t=t(i,this.props)))&&Nt(i,t),null!=t&&this.__v&&(this.u=!1,e&&this.__h.push(e),Ft(this))},Vt.prototype.forceUpdate=function(t){this.__v&&(t&&this.__h.push(t),this.u=!0,Ft(this))},Vt.prototype.render=Dt,Pt=[],Tt="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,jt=Ot.debounceRendering,Ot.__e=function(t,e,i){for(var n;e=e.__p;)if((n=e.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(t));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(t)}return Ft(n.__E=n)}catch(e){t=e}throw t},Rt=It;var oe="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",se="[\\s|\\(]+("+oe+")[,|\\s]+("+oe+")[,|\\s]+("+oe+")\\s*\\)?",ae="[\\s|\\(]+("+oe+")[,|\\s]+("+oe+")[,|\\s]+("+oe+")[,|\\s]+("+oe+")\\s*\\)?",le=new RegExp("rgb"+se),ce=new RegExp("rgba"+ae),he=new RegExp("hsl"+se),ue=new RegExp("hsla"+ae),de="^(?:#?|0x?)",fe="([0-9a-fA-F]{1})",pe="([0-9a-fA-F]{2})",ge=new RegExp(de+fe+fe+fe+"$"),ve=new RegExp(de+fe+fe+fe+fe+"$"),_e=new RegExp(de+pe+pe+pe+"$"),ye=new RegExp(de+pe+pe+pe+pe+"$"),be=Math.log,me=Math.round,we=Math.floor;function $e(t,e,i){return Math.min(Math.max(t,e),i)}function ke(t,e){var i=t.indexOf("%")>-1,n=parseFloat(t);return i?e/100*n:n}function xe(t){return parseInt(t,16)}function Se(t){return t.toString(16).padStart(2,"0")}var Ee=function(){function t(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=re({},this.$)}var e,i,n=t.prototype;return n.set=function(e){if("string"==typeof e)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(e)?this.hexString=e:/^rgba?/.test(e)?this.rgbString=e:/^hsla?/.test(e)&&(this.hslString=e);else{if("object"!=typeof e)throw new Error("Invalid color value");e instanceof t?this.hsva=e.hsva:"r"in e&&"g"in e&&"b"in e?this.rgb=e:"h"in e&&"s"in e&&"v"in e?this.hsv=e:"h"in e&&"s"in e&&"l"in e?this.hsl=e:"kelvin"in e&&(this.kelvin=e.kelvin)}},n.setChannel=function(t,e,i){var n;this[t]=re({},this[t],((n={})[e]=i,n))},n.reset=function(){this.hsva=this.initialValue},n.clone=function(){return new t(this)},n.unbind=function(){this.onChange=void 0},t.hsvToRgb=function(t){var e=t.h/60,i=t.s/100,n=t.v/100,r=we(e),o=e-r,s=n*(1-i),a=n*(1-o*i),l=n*(1-(1-o)*i),c=r%6,h=[l,n,n,a,s,s][c],u=[s,s,l,n,n,a][c];return{r:$e(255*[n,a,s,s,l,n][c],0,255),g:$e(255*h,0,255),b:$e(255*u,0,255)}},t.rgbToHsv=function(t){var e=t.r/255,i=t.g/255,n=t.b/255,r=Math.max(e,i,n),o=Math.min(e,i,n),s=r-o,a=0,l=r,c=0===r?0:s/r;switch(r){case o:a=0;break;case e:a=(i-n)/s+(i<n?6:0);break;case i:a=(n-e)/s+2;break;case n:a=(e-i)/s+4}return{h:60*a%360,s:$e(100*c,0,100),v:$e(100*l,0,100)}},t.hsvToHsl=function(t){var e=t.s/100,i=t.v/100,n=(2-e)*i,r=n<=1?n:2-n,o=r<1e-9?0:e*i/r;return{h:t.h,s:$e(100*o,0,100),l:$e(50*n,0,100)}},t.hslToHsv=function(t){var e=2*t.l,i=t.s*(e<=100?e:200-e)/100,n=e+i<1e-9?0:2*i/(e+i);return{h:t.h,s:$e(100*n,0,100),v:$e((e+i)/2,0,100)}},t.kelvinToRgb=function(t){var e,i,n,r=t/100;return r<66?(e=255,i=-155.25485562709179-.44596950469579133*(i=r-2)+104.49216199393888*be(i),n=r<20?0:.8274096064007395*(n=r-10)-254.76935184120902+115.67994401066147*be(n)):(e=351.97690566805693+.114206453784165*(e=r-55)-40.25366309332127*be(e),i=325.4494125711974+.07943456536662342*(i=r-50)-28.0852963507957*be(i),n=255),{r:$e(we(e),0,255),g:$e(we(i),0,255),b:$e(we(n),0,255)}},t.rgbToKelvin=function(e){for(var i,n=e.r,r=e.b,o=2e3,s=4e4;s-o>.4;){i=.5*(s+o);var a=t.kelvinToRgb(i);a.b/a.r>=r/n?s=i:o=i}return i},e=t,i=[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var e=this.$;if(t=re({},e,t),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var n in e)i[n]=t[n]!=e[n];this.$=t,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=t}},{key:"hsva",get:function(){return re({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=re({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return t.rgbToKelvin(this.rgb)},set:function(e){this.rgb=t.kelvinToRgb(e)}},{key:"red",get:function(){return this.rgb.r},set:function(t){this.rgb=re({},this.rgb,{r:t})}},{key:"green",get:function(){return this.rgb.g},set:function(t){this.rgb=re({},this.rgb,{g:t})}},{key:"blue",get:function(){return this.rgb.b},set:function(t){this.rgb=re({},this.rgb,{b:t})}},{key:"rgb",get:function(){var e=t.hsvToRgb(this.$),i=e.r,n=e.g,r=e.b;return{r:me(i),g:me(n),b:me(r)}},set:function(e){this.hsv=re({},t.rgbToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"rgba",get:function(){return re({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var e=t.hsvToHsl(this.$),i=e.h,n=e.s,r=e.l;return{h:me(i),s:me(n),l:me(r)}},set:function(e){this.hsv=re({},t.hslToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"hsla",get:function(){return re({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var e,i,n,r,o=1;if((e=le.exec(t))?(i=ke(e[1],255),n=ke(e[2],255),r=ke(e[3],255)):(e=ce.exec(t))&&(i=ke(e[1],255),n=ke(e[2],255),r=ke(e[3],255),o=ke(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:i,g:n,b:r,a:o}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+Se(t.r)+Se(t.g)+Se(t.b)},set:function(t){var e,i,n,r,o=255;if((e=ge.exec(t))?(i=17*xe(e[1]),n=17*xe(e[2]),r=17*xe(e[3])):(e=ve.exec(t))?(i=17*xe(e[1]),n=17*xe(e[2]),r=17*xe(e[3]),o=17*xe(e[4])):(e=_e.exec(t))?(i=xe(e[1]),n=xe(e[2]),r=xe(e[3])):(e=ye.exec(t))&&(i=xe(e[1]),n=xe(e[2]),r=xe(e[3]),o=xe(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:i,g:n,b:r,a:o/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+Se(t.r)+Se(t.g)+Se(t.b)+Se(we(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var e,i,n,r,o=1;if((e=he.exec(t))?(i=ke(e[1],360),n=ke(e[2],100),r=ke(e[3],100)):(e=ue.exec(t))&&(i=ke(e[1],360),n=ke(e[2],100),r=ke(e[3],100),o=ke(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:i,s:n,l:r,a:o}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}],i&&ne(e.prototype,i),t}();function Ae(t){var e,i=t.width,n=t.sliderSize,r=t.borderWidth,o=t.handleRadius,s=t.padding,a=t.sliderShape,l="horizontal"===t.layoutDirection;return n=null!=(e=n)?e:2*s+2*o,"circle"===a?{handleStart:t.padding+t.handleRadius,handleRange:i-2*s-2*o,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-r/2}:{handleStart:n/2,handleRange:i-n,radius:n/2,x:0,y:0,width:l?n:i,height:l?i:n}}var Ce,Oe=2*Math.PI,Pe=function(t,e){return Math.sqrt(t*t+e*e)};function Te(t){return t.width/2-t.padding-t.handleRadius-t.borderWidth}function je(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function Re(t,e,i){var n=t.wheelAngle,r=t.wheelDirection;return i&&"clockwise"===r?e=n+e:"clockwise"===r?e=360-n+e:i&&"anticlockwise"===r?e=n+180-e:"anticlockwise"===r&&(e=n-e),function(t){return(t%360+360)%360}(e)}function Ie(t,e,i){var n=je(t),r=n.cx,o=n.cy,s=Te(t);e=r-e,i=o-i;var a=Re(t,Math.atan2(-i,-e)*(360/Oe)),l=Math.min(Pe(e,i),s);return{h:Math.round(a),s:Math.round(100/s*l)}}function Me(t){var e=t.width,i=t.boxHeight;return{width:e,height:null!=i?i:e,radius:t.padding+t.handleRadius}}function He(t,e,i){var n=Me(t),r=n.width,o=n.height,s=n.radius,a=(e-s)/(r-2*s)*100,l=(i-s)/(o-2*s)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function Ne(t){Ce||(Ce=document.getElementsByTagName("base"));var e=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(e),n=/iPhone|iPod|iPad/i.test(e),r=window.location;return(i||n)&&Ce.length>0?r.protocol+"//"+r.host+r.pathname+r.search+t:t}function Ue(t,e,i,n){for(var r=0;r<n.length;r++){var o=n[r].x-e,s=n[r].y-i;if(Math.sqrt(o*o+s*s)<t.handleRadius)return r}return null}function We(t){return{boxSizing:"border-box",border:t.borderWidth+"px solid "+t.borderColor}}function Le(t,e,i){return t+"-gradient("+e+", "+i.map(function(t){var e=t[0];return t[1]+" "+e+"%"}).join(",")+")"}function De(t){return"string"==typeof t?t:t+"px"}var Ve=["mousemove","touchmove","mouseup","touchend"],Be=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(t){var e=this.handleEvent.bind(this),i={onMouseDown:e,ontouchstart:e},n="horizontal"===t.layoutDirection,r=null===t.margin?t.sliderMargin:t.margin,o={overflow:"visible",display:n?"inline-block":"block"};return t.index>0&&(o[n?"marginLeft":"marginTop"]=r),Wt(Dt,null,t.children(this.uid,i,o))},e.prototype.handleEvent=function(t){var e=this,i=this.props.onInput,n=this.base.getBoundingClientRect();t.preventDefault();var r=t.touches?t.changedTouches[0]:t,o=r.clientX-n.left,s=r.clientY-n.top;switch(t.type){case"mousedown":case"touchstart":!1!==i(o,s,0)&&Ve.forEach(function(t){document.addEventListener(t,e,{passive:!1})});break;case"mousemove":case"touchmove":i(o,s,1);break;case"mouseup":case"touchend":i(o,s,2),Ve.forEach(function(t){document.removeEventListener(t,e,{passive:!1})})}},e}(Vt);function ze(t){var e=t.r,i=t.url,n=e,r=e;return Wt("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+De(t.x)+", "+De(t.y)+")",willChange:"transform",top:De(-e),left:De(-e),width:De(2*e),height:De(2*e),position:"absolute",overflow:"visible"}},i&&Wt("use",Object.assign({xlinkHref:Ne(i)},t.props)),!i&&Wt("circle",{cx:n,cy:r,r:e,fill:"none","stroke-width":2,stroke:"#000"}),!i&&Wt("circle",{cx:n,cy:r,r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}function Fe(t){var e=t.activeIndex,i=void 0!==e&&e<t.colors.length?t.colors[e]:t.color,n=Ae(t),r=n.width,o=n.height,s=n.radius,a=function(t,e){var i=Ae(t),n=i.width,r=i.height,o=i.handleRange,s=i.handleStart,a="horizontal"===t.layoutDirection,l=function(t,e){var i=e.hsva,n=e.rgb;switch(t.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*i.a;case"kelvin":var r=t.minTemperature,o=t.maxTemperature-r,s=(e.kelvin-r)/o*100;return Math.max(0,Math.min(s,100));case"hue":return i.h/=3.6;case"saturation":return i.s;default:return i.v}}(t,e),c=a?n/2:r/2,h=s+l/100*o;return a&&(h=-1*h+o+2*s),{x:a?c:h,y:a?h:c}}(t,i),l=function(t,e){var i=e.hsv,n=e.rgb;switch(t.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var r=[],o=t.minTemperature,s=t.maxTemperature,a=s-o,l=o,c=0;l<s;l+=a/8,c+=1){var h=Ee.kelvinToRgb(l),u=h.r,d=h.g,f=h.b;r.push([12.5*c,"rgb("+u+","+d+","+f+")"])}return r;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=Ee.hsvToHsl({h:i.h,s:0,v:i.v}),g=Ee.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];default:var v=Ee.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+v.h+","+v.s+"%,"+v.l+"%)"]]}}(t,i);return Wt(Be,Object.assign({},t,{onInput:function(e,n,r){var o=function(t,e,i){var n,r=Ae(t),o=r.handleRange,s=r.handleStart;n="horizontal"===t.layoutDirection?-1*i+o+s:e-s,n=Math.max(Math.min(n,o),0);var a=Math.round(100/o*n);switch(t.sliderType){case"kelvin":var l=t.minTemperature;return l+(t.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}(t,e,n);t.parent.inputActive=!0,i[t.sliderType]=o,t.onInput(r,t.id)}}),function(e,n,c){return Wt("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:De(r),height:De(o),borderRadius:De(s),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},c)}),Wt("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:De(s),background:Le("linear","horizontal"===t.layoutDirection?"to top":"to right",l)},We(t))}),Wt(ze,{isActive:!0,index:i.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:a.x,y:a.y}))})}function qe(t){var e=Me(t),i=e.width,n=e.height,r=e.radius,o=t.colors,s=t.parent,a=t.activeIndex,l=void 0!==a&&a<t.colors.length?t.colors[a]:t.color,c=[[[0,"#fff"],[100,"hsl("+l.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]],h=o.map(function(e){return function(t,e){var i=Me(t),n=i.width,r=i.height,o=i.radius,s=e.hsv,a=o,l=n-2*o,c=r-2*o;return{x:a+s.s/100*l,y:a+(c-s.v/100*c)}}(t,e)});return Wt(Be,Object.assign({},t,{onInput:function(e,i,n){if(0===n){var r=Ue(t,e,i,h);null!==r?s.setActiveColor(r):(s.inputActive=!0,l.hsv=He(t,e,i),t.onInput(n,t.id))}else 1===n&&(s.inputActive=!0,l.hsv=He(t,e,i));t.onInput(n,t.id)}}),function(e,s,a){return Wt("div",Object.assign({},s,{className:"IroBox",style:Object.assign({},{width:De(i),height:De(n),position:"relative"},a)}),Wt("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:De(r)},We(t),{background:Le("linear","to bottom",c[1])+","+Le("linear","to right",c[0])})}),o.filter(function(t){return t!==l}).map(function(e){return Wt(ze,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[e.index].x,y:h[e.index].y})}),Wt(ze,{isActive:!0,index:l.index,fill:l.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[l.index].x,y:h[l.index].y}))})}function Ke(t){var e=je(t).width,i=t.colors,n=(t.borderWidth,t.parent),r=t.color,o=r.hsv,s=i.map(function(e){return function(t,e){var i=e.hsv,n=je(t),r=n.cx,o=n.cy,s=Te(t),a=(180+Re(t,i.h,!0))*(Oe/360),l=i.s/100*s,c="clockwise"===t.wheelDirection?-1:1;return{x:r+l*Math.cos(a)*c,y:o+l*Math.sin(a)*c}}(t,e)}),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return Wt(Be,Object.assign({},t,{onInput:function(e,i,o){if(0===o){if(!function(t,e,i){var n=je(t),r=n.cx,o=n.cy,s=t.width/2;return Pe(r-e,o-i)<s}(t,e,i))return!1;var a=Ue(t,e,i,s);null!==a?n.setActiveColor(a):(n.inputActive=!0,r.hsv=Ie(t,e,i),t.onInput(o,t.id))}else 1===o&&(n.inputActive=!0,r.hsv=Ie(t,e,i));t.onInput(o,t.id)}}),function(n,l,c){return Wt("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:De(e),height:De(e),position:"relative"},c)}),Wt("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(t.wheelAngle+90)+"deg)",background:"clockwise"===t.wheelDirection?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"})}),Wt("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),t.wheelLightness&&Wt("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-o.v/100})}),Wt("div",{className:"IroWheelBorder",style:Object.assign({},a,We(t))}),i.filter(function(t){return t!==r}).map(function(e){return Wt(ze,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:s[e.index].x,y:s[e.index].y})}),Wt(ze,{isActive:!0,index:r.index,fill:r.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:s[r.index].x,y:s[r.index].y}))})}ze.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},Fe.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});var Ge=function(t){function e(e){var i=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id,(e.colors.length>0?e.colors:[e.color]).forEach(function(t){return i.addColor(t)}),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var i=new Ee(t,this.onColorChange.bind(this));this.colors.splice(e,0,i),this.colors.forEach(function(t,e){return t.index=e}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach(function(t,e){return t.index=e}),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t,e){var i=this;void 0===e&&(e=0),this.colors.forEach(function(t){return t.unbind()}),this.colors=[],t.forEach(function(t){return i.addColor(t)}),this.setActiveColor(e),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var i=this,n=this.events;(Array.isArray(t)?t:[t]).forEach(function(t){(n[t]||(n[t]=[])).push(e),i.deferredEvents[t]&&(i.deferredEvents[t].forEach(function(t){e.apply(null,t)}),i.deferredEvents[t]=[])})},e.prototype.off=function(t,e){var i=this;(Array.isArray(t)?t:[t]).forEach(function(t){var n=i.events[t];n&&n.splice(n.indexOf(e),1)})},e.prototype.emit=function(t){for(var e=this,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var r=this.activeEvents;r.hasOwnProperty(t)&&r[t]||(r[t]=!0,(this.events[t]||[]).forEach(function(t){return t.apply(e,i)}),r[t]=!1)},e.prototype.deferredEmit=function(t){for(var e,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var r=this.deferredEvents;(e=this).emit.apply(e,[t].concat(i)),(r[t]||(r[t]=[])).push(i)},e.prototype.setOptions=function(t){this.setState(t)},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach(function(t){return t.reset()}),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t,e){0===t?this.emit("input:start",this.color,e):1===t?this.emit("input:move",this.color,e):2===t&&this.emit("input:end",this.color,e)},e.prototype.render=function(t,e){var i=this,n=e.layout;return Array.isArray(n)||(n=[{component:Ke},{component:Fe}],e.transparency&&n.push({component:Fe,options:{sliderType:"alpha"}})),Wt("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},n.map(function(t,n){var r=t.component,o=t.options;return Wt(r,Object.assign({},e,o,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:n}))}))},e}(Vt);Ge.defaultProps=Object.assign({},{width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},{colors:[],display:"block",id:null,layout:"default",margin:null});var Ze,Je,Xe,Ye=(Je=function(t,e){var i,n=document.createElement("div");function r(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(i.base),i.onMount(e)}return function(t,e,i){var n,r,o;Ot.__p&&Ot.__p(t,e),r=(n=i===Rt)?null:e.__k,t=Wt(Dt,null,[t]),o=[],Yt(e,e.__k=t,r||It,It,void 0!==e.ownerSVGElement,r?null:Mt.slice.call(e.childNodes),o,!1,It,n),Qt(o,t)}(Wt(Ze,Object.assign({},{ref:function(t){return i=t}},e)),n),"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r),i},Je.prototype=(Ze=Ge).prototype,Object.assign(Je,Ze),Je.__component=Ze,Je);!function(t){var e;t.version="5.5.2",t.Color=Ee,t.ColorPicker=Ye,(e=t.ui||(t.ui={})).h=Wt,e.ComponentBase=Be,e.Handle=ze,e.Slider=Fe,e.Wheel=Ke,e.Box=qe}(Xe||(Xe={}));const Qe=Xe,ti=globalThis,ei=ti.ShadowRoot&&(void 0===ti.ShadyCSS||ti.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;function ii(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:n}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const r=this.renderOptions.creationScope=this.attachShadow({...n,customElements:t.registry});return((t,e)=>{if(ei)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=ti.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(r,this.constructor.elementStyles),r}}}Symbol(),new WeakMap;const ni=o`
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
`,ri={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",color_wheel:!0,persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,warm_white_value:!0,color_picker:!0,effects_list:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,brightness_icon:"weather-sunny",white_icon:"file-word-box",warm_white_icon:"weather-sunset",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"},oi=o`
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
`,si=(t,e)=>t.reduce((t,i)=>(i.defineId?t[i.defineId]=i:i.promise.then(t=>{void 0===e.registry.get(i.name)&&e.registry.define(i.name,t)}),t),{}),ai=t=>({name:t,promise:customElements.whenDefined(t).then(()=>customElements.get(t))}),li=(t,e,i={},n={})=>{const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};class ci extends(ii(At)){static get elementDefinitions(){return si([ai("ha-checkbox"),ai("ha-formfield"),ai("ha-form-string"),ai("ha-select"),ai("mwc-list-item")],ci)}static get styles(){return oi}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config={...ri,...t}}get entityOptions(){const t=Object.keys(this.hass.states).filter(t=>["switch","light","group"].includes(t.substr(0,t.indexOf("."))));return t.sort(),t}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass)return Y``;let{header:t}=this._config;if(!t&&this._config.entity){let e=this._config.entity.split(".")[1]||"";e&&(e=e.charAt(0).toUpperCase()+e.slice(1),t=e)}const e=this.entityOptions.map(t=>Y`<mwc-list-item value="${t}" ?selected=${t===this._config.entity}>${t}</mwc-list-item>`);return Y`
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
    `}configChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:e,value:i},detail:{value:n}}=t;this._config=null!=n?{...this._config,[e]:n}:{...this._config,[e]:i},li(this,"config-changed",{config:this._config})}checkboxConfigChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:e,checked:i}}=t;this._config={...this._config,[e]:i},li(this,"config-changed",{config:this._config})}}const hi="light-entity-card-editor";customElements.define(hi,ci),console.info("light-entity-card v6.2.0");class ui extends(ii(At)){static get elementDefinitions(){return si([ai("ha-card"),ai("more-info-light"),ai("ha-switch"),ai("ha-icon"),ai("state-badge"),ai("ha-slider"),ai("ha-color-picker"),ai("ha-select"),ai("mwc-list-item")],ui)}static get properties(){return{hass:{},config:{}}}async firstUpdated(){this.setColorWheels(),this._firstUpdate=!0}async updated(){this.setColorWheels()}setColorWheels(){if(!this._shownStateObjects)return;this._lastHsColors||(this._lastHsColors=new Map);const t=this.getColorPickerWidth();for(const e of this._shownStateObjects){const i=this.renderRoot.getElementById(`picker-${e.entity_id}`);if(!i)continue;if(this._colorPickerInteracting)continue;const n=e.attributes.hs_color,r=n?`${n[0]},${n[1]}`:"";if(this._lastHsColors.get(e.entity_id)===r&&i.hasChildNodes())continue;this._lastHsColors.set(e.entity_id,r),i.innerHTML="";let o={h:0,s:0,v:100};n&&(o={h:parseInt(n[0],10),s:parseInt(n[1],10),v:100});const s=new Qe.ColorPicker(i,{sliderSize:0,color:o,width:t,wheelLightness:!1});s.on("input:start",()=>{this._colorPickerInteracting=!0}),s.on("input:end",t=>{this._colorPickerInteracting=!1,this.setColorPicker(t.hsv,e)})}}getColorPickerWidth(){const t=this.shadowRoot.querySelector(".light-entity-card");if(!t)return 300;const e=t.offsetWidth,i=this.config.shorten_cards,n=e-(i?100:50),r=i?200:300;return r>n?n:r}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={...ri,...t}}static async getConfigElement(){return document.createElement(hi)}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}getCardSize(){if(!this.config||!this.__hass||!this.__hass.states[this.config.entity])return 1;let t=0;const e=this.__hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t,10)}getEntityLength(t){return/^light\./.test(t)?ui.entityLength.light:/^switch\./.test(t)?ui.entityLength.switch:0}get styles(){return ni}get language(){return this.__hass.resources[this.__hass.language]}isEntityOn(t){return"on"===t.state}render(){const t=this.hass.states[this.config.entity];if(!t)return Y`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(t),this.config.consolidate_entities?this._shownStateObjects=[t]:this._shownStateObjects=[...this._stateObjects];const e=this._shownStateObjects.reduce((t,e)=>Y`${t}${this.createEntityTemplate(e)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return setTimeout(()=>{this.setColorWheels()},100),Y`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${e}
      </ha-card>
    `}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.hass.states[t]).filter(Boolean):[t]}createEntityTemplate(t){const e=this.config.full_width_sliders?"ha-slider-full-width":"";return Y`
      ${this.createHeader(t)}
      <div class="light-entity-card-sliders ${e}">
        ${this.createBrightnessSlider(t)} ${this.createSpeedSlider(t)}
        ${this.createIntensitySlider(t)} ${this.createColorTemperature(t)}
        ${this.createWhiteValue(t)}
        ${this.createWarmWhiteValue(t)}
      </div>
      ${this.createColorPicker(t)} ${this.createEffectList(t)}
    `}createHeader(t){if(this.config.hide_header)return Y``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return Y`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(t)}
        <div class="light-entity-card__title">${e}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(t){return this.config.show_header_icon?Y`
      <div class="icon-container">
        <state-badge .stateObj=${t}></state-badge>
      </div>
    `:Y``}createBrightnessSlider(t){return!1===this.config.brightness||this.dontShowFeature("brightness",t)?Y``:Y`
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
    `}createSpeedSlider(t){return!1===this.config.speed||this.dontShowFeature("speed",t)?Y``:Y`
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
    `}createIntensitySlider(t){return!1===this.config.intensity||this.dontShowFeature("intensity",t)?Y``:Y`
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
    `}showPercent(t,e,i){if(!this.config.show_slider_percent)return Y``;let n=parseInt(100*(t-e)/(i-e),10);return isNaN(n)&&(n=0),Y` <div class="percent-slider">${n}%</div> `}createColorTemperature(t){if(!1===this.config.color_temp)return Y``;if(this.dontShowFeature("colorTemp",t))return Y``;const e=void 0!==t.attributes.min_color_temp_kelvin,i=e?Math.round(1e6/t.attributes.color_temp_kelvin):t.attributes.color_temp,n=e?Math.round(1e6/t.attributes.max_color_temp_kelvin):t.attributes.min_mireds,r=e?Math.round(1e6/t.attributes.min_color_temp_kelvin):t.attributes.max_mireds,o=this.showPercent(i,n,r);return Y`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        </div>
        <ha-slider
          class="light-entity-card-color_temp"
          min="${n}"
          max="${r}"
          .value=${i||(null!=n&&null!=r?Math.round((n+r)/2):0)}
          @change="${i=>this._setColorTemp(i,t,e)}"
        >
        </ha-slider>
        ${o}
      </div>
    `}getWhiteValue(t,e=3){const i=t.attributes.rgbw_color,n=t.attributes.rgbww_color;return i&&3===e?i[3]||0:n&&e<n.length?n[e]||0:3===e&&void 0!==t.attributes.white_value?t.attributes.white_value??0:0}createWhiteValue(t){if(!1===this.config.white_value)return Y``;if(this.dontShowFeature("whiteValue",t))return Y``;const e=this.getWhiteValue(t,3);return Y`
      <div class="control light-entity-card-center">
        <div class="icon-container">
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
    `}createWarmWhiteValue(t){if(!1===this.config.warm_white_value)return Y``;if(this.dontShowFeature("warmWhiteValue",t))return Y``;const e=this.getWhiteValue(t,4);return Y`
      <div class="control light-entity-card-center">
        <div class="icon-container">
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
    `}_setWhiteValue(t,e,i){const n=parseInt(t.target.value,10);if(isNaN(n))return;const r=e.attributes.supported_color_modes||[],o=e.attributes.rgbw_color,s=e.attributes.rgbww_color;if(r.includes("rgbw")&&3===i){const t=o?o.slice(0,3):e.attributes.rgb_color||[255,255,255];this.callEntityService({rgbw_color:[t[0],t[1],t[2],n]},e)}else if(r.includes("rgbww")){const t=s||[...e.attributes.rgb_color||[255,255,255],0,0],r=[t[0],t[1],t[2],t[3],t[4]];r[i]=n,this.callEntityService({rgbww_color:r},e)}else this.callEntityService({white_value:n},e)}createEffectList(t){if(!1===this.config.effects_list)return Y``;if(!this.config.persist_features&&!this.isEntityOn(t))return Y``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return Y``;const i=e.map(e=>this.createListItem(t,e)),n=this.language["ui.card.light.effect"];return Y`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select 
          @closed="${t=>t.stopPropagation()}" 
          @selected=${e=>this.setEffect(e,t)} 
          label="${n}" 
        >
          ${i}
        </ha-select>
      </div>
    `}createListItem(t,e){return Y`<mwc-list-item value="${e}" ?selected=${e===t.attributes.effect}
      >${e}</mwc-list-item
    >`}createColorPicker(t){return!1===this.config.color_picker||this.dontShowFeature("color",t)?Y``:Y`
      <div class="light-entity-card__color-picker">
        <div id="picker-${t.entity_id}"></div>
      </div>
    `}dontShowFeature(t,e){if(this.config.force_features)return!1;if("speed"===t&&"speed"in e.attributes)return!1;if("intensity"===t&&"intensity"in e.attributes)return!1;let i=ui.featureNames[t]&e.attributes.supported_features;const n=e.attributes.supported_color_modes||[];if(!i)switch(t){case"brightness":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"brightness"),!i){const t=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"colorTemp":if(n){const t=["color_temp"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"effectList":i=e.attributes.effect_list&&e.attributes.effect_list.length;break;case"color":{const t=["hs","rgb","rgbw","rgbww","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0;break}case"whiteValue":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"white_value"),!i){const t=["rgbw","rgbww"];i=n.some(e=>t.includes(e))}break;case"warmWhiteValue":{const t=["rgbww"];i=n.some(e=>t.includes(e));break}default:i=!1}return!i||!this.config.persist_features&&!this.isEntityOn(e)}setColorPicker(t,e){this.callEntityService({hs_color:[t.h,t.s]},e)}_setValue(t,e,i){const n=parseInt(t.target.value,10);isNaN(n)||parseInt(e.attributes[i],10)===n||this.callEntityService({[i]:n},e)}_setColorTemp(t,e,i){const n=parseInt(t.target.value,10);if(!isNaN(n))if(i){const t=Math.round(1e6/n);if(t===parseInt(e.attributes.color_temp_kelvin,10))return;this.callEntityService({color_temp_kelvin:t},e)}else{if(n===parseInt(e.attributes.color_temp,10))return;this.callEntityService({color_temp:n},e)}}setToggle(t,e){const i=this.isEntityOn(e)?ui.cmdToggle.off:ui.cmdToggle.on;this.callEntityService({},e,i)}setEffect(t,e){t.target.value&&this.callEntityService({effect:t.target.value},e)}callEntityService(t,e,i){if(!this._firstUpdate)return;let n=e.entity_id.split(".")[0];"group"===n&&(n="homeassistant"),this.hass.callService(n,i||ui.cmdToggle.on,{entity_id:e.entity_id,...t})}}customElements.define("light-entity-card",ui),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"})})();