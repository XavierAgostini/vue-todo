<template>
  <div  v-show="!todo.isComplete || showCompleted" class="todo">
    <input type="checkbox" name="isCompleted" v-model="$store.state.todo.isComplete" v-on:change="completeTodo(index)" class="todoCheck" />
    <label v-on:click="editTodo(index)" class="todoText" v-bind:class="{todoCompleted : todo.isComplete}" v-if="editIndex != index">{{todo.text}}</label>
    <input type="text" v-model="todo.text" v-on:keyup.enter="updateTodo(index)" v-on:blur="updateTodo(index)" v-else class="editBox" v-focus>
    <button v-on:click="deleteTodo(index)" class="del-todo btn btn-outline-danger">X</button>     
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {

    },

    computed: mapGetters([

    ]),
    methods: mapActions([
      'addTodo',
      'completeTodo',
      'deleteTodo',
      'editTodo',
      'updateTodo'
    ])
  }
</script>

<style scoped>
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
  .todoText:hover {
    cursor: pointer;
  }
  .del-todo {
    display: none;
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
</style>
