webpackHotUpdate_N_E("pages/search",{

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "../../node_modules/@loadable/component/dist/loadable.esm.js":
false,

/***/ "../../node_modules/cogo-toast/dist/index.es.js":
false,

/***/ "../../node_modules/copy-to-clipboard/index.js":
false,

/***/ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "../../node_modules/prop-types/index.js":
false,

/***/ "../../node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "../../node_modules/react-dom/index.js":
false,

/***/ "../../node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "../../node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "../../node_modules/scheduler/index.js":
false,

/***/ "../../node_modules/scheduler/tracing.js":
false,

/***/ "../../node_modules/tiny-skeleton-loader-react/dist/index.es.js":
false,

/***/ "../../node_modules/toggle-selection/index.js":
false,

/***/ "./src/components/@core/icon/index.tsx":
false,

/***/ "./src/components/pages/search/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/pages/search/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchPageComponent; });\n/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/icon */ \"./src/utils/icon.tsx\");\n/* harmony import */ var _utils_search_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/search-context */ \"./src/utils/search-context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/ggavilan/side/react-icons/packages/preview/src/components/pages/search/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction SearchPageComponent() {\n  _s();\n\n  var allIcons = _utils_icon__WEBPACK_IMPORTED_MODULE_0__[\"ALL_ICONS\"];\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_utils_search_context__WEBPACK_IMPORTED_MODULE_1__[\"Context\"]),\n      query = _React$useContext.query,\n      results = _React$useContext.results,\n      setResults = _React$useContext.setResults;\n\n  var getTotal = function getTotal(results) {\n    return results ? Object.values(results).reduce(function (p, c) {\n      return p + c;\n    }, 0) : 0;\n  };\n\n  if (query.length > 2) {\n    var hightlightPattern = new RegExp(\"(\".concat(query, \")\"), \"i\");\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, \"Results for: \", __jsx(\"i\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 24\n      }\n    }, query)), __jsx(\"div\", {\n      className: \"icons\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }), getTotal(results) === 0 && __jsx(\"h3\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 37\n      }\n    }, \"No icons found\"));\n  }\n\n  return __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, \"Please enter at least 3 characters to search...\");\n}\n\n_s(SearchPageComponent, \"h9py4oXQd1Zc42l95DtkOy7cNL4=\");\n\n_c = SearchPageComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPageComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD84OTY5Il0sIm5hbWVzIjpbIlNlYXJjaFBhZ2VDb21wb25lbnQiLCJhbGxJY29ucyIsIkFMTF9JQ09OUyIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJxdWVyeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiZ2V0VG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwIiwiYyIsImxlbmd0aCIsImhpZ2h0bGlnaHRQYXR0ZXJuIiwiUmVnRXhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDNUMsTUFBTUMsUUFBUSxHQUFHQyxxREFBakI7O0FBRDRDLDBCQUdMQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyw2REFBakIsQ0FISztBQUFBLE1BR3BDQyxLQUhvQyxxQkFHcENBLEtBSG9DO0FBQUEsTUFHN0JDLE9BSDZCLHFCQUc3QkEsT0FINkI7QUFBQSxNQUdwQkMsVUFIb0IscUJBR3BCQSxVQUhvQjs7QUFLNUMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsT0FBRCxFQUFxQjtBQUNwQyxXQUFPQSxPQUFPLEdBQ1pHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixPQUFkLEVBQXVCSyxNQUF2QixDQUE4QixVQUFDQyxDQUFELEVBQVlDLENBQVo7QUFBQSxhQUEwQkQsQ0FBQyxHQUFHQyxDQUE5QjtBQUFBLEtBQTlCLEVBQStELENBQS9ELENBRFksR0FFWixDQUZGO0FBR0QsR0FKRDs7QUFNQSxNQUFJUixLQUFLLENBQUNTLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQixRQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxNQUFKLFlBQWVYLEtBQWYsUUFBeUIsR0FBekIsQ0FBMUI7QUFDQSxXQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxLQUFKLENBRGYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBZUdHLFFBQVEsQ0FBQ0YsT0FBRCxDQUFSLEtBQXNCLENBQXRCLElBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBZjlCLENBREY7QUFtQkQ7O0FBQ0QsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUFQO0FBQ0Q7O0dBbEN1QlAsbUI7O0tBQUFBLG1CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFMTF9JQ09OUyB9IGZyb20gXCJAdXRpbHMvaWNvblwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAdXRpbHMvc2VhcmNoLWNvbnRleHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlYXJjaEljb25TZXQgZnJvbSBcIi4vc2VhcmNoLWljb25zZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGFnZUNvbXBvbmVudCgpIHtcbiAgY29uc3QgYWxsSWNvbnMgPSBBTExfSUNPTlM7XG5cbiAgY29uc3QgeyBxdWVyeSwgcmVzdWx0cywgc2V0UmVzdWx0cyB9ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBnZXRUb3RhbCA9IChyZXN1bHRzOiBvYmplY3QpID0+IHtcbiAgICByZXR1cm4gcmVzdWx0cyA/IFxuICAgICAgT2JqZWN0LnZhbHVlcyhyZXN1bHRzKS5yZWR1Y2UoKHA6IG51bWJlciwgYzogbnVtYmVyKSA9PiBwICsgYywgMCkgOlxuICAgICAgMFxuICB9XG5cbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDIpIHtcbiAgICBjb25zdCBoaWdodGxpZ2h0UGF0dGVybiA9IG5ldyBSZWdFeHAoYCgke3F1ZXJ5fSlgLCBcImlcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBSZXN1bHRzIGZvcjogPGk+e3F1ZXJ5fTwvaT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgIHsvKnthbGxJY29ucy5tYXAoKGljb24pID0+ICgqL31cbiAgICAgICAgICB7LyogIDxTZWFyY2hJY29uU2V0Ki99XG4gICAgICAgICAgey8qICAgIGtleT17aWNvbi5pZH0qL31cbiAgICAgICAgICB7LyogICAgaWNvbj17aWNvbn0qL31cbiAgICAgICAgICB7LyogICAgcXVlcnk9e3F1ZXJ5fSovfVxuICAgICAgICAgIHsvKiAgICBzZXRSZXN1bHRzPXtzZXRSZXN1bHRzfSovfVxuICAgICAgICAgIHsvKiAgICBoaWdobGlnaHRQYXR0ZXJuPXtoaWdodGxpZ2h0UGF0dGVybn0qL31cbiAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgey8qKSl9Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Z2V0VG90YWwocmVzdWx0cykgPT09IDAgJiYgPGgzPk5vIGljb25zIGZvdW5kPC9oMz59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiA8aDI+UGxlYXNlIGVudGVyIGF0IGxlYXN0IDMgY2hhcmFjdGVycyB0byBzZWFyY2guLi48L2gyPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pages/search/index.tsx\n");

/***/ }),

/***/ "./src/components/pages/search/loading.tsx":
false,

/***/ "./src/components/pages/search/search-iconset.tsx":
false,

/***/ "./src/utils/getIcons.ts":
false

})