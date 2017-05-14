import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: []
  },
  actions: {
    addRecipie: context => {
      context.commit('addRecipie')
    }
  }
})
