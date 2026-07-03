<template>
  <main class="resume-page section-pad">
    <section class="page-hero resume-intro" data-reveal>
      <p class="eyebrow">Resume</p>
      <h1>在线简历</h1>
      <p class="large-copy">{{ resume.summary }}</p>
    </section>

    <section class="resume-layout" aria-label="简历内容">
      <div class="resume-main">
        <section class="resume-section" data-reveal>
          <p class="eyebrow">Conference</p>
          <h2>论坛会议</h2>
          <article
            v-for="conference in resume.conferences"
            :key="conference.title"
            class="timeline-item"
          >
            <p class="timeline-date">{{ conference.date }}</p>
            <h3>{{ conference.title }}</h3>
            <p class="timeline-role">{{ conference.result }}</p>
            <p class="timeline-copy">{{ conference.detail }}</p>
          </article>
        </section>

        <section v-if="resume.researchProjects.length" class="resume-section" data-reveal>
          <p class="eyebrow">Research Project</p>
          <h2>大创项目</h2>
          <article
            v-for="item in resume.researchProjects"
            :key="item.title"
            class="timeline-item"
          >
            <p class="timeline-date">{{ item.date }}</p>
            <h3>{{ item.title }}</h3>
            <p class="timeline-role">{{ item.role }}</p>
            <ul class="clean-list compact-list">
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </section>

        <section class="resume-section" data-reveal>
          <p class="eyebrow">Education</p>
          <h2>教育背景</h2>
          <article
            v-for="education in resume.education"
            :key="education.school"
            class="education-row"
          >
            <p class="timeline-date">{{ education.date }}</p>
            <div>
              <h3>{{ education.school }}</h3>
              <p>{{ education.detail }}</p>
            </div>
          </article>
        </section>
      </div>

      <aside class="resume-side" aria-label="技能与资质">
        <section class="resume-section" data-reveal>
          <p class="eyebrow">Skills</p>
          <h2>技能</h2>
          <article
            v-for="skill in resume.skills"
            :key="skill.title"
            class="skill-card"
          >
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.items.join(' / ') }}</p>
          </article>
        </section>

        <section class="resume-section credential-panel" data-reveal>
          <p class="eyebrow">Credentials</p>
          <h2>英语与成绩</h2>
          <div class="credential-row">
            <span v-for="credential in resume.credentials" :key="credential">
              {{ credential }}
            </span>
          </div>
        </section>
      </aside>
    </section>

  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { resume } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
