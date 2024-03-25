import App from './App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import '@/assets/main.scss'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(Quasar, {
    iconSet: iconSet
  })
  .mount('#app');