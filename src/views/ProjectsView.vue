<template>
  <main class="projects-page section-pad">
    <section class="page-hero" data-reveal>
      <p class="eyebrow">Projects</p>
      <h1>项目</h1>
      <p class="large-copy">
        围绕水声通信、水声探测及水下机器人平台智能制造应用，推进从理论建模、算法推导到系统集成与工程验证的全流程落地。
      </p>
    </section>

    <section class="project-directory" aria-labelledby="projects-title">
      <div class="section-heading">
        <p class="eyebrow">Selected Projects</p>
        <h2 id="projects-title">项目入口</h2>
      </div>

      <article
        v-for="project in projects"
        :key="project.slug"
        class="project-entry"
        data-reveal
      >
        <div>
          <p class="project-status">{{ project.status }}</p>
          <RouterLink class="project-title-link" :to="project.href">
            {{ project.title }}
          </RouterLink>
          <p class="project-summary">{{ project.summary }}</p>
        </div>
        <RouterLink class="project-arrow" :to="project.href" :aria-label="`查看${project.title}`">
          →
        </RouterLink>
        <div class="keyword-row">
          <span v-for="keyword in project.keywords" :key="keyword">{{ keyword }}</span>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { projects } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
