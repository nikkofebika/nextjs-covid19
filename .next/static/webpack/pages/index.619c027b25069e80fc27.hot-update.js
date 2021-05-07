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
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var _iterator = _createForOfIteratorHelper(props.statistik),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
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
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGlicmFyeS5qcyJdLCJuYW1lcyI6WyJzdW0iLCJrZXkiLCJwcm9wcyIsImlzR2xvYmFsIiwiZGF0YSIsInJlZHVjZSIsImEiLCJhdHRyaWJ1dGVzIiwiQWN0aXZlIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiQ29uZmlybWVkIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJsaW5lQ2hydCIsIm1vbnRoTGFiZWwiLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImxhYmVsIiwiYWN0aXZlIiwic3RhdGlzdGlrIiwidmFsdWUiLCJnZXREYXkiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVzaCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNqQyxNQUFJQSxLQUFLLENBQUNDLFFBQVYsRUFBb0I7QUFDbEIsWUFBUUYsR0FBUjtBQUNFLFdBQUssU0FBTDtBQUNFLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUFYLENBQWtCLFVBQUNMLEdBQUQsRUFBTU0sQ0FBTixFQUFZO0FBQ25DLGlCQUFPTixHQUFHLEdBQUdNLENBQUMsQ0FBQ0MsVUFBRixDQUFhQyxNQUExQjtBQUNELFNBRk0sRUFFSixDQUZJLENBQVA7QUFHQTs7QUFDRixXQUFLLFFBQUw7QUFDRSxlQUFPTixLQUFLLENBQUNFLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixVQUFDTCxHQUFELEVBQU1NLENBQU4sRUFBWTtBQUNuQyxpQkFBT04sR0FBRyxHQUFHTSxDQUFDLENBQUNDLFVBQUYsQ0FBYUUsU0FBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0E7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsZUFBT1AsS0FBSyxDQUFDRSxJQUFOLENBQVdD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LGFBQVMsRUFBRUEsU0FKTjtBQUtMVSxVQUFNLEVBQUVBO0FBTEgsR0FBUDtBQU9BLFNBQU9wQixJQUFQO0FBQ0QsQ0E1Q00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjE5YzAyN2IyNTA2OWU4MGZjMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAoa2V5LCBwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcInBvc2l0aWZcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwicG9zaXRpZlwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZW1idWhcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZW5pbmdnYWxcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkaXJhd2F0XCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0uZGlyYXdhdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZUNocnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBtb250aExhYmVsID0gW1xyXG4gICAgXCJKYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWVpXCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlc1wiLFxyXG4gIF07XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCBkYXkgPSBudWxsO1xyXG4gIGxldCBtb250aCA9IG51bGw7XHJcbiAgbGV0IHllYXIgPSBudWxsO1xyXG4gIGxldCBsYWJlbCA9IFtdO1xyXG4gIGxldCBwb3NpdGlmID0gW107XHJcbiAgbGV0IHNlbWJ1aCA9IFtdO1xyXG4gIGxldCBtZW5pbmdnYWwgPSBbXTtcclxuICBsZXQgYWN0aXZlID0gW107XHJcbiAgbGV0IGRhdGEgPSBbXTtcclxuICBmb3IgKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcclxuICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcclxuICAgIGRheSA9IG5vd0RhdGUuZ2V0RGF5KCk7XHJcbiAgICBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKTtcclxuICAgIHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsYWJlbC5wdXNoKGRheSArIFwiIFwiICsgbW9udGhMYWJlbFtNYXRoLmFicyhtb250aCldKTtcclxuICAgIHBvc2l0aWYucHVzaCh2YWx1ZS5Db25maXJtZWQpO1xyXG4gICAgc2VtYnVoLnB1c2godmFsdWUuUmVjb3ZlcmVkKTtcclxuICAgIG1lbmluZ2dhbC5wdXNoKHZhbHVlLkRlYXRocyk7XHJcbiAgICBhY3RpdmUucHVzaCh2YWx1ZS5BY3RpdmUpO1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgcG9zaXRpZjogcG9zaXRpZixcclxuICAgIHNlbWJ1aDogc2VtYnVoLFxyXG4gICAgbWVuaW5nZ2FsOiBtZW5pbmdnYWwsXHJcbiAgICBhY3RpdmU6IGFjdGl2ZSxcclxuICB9O1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9