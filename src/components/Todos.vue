<template>
  <div>
    <h1>Todos App</h1>
    <div id="todoApp">
      <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo" class="addBox" />
      <button v-on:click="showFunc" v-if="showAll === true">Show Completed</button>
      <button v-on:click="showFunc" v-else>Show All</button>
      <button v-on:click="clearTodos">Clear All</button>
      <div v-show="todos.length == 0">
        No Items To Show
      </div>
      <div v-for="(todo, index) in todos" class="todo" v-on:click="editTodo(index)">
        <div>
          <input type="checkbox" name="isCompleted" v-on:change="completeTodo(index)" class="todoCheck"/>
          <label v-bind:class="{completed: todo.isCompleted}">{{todo.text}}</label>
        </div>
        <div>
            
        </div>
        <div class="todoInfo">
          <span>{{todo.dateCreated}}</span>
          <button v-on:click="deleteTodo(index)">X</button>      
        </div>
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
        todos: [],
        showAll: true
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
      },
      clearTodos: function () {
        this.todos = []
      },
      showFunc: function () {
        this.showAll = !this.showAll
      },
      editTodo: function (i) {
        this.todos[i].text += ' test'
      }
    }
  }
</script>

<style scoped>
  .addBox {
    width: 496px; 
    height: 40px;
    font-size: 25px;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  #todoApp {
    width: 500px;
    margin: 0 auto;
    background-color: #eee;
  }
  .todo {
    border-bottom: 1px solid black;
    height: 60px;
  }
  .todoCheck {
    float: left;
    margin-left: 10px;
  }
  .todoInfo {
    display: none;
  }
  .todo:hover .todoInfo{
    display: inline-block;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
