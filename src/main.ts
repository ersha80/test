import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n.ts'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)

app.mount('#app')
