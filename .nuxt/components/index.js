export { default as BackToList } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BackToList.vue'
export { default as BlogpostAuthor } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BlogpostAuthor.vue'
export { default as BlogpostItem } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BlogpostItem.vue'
export { default as BlogpostNavigationLinks } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BlogpostNavigationLinks.vue'
export { default as BlogpostPreviewItem } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BlogpostPreviewItem.vue'
export { default as BlogPostShare } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\blog\\BlogPostShare.vue'
export { default as FooterLinks } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\footer\\FooterLinks.vue'
export { default as AppContribute } from '../..\\components\\app\\AppContribute.vue'
export { default as AppCopyButton } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\app\\AppCopyButton.vue'
export { default as AppImage } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\app\\AppImage.vue'
export { default as AppLangSelect } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\app\\AppLangSelect.vue'
export { default as DarkModeToggle } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\app\\DarkModeToggle.vue'
export { default as PageNotFound } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\app\\PageNotFound.vue'
export { default as Alert } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\global\\Alert.vue'
export { default as CodeBlock } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\global\\CodeBlock.vue'
export { default as CodeGroup } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\global\\CodeGroup.vue'
export { default as CodeSandbox } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\global\\CodeSandbox.vue'
export { default as IconCheckCircle } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconCheckCircle.vue'
export { default as IconClipboardCopy } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconClipboardCopy.vue'
export { default as IconExclamationCircle } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconExclamationCircle.vue'
export { default as IconFacebook } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconFacebook.vue'
export { default as IconGithub } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconGithub.vue'
export { default as IconInformationCircle } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconInformationCircle.vue'
export { default as IconLinkedin } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconLinkedin.vue'
export { default as IconTwitter } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconTwitter.vue'
export { default as IconXCircle } from '../..\\node_modules\\@jsilva-pt\\nuxt-content-theme-blog\\components\\icons\\IconXCircle.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
