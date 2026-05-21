<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '~/composables/useSeo'
import { normalizeLocale } from '~/composables/useLocales'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale, t } = useI18n()

const lang = normalizeLocale(route.params.lang)
locale.value = lang

useSeo({
  title: `${t('blogs.title')} - ${t('meta.title')}`,
  description: t('blogs.desc')
})
</script>

<template>
  <div>
    <BlogHero />
    <BlogList />
    <HomeContactForm />
  </div>
</template>