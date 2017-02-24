<template>
  <div>
    <h1 class="centerText">Todos App</h1>
    <div id="todoApp">
      <div class="addBox">
        <input type="checkbox" v-model="toggleAll" class="toggleBtn" v-on:change="toggleTodos" v-show="todos.length>0"/>
        <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo ..." v-focus class="addInput"/>
      </div>
      <div v-for="(todo, index) in todos" v-if="!todo.isComplete || showCompleted" class="todo">
        <input type="checkbox" name="isCompleted" v-model="todo.isComplete" v-on:change="completeTodo(index)" class="todoCheck" />
        <label v-on:click="editTodo(index)" class="todoText" v-bind:class="{todoCompleted : todo.isComplete}" v-if="editIndex != index">{{todo.text}}</label>
        <input type="text" v-model="todo.text" v-on:keyup.enter="updateTodo(index)" v-on:blur="updateTodo(index)" v-else class="editBox" v-focus>
        <button v-on:click="deleteTodo(index)" class="del-todo btn btn-danger">X</button>      
      </div>
      <div v-show="todos.length > 0" class="todoInfo">
        <input type="checkbox" name="showCompleted" v-model="showCompleted">
        <label for="showCompleted">Show Completed</label>
        <span>
           {{todos | numCompleted(todos)}}/{{todos.length}} Todos Completed
        </span>
      </div>
    </div>
    <br>
    <div class="instructionText">
    <i class="glyphicon glyphicon-menu-down"></i>
      <p>To Add a todo: Type your todo in the "Add todo" box then hit enter to add it</p>
      <p>To Edit a todo: Double click to edit todo</p>
      <p>To Delete a todo: Hover over todo and hit the close button
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        toggleAll: false,
        newTodoText: '',
        todos: [],
        showCompleted: true,
        editIndex: -1
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          'text': this.newTodoText,
          'isComplete': false
        })
        this.newTodoText = ''
      },
      deleteTodo: function (i) {
        this.todos.splice(i, 1)
      },
      completeTodo: function (i) {
        this.todos[i].isComplete = this.todos[i].isComplete || false
        this.toggleAll = false
      },
      editTodo: function (i) {
        this.editIndex = i
      },
      updateTodo: function (i) {
        this.editIndex = -1
      },
      toggleTodos: function () {
        console.log('toggle')
        for (var i = 0; i < this.todos.length; i++) {
          this.todos[i].isComplete = this.toggleAll
        }
      }
    },
    filters: {
      numCompleted: function (todos) {
        var count = 0
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].isComplete) count++
        }
        return count
      }
    }
  }
</script>

<style scoped>
  .addBox {
    position: relative;
    border: 2px solid #ddd;
    height: 65px;
  }
  .addBox .addInput {
    width: 440px; 
    height: 40px;
    margin-top: 10px;
    font-size: 25px;
    padding: 0;
    margin: 10px 0 0 50px;
    border: none;
  }
  .addBox .addInput:focus {
    outline: none;
  }
  .toggleBtn {
    position: absolute;
    top: 12px;
    left: 25px;
    /*margin-left: 10px;*/
    appearance: none;
    transform: rotate(90deg);
    color: #ddd;
    outline: none;
  }
  .toggleBtn:before {
    content: ">";
    font-size: 25px;
  }
  .toggleBtn:checked {
    color: black;
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
  .todoCompleted {
    text-decoration: line-through;
    color: #ddd;
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
  .todoText:hover {
    cursor: pointer;
  }
  .editBox {
    border:none;
    background-image:none;
    background-color:transparent;
    box-shadow: none;
    font-size: 16px;
    width: 400px;
    margin-bottom: 0.5em;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    outline: none;
  }
  .todoInfo {
    position: relative;
    border: 2px solid #ddd;
    border-top: none;
    text-align: right;
  }
  .todoInfo span {
    padding-right: 10px;
  }
  input[name="showCompleted"] {
    margin-top: 5px;
    margin-right: 5px;
  }
  .instructionText {
    font-size: 12px;
    width: 500px;
    text-align: center;
    margin: 0 auto;
  }
</style>
