import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

import router from './router.js';
import store from './store/index.js';

const app = createApp(App)

app.use(store);
app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
