import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { Network } from 'vue-vis-network';

Vue.config.productionTip = false
Vue.component('network', Network);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
