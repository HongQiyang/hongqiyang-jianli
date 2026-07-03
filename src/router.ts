import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectView from './views/ProjectView.vue'
import ResumeView from './views/ResumeView.vue'
import ContactView from './views/ContactView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/projects/:slug', name: 'project', component: ProjectView },
    { path: '/resume', name: 'resume', component: ResumeView },
    { path: '/contact', name: 'contact', component: ContactView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})
