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
  title: `${t('nav.about')} - ${t('meta.title')}`,
  description: t('whyChooseUs.description')
})
</script>

<template>
  <div>
    <AboutHero />
    <AboutLeaderStory />
    <AboutTeam />
    <AboutClients />
    <CaseGallery />
    <AboutWhyChooseUs />
    <HomeContactForm />
  </div>
</template>
