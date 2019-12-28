<template>
  <div id="app">
    <header-component />
    <b-nav style="background:#eee">
      <!-- <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>-->
      <b-nav-item>
        <router-link to="/create">Create</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/view">View</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/signin">Signin</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/signup">Signup</router-link>
      </b-nav-item>
      <!-- <b-nav-item>
        <router-link to="/user/:id">User</router-link>
      </b-nav-item>-->
    </b-nav>
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
