import Vue from 'vue'
import VueRouter from 'vue-router'
import * as components from './components'

const getRoute = async () => {
  Vue.use(VueRouter)

  const routes = await [
    {
      path: '/',
      name: 'home',
      component: components.Homepage,
      meta: {access: '*'}
    },
  ]

  const router = new VueRouter({
    routes,
    scrollBehavior () {
      return { x: 0, y: 0 }
    },
    mode: 'history'
  })

  return router
}

export default getRoute
