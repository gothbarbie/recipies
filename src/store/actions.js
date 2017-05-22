import Vue from 'vue'

export const loadRecipies = ({ commit }) => {
  Vue.http.get('recipies.json')
    .then(response => response.json())
    .then(data => {
      if (data) { 
        commit('SET_RECIPIES', data)
      }
    })
}

export const loadSaved = ({ commit }) => {
  Vue.http.get('saved.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        commit('SET_SAVED', data)
      }
    })
}