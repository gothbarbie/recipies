import Vue from 'vue'
import Vuex from 'vuex'

import recipies from './modules/recipies'
import saved from './modules/saved'

import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules: {
    recipies,
    saved
  }
})
