import './assets/myStyle.scss';

import 'bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 匯入 vue-loading-overlay
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// plugin vue-loading-overlay
app.use(LoadingPlugin);

// 使用 VeeValidate
import { useVeeValidate } from '@/assets/js';
const veeValidate = useVeeValidate();
veeValidate.initEnvironment();
Object.entries(veeValidate.getComponents()).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount('#app');
