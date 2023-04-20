// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  components: {
    global: true,
    dirs: ["components"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as lsStyle;',
        },
      },
    },
  },
  css: [
    '@/assets/scss/main.scss'
  ]
});
