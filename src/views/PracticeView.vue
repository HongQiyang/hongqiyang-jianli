<template>
  <main class="practice-page section-pad">
    <section class="page-hero" data-reveal>
      <p class="eyebrow">Practice</p>
      <h1>实践</h1>
      <p class="large-copy">
        从精彩的返校宣讲，到忙碌的科考船开放日，再到深入基层的海洋科普实践，这一系列活动不仅是我专业学习的生动注脚，更是我走向社会的坚实桥梁。在这里，枯燥的理论化作了鲜活的科普故事。我深刻体会到，专业知识不应只停留在课堂与实验室，它更应该转化为向公众发声的力量，在社会服务与科学传播的广阔天地中创造真正的价值。
      </p>
    </section>

    <section class="project-directory" aria-labelledby="practice-title">
      <div class="section-heading">
        <p class="eyebrow">Selected Practice</p>
        <h2 id="practice-title">实践入口</h2>
      </div>

      <article
        v-for="practice in resume.practices"
        :key="practice.title"
        class="project-entry practice-entry practice-index-entry"
        data-reveal
      >
        <div class="practice-entry-copy">
          <p class="project-status">{{ practice.date }}</p>
          <RouterLink class="project-title-link" :to="`/practice/${practice.slug}`">
            {{ practice.title }}
          </RouterLink>
          <p class="project-summary">{{ practice.summary }}</p>
          <p class="timeline-role">{{ practice.role }}</p>
        </div>
        <RouterLink
          class="project-arrow"
          :to="`/practice/${practice.slug}`"
          :aria-label="`查看${practice.title}`"
        >
          →
        </RouterLink>
        <div class="keyword-row">
          <span>{{ practice.role }}</span>
          <span>{{ practice.result }}</span>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { resume } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
