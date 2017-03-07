<template>
  <div>
    <h1 id="appTitle" class="centerText">Todos App</h1>
    <div id="todoApp">
      <add-box></add-box>
      <todo v-for="(todo, index) in $store.state.todos" :key="index" :todo="todo" v-show="!todo.isComplete || $store.state.showCompleted"></todo>
      <todo-info></todo-info>
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
  import { mapGetters, mapActions } from 'vuex'
  import AddBox from './AddBox'
  import Todo from './Todo'
  import TodoInfo from './TodoInfo'
  export default {
    components: {
      'add-box': AddBox,
      'todo': Todo,
      'todo-info': TodoInfo
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    computed: mapGetters([]),
    methods: mapActions([])
  }
</script>

<style scoped>
  #todoApp {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    /*border: 2px solid #ddd;*/
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  }
  .centerText {
    text-align: center;
  }
  .instructionText {
    font-size: 12px;
    width: 500px;
    text-align: center;
    margin: 0 auto;
  }
</style>
