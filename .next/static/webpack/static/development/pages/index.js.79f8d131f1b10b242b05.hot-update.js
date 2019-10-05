webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Banner_form/Banner_form.js":
/*!***********************************************!*\
  !*** ./components/Banner_form/Banner_form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Banner_form.css */ "./components/Banner_form/Banner_form.css");
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Banner_form_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Svg_search_Svg_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Svg_search/Svg_search */ "./components/Svg_search/Svg_search.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Banner_form\\Banner_form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var Form =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Form, _React$Component);

  function Form(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Form);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Form).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getCities",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var respond, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('get cities');
              _context.next = 3;
              return fetch('https://stage.reyhoon.com/public-api/v1/cities', {
                method: "GET"
              });

            case 3:
              respond = _context.sent;

              if (!respond.ok) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return respond.json();

            case 7:
              data = _context.sent;
              console.log(data);
              _context.next = 12;
              break;

            case 11:
              console.error(respons.status);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "regionGet", function (e) {
      _this.setState({
        region: e.target.value
      }, function () {
        console.log(_this.state.region);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "submit", function (e) {
      e.preventDefault();
      e.target.querySelector("input[id='txt1']").value && e.target.querySelector("input[id='txt2']").value ? _this.setState({
        city: e.target.querySelector("input[id='txt1']").value + " . ",
        region: e.target.querySelector("input[id='txt2']").value
      }) : _this.setState({
        city: "هر دو ورودی را کامل کنید",
        region: ""
      });
    });

    _this.submit = _this.submit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)); // this.cityGet=this.cityGet.bind(this);

    _this.state = {
      city: "",
      region: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("section", {
        style: {
          marginBottom: '30px',
          marginTop: "45px !important"
        },
        className: "header-form-section margin-v-60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u0646 \u0644\u06CC\u0633\u062A \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A\u200C\u0641\u0648\u062F\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0633\u0631\u0648\u06CC\u0633 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F\u060C \u0645\u0646\u0637\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."), __jsx("form", {
        onSubmit: this.submit,
        className: "header-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("input", {
        className: "child-1",
        id: "txt1",
        type: "text",
        onClick: function onClick() {
          return _this2.getCities;
        },
        placeholder: "\u062A\u0647\u0631\u0627\u0646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("div", {
        className: "child-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "child-2-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\xA9"), __jsx("input", {
        className: "child-2-input",
        type: "text",
        id: "txt2",
        onChange: this.regionGet,
        placeholder: "\u0645\u062B\u0644\u0627 \u0646\u06CC\u0627\u0648\u0631\u0627\u0646",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("button", {
        className: "child-3",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_Svg_search_Svg_search__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.city, this.state.region));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form); // cityGet=(e)=>{
//     this.setState({
//         city:e.target.value
//     },()=>{
//             console.log(this.state.city);
//             fetch(`https://www.reyhoon.com/public-api/v1/cities`).
//             then(   respond=>{
//                         var responeJson=  respond.json();
//                         return responeJson
//                     }
//                 ).
//             catch(  error=>{console.log(error+"    sddddddddddd")})
//           } 
//     )
// }

/***/ })

})
//# sourceMappingURL=index.js.79f8d131f1b10b242b05.hot-update.js.map