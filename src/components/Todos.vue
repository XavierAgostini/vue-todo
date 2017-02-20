<template>
  <div>
    <h1>Todos App</h1>
    <div id="todoApp">
      <add-todo></add-todo>
      <todo v-for="todo in todos" v-bind:message="todo"></todo>
    </div>
  </div>
</template>

<script>
  import Todo from 'components/Todo'
  import AddTodo from 'components/AddTodo'
  export default {
    data () {
      return {
        todos: ['test1', 'test2', 'test3']
      }
    },
    components: {
      Todo,
      AddTodo
    }
  }
</script>

<style scoped>
  #todoApp {
    width: 500px;
    margin: 0 auto;
    background-color: #eee;
  }
</style>
