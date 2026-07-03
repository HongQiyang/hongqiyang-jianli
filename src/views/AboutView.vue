<template>
  <main class="simple-page section-pad">
    <p class="eyebrow" data-reveal>About</p>
    <h1 data-reveal>关于洪旗阳</h1>
    <p class="large-copy" data-reveal>{{ profile.about }}</p>
    <div class="about-card" data-reveal>
      <span>厦门大学</span>
      <span>海洋技术方向</span>
      <span>福建省厦门第一中学</span>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { profile } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
