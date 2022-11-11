import { createApp } from 'vue'
import App from './App.vue'
import '../app.css'
import { plugin, defaultConfig } from '@formkit/vue'
import store from "./store/index";

import router from "./route";

createApp(App).use(plugin, defaultConfig).use(store).use(router).mount('#app')
