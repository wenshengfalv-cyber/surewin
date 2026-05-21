import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ko from '../locales/ko.json'
import vi from '../locales/vi.json'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    fallbackLocale: 'en',
    messages: { en, zh, ko, vi }
  })
  nuxtApp.vueApp.use(i18n)
})
