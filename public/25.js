(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/article */ "./resources/js/api/article.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MergeHeader",
  data: function data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.listLoading = true;
      Object(_api_article__WEBPACK_IMPORTED_MODULE_0__["fetchList"])(this.listQuery).then(function (response) {
        _this.list = response.data.items;
        _this.listLoading = false;
      });
    },
    handleDownload: function handleDownload() {
      var _this2 = this;

      this.downloadLoading = true;
      Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(43), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, /*! ../../vendor/Export2Excel */ "./resources/js/vendor/Export2Excel.js")).then(function (excel) {
        var multiHeader = [["Id", "Main Information", "", "", "Date"]];
        var header = ["", "Title", "Author", "Readings", ""];
        var filterVal = ["id", "title", "author", "pageviews", "display_time"];
        var list = _this2.list;

        var data = _this2.formatJson(filterVal, list);

        var merges = ["A1:A2", "B1:D1", "E1:E2"];
        excel.export_json_to_excel({
          multiHeader: multiHeader,
          header: header,
          merges: merges,
          data: data
        });
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          if (j === "timestamp") {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseTime"])(v[j]);
          } else {
            return v[j];
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: {
            loading: _vm.downloadLoading,
            type: "primary",
            icon: "el-icon-document"
          },
          on: { click: _vm.handleDownload }
        },
        [_vm._v("Export")]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.listLoading,
              expression: "listLoading"
            }
          ],
          ref: "multipleTable",
          attrs: {
            data: _vm.list,
            "element-loading-text": "Loading",
            border: "",
            fit: "",
            "highlight-current-row": ""
          }
        },
        [
          _c("el-table-column", {
            attrs: { align: "center", label: "Id", width: "95" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.$index))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Main Information", align: "center" } },
            [
              _c("el-table-column", {
                attrs: { label: "Title" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.title))]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Author", width: "110", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_c("el-tag", [_vm._v(_vm._s(scope.row.author))])]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Readings", width: "115", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.pageviews))]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "center", label: "Date", width: "220" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("i", { staticClass: "el-icon-time" }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseTime")(
                            scope.row.timestamp,
                            "{y}-{m}-{d} {h}:{i}"
                          )
                        )
                      )
                    ])
                  ]
                }
              }
            ])
          })
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

/***/ "./resources/js/api/article.js":
/*!*************************************!*\
  !*** ./resources/js/api/article.js ***!
  \*************************************/
/*! exports provided: fetchList, fetchArticle, fetchPv, createArticle, updateArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchList", function() { return fetchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticle", function() { return fetchArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPv", function() { return fetchPv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticle", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticle", function() { return updateArticle; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/js/utils/request.js");

function fetchList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  });
}
function fetchArticle(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: {
      id: id
    }
  });
}
function fetchPv(pv) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: {
      pv: pv
    }
  });
}
function createArticle(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data: data
  });
}
function updateArticle(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/excel/merge-header.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/excel/merge-header.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-header.vue?vue&type=template&id=0207f859& */ "./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859&");
/* harmony import */ var _merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-header.vue?vue&type=script&lang=js& */ "./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__["render"],
  _merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/excel/merge-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./merge-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/excel/merge-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./merge-header.vue?vue&type=template&id=0207f859& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/excel/merge-header.vue?vue&type=template&id=0207f859&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_0207f859___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);