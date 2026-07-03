<template>
  <main class="practice-page section-pad">
    <section class="page-hero" data-reveal>
      <p class="eyebrow">Practice</p>
      <h1>实践</h1>
      <p class="large-copy">
        围绕返校宣讲、科考船开放日志愿服务与海洋科普实践，展示专业学习向公众表达、社会服务与科学传播的延伸。
      </p>
    </section>

    <section class="project-directory" aria-labelledby="practice-title">
      <div class="section-heading">
        <p class="eyebrow">Selected Practice</p>
        <h2 id="practice-title">实践入口</h2>
      </div>

      <article
        v-for="(practice, index) in resume.practices"
        :id="`practice-${index + 1}`"
        :key="practice.title"
        class="project-entry practice-entry"
        data-reveal
      >
        <img
          class="practice-entry-image"
          :src="asset(practice.image.src)"
          :alt="practice.image.alt"
          loading="lazy"
        />
        <div class="practice-entry-copy">
          <p class="project-status">{{ practice.date }}</p>
          <a class="project-title-link" :href="`#practice-${index + 1}`">
            {{ practice.title }}
          </a>
          <p class="project-summary">{{ practice.result }}</p>
          <p class="timeline-role">{{ practice.role }}</p>
          <ul class="clean-list compact-list">
            <li v-for="point in practice.points" :key="point">{{ point }}</li>
          </ul>
          <p class="practice-caption">{{ practice.image.caption }}</p>
        </div>
        <a
          class="project-arrow"
          :href="`#practice-${index + 1}`"
          :aria-label="`查看${practice.title}`"
        >
          →
        </a>
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

function asset(src: string): string {
  return `${import.meta.env.BASE_URL}${src}`
}

onMounted(() => runPageMotion())
</script>
