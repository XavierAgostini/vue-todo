import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object
const state = {
  toggleAll: false,
  newTodoText: '',
  todos: [],
  showCompleted: true,
  editIndex: -1
}

// mutations change the state
const mutations = {
  addTodo: function () {
    state.todos.push({
      'text': state.newTodoText,
      'isComplete': false
    })
    state.newTodoText = ''
  },
  deleteTodo: function (i) {
    state.todos.splice(i, 1)
  },
  completeTodo: function (i) {
    state.todos[i].isComplete = state.todos[i].isComplete || false
    state.toggleAll = false
  },
  editTodo: function (i) {
    state.editIndex = i
  },
  updateTodo: function (i) {
    state.editIndex = -1
  },
  toggleTodos: function () {
    for (var i = 0; i < state.todos.length; i++) {
      state.todos[i].isComplete = state.toggleAll
    }
  }
}

// actions
const actions = {
  addTodo: ({commit}) => commit('addTodo'),
  completeTodo: ({commit}) => commit('completeTodo'),
  deleteTodo: ({commit}) => commit('deleteTodo'),
  editTodo: ({commit}) => commit('editTodo'),
  toggleTodos: ({commit}) => commit('toggleTodos'),
  updateTodo: ({commit}) => commit('updateTodo')
}

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
