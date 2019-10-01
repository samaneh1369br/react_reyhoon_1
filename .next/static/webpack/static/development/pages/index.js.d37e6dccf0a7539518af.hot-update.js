webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Branch_card/Branch_card.js":
/*!***********************************************!*\
  !*** ./components/Branch_card/Branch_card.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BranchCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/best_three_good_resturant */ "./assets/best_three_good_resturant.json");
var _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/best_three_good_resturant */ "./assets/best_three_good_resturant.json", 1);
/* harmony import */ var _Branch_card_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Branch_card.css */ "./components/Branch_card/Branch_card.css");
/* harmony import */ var _Branch_card_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Branch_card_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Star_rating_Star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Star_rating/Star_rating */ "./components/Star_rating/Star_rating.js");
/* harmony import */ var _Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Best_resturant_in_day_heading/Best_resturant_in_day_heading */ "./components/Best_resturant_in_day_heading/Best_resturant_in_day_heading.js");





var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\Branch_card\\Branch_card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var BranchCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BranchCard, _React$Component);

  function BranchCard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BranchCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BranchCard).call(this));
    _this.state = {
      dataResturant: []
    };
    return _this;
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


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BranchCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        dataResturant: _assets_best_three_good_resturant__WEBPACK_IMPORTED_MODULE_6__
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(_Best_resturant_in_day_heading_Best_resturant_in_day_heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, this.state.dataResturant.map(function (item, index) {
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
        }, item.voteNumber), __jsx(_Star_rating_Star_rating__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
          className: "btn btn-in-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "\u0634\u0631\u0648\u0639 \u0633\u0641\u0627\u0631\u0634"));
      })));
    }
  }]);

  return BranchCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //     import BranchCardInner from "../Branch_card_inner/Branch_card_inner"
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




/***/ })

})
//# sourceMappingURL=index.js.d37e6dccf0a7539518af.hot-update.js.map