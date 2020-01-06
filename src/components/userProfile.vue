<template>
  <div>
    <!-- <b-container class="mt-5">
      <b-card bg-variant="light" title="User's Profile">
        <b-card-text>{{email}}</b-card-text>
      </b-card>
    </b-container>-->
    <p v-if="email">Logged in as {{email}}</p>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  data() {
    return {
      email: JSON.parse(localStorage.getItem("email"))
    };
  },
  created() {
    this.$bvToast.toast("Signin success", {
      title: `Signin`,
      variant: "success",

      solid: true
    });
  }
};
</script>

<style scoped>
p {
  text-align: right;
  font-style: italic;
}
</style>