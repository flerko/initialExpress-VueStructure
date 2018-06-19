import Vue from 'vue'

import Layout from './layout/Layout.vue'
import Homepage from './pages/Homepage.vue'

Vue.component('layout', Layout);
Vue.component('homepage', Homepage);

export {
  Layout,
  Homepage
}
