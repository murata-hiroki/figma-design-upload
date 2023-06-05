(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a){a=a.o;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ba(a,b){return a.g?a.l.slice(0,a.g.index)+b+a.l.slice(a.g.index):a.l+b}function ca(a){let b="&act=1&ri=1";a.h&&a.o&&(b+=aa(a));return ba(a,b)}function da(a,b){return a.h&&a.i||a.m?1==b?a.h?a.i:ba(a,"&dct=1"):2==b?ba(a,"&ri=2"):ba(a,"&ri=16"):a.l}
var fa=class{constructor({url:a,O:b}){this.l=a;this.o=b;b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};var q=class{constructor(a){this.g=a}toString(){return this.g.toString()}};q.prototype.h=!0;var ha;try{new URL("s://g"),ha=!0}catch(a){ha=!1}var ia=ha,ka={},la=new q("about:invalid#zClosurez",ka);function ma(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var na,oa;a:{for(var pa=["CLOSURE_FLAGS"],qa=p,ra=0;ra<pa.length;ra++)if(qa=qa[pa[ra]],null==qa){oa=null;break a}oa=qa}var sa=oa&&oa[610401301];na=null!=sa?sa:!1;var r;const ta=p.navigator;r=ta?ta.userAgentData||null:null;function ua(a){return na?r?r.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function u(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function v(){return na?!!r&&0<r.brands.length:!1}function va(){return v()?ua("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function wa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function xa(a,b){if(!(b instanceof q||b instanceof q)){b="object"==typeof b&&b.h?b.g.toString():String(b);b:{var c=b;if(ia){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new q(b,ka)}a.href=b instanceof q&&b.constructor===q?b.g:"type_error:SafeUrl"};/*

 SPDX-License-Identifier: Apache-2.0
*/
class ya{constructor(a){this.X=a}}function w(a){return new ya(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const za=new ya(a=>/^[^:]*([/?#]|$)/.test(a));var Aa=w("http"),Ba=w("https"),Ca=w("ftp"),Da=w("mailto"),Ea=w("intent"),Ga=w("market"),Ha=w("itms"),Ia=w("itms-appss");const Ja=[w("data"),Aa,Ba,Da,Ca,za];function Ka(a,b=Ja){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof ya&&d.X(a))return new q(a,ka)}}function La(a,b=Ja){return Ka(a,b)||la};function Ma(){return u("iPhone")&&!u("iPod")&&!u("iPad")};function Na(a){Na[" "](a);return a}Na[" "]=function(){};var Oa=Ma(),Pa=u("iPad");var Qa=Ma()||u("iPod"),Ra=u("iPad");!u("Android")||va();va();u("Safari")&&(va()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?ua("Microsoft Edge"):u("Edg/"))||v()&&ua("Opera"));var Sa={},Ta=null;const x=Symbol();function y(a,b){if(x)return a[x]|=b;if(void 0!==a.g)return a.g|=b;Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function Ua(a){const b=z(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),B(a,b|1))}function Va(a){x?a[x]&&(a[x]&=-17):void 0!==a.g&&(a.g&=-17)}function z(a){let b;x?b=a[x]:b=a.g;return null==b?0:b}
function B(a,b){x?a[x]=b:void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}function Wa(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));B(a,b);return a}function Xa(a){y(a,1);return a}function C(a){return!!(z(a)&2)}function D(a){y(a,18);return a}function Ya(a){y(a,16);return a}function Za(a,b){B(b,(a|0)&-51)}function $a(a,b){B(b,(a|18)&-41)};var ab={};function bb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let cb;var E=Object.freeze(B([],23));class db{constructor(a){this.I=0;this.H=a}next(){return this.I<this.H.length?{done:!1,value:this.H[this.I++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};function eb(a,b,c,d){var e=!1;if(null!=a&&"object"===typeof a&&!(e=Array.isArray(a))&&a.u===ab)return a;if(!e)return c?d&2?(a=b[fb])?b=a:(a=new b,D(a.j),b=b[fb]=a):b=new b:b=void 0,b;e=c=z(a);0===e&&(e|=d&16);e|=d&2;e!==c&&B(a,e);return new b(a)}const fb=Symbol();function gb(a){return a}function ib(a,b,c){return"string"===typeof a?a:c?"":void 0};function jb(a,b=kb){const c=Array.from(a.g.keys());for(let d=0;d<c.length;d++){const e=c[d],f=a.g.get(c[d]);c[d]=[b(e),b(f)]}return c}function qb(a,b=kb){const c=[];a=a.g.entries();for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
var F=class{constructor(a,b,c=gb,d=gb){let e=z(a);e|=32;B(a,e);this.i=e;this.h=b;this.l=c||gb;this.m=this.h?rb:d||gb;const f=new Map;this.g=f;for(let g=0;g<a.length;g++){const h=a[g],l=c(h[0],!1,!0);let k=h[1];b||(k=d(h[1],!1,!0,void 0,void 0,e));null!=l&&f.set(l,k)}this.size=f.size}entries(){const a=Array.from(this.g.keys());for(let b=0;b<a.length;b++){const c=a[b];a[b]=[c,this.get(c)]}return new db(a)}keys(){return this.g.keys()}values(){const a=Array.from(this.g.keys());for(let b=0;b<a.length;b++)a[b]=
this.get(a[b]);return new db(a)}forEach(a,b){this.g.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){if(this.i&2)throw Error("Cannot mutate an immutable Map");const c=this.g;a=this.l(a,!0,!1);if(null==a)return this;if(null==b)return c.delete(a),this;c.set(a,this.m(b,!0,!0,this.h,!1,this.i));this.size=c.size;return this}get(a){a=this.l(a,!1,!1);const b=this.g,c=b.get(a);if(void 0!==c){var d=this.i,e=this.h;return e?(Array.isArray(c)&&d&16&&Ya(c),d=this.m(c,!1,!0,e,this.o,d),d!==c&&b.set(a,d),
d):c}}has(a){return this.h?null!=this.get(a):this.g.has(a)}[Symbol.iterator](){return this.entries()}};function rb(a,b,c,d,e,f){a=eb(a,d,c,f);e&&(a=sb(a));return a}function kb(a){return a};function G(a,b,c){return-1===b?null:b>=a.h?a.g?a.g[b]:void 0:c&&a.g&&(c=a.g[b],null!=c)?c:a.j[b+-1]}function I(a,b,c){if(z(a.j)&2)throw Error();return J(a,b,c)}function J(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return d=a.h+-1,(a.g||(a.g=a.j[d]={}))[b]=c,a;a.j[b+-1]=c;(c=a.g)&&b in c&&delete c[b];return a}function tb(a,b,c){a=G(a,b);Array.isArray(a)||(a=E);b=z(a);b&1||Xa(a);c?b&2||D(a):b&16&&!(b&2)&&Va(a);return a}let ub;
function vb(a,b,c,d,e){const f=C(a.j);a:{var g=b;b=!1;if(null==g){if(f){a=ub||(ub=new F(D([])));break a}g=[]}else if(g.constructor===F){if(0==(g.i&2)||f){a=g;break a}g=qb(g)}else Array.isArray(g)?b=C(g):g=[];if(f){if(!g.length){a=ub||(ub=new F(D([])));break a}b||(b=!0,D(g))}else if(b){b=!1;g=Array.prototype.slice.call(g);for(let h=0;h<g.length;h++){const l=g[h]=Array.prototype.slice.call(g[h]);Array.isArray(l[1])&&(l[1]=D(l[1]))}}b||(z(g)&32?Va(g):z(a.j)&16&&Ya(g));e=new F(g,d,ib,e);J(a,c,e,!1);a=
e}if(null==a)return a;!f&&d&&(a.o=!0);return a}function wb(a,b){return vb(a,G(a,b),b,void 0,ib)}function K(a,b,c){const d=G(a,c,!1);b=eb(d,b,!1,z(a.j));b!==d&&null!=b&&J(a,c,b,!1);return b}function L(a,b,c){b=K(a,b,c);if(null==b)return b;if(!C(a.j)){const d=sb(b);d!==b&&(b=d,J(a,c,b,!1))}return b}
function xb(a){var b=z(a.j),c=!!(b&2);var d=c?1:2,e=yb,f=!!(b&2),g=tb(a,7,f);if(g!==E&&z(g)&4)3===d||f||(f=Object.isFrozen(g),1===d?f||Object.freeze(g):(d=z(g),e=d&-19,f&&(g=Array.prototype.slice.call(g),d=0,J(a,7,g)),d!==e&&B(g,e))),a=g;else{var h=g;g=!!(b&2);var l=!!(z(h)&2);f=h;!g&&l&&(h=Array.prototype.slice.call(h));var k=b|(l?2:0);b=l;let n=l=0;for(;l<h.length;l++){const m=eb(h[l],e,!1,k);void 0!==m&&(b||(b=!!(2&z(m.j))),h[n++]=m)}n<l&&(h.length=n);e=h;h=z(e);k=h|5;b=b?k&-9:k|8;h!=b&&(e=Wa(e,
b));h=e;f!==h&&J(a,7,h);(g||1===d)&&Object.freeze(h);a=h}if(!(c||z(a)&8)){for(c=0;c<a.length;c++)d=a[c],g=sb(d),d!==g&&(a[c]=g);y(a,8)}return a}function zb(a,b){a:if(a=G(a,b),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return a}function O(a,b,c){return I(a,b,null==c?c:!!c)}
function Ab(a,b){{const c=C(a.j);let d=tb(a,b,c),e=z(d);if(!(e&4)){Object.isFrozen(d)&&(d=Xa(d.slice()),J(a,b,d));let f=0,g=0;for(;f<d.length;f++){const h=d[f];null!=h&&(d[g++]=h)}g<f&&(d.length=g);e|=5;c&&(e|=18);B(d,e);e&2&&Object.freeze(d)}!c&&(e&2||Object.isFrozen(d))&&(d=Array.prototype.slice.call(d),y(d,5),J(a,b,d));a=d}return a}function P(a,b){return null==a?b:a}function R(a,b){a=G(a,b);return P(null==a?a:!!a,!1)}function S(a,b){return P(G(a,b),"")}function T(a,b,c=0){return P(G(a,b),c)};let Bb;function Cb(a,b){return Db(b)}function Db(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof F)return jb(a)}}return a};function Eb(a,b){var c=Array.prototype.slice.call(a.j);const d=a.g;var e=c.length+(d?-1:0);let f=0;for(;f<e;f++)c[f]=b(c[f]);if(d){e=c[f]={};for(const g in d)e[g]=b(d[g])}b=a.constructor;Bb=c=Ya(c);c=new b(c);Bb=void 0;a.K&&(c.K=a.K.slice());return c}function Fb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&z(a)&1?void 0:f&&z(a)&2?a:Gb(a,b,c,void 0!==d,e,f);else if(bb(a)){const g={};for(let h in a)g[h]=Fb(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Gb(a,b,c,d,e,f){const g=d||c?z(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=Fb(a[h],b,c,d,e,f);c&&c(g,a);return a}function Hb(a){return Fb(a,Ib,void 0,void 0,!1,!1)}function Ib(a){return a.u===ab?a.toJSON():a instanceof F?jb(a,Hb):Db(a)};function Jb(a,b,c=$a){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=z(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return B(a,d|18),a;a=Gb(a,Jb,d&4?$a:c,!0,!1,!0);b=z(a);b&4&&b&2&&Object.freeze(a);return a}a.u===ab?C(a.j)||(a=Kb(a,!0),D(a.j)):a instanceof F&&(b=D(qb(a,Jb)),a=new F(b,a.h,a.l,a.m));return a}}function Kb(a,b){const c=b||C(a.j)?$a:Za,d=!!(z(a.j)&16);return Eb(a,e=>Jb(e,d,c))}
function sb(a){if(!C(a.j))return a;const b=Kb(a,!1);b.i=a;return b};function Lb(a){cb=!0;try{return JSON.stringify(a.toJSON(),Cb)}finally{cb=!1}}var U=class{constructor(a){null==a&&(a=Bb);Bb=void 0;if(null==a)a=[],B(a,48);else{if(!Array.isArray(a))throw Error();var b=y(a,0)|32;B(a,b)}this.j=a;a:{b=this.j.length;a=b-1;if(b&&(b=this.j[a],bb(b))){this.g=b;this.h=a- -1;break a}this.h=Number.MAX_VALUE}}toJSON(){if(cb)var a=Mb(this,this.j,!1);else a=Gb(this.j,Ib,void 0,void 0,!1,!1),a=Mb(this,a,!0);return a}};U.prototype.u=ab;
U.prototype.toString=function(){return Mb(this,this.j,!1).toString()};
function Mb(a,b,c){const d=a?a.constructor.A:void 0;var e=a.h;if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&bb(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;a=a.h;let l;for(f=0;f<d.length;f++)if(g=d[f],g<a){g+=-1;var h=e[g];null==h?e[g]=c?E:Xa([]):c&&h!==E&&Ua(h)}else{if(!l){let k;e.length&&bb(k=e[e.length-1])?l=k:e.push(l={})}h=l[g];null==l[g]?l[g]=c?E:Xa([]):c&&h!==E&&Ua(h)}}return b};var Nb=class extends U{constructor(){super()}};var Ob=class extends U{};var Pb=class extends U{};var yb=class extends U{s(){return S(this,3)}M(a){O(this,5,a)}};var V=class extends U{s(){return S(this,1)}M(a){O(this,2,a)}};var Qb=class extends U{};var Rb=class extends U{};Rb.A=[6,7];var Sb=class extends U{};Sb.A=[17];var Tb=class extends U{};var Ub=class extends U{constructor(){super()}};var Vb={capture:!0},Wb={passive:!0},Xb=wa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",null,b)}catch(b){}return a});function Yb(a){return a?a.passive&&Xb()?a:a.capture||!1:!1}function Zb(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Yb(d))};var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}var bc=/#|$/;
function cc(a,b){var c=a.search(bc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))};function dc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var ec=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let fc=[];const gc=()=>{const a=fc;fc=[];for(const b of a)try{b()}catch(c){}};
var hc=a=>{fc.push(a);1==fc.length&&(window.Promise?Promise.resolve().then(gc):window.setImmediate?setImmediate(gc):setTimeout(gc,0))},ic=a=>{var b=W;"complete"===b.readyState||"interactive"===b.readyState?hc(a):b.addEventListener("DOMContentLoaded",a)},jc=a=>{var b=window;"complete"===b.document.readyState?hc(a):b.addEventListener("load",a)};function kc(a=document){return a.createElement("img")};function lc(a,b,c=null,d=!1){qc(a,b,c,d)}function qc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=kc(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,Yb());e.removeEventListener&&e.removeEventListener("error",f,Yb())};Zb(e,"load",f);Zb(e,"error",f)}e.src=b;a.google_image_requests.push(e)}
function rc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):lc(a,b,void 0,!1)};let sc=0;function tc(a){return(a=uc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function uc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function vc(a){if(!(.01<Math.random())){const b=uc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${tc(a)}&sample=${.01}`;rc(window,a)}};var W=document,X=window;const wc=[Aa,Ba,Da,Ca,za,Ga,Ha,Ea,Ia];function xc(a,b){if(a instanceof q)return a;const c=La(a,wc);c===la&&b(a);return c}
var yc=a=>{var b=`${"http:"===X.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)ac(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var zc=a=>{var b=W;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Ac{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Bc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Cc=class{constructor(a,b){this.g=a;this.h=b}},Dc=class{constructor(a,b){this.url=a;this.L=!!b;this.depth=null}};function Ec(a,b){const c={};c[a]=b;return[c]}function Fc(a,b,c,d,e){const f=[];dc(a,function(g,h){(g=Gc(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}
function Gc(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Gc(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Fc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Hc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function Ic(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Hc(a)-b.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});b=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let l=0;l<h.length;l++){if(!d){b=null==b?g:b;break}let k=Fc(h[l],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;c+=k;e=a.i;break}b=null==b?g:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class Jc{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function Kc(){var a=Lc,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function Mc(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof Jc?f=c:(f=new Jc,dc(c,(h,l)=>{var k=f;const n=k.l++;h=Ec(l,h);k.g.push(n);k.h[n]=h}));const g=Ic(f,"/pagead/gen_204?id="+b+"&");g&&lc(p,g)}catch(f){}}class Nc{constructor(){this.g=Math.random()}};let Oc=null;function Pc(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Qc(){const a=p.performance;return a&&a.now?a.now():null};class Rc{constructor(a,b){var c=Qc()||Pc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const Y=p.performance,Sc=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),Tc=wa(()=>{var a;if(a=Sc){var b;if(null===Oc){Oc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Oc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Oc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Uc(a){a&&Y&&Tc()&&(Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Vc{constructor(){var a=window;this.h=[];this.i=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Tc()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Rc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Y&&Tc()&&Y.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(Qc()||Pc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Y&&Tc()&&Y.mark(b);!this.g||
2048<this.h.length||this.h.push(a)}}};function Wc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function Xc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{Uc(e),c=a.o(b,new Ac(f,{message:Wc(f)}),void 0,void 0)}catch(g){a.m(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function Yc(a,b){var c=Zc;return(...d)=>Xc(c,a,()=>b.apply(void 0,d))}
class $c{constructor(a=null){this.i=Lc;this.h=null;this.o=this.m;this.g=a;this.l=!1}pinger(){return this.i}m(a,b,c,d,e){e=e||"jserror";let f;try{const M=new Jc;var g=M;g.g.push(1);g.h[1]=Ec("context",a);b.error&&b.meta&&b.id||(b=new Ac(b,{message:Wc(b)}));if(b.msg){g=M;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=Ec("msg",h)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(H){}if(d)try{d(b)}catch(H){}d=M;l=[l];d.g.push(3);d.h[3]=l;d=p;l=[];let Fa;b=null;do{var k=d;try{var n;if(n=!!k&&null!=k.location.href)b:{try{Na(k.foo);
n=!0;break b}catch(H){}n=!1}var m=n}catch(H){m=!1}m?(Fa=k.location.href,b=k.document&&k.document.referrer||null):(Fa=b,b=null);l.push(new Dc(Fa||""));try{d=k.parent}catch(H){d=null}}while(d&&k!=d);for(let H=0,mc=l.length-1;H<=mc;++H)l[H].depth=mc-H;k=p;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(m=1;m<l.length;++m){var t=l[m];t.url||(t.url=k.location.ancestorOrigins[m-1]||"",t.L=!0)}var A=l;let lb=new Dc(p.location.href,!1);k=null;const nb=A.length-
1;for(t=nb;0<=t;--t){var N=A[t];!k&&Bc.test(N.url)&&(k=N);if(N.url&&!N.L){lb=N;break}}N=null;const td=A.length&&A[nb].url;0!=lb.depth&&td&&(N=A[nb]);f=new Cc(lb,N);if(f.h){A=M;var Q=f.h.url||"";A.g.push(4);A.h[4]=Ec("top",Q)}var ob={url:f.g.url||""};if(f.g.url){var pb=f.g.url.match($b),ea=pb[1],nc=pb[3],oc=pb[4];Q="";ea&&(Q+=ea+":");nc&&(Q+="//",Q+=nc,oc&&(Q+=":"+oc));var pc=Q}else pc="";ea=M;ob=[ob,{url:pc}];ea.g.push(5);ea.h[5]=ob;Mc(this.i,e,M,this.l,c)}catch(M){try{Mc(this.i,e,{context:"ecmserr",
rctx:a,msg:Wc(M),url:f&&f.g.url},this.l,c)}catch(Fa){}}return!0}};class ad{};let Lc,Zc;const Z=new Vc;var bd=()=>{window.google_measure_js_timing||(Z.g=!1,Z.h!=Z.i.google_js_reporting_queue&&(Tc()&&Array.prototype.forEach.call(Z.h,Uc,void 0),Z.h.length=0))};(a=>{Lc=null!=a?a:new Nc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Kc();Zc=new $c(Z);Zc.h=b=>{const c=sc;0!==c&&(b.jc=String(c),b.shv=tc(c))};Zc.l=!0;"complete"==window.document.readyState?bd():Z.g&&Zb(window,"load",()=>{bd()})})();
var cd=(a,b)=>Yc(a,b),dd=a=>{var b=ad;var c="J";b.J&&b.hasOwnProperty(c)||(c=new b,b.J=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());Mc(Lc,"gdn-asoch",a,!0)};function ed(a=window){return a};var fd=(a,b)=>{b=S(a,2)||b;if(!b)return"";if(R(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];wb(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},gd=(a,b=[])=>{b=0<b.length?b:zc("data-asoch-targets");a=vb(a,G(a,1),1,Rb);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f=
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Kb(f,!1).toJSON();g=g.toJSON();const l=Math.max(f.length,g.length);for(let k=0;k<l;++k)null==f[k]&&(f[k]=g[k]);f=new Rb(f)}e=wb(f,4);null!=G(f,5)&&e.set("nb",T(f,5,0).toString());c.push({element:b[h],data:f})}else dd({type:1,data:d})}return c},jd=(a,b,c,d)=>{c=fd(b,c);if(0!==c.length){if("2"===cc(c,"ase")&&1087!==d){const f=609===d;var e;const g=!(null==(e=W.featurePolicy)||!e.allowedFeatures().includes("attribution-reporting"));e=f?4:g?6:5;
let h="";f||g&&!hd(c)?(c=id(c,"nis",e.toString()),a.setAttribute("attributionsrc",h)):g&&hd(c)&&(h=id(ca(new fa({url:c})),"nis",e.toString()),a.setAttribute("attributionsrc",h))}xa(a,xc(c,yc(d)));a.target||(a.target=null!=G(b,11)?S(b,11):"_top")}},kd=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!R(a,1)){const c=b.element;jd(c,a,c.href,609)}},hd=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),ld=a=>{const b=p.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==K(a,Qb,8)){const d=
S(L(a,Qb,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,S(L(a,Qb,8),6));break}}},md=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&void 0!==K(a,V,12)&&(d.push(L(a,V,12)),c.push(L(a,V,12).s()));e=(f,g)=>{if(g)for(const h of d)g[h.s()]&&h.M(!0)};a=p.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},od=(a,b,c,d,e)=>{if(!b||void 0===K(b,Qb,8))return!1;const f=L(b,Qb,8);let g=S(f,2);wb(b,10).forEach((k,n)=>{var m=g;n=encodeURIComponent(n);const t=encodeURIComponent(k);
k=new RegExp("[?&]"+n+"=([^&]+)");const A=k.exec(m);console.log(A);n=n+"="+t;g=A?m.replace(k,A[0].charAt(0)+n):m.replace("?","?"+n+"&")});nd(b)&&R(b,15)&&!/[?&]label=/.test(c)&&(c=id(c,"label","deep_link_fallback"));const h=k=>d.openStoreOverlay(k,void 0,S(f,6)),l=k=>rc(X,k);return d.redirectForStoreU2({clickUrl:c,trackingUrl:S(f,3),finalUrl:g,pingFunc:e&&!R(b,13)?l:d.click,openFunc:(null==a?0:R(a,1))?h:d.openIntentOrNativeApp,isExternalClickUrl:R(b,13)})},qd=(a,b,c,d,e,f,g,h=!1)=>{e=R(e,15);const l=
hd(f);!a||!b||e&&l||(f=h?pd(f):pd(f,g.click));f&&f.startsWith("intent:")?g.openIntentOrNativeApp(f):c?d?g.openBrowser(f):g.openChromeCustomTab(f):g.openSystemBrowser(f,{useFirstPackage:!0,useRunningProcess:!0})},pd=(a,b=null)=>{if(null!==b){const c=new fa({url:a});if(c.h&&c.i||c.m)return b(ca(c)),da(c,1)}else return{O:b}={},b=new fa({url:a,O:b}),b.h&&b.i||b.m?navigator.sendBeacon?navigator.sendBeacon(ca(b),"")?da(b,1):da(b,2):da(b,0):a;return a},rd=(a,b=!0)=>{b&&X.fetch?X.fetch(a,{method:"GET",keepalive:!0,
mode:"no-cors"}).then(c=>{c.ok||lc(X,a)}):lc(X,a)},id=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},nd=a=>{for(const b of xb(a))if(3===T(b,1,0)&&S(b,2))return!0;return!1};var sd=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var ud=class extends U{constructor(){super()}};function vd(a,b){return I(a,2,b)}function wd(a,b){return I(a,3,b)}function xd(a,b){return I(a,4,b)}function yd(a,b){return I(a,5,b)}function zd(a,b){return I(a,9,b)}function Ad(a,b){if(z(a.j)&2)throw Error();if(null!=b){var c=!!b.length;for(var d=0;d<b.length;d++){var e=b[d];c=c&&!C(e.j)}d=z(b);e=d|1;c=(c?e|8:e&-9)|4;c!=d&&(b=Wa(b,c))}null==b&&(b=E);return J(a,10,b)}function Bd(a,b){return O(a,11,b)}function Cd(a,b){return I(a,1,b)}function Dd(a,b){return O(a,7,b)}var Ed=class extends U{constructor(){super()}};
Ed.A=[10,6];const Fd="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Gd(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function Hd(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Id(){var a=window;if(!Hd(a))return null;const b=Gd(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Fd).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function Jd(a){let b;return Bd(Ad(yd(vd(Cd(xd(Dd(zd(wd(new Ed,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new ud;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}function Kd(){let a,b;return null!=(b=null==(a=Id())?void 0:a.then(c=>Jd(c)))?b:null};function Ld(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==G(c,2)&&I(c,2,a.href)}}function Md(a,b){return ma(a,c=>c.element===b)}function Nd(a){ic(cd(556,()=>{new Od(a||{})}))}
function Pd(a,b,c,d){if(!R(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(xa(c,xc(e[0],yc(557)));!c.id;)if(f="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),!W.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,W.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===
typeof window.ja&&window.ja(f,d?T(d,5,0):0);"function"===typeof window.vti&&window.vti(f);a.i&&"function"===typeof window.ss&&(a.F?window.ss(f,1,a.i):window.ss(a.i,1));0<e.length&&(a=0<a.m.length&&(null==d||null==G(d,19))?c.href+"&uach="+encodeURIComponent(a.m)+e[1]:c.href+e[1],xa(c,xc(a,yc(557))))}}
async function Qd(a,b,c,d){let e="";var f=p.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.P)){if(a.S)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=id(e,"nas",f.encodedNas)}}Rd(a,b,c,d,e)}
function Rd(a,b,c,d,e){const f=R(a.h,2),g=f&&300<Date.now()-a.D,h=p.oneAfmaInstance;h?(ec(b),(()=>{let l=R(d,13)?e:h.logScionEventAndAddParam(e);if(!a.o&&d&&void 0!==K(d,V,12)){var k=L(d,V,12).s();if(0<xb(d).length)for(const n of xb(d));R(L(d,V,12),2)?(h.click(l),h.openAndroidApp(k),k=!0):k=!1}else k=!1;k||od(a.l,d,l,h,a.T)||qd(f,g,a.V,a.o,d,l,h,a.U)})()):(b=window,a.R&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):g&&(b=null!=c.getAttribute("attributionsrc")&&"6"===cc(c.getAttribute("attributionsrc"),
"nis")?pd(c.href,()=>{}):pd(c.href),b!==c.href&&xa(c,xc(b,yc(599)))));g&&(a.D=Date.now());vc(a.C)}
var Od=class{constructor(a){this.o=Qa||Oa||Ra||Pa;var b=zc("data-asoch-meta");if(1!==b.length)dd({type:2,data:b.length});else{this.C=70;this.h=new Sb(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.N=a["extra-meta"]?new Sb(JSON.parse(a["extra-meta"])):null;this.P="true"===a["is-fsn"];this.S="true"===a["is-tap-disabled-for-fsn"];this.l=a["ios-store-overlay-config"]?new Tb(JSON.parse(a["ios-store-overlay-config"])):null;this.V="true"===a["use-cct-over-browser"];this.T="true"===a["send-ac-click-ping-by-js"];
this.G="true"===a["correct-redirect-url-for-och-15-click"];this.U="true"===a["send-click-ping-by-js-in-och"];this.R="true"===a["enable-paw"];this.m="";b=Kd();null!=b&&b.then(d=>{var e=Lb(d);d=[];for(var f=0,g=0;g<e.length;g++){var h=e.charCodeAt(g);255<h&&(d[f++]=h&255,h>>=8);d[f++]=h}e=3;void 0===e&&(e=0);if(!Ta)for(Ta={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var l=f.concat(g[h].split(""));Sa[h]=l;for(var k=0;k<l.length;k++){var n=
l[k];void 0===Ta[n]&&(Ta[n]=k)}}e=Sa[e];f=Array(Math.floor(d.length/3));g=e[64]||"";for(h=l=0;l<d.length-2;l+=3){var m=d[l],t=d[l+1];n=d[l+2];k=e[m>>2];m=e[(m&3)<<4|t>>4];t=e[(t&15)<<2|n>>6];n=e[n&63];f[h++]=k+m+t+n}k=0;n=g;switch(d.length-l){case 2:k=d[l+1],n=e[(k&15)<<2]||g;case 1:d=d[l],f[h]=e[d>>2]+e[(d&3)<<4|k>>4]+n+g}this.m=f.join("")});this.g=gd(this.h);this.W=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.D=-Infinity;this.i=S(this.h,5)||"";this.F=R(this.h,11);this.N&&(this.F=
R(this.N,11));this.B=this.v=null;R(this.h,3)||(kd(this.g),O(this.h,3,!0));Ld(this.g);a=p.oneAfmaInstance;!this.o&&a&&md(this.g,this.W);var c;if(a&&(null==(c=this.l)?0:R(c,2)))switch(c=()=>{const d=P(zb(this.l,4),0);0<d?p.setTimeout(()=>{ld(this.g)},d):ld(this.g)},T(this.l,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:jc(c);break;default:ld(this.g)}Zb(W,"click",cd(557,d=>{a:if(!d.defaultPrevented||this.v===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets"),
l=g.hasAttribute("data-asoch-fixed-value");if(!e)if(l)e=new Rb(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?gd(this.h,[g]):this.g,h=Md(h,g))e=h.data;g=g.parentElement}if(g=e&&!R(e,1)){if(d.defaultPrevented){var k=f,n=e;if(this.v===d&&this.B){f=new Pb(this.B);e=S(n,9);var m="";switch(T(f,4,1)){case 2:if(P(zb(f,2),0))m="blocked_fast_click";else if(S(f,1)||S(f,7))m="blocked_border_click";break;case 3:m=W,
m=m.getElementById?m.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&m&&(n=Kb(n,!1),I(n,5,12),wb(n,4).set("nb",(12).toString()),(g=Md(this.g,m))?g.data=n:this.g.push({element:m,data:n}),!this.G&&k&&(Pd(this,d,k,n),I(n,2,k.href)),window.copfcChm(d,fd(n,m.href),null,void 0!==K(f,Ob,10)?Lb(L(f,Ob,10)):null),this.G&&Pd(this,d,m,n)),m="onepointfiveclick_first_click"}e&&m&&rd(e+"&label="+m,!1);vc(this.C)}break a}h=e;for(m of Ab(h,6))rd(m)}if(f&&g){e=g?e:null;(m=Md(this.g,
f))?m=m.data:(m=new Rb,I(m,2,f.href),I(m,11,f.target||"_top"),this.g.push({element:f,data:m}));jd(f,e||m,S(m,2),557);Pd(this,d,f,e);for(n of Ab(this.h,17))m=n,g=W.body,h={},"function"===typeof window.CustomEvent?l=new CustomEvent(m,h):(l=document.createEvent("CustomEvent"),l.initCustomEvent(m,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(l);if(null==e?0:null!=G(e,19)){n=new Nb;I(n,1,T(e,5,0));m=sd(f.href,"nx");""!=m&&I(n,2,+m);m=sd(f.href,"ny");""!=m&&I(n,3,+m);m=sd(f.href,"bg");""!=m&&I(n,
4,m);m=sd(f.href,"nm");""!=m&&I(n,5,+m);m=sd(f.href,"mb");""!=m&&I(n,6,+m);m=S(e,19);g=null!=zb(e,20)?P(zb(e,20),0):null;n=Lb(n);h=this.m;l=ed(p);const t=new Ub;I(t,1,m);null!==g&&I(t,2,g);null!==h&&I(t,3,h);I(t,4,n);null==l||null==(k=l.fence)||k.reportEvent({eventType:"click",eventData:JSON.stringify(t),destination:["buyer"]})}R(this.h,16)||this.P?Qd(this,d,f,e):(k="",(n=p.oneAfmaInstance)&&(k=n.appendClickSignals(f.href)),Rd(this,d,f,e,k))}}}),Vb);this.i&&"function"===typeof window.ss&&Zb(W.body,
"mouseover",cd(626,()=>{window.ss(this.i,0)}),Wb);"function"===typeof window.ivti&&window.ivti(window);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,e)=>{this.v=d;this.B=e})}}};var Sd=cd(555,a=>Nd(a));sc=70;const Td=uc(70,document.currentScript);if(null==Td)throw Error("JSC not found 70");const Ud={},Vd=Td.attributes;for(let a=Vd.length-1;0<=a;a--){const b=Vd[a].name;0===b.indexOf("data-jcp-")&&(Ud[b.substring(9)]=Vd[a].value)}Sd(Ud);}).call(this);
