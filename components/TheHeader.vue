<template>
  <header
    class="sticky top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface h-16 lg:h-24 transition-colors duration-300 ease-linear"
    :class="{ shadow: !onTop, 'shadow-reverse': onTop }">
    <div class="container relative mx-auto px-4 flex items-center justify-between lg:py-6 h-full">
        <NuxtLink to="/">
                <img v-if="$config.logo" class="h-10 max-w-full" :src="$config.logo" />

                <template v-else-if="$config.logoLight && $config.logoDark">
                <img
                    :src="$config.logoLight"
                    class="h-10 max-w-full light-img"
                    height="100"
                />
                <img
                    :src="$config.logoDark"
                    class="h-10 max-w-full dark-img"
                    height="100"
                />
                </template>

                <AppLogo
                v-else-if="$options.components['AppLogo']"
                class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
                />
        </NuxtLink>
        <div v-if="$config.showSocialIconsOnHeader" class="dark:text-white flex">
            <a
            v-if="$config.linkedinUsername"
            :href="`https://www.linkedin.com/in/${$config.linkedinUsername}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="linkedin"
            >
            <IconLinkedin class="w-6 h-6" />
            </a>

            <a
            v-if="$config.twitterUsername"
            :href="`https://twitter.com/${$config.twitterUsername}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="twitter"
            >
            <IconTwitter class="w-6 h-6" />
            </a>

            <a
            v-if="$config.githubOwner"
            :href="`https://github.com/${$config.githubOwner}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="github"
            >
            <IconGithub class="w-6 h-6" />
            </a>
        </div>
        <div>
            <DarkModeToggle />
        </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      onTop: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60
    },
  },
}
</script>