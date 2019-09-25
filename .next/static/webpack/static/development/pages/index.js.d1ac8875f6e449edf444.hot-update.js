webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Cuisines_box/Cuisines_box.js":
false,

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
  CuisinesCardRendered = CuisinesData.map(function (card) {
    return __jsx(_Cuisines_inner_Cuisines_inner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      typeFood: card.food,
      image: "".concat(card.imageSrc),
      activeNumber: card.activeNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  });
}

var CuisinesBox = function CuisinesBox() {
  return __jsx("section", {
    "class": "container-flex img-box-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, renderCuisinesCard());
};

/* harmony default export */ __webpack_exports__["default"] = (CuisinesBox);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Banner_box_Banner_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner_box/Banner_box */ "./components/Banner_box/Banner_box.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Show_case_Show_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Show_case/Show_case */ "./components/Show_case/Show_case.js");
/* harmony import */ var _components_Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Best_resturant_in_day_heading/Best_resturant_in_day_heading */ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.js");
/* harmony import */ var _components_Branch_card_Branch_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Branch_card/Branch_card */ "./components/Branch_card/Branch_card.js");
/* harmony import */ var _components_Prompted_box_Prompted_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Prompted_box/Prompted_box */ "./components/Prompted_box/Prompted_box.js");
/* harmony import */ var _components_Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Cuisines_header/Cuisines_header */ "./components/Cuisines_header/Cuisines_header.js");
/* harmony import */ var _components_Cuisines_card_Cuisines_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Cuisines_card/Cuisines_card */ "./components/Cuisines_card/Cuisines_card.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React  from "react"




 //  import {threeJson} from './json'




 // import "./font.css"

var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Banner_box_Banner_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Show_case_Show_case__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_Branch_card_Branch_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_Prompted_box_Prompted_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_Cuisines_card_Cuisines_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
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

/***/ })

})
//# sourceMappingURL=index.js.d1ac8875f6e449edf444.hot-update.js.map