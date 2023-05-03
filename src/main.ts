import { createApp } from 'vue';
import App from './App.vue';
import '../src/assets/css/main.css';
import 'virtual:windi.css';
import router from './router';
import { createPinia } from 'pinia';
// import '@/mock/index';  // 引入库
import 'lib-flexible/flexible'; //移动端适配
const app = createApp(App);
app
    .use(createPinia())
    .use(router).
    mount('#app');
