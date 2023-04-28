/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #353b3c;\n    --gray: #76949f;\n    --rose: #B5838D;\n    --cream: #F8F2DC;\n    --white: #FFFFFF;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--white);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.new-task-form,\n.new-project-form {\n    padding: 5px;\n    position: fixed;\n    top: 0;\n    left: 50%;\n    width: 300px;\n    display: none;\n}\n\n.new-task-form.active,\n.new-project-form.active {\n    padding: 5px;\n    position: fixed;\n    top: 20%;\n    left: 50%;\n    width: 300px;\n    display: block;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 10px;\n}\n\nfieldset > .form-btns {\n    text-align: center;\n}\n\nheader {\n    border-bottom: 1px solid var(--black);\n    color: var(--black);\n    display: flex;\n    align-items: center;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 10px;\n    background-color: var(--white);\n    padding-left: 20px;\n}\n\n.main-container {\n    display: flex;\n    height: 100%;\n}\n\n.sidebar {\n    background-color: var(--white);\n    border-right: 1px solid var(--black);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 30%;\n    min-width: 350px;\n}\n\n.app-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header-logo {\n    color: var(--black);\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n}\n\n.header-selection {\n    font-weight: lighter;\n    color: var(--gray);\n    margin: 10px;\n}\n\n.icon-add,\n.icon-new,\n.icon-delete {\n    transition: 250ms;\n    width: 20px;\n    height: 20px;\n    margin: 10px;\n}\n\n.icon-add:hover,\n.icon-new:hover,\n.icon-delete:hover {\n    color: red;\n    cursor: pointer;\n    width: 25px;\n    height: 25px;\n}\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid var(--black);\n    padding: 20px;\n    padding-bottom: 30px;\n    gap: 20px;\n}\n\n.projects-container {\n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n}\n\n.projects-options {\n    display: flex;\n    flex-grow: 0;\n    flex-shrink: 0;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid var(--black);\n    padding-bottom: 5px;\n    margin-bottom: 10px;\n}\n\n.project {\n    padding: 0px 15px;\n    margin: 5px;\n    border: 1px solid var(--gray);\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: var(--cream);\n}\n\n.project.active {\n    background-color: var(--rose);\n}\n\n.task-button {\n    font-size: 1.5em;\n    background-color: var(--white);\n    color: var(--black);\n    border: none;\n    border-right: 1px solid var(--black);\n    border-bottom: 1px solid var(--black);\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.task-button:hover {\n    border: none;\n    border-top: 1px solid var(--black);\n    border-left: 1px solid var(--black);\n    box-shadow: inset rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    cursor: pointer;\n}\n\n.app-grid {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    gap: 10px;\n    padding: 15px;\n}\n\n.task-container {\n    display: flex;\n    justify-content:space-between;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    border: 1px solid var(--black);\n    border-radius: 10px;\n    background-color: var(--cream);\n    color: var(--black);\n    width: 500px;\n    padding: 15px;\n}\n\n.task-checkbox {\n    padding: 5px;\n}\n\n.task-title {\n    font-weight: bold;\n    padding: 0px 15px;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    margin-top: auto;\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,qHAAqH;IACrH,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,eAAe;IACf,MAAM;IACN,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,eAAe;IACf,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,8CAA8C;IAC9C,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;;IAGI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;;;IAGI,UAAU;IACV,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qCAAqC;IACrC,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,oCAAoC;IACpC,qCAAqC;IACrC,iDAAiD;IACjD,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kCAAkC;IAClC,mCAAmC;IACnC,uDAAuD;IACvD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,iDAAiD;IACjD,8BAA8B;IAC9B,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf","sourcesContent":[":root {\n    --black: #353b3c;\n    --gray: #76949f;\n    --rose: #B5838D;\n    --cream: #F8F2DC;\n    --white: #FFFFFF;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--white);\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.new-task-form,\n.new-project-form {\n    padding: 5px;\n    position: fixed;\n    top: 0;\n    left: 50%;\n    width: 300px;\n    display: none;\n}\n\n.new-task-form.active,\n.new-project-form.active {\n    padding: 5px;\n    position: fixed;\n    top: 20%;\n    left: 50%;\n    width: 300px;\n    display: block;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 10px;\n}\n\nfieldset > .form-btns {\n    text-align: center;\n}\n\nheader {\n    border-bottom: 1px solid var(--black);\n    color: var(--black);\n    display: flex;\n    align-items: center;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 10px;\n    background-color: var(--white);\n    padding-left: 20px;\n}\n\n.main-container {\n    display: flex;\n    height: 100%;\n}\n\n.sidebar {\n    background-color: var(--white);\n    border-right: 1px solid var(--black);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 30%;\n    min-width: 350px;\n}\n\n.app-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header-logo {\n    color: var(--black);\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n}\n\n.header-selection {\n    font-weight: lighter;\n    color: var(--gray);\n    margin: 10px;\n}\n\n.icon-add,\n.icon-new,\n.icon-delete {\n    transition: 250ms;\n    width: 20px;\n    height: 20px;\n    margin: 10px;\n}\n\n.icon-add:hover,\n.icon-new:hover,\n.icon-delete:hover {\n    color: red;\n    cursor: pointer;\n    width: 25px;\n    height: 25px;\n}\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid var(--black);\n    padding: 20px;\n    padding-bottom: 30px;\n    gap: 20px;\n}\n\n.projects-container {\n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n}\n\n.projects-options {\n    display: flex;\n    flex-grow: 0;\n    flex-shrink: 0;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid var(--black);\n    padding-bottom: 5px;\n    margin-bottom: 10px;\n}\n\n.project {\n    padding: 0px 15px;\n    margin: 5px;\n    border: 1px solid var(--gray);\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: var(--cream);\n}\n\n.project.active {\n    background-color: var(--rose);\n}\n\n.task-button {\n    font-size: 1.5em;\n    background-color: var(--white);\n    color: var(--black);\n    border: none;\n    border-right: 1px solid var(--black);\n    border-bottom: 1px solid var(--black);\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.task-button:hover {\n    border: none;\n    border-top: 1px solid var(--black);\n    border-left: 1px solid var(--black);\n    box-shadow: inset rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    cursor: pointer;\n}\n\n.app-grid {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    gap: 10px;\n    padding: 15px;\n}\n\n.task-container {\n    display: flex;\n    justify-content:space-between;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    border: 1px solid var(--black);\n    border-radius: 10px;\n    background-color: var(--cream);\n    color: var(--black);\n    width: 500px;\n    padding: 15px;\n}\n\n.task-checkbox {\n    padding: 5px;\n}\n\n.task-title {\n    font-weight: bold;\n    padding: 0px 15px;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    margin-top: auto;\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProjectIconSVG": () => (/* binding */ deleteProjectIconSVG),
/* harmony export */   "newProjectIconSVG": () => (/* binding */ newProjectIconSVG)
/* harmony export */ });
function newProjectIconSVG() {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const iconPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconSvg.classList.add("icon-new");
  iconSvg.setAttribute("viewBox", "0 0 512 512");
  iconPath1.setAttribute(
    "d",
    "M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
    );
  iconPath1.setAttribute("fill", "none");
  iconPath1.setAttribute("stroke", "currentColor");
  iconPath1.setAttribute("stroke-linecap", "round");
  iconPath1.setAttribute("stroke-linejoin", "round");
  iconPath1.setAttribute("stroke-width", "32");
  iconPath2.setAttribute(
    "d",
    "M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
    );
  iconSvg.appendChild(iconPath1);
  iconSvg.appendChild(iconPath2);
  return iconSvg;
};

function deleteProjectIconSVG() {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  const iconPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  const iconPath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  iconSvg.classList.add("icon-delete");
  iconSvg.setAttribute("viewBox", "0 0 512 512");
  iconPath1.setAttribute(
    "d",
    "M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
    );
  iconPath1.setAttribute("fill", "none");
  iconPath1.setAttribute("stroke", "currentColor");
  iconPath1.setAttribute("stroke-linecap", "round");
  iconPath1.setAttribute("stroke-linejoin", "round");
  iconPath1.setAttribute("stroke-width", "32");
  iconPath2.setAttribute("stroke", "currentColor");
  iconPath2.setAttribute("stroke-linecap", "round");
  iconPath2.setAttribute("stroke-miterlimit", "10");
  iconPath2.setAttribute("stroke-width", "32");
  iconPath2.setAttribute("d","M80 112h352");
  iconPath3.setAttribute(
    "d",
    "M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
    );
  iconPath3.setAttribute("fill", "none");
  iconPath3.setAttribute("stroke", "currentColor");
  iconPath3.setAttribute("stroke-linecap", "round");
  iconPath3.setAttribute("stroke-linejoin", "round");
  iconPath3.setAttribute("stroke-width", "32");
  iconSvg.appendChild(iconPath1);
  iconSvg.appendChild(iconPath2);
  iconSvg.appendChild(iconPath3);
  return iconSvg;
};

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
    this.active = true;
  }

  getId() {
    return this.id;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  createNewTask(id, title, priority, dueDate) {
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](id, title, priority, dueDate);
    this.addTask(task);
    return task;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    if (this.tasks) {
      return this.tasks;
    }
    return false;
  }

  setActive() {
    this.active = true;
  }

  setInactive() {
    this.active = false;
  }
}


/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  projects: [],
  activeProjectID: null,

  createNewProject(title, id) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title, id);
    this.projects.push(project);
    return project;
  },

  getProjects() {
    return this.projects;
  },

  removeProject(project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
  },

  setActiveProject(id) {
    this.projects.forEach((project) => {
      if (project.id !== id) {
        project.setInactive();
      } else {
        project.setActive();
        this.activeProjectID = id;
      }
    });
  },

  deleteProjectById(id) {
    this.projects.forEach((project) => {
      if (project.id === id) {
        this.removeProject(project);
      }
    });
  },

  returnActiveProject() {
    if (this.projects && this.activeProjectID) {
      return this.projects.find(
        (project) => project.id === this.activeProjectID
      );
    }
    return false;
  },

  loadProjects(projectsArray) {
    projectsArray.forEach((project) => {
      this.projects.push(project);
    });
  },
});


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  #priorityList = ["low", "medium", "high"];

  constructor(id, title, priority, dueDate, complete = false) {
    this.id = id;
    this.title = title;
    this.description = null;
    this.priority = this.setPriority(priority);
    this.complete = complete;
    this.dueDate = dueDate;
  }

  getId() {
    return this.id;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setPriority(priority) {
    if (this.#priorityList.includes(priority)) {
      return priority;
    }
    return null;
  }

  getPriority() {
    if (this.priority) {
      return this.priority;
    }
    return false;
  }

  toggleStatus() {
    this.complete = this.complete === false;
  }

  getStatus() {
    return this.complete;
  }

  getTasks = [];
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler */ "./src/projectHandler.js");




const projectHandler = _projectHandler__WEBPACK_IMPORTED_MODULE_2__["default"];

const DomRender = () => {
  const appGrid = document.querySelector(".app-grid");
  const clearAppGrid = () => {
    while (appGrid.firstChild) {
      const child = appGrid.firstChild;
      appGrid.removeChild(child);
    }
  };

  const buildTaskDiv = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");
    const taskComplete = document.createElement("input");
    taskComplete.classList.add("task-checkbox");
    taskComplete.id = `checkbox-${task.id}`;
    taskComplete.setAttribute("type", "checkbox");

    if (task.complete) {
      taskComplete.checked = true;
    } else {
      taskComplete.checked = false;
    }

    taskDiv.appendChild(taskComplete);

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = `${task.title}`;
    taskDiv.appendChild(taskTitle);

    const taskPriority = document.createElement("div");
    taskPriority.classList.add("task-priority");
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskDiv.appendChild(taskPriority);

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task-duedate");
    taskDueDate.textContent = `Due: ${task.dueDate}`;
    taskDiv.appendChild(taskDueDate);

    appGrid.appendChild(taskDiv);
  };

  // New Project Form
  const newProjectForm = document.querySelector(".new-project-form");
  const toggleNewProjectForm = () => {
    newProjectForm.classList.toggle("active");
  };

  // New Task Form
  const newTaskForm = document.querySelector(".new-task-form");

  const toggleNewTaskForm = () => {
    newTaskForm.classList.toggle("active");
  };

  // Project Bar
  const projectsGrid = document.querySelector(".project-grid");
  const buildProjectButton = (project) => {
    console.log(project);
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.id = project.getId();
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${project.title}`;
    projectDiv.appendChild(projectTitle);
    const buttonsDiv = document.createElement("div");
    const newIcon = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.newProjectIconSVG)();
    newIcon.id = project.id;
    const deleteIcon = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.deleteProjectIconSVG)();
    deleteIcon.id = project.id;

    // Select Project
    projectDiv.addEventListener("click", (event) => {
      // Checks project isn't already 'active'
      if (!projectDiv.classList.contains("active")) {
        // Sets all other projects to 'inactive'
        document.querySelectorAll(".project").forEach((node) => {
          node.classList.remove("active");
        });
        projectDiv.classList.toggle("active");
        projectHandler.setActiveProject(event.target.id);
        // TO DO: Render Tasks
        clearAppGrid();
        const currentProject = projectHandler.returnActiveProject();
        const tasks = currentProject.getTasks();
        if (tasks) {
          tasks.forEach((task) => buildTaskDiv(task));
        }
      }
    });

    // Create new task
    newIcon.addEventListener("click", (event) => {
      // project id
      console.log(event.target.id);
      // TO DO - New Task
      toggleNewTaskForm();
    });

    // Delete Project
    deleteIcon.addEventListener("click", (event) => {
      projectHandler.deleteProjectById(event.target.id);
      projectsGrid.removeChild(projectDiv);
      clearAppGrid();
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
    });

    buttonsDiv.appendChild(newIcon);
    buttonsDiv.appendChild(deleteIcon);
    projectDiv.appendChild(buttonsDiv);
    projectsGrid.appendChild(projectDiv);
  };

  return {
    toggleNewProjectForm,
    toggleNewTaskForm,
    buildProjectButton,
    buildTaskDiv,
  };
};

const DomElements = () => {
  const domRender = DomRender();

  const localProjects = JSON.parse(localStorage.getItem("Projects"));
  if (localProjects) {
    localProjects.forEach((project) => {
      const thisProject = projectHandler.createNewProject(
        project.title,
        project.id
      );

      if (project.tasks) {
        project.tasks.forEach((task) => {
          const newTask = thisProject.createNewTask(
            task.id,
            task.title,
            task.priority,
            task.dueDate
          );
          newTask.setDescription(task.description);
        });
      }
      domRender.buildProjectButton(thisProject);
    });
  }
  // })
  //     }
  //
  //   });
  // }

  // Task Options
  const allBtn = document.getElementById("allBtn");
  const todayBtn = document.getElementById("todayBtn");
  const weekBtn = document.getElementById("weekBtn");
  const importantBtn = document.getElementById("importantBtn");
  const completedBtn = document.getElementById("completedBtn");
  const newProjectCancelBtn = document.getElementById(
    "new-project-form-cancel"
  );
  const newProjectSaveBtn = document.getElementById("new-project-form-save");
  const newTaskCancelBtn = document.getElementById("new-task-form-cancel");
  const newTaskSaveBtn = document.getElementById("new-task-form-save");

  // Project Options
  const newProjectBtn = document.getElementById("newProjectBtn");
  const projectTitle = document.getElementById("projectTitle");

  // Task Form
  const taskTitle = document.getElementById("tasktitle");
  const taskDescription = document.getElementById("taskdescription");
  const taskPriority = document.getElementById("taskpriority");
  const taskDueDate = document.getElementById("taskduedate");

  const clearTaskForm = () => {
    taskTitle.value = "";
    taskDescription.value = "";
    taskPriority.value = "";
    taskDueDate.value = "";
  };

  const addEventListeners = () => {
    // Task Bar Buttons
    allBtn.addEventListener("click", () => {
      console.log("ALL TASKS");
    });
    todayBtn.addEventListener("click", () => {
      console.log("TODAY'S TASKS");
    });
    weekBtn.addEventListener("click", () => {
      console.log("THIS WEEK'S TASKS");
    });
    importantBtn.addEventListener("click", () => {
      console.log("IMPORTANT TASKS");
    });
    completedBtn.addEventListener("click", () => {
      console.log("COMPLETED TASKS");
    });
    // New Project Buttons
    newProjectBtn.addEventListener("click", () => {
      domRender.toggleNewProjectForm();
    });
    newProjectCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      projectTitle.value = "";
      domRender.toggleNewProjectForm();
    });
    // create new project
    newProjectSaveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const title = projectTitle.value;
      projectTitle.value = "";
      domRender.toggleNewProjectForm();
      const id = `project-${title.replace(/\s/g, "").trim().toLowerCase()}`;
      const project = projectHandler.createNewProject(title, id);
      domRender.buildProjectButton(project);
      console.log(id);
      console.log(JSON.stringify(project));
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
    });
    // New Task Buttons
    newTaskCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      domRender.toggleNewTaskForm();
      clearTaskForm();
    });
    newTaskSaveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      console.log(projectHandler.activeProjectID);
      console.log(projectHandler.getProjects());

      const title = taskTitle.value;
      const id = `task-${title.replace(/\s/g, "").trim().toLowerCase()}`;
      const description = taskDescription.value;
      const priority = taskPriority.value;
      const dueDate = taskDueDate.value;

      console.log(id);
      console.log(title);
      console.log(description);
      console.log(priority);
      console.log(dueDate);

      projectHandler.projects.forEach((project) => {
        if (project.id === projectHandler.activeProjectID) {
          const newTask = project.createNewTask(id, title, priority, dueDate);
          newTask.setDescription(description);
          console.log(project.getTasks());
          domRender.buildTaskDiv(newTask);
        }
      });
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
      clearTaskForm();
      domRender.toggleNewTaskForm();
    });
  };

  return {
    allBtn,
    todayBtn,
    weekBtn,
    importantBtn,
    completedBtn,
    newProjectBtn,
    addEventListeners,
  };
};

function appController() {
  // init DOM buttons
  const domButtons = DomElements();
  domButtons.addEventListeners();
  // localStorage.clear();
}

appController();

})();

/******/ })()
;
//# sourceMappingURL=bundlebdb5e9d974c24da5e59a.js.map