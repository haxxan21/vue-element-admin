(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BackToTop',
  props: {
    visibilityHeight: {
      type: Number,
      "default": 400
    },
    backPosition: {
      type: Number,
      "default": 0
    },
    customStyle: {
      type: Object,
      "default": function _default() {
        return {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        };
      }
    },
    transitionName: {
      type: String,
      "default": 'fade'
    }
  },
  data: function data() {
    return {
      visible: false,
      interval: null,
      isMoving: false
    };
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);

    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    backToTop: function backToTop() {
      var _this = this;

      if (this.isMoving) return;
      var start = window.pageYOffset;
      var i = 0;
      this.isMoving = true;
      this.interval = setInterval(function () {
        var next = Math.floor(_this.easeInOutQuad(10 * i, start, -start, 500));

        if (next <= _this.backPosition) {
          window.scrollTo(0, _this.backPosition);
          clearInterval(_this.interval);
          _this.isMoving = false;
        } else {
          window.scrollTo(0, next);
        }

        i++;
      }, 16.7);
    },
    easeInOutQuad: function easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BackToTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BackToTop */ "./resources/js/components/BackToTop/index.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BackToTopDemo",
  components: {
    BackToTop: _components_BackToTop__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // customizable button style, show/hide critical point, return position
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px",
        // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1" // 按钮的背景颜色 The background color of the button

      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.back-to-ceiling[data-v-3133455b] {\r\n  position: fixed;\r\n  display: inline-block;\r\n  text-align: center;\r\n  cursor: pointer;\n}\n.back-to-ceiling[data-v-3133455b]:hover {\r\n  background: #d5dbe7;\n}\n.fade-enter-active[data-v-3133455b],\r\n.fade-leave-active[data-v-3133455b] {\r\n  -webkit-transition: opacity .5s;\r\n  transition: opacity .5s;\n}\n.fade-enter[data-v-3133455b],\r\n.fade-leave-to[data-v-3133455b] {\r\n  opacity: 0\n}\n.back-to-ceiling .Icon[data-v-3133455b] {\r\n  fill: #9aaabf;\r\n  background: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.placeholder-container div[data-v-18326e25] {\r\n  margin: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true& ***!
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
  return _c("transition", { attrs: { name: _vm.transitionName } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "back-to-ceiling",
        style: _vm.customStyle,
        on: { click: _vm.backToTop }
      },
      [
        _c(
          "svg",
          {
            staticClass: "Icon Icon--backToTopArrow",
            staticStyle: { height: "16px", width: "16px" },
            attrs: {
              width: "16",
              height: "16",
              viewBox: "0 0 17 17",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"
              }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "components-container" },
    [
      _c("aside", [
        _vm._v(
          "When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner"
        )
      ]),
      _vm._v(" "),
      _c("aside", [
        _vm._v(
          "You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally"
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "el-tooltip",
        { attrs: { placement: "top", content: "tooltip" } },
        [
          _c("back-to-top", {
            attrs: {
              "custom-style": _vm.myBackToTopStyle,
              "visibility-height": 300,
              "back-position": 50,
              "transition-name": "fade"
            }
          })
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
    return _c("div", { staticClass: "placeholder-container" }, [
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")]),
      _vm._v(" "),
      _c("div", [_vm._v("placeholder")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BackToTop/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/BackToTop/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3133455b&scoped=true& */ "./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& */ "./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3133455b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BackToTop/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=style&index=0&id=3133455b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3133455b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3133455b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BackToTop/index.vue?vue&type=template&id=3133455b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3133455b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components-demo/back-to-top.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/components-demo/back-to-top.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back-to-top.vue?vue&type=template&id=18326e25&scoped=true& */ "./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true&");
/* harmony import */ var _back_to_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back-to-top.vue?vue&type=script&lang=js& */ "./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& */ "./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _back_to_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18326e25",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components-demo/back-to-top.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./back-to-top.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=style&index=0&id=18326e25&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_style_index_0_id_18326e25_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./back-to-top.vue?vue&type=template&id=18326e25&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components-demo/back-to-top.vue?vue&type=template&id=18326e25&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_back_to_top_vue_vue_type_template_id_18326e25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);