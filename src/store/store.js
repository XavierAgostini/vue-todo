import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object
const state = {
  todos: []
}

// mutations change the state
const mutations = {
  addTodo (todo) {
    state.todos.push(todo)
  }
}

// actions
const actions = {}

// getters are functions
const getters = {}

// A Vuex instance is created by combining the state, mutations,
// actions and getters

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
