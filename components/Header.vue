<script setup>
import { useI18n } from 'vue-i18n'
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PHONE_NUMBER } from '../constant/text';

const { t, locale } = useI18n()
const route = useRoute()
const mobileMenuOpen = ref(false)

// Use the locale meta composable to update meta tags based on locale
const { updateMeta } = useLocaleMeta()

// Update meta on component mount
onMounted(() => {
  updateMeta()
})

const navLinks = computed(() => [
  // { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about-us' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.blog', path: '/blogs' },
  { key: 'nav.faq', path: '/faq' },
  { key: 'nav.contact', path: '/contact' }
])

const toggleLangLink = computed(() => {
  const newLang = locale.value === 'en' ? 'zh' : 'en'
  const pathWithoutLang = route.path.replace(/^\/(zh|en)/, '')
  return `/${newLang}${pathWithoutLang}`
})

const isLinkActive = (path) => {
  // Handle the special case for the home page link
  if (path === '/') {
    return route.path === `/${locale.value}` || route.path === `/${locale.value}/`
  }
  return route.path.startsWith(`/${locale.value}${path}`)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0 min-w-0">
          <NuxtLink :to="`/${locale}`" class="block">
            <h1 class="text-2xl font-bold text-blue-900 truncate">{{ t('footer.companyName') }}</h1>
            <p class="text-xs text-gray-600">{{ t('common.legalServices') }}</p>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="`/${locale}${link.path}`"
            class="font-medium text-sm transition-colors"
            :class="isLinkActive(link.path) ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </nav>

        <!-- Language Switcher & Phone & Mobile Menu Button -->
        <div class="flex items-center space-x-3">
          <NuxtLink
            :to="toggleLangLink"
            class="hidden sm:inline-flex px-3 py-1 text-sm font-medium rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
          >
            {{ t('common.toggleLang') }}
          </NuxtLink>
          <a :href="`tel:${PHONE_NUMBER}`" class="hidden sm:inline-flex text-blue-900 font-semibold hover:text-blue-700 transition-colors text-sm">
            {{ PHONE_NUMBER }}
          </a>
          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-md md:hidden text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white"
      >
        <div class="px-4 py-4 border-b border-gray-200 flex items-center justify-between gap-3">
          <a :href="`tel:${PHONE_NUMBER}`" class="flex-1 rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-900 text-center hover:bg-blue-100 transition-colors">
            {{ PHONE_NUMBER }}
          </a>
          <NuxtLink
            :to="toggleLangLink"
            class="inline-flex items-center justify-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 transition-colors"
            @click="closeMobileMenu"
          >
            {{ t('common.toggleLang') }}
          </NuxtLink>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="`/${locale}${link.path}`"
            class="block px-3 py-2 rounded-md font-medium transition-colors"
            :class="isLinkActive(link.path) ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'"
            @click="closeMobileMenu"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>