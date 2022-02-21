import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_5d521eac from 'nuxt_plugin_plugin_5d521eac' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_pluginclient_c8276d3c from 'nuxt_plugin_pluginclient_c8276d3c' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_01a5baea from 'nuxt_plugin_pluginserver_01a5baea' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginutils_5a4d917f from 'nuxt_plugin_pluginutils_5a4d917f' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_99a089ec from 'nuxt_plugin_pluginrouting_99a089ec' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_6cd81ca5 from 'nuxt_plugin_pluginmain_6cd81ca5' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_2ab2f248 from 'nuxt_plugin_vuesocialsharingplugin_2ab2f248' // Source: .\\vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_workbox_0f109baa from 'nuxt_plugin_workbox_0f109baa' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_c9e168aa from 'nuxt_plugin_metaplugin_c9e168aa' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_c0921dc2 from 'nuxt_plugin_iconplugin_c0921dc2' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_pluginserver_5eef5f3a from 'nuxt_plugin_pluginserver_5eef5f3a' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_0d94249c from 'nuxt_plugin_pluginclient_0d94249c' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_vueobservevisibility_66676af7 from 'nuxt_plugin_vueobservevisibility_66676af7' // Source: ..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\plugins\\vue-observe-visibility.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"bodyAttrs":{"class":["font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"]},"title":"Biaren Blogs","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Tempat berbagi informasi programming, dan cerita penulis"},{"name":"google-site-verification","content":"IBRJnNn4H-jHM-M1RXGFowYa-FZAB8tfkLgU4aG19RE"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ficon.png"},{"hid":"gf-prefetch","rel":"dns-prefetch","href":"https:\u002F\u002Ffonts.gstatic.com\u002F"},{"hid":"gf-preconnect","rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com\u002F","crossorigin":""},{"hid":"gf-preload","rel":"preload","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Quicksand:wght@400;500;600;700&display=swap"}],"style":[],"script":[{"hid":"gf-script","innerHTML":"(function(){var l=document.createElement('link');l.rel=\"stylesheet\";l.href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Quicksand:wght@400;500;600;700&display=swap\";document.querySelector(\"head\").appendChild(l);})();"}],"noscript":[{"hid":"gf-noscript","innerHTML":"\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Quicksand:wght@400;500;600;700&display=swap\"\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gf-script":["innerHTML"],"gf-noscript":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_5d521eac === 'function') {
    await nuxt_plugin_plugin_5d521eac(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_c8276d3c === 'function') {
    await nuxt_plugin_pluginclient_c8276d3c(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_01a5baea === 'function') {
    await nuxt_plugin_pluginserver_01a5baea(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_5a4d917f === 'function') {
    await nuxt_plugin_pluginutils_5a4d917f(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_99a089ec === 'function') {
    await nuxt_plugin_pluginrouting_99a089ec(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_6cd81ca5 === 'function') {
    await nuxt_plugin_pluginmain_6cd81ca5(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_2ab2f248 === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_2ab2f248(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_0f109baa === 'function') {
    await nuxt_plugin_workbox_0f109baa(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_c9e168aa === 'function') {
    await nuxt_plugin_metaplugin_c9e168aa(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_c0921dc2 === 'function') {
    await nuxt_plugin_iconplugin_c0921dc2(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_5eef5f3a === 'function') {
    await nuxt_plugin_pluginserver_5eef5f3a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_0d94249c === 'function') {
    await nuxt_plugin_pluginclient_0d94249c(app.context, inject)
  }

  if (typeof nuxt_plugin_vueobservevisibility_66676af7 === 'function') {
    await nuxt_plugin_vueobservevisibility_66676af7(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
