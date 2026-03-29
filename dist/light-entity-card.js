/*! For license information please see light-entity-card.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(n,t,i)},s=(i,n)=>{e?i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(e=>{const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)})},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var c;const h=window,l=h.trustedTypes,d=l?l.emptyScript:"",u=h.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p},_="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}function y(t,e,i){return e=b(e),function(t,e){if(e&&("object"==O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,m()?Reflect.construct(e,i||[],b(t).constructor):e.apply(t,i))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(m=function(){return!!t})()}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function $(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=S(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function S(t,e){if(t){if("string"==typeof t)return x(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,P(n.key),n)}}function E(t,e,i){return e&&A(t.prototype,e),i&&A(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t){var e=function(t){if("object"!=O(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=O(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(e)?e:e+""}function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}var T;v[_]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");var j=window,U=j.trustedTypes,I=U?U.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,N="$lit$",R="lit$".concat((Math.random()+"").slice(9),"$"),H="?"+R,V="<".concat(H,">"),M=document,W=function(){return M.createComment("")},L=function(t){return null===t||"object"!=O(t)&&"function"!=typeof t},B=Array.isArray,D="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,q=/>/g,K=RegExp(">|".concat(D,"(?:([^\\s\"'>=/]+)(").concat(D,"*=").concat(D,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),J=/'/g,Z=/"/g,G=/^(?:script|style|textarea|title)$/i,Q=function(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:t,strings:e,values:n}}},X=Q(1),Y=(Q(2),Symbol.for("lit-noChange")),tt=Symbol.for("lit-nothing"),et=new WeakMap,it=M.createTreeWalker(M,129,null,!1);function nt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(e):e}var rt=function(t,e){for(var i,n=t.length-1,r=[],o=2===e?"<svg>":"",s=F,a=0;a<n;a++){for(var c=t[a],h=void 0,l=void 0,d=-1,u=0;u<c.length&&(s.lastIndex=u,null!==(l=s.exec(c)));)u=s.lastIndex,s===F?"!--"===l[1]?s=z:void 0!==l[1]?s=q:void 0!==l[2]?(G.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=K):void 0!==l[3]&&(s=K):s===K?">"===l[0]?(s=null!=i?i:F,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,h=l[1],s=void 0===l[3]?K:'"'===l[3]?Z:J):s===Z||s===J?s=K:s===z||s===q?s=F:(s=K,i=void 0);var f=s===K&&t[a+1].startsWith("/>")?" ":"";o+=s===F?c+V:d>=0?(r.push(h),c.slice(0,d)+N+c.slice(d)+R+f):c+R+(-2===d?(r.push(void 0),a):f)}return[nt(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),r]},ot=function(){return E(function t(e,i){var n,r=e.strings,o=e._$litType$;C(this,t),this.parts=[];var s=0,a=0,c=r.length-1,h=this.parts,l=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,o,s,a=[],c=!0,h=!1;try{if(o=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;c=!1}else for(;!(c=(n=o.call(i)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){h=!0,r=t}finally{try{if(!c&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(h)throw r}}return a}}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(rt(r,o),2),d=l[0],u=l[1];if(this.el=t.createElement(d,i),it.currentNode=this.el.content,2===o){var f=this.el.content,p=f.firstChild;p.remove(),f.append.apply(f,function(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(p.childNodes))}for(;null!==(n=it.nextNode())&&h.length<c;){if(1===n.nodeType){if(n.hasAttributes()){var g,_=[],v=k(n.getAttributeNames());try{for(v.s();!(g=v.n()).done;){var y=g.value;if(y.endsWith(N)||y.startsWith(R)){var m=u[a++];if(_.push(y),void 0!==m){var b=n.getAttribute(m.toLowerCase()+N).split(R),$=/([.?@])?(.*)/.exec(m);h.push({type:1,index:s,name:$[2],strings:b,ctor:"."===$[1]?ut:"?"===$[1]?pt:"@"===$[1]?gt:dt})}else h.push({type:6,index:s})}}}catch(t){v.e(t)}finally{v.f()}for(var w=0,A=_;w<A.length;w++){var E=A[w];n.removeAttribute(E)}}if(G.test(n.tagName)){var P=n.textContent.split(R),O=P.length-1;if(O>0){n.textContent=U?U.emptyScript:"";for(var T=0;T<O;T++)n.append(P[T],W()),it.nextNode(),h.push({type:2,index:++s});n.append(P[O],W())}}}else if(8===n.nodeType)if(n.data===H)h.push({type:2,index:s});else for(var j=-1;-1!==(j=n.data.indexOf(R,j+1));)h.push({type:7,index:s}),j+=R.length-1;s++}},null,[{key:"createElement",value:function(t,e){var i=M.createElement("template");return i.innerHTML=t,i}}])}();function st(t,e){var i,n,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===Y)return e;var c=void 0!==a?null===(i=s._$Co)||void 0===i?void 0:i[a]:s._$Cl,h=L(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==h&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===h?c=void 0:(c=new h(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Co)&&void 0!==r?r:o._$Co=[])[a]=c:s._$Cl=c),void 0!==c&&(e=st(t,c._$AS(t,e.values),c,a)),e}var at,ct,ht=function(){return E(function t(e,i){C(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(n,!0);it.currentNode=o;for(var s=it.nextNode(),a=0,c=0,h=r[0];void 0!==h;){if(a===h.index){var l=void 0;2===h.type?l=new lt(s,s.nextSibling,this,t):1===h.type?l=new h.ctor(s,h.name,h.strings,this,t):6===h.type&&(l=new _t(s,this,t)),this._$AV.push(l),h=r[++c]}a!==(null==h?void 0:h.index)&&(s=it.nextNode(),a++)}return it.currentNode=M,o}},{key:"v",value:function(t){var e,i=0,n=k(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}])}(),lt=function(){function t(e,i,n,r){var o;C(this,t),this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return E(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=st(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),L(t)?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):function(t){return B(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.T(t):this._(t)}},{key:"k",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"$",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}},{key:"_",value:function(t){this._$AH!==tt&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}},{key:"g",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ot.createElement(nt(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{var o=new ht(r,this),s=o.u(this.options);o.v(i),this.$(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=et.get(t.strings);return void 0===e&&et.set(t.strings,e=new ot(t)),e}},{key:"T",value:function(e){B(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,o=0,s=k(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;o===r.length?r.push(i=new t(this.k(W()),this.k(W()),this,this.options)):i=r[o],i._$AI(a),o++}}catch(t){s.e(t)}finally{s.f()}o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,i);e&&e!==this._$AB;){var n=e.nextSibling;e.remove(),e=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),dt=function(){return E(function t(e,i,n,r,o){C(this,t),this.type=1,this._$AH=tt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=tt},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=st(this,t,e,0),(o=!L(t)||t!==this._$AH&&t!==Y)&&(this._$AH=t);else{var s,a,c=t;for(t=r[0],s=0;s<r.length-1;s++)(a=st(this,c[i+s],e,s))===Y&&(a=this._$AH[s]),o||(o=!L(a)||a!==this._$AH[s]),a===tt?t=tt:t!==tt&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}},{key:"j",value:function(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),ut=function(t){function e(){var t;return C(this,e),(t=y(this,e,arguments)).type=3,t}return $(e,t),E(e,[{key:"j",value:function(t){this.element[this.name]=t===tt?void 0:t}}])}(dt),ft=U?U.emptyScript:"",pt=function(t){function e(){var t;return C(this,e),(t=y(this,e,arguments)).type=4,t}return $(e,t),E(e,[{key:"j",value:function(t){t&&t!==tt?this.element.setAttribute(this.name,ft):this.element.removeAttribute(this.name)}}])}(dt),gt=function(t){function e(t,i,n,r,o){var s;return C(this,e),(s=y(this,e,[t,i,n,r,o])).type=5,s}return $(e,t),E(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=st(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:tt)!==Y){var i=this._$AH,n=t===tt&&i!==tt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==tt&&(i===tt||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}])}(dt),_t=function(){return E(function t(e,i,n){C(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){st(this,t)}}])}(),vt=j.litHtmlPolyfillSupport;function yt(t){return yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(t)}function mt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,bt(n.key),n)}}function bt(t){var e=function(t){if("object"!=yt(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=yt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==yt(e)?e:e+""}function $t(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function wt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(wt=function(){return!!t})()}function kt(t,e,i,n){var r=St(xt(1&n?t.prototype:t),e,i);return 2&n&&"function"==typeof r?function(t){return r.apply(i,t)}:r}function St(){return St="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=xt(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}},St.apply(null,arguments)}function xt(t){return xt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xt(t)}function Ct(t,e){return Ct=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ct(t,e)}null==vt||vt(ot,lt),(null!==(T=j.litHtmlVersions)&&void 0!==T?T:j.litHtmlVersions=[]).push("2.8.0");var At=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,i){return e=xt(e),function(t,e){if(e&&("object"==yt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return $t(t)}(t,wt()?Reflect.construct(e,i||[],xt(t).constructor):e.apply(t,i))}(this,e,arguments)).renderOptions={host:$t(t)},t._$Do=void 0,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ct(t,e)}(e,t),function(t,e){return e&&mt(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(e,[{key:"createRenderRoot",value:function(){var t,i,n=kt(e,"createRenderRoot",this,3)([]);return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=n.firstChild),n}},{key:"update",value:function(t){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),kt(e,"update",this,3)([t]),this._$Do=function(t,e,i){var n,r,o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new lt(e.insertBefore(W(),a),a,void 0,null!=i?i:{})}return s._$AI(t),s}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;kt(e,"connectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;kt(e,"disconnectedCallback",this,3)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return Y}}])}(v);At.finalized=!0,At._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:At});var Et=globalThis.litElementPolyfillSupport;null==Et||Et({LitElement:At}),(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.3.3");const Pt=globalThis,Ot=Pt.ShadowRoot&&(void 0===Pt.ShadyCSS||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;function Tt(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:n}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const r=this.renderOptions.creationScope=this.attachShadow({...n,customElements:t.registry});return((t,e)=>{if(Ot)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=Pt.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(r,this.constructor.elementStyles),r}}}Symbol(),new WeakMap;const jt=o`
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

`,Ut={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,warm_white_value:!0,color_picker:!0,effects_list:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,color_temp_in_kelvin:!1,transition:0,brightness_icon:"weather-sunny",white_icon:"file-word-box",warm_white_icon:"weather-sunset",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"},It=o`
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
  
  ha-entity-picker {
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
`,Nt=(t,e)=>t.reduce((t,i)=>(i.defineId?t[i.defineId]=i:i.promise.then(t=>{void 0===e.registry.get(i.name)&&e.registry.define(i.name,t)}),t),{}),Rt=t=>({name:t,promise:customElements.whenDefined(t).then(()=>customElements.get(t))}),Ht=(t,e,i={},n={})=>{const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};class Vt extends(Tt(At)){static get elementDefinitions(){return Nt([Rt("ha-checkbox"),Rt("ha-formfield"),Rt("ha-form-string"),Rt("ha-entity-picker")],Vt)}static get styles(){return It}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config={...Ut,...t}}get entityDomains(){return["switch","light","group"]}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass||!this._config)return X``;let{header:t}=this._config;if(!t&&this._config.entity){let e=this._config.entity.split(".")[1]||"";e&&(e=e.charAt(0).toUpperCase()+e.slice(1),t=e)}return X`
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
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity}
            .includeDomains=${this.entityDomains}
            label="Entity"
            @value-changed=${this.entityChanged}
            allow-custom-entity
          ></ha-entity-picker>
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
    `}entityChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const e=t.detail.value;e!==this._config.entity&&(this._config={...this._config,entity:e},Ht(this,"config-changed",{config:this._config}))}configChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:e,value:i},detail:{value:n}}=t;this._config=null!=n?{...this._config,[e]:n}:{...this._config,[e]:i},Ht(this,"config-changed",{config:this._config})}checkboxConfigChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:e,checked:i}}=t;this._config={...this._config,[e]:i},Ht(this,"config-changed",{config:this._config})}}const Mt="light-entity-card-editor";customElements.define(Mt,Vt),console.info("light-entity-card v6.3.1");class Wt extends(Tt(At)){static get elementDefinitions(){return Nt([Rt("ha-card"),Rt("more-info-light"),Rt("ha-switch"),Rt("ha-icon"),Rt("state-badge"),Rt("ha-slider"),Rt("ha-hs-color-picker"),Rt("ha-select"),Rt("mwc-list-item")],Wt)}static get properties(){return{hass:{},config:{},_colorPickerValues:{state:!0}}}async firstUpdated(){if(this._firstUpdate=!0,!1!==this.config.color_picker&&this.config.entity.startsWith("light.")&&!customElements.get("ha-hs-color-picker")){const t=document.querySelector("home-assistant");if(t){const e=document.createElement("style");e.textContent="ha-more-info-dialog { display: none !important; }",t.shadowRoot.appendChild(e);const i=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});t.dispatchEvent(i);try{await Promise.race([customElements.whenDefined("ha-hs-color-picker"),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),5e3))])}catch(t){}finally{const i=new CustomEvent("hass-more-info",{detail:{entityId:""},bubbles:!0,composed:!0});t.dispatchEvent(i),e.remove()}}this.requestUpdate()}}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={...Ut,...t}}static async getConfigElement(){return document.createElement(Mt)}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}getCardSize(){if(!this.config||!this.__hass||!this.__hass.states[this.config.entity])return 1;let t=0;const e=this.__hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t,10)}getEntityLength(t){return/^light\./.test(t)?Wt.entityLength.light:/^switch\./.test(t)?Wt.entityLength.switch:0}get styles(){return jt}isEntityOn(t){return"on"===t.state}render(){const t=this.hass.states[this.config.entity];if(!t)return X`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${`Invalid entity: ${this.config.entity}`} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(t),this.config.consolidate_entities?this._shownStateObjects=[t]:this._shownStateObjects=[...this._stateObjects];const e=this._shownStateObjects.reduce((t,e)=>X`${t}${this.createEntityTemplate(e)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return X`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${e}
      </ha-card>
    `}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.hass.states[t]).filter(Boolean):[t]}createEntityTemplate(t){const e=this.config.full_width_sliders?"ha-slider-full-width":"";return X`
      ${this.createHeader(t)}
      <div class="light-entity-card-sliders ${e}">
        ${this.createBrightnessSlider(t)} ${this.createSpeedSlider(t)}
        ${this.createIntensitySlider(t)} ${this.createColorTemperature(t)}
        ${this.createWhiteValue(t)}
        ${this.createWarmWhiteValue(t)}
      </div>
      ${this.createColorPicker(t)} ${this.createEffectList(t)}
    `}createHeader(t){if(this.config.hide_header)return X``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return X`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(t)}
        <div class="light-entity-card__title">${e}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(t){return this.config.show_header_icon?X`
      <div class="icon-container">
        <state-badge .stateObj=${t}></state-badge>
      </div>
    `:X``}createBrightnessSlider(t){return!1===this.config.brightness||this.dontShowFeature("brightness",t)?X``:X`
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
    `}createSpeedSlider(t){return!1===this.config.speed||this.dontShowFeature("speed",t)?X``:X`
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
    `}createIntensitySlider(t){return!1===this.config.intensity||this.dontShowFeature("intensity",t)?X``:X`
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
    `}showPercent(t,e,i,n){if("brightness"===n&&void 0!==this.config.show_brightness_percent){if(!this.config.show_brightness_percent)return X``}else if("color_temp"===n&&void 0!==this.config.show_color_temp_percent){if(!this.config.show_color_temp_percent)return X``}else if("color_temp"===n&&this.config.color_temp_in_kelvin);else if(!this.config.show_slider_percent)return X``;if("color_temp"===n&&this.config.color_temp_in_kelvin)return X` <div class="percent-slider">${t}K</div> `;let r=parseInt(100*(t-e)/(i-e),10);return isNaN(r)&&(r=0),X` <div class="percent-slider">${r}%</div> `}createColorTemperature(t){if(!1===this.config.color_temp)return X``;if(this.dontShowFeature("colorTemp",t))return X``;const e=void 0!==t.attributes.min_color_temp_kelvin;let i,n,r,o,s,a;if(this.config.color_temp_in_kelvin){let o,s,a;if(e?(a=t.attributes.color_temp_kelvin,o=t.attributes.min_color_temp_kelvin,s=t.attributes.max_color_temp_kelvin):(a=t.attributes.color_temp?Math.round(1e6/t.attributes.color_temp):null,o=t.attributes.max_mireds?Math.round(1e6/t.attributes.max_mireds):null,s=t.attributes.min_mireds?Math.round(1e6/t.attributes.min_mireds):null),!o||!s)return X``;const c=Math.round((o+s)/2);i="number"==typeof a&&Number.isFinite(a)&&a>0?a:null,n=o,r=s;const h=i||c,l=this.showPercent(h,n,r,"color_temp");return X`
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
      `}if(e){const e=t.attributes.color_temp_kelvin,i=t.attributes.min_color_temp_kelvin,n=t.attributes.max_color_temp_kelvin;if(!i||!n)return X``;a="number"==typeof e&&Number.isFinite(e)&&e>0?Math.round(1e6/e):null,o=Math.round(1e6/n),s=Math.round(1e6/i)}else if(a=t.attributes.color_temp,o=t.attributes.min_mireds,s=t.attributes.max_mireds,!o||!s)return X``;const c=s&&o?s-o:0,h=c>0&&null!=a?Math.round((a-o)/c*100):50,l=this.showPercent(h,0,100,"color_temp");return X`
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
    `}getWhiteValue(t,e=3){const i=t.attributes.rgbw_color,n=t.attributes.rgbww_color;return i&&3===e?i[3]||0:n&&e<n.length?n[e]||0:3===e&&void 0!==t.attributes.white_value?t.attributes.white_value??0:0}createWhiteValue(t){if(!1===this.config.white_value)return X``;if(this.dontShowFeature("whiteValue",t))return X``;const e=this.getWhiteValue(t,3);return X`
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
    `}createWarmWhiteValue(t){if(!1===this.config.warm_white_value)return X``;if(this.dontShowFeature("warmWhiteValue",t))return X``;const e=this.getWhiteValue(t,4);return X`
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
    `}_setWhiteValue(t,e,i){const n=parseInt(t.target.value,10);if(isNaN(n))return;const r=e.attributes.supported_color_modes||[],o=e.attributes.rgbw_color,s=e.attributes.rgbww_color;if(r.includes("rgbw")&&3===i){const t=o?o.slice(0,3):e.attributes.rgb_color||[255,255,255];this.callEntityService({rgbw_color:[t[0],t[1],t[2],n]},e)}else if(r.includes("rgbww")){let t;if(s)t=s;else if(o)t=[o[0],o[1],o[2],o[3],0];else{const i=e.attributes.rgb_color||[255,255,255];t=[i[0],i[1],i[2],0,0]}const r=[...t];r[i]=n,this.callEntityService({rgbww_color:r},e)}else this.callEntityService({white_value:n},e)}createEffectList(t){if(!1===this.config.effects_list)return X``;if(!this.config.persist_features&&!this.isEntityOn(t))return X``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return X``;const i=e.map(e=>this.createListItem(t,e)),n=this.hass.localize("ui.card.light.effect")||"Effect";return X`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select 
          @closed="${t=>t.stopPropagation()}" 
          @selected=${e=>this.setEffect(e,t)} 
          label="${n}" 
        >
          ${i}
        </ha-select>
      </div>
    `}createListItem(t,e){return X`<mwc-list-item value="${e}" ?selected=${e===t.attributes.effect}
      >${e}</mwc-list-item
    >`}createColorPicker(t){if(!1===this.config.color_picker)return X``;if(this.dontShowFeature("color",t))return X``;const e=t.attributes.hs_color||[0,0],i=this._colorPickerValues&&this._colorPickerValues[t.entity_id]||[e[0],e[1]/100];return X`
      <div class="light-entity-card__color-picker">
        <ha-hs-color-picker
          .value=${i}
          @cursor-moved=${e=>{this._colorPickerValues={...this._colorPickerValues,[t.entity_id]:e.detail.value}}}
          @value-changed=${e=>this._onColorPickerChanged(e.detail.value,t)}
        ></ha-hs-color-picker>
      </div>
    `}dontShowFeature(t,e){if(this.config.force_features)return!1;if("speed"===t&&"speed"in e.attributes)return!1;if("intensity"===t&&"intensity"in e.attributes)return!1;let i=Wt.featureNames[t]&e.attributes.supported_features;const n=e.attributes.supported_color_modes||[];if(!i)switch(t){case"brightness":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"brightness"),!i){const t=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"colorTemp":if(n){const t=["color_temp"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"effectList":i=e.attributes.effect_list&&e.attributes.effect_list.length;break;case"color":{const t=["hs","rgb","rgbw","rgbww","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0;break}case"whiteValue":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"white_value"),!i){const t=["rgbw","rgbww"];i=n.some(e=>t.includes(e))}break;case"warmWhiteValue":{const t=["rgbww"];i=n.some(e=>t.includes(e));break}default:i=!1}return!i||!this.config.persist_features&&!this.isEntityOn(e)}_onColorPickerChanged(t,e){if(this._colorPickerValues){const{[e.entity_id]:t,...i}=this._colorPickerValues;this._colorPickerValues=i}this.setColorPicker(t,e)}setColorPicker(t,e){t&&this.callEntityService({hs_color:[t[0],100*t[1]]},e)}_setValue(t,e,i){const n=parseInt(t.target.value,10);isNaN(n)||parseInt(e.attributes[i],10)===n||this.callEntityService({[i]:n},e)}_setColorTemp(t,e,i,n,r,o){const s=parseInt(t.target.value,10);if(!isNaN(s))if(n)if(i){if(s===parseInt(e.attributes.color_temp_kelvin,10))return;this.callEntityService({color_temp_kelvin:s},e)}else{const t=Math.round(1e6/s);if(t===parseInt(e.attributes.color_temp,10))return;this.callEntityService({color_temp:t},e)}else{if(!Number.isFinite(r)||!Number.isFinite(o)||o<=r)return;const t=Math.round(r+s/100*(o-r));if(i){const i=Math.round(1e6/t);if(i===parseInt(e.attributes.color_temp_kelvin,10))return;this.callEntityService({color_temp_kelvin:i},e)}else{if(t===parseInt(e.attributes.color_temp,10))return;this.callEntityService({color_temp:t},e)}}}setToggle(t,e){const i=this.isEntityOn(e)?Wt.cmdToggle.off:Wt.cmdToggle.on;this.callEntityService({},e,i)}setEffect(t,e){t.target.value&&this.callEntityService({effect:t.target.value},e)}callEntityService(t,e,i){if(!this._firstUpdate)return;let n=e.entity_id.split(".")[0];"group"===n&&(n="homeassistant");const r=parseFloat(this.config.transition)||0;r>0&&"light"===n&&(t={...t,transition:r}),this.hass.callService(n,i||Wt.cmdToggle.on,{entity_id:e.entity_id,...t})}}customElements.define("light-entity-card",Wt),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"})})();