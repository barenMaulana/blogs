(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,7,8],{320:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("0c0de98c",content,!0,{sourceMap:!1})},321:function(t,e,r){"use strict";r(320)},322:function(t,e,r){var n=r(77)(!1);n.push([t.i,".lazy-loaded[data-v-183da985]{opacity:1}",""]),t.exports=n},323:function(t,e,r){"use strict";r.r(e);r(23),r(60);var n={props:{src:{type:String,default:null},alt:{type:String,default:null},ratio:{type:String,default:null}},data:function(){return{show:!1,loaded:!1}},computed:{intristicRatio:function(){if(this.ratio){var t=this.ratio.split(":");return t[1]/t[0]}return 0},intristicRatioStyle:function(){return{"padding-bottom":"".concat(100*this.intristicRatio,"%")}}},methods:{lazyLoadImage:function(t,e){var r=this;t&&(this.show=!0,this.$nextTick((function(){var t=r.$refs.img;t.addEventListener("load",(function(){t.classList.add("lazy-loaded"),r.loaded=!0})),t.addEventListener("error",(function(){t.classList.add("lazy-load-error")}))})))}}},o=(r(321),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.lazyLoadImage,throttle:250,once:!0},expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true,\n  }"}],staticClass:"overflow-hidden relative",class:{"light:bg-light-surface dark:bg-dark-surface":!t.loaded},style:[t.intristicRatioStyle]},[r("div",{class:[t.ratio&&"absolute top-0 right-0 bottom-0 left-0"]},[t.show?r("img",{ref:"img",staticClass:"max-h-full opacity-0 transition-opacity duration-500 m-auto",attrs:{src:t.src,alt:t.alt}}):t._e()])])}),[],!1,null,"183da985",null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);var n={name:"BlogpostAuthor",props:{author:{type:Object,required:!0}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.author.link?r("a",{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150",attrs:{href:t.author.link,target:"_blank",rel:"noopener"}},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full",attrs:{src:t.author.avatarUrl,alt:t.author.name}}),t._v(" "),r("span",{staticClass:"mx-2 last:mr-0"},[t._v(t._s(t.author.name))])]):r("span",{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full",attrs:{src:t.author.avatarUrl,alt:t.author.name}}),t._v(" "),r("span",{staticClass:"mx-2 last:mr-0"},[t._v(t._s(t.author.name))])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);r(79),r(34);var n={props:{title:{type:String,required:!0},description:{type:String,required:!0},hashtags:{type:Array,default:function(){return[]}}},data:function(){return{networks:[{id:"facebook",icon:"IconFacebook"},{id:"twitter",icon:"IconTwitter"},{id:"linkedin",icon:"IconLinkedin"}],currentUrl:this.$config.baseUrl+this.$route.fullPath}},computed:{shareHashtags:function(){return this.$config.sharingDefaultHashtags?this.$config.sharingDefaultHashtags.concat(this.hashtags).join(","):this.hashtags.join(",")}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[r("div",[t._v("Share on")]),t._v(" "),t._l(t.networks,(function(e){return r("ShareNetwork",{key:e.id,staticClass:"cursor-pointer inline-block p-3",attrs:{network:e.id,url:t.currentUrl,title:t.title,description:t.description,hashtags:t.shareHashtags,"twitter-user":t.$config.twitterUsername,"aria-label":e.id}},[r(e.icon,{tag:"component",attrs:{width:"24",height:"24"}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var n={name:"BlogpostItem",props:{post:{type:Object,required:!0}},computed:{hasTags:function(){return this.post.tags}},methods:{formatDateByLocale:function(t){var e=this.$i18n.locale||"en";return new Date(t).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",{staticClass:"flex items-left justify-between flex-col mt-12"},[r("div",{staticClass:"flex flex-1 flex-col mb-8"},[r("h1",{staticClass:"text-4xl font-semibold mb-4 leading-tight"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"text-sm flex justify-between flex-col sm:flex-row"},[r("div",t._l(t.post.authors,(function(t,e){return r("BlogpostAuthor",{key:e,attrs:{author:t}})})),1),t._v(" "),r("div",{staticClass:"mt-1 dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary"},[t._v("\n          "+t._s(t.formatDateByLocale(t.post.publishedAt))+"\n          "),r("span",{staticClass:"text-xs mx-1"},[t._v("•")]),t._v("\n          "+t._s(t.post.readingTime.text)+"\n        ")])])]),t._v(" "),t.post.image?r("AppImage",{staticClass:"rounded",attrs:{src:t.post.image,ratio:"16:9",sizes:"80vh"}}):t._e()],1),t._v(" "),r("div",{staticClass:"mt-12"},[r("NuxtContent",{attrs:{document:t.post}})],1),t._v(" "),t.hasTags?r("div",{staticClass:"border-t border-light-border dark:border-dark-border my-10"},[t.$config.sharingBlogPostEnabled?r("BlogPostShare",{staticClass:"mt-10 mb-5",attrs:{title:t.post.title,description:t.post.description,hashtags:t.post.tags}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-row flex-wrap justify-start my-10 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},t._l(t.post.tags,(function(e,n){return r("span",{key:n,staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogpostAuthor:r(325).default,AppImage:r(323).default,BlogPostShare:r(326).default})}}]);