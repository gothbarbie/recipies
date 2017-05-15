import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [
      {
        name: 'Frysta kanelbullar',
        description: 'Köp bullar. Placera bullar i micron. Micra lagom länge på lagom värme. Servera på fat.',
        ingredients: [
          {
            name: 'Påse frysta kanelbullar',
            amount: 10,
            measurement: 'hg'
          }
        ]
      },
      {
        name: 'Frysta kanelbullar',
        description: 'Köp bullar. Placera bullar i micron. Micra lagom länge på lagom värme. Servera på fat.',
        ingredients: [
          {
            name: 'Påse frysta kanelbullar',
            amount: 10,
            measurement: 'hg'
          }
        ]
      },
      {
        name: 'Frysta kanelbullar',
        description: 'Köp bullar. Placera bullar i micron. Micra lagom länge på lagom värme. Servera på fat.',
        ingredients: [
          {
            name: 'Påse frysta kanelbullar',
            amount: 10,
            measurement: 'hg'
          }
        ]
      },
      {
        name: 'Frysta kanelbullar',
        description: 'Köp bullar. Placera bullar i micron. Micra lagom länge på lagom värme. Servera på fat.',
        ingredients: [
          {
            name: 'Påse frysta kanelbullar',
            amount: 10,
            measurement: 'hg'
          }
        ]
      }
    ]
  },
  actions: {
    addRecipie: context => {
      context.commit('addRecipie')
    }
  }
})
