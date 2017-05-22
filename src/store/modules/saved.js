const state = {
  saved: []
}

const mutations = {
  'ADD_SAVED' (state, { id }) {
    const record = state.saved.find(element => element.id == id)
    if (!record) {
      state.saved.push({
        id
      })
    }
  },
  'SET_SAVED' (state, saved) {
    state.saved = saved
  }
}

const actions = {
  addSaved: ({ commit }, payload) => {
    commit('ADD_SAVED', payload)
  },
  setSaved: ({ commit }, saved) => {
    commit('SET_SAVED', saved)
  }
}

const getters = {
  saved: state => {
    return state.saved
  }
}

export default {
  state, 
  mutations,
  actions, 
  getters
}