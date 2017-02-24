<template>
  <div>
    <h1 class="centerText">Todos App</h1>
    <div id="todoApp">
      <div class="addBox">
        <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo"/>
      </div>
      <div v-for="(todo, index) in todos" v-if="!todo.isComplete || showCompleted" v-on:click="editTodo(index)" class="todo">
        <input type="checkbox" name="isCompleted" v-on:change="completeTodo(index)" class="todoCheck" v-model="todo.showCompleted"/>
        <label v-bind:class="{completed: todo.isCompleted}" v-on:click="editTodo(index)" class="todoText">{{todo.text}}</label>
        <button v-on:click="deleteTodo(index)" class="del-todo btn btn-danger">X</button>      
      </div>
      <div>
        <input type="checkbox" name="showCompleted" v-model="showCompleted">
        <label for="showCompleted">Show Completed</label>
        <div>
           {{todos | numCompleted(todos)}}/{{todos.length}} Todos Completed
        </div>
      </div>
    </div>
    <br>
    <div class="instructionText">
      <p>To Add a todo: Type your todo in the "Add todo" box then hit enter to add it</p>
      <p>To Edit a todo: Double click to edit todo</p>
      <p>To Delete a todo: Hover over todo and hit the close button
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
     border: 2px solid #ddd;
     height: 65px;
  }
  .addBox input {
    width: 450px; 
    height: 40px;
    margin-top: 10px;
    font-size: 25px;
    padding: 0;
    margin: 10px 0 0 20px;
    border: none;
  }
  .addBox input:focus {
    outline: none;
  }
  .centerText {
    text-align: center;
  }
  #todoApp {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    /*border: 2px solid #ddd;*/
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
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
    position: relative;
    border: 2px solid #ddd;
    border-top: none;
    padding-top: 10px;
    height: 80px;
  }
  .todoCheck {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 10px;
    top: 17px;
    appearance: none;
    outline: none;
  }
  .todoCheck:after {
    content: url('../../static/imgs/blank-circle.svg');
  }
  .todoCheck:checked:after {
    content: url('../../static/imgs/checked-circle.svg');
  }
  .del-todo {
    display: none;
  }
  .todo:hover .del-todo{
    display: inline-block;
  }
  .completed {
    text-decoration: line-through;
  }
  .todoText {
    font-size: 16px;
    width: 400px;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
  }
  .editBox {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 0;
    font-size: 16px;
    width: 400px;
    margin-bottom: 0.5em;
  }
  .editBox:focus {
    outline: none;
  }
  .instructionText {
    font-size: 12px;
    width: 500px;
    text-align: center;
    margin: 0 auto;
  }
</style>
