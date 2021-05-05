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
        isGlobal: props.isGlobal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvaW5kZXguanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJpbml0U3R5bGUiLCJtaW5IZWlnaHQiLCJzdW0iLCJpc0dsb2JhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0IsTUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxhQUFTLEVBQUU7QUFESyxHQUFsQjtBQUdBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUVELFNBQWxDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsc0NBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsc0NBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFTRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNFLDhEQUFDLGdEQUFEO0FBQ0UsWUFBRSxFQUFDLFlBREw7QUFFRSxlQUFLLEVBQUMsU0FGUjtBQUdFLGVBQUssZUFBRSw4REFBQyx3REFBRDtBQUFjLGlCQUFLLEVBQUVFLG1EQUFHLENBQUMsU0FBRCxFQUFZSCxLQUFaLENBQXhCO0FBQTRDLHVCQUFXLEVBQUUsTUFBekQ7QUFBaUUsNkJBQWlCLEVBQUU7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIVDtBQUlFLGNBQUksRUFBQyxvQkFKUDtBQUtFLG1CQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUUsOERBQUMsZ0RBQUQ7QUFDRSxZQUFFLEVBQUMsWUFETDtBQUVFLGVBQUssRUFBQyxRQUZSO0FBR0UsZUFBSyxlQUFFLDhEQUFDLHdEQUFEO0FBQWMsaUJBQUssRUFBRUcsbURBQUcsQ0FBQyxRQUFELEVBQVdILEtBQVgsQ0FBeEI7QUFBMkMsdUJBQVcsRUFBRSxNQUF4RDtBQUFnRSw2QkFBaUIsRUFBRTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhUO0FBSUUsY0FBSSxFQUFDLG1CQUpQO0FBS0UsbUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFlRSw4REFBQyxnREFBRDtBQUNFLFlBQUUsRUFBQyxXQURMO0FBRUUsZUFBSyxFQUFDLFdBRlI7QUFHRSxlQUFLLGVBQUUsOERBQUMsd0RBQUQ7QUFBYyxpQkFBSyxFQUFFRyxtREFBRyxDQUFDLFdBQUQsRUFBY0gsS0FBZCxDQUF4QjtBQUE4Qyx1QkFBVyxFQUFFLE1BQTNEO0FBQW1FLDZCQUFpQixFQUFFO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFQ7QUFJRSxjQUFJLEVBQUMsc0JBSlA7QUFLRSxtQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixlQXNCRSw4REFBQyxnREFBRDtBQUNFLFlBQUUsRUFBQyxTQURMO0FBRUUsZUFBSyxFQUFDLFNBRlI7QUFHRSxlQUFLLGVBQUUsOERBQUMsd0RBQUQ7QUFBYyxpQkFBSyxFQUFFRyxtREFBRyxDQUFDLFNBQUQsRUFBWUgsS0FBWixDQUF4QjtBQUE0Qyx1QkFBVyxFQUFFLE1BQXpEO0FBQWlFLDZCQUFpQixFQUFFO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFQ7QUFJRSxjQUFJLEVBQUMsb0JBSlA7QUFLRSxtQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUF1Q0UsOERBQUMsNENBQUQ7QUFBUSxnQkFBUSxFQUFFQSxLQUFLLENBQUNJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0YsZUF3Q0UsOERBQUMsMkNBQUQ7QUFBTyxnQkFBUSxFQUFFSixLQUFLLENBQUNJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUE0Q0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQXBERDs7S0FBTUwsUztBQXFETiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NGQwZDM1ZWUwOWZjZTQwNDliNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcbmltcG9ydCB7IHN1bSB9IGZyb20gXCIuLi8uLi91dGlscy9saWJyYXJ5XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2xheW91dHMvRm9vdGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2xheW91dHMvTmF2YmFyXCI7XHJcbmltcG9ydCBDYXJkU3RhdHVzIGZyb20gXCIuL0NhcmRTdGF0dXNcIjtcclxuaW1wb3J0IEdyYWZpayBmcm9tIFwiLi9HcmFmaWtcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuL1RhYmxlXCI7XHJcbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIG1pbkhlaWdodDogXCI4MHZoXCIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtpbml0U3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDI+S0FXQUwgQ09WSUQ8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5JbmZvcm1hc2kgS2FzdXMgQ292aWQtMTk8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPENhcmRTdGF0dXNcclxuICAgICAgICAgICAgYmc9XCJiZy1wcmltYXJ5XCJcclxuICAgICAgICAgICAgdGl0bGU9XCJQb3NpdGlmXCJcclxuICAgICAgICAgICAgdG90YWw9ezxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcInBvc2l0aWZcIiwgcHJvcHMpfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gLz59XHJcbiAgICAgICAgICAgIGljb249XCJpbWFnZXMvcG9zaXRpZi5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTYgY29sLXhsLTNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkU3RhdHVzXHJcbiAgICAgICAgICAgIGJnPVwiYmctc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU2VtYnVoXCJcclxuICAgICAgICAgICAgdG90YWw9ezxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcInNlbWJ1aFwiLCBwcm9wcyl9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSAvPn1cclxuICAgICAgICAgICAgaWNvbj1cImltYWdlcy9zZW1idWgucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02IGNvbC14bC0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZFN0YXR1c1xyXG4gICAgICAgICAgICBiZz1cImJnLWRhbmdlclwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiTWVuaW5nZ2FsXCJcclxuICAgICAgICAgICAgdG90YWw9ezxOdW1iZXJGb3JtYXQgdmFsdWU9e3N1bShcIm1lbmluZ2dhbFwiLCBwcm9wcyl9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSAvPn1cclxuICAgICAgICAgICAgaWNvbj1cImltYWdlcy9tZW5pbmdnYWwucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02IGNvbC14bC0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZFN0YXR1c1xyXG4gICAgICAgICAgICBiZz1cImJnLWluZm9cIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkRpcmF3YXRcIlxyXG4gICAgICAgICAgICB0b3RhbD17PE51bWJlckZvcm1hdCB2YWx1ZT17c3VtKFwiZGlyYXdhdFwiLCBwcm9wcyl9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSAvPn1cclxuICAgICAgICAgICAgaWNvbj1cImltYWdlcy9kaXJhd2F0LnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNiBjb2wteGwtM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxHcmFmaWsgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfSAvPlxyXG4gICAgICAgIDxUYWJsZSBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwic291cmNlUm9vdCI6IiJ9