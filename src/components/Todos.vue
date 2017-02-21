<template>
  <div>
    <h1>Todos App</h1>
    <div id="todoApp">
      <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo" />
      <div v-show="todos.length == 0">
        No Items To Show
      </div>
      <div v-for="(todo, index) in todos" class="todo">
        <h4 v-bind:class="{completed: todo.isCompleted}">{{todo.text}}</h4>
        <h5>{{todo.dateCreated}}</h5>
        <label for="isCompleted">Completed</label>
        <input type="checkbox" name="isCompleted" v-on:change="completeTodo(index)"/>
        <button v-on:click="deleteTodo(index)">X</button>
      </div>
      <div>
        {{todos.length}} items left
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTodoText: '',
        todos: []
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          'text': this.newTodoText,
          'isCompleted': false,
          'dateCreated': new Date()
        })
        this.newTodoText = ''
      },
      deleteTodo: function (index) {
        this.todos.splice(index, 1)
      },
      completeTodo: function (index) {
        this.todos[index].isCompleted = !this.todos[index].isCompleted
      }
    }
  }
</script>

<style scoped>
  #todoApp {
    width: 500px;
    margin: 0 auto;
    background-color: #eee;
  }
  .todo {
    border-bottom: 2px solid black;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
