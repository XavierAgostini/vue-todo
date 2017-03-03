<template>
	<div class="addBox">
    <input type="checkbox" v-model="$store.state.toggleAll" class="toggleBtn" v-on:change="toggleTodos" v-show="$store.state.todos.length>0"/>
    <input type="text" v-model="$store.state.newTodoText" v-on:keyup.enter="addTodo" placeholder="Add a todo ..." v-focus class="addInput"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods: mapActions(['addTodo', 'toggleTodos'])
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
    top: 15px;
    left: 25px;
    /*margin-left: 10px;*/
    appearance: none;
    transform: rotate(90deg);
    color: #ddd;
    outline: none;
  }
  .toggleBtn:before {
    content: ">";
    font-family: Roboto;
    font-size: 25px;
  }
  .toggleBtn:checked {
    color: black;
  }
</style>
