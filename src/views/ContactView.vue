<template>
  <main class="simple-page section-pad">
    <p class="eyebrow" data-reveal>Contact</p>
    <h1 data-reveal>联系</h1>
    <p class="large-copy" data-reveal>
      公开页面仅保留邮箱，适合用于项目交流、学术沟通与合作联系。
    </p>
    <a class="contact-mail" :href="`mailto:${contact.email}`" data-reveal>
      {{ contact.email }}
    </a>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { contact } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
