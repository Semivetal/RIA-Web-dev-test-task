parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JFpC":[function(require,module,exports) {
module.exports=[{name:"Alex",know:["Jhon"]},{name:"Jhon",know:[]},{name:"Eva",know:["Alex","Jhon"]},{name:"Ivan",know:["Jhon","Eva"]}];
},{}],"WFgn":[function(require,module,exports) {
module.exports=function(n){const e=function(n){let e=n.length,t="",r=0,o=1,i=[];for(let l=0;l<e;l++){let e=n[l];t=e.name,n.forEach(n=>{n.know.find(function(n){return n===t})==t&&r++});let o={increment:r,i:l,name:t};i.push(o),r=0}i.sort((n,e)=>e.increment-n.increment);let c="";return i[0].name==n[i[0].i].know[0]&&(o=2),i[0].increment>=e-o&&(c=i[0].name),c}(n);e||alert(""),e&&alert(`${e}`)};
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={scanBtn:document.querySelector(".button-scan"),sectionStyle:document.querySelector(".section-style"),titleStyle:document.querySelector(".title-style")};exports.refs=e;
},{}],"clu1":[function(require,module,exports) {

},{}],"S3PC":[function(require,module,exports) {
"use strict";var e=t(require("./src/peopleArray.json")),r=t(require("./src/js/narcissus")),s=require("./src/js/refs");function t(e){return e&&e.__esModule?e:{default:e}}function a(s){s.preventDefault(),"BUTTON"===s.target.nodeName&&"BUTTON"===s.target.nodeName&&(0,r.default)(e.default)}require("./src/sass/main.scss"),s.refs.scanBtn.addEventListener("click",a);
},{"./src/peopleArray.json":"JFpC","./src/js/narcissus":"WFgn","./src/js/refs":"VyiV","./src/sass/main.scss":"clu1"}]},{},["S3PC"], null)
//# sourceMappingURL=/RIA-Web-dev-test-task/RIA-Web-dev-test-task.52e4bc5a.js.map