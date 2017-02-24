<template>
  <div id="app">
    <img src="./assets/logo.png" id="vueImage">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#vueImage {
  position: relative;
  left: 50%;
  margin-left: -100px;
}
</style>
