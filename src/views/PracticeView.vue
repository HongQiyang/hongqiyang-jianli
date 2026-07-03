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
        v-for="(practice, index) in resume.practices"
        :id="`practice-${index + 1}`"
        :key="practice.title"
        class="project-entry practice-entry"
        data-reveal
      >
        <button
          class="practice-image-button"
          type="button"
          :aria-label="`放大查看${practice.image.alt}`"
          @click="selectedImage = practice.image"
        >
          <img
            class="practice-entry-image"
            :src="asset(practice.image.src)"
            :alt="practice.image.alt"
            loading="lazy"
          />
        </button>
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
          <div v-if="practice.honors?.length || practice.reports?.length" class="practice-proof-block">
            <h4>荣誉与报道</h4>
            <div v-if="practice.honors?.length" class="credential-row practice-honor-row">
              <span v-for="honor in practice.honors" :key="honor">{{ honor }}</span>
            </div>
            <div v-if="practice.reports?.length" class="compact-report-list practice-report-list">
              <a
                v-for="report in practice.reports"
                :key="report.href"
                :href="publicHref(report.href)"
                target="_blank"
                rel="noreferrer"
              >
                <span>{{ report.category }}</span>
                <strong>{{ report.source }}</strong>
                <em>{{ report.title }}</em>
              </a>
            </div>
          </div>
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

    <div
      v-if="selectedImage"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      @click="selectedImage = null"
    >
      <button
        class="image-lightbox-close"
        type="button"
        aria-label="关闭图片预览"
        @click.stop="selectedImage = null"
      >
        ×
      </button>
      <figure @click.stop>
        <img :src="asset(selectedImage.src)" :alt="selectedImage.alt" />
        <figcaption>{{ selectedImage.caption }}</figcaption>
      </figure>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { resume } from '../data/portfolio'
import type { EvidenceItem } from '../data/portfolio'
import { runPageMotion } from '../animations'

function asset(src: string): string {
  return `${import.meta.env.BASE_URL}${src}`
}

function publicHref(href: string): string {
  if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('#')) {
    return href
  }

  return asset(href)
}

const selectedImage = ref<EvidenceItem | null>(null)

onMounted(() => runPageMotion())
</script>
