const state = {
  recipies: []
}

const mutations = {
  'SET_RECIPIES' (state, recipies) {
    state.recipies = recipies
  },
  'ADD_RECIPIE' (state, { id, name, description, ingredients, rating }) {
    const recipie = state.recipies.find(element => element.id == id)
    if (!recipie) {
      state.recipies.push({
        id,
        name,
        description,
        ingredients,
        rating
      })
    }
  }
}

const actions = {
  addRecipie: ({ commit }, payload) => {
    commit('ADD_RECIPIE', payload)
  },
  setRecipies: ({ commit }, recipies) => {
    commit('SET_RECIPIES', recipies)
  }
}

const getters = {
  recipies (state) {
    return state.recipies
  }
}

export default {
  state,
  mutations, 
  actions, 
  getters
}
