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
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-search-input */ "./node_modules/react-search-input/lib/index.js");
/* harmony import */ var react_search_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_search_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Banner_form.css */ "./components/Banner_form/Banner_form.css");
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Banner_form_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Svg_search_Svg_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Svg_search/Svg_search */ "./components/Svg_search/Svg_search.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Banner_form\\Banner_form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
// onBlur={() => this.setState({ showSuggest: false })} 






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
              _context.next = 2;
              return fetch('https://stage.reyhoon.com/public-api/v1/cities', {
                method: "GET"
              });

            case 2:
              respond = _context.sent;

              if (!respond.ok) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return respond.json();

            case 6:
              data = _context.sent;

              _this.setState({
                allCityies: data.cities
              });

              _context.next = 11;
              break;

            case 10:
              console.error("https_code" + respond.status);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "regionGet", function (e) {
      var regionTyped = e.target.value;
      if (regionTyped.length >= 4) _this.setState({
        region: regionTyped
      },
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var respond, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("https://stage.reyhoon.com/location/query?query=".concat(_this.state.region, "&city=").concat(_this.state.city));

              case 2:
                respond = _context2.sent;

                if (!respond.ok) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return respond.json();

              case 6:
                data = _context2.sent;

                _this.setState({
                  allRegion: data.suggestions,
                  showSuggestRegion: true
                });

                _context2.next = 11;
                break;

              case 10:
                console.error("https_code" + respond.status);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "submit", function (e) {
      e.preventDefault();
      e.target.querySelector("input[id='txt1']").value = _this.state.city;
      e.target.querySelector("input[id='txt1']").value && e.target.querySelector("input[id='txt2']").value ? _this.setState({
        region: e.target.querySelector("input[id='txt2']").value
      }) : _this.setState({
        city: "هر دو ورودی را کامل کنید",
        region: ""
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "searchUpdated", function (term) {
      var temp = term.target.value;
      if (temp.length >= 2) _this.setState({
        searchTerm: temp
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "citySuggestedShow", function () {
      _this.setState({
        showSuggestCity: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "regionSuggestedShow", function () {
      _this.setState({
        showSuggestRegion: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setCity", function (citySelected) {
      var node = react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.findDOMNode(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)); //    document.querySelector("input[id='txt1']").value=citySelected;

      node.querySelector("input[id='txt2']").focus();

      _this.setState({
        city: citySelected,
        showSuggestCity: false
      });
    });

    _this.submit = _this.submit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)); // this.cityGet=this.cityGet.bind(this);

    _this.searchUpdated = _this.searchUpdated.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.suggestedCittyBlock = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.state = {
      city: "",
      region: "",
      allCityies: [],
      searchTerm: '',
      sugestionCity: '',
      showSuggestCity: false,
      showSuggestRegion: false,
      allRegion: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.getCities();

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx;

      var filteredCities = this.state.allCityies.filter(Object(react_search_input__WEBPACK_IMPORTED_MODULE_10__["createFilter"])(this.state.searchTerm, 'name')); //  console.log(filteredCities);

      return __jsx("section", {
        style: {
          marginBottom: '30px',
          marginTop: "45px !important"
        },
        className: "header-form-section margin-v-60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "\u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u0646 \u0644\u06CC\u0633\u062A \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A\u200C\u0641\u0648\u062F\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0633\u0631\u0648\u06CC\u0633 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F\u060C \u0645\u0646\u0637\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."), __jsx("form", {
        onSubmit: this.submit,
        className: "header-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("input", {
        value: this.state.city,
        id: "txt1",
        type: "text",
        onFocus: function onFocus() {
          return _this2.citySuggestedShow();
        },
        onChange: function onChange(e) {
          return _this2.searchUpdated(e);
        },
        placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('citySuggested', {
          'showCitySuggested': this.state.showSuggestCity
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "( ", this.state.allCityies.length, ") \u062A\u062D\u062A \u067E\u0648\u0634\u0634"), filteredCities.map(function (city, key) {
        return __jsx("li", {
          onClick: function onClick() {
            return _this2.setCity(city.name);
          },
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, city.name);
      })), __jsx("div", {
        className: "child-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("span", {
        className: "child-2-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "\xA9"), __jsx("input", (_jsx = {
        className: "child-2-input",
        type: "text",
        id: "txt2",
        onChange: function onChange() {
          return _this2.regionSuggestedShow();
        }
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "onChange", this.regionGet), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "placeholder", "\u0645\u062B\u0644\u0627 \u0646\u06CC\u0627\u0648\u0631\u0627\u0646"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 142
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__self", this), _jsx))), __jsx("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('regionSuggested', {
          'showRegionSuggested': this.state.showSuggestRegion
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, this.state.allRegion.map(function (regionSuggested, key) {
        return __jsx("li", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, regionSuggested.value);
      })), __jsx("button", {
        className: "child-3",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx(_Svg_search_Svg_search__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.state.city, " . ", this.state.region));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form); // onBlur={() => this.setState({ showSuggest: false })}

/***/ })

})
//# sourceMappingURL=index.js.36836128ccbbaa4e42f6.hot-update.js.map