import App from '@/App.vue';
import '@/assets/scss/main.scss';
import router from '@/router';
import { createApp } from 'vue';

const app = createApp(App);

app.use(router);

app.mount('#app');
