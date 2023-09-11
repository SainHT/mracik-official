import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// * importing fontawesome to get better icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

library.add(faCloud)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
