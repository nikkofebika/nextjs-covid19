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
  console.log("anjay props", props);
  console.log("anjay", props.statistik);
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
  console.log("data", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGlicmFyeS5qcyJdLCJuYW1lcyI6WyJzdW0iLCJrZXkiLCJwcm9wcyIsImlzR2xvYmFsIiwiZGF0YSIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQWN0aXZlIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQ29uZmlybWVkIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJsaW5lQ2hydCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0aXN0aWsiLCJtb250aExhYmVsIiwibm93RGF0ZSIsIkRhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJsYWJlbCIsImFjdGl2ZSIsInZhbHVlIiwiZ2V0RGF5IiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDakMsTUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLFlBQVFGLEdBQVI7QUFDRSxXQUFLLFNBQUw7QUFDRSxlQUFPQyxLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixVQUFDTCxHQUFELEVBQU1NLENBQU4sRUFBWTtBQUNuQyxpQkFBT04sR0FBRyxHQUFHTSxDQUFDLENBQUNDLFVBQUYsQ0FBYUMsTUFBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsZUFBT04sS0FBSyxDQUFDRSxJQUFOLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0wsR0FBRCxFQUFNTSxDQUFOLEVBQVk7QUFDbkMsaUJBQU9OLEdBQUcsR0FBR00sQ0FBQyxDQUFDQyxVQUFGLENBQWFFLFNBQTFCO0FBQ0QsU0FGTSxFQUVKLENBRkksQ0FBUDtBQUdBOztBQUNGLFdBQUssV0FBTDtBQUNFLGVBQU9QLEtBQUssQ0FBQ0Us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U0FBSyxFQUFFQSxLQURGO0FBRUxkLFdBQU8sRUFBRUEsT0FGSjtBQUdMQyxVQUFNLEVBQUVBLE1BSEg7QUFJTEMsYUFBUyxFQUFFQSxTQUpOO0FBS0xhLFVBQU0sRUFBRUE7QUFMSCxHQUFQO0FBT0FWLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JkLElBQXBCO0FBQ0EsU0FBT0EsSUFBUDtBQUNELENBL0NNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAzMGQ4ZmZhMjhmMTY0YWUxZjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3VtID0gKGtleSwgcHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuaXNHbG9iYWwpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgXCJwb3NpdGlmXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQWN0aXZlO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2VtYnVoXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVuaW5nZ2FsXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlyYXdhdFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhLnJlZHVjZSgoc3VtLCBhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3VtICsgYS5hdHRyaWJ1dGVzLkNvbmZpcm1lZDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcInBvc2l0aWZcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5wb3NpdGlmO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2VtYnVoXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uc2VtYnVoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVuaW5nZ2FsXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ubWVuaW5nZ2FsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlyYXdhdFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVDaHJ0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJhbmpheSBwcm9wc1wiLCBwcm9wcyk7XHJcbiAgY29uc29sZS5sb2coXCJhbmpheVwiLCBwcm9wcy5zdGF0aXN0aWspO1xyXG4gIGNvbnN0IG1vbnRoTGFiZWwgPSBbXHJcbiAgICBcIkphblwiLFxyXG4gICAgXCJGZWJcIixcclxuICAgIFwiTWFyXCIsXHJcbiAgICBcIkFwclwiLFxyXG4gICAgXCJNZWlcIixcclxuICAgIFwiSnVuXCIsXHJcbiAgICBcIkp1bFwiLFxyXG4gICAgXCJBdWdcIixcclxuICAgIFwiU2VwXCIsXHJcbiAgICBcIk9jdFwiLFxyXG4gICAgXCJOb3ZcIixcclxuICAgIFwiRGVzXCIsXHJcbiAgXTtcclxuICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGRheSA9IG51bGw7XHJcbiAgbGV0IG1vbnRoID0gbnVsbDtcclxuICBsZXQgeWVhciA9IG51bGw7XHJcbiAgbGV0IGxhYmVsID0gW107XHJcbiAgbGV0IHBvc2l0aWYgPSBbXTtcclxuICBsZXQgc2VtYnVoID0gW107XHJcbiAgbGV0IG1lbmluZ2dhbCA9IFtdO1xyXG4gIGxldCBhY3RpdmUgPSBbXTtcclxuICBsZXQgZGF0YSA9IFtdO1xyXG4gIGZvciAobGV0IHZhbHVlIGluIHByb3BzLnN0YXRpc3Rpaykge1xyXG4gICAgbm93RGF0ZSA9IG5ldyBEYXRlKHZhbHVlLkRhdGUpO1xyXG4gICAgZGF5ID0gbm93RGF0ZS5nZXREYXkoKTtcclxuICAgIG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aExhYmVsW01hdGguYWJzKG1vbnRoKV0pO1xyXG4gICAgcG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XHJcbiAgICBzZW1idWgucHVzaCh2YWx1ZS5SZWNvdmVyZWQpO1xyXG4gICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcclxuICAgIGFjdGl2ZS5wdXNoKHZhbHVlLkFjdGl2ZSk7XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBsYWJlbDogbGFiZWwsXHJcbiAgICBwb3NpdGlmOiBwb3NpdGlmLFxyXG4gICAgc2VtYnVoOiBzZW1idWgsXHJcbiAgICBtZW5pbmdnYWw6IG1lbmluZ2dhbCxcclxuICAgIGFjdGl2ZTogYWN0aXZlLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9