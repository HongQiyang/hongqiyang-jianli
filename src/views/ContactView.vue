<template>
  <main class="contact-page section-pad">
    <section class="contact-panel" data-reveal>
      <p class="eyebrow">Contact</p>
      <h1>学术交流与合作联系</h1>
      <p class="contact-lead">
        欢迎围绕智能海洋装备、水声感知、仿生机器人平台等方向进行学术交流、
        项目合作与材料沟通。
      </p>
      <div class="contact-grid">
        <a class="contact-card contact-mail" :href="`mailto:${contact.email}`">
          <span>邮箱联系</span>
          <strong>{{ contact.email }}</strong>
          <em>用于项目交流、材料沟通与合作联系</em>
        </a>
        <article class="contact-card">
          <span>交流方向</span>
          <strong>水声感知 / 仿生机器人 / 水下系统</strong>
          <em>围绕科研项目、实验验证和工程实现展开讨论</em>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { contact } from '../data/portfolio'
import { runPageMotion } from '../animations'

onMounted(() => runPageMotion())
</script>
