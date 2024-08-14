import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles, {
    init: async engine => {
        await loadSlim(engine)
    },
})
app.mount('#app')
