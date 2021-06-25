import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
window.$axios = axios;

import animated from 'animate.css'
const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    console.log('错误：' + err,info);
  }
app.config.performance = true;
app.use(store).use(router)
app.use(animated)
app.mount('#app')
