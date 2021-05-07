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
  console.log("anjay props", props);
  console.log("anjay", props);
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

  for (var value in props.statistik) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGlicmFyeS5qcyJdLCJuYW1lcyI6WyJzdW0iLCJrZXkiLCJwcm9wcyIsImlzR2xvYmFsIiwiZGF0YSIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQWN0aXZlIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQ29uZmlybWVkIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJsaW5lQ2hydCIsImNvbnNvbGUiLCJsb2ciLCJtb250aExhYmVsIiwibm93RGF0ZSIsIkRhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJsYWJlbCIsImFjdGl2ZSIsInZhbHVlIiwic3RhdGlzdGlrIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDakMsTUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLFlBQVFGLEdBQVI7QUFDRSxXQUFLLFNBQUw7QUFDRSxlQUFPQyxLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixVQUFDTCxHQUFELEVBQU1NLENBQU4sRUFBWTtBQUNuQyxpQkFBT04sR0FBRyxHQUFHTSxDQUFDLENBQUNDLFVBQUYsQ0FBYUMsTUFBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsZUFBT04sS0FBSyxDQUFDRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0wsR0FBRCxFQUFNTSxDQUFOLEVBQVk7QUFDbkMsaUJBQU9OLEdBQUcsR0FBR00sQ0FBQyxDQUFDQyxVQUFGLENBQWFFLFNBQTFCO0FBQ0QsU0FGTSxFQUVKLENBRkksQ0FBUDtBQUdBOztBQUNGLFdBQUssV0FBTDtBQUNFLGVBQU9QLEtBQUssQ0FBQ0Us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S0FERjtBQUVMYixXQUFPLEVBQUVBLE9BRko7QUFHTEMsVUFBTSxFQUFFQSxNQUhIO0FBSUxDLGFBQVMsRUFBRUEsU0FKTjtBQUtMWSxVQUFNLEVBQUVBO0FBTEgsR0FBUDtBQU9BLFNBQU90QixJQUFQO0FBQ0QsQ0E5Q00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kb25lc2lhLjZjYTA1YTRjOWEyNWJjYTQyZTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3VtID0gKGtleSwgcHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuaXNHbG9iYWwpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgXCJwb3NpdGlmXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQWN0aXZlO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2VtYnVoXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVuaW5nZ2FsXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlyYXdhdFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkNvbmZpcm1lZDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcInBvc2l0aWZcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5wb3NpdGlmO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2VtYnVoXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uc2VtYnVoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVuaW5nZ2FsXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ubWVuaW5nZ2FsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlyYXdhdFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVDaHJ0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJhbmpheSBwcm9wc1wiLCBwcm9wcyk7XHJcbiAgY29uc29sZS5sb2coXCJhbmpheVwiLCBwcm9wcyk7XHJcbiAgY29uc3QgbW9udGhMYWJlbCA9IFtcclxuICAgIFwiSmFuXCIsXHJcbiAgICBcIkZlYlwiLFxyXG4gICAgXCJNYXJcIixcclxuICAgIFwiQXByXCIsXHJcbiAgICBcIk1laVwiLFxyXG4gICAgXCJKdW5cIixcclxuICAgIFwiSnVsXCIsXHJcbiAgICBcIkF1Z1wiLFxyXG4gICAgXCJTZXBcIixcclxuICAgIFwiT2N0XCIsXHJcbiAgICBcIk5vdlwiLFxyXG4gICAgXCJEZXNcIixcclxuICBdO1xyXG4gIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICBsZXQgZGF5ID0gbnVsbDtcclxuICBsZXQgbW9udGggPSBudWxsO1xyXG4gIGxldCB5ZWFyID0gbnVsbDtcclxuICBsZXQgbGFiZWwgPSBbXTtcclxuICBsZXQgcG9zaXRpZiA9IFtdO1xyXG4gIGxldCBzZW1idWggPSBbXTtcclxuICBsZXQgbWVuaW5nZ2FsID0gW107XHJcbiAgbGV0IGFjdGl2ZSA9IFtdO1xyXG4gIGxldCBkYXRhID0gW107XHJcbiAgZm9yIChsZXQgdmFsdWUgaW4gcHJvcHMuc3RhdGlzdGlrKSB7XHJcbiAgICBub3dEYXRlID0gbmV3IERhdGUodmFsdWUuRGF0ZSk7XHJcbiAgICBkYXkgPSBub3dEYXRlLmdldERheSgpO1xyXG4gICAgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCk7XHJcbiAgICB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGFiZWwucHVzaChkYXkgKyBcIiBcIiArIG1vbnRoTGFiZWxbTWF0aC5hYnMobW9udGgpXSk7XHJcbiAgICBwb3NpdGlmLnB1c2godmFsdWUuQ29uZmlybWVkKTtcclxuICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XHJcbiAgICBtZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpO1xyXG4gICAgYWN0aXZlLnB1c2godmFsdWUuQWN0aXZlKTtcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGxhYmVsOiBsYWJlbCxcclxuICAgIHBvc2l0aWY6IHBvc2l0aWYsXHJcbiAgICBzZW1idWg6IHNlbWJ1aCxcclxuICAgIG1lbmluZ2dhbDogbWVuaW5nZ2FsLFxyXG4gICAgYWN0aXZlOiBhY3RpdmUsXHJcbiAgfTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==