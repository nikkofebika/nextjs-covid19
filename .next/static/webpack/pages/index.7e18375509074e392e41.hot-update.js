self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/dashboard/index.js":
/*!***************************************!*\
  !*** ./components/dashboard/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _utils_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/library */ "./utils/library.js");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Footer */ "./components/layouts/Footer.js");
/* harmony import */ var _layouts_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/Navbar */ "./components/layouts/Navbar.js");
/* harmony import */ var _CardStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardStatus */ "./components/dashboard/CardStatus.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Grafik */ "./components/dashboard/Grafik.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Table */ "./components/dashboard/Table.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\NIKKO\\react\\nextjs\\nextjs-covid19\\components\\dashboard\\index.js",
    _this = undefined;










var Dashboard = function Dashboard(props) {
  var initStyle = {
    minHeight: "80vh"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      style: initStyle,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "KAWAL COVID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Informasi Kasus Covid-19"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_6__.default, {
          bg: "bg-primary",
          title: "Positif",
          total: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_2__.default, {
            value: (0,_utils_library__WEBPACK_IMPORTED_MODULE_3__.sum)("positif", props),
            displayType: 'text',
            thousandSeparator: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 20
          }, _this),
          icon: "images/positif.png",
          className: "col-xs-12 col-md-6 col-xl-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_6__.default, {
          bg: "bg-success",
          title: "Sembuh",
          total: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_2__.default, {
            value: (0,_utils_library__WEBPACK_IMPORTED_MODULE_3__.sum)("sembuh", props),
            displayType: 'text',
            thousandSeparator: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 20
          }, _this),
          icon: "images/sembuh.png",
          className: "col-xs-12 col-md-6 col-xl-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_6__.default, {
          bg: "bg-danger",
          title: "Meninggal",
          total: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_2__.default, {
            value: (0,_utils_library__WEBPACK_IMPORTED_MODULE_3__.sum)("meninggal", props),
            displayType: 'text',
            thousandSeparator: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 20
          }, _this),
          icon: "images/meninggal.png",
          className: "col-xs-12 col-md-6 col-xl-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardStatus__WEBPACK_IMPORTED_MODULE_6__.default, {
          bg: "bg-info",
          title: "Dirawat",
          total: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_2__.default, {
            value: (0,_utils_library__WEBPACK_IMPORTED_MODULE_3__.sum)("dirawat", props),
            displayType: 'text',
            thousandSeparator: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 20
          }, _this),
          icon: "images/dirawat.png",
          className: "col-xs-12 col-md-6 col-xl-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Grafik__WEBPACK_IMPORTED_MODULE_7__.default, {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        statistik: props.statistik ? props.statistik : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_8__.default, {
        isGlobal: props.isGlobal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvaW5kZXguanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJpbml0U3R5bGUiLCJtaW5IZWlnaHQiLCJzdW0iLCJpc0dsb2JhbCIsImRhdGEiLCJzdGF0aXN0aWsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsYUFBUyxFQUFFO0FBREssR0FBbEI7QUFHQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSyxFQUFFRCxTQUFsQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHNDQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLHNDQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRSw4REFBQyxnREFBRDtBQUNFLFlBQUUsRUFBQyxZQURMO0FBRUUsZUFBSyxFQUFDLFNBRlI7QUFHRSxlQUFLLGVBQUUsOERBQUMsd0RBQUQ7QUFBYyxpQkFBSyxFQUFFRSxtREFBRyxDQUFDLFNBQUQsRUFBWUgsS0FBWixDQUF4QjtBQUE0Qyx1QkFBVyxFQUFFLE1BQXpEO0FBQWlFLDZCQUFpQixFQUFFO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFQ7QUFJRSxjQUFJLEVBQUMsb0JBSlA7QUFLRSxtQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLDhEQUFDLGdEQUFEO0FBQ0UsWUFBRSxFQUFDLFlBREw7QUFFRSxlQUFLLEVBQUMsUUFGUjtBQUdFLGVBQUssZUFBRSw4REFBQyx3REFBRDtBQUFjLGlCQUFLLEVBQUVHLG1EQUFHLENBQUMsUUFBRCxFQUFXSCxLQUFYLENBQXhCO0FBQTJDLHVCQUFXLEVBQUUsTUFBeEQ7QUFBZ0UsNkJBQWlCLEVBQUU7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIVDtBQUlFLGNBQUksRUFBQyxtQkFKUDtBQUtFLG1CQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBZUUsOERBQUMsZ0RBQUQ7QUFDRSxZQUFFLEVBQUMsV0FETDtBQUVFLGVBQUssRUFBQyxXQUZSO0FBR0UsZUFBSyxlQUFFLDhEQUFDLHdEQUFEO0FBQWMsaUJBQUssRUFBRUcsbURBQUcsQ0FBQyxXQUFELEVBQWNILEtBQWQsQ0FBeEI7QUFBOEMsdUJBQVcsRUFBRSxNQUEzRDtBQUFtRSw2QkFBaUIsRUFBRTtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhUO0FBSUUsY0FBSSxFQUFDLHNCQUpQO0FBS0UsbUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFzQkUsOERBQUMsZ0RBQUQ7QUFDRSxZQUFFLEVBQUMsU0FETDtBQUVFLGVBQUssRUFBQyxTQUZSO0FBR0UsZUFBSyxlQUFFLDhEQUFDLHdEQUFEO0FBQWMsaUJBQUssRUFBRUcsbURBQUcsQ0FBQyxTQUFELEVBQVlILEtBQVosQ0FBeEI7QUFBNEMsdUJBQVcsRUFBRSxNQUF6RDtBQUFpRSw2QkFBaUIsRUFBRTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhUO0FBSUUsY0FBSSxFQUFDLG9CQUpQO0FBS0UsbUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBdUNFLDhEQUFDLDRDQUFEO0FBQVEsZ0JBQVEsRUFBRUEsS0FBSyxDQUFDSSxRQUF4QjtBQUFrQyxZQUFJLEVBQUVKLEtBQUssQ0FBQ0ssSUFBTixHQUFhTCxLQUFLLENBQUNLLElBQW5CLEdBQTBCLElBQWxFO0FBQXdFLGlCQUFTLEVBQUVMLEtBQUssQ0FBQ00sU0FBTixHQUFrQk4sS0FBSyxDQUFDTSxTQUF4QixHQUFvQztBQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGLGVBd0NFLDhEQUFDLDJDQUFEO0FBQU8sZ0JBQVEsRUFBRU4sS0FBSyxDQUFDSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBNENFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0FwREQ7O0tBQU1MLFM7QUFxRE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UxODM3NTUwOTA3NGUzOTJlNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5pbXBvcnQgeyBzdW0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvbGlicmFyeVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9sYXlvdXRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9sYXlvdXRzL05hdmJhclwiO1xyXG5pbXBvcnQgQ2FyZFN0YXR1cyBmcm9tIFwiLi9DYXJkU3RhdHVzXCI7XHJcbmltcG9ydCBHcmFmaWsgZnJvbSBcIi4vR3JhZmlrXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbml0U3R5bGUgPSB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiODB2aFwiLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17aW5pdFN0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgyPktBV0FMIENPVklEPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+SW5mb3JtYXNpIEthc3VzIENvdmlkLTE5PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxDYXJkU3RhdHVzXHJcbiAgICAgICAgICAgIGJnPVwiYmctcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUG9zaXRpZlwiXHJcbiAgICAgICAgICAgIHRvdGFsPXs8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJwb3NpdGlmXCIsIHByb3BzKX0gZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IC8+fVxyXG4gICAgICAgICAgICBpY29uPVwiaW1hZ2VzL3Bvc2l0aWYucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02IGNvbC14bC0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZFN0YXR1c1xyXG4gICAgICAgICAgICBiZz1cImJnLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlNlbWJ1aFwiXHJcbiAgICAgICAgICAgIHRvdGFsPXs8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJzZW1idWhcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gLz59XHJcbiAgICAgICAgICAgIGljb249XCJpbWFnZXMvc2VtYnVoLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNiBjb2wteGwtM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRTdGF0dXNcclxuICAgICAgICAgICAgYmc9XCJiZy1kYW5nZXJcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIk1lbmluZ2dhbFwiXHJcbiAgICAgICAgICAgIHRvdGFsPXs8TnVtYmVyRm9ybWF0IHZhbHVlPXtzdW0oXCJtZW5pbmdnYWxcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gLz59XHJcbiAgICAgICAgICAgIGljb249XCJpbWFnZXMvbWVuaW5nZ2FsLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNiBjb2wteGwtM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRTdGF0dXNcclxuICAgICAgICAgICAgYmc9XCJiZy1pbmZvXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJEaXJhd2F0XCJcclxuICAgICAgICAgICAgdG90YWw9ezxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcImRpcmF3YXRcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gLz59XHJcbiAgICAgICAgICAgIGljb249XCJpbWFnZXMvZGlyYXdhdC5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTYgY29sLXhsLTNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8R3JhZmlrIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfSBzdGF0aXN0aWs9e3Byb3BzLnN0YXRpc3RpayA/IHByb3BzLnN0YXRpc3RpayA6IG51bGx9IC8+XHJcbiAgICAgICAgPFRhYmxlIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=