self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/dashboard/Grafik.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\react\\nextjs\\covid19\\components\\dashboard\\Grafik.js",
    _this = undefined;



var Grafik = function Grafik(props) {
  var chartLine = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [{
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)"
    }]
  };
  var chartPie = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
      hoverOffset: 4
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mt-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "card-header",
          children: "Featured"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "card-body",
          children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Line, {
            data: chartLine
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Pie, {
            data: chartPie,
            width: 50
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = Grafik;
/* harmony default export */ __webpack_exports__["default"] = (Grafik);

var _c;

$RefreshReg$(_c, "Grafik");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbIkdyYWZpayIsInByb3BzIiwiY2hhcnRMaW5lIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjaGFydFBpZSIsImhvdmVyT2Zmc2V0IiwiaXNHbG9iYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDeEIsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxVQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FEUTtBQUVoQkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FGUjtBQUdFQyxVQUFJLEVBQUUsS0FIUjtBQUlFQyxxQkFBZSxFQUFFLG1CQUpuQjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FEUTtBQUZNLEdBQWxCO0FBYUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZQLFVBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLENBRE87QUFFZkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLGtCQURUO0FBRUVDLFVBQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsR0FBVixDQUZSO0FBR0VFLHFCQUFlLEVBQUUsQ0FDZixtQkFEZSxFQUVmLG1CQUZlLEVBR2YsbUJBSGUsQ0FIbkI7QUFRRUcsaUJBQVcsRUFBRTtBQVJmLEtBRFE7QUFGSyxHQUFqQjtBQWVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBTSxNQUFYO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBTSxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBTSxXQUFYO0FBQUEsb0JBQ0dWLEtBQUssQ0FBQ1csUUFBTixnQkFDQyw4REFBQyxpREFBRDtBQUFNLGdCQUFJLEVBQUVWO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxnQkFHQyw4REFBQyxnREFBRDtBQUFLLGdCQUFJLEVBQUVRLFFBQVg7QUFBcUIsaUJBQUssRUFBRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBN0NEOztLQUFNVixNO0FBOENOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxN2FmOTI5YTMzMWI4NDZhYTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lLCBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcblxyXG5jb25zdCBHcmFmaWsgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjaGFydExpbmUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCIjIG9mIFZvdGVzXCIsXHJcbiAgICAgICAgZGF0YTogWzEyLCAxOSwgMywgNSwgMiwgM10sXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDk5LCAxMzIpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhcnRQaWUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlJlZFwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTXkgRmlyc3QgRGF0YXNldFwiLFxyXG4gICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgXCJyZ2IoMjU1LCA5OSwgMTMyKVwiLFxyXG4gICAgICAgICAgXCJyZ2IoNTQsIDE2MiwgMjM1KVwiLFxyXG4gICAgICAgICAgXCJyZ2IoMjU1LCAyMDUsIDg2KVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+RmVhdHVyZWQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gKFxyXG4gICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2NoYXJ0TGluZX0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8UGllIGRhdGE9e2NoYXJ0UGllfSB3aWR0aD17NTB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWs7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=