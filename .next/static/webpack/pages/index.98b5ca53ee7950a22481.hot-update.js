self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/library.js":
/*!**************************!*\
  !*** ./utils/library.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": function() { return /* binding */ sum; },
/* harmony export */   "lineChrt": function() { return /* binding */ lineChrt; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var sum = function sum(key, props) {
  if (props.isGlobal) {
    switch (key) {
      case "positif":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Active;
        }, 0);
        break;

      case "sembuh":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Recovered;
        }, 0);
        break;

      case "meninggal":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Deaths;
        }, 0);
        break;

      case "dirawat":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Confirmed;
        }, 0);
        break;

      default:
        break;
    }
  } else {
    switch (key) {
      case "positif":
        return props.data[0].positif;
        break;

      case "sembuh":
        return props.data[0].sembuh;
        break;

      case "meninggal":
        return props.data[0].meninggal;
        break;

      case "dirawat":
        return props.data[0].dirawat;
        break;

      default:
        break;
    }
  }
};
var lineChrt = function lineChrt(props) {
  var monthLabel = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  var nowDate = new Date();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGlicmFyeS5qcyJdLCJuYW1lcyI6WyJzdW0iLCJrZXkiLCJwcm9wcyIsImlzR2xvYmFsIiwiZGF0YSIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQWN0aXZlIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQ29uZmlybWVkIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJsaW5lQ2hydCIsIm1vbnRoTGFiZWwiLCJub3dEYXRlIiwiRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ2pDLE1BQUlBLEtBQUssQ0FBQ0MsUUFBVixFQUFvQjtBQUNsQixZQUFRRixHQUFSO0FBQ0UsV0FBSyxTQUFMO0FBQ0UsZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0wsR0FBRCxFQUFNTSxDQUFOLEVBQVk7QUFDbkMsaUJBQU9OLEdBQUcsR0FBR00sQ0FBQyxDQUFDQyxVQUFGLENBQWFDLE1BQTFCO0FBQ0QsU0FGTSxFQUVKLENBRkksQ0FBUDtBQUdBOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQU9OLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUFYLENBQWtCLFVBQUNMLEdBQUQsRUFBTU0sQ0FBTixFQUFZO0FBQ25DLGlCQUFPTixHQUFHLEdBQUdNLENBQUMsQ0FBQ0MsVUFBRixDQUFhRSxTQUExQjtBQUNELFNBRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7QUFDRixXQUFLLFdBQUw7QUFDRSxlQUFPUCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixVQUFDTCxHQUFELEVBQU1NLENBQU4sRUFBWTtBQUNuQyxpQkFBT04sR0FBRyxHQUFHTSxDQUFDLENBQUNDLFVBQUYsQ0FBYUcsTUFBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7O0FBQ0YsV0FBSyxTQUFMO0FBQ0UsZUFBT1IsS0FBSyxDQUFDRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0wsR0FBRCxFQUFNTSxDQUFOLEVBQVk7QUFDbkMsaUJBQU9OLEdBQUcsR0FBR00sQ0FBQyxDQUFDQyxVQUFGLENBQWFJLFNBQTFCO0FBQ0QsU0FGTSxFQUVKLENBRkksQ0FBUDtBQUdBOztBQUNGO0FBQ0U7QUF0Qko7QUF3QkQsR0F6QkQsTUF5Qk87QUFDTCxZQUFRVixHQUFSO0FBQ0UsV0FBSyxTQUFMO0FBQ0UsZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjUSxPQUFyQjtBQUNBOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQU9WLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY1MsTUFBckI7QUFDQTs7QUFDRixXQUFLLFdBQUw7QUFDRSxlQUFPWCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNVLFNBQXJCO0FBQ0E7O0FBQ0YsV0FBSyxTQUFMO0FBQ0UsZUFBT1osS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjVyxPQUFyQjtBQUNBOztBQUNGO0FBQ0U7QUFkSjtBQWdCRDtBQUNGLENBNUNNO0FBOENBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNkLEtBQUQsRUFBVztBQUNqQyxNQUFNZSxVQUFVLEdBQUcsQ0FDakIsS0FEaUIsRUFFakIsS0FGaUIsRUFHakIsS0FIaUIsRUFJakIsS0FKaUIsRUFLakIsS0FMaUIsRUFNakIsS0FOaUIsRUFPakIsS0FQaUIsRUFRakIsS0FSaUIsRUFTakIsS0FUaUIsRUFVakIsS0FWaUIsRUFXakIsS0FYaUIsRUFZakIsS0FaaUIsQ0FBbkI7QUFjQSxNQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0QsQ0FoQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThiNWNhNTNlZTc5NTBhMjI0ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAoa2V5LCBwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcInBvc2l0aWZcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwicG9zaXRpZlwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZUNocnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBtb250aExhYmVsID0gW1xyXG4gICAgXCJKYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWVpXCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlc1wiLFxyXG4gIF07XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9