self["webpackHotUpdate_N_E"]("pages/indonesia",{

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
/* harmony import */ var _utils_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/library */ "./utils/library.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\react\\nextjs\\covid19\\components\\dashboard\\Grafik.js",
    _this = undefined;




var Grafik = function Grafik(props) {
  var dataLineChart = (0,_utils_library__WEBPACK_IMPORTED_MODULE_2__.lineChrt)(props);
  var chartLine = {
    labels: dataLineChart.label,
    datasets: [{
      label: "Meninggal",
      data: dataLineChart.meninggal,
      fill: false,
      backgroundColor: "rgb(111, 12, 132)",
      borderColor: "rgba(90, 33, 122, 0.2)"
    }, {
      label: "Positif",
      data: dataLineChart.positif,
      fill: false,
      backgroundColor: "rgb(235, 42, 66)",
      borderColor: "rgba(57, 99, 24, 0.2)"
    }, {
      label: "Sembuh",
      data: dataLineChart.sembuh,
      fill: false,
      backgroundColor: "rgb(665, 67, 123)",
      borderColor: "rgba(123, 99, 132, 0.2)"
    }, {
      label: "Active",
      data: dataLineChart.active,
      fill: false,
      backgroundColor: "rgb(255, 99, 423)",
      borderColor: "rgba(33, 42, 133, 0.2)"
    }]
  };
  var chartPie = {
    labels: ["Positif", "Sembuh", "Meninggal", "Dirawat"],
    datasets: [{
      label: "My First Dataset",
      data: [(0,_utils_library__WEBPACK_IMPORTED_MODULE_2__.sum)("positif", props), (0,_utils_library__WEBPACK_IMPORTED_MODULE_2__.sum)("sembuh", props), (0,_utils_library__WEBPACK_IMPORTED_MODULE_2__.sum)("meninggal", props), (0,_utils_library__WEBPACK_IMPORTED_MODULE_2__.sum)("dirawat", props)],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(255, 111, 86)"],
      hoverOffset: 4
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row mt-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-header",
          children: props.isGlobal ? "Kasus Virus Corona di Dunia" : "Kasus Virus Corona di Indonesia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: props.isGlobal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Pie, {
            data: chartPie
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Line, {
            data: chartLine
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbIkdyYWZpayIsInByb3BzIiwiZGF0YUxpbmVDaGFydCIsImxpbmVDaHJ0IiwiY2hhcnRMaW5lIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImRhdGEiLCJtZW5pbmdnYWwiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb3NpdGlmIiwic2VtYnVoIiwiYWN0aXZlIiwiY2hhcnRQaWUiLCJzdW0iLCJob3Zlck9mZnNldCIsImlzR2xvYmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQU1DLGFBQWEsR0FBR0Msd0RBQVEsQ0FBQ0YsS0FBRCxDQUE5QjtBQUNBLE1BQU1HLFNBQVMsR0FBRztBQUNoQkMsVUFBTSxFQUFFSCxhQUFhLENBQUNJLEtBRE47QUFFaEJDLFlBQVEsRUFBRSxDQUNSO0FBQ0VELFdBQUssRUFBRSxXQURUO0FBRUVFLFVBQUksRUFBRU4sYUFBYSxDQUFDTyxTQUZ0QjtBQUdFQyxVQUFJLEVBQUUsS0FIUjtBQUlFQyxxQkFBZSxFQUFFLG1CQUpuQjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FEUSxFQVFSO0FBQ0VOLFdBQUssRUFBRSxTQURUO0FBRUVFLFVBQUksRUFBRU4sYUFBYSxDQUFDVyxPQUZ0QjtBQUdFSCxVQUFJLEVBQUUsS0FIUjtBQUlFQyxxQkFBZSxFQUFFLGtCQUpuQjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FSUSxFQWVSO0FBQ0VOLFdBQUssRUFBRSxRQURUO0FBRUVFLFVBQUksRUFBRU4sYUFBYSxDQUFDWSxNQUZ0QjtBQUdFSixVQUFJLEVBQUUsS0FIUjtBQUlFQyxxQkFBZSxFQUFFLG1CQUpuQjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FmUSxFQXNCUjtBQUNFTixXQUFLLEVBQUUsUUFEVDtBQUVFRSxVQUFJLEVBQUVOLGFBQWEsQ0FBQ2EsTUFGdEI7QUFHRUwsVUFBSSxFQUFFLEtBSFI7QUFJRUMscUJBQWUsRUFBRSxtQkFKbkI7QUFLRUMsaUJBQVcsRUFBRTtBQUxmLEtBdEJRO0FBRk0sR0FBbEI7QUFrQ0EsTUFBTUksUUFBUSxHQUFHO0FBQ2ZYLFVBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFdBQXRCLEVBQW1DLFNBQW5DLENBRE87QUFFZkUsWUFBUSxFQUFFLENBQ1I7QUFDRUQsV0FBSyxFQUFFLGtCQURUO0FBRUVFLFVBQUksRUFBRSxDQUNKUyxtREFBRyxDQUFDLFNBQUQsRUFBWWhCLEtBQVosQ0FEQyxFQUVKZ0IsbURBQUcsQ0FBQyxRQUFELEVBQVdoQixLQUFYLENBRkMsRUFHSmdCLG1EQUFHLENBQUMsV0FBRCxFQUFjaEIsS0FBZCxDQUhDLEVBSUpnQixtREFBRyxDQUFDLFNBQUQsRUFBWWhCLEtBQVosQ0FKQyxDQUZSO0FBUUVVLHFCQUFlLEVBQUUsQ0FDZixtQkFEZSxFQUVmLG1CQUZlLEVBR2YsbUJBSGUsRUFJZixtQkFKZSxDQVJuQjtBQWNFTyxpQkFBVyxFQUFFO0FBZGYsS0FEUTtBQUZLLEdBQWpCO0FBcUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLG9CQUNHakIsS0FBSyxDQUFDa0IsUUFBTixHQUNHLDZCQURILEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFDR2xCLEtBQUssQ0FBQ2tCLFFBQU4sZ0JBQ0MsOERBQUMsZ0RBQUQ7QUFBSyxnQkFBSSxFQUFFSDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZ0JBR0MsOERBQUMsaURBQUQ7QUFBTSxnQkFBSSxFQUFFWjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E5RkQ7O0tBQU1KLE07QUErRk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kb25lc2lhLjYwZmQ1YmY3YTk3ZjQ3YjI4ZTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lLCBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IGxpbmVDaHJ0LCBzdW0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvbGlicmFyeVwiO1xyXG5cclxuY29uc3QgR3JhZmlrID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGF0YUxpbmVDaGFydCA9IGxpbmVDaHJ0KHByb3BzKTtcclxuICBjb25zdCBjaGFydExpbmUgPSB7XHJcbiAgICBsYWJlbHM6IGRhdGFMaW5lQ2hhcnQubGFiZWwsXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTWVuaW5nZ2FsXCIsXHJcbiAgICAgICAgZGF0YTogZGF0YUxpbmVDaGFydC5tZW5pbmdnYWwsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxMTEsIDEyLCAxMzIpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg5MCwgMzMsIDEyMiwgMC4yKVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiUG9zaXRpZlwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGFMaW5lQ2hhcnQucG9zaXRpZixcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDIzNSwgNDIsIDY2KVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNTcsIDk5LCAyNCwgMC4yKVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiU2VtYnVoXCIsXHJcbiAgICAgICAgZGF0YTogZGF0YUxpbmVDaGFydC5zZW1idWgsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYig2NjUsIDY3LCAxMjMpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMjMsIDk5LCAxMzIsIDAuMilcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGFMaW5lQ2hhcnQuYWN0aXZlLFxyXG4gICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCA5OSwgNDIzKVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMzMsIDQyLCAxMzMsIDAuMilcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhcnRQaWUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlBvc2l0aWZcIiwgXCJTZW1idWhcIiwgXCJNZW5pbmdnYWxcIiwgXCJEaXJhd2F0XCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIk15IEZpcnN0IERhdGFzZXRcIixcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICBzdW0oXCJwb3NpdGlmXCIsIHByb3BzKSxcclxuICAgICAgICAgIHN1bShcInNlbWJ1aFwiLCBwcm9wcyksXHJcbiAgICAgICAgICBzdW0oXCJtZW5pbmdnYWxcIiwgcHJvcHMpLFxyXG4gICAgICAgICAgc3VtKFwiZGlyYXdhdFwiLCBwcm9wcyksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgIFwicmdiKDI1NSwgOTksIDEzMilcIixcclxuICAgICAgICAgIFwicmdiKDU0LCAxNjIsIDIzNSlcIixcclxuICAgICAgICAgIFwicmdiKDI1NSwgMjA1LCA4NilcIixcclxuICAgICAgICAgIFwicmdiKDI1NSwgMTExLCA4NilcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbFxyXG4gICAgICAgICAgICAgID8gXCJLYXN1cyBWaXJ1cyBDb3JvbmEgZGkgRHVuaWFcIlxyXG4gICAgICAgICAgICAgIDogXCJLYXN1cyBWaXJ1cyBDb3JvbmEgZGkgSW5kb25lc2lhXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IChcclxuICAgICAgICAgICAgICA8UGllIGRhdGE9e2NoYXJ0UGllfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2NoYXJ0TGluZX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg1PlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgIDxoMj4yNTAwMDwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+T3Jhbmc8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNT5QT1NJVElGPC9oNT5cclxuICAgICAgICAgICAgICA8aDI+MjUwMDA8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPk9yYW5nPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDU+UE9TSVRJRjwvaDU+XHJcbiAgICAgICAgICAgICAgPGgyPjI1MDAwPC9oMj5cclxuICAgICAgICAgICAgICA8cD5PcmFuZzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR3JhZmlrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9