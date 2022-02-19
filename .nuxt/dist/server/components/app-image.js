exports.ids = [4];
exports.modules = {

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0c0de98c", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_183da985_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_183da985_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_183da985_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_183da985_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_183da985_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lazy-loaded[data-v-183da985]{opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppImage.vue?vue&type=template&id=183da985&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:({
    callback: _vm.lazyLoadImage,
    throttle: 250,
    once: true,
  }),expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true,\n  }"}],staticClass:"overflow-hidden relative",class:{ 'light:bg-light-surface dark:bg-dark-surface': !_vm.loaded },style:([_vm.intristicRatioStyle])},[_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.ratio && 'absolute top-0 right-0 bottom-0 left-0']))+" data-v-183da985>"+((_vm.show)?("<img"+(_vm._ssrAttr("src",_vm.src))+(_vm._ssrAttr("alt",_vm.alt))+" class=\"max-h-full opacity-0 transition-opacity duration-500 m-auto\" data-v-183da985>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppImage.vue?vue&type=template&id=183da985&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppImagevue_type_script_lang_js_ = ({
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    ratio: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      show: false,
      loaded: false
    };
  },

  computed: {
    intristicRatio() {
      if (!this.ratio) {
        return 0;
      } else {
        const sizes = this.ratio.split(':');
        const ratio = sizes[1] / sizes[0];
        return ratio;
      }
    },

    intristicRatioStyle() {
      return {
        'padding-bottom': `${this.intristicRatio * 100}%`
      };
    }

  },
  methods: {
    lazyLoadImage(isVisible, entry) {
      if (isVisible) {
        this.show = true;
        this.$nextTick(() => {
          const lazyImage = this.$refs.img;
          lazyImage.addEventListener('load', () => {
            lazyImage.classList.add('lazy-loaded');
            this.loaded = true;
          });
          lazyImage.addEventListener('error', () => {
            lazyImage.classList.add('lazy-load-error');
          });
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppImagevue_type_script_lang_js_ = (AppImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "183da985",
  "66725db6"
  
)

/* harmony default export */ var AppImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-image.js.map