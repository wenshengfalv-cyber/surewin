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
  title: `${t('faq.title')} - ${t('meta.title')}`,
  description: t('faq.subtitle')
})
</script>

<template>

  <div>

    <FaqHero />

    <FaqContent />

    <HomeContactForm />

  </div>

</template>
