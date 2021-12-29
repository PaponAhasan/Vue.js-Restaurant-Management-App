<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}

.logo {
    width: 125px;
    margin: 30px;
}

.login input, .register input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.login button, .register button, .add button {
    width: 320px;
    height: 40px;
    border: 1px solid #008CBA;
    background: #008CBA;
    color: white;
    cursor: pointer;
}

</style>
