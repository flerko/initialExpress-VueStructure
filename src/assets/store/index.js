import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const getStore = async () => {
  Vue.use(Vuex)

  const state =  await {

  }

  const store = await new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })

  return store
}

export default getStore
