<template>
  <div id="app">
    <blogHeader />
    <!-- <topnavbar /> -->
    <router-view />
  </div>
</template>

<script>
// import topnavbar from "./components/Topnavbar";
import blogHeader from "./components/blogHeader.vue";

export default {
  name: "app",
  components: {
    blogHeader
    // topnavbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Montserrat", sans-serif;
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
