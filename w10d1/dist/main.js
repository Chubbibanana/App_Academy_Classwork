/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(HTMLElements) {\n        this.HTMLElements = HTMLElements;\n        return this;\n    }\n\n    html(txt) {\n        if (txt) {\n            this.HTMLElements.forEach(element => {\n            element.innerHTML = txt;\n        })} else {\n            return this.HTMLElements[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append(outer) {\n        this.HTMLElements.forEach(element => {\n            this.html(outer);\n        })\n    }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg) {\n    let elements = [];\n    if (typeof arg === 'string') {\n        const nodeList =  document.querySelectorAll(arg); // this line changes the string to instance of htmlelement\n        elements = Array.from(nodeList);\n    } else if (arg instanceof HTMLElement) {\n        elements.push(arg);\n    }\n    return new DOMNodeCollection(elements);\n}\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;