<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useBlogPosts } from '~/composables/useBlogPosts'
import { useSeo } from '~/composables/useSeo'
import { normalizeLocale } from '~/composables/useLocales'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale, t } = useI18n()
const { getPostBySlug } = useBlogPosts()

const lang = normalizeLocale(route.params.lang)
locale.value = lang
const currentLang = lang

const blogSlug = route.params.slug

const currentPost = computed(() => {
  const post = getPostBySlug(String(blogSlug), currentLang)
  if (post) {
    useSeo({
      title: `${post.title} - ${t('meta.title')}`,
      description: post.excerpt,
      blogPost: post
    })
  } else {
    useSeo({
      title: t('common.blogNotFound'),
      description: ''
    })
  }

  return post || {
    title: t('common.blogNotFound'),
    date: { day: '01', month: 'Jan' },
    author: 'seagod',
    category: t('common.general'),
    excerpt: '',
    fullContent: currentLang === 'en' 
      ? '<p>This blog post could not be found.</p>' 
      : '<p>找不到此博客文章。</p>'
  }
})
</script>

<template>
  <div>
    <BlogPostHero 
      :current-lang="currentLang"
      :title="currentPost.title"
      :date="`${currentPost.date.day} ${currentPost.date.month}`"
      :author="currentPost.author"
      :category="currentPost.category"
    />
    <BlogPostContent 
      :current-lang="currentLang"
      :content="currentPost.fullContent"
    />
    <HomeContactForm :current-lang="currentLang" />
  </div>
</template>