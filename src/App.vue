<template>
  <div id="app">
    <header-component />
    <blog-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import BlogComponent from "./components/BlogComponent";

export default {
  name: "app",
  components: {
    HeaderComponent,
    BlogComponent
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
