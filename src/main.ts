import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { refreshMotion } from './animations'
import './styles.css'

router.afterEach(() => {
  window.setTimeout(() => refreshMotion(), 0)
})

createApp(App).use(router).mount('#app')
