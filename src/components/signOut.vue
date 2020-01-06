<template>
  <div>signOut page</div>
</template>

<script>
export default {
  name: "signOut",
  created() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.$router.push({ path: "/" });
  }
};
</script>
