<template>
  <div>
    <h1>Todos App</h1>
    <div id="todoApp">
      <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo" class="addBox"/>
      <input type="checkbox" name="showCompleted" v-on:change="toggleCompleted">
      <label for="showCompleted">Show Completed</label>
      <button v-on:click="clearTodos">Clear All</button>
      <div v-show="todos.length == 0">
        No Items To Show
      </div>
      <div v-for="(todo, index) in todos" v-if="!todo.isComplete || !showCompleted" v-on:click="editTodo(index)" class="todo">
        <div>
          <input type="checkbox" name="isCompleted" v-on:change="completeTodo(index)" class="todoCheck" v-model="todo.showCompleted"/>
          <p v-bind:class="{completed: todo.isCompleted}" v-on:click="editTodo(index)" class="todoText" v-if="editIndex != index">{{todo.text}}</p>
          <input type="text" v-on:keyup.enter="updateTodo(index)" v-model="todo.text" class="editBox active" v-else/>
        </div>
        <div>
            
        </div>
        <div class="todoInfo">
          <span v-if="todo.lastModified === 'Never'">Created: {{todo.dateCreated | formatDate}}</span>
          <span v-else>Modified: {{todo.lastModified | formatDate}}</span>
          <button v-on:click="deleteTodo(index)">X</button>      
        </div>
      </div>
      <div>
        {{todos | numCompleted(todos)}} items completed | {{todos.length}} items left
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        newTodoText: '',
        todos: [],
        showCompleted: true,
        editIndex: -1
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          'text': this.newTodoText,
          'isComplete': false,
          'dateCreated': moment(),
          'lastModified': 'Never'
        })
        this.newTodoText = ''
      },
      deleteTodo: function (index) {
        this.todos.splice(index, 1)
      },
      completeTodo: function (index) {
        this.todos[index].isComplete = !this.todos[index].isComplete
      },
      clearTodos: function () {
        this.todos = []
      },
      toggleCompleted: function () {
        this.showCompleted = !this.showCompleted
      },
      editTodo: function (i) {
        this.editIndex = i
      },
      updateTodo: function (i) {
        this.editIndex = -1
        this.todos[i].lastModified = moment()
      }
    },
    filters: {
      numCompleted: function (todos) {
        var count = 0
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].isComplete) count++
        }
        return count
      },
      formatDate: function (val) {
        if (val) {
          return moment(String(val)).format('MMMM Do YYYY, h:mm a')
        }
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
    background-color: #fff;
  }
  input[name="showCompleted"] {
    float: left;
    margin-left: 10px;
  }
  label[for="showCompleted"] {
    float: left;
    margin-left: 10px;
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
  .todoText:hover {
    cursor: pointer;
  }
  .editBox {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 0;
    font-size: 20px;
    text-align: center;
  }
  .editBox:focus {
    outline: none;
  }
</style>
