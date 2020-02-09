<template>
  <div>
    <p v-if="email">Logged in as {{email}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      email: JSON.parse(localStorage.getItem("email"))
    };
  }
};
</script>


<style scoped>
p {
  text-align: right;
  font-style: italic;
}
</style>