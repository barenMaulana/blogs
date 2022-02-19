exports.ids = [8,4,6,7];
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

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostAuthor.vue?vue&type=template&id=0f83d924&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.author.link)?_c('a',{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150",attrs:{"href":_vm.author.link,"target":"_blank","rel":"noopener"}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.author.avatarUrl))+(_vm._ssrAttr("alt",_vm.author.name))+" class=\"inline-block h-6 w-6 rounded-full\"> <span class=\"mx-2 last:mr-0\">"+_vm._ssrEscape(_vm._s(_vm.author.name))+"</span>")],2):_c('span',{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.author.avatarUrl))+(_vm._ssrAttr("alt",_vm.author.name))+" class=\"inline-block h-6 w-6 rounded-full\"> <span class=\"mx-2 last:mr-0\">"+_vm._ssrEscape(_vm._s(_vm.author.name))+"</span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostAuthor.vue?vue&type=template&id=0f83d924&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostAuthor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogpostAuthorvue_type_script_lang_js_ = ({
  name: 'BlogpostAuthor',
  props: {
    author: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostAuthor.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogpostAuthorvue_type_script_lang_js_ = (BlogpostAuthorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostAuthor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogpostAuthorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b13260d4"
  
)

/* harmony default export */ var BlogpostAuthor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogPostShare.vue?vue&type=template&id=2d5bed1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex items-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[_vm._ssrNode("<div>Share on</div> "),_vm._l((_vm.networks),function(network){return _c('ShareNetwork',{key:network.id,staticClass:"cursor-pointer inline-block p-3",attrs:{"network":network.id,"url":_vm.currentUrl,"title":_vm.title,"description":_vm.description,"hashtags":_vm.shareHashtags,"twitter-user":_vm.$config.twitterUsername,"aria-label":network.id}},[_c(network.icon,{tag:"component",attrs:{"width":"24","height":"24"}})],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogPostShare.vue?vue&type=template&id=2d5bed1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogPostShare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogPostSharevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    hashtags: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      networks: [{
        id: 'facebook',
        icon: 'IconFacebook'
      }, {
        id: 'twitter',
        icon: 'IconTwitter'
      }, {
        id: 'linkedin',
        icon: 'IconLinkedin'
      }],
      currentUrl: this.$config.baseUrl + this.$route.fullPath
    };
  },

  computed: {
    shareHashtags() {
      if (this.$config.sharingDefaultHashtags) {
        return this.$config.sharingDefaultHashtags.concat(this.hashtags).join(',');
      }

      return this.hashtags.join(',');
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogPostShare.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogPostSharevue_type_script_lang_js_ = (BlogPostSharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogPostShare.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogPostSharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d290784"
  
)

/* harmony default export */ var BlogPostShare = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostItem.vue?vue&type=template&id=9eeef794&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_vm._ssrNode("<header class=\"flex items-left justify-between flex-col mt-12\">","</header>",[_vm._ssrNode("<div class=\"flex flex-1 flex-col mb-8\">","</div>",[_vm._ssrNode("<h1 class=\"text-4xl font-semibold mb-4 leading-tight\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.post.title)+"\n      ")+"</h1> "),_vm._ssrNode("<div class=\"text-sm flex justify-between flex-col sm:flex-row\">","</div>",[_vm._ssrNode("<div>","</div>",_vm._l((_vm.post.authors),function(author,index){return _c('BlogpostAuthor',{key:index,attrs:{"author":author}})}),1),_vm._ssrNode(" <div class=\"mt-1 dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatDateByLocale(_vm.post.publishedAt))+"\n          ")+"<span class=\"text-xs mx-1\">•</span>"+_vm._ssrEscape("\n          "+_vm._s(_vm.post.readingTime.text)+"\n        ")+"</div>")],2)],2),_vm._ssrNode(" "),(_vm.post.image)?_c('AppImage',{staticClass:"rounded",attrs:{"src":_vm.post.image,"ratio":"16:9","sizes":"80vh"}}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-12\">","</div>",[_c('NuxtContent',{attrs:{"document":_vm.post}})],1),_vm._ssrNode(" "),(_vm.hasTags)?_vm._ssrNode("<div class=\"border-t border-light-border dark:border-dark-border my-10\">","</div>",[(_vm.$config.sharingBlogPostEnabled)?_c('BlogPostShare',{staticClass:"mt-10 mb-5",attrs:{"title":_vm.post.title,"description":_vm.post.description,"hashtags":_vm.post.tags}}):_vm._e(),_vm._ssrNode(" <div class=\"flex flex-row flex-wrap justify-start my-10 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary\">"+(_vm._ssrList((_vm.post.tags),function(tag,id){return ("<span class=\"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear\">"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n      ")+"</span>")}))+"</div>")],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostItem.vue?vue&type=template&id=9eeef794&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogpostItemvue_type_script_lang_js_ = ({
  name: 'BlogpostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasTags() {
      return this.post.tags;
    }

  },
  methods: {
    formatDateByLocale(d) {
      const currentLocale = this.$i18n.locale || 'en';
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(d).toLocaleDateString(currentLocale, options);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogpostItemvue_type_script_lang_js_ = (BlogpostItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogpostItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "427a7444"
  
)

/* harmony default export */ var BlogpostItem = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogpostAuthor: __webpack_require__(69).default,AppImage: __webpack_require__(67).default,BlogPostShare: __webpack_require__(70).default})


/***/ })

};;
//# sourceMappingURL=blogpost-item.js.map