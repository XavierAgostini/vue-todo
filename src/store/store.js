import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object
const state = {
  toggleAll: false,
  newTodoText: '',
  todos: JSON.parse(window.localStorage.getItem('vueTodos') || '[]'),
  showCompleted: true,
  editIndex: -1
}

// mutations change the state
const mutations = {
  addTodo: function (state) {
    state.todos.push({
      'text': state.newTodoText,
      'isComplete': false
    })
    state.newTodoText = ''
  },
  deleteTodo: function (state, todo) {
    var index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  },
  completeTodo: function (state, todo) {
    todo.isComplete = todo.isComplete || false
    state.toggleAll = false
  },
  toggleTodos: function (state) {
    for (var i = 0; i < state.todos.length; i++) {
      state.todos[i].isComplete = state.toggleAll
    }
  }
}

// actions
const actions = {
  addTodo: ({commit}) => commit('addTodo'),
  completeTodo: ({commit}, todo) => commit('completeTodo', todo),
  deleteTodo: ({commit}, todo) => commit('deleteTodo', todo),
  editTodo: ({commit}) => commit('editTodo'),
  toggleTodos: ({commit}) => commit('toggleTodos')
}

// getters are functions
const getters = {}

// A Vuex instance is created by combining the state, mutations,
// actions and getters
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
// On state change update localstorage of todos
store.subscribe((mutations, {todos}) => {
  window.localStorage.setItem('vueTodos', JSON.stringify(todos))
})
export default store
