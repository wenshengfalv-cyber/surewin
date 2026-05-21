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
  title: `${t('services.title')} - ${t('meta.title')}`,
  description: t('meta.description')
})
</script>

<template>
  <div>
    <HomeServices />
    <HomeContactForm />
  </div>
</template>
