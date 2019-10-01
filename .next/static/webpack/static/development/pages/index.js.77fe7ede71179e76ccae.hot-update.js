webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterTop_FooterTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FooterTop/FooterTop */ "./components/FooterTop/FooterTop.js");
/* harmony import */ var _FooterMiddle_FooterMiddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FooterMiddle/FooterMiddle */ "./components/FooterMiddle/FooterMiddle.js");
/* harmony import */ var _FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FooterBottom/FooterBottom */ "./components/FooterBottom/FooterBottom.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.css */ "./components/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Footer\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Footer = function Footer() {
  return __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_FooterTop_FooterTop__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_FooterMiddle_FooterMiddle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FooterBottom/FooterBottom.js":
/*!*************************************************!*\
  !*** ./components/FooterBottom/FooterBottom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_facebook_Svg_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Svg_facebook/Svg_facebook */ "./components/Svg_facebook/Svg_facebook.js");
/* harmony import */ var _Svg_instagram_Svg_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg_instagram/Svg_instagram */ "./components/Svg_instagram/Svg_instagram.js");
/* harmony import */ var _Svg_google_Svg_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Svg_google/Svg_google */ "./components/Svg_google/Svg_google.js");
/* harmony import */ var _Svg_twitter_Svg_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Svg_twitter/Svg_twitter */ "./components/Svg_twitter/Svg_twitter.js");
/* harmony import */ var _Svg_telegram_Svg_telegram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Svg_telegram/Svg_telegram */ "./components/Svg_telegram/Svg_telegram.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\FooterBottom\\FooterBottom.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SvgComponentData = [{
  icon: __jsx(SvgFacebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(SvgInstagram, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(SvgGoogle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(SvgTwitter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }),
  href: ""
}, {
  icon: __jsx(SvgTelegram, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }),
  href: ""
}];

var SvgComponentRender = function SvgComponentRender() {
  var RenderedSvgComponent = SvgComponentData.map(function (icon) {
    return __jsx("a", {
      href: icon.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, icon.icon);
  });
  return RenderedSvgComponent;
};

var FooterBottom = function FooterBottom() {
  return __jsx("div", {
    "class": "footer-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    "class": "margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, SvgComponentRender()), __jsx("div", {
    "class": "margin-v-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\xA9 2017, ", __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Reyhoon"), ", All Rights Reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterBottom);

/***/ }),

/***/ "./components/Svg_facebook/Svg_facebook.js":
/*!*************************************************!*\
  !*** ./components/Svg_facebook/Svg_facebook.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_facebook\\Svg_facebook.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SvgFacebook = function SvgFacebook() {
  return __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 458.246 458.246",
    style: "enable-background:new 0 0 458.246 458.246",
    xmlSpace: "preserve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    style: "fill:currentColor",
    d: "M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71 c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605 c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292 c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078 c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648 H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    style: "fill:currentColor",
    d: "M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609 v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173 c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604 c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_google\\Svg_google.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SvgGoogle = function SvgGoogle() {
  return __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 458.246 458.246",
    style: "enable-background:new 0 0 458.246 458.246",
    xmlSpace: "preserve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("path", {
    style: "fill:currentColor",
    d: "M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71 c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605 c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292 c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078 c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648 H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("path", {
    style: "fill:currentColor",
    d: "M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609 v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173 c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604 c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgGoogle);

/***/ }),

/***/ "./components/Svg_instagram/Svg_instagram.js":
/*!***************************************************!*\
  !*** ./components/Svg_instagram/Svg_instagram.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_instagram\\Svg_instagram.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SvgInstagram = function SvgInstagram() {
  return __jsx("svg", {
    style: "fill:currentColor",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "enable-background": "new 0 0 409.221 409.221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("g", {
    fill: "#9B9B9B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M12.52 1H5.392A4.396 4.396 0 0 0 1 5.391v7.13a4.396 4.396 0 0 0 4.391 4.39h7.13a4.396 4.396 0 0 0 4.39-4.39V5.39A4.396 4.396 0 0 0 12.522 1zm2.98 11.52a2.983 2.983 0 0 1-2.98 2.98H5.392a2.983 2.983 0 0 1-2.98-2.98V5.392a2.983 2.983 0 0 1 2.98-2.98h7.13a2.983 2.983 0 0 1 2.979 2.98v7.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("path", {
    fill: "currentColor",
    d: "M8.956 4.856c-2.26 0-4.1 1.84-4.1 4.1s1.84 4.1 4.1 4.1 4.1-1.84 4.1-4.1-1.84-4.1-4.1-4.1zm0 6.788a2.691 2.691 0 0 1-2.688-2.688 2.691 2.691 0 0 1 2.688-2.688 2.691 2.691 0 0 1 2.688 2.688 2.691 2.691 0 0 1-2.688 2.688zM13.228 3.659a1.04 1.04 0 0 0-1.035 1.035c0 .272.11.54.304.732.192.192.459.304.73.304.274 0 .54-.112.733-.304a1.04 1.04 0 0 0 0-1.464 1.04 1.04 0 0 0-.732-.303z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),

/***/ "./components/Svg_telegram/Svg_telegram.js":
/*!*************************************************!*\
  !*** ./components/Svg_telegram/Svg_telegram.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_telegram\\Svg_telegram.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SvgTelegram = function SvgTelegram() {
  return __jsx("svg", {
    style: "fill:currentColor",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "enable-background": "new 0 0 409.221 409.221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("g", {
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M15.973 2.053L1.34 7.821c-.474.187-.445.875.043 1.02L5.1 9.954l1.388 4.454a.636.636 0 0 0 1.065.258l1.923-1.986 3.772 2.8a.785.785 0 0 0 1.236-.478l2.498-12.082c.123-.592-.453-1.085-1.01-.866zM14.14 4.735l-6.798 6.08a.37.37 0 0 0-.12.235l-.262 2.353c-.009.077-.115.087-.138.013l-1.076-3.51a.371.371 0 0 1 .156-.423l8.027-5.035c.184-.116.373.141.21.287z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })));
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Svg_twitter\\Svg_twitter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SvgTwitter = function SvgTwitter() {
  return __jsx("svg", {
    style: "fill:currentColor",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "enable-background": "new 0 0 409.221 409.221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("g", {
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M15.973 2.053L1.34 7.821c-.474.187-.445.875.043 1.02L5.1 9.954l1.388 4.454a.636.636 0 0 0 1.065.258l1.923-1.986 3.772 2.8a.785.785 0 0 0 1.236-.478l2.498-12.082c.123-.592-.453-1.085-1.01-.866zM14.14 4.735l-6.798 6.08a.37.37 0 0 0-.12.235l-.262 2.353c-.009.077-.115.087-.138.013l-1.076-3.51a.371.371 0 0 1 .156-.423l8.027-5.035c.184-.116.373.141.21.287z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ })

})
//# sourceMappingURL=index.js.77fe7ede71179e76ccae.hot-update.js.map