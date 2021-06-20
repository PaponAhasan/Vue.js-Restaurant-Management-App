import { createApp } from 'vue'
import App from './App.vue'
import router from './routers' // <---

import Toaster from "@meforma/vue-toaster";

createApp(App).use(router).use(Toaster).mount('#app')