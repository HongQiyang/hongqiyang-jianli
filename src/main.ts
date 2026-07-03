import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { refreshMotion } from './animations'
import './styles.css'

router.afterEach(() => {
  window.setTimeout(() => refreshMotion(), 0)
})

createApp(App).use(router).mount('#app')

const redirectedRoute = window.sessionStorage.getItem('spa-redirect')

if (redirectedRoute) {
  window.sessionStorage.removeItem('spa-redirect')
  router.replace(redirectedRoute)
}
