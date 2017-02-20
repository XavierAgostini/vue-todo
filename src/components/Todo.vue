<template>
  <div>
    <h1>This is a test todo: {{message}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style scoped>
  div {
    border-bottom: 2px solid black;
  }
</style>
