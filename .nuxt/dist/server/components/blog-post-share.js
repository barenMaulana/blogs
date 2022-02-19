exports.ids = [6];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=blog-post-share.js.map