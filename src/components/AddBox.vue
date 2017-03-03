<template>
	<div class="addBox">
    <input type="checkbox" v-model="$store.state.toggleAll" class="toggleBtn" v-on:change="toggleTodos" v-show="$store.state.todos.length>0"/>
    <input type="text" v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo ..." v-focus class="addInput"/>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
	  computed: mapGetters([]),
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
</style>
