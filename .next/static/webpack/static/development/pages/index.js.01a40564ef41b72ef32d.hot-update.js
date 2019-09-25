webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Show_case/Show_case.js":
/*!*******************************************!*\
  !*** ./components/Show_case/Show_case.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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






var showCaseData = [{
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
  heading: 'غذایتان را نوش‌جان کنید',
  comment: 'درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.',
  icon: __jsx(_Svg_heart_Svg_heart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }),
  id: 2
}, {
  heading: 'غذایتان را نوش‌جان کنید',
  comment: 'درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.',
  icon: __jsx(_Svg_heart_Svg_heart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }),
  id: 3
}];

function renderShowcaseCard() {
  var showCaseRendered = showCaseData.map(function (card) {
    return __jsx(_Show_case_inner_Show_case_inner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: card.id,
      heading: card.heading,
      comment: card.comment,
      children: card.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  });
  return showCaseRendered;
}

var ShowCase = function ShowCase() {
  return __jsx("section", {
    className: "container-flex row-direction flex-around  container-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, renderShowcaseCard());
};

/* harmony default export */ __webpack_exports__["default"] = (ShowCase);

/***/ })

})
//# sourceMappingURL=index.js.01a40564ef41b72ef32d.hot-update.js.map