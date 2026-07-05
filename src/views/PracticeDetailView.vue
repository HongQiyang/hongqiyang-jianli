<template>
  <main v-if="practice" class="practice-detail-page project-page">
    <section class="project-hero section-pad">
      <div class="project-hero-copy">
        <RouterLink class="back-link" to="/practice">← 返回实践入口</RouterLink>
        <p class="eyebrow">{{ practice.date }}</p>
        <h1 class="project-hero-title">{{ practice.title }}</h1>
        <p class="hero-intro">{{ practice.summary }}</p>
        <div class="keyword-row">
          <span>{{ practice.role }}</span>
          <span>{{ practice.result }}</span>
        </div>
      </div>
      <button
        class="practice-hero-image-button"
        type="button"
        :aria-label="`放大查看${practice.image.alt}`"
        @click="selectedImage = practice.image"
      >
        <img
          class="project-hero-image practice-detail-image"
          :src="asset(practice.image.src)"
          :alt="practice.image.alt"
        />
      </button>
    </section>

    <section class="split-section section-pad">
      <div data-reveal>
        <p class="eyebrow">Details</p>
        <h2>实践内容</h2>
      </div>
      <ul class="clean-list">
        <li v-for="point in practice.points" :key="point" data-reveal>{{ point }}</li>
      </ul>
    </section>

    <section class="split-section section-pad">
      <div data-reveal>
        <p class="eyebrow">Result</p>
        <h2>成果与证明</h2>
      </div>
      <div class="practice-detail-proof" data-reveal>
        <p class="project-summary">{{ practice.result }}</p>
        <div v-if="practice.honors?.length" class="credential-row practice-honor-row">
          <span v-for="honor in practice.honors" :key="honor">{{ honor }}</span>
        </div>
        <p class="practice-caption">{{ practice.image.caption }}</p>
      </div>
    </section>

    <section v-if="practice.attachments?.length" class="attachment-section section-pad">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Materials</p>
        <h2>相关材料</h2>
        <p class="section-lead">点击即可打开或下载对应的证明文件、现场照片与统计表。</p>
      </div>
      <div class="practice-attachment-list">
        <a
          v-for="file in practice.attachments"
          :key="file.href"
          class="practice-attachment-card"
          :href="publicHref(file.href)"
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          <span>{{ file.kind }}</span>
          <strong>{{ file.label }}</strong>
        </a>
      </div>
    </section>

    <section v-if="practice.reports?.length" class="report-section section-pad">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Reports</p>
        <h2>荣誉与报道</h2>
      </div>
      <div class="report-grid">
        <a
          v-for="report in practice.reports"
          :key="report.href"
          class="report-card"
          :href="publicHref(report.href)"
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          <span>{{ report.category }}</span>
          <strong>{{ report.source }}</strong>
          <em>{{ report.title }}</em>
          <small>{{ report.date }}</small>
          <p>{{ report.note }}</p>
        </a>
      </div>
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

  <main v-else class="section-pad not-found">
    <h1>实践内容未找到</h1>
    <RouterLink class="button-link" to="/practice">返回实践入口</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findPractice } from '../data/portfolio'
import type { EvidenceItem } from '../data/portfolio'
import { runPageMotion } from '../animations'

const route = useRoute()
const practice = computed(() => findPractice(String(route.params.slug)))
const selectedImage = ref<EvidenceItem | null>(null)

function asset(src: string): string {
  return `${import.meta.env.BASE_URL}${src}`
}

function publicHref(href: string): string {
  if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('#')) {
    return href
  }

  return asset(href)
}

onMounted(() => runPageMotion())
watch(
  () => route.params.slug,
  () => window.setTimeout(() => runPageMotion(), 0)
)
</script>
