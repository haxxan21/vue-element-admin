(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    title: {
      type: String,
      "default": 'vue'
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  methods: {
    clickTitle: function clickTitle() {
      this.isActive = !this.isActive;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".share-dropdown-menu {\n  width: 250px;\n  position: relative;\n  z-index: 1;\n  height: auto !important;\n}\n.share-dropdown-menu-title {\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  background: black;\n  color: white;\n  height: 60px;\n  line-height: 60px;\n  font-size: 20px;\n  text-align: center;\n  z-index: 2;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.share-dropdown-menu-wrapper {\n  position: relative;\n}\n.share-dropdown-menu-item {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background: #e0e0e0;\n  color: #000;\n  line-height: 60px;\n  height: 60px;\n  cursor: pointer;\n  font-size: 18px;\n  overflow: hidden;\n  opacity: 1;\n  -webkit-transition: -webkit-transform 0.28s ease;\n  transition: -webkit-transform 0.28s ease;\n  transition: transform 0.28s ease;\n  transition: transform 0.28s ease, -webkit-transform 0.28s ease;\n}\n.share-dropdown-menu-item:hover {\n  background: black;\n  color: white;\n}\n.share-dropdown-menu-item:nth-of-type(1) {\n  z-index: -1;\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(2) {\n  z-index: -1;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(3) {\n  z-index: -1;\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(4) {\n  z-index: -1;\n  -webkit-transition-delay: 0.4s;\n          transition-delay: 0.4s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(5) {\n  z-index: -1;\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(6) {\n  z-index: -1;\n  -webkit-transition-delay: 0.6s;\n          transition-delay: 0.6s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(7) {\n  z-index: -1;\n  -webkit-transition-delay: 0.7s;\n          transition-delay: 0.7s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(8) {\n  z-index: -1;\n  -webkit-transition-delay: 0.8s;\n          transition-delay: 0.8s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu-item:nth-of-type(9) {\n  z-index: -1;\n  -webkit-transition-delay: 0.9s;\n          transition-delay: 0.9s;\n  -webkit-transform: translate3d(0, -60px, 0);\n          transform: translate3d(0, -60px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-wrapper {\n  z-index: 1;\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(1) {\n  -webkit-transition-delay: 0.8s;\n          transition-delay: 0.8s;\n  -webkit-transform: translate3d(0, 0px, 0);\n          transform: translate3d(0, 0px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(2) {\n  -webkit-transition-delay: 0.7s;\n          transition-delay: 0.7s;\n  -webkit-transform: translate3d(0, 60px, 0);\n          transform: translate3d(0, 60px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(3) {\n  -webkit-transition-delay: 0.6s;\n          transition-delay: 0.6s;\n  -webkit-transform: translate3d(0, 120px, 0);\n          transform: translate3d(0, 120px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(4) {\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n  -webkit-transform: translate3d(0, 180px, 0);\n          transform: translate3d(0, 180px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(5) {\n  -webkit-transition-delay: 0.4s;\n          transition-delay: 0.4s;\n  -webkit-transform: translate3d(0, 240px, 0);\n          transform: translate3d(0, 240px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(6) {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n  -webkit-transform: translate3d(0, 300px, 0);\n          transform: translate3d(0, 300px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(7) {\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  -webkit-transform: translate3d(0, 360px, 0);\n          transform: translate3d(0, 360px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(8) {\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n  -webkit-transform: translate3d(0, 420px, 0);\n          transform: translate3d(0, 420px, 0);\n}\n.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(9) {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  -webkit-transform: translate3d(0, 480px, 0);\n          transform: translate3d(0, 480px, 0);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "share-dropdown-menu", class: { active: _vm.isActive } },
    [
      _c(
        "div",
        { staticClass: "share-dropdown-menu-wrapper" },
        [
          _c(
            "span",
            {
              staticClass: "share-dropdown-menu-title",
              on: {
                click: function($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.clickTitle($event)
                }
              }
            },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _vm._l(_vm.items, function(item, index) {
            return _c(
              "div",
              { key: index, staticClass: "share-dropdown-menu-item" },
              [
                item.href
                  ? _c("a", { attrs: { href: item.href, target: "_blank" } }, [
                      _vm._v(_vm._s(item.title))
                    ])
                  : _c("span", [_vm._v(_vm._s(item.title))])
              ]
            )
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Share/DropdownMenu.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Share/DropdownMenu.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownMenu.vue?vue&type=template&id=85aa61ea& */ "./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea&");
/* harmony import */ var _DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Share/DropdownMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMenu.vue?vue&type=template&id=85aa61ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share/DropdownMenu.vue?vue&type=template&id=85aa61ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_85aa61ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);