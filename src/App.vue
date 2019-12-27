<template>
  <div id="app">
    <header-component />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/view">View</router-link>
      <router-link to="/signin">Signin</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";

export default {
  name: "app",
  components: {
    HeaderComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px;*/
}

* {
  box-sizing: border-box;
}
</style>
