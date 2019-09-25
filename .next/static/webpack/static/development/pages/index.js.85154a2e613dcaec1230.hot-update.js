webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Tags_card/Tags_card.js":
/*!*******************************************!*\
  !*** ./components/Tags_card/Tags_card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tags_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags_card.css */ "./components/Tags_card/Tags_card.css");
/* harmony import */ var _Tags_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tags_card_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Tags_card\\Tags_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var foodTags = [{
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
  var Renderedtags = foodTags.map(function (tags) {
    return __jsx("h3", {
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
    }, tags.title));
  });
  return Renderedtags;
}

var TagsCard = function TagsCard() {
  return __jsx("section", {
    "class": "more-food ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    "class": "more-food-flex container-width margin-v-15 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u063A\u0630\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631"), tagsCardRender()));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsCard);

/***/ })

})
//# sourceMappingURL=index.js.85154a2e613dcaec1230.hot-update.js.map