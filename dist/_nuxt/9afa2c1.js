(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{318:function(t,e,r){r(17),r(15),r(21),r(9),r(27),r(16),r(28);var n=r(96),o=r(97),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,x=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-long-arrow-left fa-w-14",h,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-left","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},O)},x),d.concat([r("g",{staticClass:"fa-group"},[r("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M128.09 220H424a24 24 0 0 1 24 24v24a24 24 0 0 1-24 24H128.09l-35.66-36z",opacity:".4"}}),r("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M142.56 409L7 273.5v-.06a25.23 25.23 0 0 1 0-34.84l.06-.06 135.5-135.49a24 24 0 0 1 33.94 0l17 17a24 24 0 0 1 0 33.94L92.43 256 193.5 358a24 24 0 0 1 0 33.94l-17 17a24 24 0 0 1-33.94.06z"}})])]))}}},324:function(t,e,r){r(17),r(15),r(21),r(9),r(27),r(16),r(28);var n=r(96),o=r(97),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,w=data.attrs,O=void 0===w?{}:w,x=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-long-arrow-right fa-w-14",h,y],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-right","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},O)},x),d.concat([r("g",{staticClass:"fa-group"},[r("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M319.91 292H24a24 24 0 0 1-24-24v-24a24 24 0 0 1 24-24h295.91l35.66 36z",opacity:".4"}}),r("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M305.44 103.05L441 238.54l.06.06a25.23 25.23 0 0 1 0 34.84l-.06.06L305.44 409a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L355.57 256 254.5 154a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94-.01z"}})])]))}}},333:function(t,e,r){"use strict";r.r(e);var n=r(318),o=r.n(n),l=r(324),c=r.n(l),f={name:"BlogpostNavigationLinks",components:{ArrowLeftIcon:o.a,ArrowRightIcon:c.a},props:{prev:{type:Object,default:null},next:{type:Object,default:null}},methods:{toLink:function(t){return this.localePath({name:"slug",params:{slug:t}})}}},d=r(12),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between items-center"},[t.prev?r("NuxtLink",{staticClass:"inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{to:t.toLink(t.prev.slug)}},[r("ArrowLeftIcon",{staticClass:"h-5 mr-2"}),t._v("\n    "+t._s(t.prev.title||"back to blog list")+"\n  ")],1):t._e(),t._v(" "),t.next?r("NuxtLink",{staticClass:"inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{to:t.toLink(t.next.slug)}},[t._v("\n    "+t._s(t.next.title)+"\n    "),r("ArrowRightIcon",{staticClass:"h-5 ml-2"})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);