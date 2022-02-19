exports.ids = [9];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=blogpost-navigation-links.js.map