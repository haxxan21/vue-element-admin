(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clipboard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/clipboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/clipboard */ "./resources/js/utils/clipboard.js");
/* harmony import */ var _directive_clipboard_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/clipboard/index.js */ "./resources/js/directive/clipboard/index.js");
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
 // use clipboard directly

 // use clipboard by v-directive

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ClipboardDemo",
  directives: {
    clipboard: _directive_clipboard_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      activeName: "directly",
      inputData: "https://github.com/PanJiaChen/vue-element-admin"
    };
  },
  methods: {
    handleCopy: function handleCopy(text, event) {
      Object(_utils_clipboard__WEBPACK_IMPORTED_MODULE_0__["default"])(text, event);
    },
    clipboardSuccess: function clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-container" },
    [
      _c(
        "el-tabs",
        {
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "use clipboard  directly", name: "directly" } },
            [
              _c("el-input", {
                staticStyle: { width: "400px", "max-width": "100%" },
                attrs: { placeholder: "Please input" },
                model: {
                  value: _vm.inputData,
                  callback: function($$v) {
                    _vm.inputData = $$v
                  },
                  expression: "inputData"
                }
              }),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", icon: "el-icon-document" },
                  on: {
                    click: function($event) {
                      return _vm.handleCopy(_vm.inputData, $event)
                    }
                  }
                },
                [_vm._v("copy")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            {
              attrs: {
                label: "use clipboard by v-directive",
                name: "v-directive"
              }
            },
            [
              _c("el-input", {
                staticStyle: { width: "400px", "max-width": "100%" },
                attrs: { placeholder: "Please input" },
                model: {
                  value: _vm.inputData,
                  callback: function($$v) {
                    _vm.inputData = $$v
                  },
                  expression: "inputData"
                }
              }),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  directives: [
                    {
                      name: "clipboard",
                      rawName: "v-clipboard:copy",
                      value: _vm.inputData,
                      expression: "inputData",
                      arg: "copy"
                    },
                    {
                      name: "clipboard",
                      rawName: "v-clipboard:success",
                      value: _vm.clipboardSuccess,
                      expression: "clipboardSuccess",
                      arg: "success"
                    }
                  ],
                  attrs: { type: "primary", icon: "el-icon-document" }
                },
                [_vm._v("copy")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/directive/clipboard/clipboard.js":
/*!*******************************************************!*\
  !*** ./resources/js/directive/clipboard/clipboard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Inspired by https://github.com/Inndy/vue-clipboard2
var Clipboard = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");

if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value;
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value;
    } else {
      var clipboard = new Clipboard(el, {
        text: function text() {
          return binding.value;
        },
        action: function action() {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        }
      });
      clipboard.on('success', function (e) {
        var callback = el._v_clipboard_success;
        callback && callback(e); // eslint-disable-line
      });
      clipboard.on('error', function (e) {
        var callback = el._v_clipboard_error;
        callback && callback(e); // eslint-disable-line
      });
      el._v_clipboard = clipboard;
    }
  },
  update: function update(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value;
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value;
    } else {
      el._v_clipboard.text = function () {
        return binding.value;
      };

      el._v_clipboard.action = function () {
        return binding.arg === 'cut' ? 'cut' : 'copy';
      };
    }
  },
  unbind: function unbind(el, binding) {
    if (binding.arg === 'success') {
      delete el._v_clipboard_success;
    } else if (binding.arg === 'error') {
      delete el._v_clipboard_error;
    } else {
      el._v_clipboard.destroy();

      delete el._v_clipboard;
    }
  }
});

/***/ }),

/***/ "./resources/js/directive/clipboard/index.js":
/*!***************************************************!*\
  !*** ./resources/js/directive/clipboard/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard */ "./resources/js/directive/clipboard/clipboard.js");


var install = function install(Vue) {
  Vue.directive('Clipboard', _clipboard__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window.clipboard = _clipboard__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_clipboard__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_clipboard__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/utils/clipboard.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/clipboard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleClipboard; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);



function clipboardSuccess() {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  });
}

function clipboardError() {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$message({
    message: 'Copy failed',
    type: 'error'
  });
}

function handleClipboard(_text, event) {
  var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(event.target, {
    text: function text() {
      return _text;
    }
  });
  clipboard.on('success', function () {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', function () {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

/***/ }),

/***/ "./resources/js/views/clipboard/index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/clipboard/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7169b1ea& */ "./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/clipboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/clipboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/clipboard/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/clipboard/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clipboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7169b1ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clipboard/index.vue?vue&type=template&id=7169b1ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7169b1ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);