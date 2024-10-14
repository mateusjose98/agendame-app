
// Components
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// Composables
import { createApp } from 'vue'
import '@/scss/style.scss';
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
