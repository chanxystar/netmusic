import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import router from './router/index'
import vant from 'vant'
import { Icon } from 'vant';
import  'vant/lib/index.css'
const app = createApp(App)
app.use(vant)
app.use(Icon)
app.use(router)
app.mount('#app')
