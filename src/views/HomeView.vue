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

    <section class="profile-overview section-pad" aria-labelledby="profile-title" data-reveal>
      <div class="profile-copy">
        <p class="eyebrow">Profile</p>
        <h2 id="profile-title">个人信息</h2>
        <p class="profile-identity">{{ profile.identity }}</p>
        <div class="profile-metrics" aria-label="成绩与英语">
          <span v-for="metric in profile.metrics" :key="metric">{{ metric }}</span>
        </div>
        <p class="profile-objective">
          <strong>科研方向</strong>
          {{ profile.researchObjective }}
        </p>
        <div class="profile-photo-card" aria-label="个人照片">
          <img :src="profilePhotoSrc" alt="洪旗阳个人证件照" />
        </div>
      </div>
      <div class="honor-panel">
        <p class="eyebrow">Honors</p>
        <h2>代表荣誉</h2>
        <ul class="clean-list compact-list">
          <li v-for="honor in profile.honors" :key="honor.label" class="honor-item">
            <span>{{ honor.label }}</span>
            <span v-if="honor.proofs?.length" class="honor-proof-links" aria-label="荣誉证明链接">
              <button
                v-for="proof in honor.proofs"
                :key="proof.src"
                class="honor-proof-link"
                type="button"
                :aria-label="`查看${proof.alt}`"
                @click="selectedHonorProof = proof"
              >
                <span>{{ proof.label }}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                  <path d="M15 17H7V9" />
                </svg>
              </button>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <div
      v-if="selectedHonorProof"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedHonorProof.alt"
      @click.self="selectedHonorProof = null"
    >
      <button class="image-lightbox-close" type="button" aria-label="关闭图片预览" @click="selectedHonorProof = null">
        ×
      </button>
      <figure>
        <img :src="asset(selectedHonorProof.src)" :alt="selectedHonorProof.alt" />
        <figcaption>{{ selectedHonorProof.caption }}</figcaption>
      </figure>
    </div>

    <section class="focus-section section-pad" aria-labelledby="focus-title">
      <div class="focus-copy" data-reveal>
        <p class="eyebrow">Focus</p>
        <h2 id="focus-title">把抽象理论转化为可运行的水下系统</h2>
        <RouterLink class="text-link" to="/projects">查看全部项目</RouterLink>
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
import { onMounted, ref } from 'vue'
import { focusModules, profile } from '../data/portfolio'
import type { EvidenceItem } from '../data/portfolio'
import { runPageMotion } from '../animations'

const selectedHonorProof = ref<EvidenceItem | null>(null)
const asset = (src: string) => `${import.meta.env.BASE_URL}${src}`
const profilePhotoSrc = asset('assets/profile/headshot.png')

onMounted(() => runPageMotion())
</script>
