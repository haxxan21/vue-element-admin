(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pdf/download.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      article: '',
      fullscreenLoading: true
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./content.js */ "./resources/js/views/pdf/content.js")).then(function (data) {
        var title = data["default"].title;
        document.title = title;
        _this.article = data["default"];
        setTimeout(function () {
          _this.fullscreenLoading = false;

          _this.$nextTick(function () {
            window.print();
          });
        }, 3000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.main-article {\n  padding: 20px;\n  margin: 0 auto;\n  display: block;\n  width: 740px;\n  background: #fff;\n}\n.article__heading {\n  position: relative;\n  padding: 0 0 20px;\n  overflow: hidden;\n}\n.article__heading__title {\n  display: block;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  font-size: 32px;\n  line-height: 48px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n}\n.node-article-content {\n  margin: 20px 0 0;\n  font-size: 16px;\n  color: #333;\n  letter-spacing: 0.5px;\n  line-height: 28px;\n  margin-bottom: 30px;\n  font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n  /* 解决 IE6-7 图片缩放锯齿问题 */\n}\n.node-article-content:before {\n  display: table;\n  content: \"\";\n  clear: both;\n}\n.node-article-content:after {\n  display: table;\n  content: \"\";\n  clear: both;\n}\n.node-article-content > :last-child {\n  margin-bottom: 0;\n}\n.node-article-content b,\n.node-article-content strong {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.node-article-content img {\n  max-width: 100%;\n  display: block;\n  margin: 0 auto;\n}\n.node-article-content p {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 21px;\n  line-height: 1.58;\n  letter-spacing: -0.003em;\n}\n.node-article-content ul {\n  margin-bottom: 30px;\n}\n.node-article-content li {\n  --x-height-multiplier: 0.375;\n  --baseline-multiplier: 0.17;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 21px;\n  line-height: 1.58;\n  letter-spacing: -0.003em;\n  margin-left: 30px;\n  margin-bottom: 14px;\n}\n.node-article-content a {\n  text-decoration: none;\n  background-repeat: repeat-x;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(100%, rgba(0, 0, 0, 0.84)), color-stop(0, rgba(0, 0, 0, 0)));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.84) 100%, rgba(0, 0, 0, 0) 0);\n  background-size: 1px 1px;\n  background-position: 0 calc(1em + 1px);\n  padding: 0 6px;\n}\n.node-article-content code {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 3px 4px;\n  margin: 0 2px;\n  font-size: 16px;\n  display: inline-block;\n}\n.node-article-content img {\n  border: 0;\n}\n.node-article-content img {\n  -ms-interpolation-mode: bicubic;\n}\n.node-article-content blockquote {\n  --x-height-multiplier: 0.375;\n  --baseline-multiplier: 0.17;\n  font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  font-style: italic;\n  font-size: 21px;\n  line-height: 1.58;\n  letter-spacing: -0.003em;\n  border-left: 3px solid rgba(0, 0, 0, 0.84);\n  padding-left: 20px;\n  margin-left: -23px;\n  padding-bottom: 2px;\n}\n.node-article-content a {\n  text-decoration: none;\n}\n.node-article-content h2,\n.node-article-content h3,\n.node-article-content h4 {\n  font-size: 34px;\n  line-height: 1.15;\n  letter-spacing: -0.015em;\n  margin: 53px 0 0;\n}\n.node-article-content h4 {\n  font-size: 26px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./download.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading.fullscreen.lock",
          value: _vm.fullscreenLoading,
          expression: "fullscreenLoading",
          modifiers: { fullscreen: true, lock: true }
        }
      ],
      staticClass: "main-article",
      attrs: { "element-loading-text": "Efforts to generate PDF" }
    },
    [
      _c("div", { staticClass: "article__heading" }, [
        _c("div", { staticClass: "article__heading__title" }, [
          _vm._v("\n      " + _vm._s(_vm.article.title) + "\n    ")
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", {
        ref: "content",
        staticClass: "node-article-content",
        domProps: { innerHTML: _vm._s(_vm.article.content) }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { color: "#ccc" } }, [
      _vm._v("\n    This article is from Evan You on "),
      _c(
        "a",
        {
          attrs: {
            target: "_blank",
            href:
              "https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf"
          }
        },
        [_vm._v("medium")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pdf/download.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/pdf/download.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.vue?vue&type=template&id=11c00304& */ "./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304&");
/* harmony import */ var _download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.vue?vue&type=script&lang=js& */ "./resources/js/views/pdf/download.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pdf/download.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pdf/download.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/pdf/download.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./download.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./download.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./download.vue?vue&type=template&id=11c00304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pdf/download.vue?vue&type=template&id=11c00304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_11c00304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);