parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/poppins-v15-devanagari-regular.eot":[["poppins-v15-devanagari-regular.eb406b21.eot","E73Q"],"E73Q"],"./../fonts/poppins-v15-devanagari-regular.woff2":[["poppins-v15-devanagari-regular.1e3eda40.woff2","Cxz5"],"Cxz5"],"./../fonts/poppins-v15-devanagari-regular.woff":[["poppins-v15-devanagari-regular.2a62ee0e.woff","mV7n"],"mV7n"],"./../fonts/poppins-v15-devanagari-regular.ttf":[["poppins-v15-devanagari-regular.97697beb.ttf","hOTw"],"hOTw"],"./../fonts/poppins-v15-devanagari-regular.svg":[["poppins-v15-devanagari-regular.7f044cd6.svg","yFPh"],"yFPh"],"./../fonts/poppins-v15-devanagari-700.eot":[["poppins-v15-devanagari-700.5e29c706.eot","NcxT"],"NcxT"],"./../fonts/poppins-v15-devanagari-700.woff2":[["poppins-v15-devanagari-700.3e15f961.woff2","pGNZ"],"pGNZ"],"./../fonts/poppins-v15-devanagari-700.woff":[["poppins-v15-devanagari-700.acdbf56a.woff","Qu53"],"Qu53"],"./../fonts/poppins-v15-devanagari-700.ttf":[["poppins-v15-devanagari-700.695bbdda.ttf","qVTC"],"qVTC"],"./../fonts/poppins-v15-devanagari-700.svg":[["poppins-v15-devanagari-700.39e09f5d.svg","JyQ3"],"JyQ3"]}],"w7zl":[function(require,module,exports) {
const e=document.querySelector(".btn__burger"),t=document.querySelector(".navigation__menu");function n(n){n.preventDefault(),e.classList.toggle("is-open"),t.classList.toggle("is-open")}e.addEventListener("click",n);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/burger-menu");
},{"./sass/main.scss":"clu1","./js/burger-menu":"w7zl"}]},{},["Focm"], null)
//# sourceMappingURL=/Vanilla-Bakery/src.8b5fa8b6.js.map