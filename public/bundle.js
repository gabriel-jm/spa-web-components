/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AppMain.js":
/*!***********************************!*\
  !*** ./src/components/AppMain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AppMain\n/* harmony export */ });\n/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/templates */ \"./src/lib/templates.js\");\n\nclass AppMain extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({\n      mode: 'open'\n    });\n    this.render();\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = this.getTemplate();\n  }\n\n  getStyles() {\n    return _lib_templates__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host {\n        display: block;\n        font-family: sans-serif;\n      }\n    `;\n  }\n\n  getTemplate() {\n    return _lib_templates__WEBPACK_IMPORTED_MODULE_0__.html`\n      <style>${this.getStyles()}</style>\n\n      <search-container />\n    `;\n  }\n\n}\ncustomElements.define('app-main', AppMain);\n\n//# sourceURL=webpack://spa-web-components/./src/components/AppMain.js?");

/***/ }),

/***/ "./src/components/GifCover.js":
/*!************************************!*\
  !*** ./src/components/GifCover.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GifCover\n/* harmony export */ });\n/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/templates */ \"./src/lib/templates.js\");\n\nclass GifCover extends HTMLElement {\n  constructor() {\n    super();\n    this.url = this.getAttribute('url');\n    this.attachShadow({\n      mode: 'open'\n    });\n    this.render();\n  }\n\n  getStyles() {\n    return _lib_templates__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host {\n        display: block;\n      }\n\n      .gif-cover-image {\n        height: 150px;\n      }\n    `;\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = _lib_templates__WEBPACK_IMPORTED_MODULE_0__.html`\n      <style>${this.getStyles()}</style>\n\n      <img\n        class=\"gif-cover-image\"\n        src=\"${this.url}\"\n        alt=\"A GIF image\"\n      />\n    `;\n  }\n\n}\n!customElements.get('gif-cover') && customElements.define('gif-cover', GifCover);\n\n//# sourceURL=webpack://spa-web-components/./src/components/GifCover.js?");

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SearchBar\n/* harmony export */ });\n/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/templates */ \"./src/lib/templates.js\");\n\nclass SearchBar extends HTMLElement {\n  constructor() {\n    super();\n    this.key = 'Nm8PyXV7XHUWsLNXOs0VtL86NwIS1LDa';\n    this.apiUrl = 'https://api.giphy.com/v1/gifs/search';\n    this.showLimit = 20;\n    this.attachShadow({\n      mode: 'open'\n    });\n    this.render();\n  }\n\n  connectedCallback() {\n    this.shadowRoot.querySelector('button').addEventListener('click', () => this.handleSearch());\n  }\n\n  handleSearch() {\n    const {\n      value\n    } = this.shadowRoot.querySelector('input');\n    fetch(`${this.apiUrl}?api_key=${this.key}&q=${value}&limit=${this.showLimit}`).then(response => response.json()).then(response => this.dispatchDataInEvent(response.data));\n  }\n\n  dispatchDataInEvent(data) {\n    const searchEvent = new CustomEvent('search-complete', {\n      detail: {\n        data\n      },\n      bubbles: false\n    });\n    this.dispatchEvent(searchEvent);\n  }\n\n  getStyles() {\n    return _lib_templates__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host {\n        display: block;\n      }\n\n      .search-bar-container {\n        display: flex;\n      }\n\n      .search-input {\n        flex: 1;\n        margin: 10px;\n        height: 50px;\n        font-size: 18px;\n        padding: 10px;\n        border-radius: 5px;\n        border: none;\n        color: #8e8e8e;\n      }\n\n      .search-button {\n        margin: 10px;\n        width: 200px;\n        border: none;\n        font-size: 18px;\n        color: #5f5f5f;\n        cursor: pointer;\n      }\n\n      .search-button:hover {\n        background: #68f583;\n      }\n    `;\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = _lib_templates__WEBPACK_IMPORTED_MODULE_0__.html`\n      <style>${this.getStyles()}</style>\n\n      <div class=\"search-bar-container\">\n        <input\n          type=\"text\"\n          class=\"search-input\"\n          placeholder=\"Enter search text here\"\n        />\n        <button class=\"search-button\">Search</button>\n      </div>\n    `;\n  }\n\n}\n!customElements.get('search-bar') && customElements.define('search-bar', SearchBar);\n\n//# sourceURL=webpack://spa-web-components/./src/components/SearchBar.js?");

/***/ }),

/***/ "./src/components/SearchContainer.js":
/*!*******************************************!*\
  !*** ./src/components/SearchContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SearchContainer\n/* harmony export */ });\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/SearchBar.js\");\n/* harmony import */ var _GifCover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GifCover */ \"./src/components/GifCover.js\");\n/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/templates */ \"./src/lib/templates.js\");\n\n\n\nclass SearchContainer extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({\n      mode: 'open'\n    });\n    this.render();\n  }\n\n  connectedCallback() {\n    this.shadowRoot.querySelector('search-bar').addEventListener('search-complete', e => {\n      this.handleSearchData(e.detail.data);\n    });\n  }\n\n  handleSearchData(data) {\n    const parsedData = data.map(value => {\n      return _lib_templates__WEBPACK_IMPORTED_MODULE_2__.html`\n        <gif-cover url=${value.images.downsized_medium.url} />\n      `;\n    }).join('');\n    this.shadowRoot.querySelector('.search-container-images').innerHTML = parsedData;\n  }\n\n  getStyles() {\n    return _lib_templates__WEBPACK_IMPORTED_MODULE_2__.css`\n      :host {\n        display: block;\n      }\n\n      .search-container {\n        display: block;\n        padding: 10px;\n      }\n\n      .search-container-images {\n        display: flex;\n        padding: 10px;\n        flex-wrap: wrap;\n        box-sizing: border-box;\n        justify-content: space-evenly;\n      }\n\n      gif-cover {\n        flex-basis: 10%;\n        padding: 5px;\n      }\n    `;\n  }\n\n  render() {\n    this.shadowRoot.innerHTML = _lib_templates__WEBPACK_IMPORTED_MODULE_2__.html`\n      <style>${this.getStyles()}</style>\n\n      <div class=\"search-container\">\n        <search-bar />\n\n        <div class=\"search-container-images\">\n          <p>Try Searching for a tag in the search bar</p>\n        </div>\n      </div>\n    `;\n  }\n\n}\n!customElements.get('search-container') && customElements.define('search-container', SearchContainer);\n\n//# sourceURL=webpack://spa-web-components/./src/components/SearchContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppMain */ \"./src/components/AppMain.js\");\n/* harmony import */ var _components_SearchContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SearchContainer */ \"./src/components/SearchContainer.js\");\n\n\n\n//# sourceURL=webpack://spa-web-components/./src/index.js?");

/***/ }),

/***/ "./src/lib/css-template.js":
/*!*********************************!*\
  !*** ./src/lib/css-template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"css\": () => /* binding */ css\n/* harmony export */ });\nfunction css(strings, ...values) {\n  const fullCss = strings.reduce((acc, str, index) => {\n    return acc + str + (values[index] || \"\");\n  }, \"\");\n  return fullCss;\n}\n\n//# sourceURL=webpack://spa-web-components/./src/lib/css-template.js?");

/***/ }),

/***/ "./src/lib/html-template.js":
/*!**********************************!*\
  !*** ./src/lib/html-template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"html\": () => /* binding */ html\n/* harmony export */ });\nconst regExp = /<([a-zA-Z0-9\\-]+)\\s(.*)\\/>/g;\nfunction html(strings, ...values) {\n  values = values.map(value => {\n    return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');\n  });\n  const fullHtml = strings.reduce((acc, str, index) => {\n    return acc + str + (values[index] || \"\");\n  }, \"\");\n  const parsedHtml = fullHtml.replace(regExp, (_fullResult, name, attrs) => {\n    if (!name.includes('-')) return _fullResult;\n    const attributes = attrs.trim() ? ` ${attrs.trim()}` : \"\";\n    return `<${name}${attributes}></${name}>`;\n  }).replace(/<(slot)(.*?)\\/>/g, '<$1$2></$1>');\n  return parsedHtml;\n}\n\n//# sourceURL=webpack://spa-web-components/./src/lib/html-template.js?");

/***/ }),

/***/ "./src/lib/templates.js":
/*!******************************!*\
  !*** ./src/lib/templates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"html\": () => /* reexport safe */ _html_template__WEBPACK_IMPORTED_MODULE_0__.html,\n/* harmony export */   \"css\": () => /* reexport safe */ _css_template__WEBPACK_IMPORTED_MODULE_1__.css\n/* harmony export */ });\n/* harmony import */ var _html_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-template */ \"./src/lib/html-template.js\");\n/* harmony import */ var _css_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-template */ \"./src/lib/css-template.js\");\n\n\n\n//# sourceURL=webpack://spa-web-components/./src/lib/templates.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;