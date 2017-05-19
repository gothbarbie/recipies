import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [
      {
        id: '0',
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
        id: '1',
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
        id: '2',
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
        id: '3',
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
    ]
  },
  actions: {
    addRecipie: context => {
      context.commit('addRecipie')
    }
  }
})
