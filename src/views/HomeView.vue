<template>
  <main class="home-page">
    <section class="hero section-pad">
      <p class="eyebrow">Portfolio</p>
      <h1>洪旗阳</h1>
      <p class="hero-focus">海洋声学与仿生机器人</p>
      <p class="hero-subtitle">{{ profile.subtitle }}</p>
      <p class="hero-intro">{{ profile.intro }}</p>
      <div class="hero-actions" aria-label="主要入口">
        <RouterLink class="button-link" to="/projects">查看项目</RouterLink>
        <RouterLink class="button-link secondary-link" to="/resume">在线简历</RouterLink>
      </div>
    </section>

    <section class="focus-section section-pad" aria-labelledby="focus-title">
      <div class="focus-copy" data-reveal>
        <p class="eyebrow">Focus</p>
        <h2 id="focus-title">把抽象理论转化为可运行的水下系统</h2>
        <RouterLink class="text-link" to="/projects">查看全部项目 →</RouterLink>
      </div>
      <div class="focus-grid" data-reveal>
        <article
          v-for="module in focusModules"
          :key="module.title"
          class="focus-module"
        >
          <span class="focus-icon">{{ module.icon }}</span>
          <h3>{{ module.title }}</h3>
          <p>{{ module.detail }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { focusModules, profile } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
