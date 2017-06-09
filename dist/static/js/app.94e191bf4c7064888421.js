webpackJsonp([1,2],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-7dc6c0d2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-06a83fee",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-7cb980bf",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "resumeEditor",
    class: {
      htmlMode: _vm.enableHtml
    }
  }, [(_vm.enableHtml) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }) : _c('pre', [_vm._v(_vm._s(_vm.result))])])
},staticRenderFns: []}

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "styleEditor"
  }, [_c('div', {
    staticClass: "code",
    domProps: {
      "innerHTML": _vm._s(_vm.codeInStyleTag)
    }
  }), _vm._v(" "), _c('pre', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedCode)
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StyleEditor__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ResumeEditor__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_reset_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_reset_css__);







/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app',
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_1__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_2__components_ResumeEditor___default.a
  },
  data: function data() {
    return {
      interval: 50,
      currentStyle: '',
      enableHtml: false,
      fullStyle: ['/*\n* Inspired by http://strml.net/\n* \u5927\u5BB6\u597D\uFF0C\u6211\u662F\u53F8\u60CA\u96F7\uFF01 \n* \u521D\u6B21\u89C1\u9762\u4EE5\u8FD9\u6837\u7684\u65B9\u5F0F\u6765\u5C55\u73B0\u81EA\u5DF1\u7684\u7B80\u5386\uFF0C\u5E0C\u671B\u60A8\u80FD\u62BD\u51FA\u60A8\u5B9D\u8D35\u7684\u65F6\u95F4\u8BA4\u771F\u9605\u8BFB\u3002\n* \u90A3\u4E48\u5148\u8BF4\u4E00\u4E0B\u6211\u7B80\u5386\u5F62\u6210\u7684\u601D\u8DEF\uFF0C\u5927\u4F53\u5982\u4E0B\uFF1A\n*/\n\n/* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* \u767D\u8272\u80CC\u666F\u592A\u5355\u8C03\u4E86\uFF0C\u6211\u4EEC\u6765\u70B9\u80CC\u666F */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54); \n}\n/* \u6587\u5B57\u79BB\u8FB9\u6846\u592A\u8FD1\u4E86 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* \u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* \u52A0\u70B9 3D \u6548\u679C\u5457 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0; \n  -webkit-transition: none; \n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* \u63A5\u4E0B\u6765\u6211\u7ED9\u81EA\u5DF1\u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh; \n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n  transform:rotateY(-10deg);\n  -webkit-transform:rotateY(-10deg);\n}\n/* \u597D\u4E86\uFF0C\u6211\u5F00\u59CB\u5199\u7B80\u5386\u4E86 */\n\n\n', '\n/* \u8FD9\u4E2A\u7B80\u5386\u597D\u50CF\u5DEE\u70B9\u4EC0\u4E48\n * \u5BF9\u4E86\uFF0C\u8FD9\u662F Markdown \u683C\u5F0F\u7684\uFF0C\u6211\u9700\u8981\u53D8\u6210\u5BF9 HR \u66F4\u53CB\u597D\u7684\u683C\u5F0F\n * \u7B80\u5355\uFF0C\u7528\u5F00\u6E90\u5DE5\u5177\u7FFB\u8BD1\u6210 HTML \u5C31\u884C\u4E86\n */\n', '\n/* \u518D\u5BF9 HTML \u52A0\u70B9\u6837\u5F0F */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'\u2022\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
      currentMarkdown: '',
      fullMarkdown: '\u53F8\u60CA\u96F7\n----\n\n\u8D44\u6DF1\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u8D44\u6DF1\u524D\u7AEF\u8BB2\u5E08\uFF0C\u73B0\u5728\u5728\u6DF1\u5733\u8D5B\u98DE\u8F6F\u4EF6\u5C31\u804C\uFF0C\u4E3B\u8981\u8D1F\u8D23\u524D\u7AEF\u5DE5\u4F5C\u3002\n\n\u6280\u80FD\n----\n\n* \u524D\u7AEF\u5F00\u53D1\n* Vue.js \u5F00\u53D1\n* Node.js \u5F00\u53D1\n\n\u5DE5\u4F5C\u7ECF\u5386\n----\n\n1. \u6DF1\u5733\u8D5B\u98DE\u8F6F\u4EF6\u6709\u9650\u516C\u53F8(https://www.isoffice.cn/)\n2. \u6DF1\u5733\u4E1C\u65B9\u5728\u7EBF\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8\n3. \u6DF1\u5733\u660E\u6E90\u8F6F\u4EF6\u80A1\u4EFD\u6709\u9650\u516C\u53F8\n4. \u897F\u5B89\u795E\u706F\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\n\n\u94FE\u63A5\n----\n\n* [GitHub](https://github.com/sijinglei)\n* [\u6211\u7684\u6587\u7AE0](https://www.zhihu.com/people/cheng-chi-72-85/pins/posts)\n\n'
    };
  },
  created: function created() {
    this.makeResume();
  },


  methods: {
    makeResume: async function makeResume() {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function showHtml() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle: function progressivelyShowStyle(n) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var interval = _this2.interval;
        var showStyle = async function () {
          var _this3 = this;

          var style = this.fullStyle[n];
          if (!style) {
            return;
          }

          var length = this.fullStyle.filter(function (_, index) {
            return index <= n;
          }).map(function (item) {
            return item.length;
          }).reduce(function (p, c) {
            return p + c;
          }, 0);
          var prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            var l = this.currentStyle.length - prefixLength;
            var char = style.substring(l, l + 1) || ' ';
            this.currentStyle += char;
            if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(function () {
                _this3.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(_this2);
        showStyle();
      });
    },
    progressivelyShowResume: function progressivelyShowResume() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var length = _this4.fullMarkdown.length;
        var interval = _this4.interval;
        var showResume = function showResume() {
          if (_this4.currentMarkdown.length < length) {
            _this4.currentMarkdown = _this4.fullMarkdown.substring(0, _this4.currentMarkdown.length + 1);
            var lastChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 1];
            var prevChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 2];
            console.log(prevChar);
            if (prevChar === '\n' && _this4.$refs.resumeEditor) {
              _this4.$nextTick(function () {
                return _this4.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function result() {
      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function highlightedCode() {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function codeInStyleTag() {
      return '<style>' + this.code + '</style>';
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
};

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App___default.a);
  }
});

/***/ })

},[84]);
//# sourceMappingURL=app.94e191bf4c7064888421.js.map