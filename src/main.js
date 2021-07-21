import { createApp } from 'vue'
import naive from 'naive-ui'
import ElementPlus from 'element-plus';
import { ElMessage } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
window.$axios = axios;

import animated from 'animate.css'
const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    console.log('错误：' + err,info);
  }
app.config.globalProperties.$message = ElMessage;
app.config.performance = true;
app.use(store).use(router)
app.use(animated)
app.use(naive)
app.use(ElementPlus)
// app.use(VueClipboard)
app.mount('#app')
