webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Cuisines_card/Cuisines_card.js":
/*!***************************************************!*\
  !*** ./components/Cuisines_card/Cuisines_card.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuisines_card.css */ "./components/Cuisines_card/Cuisines_card.css");
/* harmony import */ var _Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cuisines_card_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cuisines_inner_Cuisines_inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cuisines_inner/Cuisines_inner */ "./components/Cuisines_inner/Cuisines_inner.js");
/* harmony import */ var _Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cuisines_header/Cuisines_header */ "./components/Cuisines_header/Cuisines_header.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Cuisines_card\\Cuisines_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CuisinesData = [{
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
  var CuisinesCardRendered = CuisinesData.map(function (card) {
    return __jsx(_Cuisines_inner_Cuisines_inner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      typeFood: card.food,
      image: "".concat(card.imageSrc),
      activeNumber: card.activeNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  });
  return CuisinesCardRendered;
}

var CuisinesCard = function CuisinesCard() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("section", {
    className: "container-flex img-box-flex container-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, renderCuisinesCard()));
};

/* harmony default export */ __webpack_exports__["default"] = (CuisinesCard);

/***/ })

})
//# sourceMappingURL=index.js.dd0ea72bf7e3a2d962bf.hot-update.js.map