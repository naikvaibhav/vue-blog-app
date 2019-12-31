<template>
  <div id="restricted">
    <b-nav style="background:#eee">
      <b-nav-item>
        <router-link to="/create">Create</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/view">View</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/">Signin</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/signup">Signup</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/signout">Signout</router-link>
      </b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "restricted"
};
</script>
