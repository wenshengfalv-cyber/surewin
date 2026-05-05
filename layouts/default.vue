<script setup>
import ContactInfo from '~/components/contact/ContactInfo.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <ContactInfo />
    <Footer />
  </div>
</template>
