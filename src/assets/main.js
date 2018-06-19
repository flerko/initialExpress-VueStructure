import Vue from 'vue'
import VueRouter from 'vue-router'
import getRoute from './routes'
import getStore from './store'
import Layout from "./components/layout/Layout.vue"
import moment from 'moment'

async function initApp() {
  window.moment = moment
  Vue.use(VueRouter)
  Vue.component("Layout", Layout)

  const store = await getStore()
  const router = await getRoute()

  router.beforeEach(async (to, from, next) => {
    return next()
  })

  await new Vue({
    el: '#layout',
    router: router,
    template: '<Layout/>',
    components: { layout },
    store,
  })
}

initApp()
