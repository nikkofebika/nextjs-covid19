self["webpackHotUpdate_N_E"]("pages/indonesia",{

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
  var day = null;
  var month = null;
  var year = null;
  var label = [];
  var positif = [];
  var sembuh = [];
  var meninggal = [];
  var active = [];
  var data = [];

  for (var value in props) {
    nowDate = new Date(value.Date);
    day = nowDate.getDay();
    month = nowDate.getMonth();
    year = nowDate.getFullYear();
    label.push(day + " " + monthLabel[Math.abs(month)]);
    positif.push(value.Confirmed);
    sembuh.push(value.Recovered);
    meninggal.push(value.Deaths);
    active.push(value.Active);
  }

  data = {
    label: label,
    positif: positif,
    sembuh: sembuh,
    meninggal: meninggal,
    active: active
  };
  return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGlicmFyeS5qcyJdLCJuYW1lcyI6WyJzdW0iLCJrZXkiLCJwcm9wcyIsImlzR2xvYmFsIiwiZGF0YSIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQWN0aXZlIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQ29uZmlybWVkIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJsaW5lQ2hydCIsIm1vbnRoTGFiZWwiLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImxhYmVsIiwiYWN0aXZlIiwidmFsdWUiLCJnZXREYXkiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVzaCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNqQyxNQUFJQSxLQUFLLENBQUNDLFFBQVYsRUFBb0I7QUFDbEIsWUFBUUYsR0FBUjtBQUNFLFdBQUssU0FBTDtBQUNFLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUFYLENBQWtCLFVBQUNMLEdBQUQsRUFBTU0sQ0FBTixFQUFZO0FBQ25DLGlCQUFPTixHQUFHLEdBQUdNLENBQUMsQ0FBQ0MsVUFBRixDQUFhQyxNQUExQjtBQUNELFNBRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7QUFDRixXQUFLLFFBQUw7QUFDRSxlQUFPTixLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixVQUFDTCxHQUFELEVBQU1NLENBQU4sRUFBWTtBQUNuQyxpQkFBT04sR0FBRyxHQUFHTSxDQUFDLENBQUNDLFVBQUYsQ0FBYUUsU0FBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsZUFBT1AsS0FBSyxDQUFDRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0ws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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRvbmVzaWEuMWI4YmM1Nzk1Mjc2OGJiYmZhMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAoa2V5LCBwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcInBvc2l0aWZcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwicG9zaXRpZlwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZUNocnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBtb250aExhYmVsID0gW1xyXG4gICAgXCJKYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWVpXCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlc1wiLFxyXG4gIF07XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCBkYXkgPSBudWxsO1xyXG4gIGxldCBtb250aCA9IG51bGw7XHJcbiAgbGV0IHllYXIgPSBudWxsO1xyXG4gIGxldCBsYWJlbCA9IFtdO1xyXG4gIGxldCBwb3NpdGlmID0gW107XHJcbiAgbGV0IHNlbWJ1aCA9IFtdO1xyXG4gIGxldCBtZW5pbmdnYWwgPSBbXTtcclxuICBsZXQgYWN0aXZlID0gW107XHJcbiAgbGV0IGRhdGEgPSBbXTtcclxuICBmb3IgKGxldCB2YWx1ZSBpbiBwcm9wcykge1xyXG4gICAgbm93RGF0ZSA9IG5ldyBEYXRlKHZhbHVlLkRhdGUpO1xyXG4gICAgZGF5ID0gbm93RGF0ZS5nZXREYXkoKTtcclxuICAgIG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aExhYmVsW01hdGguYWJzKG1vbnRoKV0pO1xyXG4gICAgcG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XHJcbiAgICBzZW1idWgucHVzaCh2YWx1ZS5SZWNvdmVyZWQpO1xyXG4gICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcclxuICAgIGFjdGl2ZS5wdXNoKHZhbHVlLkFjdGl2ZSk7XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBsYWJlbDogbGFiZWwsXHJcbiAgICBwb3NpdGlmOiBwb3NpdGlmLFxyXG4gICAgc2VtYnVoOiBzZW1idWgsXHJcbiAgICBtZW5pbmdnYWw6IG1lbmluZ2dhbCxcclxuICAgIGFjdGl2ZTogYWN0aXZlLFxyXG4gIH07XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=