<template>
	<div v-show="$store.state.todos.length > 0" class="todoInfo">
  	<input type="checkbox" name="showCompleted" v-model="$store.state.showCompleted">
    <label for="showCompleted">Show Completed</label>
    <span>
       {{$store.state.todos | numCompleted($store.state.todos)}}/{{$store.state.todos.length}} Todos Completed
    </span>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters([]),
    methods: mapActions([]),
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
	 input[name="showCompleted"] {
    float: left;
    margin-left: 10px;
  }
  label[for="showCompleted"] {
    float: left;
    margin-left: 10px;
    margin-right: 170px;
  }
  
  input[name="showCompleted"] {
    margin-top: 5px;
    margin-right: 5px;
  }
</style>
