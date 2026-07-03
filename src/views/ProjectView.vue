<template>
  <main v-if="project" class="project-page">
    <section class="project-hero section-pad">
      <div class="project-hero-copy">
        <RouterLink class="back-link" to="/">← 返回项目入口</RouterLink>
        <p class="eyebrow">{{ project.status }}</p>
        <h1 class="project-hero-title">{{ project.title }}</h1>
        <p class="hero-intro">{{ project.summary }}</p>
        <div class="keyword-row">
          <span v-for="keyword in project.keywords" :key="keyword">{{ keyword }}</span>
        </div>
      </div>
      <img
        v-if="project.heroImage"
        class="project-hero-image"
        :src="asset(project.heroImage)"
        :alt="project.title"
      />
    </section>

    <section class="content-grid section-pad">
      <article v-for="section in project.sections" :key="section.title" class="glass-block" data-reveal>
        <p class="eyebrow">{{ section.eyebrow }}</p>
        <h2>{{ section.title }}</h2>
        <p>{{ section.body }}</p>
      </article>
    </section>

    <section class="split-section section-pad">
      <div data-reveal>
        <p class="eyebrow">Process</p>
        <h2>内容流程</h2>
      </div>
      <ol class="flow-list">
        <li v-for="item in project.flow" :key="item" data-reveal>{{ item }}</li>
      </ol>
    </section>

    <section class="split-section section-pad">
      <div data-reveal>
        <p class="eyebrow">Contribution</p>
        <h2>我的工作</h2>
      </div>
      <ul class="clean-list">
        <li v-for="item in project.contribution" :key="item" data-reveal>{{ item }}</li>
      </ul>
    </section>

    <section class="evidence-section section-pad">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Evidence</p>
        <h2>{{ evidenceTitle }}</h2>
      </div>
      <div class="evidence-grid">
        <figure v-for="item in project.evidence" :key="item.src" class="evidence-card" data-reveal>
          <img
            v-if="item.kind === 'image'"
            :src="asset(item.src)"
            :alt="item.alt"
            loading="lazy"
          />
          <video
            v-else
            :src="asset(item.src)"
            :aria-label="item.alt"
            controls
            preload="metadata"
          ></video>
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section v-if="project.proofs?.length" class="evidence-section proof-section section-pad">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Proof</p>
        <h2>证明材料</h2>
      </div>
      <div class="evidence-grid">
        <figure v-for="item in project.proofs" :key="item.src" class="evidence-card" data-reveal>
          <img
            v-if="item.kind === 'image'"
            :src="asset(item.src)"
            :alt="item.alt"
            loading="lazy"
          />
          <video
            v-else
            :src="asset(item.src)"
            :aria-label="item.alt"
            controls
            preload="metadata"
          ></video>
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section v-if="project.reports?.length" class="report-section section-pad">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Reports</p>
        <h2>媒体与官方报道</h2>
      </div>
      <div class="report-grid">
        <a
          v-for="report in project.reports"
          :key="report.href"
          class="report-card"
          :href="report.href"
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
  </main>

  <main v-else class="section-pad not-found">
    <h1>项目未找到</h1>
    <RouterLink class="button-link" to="/">返回首页</RouterLink>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findProject } from '../data/portfolio'
import { runPageMotion } from '../animations'

const route = useRoute()
const project = computed(() => findProject(String(route.params.slug)))
const evidenceTitle = computed(() => {
  const evidence = project.value?.evidence ?? []
  return evidence.length === 1 && evidence[0]?.kind === 'video' ? '项目视频' : '项目素材'
})

function asset(src: string): string {
  return `${import.meta.env.BASE_URL}${src}`
}

onMounted(() => runPageMotion())
watch(
  () => route.params.slug,
  () => window.setTimeout(() => runPageMotion(), 0)
)
</script>
