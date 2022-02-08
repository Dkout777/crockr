import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { axiosInjectionKey, StoreKey } from './symbols';
import GlobalSocket from '@/plugins/websocket/GlobalWebSocket';
import addCustomFabricObjects from '@/utils/addCustomFabricObjects';

// Ensure that all custom fabric objects are added to the global fabric object
addCustomFabricObjects();

const app = createApp(App);

app.use(store, StoreKey);
app.use(router);
app.use(GlobalSocket, process.env.VUE_APP_WEB_SOCKET_URL);
app.use(VueAxios, axios);
app.provide(axiosInjectionKey, app.config.globalProperties.axios); // Provide axios globally

app.mount('#app');

export default App;
