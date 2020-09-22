(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    roles: function roles() {
      return this.$store.getters.roles;
    },
    switchRoles: {
      get: function get() {
        return this.roles[0];
      },
      set: function set(val) {
        var _this = this;

        this.$store.dispatch('user/changeRoles', val).then(function () {
          _this.$emit('change');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/directive.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_permission_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directive/permission/index */ "./resources/js/directive/permission/index.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/permission */ "./resources/js/utils/permission.js");
/* harmony import */ var _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SwitchRoles */ "./resources/js/views/permission/components/SwitchRoles.vue");
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
 // 权限判断指令

 // 权限判断函数


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DirectivePermission",
  components: {
    SwitchRoles: _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    permission: _directive_permission_index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令

    };
  },
  methods: {
    checkPermission: _utils_permission__WEBPACK_IMPORTED_MODULE_1__["default"],
    handleRolesChange: function handleRolesChange() {
      this.key++;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container[data-v-19cbebe4]  .permission-alert {\n  width: 320px;\n  margin-top: 15px;\n  background-color: #f0f9eb;\n  color: #67c23a;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: inline-block;\n}\n.app-container[data-v-19cbebe4]  .permission-sourceCode {\n  margin-left: 15px;\n}\n.app-container[data-v-19cbebe4]  .permission-tag {\n  background-color: #ecf5ff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticStyle: { "margin-bottom": "15px" } }, [
        _vm._v("\n    Your roles: " + _vm._s(_vm.roles) + "\n  ")
      ]),
      _vm._v("\n  Switch roles:\n  "),
      _c(
        "el-radio-group",
        {
          model: {
            value: _vm.switchRoles,
            callback: function($$v) {
              _vm.switchRoles = $$v
            },
            expression: "switchRoles"
          }
        },
        [
          _c("el-radio-button", { attrs: { label: "editor" } }),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "admin" } })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("switch-roles", { on: { change: _vm.handleRolesChange } }),
      _vm._v(" "),
      _c("div", { key: _vm.key, staticStyle: { "margin-top": "30px" } }, [
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']"
                  }
                ],
                staticClass: "permission-alert"
              },
              [
                _vm._v("\n        Only\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("admin")]
                ),
                _vm._v("can see this\n      ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']"
                  }
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" }
              },
              [_vm._v("v-permission=\"['admin']\"")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["editor"],
                    expression: "['editor']"
                  }
                ],
                staticClass: "permission-alert"
              },
              [
                _vm._v("\n        Only\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("editor")]
                ),
                _vm._v("can see this\n      ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["editor"],
                    expression: "['editor']"
                  }
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" }
              },
              [_vm._v("v-permission=\"['editor']\"")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin", "editor"],
                    expression: "['admin','editor']"
                  }
                ],
                staticClass: "permission-alert"
              },
              [
                _vm._v("\n        Both\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("admin")]
                ),
                _vm._v("and\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("editor")]
                ),
                _vm._v("can see this\n      ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin", "editor"],
                    expression: "['admin','editor']"
                  }
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" }
              },
              [_vm._v("v-permission=\"['admin','editor']\"")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          key: "checkPermission" + _vm.key,
          staticStyle: { "margin-top": "60px" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "el-tabs",
            { staticStyle: { width: "550px" }, attrs: { type: "border-card" } },
            [
              _vm.checkPermission(["admin"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Admin" } },
                    [
                      _vm._v("\n        Admin can see this\n        "),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" }
                        },
                        [_vm._v("v-if=\"checkPermission(['admin'])\"")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.checkPermission(["editor"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Editor" } },
                    [
                      _vm._v("\n        Editor can see this\n        "),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" }
                        },
                        [_vm._v("v-if=\"checkPermission(['editor'])\"")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.checkPermission(["admin", "editor"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Admin-OR-Editor" } },
                    [
                      _vm._v(
                        "\n        Both admin or editor can see this\n        "
                      ),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" }
                        },
                        [_vm._v("v-if=\"checkPermission(['admin','editor'])\"")]
                      )
                    ],
                    1
                  )
                : _vm._e()
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", [
      _vm._v(
        "\n      In some cases, using v-permission will have no effect. For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.\n      "
      ),
      _c("br"),
      _vm._v("e.g.\n    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/directive/permission/index.js":
/*!****************************************************!*\
  !*** ./resources/js/directive/permission/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission */ "./resources/js/directive/permission/permission.js");


var install = function install(Vue) {
  Vue.directive('permission', _permission__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window['permission'] = _permission__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_permission__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_permission__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/directive/permission/permission.js":
/*!*********************************************************!*\
  !*** ./resources/js/directive/permission/permission.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");


function checkPermission(el, binding) {
  var value = binding.value;
  var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;

  if (value && value instanceof Array) {
    if (value.length > 0) {
      var permissionRoles = value;
      var hasPermission = roles.some(function (role) {
        return permissionRoles.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el, binding) {
    checkPermission(el, binding);
  },
  update: function update(el, binding) {
    checkPermission(el, binding);
  }
});

/***/ }),

/***/ "./resources/js/utils/permission.js":
/*!******************************************!*\
  !*** ./resources/js/utils/permission.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkPermission; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */

function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;
    var permissionRoles = value;
    var hasPermission = roles.some(function (role) {
      return permissionRoles.includes(role);
    });
    return hasPermission;
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"");
    return false;
  }
}

/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=template&id=11aa21a1& */ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1&");
/* harmony import */ var _SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=script&lang=js& */ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/permission/components/SwitchRoles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoles.vue?vue&type=template&id=11aa21a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/permission/directive.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/permission/directive.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.vue?vue&type=template&id=19cbebe4&scoped=true& */ "./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true&");
/* harmony import */ var _directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.vue?vue&type=script&lang=js& */ "./resources/js/views/permission/directive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& */ "./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19cbebe4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/permission/directive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/permission/directive.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/permission/directive.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./directive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=style&index=0&id=19cbebe4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_style_index_0_id_19cbebe4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./directive.vue?vue&type=template&id=19cbebe4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/directive.vue?vue&type=template&id=19cbebe4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_19cbebe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);