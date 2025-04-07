import App from '@/App.vue';
import '@/assets/scss/main.scss';
import router from '@/router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
