import Vue from 'vue'
import App from './App.vue'


import router from './router/index.js'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import axios from 'axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.axios =  axios;


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false



Vue.use(Antd);


new Vue({
  el: '#app',
  router,
  render: h => h(App),
});


