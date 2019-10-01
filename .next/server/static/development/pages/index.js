module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/best_three_good_resturant.json":
/*!***********************************************!*\
  !*** ./assets/best_three_good_resturant.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"image\":\"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/baguette_5494_1536561462.jpeg@!branch_logo_web_default\",\"name\":\"باگت (اندرزگو)\",\"description\":\" ،هات داگ،فست فود\",\"rateAverage\":55,\"address\":\"بلوار اندرزگو، بین کاوه و قیطریه، نبش مهر محمدی جنوبی\",\"voteNumber\":15},{\"id\":1,\"image\":\"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shila_8_1540375602.jpeg@!branch_logo_web_default\",\"name\":\"شیلا (مطهری)\",\"description\":\" ،هات داگ،فست فود\",\"rateAverage\":70,\"address\":\"ولیعصر، مطهری، فتحی شقاقی، زیر برج بلورین\",\"voteNumber\":3.5},{\"id\":2,\"image\":\"https://dist.reyhoon-static.com/uploads/images/restaurants/logos/pizza-hot_15_1536498282.jpeg@!branch_logo_web_default\",\"name\":\"پیتزا هات (سعادت آباد)\",\"description\":\" ،هات داگ،فست فود\",\"rateAverage\":25,\"address\":\"سعادت آباد، پاساژ میلاد نور، طبقه همکف\",\"voteNumber\":12}]");

/***/ }),

/***/ "./components/Article/Article.css":
/*!****************************************!*\
  !*** ./components/Article/Article.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Article/Article.js":
/*!***************************************!*\
  !*** ./components/Article/Article.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Article_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.css */ "./components/Article/Article.css");
/* harmony import */ var _Article_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Article_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Article\\Article.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArticleData = [{
  id: 0,
  title: "چرا از ریحون خرید کنیم؟",
  comment: "ریحون این امکان را برای شما فراهم می‌کند تا رستوران های اطرافتان را به راحتی مشاهده کنید و با بررسی منوهای عکس دار آن‌ها غذای مورد علاقه‌تان را به راحتی سفارش دهید و درب منزل یا محل کارتان تحویل بگیرید."
}, {
  id: 1,
  title: "چرا از ریحون خرید کنیم؟",
  comment: "ریحون این امکان را برای شما فراهم می‌کند تا رستوران های اطرافتان را به راحتی مشاهده کنید و با بررسی منوهای عکس دار آن‌ها غذای مورد علاقه‌تان را به راحتی سفارش دهید و درب منزل یا محل کارتان تحویل بگیرید."
}, {
  id: 2,
  title: "چرا از ریحون خرید کنیم؟",
  comment: "ریحون این امکان را برای شما فراهم می‌کند تا رستوران های اطرافتان را به راحتی مشاهده کنید و با بررسی منوهای عکس دار آن‌ها غذای مورد علاقه‌تان را به راحتی سفارش دهید و درب منزل یا محل کارتان تحویل بگیرید."
}, {
  id: 3,
  title: "چرا از ریحون خرید کنیم؟",
  comment: "ریحون این امکان را برای شما فراهم می‌کند تا رستوران های اطرافتان را به راحتی مشاهده کنید و با بررسی منوهای عکس دار آن‌ها غذای مورد علاقه‌تان را به راحتی سفارش دهید و درب منزل یا محل کارتان تحویل بگیرید."
}];

function renderArticleData() {
  const ArticleDataRendered = ArticleData.map(part => __jsx("div", {
    key: part.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, part.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, part.comment)));
  return ArticleDataRendered;
}

const Article = () => {
  return __jsx("article", {
    class: "article margin-v-45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, renderArticleData());
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/Banner_box/Banner_box.css":
/*!**********************************************!*\
  !*** ./components/Banner_box/Banner_box.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Banner_box/Banner_box.js":
/*!*********************************************!*\
  !*** ./components/Banner_box/Banner_box.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_heading_Banner_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Banner_heading/Banner_heading */ "./components/Banner_heading/Banner_heading.js");
/* harmony import */ var _Banner_form_Banner_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Banner_form/Banner_form */ "./components/Banner_form/Banner_form.js");
/* harmony import */ var _Banner_box_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Banner_box.css */ "./components/Banner_box/Banner_box.css");
/* harmony import */ var _Banner_box_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Banner_box_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Banner_box\\Banner_box.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Banner = () => {
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_Banner_heading_Banner_heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(_Banner_form_Banner_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Banner_form/Banner_form.css":
/*!************************************************!*\
  !*** ./components/Banner_form/Banner_form.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Banner_form/Banner_form.js":
/*!***********************************************!*\
  !*** ./components/Banner_form/Banner_form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner_form.css */ "./components/Banner_form/Banner_form.css");
/* harmony import */ var _Banner_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Banner_form_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Banner_form\\Banner_form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Form extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submit", e => {
      e.preventDefault(); // console.log()
      // console.log(e.target.querySelector("input[id='txt2']").value)

      e.target.querySelector("input[id='txt1']").value && e.target.querySelector("input[id='txt2']").value ? this.setState({
        city: e.target.querySelector("input[id='txt1']").value + " . ",
        address: e.target.querySelector("input[id='txt2']").value
      }) : this.setState({
        city: "هر دو ورودی را کامل کنید",
        address: ""
      });
    });

    this.submit = this.submit.bind(this);
    this.state = {
      city: "",
      address: ""
    };
  }

  render() {
    return __jsx("section", {
      style: {
        marginBottom: '30px',
        marginTop: "45px !important"
      },
      className: "header-form-section margin-v-60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u0646 \u0644\u06CC\u0633\u062A \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A\u200C\u0641\u0648\u062F\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0633\u0631\u0648\u06CC\u0633 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F\u060C \u0645\u0646\u0637\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."), __jsx("form", {
      onSubmit: this.submit,
      className: "header-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("input", {
      className: "child-1",
      id: "txt1",
      type: "text",
      placeholder: "\u062A\u0647\u0631\u0627\u0646",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("div", {
      className: "child-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("span", {
      className: "child-2-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "\xA9"), __jsx("input", {
      className: "child-2-input",
      type: "text",
      id: "txt2",
      placeholder: "\u0645\u062B\u0644\u0627 \u0646\u06CC\u0627\u0648\u0631\u0627\u0646",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx("button", {
      className: "child-3",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " ", __jsx("svg", {
      className: "search-svg",
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("g", {
      fill: "none",
      "fill-rule": "evenodd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("path", {
      d: "M0 0h18v18H0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("g", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      transform: "translate(2 2)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("circle", {
      cx: "6.125",
      cy: "6.125",
      r: "6.125",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("path", {
      d: "M13.373 13.373l-2.767-2.767",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("path", {
      d: "M0 0h18v18H0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, this.state.city, this.state.address));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/Banner_heading/Banner_heading.css":
/*!******************************************************!*\
  !*** ./components/Banner_heading/Banner_heading.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Banner_heading/Banner_heading.js":
/*!*****************************************************!*\
  !*** ./components/Banner_heading/Banner_heading.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_heading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner_heading.css */ "./components/Banner_heading/Banner_heading.css");
/* harmony import */ var _Banner_heading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Banner_heading_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Banner_heading\\Banner_heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Heading = () => {
  return __jsx("div", {
    className: "section-flex center-text heading  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    style: {
      marginBottom: '0',
      marginTop: "135px !important"
    },
    className: "margin-v-30 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "  \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A\u200C\u0641\u0648\u062F\u200C\u200C\u0647\u0627"));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.css":
/*!************************************************************************************!*\
  !*** ./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.js":
/*!***********************************************************************************!*\
  !*** ./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Best_resturant_in_day_heading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Best_resturant_in_day_heading.css */ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.css");
/* harmony import */ var _Best_resturant_in_day_heading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Best_resturant_in_day_heading_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Best_resturant_in_day_heading\\Best_resturant_in_day_heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BestResturantInDayHeadingst = () => {
  return __jsx("div", {
    className: "container-flex row-direction flex-center marginTop phablet-only-max",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A \u0641\u0648\u062F\u200C\u0647\u0627\u06CC \u0628\u0631\u062A\u0631 \u0645\u0627\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0645\u062A\u06CC\u0627\u0632\u200C\u062F\u0647\u06CC \u06A9\u0627\u0631\u0628\u0631\u0627\u0646"));
};

/* harmony default export */ __webpack_exports__["default"] = (BestResturantInDayHeadingst);

/***/ }),

/***/ "./components/Bg_diagonal/Bg_diagonal.css":
/*!************************************************!*\
  !*** ./components/Bg_diagonal/Bg_diagonal.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Bg_diagonal/Bg_diagonal.js":
/*!***********************************************!*\
  !*** ./components/Bg_diagonal/Bg_diagonal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bg_diagonal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bg_diagonal.css */ "./components/Bg_diagonal/Bg_diagonal.css");
/* harmony import */ var _Bg_diagonal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bg_diagonal_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Bg_diagonal\\Bg_diagonal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BgDiagonal = () => {
  return __jsx("section", {
    class: "bg-diagonal margin-v-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BgDiagonal);

/***/ }),

/***/ "./components/Branch_card/Branch_card.css":
/*!************************************************!*\
  !*** ./components/Branch_card/Branch_card.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Branch_card/Branch_card.js":
/*!***********************************************!*\
  !*** ./components/Branch_card/Branch_card.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BranchCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/best_three_good_resturant */ "./assets/best_three_good_resturant.json");
var _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/best_three_good_resturant */ "./assets/best_three_good_resturant.json", 1);
/* harmony import */ var _Branch_card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Branch_card.css */ "./components/Branch_card/Branch_card.css");
/* harmony import */ var _Branch_card_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Branch_card_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Star_rating_Star_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Star_rating/Star_rating */ "./components/Star_rating/Star_rating.js");
/* harmony import */ var _Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Best_resturant_in_day_heading/Best_resturant_in_day_heading */ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Branch_card\\Branch_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class BranchCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      dataResturant: []
    };
  } // createBranchCard=(n)=>{
  //         let i=0;
  //         let array=[];
  //         while(i<n){
  //             let el=<BranchCardInner ind={i}/>;
  //                 array.push(el);
  //                 i++;
  //             }
  //             return(array);
  // }


  componentDidMount() {
    this.setState({
      dataResturant: _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_1__
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("section", {
      style: {
        marginTop: "0 !important"
      },
      className: "container-flex row-direction phablet-only-max container-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.state.dataResturant.map((item, index) => {
      return __jsx("div", {
        className: "resturant-flex column-direction flex-evenly",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("img", {
        src: item.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, item.name), __jsx("div", {
        className: "div_flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("span", {
        className: "gold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, item.voteNumber), __jsx(_Star_rating_Star_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rating: item.rateAverage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "(", item.rateAverage, ")")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, item.description), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, item.address), __jsx("a", {
        href: "#",
        className: "btn btn-in-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u0634\u0631\u0648\u0639 \u0633\u0641\u0627\u0631\u0634"));
    })));
  }

} //     import BranchCardInner from "../Branch_card_inner/Branch_card_inner"
// import threeJson from "../../assets/best_three_good_resturant"
// export default class BranchCard extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             dataResturant:[]
//          }
//     }
//     createBranchCard=(n)=>{
//             let i=0;
//             let array=[];
//             while(i<n){
//                 let el=<BranchCardInner ind={i}/>;
//                     array.push(el);
//                     i++;
//                 }
//                 return(array);
//     }
//     componentDidMount(){
//         this.setState({dataResturant:threeJson},
//             ()=>console.log(this.state.dataResturant.name))
//     }
//     render(){
//         return(
//             <section class="container-flex row-direction phablet-only-max container-width">
//             {this.createBranchCard()}
//             </section>
//             )
//     }
// }
//}

/***/ }),

/***/ "./components/Cuisines_card/Cuisines_card.css":
/*!****************************************************!*\
  !*** ./components/Cuisines_card/Cuisines_card.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Cuisines_card/Cuisines_card.js":
/*!***************************************************!*\
  !*** ./components/Cuisines_card/Cuisines_card.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuisines_card.css */ "./components/Cuisines_card/Cuisines_card.css");
/* harmony import */ var _Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cuisines_inner_Cuisines_inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cuisines_inner/Cuisines_inner */ "./components/Cuisines_inner/Cuisines_inner.js");
/* harmony import */ var _Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cuisines_header/Cuisines_header */ "./components/Cuisines_header/Cuisines_header.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Cuisines_card\\Cuisines_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CuisinesData = [{
  food: "کباب",
  imageSrc: "https://dist.reyhoon-static.com/uploads/images/cuisines/kebab_1525012065.jpeg@!cuisine_card",
  activeNumber: 1836
}, {
  food: "پیتزا",
  imageSrc: "https://dist.reyhoon-static.com/uploads/images/cuisines/pizza_1539780235.jpeg@!cuisine_card",
  activeNumber: 1836
}, {
  food: "برگر",
  imageSrc: "https://dist.reyhoon-static.com/uploads/images/cuisines/hamburger_1539779150.jpeg@!cuisine_card",
  activeNumber: 1836
}, {
  food: "ساندویچ",
  imageSrc: "https://dist.reyhoon-static.com/uploads/images/cuisines/sandwich_1539782856.jpeg@!cuisine_card",
  activeNumber: 1836
}];

function renderCuisinesCard() {
  const CuisinesCardRendered = CuisinesData.map(card => __jsx(_Cuisines_inner_Cuisines_inner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    typeFood: card.food,
    image: `${card.imageSrc}`,
    activeNumber: card.activeNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
  return CuisinesCardRendered;
}

const CuisinesCard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("section", {
    style: {
      marginTop: "0 !important"
    },
    className: "container-flex img-box-flex container-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, renderCuisinesCard()));
};

/* harmony default export */ __webpack_exports__["default"] = (CuisinesCard);

/***/ }),

/***/ "./components/Cuisines_header/Cuisines_header.css":
/*!********************************************************!*\
  !*** ./components/Cuisines_header/Cuisines_header.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Cuisines_header/Cuisines_header.js":
/*!*******************************************************!*\
  !*** ./components/Cuisines_header/Cuisines_header.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cuisines_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuisines_header.css */ "./components/Cuisines_header/Cuisines_header.css");
/* harmony import */ var _Cuisines_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cuisines_header_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Cuisines_header\\Cuisines_header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CuisinesHeader = () => {
  return __jsx("section", {
    style: {
      marginBottom: "30px !important"
    },
    className: "which-food",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\u063A\u0630\u0627 \u0686\u0647 \u0645\u06CC\u0644 \u062F\u0627\u0631\u06CC\u062F?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "\u0635\u0628\u062D\u0627\u0646\u0647\u060C \u0646\u0627\u0647\u0627\u0631\u060C \u0634\u0627\u0645 \u06CC\u0627 \u0647\u0631 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u0644 \u062F\u0627\u0631\u06CC\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"));
};

/* harmony default export */ __webpack_exports__["default"] = (CuisinesHeader);

/***/ }),

/***/ "./components/Cuisines_inner/Cuisines_inner.js":
/*!*****************************************************!*\
  !*** ./components/Cuisines_inner/Cuisines_inner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Cuisines_inner\\Cuisines_inner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CuisinesInner(props) {
  return __jsx("div", {
    className: "margin-v-15",
    style: {
      backgroundImage: `url(${props.image})`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.typeFood), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0641\u0639\u0627\u0644", props.activeNumber));
}

/* harmony default export */ __webpack_exports__["default"] = (CuisinesInner);

/***/ }),

/***/ "./components/Download_app/Download_app.css":
/*!**************************************************!*\
  !*** ./components/Download_app/Download_app.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Download_app/Download_app.js":
/*!*************************************************!*\
  !*** ./components/Download_app/Download_app.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Download_app_form_Download_app_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Download_app_form/Download_app_form */ "./components/Download_app_form/Download_app_form.js");
/* harmony import */ var _Download_app_market_Download_app_market__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Download_app_market/Download_app_market */ "./components/Download_app_market/Download_app_market.js");
/* harmony import */ var _Download_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Download_app.css */ "./components/Download_app/Download_app.css");
/* harmony import */ var _Download_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Download_app_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Download_app\\Download_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DownloadApp = () => {
  return __jsx("section", {
    className: "app margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "app-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "app-flex-comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h1", {
    className: "app-h-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\u0631\u06CC\u062D\u0648\u0646 \u0631\u0648\u06CC \u0645\u0648\u0628\u0627\u06CC\u0644"), __jsx("p", {
    className: "app-comment-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0646\u0644\u0648\u062F \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0631\u06CC\u062D\u0648\u0646\u060C \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.")), __jsx(_Download_app_form_Download_app_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_Download_app_market_Download_app_market__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("p", {
    className: "app-comment-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\u0627\u06CC\u0646 \u0641\u0648\u0631\u0645 \u062A\u0648\u0633\u0637 reCAPTCHA \u0645\u062D\u0627\u0641\u0638\u062A \u0634\u062F\u0647 \u0648\u0633\u06CC\u0627\u0633\u06CC\u062A \u062D\u0641\u0638 ", __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC "), "\u0648\u0642\u0648\u0627\u0646\u06CC\u0646 \u0633\u0631\u0648\u06CC\u0633 \u06AF\u0648\u06AF\u0644 \u0628\u0631 \u0631\u0648\u06CC \u0622\u0646 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F."))), __jsx("img", {
    className: "mobile-image",
    src: "https://www.reyhoon.com/react-assets/dist/ca98ff0d.png?__WB_REVISION__=ca98ff0d0c7e3808157aa48c94953a75",
    alt: "\u0627\u067E \u0631\u06CC\u062D\u0648\u0646 \u0631\u0627 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadApp);

/***/ }),

/***/ "./components/Download_app_form/Download_app_form.css":
/*!************************************************************!*\
  !*** ./components/Download_app_form/Download_app_form.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Download_app_form/Download_app_form.js":
/*!***********************************************************!*\
  !*** ./components/Download_app_form/Download_app_form.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Download_app_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Download_app_form.css */ "./components/Download_app_form/Download_app_form.css");
/* harmony import */ var _Download_app_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Download_app_form_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Download_app_form\\Download_app_form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class DownloadAppForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handelSubmit", e => {
      const objectForm = event.target.querySelector("input[type='text']").value;
      e.preventDefault();
      console.log(objectForm);
      console.log(e.target);
    });

    this.state = {
      value: ""
    };
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  render() {
    return __jsx("form", {
      class: "app-flex-form",
      onSubmit: this.handelSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      placeholder: "\u0645\u062B\u0644\u0627 **91234509",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9 \u0627\u0632 \u0637\u0631\u06CC\u0642 sms"), __jsx("p", {
      class: "app-comment-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0631\u06CC\u062D\u0648\u0646 \u0628\u0631\u0627\u06CC Android \u0648 iOS \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0627\u0633\u062A."));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DownloadAppForm);

/***/ }),

/***/ "./components/Download_app_market/Download_app_Market.css":
/*!****************************************************************!*\
  !*** ./components/Download_app_market/Download_app_Market.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Download_app_market/Download_app_market.js":
/*!***************************************************************!*\
  !*** ./components/Download_app_market/Download_app_market.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Download_app_Market_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Download_app_Market.css */ "./components/Download_app_market/Download_app_Market.css");
/* harmony import */ var _Download_app_Market_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Download_app_Market_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Download_app_market\\Download_app_market.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DownloadAppMarketData = [{
  title: "دانلود اپلیکیشن اندروید ریحون از کافه بازار",
  image: "https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-light.png?x-oss-process=image/resize,w_199",
  hrefTag: "",
  id: 0
}, {
  title: "دانلود نسخه iOS اپلیکیشن ریحون از سیب اپ",
  image: "https://dist.reyhoon-static.com/web-assets/images/app-links/sibapp-light.png?x-oss-process=image/resize,w_199",
  hrefTag: "",
  id: 1
}, {
  title: "دانلود مستقیم نسخه اندروید اپلیکیشن ریحون",
  image: "https://dist.reyhoon-static.com/web-assets/images/app-links/reyhoon-light.png?x-oss-process=image/resize,w_199",
  hrefTag: "",
  id: 2
}, {
  title: "دانلود اپلیکیشن اندروید ریحون از گوگل پلی استور",
  image: "https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-light.png?x-oss-process=image/resize,w_199",
  hrefTag: "",
  id: 3
}, {
  title: "دانلود نسخه iOS از سیبچه",
  image: "https://dist.reyhoon-static.com/web-assets/images/app-links/ios-sibche-light.png?x-oss-process=image/resize,w_199",
  hrefTag: "",
  id: 4
}];

function renderDownloadAppMarket() {
  const DownloadAppMarketRendered = DownloadAppMarketData.map(imagex => __jsx("a", {
    href: imagex.hrefTag,
    key: imagex.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    title: imagex.title,
    src: `${imagex.image}`,
    alt: imagex.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
  return DownloadAppMarketRendered;
}

const DownloadAppMarket = () => {
  return __jsx("div", {
    class: "a-in-app-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, renderDownloadAppMarket());
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadAppMarket);

/***/ }),

/***/ "./components/Footer/Footer.css":
/*!**************************************!*\
  !*** ./components/Footer/Footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterTop_FooterTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FooterTop/FooterTop */ "./components/FooterTop/FooterTop.js");
/* harmony import */ var _FooterMiddle_FooterMiddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FooterMiddle/FooterMiddle */ "./components/FooterMiddle/FooterMiddle.js");
/* harmony import */ var _FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FooterBottom/FooterBottom */ "./components/FooterBottom/FooterBottom.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.css */ "./components/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Footer\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => {
  return __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_FooterTop_FooterTop__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(_FooterMiddle_FooterMiddle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FooterBottom/FooterBottom.css":
/*!**************************************************!*\
  !*** ./components/FooterBottom/FooterBottom.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/FooterBottom/FooterBottom.js":
/*!*************************************************!*\
  !*** ./components/FooterBottom/FooterBottom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_facebook_Svg_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Svg_facebook/Svg_facebook */ "./components/Svg_facebook/Svg_facebook.js");
/* harmony import */ var _Svg_instagram_Svg_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg_instagram/Svg_instagram */ "./components/Svg_instagram/Svg_instagram.js");
/* harmony import */ var _Svg_google_Svg_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Svg_google/Svg_google */ "./components/Svg_google/Svg_google.js");
/* harmony import */ var _Svg_twitter_Svg_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Svg_twitter/Svg_twitter */ "./components/Svg_twitter/Svg_twitter.js");
/* harmony import */ var _Svg_telegram_Svg_telegram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Svg_telegram/Svg_telegram */ "./components/Svg_telegram/Svg_telegram.js");
/* harmony import */ var _FooterBottom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FooterBottom.css */ "./components/FooterBottom/FooterBottom.css");
/* harmony import */ var _FooterBottom_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FooterBottom_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\FooterBottom\\FooterBottom.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SvgComponentData = [{
  icon: __jsx(_Svg_facebook_Svg_facebook__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(_Svg_instagram_Svg_instagram__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(_Svg_google_Svg_google__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(_Svg_twitter_Svg_twitter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(_Svg_telegram_Svg_telegram__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }),
  href: ""
}];

const SvgComponentRender = () => {
  const RenderedSvgComponent = SvgComponentData.map(icon => __jsx("a", {
    href: icon.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, icon.icon));
  return RenderedSvgComponent;
};

const FooterBottom = () => {
  return __jsx("div", {
    class: "footer-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    class: "margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, SvgComponentRender()), __jsx("div", {
    class: "margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\xA9 2017, ", __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Reyhoon"), ", All Rights Reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterBottom);

/***/ }),

/***/ "./components/FooterMiddle/FooterMiddle.css":
/*!**************************************************!*\
  !*** ./components/FooterMiddle/FooterMiddle.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/FooterMiddle/FooterMiddle.js":
/*!*************************************************!*\
  !*** ./components/FooterMiddle/FooterMiddle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterMiddle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterMiddle.css */ "./components/FooterMiddle/FooterMiddle.css");
/* harmony import */ var _FooterMiddle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FooterMiddle_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\FooterMiddle\\FooterMiddle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FooterMiddleData = [{
  id: 0,
  source: "https://www.reyhoon.com/react-assets/dist/9e91a300.png"
}, {
  id: 1,
  source: "https://www.reyhoon.com/react-assets/dist/9e91a300.png"
}, {
  id: 2,
  source: "https://www.reyhoon.com/react-assets/dist/9e91a300.png"
}];

const FooterMiddleRender = () => {
  const RenderedFooterMiddle = FooterMiddleData.map(image => __jsx("img", {
    id: image.id,
    src: image.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));
  return RenderedFooterMiddle;
};

const FooterMiddle = () => {
  return __jsx("div", {
    class: "footer-middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, FooterMiddleRender());
};

/* harmony default export */ __webpack_exports__["default"] = (FooterMiddle);

/***/ }),

/***/ "./components/FooterTop/FooterTop.css":
/*!********************************************!*\
  !*** ./components/FooterTop/FooterTop.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/FooterTop/FooterTop.js":
/*!*******************************************!*\
  !*** ./components/FooterTop/FooterTop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterTop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterTop.css */ "./components/FooterTop/FooterTop.css");
/* harmony import */ var _FooterTop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FooterTop_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\FooterTop\\FooterTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FooterTopData = [{
  id: 1,
  color: "#8b00af",
  sectionTitle: 'تماس با ریحون',
  links: [{
    id: 1,
    title: 'درباره ریحون',
    href: '#'
  }, {
    id: 2,
    title: 'تماس با ما',
    href: '#'
  }, {
    id: 3,
    title: 'وبلاگ ریحون',
    href: '#'
  }]
}, {
  id: 2,
  color: "#d40062",
  sectionTitle: 'رستوران ها',
  links: [{
    id: 1,
    title: 'ثبت رستوران',
    href: '#'
  }]
}, {
  id: 3,
  color: "#ff0613",
  sectionTitle: 'پشتیبانی ریحون',
  links: [{
    id: 1,
    title: 'سوالات متداول',
    href: '#'
  }, {
    id: 2,
    title: 'تماس با پشتیبانی',
    href: '#'
  }, {
    id: 3,
    title: 'قوانین و مقررات',
    href: '#'
  }]
}, {
  id: 4,
  color: "#ffc300",
  sectionTitle: 'اپلیکیشن های موبایل',
  items: [{
    src: "https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-dark.png?x-oss-process=image/resize,w_180",
    href: "https://play.google.com/store/apps/details?id=reyhoon.androidapp",
    id: 1
  }, {
    src: "https://dist.reyhoon-static.com/web-assets/images/app-links/sib-app-dark.png?x-oss-process=image/resize,w_180",
    href: "https://sibapp.com/applications/reyhoon",
    id: 2
  }, {
    src: "https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-dark.png?x-oss-process=image/resize,w_180",
    href: "https://cafebazaar.ir/app/reyhoon.androidapp/?l=fa",
    id: 3
  }]
}];

function renderFooter() {
  const renderdata = FooterTopData.map(item => {
    return __jsx("div", {
      key: item.id,
      style: {
        borderTop: `3px solid ${item.color}`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, item.sectionTitle), __jsx("ul", {
      className: "items-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, item.links ? item.links.map(link => __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("a", {
      href: link.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, link.title))) : item.items.map(link => __jsx("li", {
      key: link.id,
      className: "li_button_footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("a", {
      href: link.href,
      class: "a_button_footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("img", {
      src: link.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))))));
  });
  return renderdata;
}

const FooterTop = () => {
  return __jsx("div", {
    class: "footer-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "\u0645\u0631\u0627\u0642\u0628\u062A \u0648 \u0645\u062D\u0627\u0641\u0638\u062A \u0627\u0632 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0647\u0631 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631 \u0639\u0647\u062F\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0627\u0633\u062A. \u0631\u06CC\u062D\u0648\u0646 \u0633\u0631\u06CC\u0639\u062A\u0631\u06CC\u0646 \u0631\u0627\u0647 \u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627 \u0627\u0633\u062A. \u0645\u0646\u0648\u06CC \u0639\u06A9\u0633\u200C\u062F\u0627\u0631 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u0637\u0631\u0627\u0641\u062A\u0627\u0646 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u06A9\u0627\u0646 \u062E\u0648\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F \u0648 \u0633\u0641\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F."), renderFooter());
};

/* harmony default export */ __webpack_exports__["default"] = (FooterTop);

/***/ }),

/***/ "./components/Header/Header.css":
/*!**************************************!*\
  !*** ./components/Header/Header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_logo_Svg_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Svg_logo/Svg_logo */ "./components/Svg_logo/Svg_logo.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("header", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "nav-flex container-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo-reyhoon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_Svg_logo_Svg_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("nav", {
    className: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("ul", {
    className: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\u0631\u0627\u0647\u0646\u0645\u0627")), __jsx("ul", {
    className: "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "\u0639\u0636\u0648\u06CC\u062A"), __jsx("li", {
    className: "dash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\u0648\u0631\u0648\u062F"))))), __jsx("div", {
    className: "horizontal-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Prompted_box/Prompted_box.css":
/*!**************************************************!*\
  !*** ./components/Prompted_box/Prompted_box.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Prompted_box/Prompted_box.js":
/*!*************************************************!*\
  !*** ./components/Prompted_box/Prompted_box.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompted_inner_Prompted_inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Prompted_inner/Prompted_inner */ "./components/Prompted_inner/Prompted_inner.js");
/* harmony import */ var _Prompted_box_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prompted_box.css */ "./components/Prompted_box/Prompted_box.css");
/* harmony import */ var _Prompted_box_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Prompted_box_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Prompted_box\\Prompted_box.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PromptedBox = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "section-bg margin-v-45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "good-resturant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_Prompted_inner_Prompted_inner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PromptedBox);

/***/ }),

/***/ "./components/Prompted_inner/Prompted_inner.css":
/*!******************************************************!*\
  !*** ./components/Prompted_inner/Prompted_inner.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Prompted_inner/Prompted_inner.js":
/*!*****************************************************!*\
  !*** ./components/Prompted_inner/Prompted_inner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompted_inner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompted_inner.css */ "./components/Prompted_inner/Prompted_inner.css");
/* harmony import */ var _Prompted_inner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Prompted_inner_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Prompted_inner\\Prompted_inner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PromptedInnerData = [{
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/vitrin_6482_1547633681.jpeg@!branch_logo_web_default",
  title: "ویترین",
  alterText: "ویترین",
  id: 0
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shandiz-jordan_1485_1520945254.jpeg@!branch_logo_web_default",
  title: "شاندیز جردن",
  alterText: "شاندیز جردن",
  id: 1
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/rad-catering_1464_1520945288.jpeg@!branch_logo_web_default",
  title: "تهیه غذای راد",
  alterText: "تهیه غذای راد",
  id: 2
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/amolay_3424_1520945334.png@!branch_logo_web_default",
  title: "آمولای",
  alterText: "آمولای",
  id: 3
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/gennaro_5954_1542626720.jpeg@!branch_logo_web_default",
  title: "جنارو",
  alterText: "جنارو",
  id: 4
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/langine_4867_1538558144.jpeg@!branch_logo_web_default",
  title: "لانجین",
  alterText: "لانجین",
  id: 5
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/jo_140_1520945298.jpg@!branch_logo_web_default",
  title: "جو",
  alterText: "جو",
  id: 6
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/kubaba_5549_1547880029.jpeg@!branch_logo_web_default",
  title: "کوبابا",
  alterText: "کوبابا",
  id: 7
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/tomo_5059_1530707026.jpeg@!branch_logo_web_default",
  title: "تومو",
  alterText: "تومو",
  id: 8
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/narijeh_4007_1520945325.jpeg@!branch_logo_web_default",
  title: "ناریجه",
  alterText: "ناریجه",
  id: 9
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/amirchocolate_6246_1545546796.jpeg@!branch_logo_web_default",
  title: "امیر شکلات",
  alterText: "امیر شکلات",
  id: 10
}, {
  image: "https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shirinpolo_450_1520945307.jpeg@!branch_logo_web_default",
  title: "شیرین پلو",
  alterText: "ویترین",
  id: 11
}];

function renderPromptedInner() {
  const promptedInnerRendered = PromptedInnerData.map(logo => __jsx("div", {
    key: logo.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("img", {
    src: `${logo.image}`,
    alt: logo.alterText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, logo.title)));
  return promptedInnerRendered;
}

const PromptedInner = () => {
  return __jsx("div", {
    className: "good-resturant-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "\u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627\u06CC \u062E\u0648\u0628 \u062A\u0647\u0631\u0627\u0646 \u062F\u0631 \u0631\u06CC\u062D\u0648\u0646"), renderPromptedInner());
};

/* harmony default export */ __webpack_exports__["default"] = (PromptedInner);

/***/ }),

/***/ "./components/Question/Question.css":
/*!******************************************!*\
  !*** ./components/Question/Question.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Question/Question.js":
/*!*****************************************!*\
  !*** ./components/Question/Question.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Question_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.css */ "./components/Question/Question.css");
/* harmony import */ var _Question_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Question_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Question\\Question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Question() {
  return __jsx("section", {
    className: "any-question margin-v-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u0622\u06CC\u0627 \u0633\u0648\u0627\u0644 \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0627\u0631\u06CC\u062F\u061F"), __jsx("button", {
    className: "btn-in-box btn-in-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u0631\u0627\u0647\u0646\u0645\u0627"));
}

/***/ }),

/***/ "./components/Show_case/Show_case.css":
/*!********************************************!*\
  !*** ./components/Show_case/Show_case.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Show_case/Show_case.js":
/*!*******************************************!*\
  !*** ./components/Show_case/Show_case.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Show_case_inner_Show_case_inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Show_case_inner/Show_case_inner */ "./components/Show_case_inner/Show_case_inner.js");
/* harmony import */ var _Show_case_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show_case.css */ "./components/Show_case/Show_case.css");
/* harmony import */ var _Show_case_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Show_case_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg_heart_Svg_heart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Svg_heart/Svg_heart */ "./components/Svg_heart/Svg_heart.js");
/* harmony import */ var _Svg_location_Svg_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Svg_location/Svg_location */ "./components/Svg_location/Svg_location.js");
/* harmony import */ var _Svg_spoon_and_fork_Svg_spoon_and_fork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Svg_spoon_and_fork/Svg_spoon_and_fork */ "./components/Svg_spoon_and_fork/Svg_spoon_and_fork.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Show_case\\Show_case.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from "react";
// import ShowCaseInner from "../Show_case_inner/Show_case_inner"
// import "./Show_case.css"
// import SvgHeart from "../Svg_heart/Svg_heart"
// import SvgLocation from "../Svg_location/Svg_location"
// import SvgSpoonAndFork from "../Svg_spoon_and_fork/Svg_spoon_and_fork"
// const ShowCase=()=>{
// return(
//     <section className="container-flex row-direction flex-around  container-width"> 
//         <ShowCaseInner heading="غذایتان را نوش‌جان کنید" comment="درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید." children={<SvgHeart/>}/>
//         <ShowCaseInner heading="غذای خود را انتخاب کنید" comment="غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید." children={<SvgSpoonAndFork/>} />
//         <ShowCaseInner heading="شهر و منطقه خود را وارد کنید" comment="منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید." children={<SvgLocation/>} />
//         </section> 
// )
// }
// export default ShowCase;






const showCaseData = [{
  heading: 'غذایتان را نوش‌جان کنید',
  comment: 'درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.',
  icon: __jsx(_Svg_heart_Svg_heart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }),
  id: 1
}, {
  heading: 'شهر و منطقه خود را وارد کنید',
  comment: 'منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.',
  icon: __jsx(_Svg_location_Svg_location__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }),
  id: 2
}, {
  heading: 'غذای خود را انتخاب کنید',
  comment: 'غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.',
  icon: __jsx(_Svg_spoon_and_fork_Svg_spoon_and_fork__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }),
  id: 3
}];

function renderShowcaseCard() {
  const showCaseRendered = showCaseData.map(card => __jsx(_Show_case_inner_Show_case_inner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: card.id,
    heading: card.heading,
    comment: card.comment,
    children: card.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
  return showCaseRendered;
}

const ShowCase = () => {
  return __jsx("section", {
    style: {
      marginBottom: "45px !important"
    },
    className: "container-flex row-direction flex-around  container-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, renderShowcaseCard());
};

/* harmony default export */ __webpack_exports__["default"] = (ShowCase);

/***/ }),

/***/ "./components/Show_case_inner/Show_case_inner.css":
/*!********************************************************!*\
  !*** ./components/Show_case_inner/Show_case_inner.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Show_case_inner/Show_case_inner.js":
/*!*******************************************************!*\
  !*** ./components/Show_case_inner/Show_case_inner.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Show_case_inner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show_case_inner.css */ "./components/Show_case_inner/Show_case_inner.css");
/* harmony import */ var _Show_case_inner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Show_case_inner_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Show_case_inner\\Show_case_inner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // class ShowCaseInner extends Component{
//     render(){
//         return(
//                 <div class="box-flex column-direction flex-around margin-v-15">
//                         <div></div>
//                         <h2>{this.props.heading}</h2>
//                         <p>{this.props.comment}</p>
//                 </div>
//         )
//     }
// }
// export default ShowCaseInner;

function ShowCaseInner(props) {
  return __jsx("div", {
    className: "box-flex column-direction flex-around margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children), __jsx("h2", {
    className: "box-flex-h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.heading), __jsx("p", {
    className: "box-flex-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.comment));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowCaseInner);

/***/ }),

/***/ "./components/Star_rating/Star_rating.css":
/*!************************************************!*\
  !*** ./components/Star_rating/Star_rating.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Star_rating/Star_rating.js":
/*!***********************************************!*\
  !*** ./components/Star_rating/Star_rating.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StarRating; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Star_rating_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Star_rating.css */ "./components/Star_rating/Star_rating.css");
/* harmony import */ var _Star_rating_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Star_rating_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Star_rating\\Star_rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


class StarRating extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "renderStars", n => {
      let i = 0;
      let array = [];

      while (i < n) {
        let el = __jsx("div", {
          className: "stars",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        });

        array.push(el);
        i++;
      }

      let arrayMap = array.map((value, index, array) => {
        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.rating / (100 / this.state.numberStars)) >= index) {
          value = __jsx("div", {
            className: "stars active",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          });
        }

        return value;
      });
      return arrayMap;
    });

    this.state = {
      numberStars: 5,
      rating: 25
    };
  }

  componentDidMount() {
    this.setState({
      rating: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.rating)
    });
  } // React lifecycle ro bekhoon ye chizi be naame componentDidMount hast ke daghighan kaaresh hamine ke mikhaay


  render() {
    return __jsx("div", {
      className: "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, this.renderStars(this.state.numberStars));
  }

}

/***/ }),

/***/ "./components/Svg_facebook/Svg_facebook.js":
/*!*************************************************!*\
  !*** ./components/Svg_facebook/Svg_facebook.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_facebook\\Svg_facebook.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgFacebook = () => {
  return __jsx("svg", {
    style: {
      fill: "currentColor"
    },
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "enable-background": "new 0 0 409.221 409.221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("g", {
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("path", {
    d: "M0 0h18v18H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    fill: "currentColor",
    d: "M11.999 8.985H9.836V17H6.559V8.985H5V6.168h1.559V4.345C6.559 3.04 7.17 1 9.865 1l2.427.01v2.735h-1.76c-.29 0-.696.146-.696.767V6.17h2.449l-.286 2.815z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgFacebook);

/***/ }),

/***/ "./components/Svg_google/Svg_google.js":
/*!*********************************************!*\
  !*** ./components/Svg_google/Svg_google.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_google\\Svg_google.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgGoogle = () => __jsx("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 458.246 458.246",
  style: {
    enableBackground: "new 0 0 458.246 458.246"
  },
  xmlSpace: "preserve",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("path", {
  style: {
    fill: "currentColor"
  },
  d: "M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71 c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605 c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292 c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078 c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648 H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}), __jsx("path", {
  style: {
    fill: "currentColor"
  },
  d: "M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609 v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173 c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604 c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (SvgGoogle);

/***/ }),

/***/ "./components/Svg_heart/Svg_heart.js":
/*!*******************************************!*\
  !*** ./components/Svg_heart/Svg_heart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_heart\\Svg_heart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgHeart = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradientHeart",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("stop", {
    "stop-color": "#8B00AF",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#D40062",
    offset: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#FF0613",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))), __jsx("path", {
    fill: "url(#linearGradientHeart)",
    "fill-rule": "evenodd",
    d: "M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgHeart);

/***/ }),

/***/ "./components/Svg_instagram/Svg_instagram.js":
/*!***************************************************!*\
  !*** ./components/Svg_instagram/Svg_instagram.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_instagram\\Svg_instagram.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgInstagram = () => {
  return __jsx("svg", {
    style: {
      fill: "currentColor"
    },
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "enable-background": "new 0 0 409.221 409.221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("g", {
    fill: "#9B9B9B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("path", {
    fill: "currentColor",
    d: "M12.52 1H5.392A4.396 4.396 0 0 0 1 5.391v7.13a4.396 4.396 0 0 0 4.391 4.39h7.13a4.396 4.396 0 0 0 4.39-4.39V5.39A4.396 4.396 0 0 0 12.522 1zm2.98 11.52a2.983 2.983 0 0 1-2.98 2.98H5.392a2.983 2.983 0 0 1-2.98-2.98V5.392a2.983 2.983 0 0 1 2.98-2.98h7.13a2.983 2.983 0 0 1 2.979 2.98v7.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    fill: "currentColor",
    d: "M8.956 4.856c-2.26 0-4.1 1.84-4.1 4.1s1.84 4.1 4.1 4.1 4.1-1.84 4.1-4.1-1.84-4.1-4.1-4.1zm0 6.788a2.691 2.691 0 0 1-2.688-2.688 2.691 2.691 0 0 1 2.688-2.688 2.691 2.691 0 0 1 2.688 2.688 2.691 2.691 0 0 1-2.688 2.688zM13.228 3.659a1.04 1.04 0 0 0-1.035 1.035c0 .272.11.54.304.732.192.192.459.304.73.304.274 0 .54-.112.733-.304a1.04 1.04 0 0 0 0-1.464 1.04 1.04 0 0 0-.732-.303z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),

/***/ "./components/Svg_location/Svg_location.js":
/*!*************************************************!*\
  !*** ./components/Svg_location/Svg_location.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_location\\Svg_location.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgLocation = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradientPin",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("stop", {
    "stop-color": "#8B00AF",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#D40062",
    offset: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#FF0613",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }))), __jsx("path", {
    fill: "url(#linearGradientPin)",
    "fill-rule": "evenodd",
    d: "M50 0c23.488-.229 42.74 18.627 43.061 42.176 0 35-39.834 56.53-41.477 57.412a3.278 3.278 0 0 1-3.168 0c-1.643-.882-41.477-22.412-41.477-57.412C7.26 18.626 26.512-.229 50 0zm0 92.824c7.157-4.236 36.373-23.295 36.373-50.648C85.956 22.4 69.727 6.652 50 6.882 30.273 6.652 14.044 22.4 13.627 42.176c0 27.118 29.216 46.412 36.373 50.648zm.176-66.177c9.179.032 16.603 7.502 16.603 16.706a16.706 16.706 0 0 1-10.3 15.44 16.629 16.629 0 0 1-18.164-3.648 16.739 16.739 0 0 1-3.574-18.226 16.66 16.66 0 0 1 15.435-10.272zm0 26.706c5.508 0 9.973-4.477 9.973-10s-4.465-10-9.973-10c-5.508 0-9.973 4.477-9.973 10s4.465 10 9.973 10z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgLocation);

/***/ }),

/***/ "./components/Svg_logo/Svg_logo.js":
/*!*****************************************!*\
  !*** ./components/Svg_logo/Svg_logo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_logo\\Svg_logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgLogo = () => {
  return __jsx("svg", {
    viewBox: "0 0 191 61",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("linearGradient", {
    x1: "0%",
    y1: "50.0157237%",
    x2: "100%",
    y2: "50.0157237%",
    id: "linearGradient-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("stop", {
    "stop-color": "#FF0613",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#D40062",
    offset: "50.55%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#8B00AF",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }))), __jsx("g", {
    id: "Logo/Logo-Typeface",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group",
    transform: "translate(2.000000, 2.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("g", {
    id: "Reyhoon-logo2-01",
    transform: "translate(62.000000, 17.000000)",
    fill: "#000000",
    "fill-rule": "nonzero",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("g", {
    id: "XMLID_79_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("path", {
    d: "M29.7871535,4.04444444 C30.9233449,4.04444444 31.8322981,3.14567901 31.8322981,2.02222222 C31.8322981,0.898765432 30.9233449,0 29.7871535,0 L17.8571429,0 L17.8571429,20.2222222 L29.7871535,20.2222222 C30.9233449,20.2222222 31.8322981,19.3234568 31.8322981,18.2 C31.8322981,17.0765432 30.9233449,16.1777778 29.7871535,16.1777778 L21.9474322,16.1777778 L21.9474322,12.245679 L29.1054386,12.245679 C30.2416301,12.245679 31.1505832,11.3469136 31.1505832,10.2234568 C31.1505832,9.1 30.2416301,8.20123457 29.1054386,8.20123457 L21.9474322,8.20123457 L21.9474322,4.2691358 L29.7871535,4.2691358 L29.7871535,4.04444444 Z",
    id: "XMLID_90_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("path", {
    d: "M116.569119,0 L116.459627,0 C111.751473,0 107.919255,4.15384615 107.919255,9.23076923 L107.919255,18.9230769 C107.919255,20.0769231 108.79519,21 109.89011,21 C110.985029,21 111.860965,20.0769231 111.860965,18.9230769 L111.860965,9.11538462 C111.860965,6.46153846 113.83182,4.26923077 116.240643,4.15384615 C116.350135,4.15384615 116.350135,4.15384615 116.459627,4.15384615 C118.977942,4.15384615 121.05829,6.34615385 121.05829,9 L121.05829,18.9230769 C121.05829,20.0769231 121.934225,21 123.029145,21 C124.124064,21 125,20.0769231 125,18.9230769 L125,9 C125,4.15384615 121.277273,0.115384615 116.569119,0 Z",
    id: "XMLID_89_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("path", {
    d: "M46.8478261,0 C45.7608696,0 44.8913043,0.903786468 44.8913043,2.03351955 L44.8913043,5.98758535 C44.8913043,8.36002483 43.0434783,10.3935444 40.6521739,10.3935444 C40.6521739,10.3935444 40.5434783,10.3935444 40.5434783,10.3935444 C38.3695652,10.2805711 36.5217391,8.24705152 36.5217391,5.87461204 L36.5217391,2.03351955 C36.5217391,0.903786468 35.6521739,0 34.5652174,0 C33.4782609,0 32.6086957,0.903786468 32.6086957,2.03351955 L32.6086957,5.98758535 C32.6086957,9.94165115 35.2173913,13.3308504 38.8043478,14.2346369 L38.8043478,18.1887027 C38.8043478,19.3184358 39.673913,20.2222222 40.7608696,20.2222222 C41.8478261,20.2222222 42.7173913,19.3184358 42.7173913,18.1887027 L42.7173913,14.2346369 C46.3043478,13.3308504 48.9130435,9.94165115 48.9130435,5.98758535 L48.9130435,2.03351955 C48.9130435,0.903786468 47.9347826,0 46.8478261,0 Z",
    id: "XMLID_88_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("path", {
    d: "M65.4392192,0 C64.3300799,0 63.4427684,0.903786468 63.4427684,2.03351955 L63.4427684,7.9081316 L55.2351375,7.9081316 L55.2351375,2.03351955 C55.2351375,0.903786468 54.3478261,0 53.2386868,0 C52.1295475,0 51.242236,0.903786468 51.242236,2.03351955 L51.242236,18.1887027 C51.242236,19.3184358 52.1295475,20.2222222 53.2386868,20.2222222 C54.3478261,20.2222222 55.2351375,19.3184358 55.2351375,18.1887027 L55.2351375,12.088144 L63.5536823,12.088144 L63.5536823,18.1887027 C63.5536823,19.3184358 64.4409938,20.2222222 65.5501331,20.2222222 C66.6592724,20.2222222 67.5465839,19.3184358 67.5465839,18.1887027 L67.5465839,2.03351955 C67.5465839,0.903786468 66.6592724,0 65.4392192,0 Z",
    id: "XMLID_87_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("path", {
    d: "M16.3043478,7.26923077 C16.3043478,3.34615385 13.0878438,0 9.20585626,0 L0,0 L0,18.9230769 C0,20.0769231 0.887311446,21 1.99645075,21 C3.10559006,21 3.99290151,20.0769231 3.99290151,18.9230769 L3.99290151,14.5384615 L7.87488909,14.5384615 L10.6477374,19.8461538 C10.9804791,20.5384615 11.6459627,21 12.4223602,21 C13.1987578,21 13.7533274,20.6538462 14.1969831,19.9615385 C14.5297249,19.2692308 14.5297249,18.5769231 14.1969831,17.8846154 L12.0896185,13.9615385 C14.7515528,12.8076923 16.3043478,10.2692308 16.3043478,7.26923077 Z M9.31677019,10.3846154 L3.99290151,10.3846154 L3.99290151,4.26923077 L9.31677019,4.26923077 C10.9804791,4.26923077 12.2005324,5.65384615 12.2005324,7.26923077 C12.2005324,9.11538462 10.8695652,10.3846154 9.31677019,10.3846154 Z",
    id: "XMLID_84_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("path", {
    d: "M96.1325415,0 C92.4616796,0 89.2357706,2.05434783 87.3447205,5.02173913 C85.5649086,2.05434783 82.3389997,0 78.5568995,0 C72.8837492,0 68.3229814,4.67934783 68.3229814,10.5 C68.3229814,16.3206522 72.8837492,21 78.5568995,21 C82.2277614,21 85.4536704,18.9456522 87.3447205,15.9782609 C89.1245323,18.9456522 92.3504413,21 96.1325415,21 C101.805692,21 106.36646,16.3206522 106.36646,10.5 C106.36646,4.79347826 101.805692,0 96.1325415,0 Z M78.6681377,16.7771739 C75.3309905,16.7771739 72.5500345,13.923913 72.5500345,10.5 C72.5500345,7.07608696 75.3309905,4.22282609 78.6681377,4.22282609 C82.005285,4.22282609 84.786241,7.07608696 84.786241,10.5 C84.786241,13.923913 82.1165232,16.7771739 78.6681377,16.7771739 Z M96.1325415,16.7771739 C92.7953943,16.7771739 90.0144383,13.923913 90.0144383,10.5 C90.0144383,7.07608696 92.7953943,4.22282609 96.1325415,4.22282609 C99.4696887,4.22282609 102.250645,7.07608696 102.250645,10.5 C102.250645,13.923913 99.580927,16.7771739 96.1325415,16.7771739 Z",
    id: "XMLID_80_",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("g", {
    id: "XMLID_58_",
    fill: "url(#linearGradient-1)",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("path", {
    d: "M27,0 C41.9210526,0 54,12.122449 54,27.0972389 C54,40.9051621 43.6650718,52.3145258 30.3588517,54 C30.5526316,48.1656663 32.0382775,45.3781513 33.4593301,44.3409364 C38.562201,40.5810324 41.2751196,35.0060024 41.2751196,28.1344538 C41.2751196,21.6518607 38.7559809,14.6506603 34.8157895,10.3073229 C33.1363636,8.42737095 30.6818182,6.22328932 27,6.22328932 C23.3181818,6.22328932 20.9282297,8.42737095 19.1842105,10.3073229 C15.2440191,14.7154862 12.7248804,21.6518607 12.7248804,28.1344538 C12.7248804,35.0060024 15.437799,40.5810324 20.5406699,44.3409364 C22.0263158,45.3781513 23.4473684,48.1656663 23.6411483,54 C10.3349282,52.3145258 0,40.9051621 0,27.0972389 C0,12.122449 12.0789474,0 27,0 Z M27.4692387,58 C26.7309663,58 26.177262,57.3568068 26.2387847,56.5849749 C26.3003074,52.3398996 26.1157393,49.8957654 26.0542166,49.3168915 C25.9311712,47.0013959 25.6235577,45.7793287 24.7007172,44.6859003 C23.7778767,43.5924718 22.2398093,42.048808 21.6245823,39.8619511 C21.1939234,38.446926 20.9478326,36.5816656 21.0093553,33.0441029 C21.070878,31.1145232 21.3169688,28.0915151 21.5015369,25.5830615 C21.686105,23.0746079 21.9321958,20.4375157 22.2398093,17.6717848 C22.5474228,14.906054 22.9780817,10.6609787 23.0396044,10.3393821 C23.101127,9.95346616 23.9009221,9.82482751 23.9009221,10.3393821 C23.9009221,10.725298 23.9009221,11.8187265 23.8393994,14.906054 C23.7778767,16.0638018 23.2241724,32.7225063 23.2241724,33.0441029 C23.1626497,33.8802541 24.7007172,34.0088927 24.7622399,33.0441029 C24.7622399,32.9154643 25.5005123,12.8478357 25.7466031,10.4037014 C25.8081258,9.95346616 26.5463982,9.95346616 26.6694436,10.4037014 C26.7309663,10.6609787 26.7309663,32.7225063 26.7309663,33.1084222 C26.6694436,33.9445734 28.2690337,33.9445734 28.2690337,33.1084222 C28.207511,32.7225063 28.2690337,10.6609787 28.3305564,10.4037014 C28.4536018,9.95346616 29.1918742,9.95346616 29.2533969,10.4037014 C29.4994877,12.8478357 30.2377601,32.9154643 30.2377601,33.0441029 C30.2377601,33.9445734 31.8373503,33.9445734 31.7758276,33.0441029 C31.7758276,32.658187 31.2221233,15.9994825 31.1606006,14.906054 C31.0990779,11.8187265 31.0990779,10.725298 31.0990779,10.3393821 C31.0990779,9.82482751 31.898873,9.95346616 31.9603956,10.3393821 C32.0219183,10.6609787 32.4525772,14.906054 32.7601907,17.6717848 C33.0678042,20.4375157 33.313895,23.0746079 33.4984631,25.5830615 C33.7445539,28.0915151 33.929122,31.1145232 33.9906447,33.0441029 C34.0521674,36.645985 33.8060766,38.446926 33.3754177,39.8619511 C32.698668,42.048808 31.2221233,43.5924718 30.2992828,44.6859003 C29.3764423,45.7150094 29.0688288,46.9370765 28.9457834,49.3168915 C28.8842607,49.8957654 28.6996926,52.3398996 28.7612153,56.5849749 C28.7612153,57.3568068 28.207511,58 27.4692387,58 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./components/Svg_spoon_and_fork/Svg_spoon_and_fork.js":
/*!*************************************************************!*\
  !*** ./components/Svg_spoon_and_fork/Svg_spoon_and_fork.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_spoon_and_fork\\Svg_spoon_and_fork.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgSpoonAndFork = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradientForkSpoon",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("stop", {
    "stop-color": "#8B00AF",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#D40062",
    offset: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("stop", {
    "stop-color": "#FF0613",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))), __jsx("path", {
    fill: "url(#linearGradientForkSpoon)",
    "fill-rule": "evenodd",
    d: "M99.954 28.203c.589 11.78-7.784 22.265-19.861 24.87V94.41c.17 1.223-.418 2.429-1.51 3.092a3.47 3.47 0 0 1-3.581 0c-1.092-.663-1.681-1.87-1.51-3.092V53.072c-12.24-2.441-20.822-12.97-20.27-24.869C52.39 15.105 62.84 3.834 76.588 3c13.749.834 24.198 12.105 23.366 25.203zM77.068 46.925c10.126-.94 17.584-9.348 16.763-18.898.821-9.55-6.637-17.959-16.763-18.898-10.103.967-17.528 9.367-16.705 18.898-.823 9.53 6.602 17.93 16.705 18.898zM43.463 3.54a3.362 3.362 0 0 1 3.3 3.364v16.703c.594 12.497-7.853 23.62-20.037 26.382v43.852a3.366 3.366 0 0 1-1.523 3.281 3.355 3.355 0 0 1-3.613 0 3.366 3.366 0 0 1-1.524-3.28V49.988C7.882 47.226-.564 36.104.03 23.607V6.904c0-.892.354-1.747.984-2.378A3.357 3.357 0 0 1 3.39 3.54a3.362 3.362 0 0 1 3.3 3.364v16.703c-.517 8.834 4.978 16.907 13.377 19.654V6.904a3.366 3.366 0 0 1 1.524-3.28 3.355 3.355 0 0 1 3.613 0 3.366 3.366 0 0 1 1.523 3.28v36.357c8.413-2.73 13.915-10.814 13.377-19.654V6.904a3.362 3.362 0 0 1 3.36-3.364z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgSpoonAndFork);

/***/ }),

/***/ "./components/Svg_telegram/Svg_telegram.js":
/*!*************************************************!*\
  !*** ./components/Svg_telegram/Svg_telegram.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_telegram\\Svg_telegram.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgTelegram = () => __jsx("svg", {
  style: {
    fill: "currentColor"
  },
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "enable-background": "new 0 0 409.221 409.221",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("g", {
  fill: "none",
  "fill-rule": "evenodd",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("path", {
  fill: "currentColor",
  d: "M15.973 2.053L1.34 7.821c-.474.187-.445.875.043 1.02L5.1 9.954l1.388 4.454a.636.636 0 0 0 1.065.258l1.923-1.986 3.772 2.8a.785.785 0 0 0 1.236-.478l2.498-12.082c.123-.592-.453-1.085-1.01-.866zM14.14 4.735l-6.798 6.08a.37.37 0 0 0-.12.235l-.262 2.353c-.009.077-.115.087-.138.013l-1.076-3.51a.371.371 0 0 1 .156-.423l8.027-5.035c.184-.116.373.141.21.287z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (SvgTelegram);

/***/ }),

/***/ "./components/Svg_twitter/Svg_twitter.js":
/*!***********************************************!*\
  !*** ./components/Svg_twitter/Svg_twitter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_twitter\\Svg_twitter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SvgTwitter = () => __jsx("svg", {
  style: {
    fill: "currentColor"
  },
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("g", {
  fill: "none",
  "fill-rule": "evenodd",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("path", {
  fill: "currentColor",
  d: "M17 3.557a6.491 6.491 0 0 1-1.885.522 3.323 3.323 0 0 0 1.443-1.836 6.526 6.526 0 0 1-2.084.805A3.262 3.262 0 0 0 12.077 2c-1.813 0-3.283 1.487-3.283 3.32 0 .26.03.514.086.757a9.284 9.284 0 0 1-6.766-3.47 3.335 3.335 0 0 0-.445 1.67A3.33 3.33 0 0 0 3.13 7.04a3.231 3.231 0 0 1-1.486-.416v.042a3.313 3.313 0 0 0 2.633 3.256 3.236 3.236 0 0 1-1.483.057 3.291 3.291 0 0 0 3.067 2.306A6.539 6.539 0 0 1 1 13.66a9.209 9.209 0 0 0 5.031 1.492c6.038 0 9.34-5.06 9.34-9.448 0-.144-.003-.287-.01-.43A6.7 6.7 0 0 0 17 3.558z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./components/Tags_card/Tags_card.css":
/*!********************************************!*\
  !*** ./components/Tags_card/Tags_card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Tags_card/Tags_card.js":
/*!*******************************************!*\
  !*** ./components/Tags_card/Tags_card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tags_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags_card.css */ "./components/Tags_card/Tags_card.css");
/* harmony import */ var _Tags_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tags_card_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Tags_card\\Tags_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const foodTags = [{
  title: "خورشت",
  id: 0
}, {
  title: "غذای پلویی",
  id: 1
}, {
  title: "خوراک",
  id: 2
}, {
  title: "سالاد",
  id: 3
}, {
  title: "غذای ایرانی",
  id: 4
}, {
  title: "فست فود",
  id: 5
}, {
  title: "سوخاری",
  id: 6
}, {
  title: "پاستا",
  id: 7
}, {
  title: "چلوکباب",
  id: 0
}, {
  title: "ماهی",
  id: 0
}, {
  title: "استیک",
  id: 0
}, {
  title: "بشقاب",
  id: 0
}, {
  title: "صبحانه",
  id: 0
}, {
  title: "سوپ",
  id: 0
}, {
  title: "غذاهای دریایی",
  id: 0
}, {
  title: "آبمیوه طبیعی",
  id: 0
}];

function tagsCardRender() {
  const Renderedtags = foodTags.map(tags => __jsx("h3", {
    key: tags.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, tags.title)));
  return Renderedtags;
}

const TagsCard = () => {
  return __jsx("section", {
    class: "more-food ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    class: "more-food-flex container-width margin-v-15 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u063A\u0630\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631"), tagsCardRender()));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsCard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Banner_box_Banner_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner_box/Banner_box */ "./components/Banner_box/Banner_box.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Show_case_Show_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Show_case/Show_case */ "./components/Show_case/Show_case.js");
/* harmony import */ var _components_Branch_card_Branch_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Branch_card/Branch_card */ "./components/Branch_card/Branch_card.js");
/* harmony import */ var _components_Prompted_box_Prompted_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Prompted_box/Prompted_box */ "./components/Prompted_box/Prompted_box.js");
/* harmony import */ var _components_Cuisines_card_Cuisines_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Cuisines_card/Cuisines_card */ "./components/Cuisines_card/Cuisines_card.js");
/* harmony import */ var _components_Tags_card_Tags_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Tags_card/Tags_card */ "./components/Tags_card/Tags_card.js");
/* harmony import */ var _components_Download_app_Download_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Download_app/Download_app */ "./components/Download_app/Download_app.js");
/* harmony import */ var _components_Bg_diagonal_Bg_diagonal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Bg_diagonal/Bg_diagonal */ "./components/Bg_diagonal/Bg_diagonal.js");
/* harmony import */ var _components_Article_Article__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Article/Article */ "./components/Article/Article.js");
/* harmony import */ var _components_Question_Question__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Question/Question */ "./components/Question/Question.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React  from "react"



 //  import {threeJson} from './json'





 // import "./font.css"






const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_components_Banner_box_Banner_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(_components_Show_case_Show_case__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_components_Branch_card_Branch_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_components_Prompted_box_Prompted_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_components_Cuisines_card_Cuisines_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_components_Tags_card_Tags_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_components_Download_app_Download_app__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_components_Bg_diagonal_Bg_diagonal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_components_Article_Article__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_components_Question_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index); // class Index extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             userData:[],
//         }
//     }
//     componentDidMount() {
// fetch('https://chilivery.com/client-api/restaurant/detail?city=tehran&restaurantSlug=shaverma-kabab')
// .then(response => response.json())
// .then(data => {
//     this.setState({
//         userData:data
//     },()=>{
//         console.log(this.state.userData)
//     })
// })
// .catch(error => console.error(error))
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 <Header/>
//                 <Banner/>
//                 <ShowCase/>
//                 <BestResturantInDayHeadingst/>
//                 {/* {
//                     this.state.userData.map((item,index)=>(
//                         <div key={index}>
//                             <span>{item.name} {item.username}</span>
//                         </div>
//                     ))
//                 } */}
//             </React.Fragment>
//         )
//     }
// }
// export default Index

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\s.hajiramezani\Documents\samaneh-practice\react_reyhoon_page_2\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map