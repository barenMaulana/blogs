exports.ids = [20,2,3,4,5,6,7,8,9,15];
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

/***/ 68:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["svg-inline--fa fa-long-arrow-left fa-w-14",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-left","data-prefix":"fad","focusable":"false","role":"img","viewBox":"0 0 448 512"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{staticClass:"fa-group"},[_c('path',{staticClass:"fa-secondary",attrs:{"fill":"currentColor","d":"M128.09 220H424a24 24 0 0 1 24 24v24a24 24 0 0 1-24 24H128.09l-35.66-36z","opacity":".4"}}),_c('path',{staticClass:"fa-primary",attrs:{"fill":"currentColor","d":"M142.56 409L7 273.5v-.06a25.23 25.23 0 0 1 0-34.84l.06-.06 135.5-135.49a24 24 0 0 1 33.94 0l17 17a24 24 0 0 1 0 33.94L92.43 256 193.5 358a24 24 0 0 1 0 33.94l-17 17a24 24 0 0 1-33.94.06z"}})])])
          )
        }
      }
    

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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/icons/IconClipboardCopy.vue?vue&type=template&id=97a9e4c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/icons/IconClipboardCopy.vue?vue&type=template&id=97a9e4c2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/icons/IconClipboardCopy.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d9d2a5f"
  
)

/* harmony default export */ var IconClipboardCopy = __webpack_exports__["default"] = (component.exports);

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

/***/ 73:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: ["svg-inline--fa fa-long-arrow-right fa-w-14",classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-right","data-prefix":"fad","focusable":"false","role":"img","viewBox":"0 0 448 512"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{staticClass:"fa-group"},[_c('path',{staticClass:"fa-secondary",attrs:{"fill":"currentColor","d":"M319.91 292H24a24 24 0 0 1-24-24v-24a24 24 0 0 1 24-24h295.91l35.66 36z","opacity":".4"}}),_c('path',{staticClass:"fa-primary",attrs:{"fill":"currentColor","d":"M305.44 103.05L441 238.54l.06.06a25.23 25.23 0 0 1 0 34.84l-.06.06L305.44 409a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L355.57 256 254.5 154a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94-.01z"}})])])
          )
        }
      }
    

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue?vue&type=template&id=b6d799f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"copy",staticClass:"copy"},[(_vm.state === 'copied')?_c('IconClipboardCheck',{staticClass:"w-5 h-5"}):_c('IconClipboardCopy',{staticClass:"w-5 h-5"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue?vue&type=template&id=b6d799f6&

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(62);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var AppCopyButtonvue_type_script_lang_js_ = ({
  data() {
    return {
      state: 'init'
    };
  },

  mounted() {
    const copyCode = new external_clipboard_default.a(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling;
      }

    });
    copyCode.on('success', event => {
      event.clearSelection();
      this.state = 'copied';
      window.setTimeout(() => {
        this.state = 'init';
      }, 2000);
    });
  }

});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppCopyButtonvue_type_script_lang_js_ = (AppCopyButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppCopyButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02df58bc"
  
)

/* harmony default export */ var AppCopyButton = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconClipboardCopy: __webpack_require__(71).default})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BackToList.vue?vue&type=template&id=5a57b52a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NuxtLink',{staticClass:"inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary",attrs:{"to":_vm.localePath({ name: 'index' })}},[_c('ArrowLeftIcon',{staticClass:"h-5 mr-2"}),_vm._v("back to blog list\n")],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BackToList.vue?vue&type=template&id=5a57b52a&

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/assets/icons/arrow-left.svg?inline
var arrow_leftinline = __webpack_require__(68);
var arrow_leftinline_default = /*#__PURE__*/__webpack_require__.n(arrow_leftinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BackToList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BackToListvue_type_script_lang_js_ = ({
  components: {
    ArrowLeftIcon: arrow_leftinline_default.a
  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BackToList.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BackToListvue_type_script_lang_js_ = (BackToListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BackToList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BackToListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "860c2eae"
  
)

/* harmony default export */ var BackToList = __webpack_exports__["default"] = (component.exports);

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


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostNavigationLinks.vue?vue&type=template&id=004aa453&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-between items-center"},[(_vm.prev)?_c('NuxtLink',{staticClass:"inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{"to":_vm.toLink(_vm.prev.slug)}},[_c('ArrowLeftIcon',{staticClass:"h-5 mr-2"}),_vm._v("\n    "+_vm._s(_vm.prev.title || 'back to blog list')+"\n  ")],1):_vm._e(),_vm._ssrNode(" "),(_vm.next)?_c('NuxtLink',{staticClass:"inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{"to":_vm.toLink(_vm.next.slug)}},[_vm._v("\n    "+_vm._s(_vm.next.title)+"\n    "),_c('ArrowRightIcon',{staticClass:"h-5 ml-2"})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostNavigationLinks.vue?vue&type=template&id=004aa453&

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/assets/icons/arrow-left.svg?inline
var arrow_leftinline = __webpack_require__(68);
var arrow_leftinline_default = /*#__PURE__*/__webpack_require__.n(arrow_leftinline);

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/assets/icons/arrow-right.svg?inline
var arrow_rightinline = __webpack_require__(73);
var arrow_rightinline_default = /*#__PURE__*/__webpack_require__.n(arrow_rightinline);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostNavigationLinks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BlogpostNavigationLinksvue_type_script_lang_js_ = ({
  name: 'BlogpostNavigationLinks',
  components: {
    ArrowLeftIcon: arrow_leftinline_default.a,
    ArrowRightIcon: arrow_rightinline_default.a
  },
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },
  methods: {
    toLink(slug) {
      return this.localePath({
        name: 'slug',
        params: {
          slug
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostNavigationLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogpostNavigationLinksvue_type_script_lang_js_ = (BlogpostNavigationLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/blog/BlogpostNavigationLinks.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogpostNavigationLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bfe35aec"
  
)

/* harmony default export */ var BlogpostNavigationLinks = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/app/AppContribute.vue?vue&type=template&id=7eb993d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/app/AppContribute.vue?vue&type=template&id=7eb993d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/app/AppContribute.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var AppContributevue_type_script_lang_js_ = ({
  props: {
    docLink: {
      type: String,
      required: false,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/app/AppContribute.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppContributevue_type_script_lang_js_ = (AppContributevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/app/AppContribute.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppContributevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61a9ca8c"
  
)

/* harmony default export */ var AppContribute = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/_slug.vue?vue&type=template&id=62650a2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"container lg:max-w-4xl mx-auto p-4 pb-8\">","</div>",[_c('BackToList'),_vm._ssrNode(" "),_c('BlogpostItem',{attrs:{"post":_vm.post}}),_vm._ssrNode(" "),_c('BlogpostNavigationLinks',{attrs:{"prev":_vm.prev,"next":_vm.next}}),_vm._ssrNode(" "),_c('AppContribute',{attrs:{"doc-link":_vm.docLink}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/_slug.vue?vue&type=template&id=62650a2c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/utils/metaTags.js
var metaTags = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/components/app/AppCopyButton.vue + 4 modules
var AppCopyButton = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'PageSlug',
  scrollToTop: true,

  async asyncData({
    $content,
    app,
    params,
    error
  }) {
    const {
      slug
    } = params;
    let post;
    let posts;
    let slugWithLocale = slug;

    if (app.i18n.locale !== app.i18n.defaultLocale) {
      slugWithLocale += `.${app.i18n.locale}`;
    }

    posts = await $content({
      deep: true
    }).where({
      locale: {
        $eq: app.i18n.locale
      },
      slugWithoutLocale: {
        $eq: slug
      }
    }).fetch();

    if (posts.length === 0) {
      posts = await $content({
        deep: true
      }).where({
        locale: {
          $eq: app.i18n.defaultLocale
        },
        slugWithoutLocale: {
          $eq: slug
        }
      }).fetch();
    }

    if (posts.length === 0) {
      return error({
        statusCode: 404
      });
    }

    if (Array.isArray(posts)) {
      post = posts[0];
    } else {
      post = posts;
    }

    const [prev, next] = await $content({
      deep: true
    }).where({
      locale: {
        $eq: app.i18n.defaultLocale
      }
    }).only(['title', 'slug']).sortBy('publishedAt', 'desc').surround(slugWithLocale, {
      before: 1,
      after: 1
    }).fetch();
    return {
      post,
      slug,
      prev,
      next
    };
  },

  head() {
    return {
      title: this.post.title,
      meta: [...Object(metaTags["b" /* metaGeneric */])(this.post.title, this.post.description, this.$config.baseUrl + this.$route.fullPath), ...Object(metaTags["a" /* metaArticle */])(this.post.author, this.post.publishedAt, this.post.modifiedTime)]
    };
  },

  computed: {
    docLink() {
      return `https://github.com/${this.$config.githubOwner}/${this.$config.githubRepository}/blob/${this.$config.githubMainBranch}/content${this.post.path}${this.post.extension}`;
    }

  },

  mounted() {
    const blocks = document.getElementsByClassName('nuxt-content-highlight');

    for (const block of blocks) {
      const CopyButton = external_vue_default.a.extend(AppCopyButton["default"]);
      const component = new CopyButton().$mount();
      block.appendChild(component.$el);
    }
  }

});
// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@jsilva-pt/nuxt-content-theme-blog/pages/_slug.vue





/* normalize component */

var _slug_component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cde6cc26"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (_slug_component.exports);

/* nuxt-component-imports */
installComponents(_slug_component, {BackToList: __webpack_require__(80).default,BlogpostItem: __webpack_require__(81).default,BlogpostNavigationLinks: __webpack_require__(82).default,AppContribute: __webpack_require__(83).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map