webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FooterTop/FooterTop.js":
/*!*******************************************!*\
  !*** ./components/FooterTop/FooterTop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\s.hajiramezani\\Documents\\samaneh-practice\\react_reyhoon_page_2\\components\\FooterTop\\FooterTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// const FooterTopData=[
//     {
//         title:["پشتیبانی ریحون","سوالات متداول","تماس با پشیبانی","قوانین و مقررات"]
//     },
//     {
//         title:["رستوران ها","ثبت رستوران"]
//     },
//     {
//         title:["تماس با ریحون","درباره ریحون","تماس با ما","وبلاگ ریحون"]
//     },
//     {
//         title:["اپلیکیشن های موبایل"]
//     },
//     {image:[
//        { src:"https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-dark.png?x-oss-process=image/resize,w_180"
//     , href:"https://play.google.com/store/apps/details?id=reyhoon.androidapp"},
//     {src:"https://dist.reyhoon-static.com/web-assets/images/app-links/sib-app-dark.png?x-oss-process=image/resize,w_180"
//  , href:"https://sibapp.com/applications/reyhoon"} ,
//  {src:"https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-dark.png?x-oss-process=image/resize,w_180"
//  ,href:"https://cafebazaar.ir/app/reyhoon.androidapp/?l=fa"}]
// }
// ]
// c
// const  renderFooter=()=>{
//  const   FooterTopRendered=FooterTopData.map(
//         (card)=> (card.title)?
//         <ul>{card.title.map((item)=><li>{item}</li>)}</ul>:
//         <ul>{card.image.map((item)=><li><a href={item.href}><img src={item.src}/></a></li>)}</ul>
//     )
//     return(
//         FooterTopRendered
//     );
// }
// const FooterTop=()=>{
// return(
//     <div class="footer-top">
//             {renderFooter()},
//             <p> 
//                   مراقبت و محافظت از حساب کاربری و رمزعبور 
//                 هر کاربر بر عهده کاربر است. ریحون سریعترین راه
//                  سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های 
//                 اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
//             </p>
// </div>
// )
// }
// export default FooterTop
var FooterTopData = [{
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

function renderx() {
  var renderdata = FooterTopData.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, item.sectionTitle), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, item.links ? item.links.map(function (link) {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("a", {
        href: link.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, link.title));
    }) : item.items.map(function (link) {
      return __jsx("li", {
        key: link.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("a", {
        href: link.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("img", {
        src: link.src,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })));
    })));
  });
  return renderdata;
} // const  renderFooter=()=>{
//  const   FooterTopRendered=FooterTopData.map(
//         (card)=> (card.title)?
//         <ul>{card.title.map((item)=><li>{item}</li>)}</ul>:
//         <ul>{card.image.map((item)=><li><a href={item.href}><img src={item.src}/></a></li>)}</ul>
//     )
//     return(
//         FooterTopRendered
//     );
// }


var FooterTop = function FooterTop() {
  return __jsx("div", {
    "class": "footer-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, renderx(), "            "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "\u0645\u0631\u0627\u0642\u0628\u062A \u0648 \u0645\u062D\u0627\u0641\u0638\u062A \u0627\u0632 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0647\u0631 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631 \u0639\u0647\u062F\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0627\u0633\u062A. \u0631\u06CC\u062D\u0648\u0646 \u0633\u0631\u06CC\u0639\u062A\u0631\u06CC\u0646 \u0631\u0627\u0647 \u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627 \u0627\u0633\u062A. \u0645\u0646\u0648\u06CC \u0639\u06A9\u0633\u200C\u062F\u0627\u0631 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u0637\u0631\u0627\u0641\u062A\u0627\u0646 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u06A9\u0627\u0646 \u062E\u0648\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F \u0648 \u0633\u0641\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F."));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterTop);

/***/ })

})
//# sourceMappingURL=index.js.dfba9309f0d97d5ba9bb.hot-update.js.map