parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JFpC":[function(require,module,exports) {
module.exports=[{name:"Alex",know:["Jhon"]},{name:"Jhon",know:[]},{name:"Eva",know:["Alex","Jhon"]},{name:"Ivan",know:["Jhon","Eva"]}];
},{}],"WFgn":[function(require,module,exports) {
module.exports=function(e){const t=e.filter(({name:t,know:n})=>!n.length&&e.filter(({know:n})=>n.some(e=>e===t).length===e.length-1)).map(e=>e.name).toString();t||alert(""),t&&alert(`${t}`)};
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={scanBtn:document.querySelector(".button-scan"),sectionStyle:document.querySelector(".section-style"),titleStyle:document.querySelector(".title-style")};exports.refs=e;
},{}],"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./peopleArray.json")),r=t(require("./js/narcissus")),s=require("./js/refs");function t(e){return e&&e.__esModule?e:{default:e}}function a(s){s.preventDefault(),"BUTTON"===s.target.nodeName&&"BUTTON"===s.target.nodeName&&(0,r.default)(e.default)}require("./sass/main.scss"),s.refs.scanBtn.addEventListener("click",a);
},{"./peopleArray.json":"JFpC","./js/narcissus":"WFgn","./js/refs":"VyiV","./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/RIA-Web-dev-test-task/src.21634117.js.map