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
        lineNumber: 37
      },
      __self: this
    }, tags.title);
  });
  return Renderedtags;
}

var TagsCard = function TagsCard() {
  return __jsx("section", {
    "class": "more-food ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    "class": "more-food-flex container-width margin-v-15 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u063A\u0630\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631"), tagsCardRender()));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsCard);

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
/* harmony import */ var _components_Tags_card_Tags_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Tags_card/Tags_card */ "./components/Tags_card/Tags_card.js");
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React  from "react"




 //  import {threeJson} from './json'





 // import "./font.css"

var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Banner_box_Banner_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_Show_case_Show_case__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_Branch_card_Branch_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_Prompted_box_Prompted_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_Cuisines_header_Cuisines_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_components_Cuisines_card_Cuisines_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_components_Tags_card_Tags_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
//# sourceMappingURL=index.js.66f8d6c50b18d24ed68a.hot-update.js.map