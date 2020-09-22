(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/role.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _api_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/role */ "./resources/js/api/role.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



var defaultRole = {
  key: "",
  name: "",
  description: "",
  routes: []
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: "new",
      checkStrictly: false,
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  computed: {
    routesData: function routesData() {
      return this.routes;
    }
  },
  created: function created() {
    // Mock: get all routes and roles list from server
    this.getRoutes();
    this.getRoles();
  },
  methods: {
    getRoutes: function getRoutes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api_role__WEBPACK_IMPORTED_MODULE_3__["getRoutes"])();

              case 2:
                res = _context.sent;
                _this.serviceRoutes = res.data;
                _this.routes = _this.generateRoutes(res.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getRoles: function getRoles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_api_role__WEBPACK_IMPORTED_MODULE_3__["getRoles"])();

              case 2:
                res = _context2.sent;
                _this2.rolesList = res.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes: function generateRoutes(routes) {
      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
      var res = [];

      var _iterator = _createForOfIteratorHelper(routes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var route = _step.value;

          // skip some route
          if (route.hidden) {
            continue;
          }

          var onlyOneShowingChild = this.onlyOneShowingChild(route.children, route);

          if (route.children && onlyOneShowingChild && !route.alwaysShow) {
            route = onlyOneShowingChild;
          }

          var data = {
            path: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(basePath, route.path),
            title: route.meta && route.meta.title
          }; // recursive child routes

          if (route.children) {
            data.children = this.generateRoutes(route.children, data.path);
          }

          res.push(data);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return res;
    },
    generateArr: function generateArr(routes) {
      var _this3 = this;

      var data = [];
      routes.forEach(function (route) {
        data.push(route);

        if (route.children) {
          var temp = _this3.generateArr(route.children);

          if (temp.length > 0) {
            data = [].concat(_toConsumableArray(data), _toConsumableArray(temp));
          }
        }
      });
      return data;
    },
    handleAddRole: function handleAddRole() {
      this.role = Object.assign({}, defaultRole);

      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([]);
      }

      this.dialogType = "new";
      this.dialogVisible = true;
    },
    handleEdit: function handleEdit(scope) {
      var _this4 = this;

      this.dialogType = "edit";
      this.dialogVisible = true;
      this.checkStrictly = true;
      this.role = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deepClone"])(scope.row);
      this.$nextTick(function () {
        var routes = _this4.generateRoutes(_this4.role.routes);

        _this4.$refs.tree.setCheckedNodes(_this4.generateArr(routes)); // set checked state of a node not affects its father and child nodes


        _this4.checkStrictly = false;
      });
    },
    handleDelete: function handleDelete(_ref) {
      var _this5 = this;

      var $index = _ref.$index,
          row = _ref.row;
      this.$confirm("Confirm to remove the role?", "Warning", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_role__WEBPACK_IMPORTED_MODULE_3__["deleteRole"])(row.key);

              case 2:
                _this5.rolesList.splice($index, 1);

                _this5.$message({
                  type: "success",
                  message: "Delete succed!"
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })))["catch"](function (err) {
        console.error(err);
      });
    },
    generateTree: function generateTree(routes) {
      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
      var checkedKeys = arguments.length > 2 ? arguments[2] : undefined;
      var res = [];

      var _iterator2 = _createForOfIteratorHelper(routes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var route = _step2.value;
          var routePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(basePath, route.path); // recursive child routes

          if (route.children) {
            route.children = this.generateTree(route.children, routePath, checkedKeys);
          }

          if (checkedKeys.includes(routePath) || route.children && route.children.length >= 1) {
            res.push(route);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return res;
    },
    confirmRole: function confirmRole() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var isEdit, checkedKeys, index, _yield$addRole, data, _this6$role, description, key, name;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isEdit = _this6.dialogType === "edit";
                checkedKeys = _this6.$refs.tree.getCheckedKeys();
                _this6.role.routes = _this6.generateTree(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deepClone"])(_this6.serviceRoutes), "/", checkedKeys);

                if (!isEdit) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 6;
                return Object(_api_role__WEBPACK_IMPORTED_MODULE_3__["updateRole"])(_this6.role.key, _this6.role);

              case 6:
                index = 0;

              case 7:
                if (!(index < _this6.rolesList.length)) {
                  _context4.next = 14;
                  break;
                }

                if (!(_this6.rolesList[index].key === _this6.role.key)) {
                  _context4.next = 11;
                  break;
                }

                _this6.rolesList.splice(index, 1, Object.assign({}, _this6.role));

                return _context4.abrupt("break", 14);

              case 11:
                index++;
                _context4.next = 7;
                break;

              case 14:
                _context4.next = 22;
                break;

              case 16:
                _context4.next = 18;
                return Object(_api_role__WEBPACK_IMPORTED_MODULE_3__["addRole"])(_this6.role);

              case 18:
                _yield$addRole = _context4.sent;
                data = _yield$addRole.data;
                _this6.role.key = data.key;

                _this6.rolesList.push(_this6.role);

              case 22:
                _this6$role = _this6.role, description = _this6$role.description, key = _this6$role.key, name = _this6$role.name;
                _this6.dialogVisible = false;

                _this6.$notify({
                  title: "Success",
                  dangerouslyUseHTMLString: true,
                  message: "\n            <div>Role Key: ".concat(key, "</div>\n            <div>Role Name: ").concat(name, "</div>\n            <div>Description: ").concat(description, "</div>\n          "),
                  type: "success"
                });

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild: function onlyOneShowingChild() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var parent = arguments.length > 1 ? arguments[1] : undefined;
      var onlyOneChild = null;
      var showingChildren = children.filter(function (item) {
        return !item.hidden;
      }); // When there is only one child route, the child route is displayed by default

      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0];
        onlyOneChild.path = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(parent.path, onlyOneChild.path);
        return onlyOneChild;
      } // Show parent if there are no child route to display


      if (showingChildren.length === 0) {
        onlyOneChild = _objectSpread(_objectSpread({}, parent), {}, {
          path: "",
          noShowingChildren: true
        });
        return onlyOneChild;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container .roles-table[data-v-0d7a2d07] {\n  margin-top: 30px;\n}\n.app-container .permission-tree[data-v-0d7a2d07] {\n  margin-bottom: 30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "el-button",
        { attrs: { type: "primary" }, on: { click: _vm.handleAddRole } },
        [_vm._v("New Role")]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticStyle: { width: "100%", "margin-top": "30px" },
          attrs: { data: _vm.rolesList, border: "" }
        },
        [
          _c("el-table-column", {
            attrs: { align: "center", label: "Role Key", width: "220" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.key))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "center", label: "Role Name", width: "220" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.name))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "header-center", label: "Description" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.description))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "center", label: "Operations" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small" },
                        on: {
                          click: function($event) {
                            return _vm.handleEdit(scope)
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { type: "danger", size: "small" },
                        on: {
                          click: function($event) {
                            return _vm.handleDelete(scope)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            visible: _vm.dialogVisible,
            title: _vm.dialogType === "edit" ? "Edit Role" : "New Role"
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              attrs: {
                model: _vm.role,
                "label-width": "80px",
                "label-position": "left"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Name" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "Role Name" },
                    model: {
                      value: _vm.role.name,
                      callback: function($$v) {
                        _vm.$set(_vm.role, "name", $$v)
                      },
                      expression: "role.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Desc" } },
                [
                  _c("el-input", {
                    attrs: {
                      autosize: { minRows: 2, maxRows: 4 },
                      type: "textarea",
                      placeholder: "Role Description"
                    },
                    model: {
                      value: _vm.role.description,
                      callback: function($$v) {
                        _vm.$set(_vm.role, "description", $$v)
                      },
                      expression: "role.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Menus" } },
                [
                  _c("el-tree", {
                    ref: "tree",
                    staticClass: "permission-tree",
                    attrs: {
                      "check-strictly": _vm.checkStrictly,
                      data: _vm.routesData,
                      props: _vm.defaultProps,
                      "show-checkbox": "",
                      "node-key": "path"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right" } },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "danger" },
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.confirmRole } },
                [_vm._v("Confirm")]
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

/***/ "./resources/js/api/role.js":
/*!**********************************!*\
  !*** ./resources/js/api/role.js ***!
  \**********************************/
/*! exports provided: getRoutes, getRoles, addRole, updateRole, deleteRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoles", function() { return getRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRole", function() { return addRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRole", function() { return updateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRole", function() { return deleteRole; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/js/utils/request.js");

function getRoutes() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/routes',
    method: 'get'
  });
}
function getRoles() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/roles',
    method: 'get'
  });
}
function addRole(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/role',
    method: 'post',
    data: data
  });
}
function updateRole(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/vue-element-admin/role/".concat(id),
    method: 'put',
    data: data
  });
}
function deleteRole(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/vue-element-admin/role/".concat(id),
    method: 'delete'
  });
}

/***/ }),

/***/ "./resources/js/views/permission/role.vue":
/*!************************************************!*\
  !*** ./resources/js/views/permission/role.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.vue?vue&type=template&id=0d7a2d07&scoped=true& */ "./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true&");
/* harmony import */ var _role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.vue?vue&type=script&lang=js& */ "./resources/js/views/permission/role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& */ "./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d7a2d07",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/permission/role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/permission/role.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/permission/role.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=style&index=0&id=0d7a2d07&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_style_index_0_id_0d7a2d07_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./role.vue?vue&type=template&id=0d7a2d07&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/role.vue?vue&type=template&id=0d7a2d07&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_role_vue_vue_type_template_id_0d7a2d07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);