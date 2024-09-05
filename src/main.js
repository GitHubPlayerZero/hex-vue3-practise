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

app.mount('#app');
