<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  },
  content: {
    type: String,
    required: true
  }
})

const { t } = useI18n()
</script>

<template>
  <article class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg max-w-none" v-html="content"></div>
      </div>
    </div>
  </article>
</template>

<style scoped>
:deep(.prose) {
  color: #374151;
}

:deep(.prose h2) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
}

:deep(.prose h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

:deep(.prose h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

:deep(.prose p) {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

:deep(.prose ul) {
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}

:deep(.prose strong) {
  font-weight: 600;
  color: #111827;
}
</style>
