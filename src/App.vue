<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <header-component />
    <home-component />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomeComponent from "./components/Home.vue";
import HeaderComponent from "./components/HeaderComponent";

export default {
  name: "app",
  components: {
    HomeComponent,
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
  /* margin-top: 60px; */
}

* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
</style>
