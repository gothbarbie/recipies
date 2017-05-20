import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [
      {
        id: 'et44rt',
        name: 'Semlor',
        description: 'Köp semla. Plocka ur förpackningen. Servera på fat.',
        ingredients: [
          {
            name: 'Semla',
            amount: 1,
            measurement: 'hg'
          }
        ],
        rating: 4
      },
      {
        id: '4t4t',
        name: 'Frysta kanelbullar',
        description: 'Köp bullar. Placera bullar i micron. Micra lagom länge på lagom värme. Servera på fat.',
        ingredients: [
          {
            name: 'Påse frysta kanelbullar',
            amount: 10,
            measurement: 'hg'
          }
        ],
        rating: 3
      },
      {
        id: 'jytje',
        name: 'Te',
        description: 'Värm vatten i en kopp i micron. Placera tepåse i koppen.',
        ingredients: [
          {
            name: 'Tepåse',
            amount: 5,
            measurement: 'g'
          }
        ],
        rating: 2
      },
      {
        id: 'uke5',
        name: 'Vatten',
        description: 'Placera glas under kranen. Fyll med vatten.',
        ingredients: [
          {
            name: 'Vatten',
            amount: 100,
            measurement: 'ml'
          }
        ],
        rating: 1
      }
    ],
    saved: []
  },
  getters: {
    recipies: state => {
      return state.recipies
    },
    saved: state => {
      return state.saved
    }
  },
  mutations: {
    addRecipie: (state, payload) => {
      state.recipies.push(payload)
    },
    addSaved: (state, payload) => {
      state.saved.push(payload)
    }
  },
  actions: {
    addRecipie: ({ commit }, payload) => {
      commit('addRecipie', payload)
    },
    addSaved: ({ commit }, payload) => {
      commit('addSaved', payload)
    }
  }
})
