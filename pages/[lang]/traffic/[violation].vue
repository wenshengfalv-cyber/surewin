<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from '#app'
import { useSeo } from '~/composables/useSeo'
import { normalizeLocale } from '~/composables/useLocales'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const lang = normalizeLocale(route.params.lang)

const violation = route.params.violation;

const trafficItems = [
  'speed',
  'sign',
  'handheld',
  'seatbelt',
  'suspension',
  'noInsurance'
]

// Validate violation
if (!trafficItems.includes(violation)) {
  router.push(`/${lang}/`)
}

useSeo({
  title: `${t(`traffic.items.${violation}.title`)} - ${t('meta.title')}`,
  description: t(`traffic.items.${violation}.desc`)
})

const getBackLink = () => {
  return `/${lang}/`
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink :to="getBackLink()" class="text-blue-100 hover:text-white mb-4 inline-flex items-center">
          <span class="mr-2">←</span> Back
        </NuxtLink>
        <h1 class="text-4xl font-bold mt-4">
          {{ t(`traffic.items.${violation}.title`) }}
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            {{ t(`traffic.items.${violation}.desc`) }}
          </h2>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p class="text-gray-700 whitespace-pre-wrap">
              {{ t(`traffic.items.${violation}.detail`) }}
            </p>
          </div>

          <!-- CTA Section -->
          <div class="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
            <h3 class="text-2xl font-bold mb-4">{{ t('traffic.cta.title') }}</h3>
            <p class="mb-6">{{ t('traffic.cta.description') }}</p>
            <NuxtLink 
              :to="`/${route.params.lang}/contact`"
              class="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {{ t('traffic.cta.button') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose {
  color: #374151;
}

.prose h2 {
  @apply text-gray-900;
}

.prose p {
  @apply text-gray-700 leading-relaxed;
}
</style>
