exports.ids = [21,4,10];
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaGeneric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaArticle; });
function metaGeneric(title, description, url) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url,
    },
  ]
}

function metaArticle(author, publishedAt, modifiedTime) {
  return [
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'article:author',
      name: 'article:author',
      content: author,
    },
    {
      hid: 'article:published_time',
      name: 'article:published_time',
      content: publishedAt,
    },
    {
      hid: 'article:modified_time',
      name: 'article:modified_time',
      content: modifiedTime,
    },
  ]
}


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue?vue&type=template&id=c40105de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NuxtLink',{staticClass:"light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear",attrs:{"to":_vm.localePath({ name: 'slug', params: { slug: _vm.post.slugWithoutLocale } })}},[_c('div',{staticClass:"flex flex-col justify-between pr-4",class:_vm.post.image ? 'lg:w-2/3' : 'w-full'},[_c('div',{staticClass:"mb-2"},[_c('h2',{staticClass:"mb-4 inline-block leading-tight light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-semibold text-2xl md:text-3xl transition-colors duration-300 ease-linear"},[_vm._v("\n        "+_vm._s(_vm.post.title)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mb-4"},[_c('p',{staticClass:"truncate-multiline-3 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[_vm._v("\n          "+_vm._s(_vm.post.description)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"flex flex-row flex-wrap justify-start mb-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},_vm._l((_vm.post.tags),function(tag,id){return _c('span',{key:id,staticClass:"truncate tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"flex flex-col lg:flex-row text-sm"},[(_vm.post.authors)?_c('div',{staticClass:"mb-4 lg:mb-0 flex items-center"},_vm._l((_vm.post.authors),function(author,index){return _c('span',{key:index,staticClass:"flex items-center mr-4"},[_c('img',{staticClass:"inline-block h-6 w-6 rounded-full mr-2",attrs:{"src":author.avatarUrl,"alt":""}}),_vm._v(" "),_c('span',{staticClass:"leading-none last:mr-0 light:text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"},[_vm._v("\n            "+_vm._s(author.name)+"\n          ")])])}),0):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex w-full lg:w-auto items-center justify-between leading-none"},[(_vm.post.authors)?_c('span',{staticClass:"hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[_vm._v("\n          •\n        ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[_vm._v("\n          "+_vm._s(_vm.formatDateByLocale(_vm.post.publishedAt))+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"hidden lg:inline-block text-xs mx-2 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[_vm._v("\n          •\n        ")]),_vm._v(" "),_c('span',{staticClass:"light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"},[_vm._v("\n          "+_vm._s(_vm.post.readingTime.text)+"\n        ")])])])]),_vm._v(" "),(_vm.post.image)?_c('div',{staticClass:"w-full lg:w-1/3 mb-6 lg:mb-0 rounded overflow-hidden"},[_c('AppImage',{attrs:{"src":_vm.post.image,"ratio":"16:9"}})],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue?vue&type=template&id=c40105de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogpostPreviewItemvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      required: true
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
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogpostPreviewItemvue_type_script_lang_js_ = (BlogpostPreviewItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostPreviewItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogpostPreviewItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44cd5300"
  
)

/* harmony default export */ var BlogpostPreviewItem = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppImage: __webpack_require__(67).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/index.vue?vue&type=template&id=aaf1e992&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shadow-nuxt"},[_vm._ssrNode("<div class=\"container mx-auto px-4 pt-16 pb-8\">","</div>",[(_vm.$options.components['AppWelcome'])?_c('AppWelcome'):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",_vm._l((_vm.posts),function(post,index){return _c('BlogpostPreviewItem',{key:index,attrs:{"post":post}})}),1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/index.vue?vue&type=template&id=aaf1e992&

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/utils/metaTags.js
var metaTags = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    app
  }) {
    let posts = [];

    try {
      posts = await $content({
        deep: true
      }).where({
        locale: {
          $eq: app.i18n.defaultLocale
        }
      }).sortBy('publishedAt', 'desc').fetch();

      if (app.i18n.defaultLocale !== app.i18n.locale) {
        try {
          const translatedPosts = await $content({
            deep: true
          }).where({
            locale: {
              $eq: app.i18n.locale
            }
          }).sortBy('publishedAt', 'desc').fetch();
          posts = posts.map(post => {
            const translatedPost = translatedPosts.find(translatedPost => translatedPost.slugWithoutLocale === post.slug);
            return translatedPost || post;
          });
        } catch {}
      }
    } catch {}

    return {
      posts
    };
  },

  head() {
    const title = this.$i18n.t('meta.title');
    const description = this.$i18n.t('meta.description');
    return {
      title,
      titleTemplate: '%s',
      meta: [...Object(metaTags["b" /* metaGeneric */])(title, description)]
    };
  }

});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var nuxt_content_theme_blog_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nuxt_content_theme_blog_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ca798996"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogpostPreviewItem: __webpack_require__(78).default})


/***/ })

};;
//# sourceMappingURL=index.js.map