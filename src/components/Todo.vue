<template>
  <div v-show="!todo.isComplete || $store.state.showCompleted" class="todo">
    <input type="checkbox" name="isCompleted" v-model="todo.isComplete" v-on:change="completeTodo(todo)" class="todoCheck" />
    <label v-if="!editable" v-on:dblclick="toggleEdit(true)" class="todoText" v-bind:class="{todoCompleted : todo.isComplete}">{{todo.text}}</label>
    <input v-else type="text" v-model="todo.text" v-on:keyup.enter="toggleEdit(false)" v-on:blur="toggleEdit(false)" v-focus class="editBox">
    <button v-on:click="deleteTodo(todo)" class="del-todo btn btn-outline-danger">X</button>     
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        editable: false
      }
    },
    props: ['todo'],
    methods: {
      ...mapActions([
        'completeTodo',
        'deleteTodo',
        'editTodo'
      ]),
      toggleEdit: function (state) {
        this.editable = state
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
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
  .todoText {
    font-size: 16px;
    width: 400px;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
  }
  .todoText:hover {
    cursor: pointer;
  }
  .del-todo {
    display: none;
  }
  .todo:hover .del-todo{
    display: inline-block;
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
