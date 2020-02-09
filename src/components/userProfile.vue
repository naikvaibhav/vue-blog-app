<template>
  <div>
    <b-container class="mt-5">
      <b-card bg-variant="light" title="User's Profile">
        <!-- <b-card-text>Logged in as {{email}}</b-card-text> -->
        <router-link v-bind:to="'/view/'">
          <b-button class="mr-3" variant="outline-primary">View Blogs</b-button>
        </router-link>
        <router-link v-bind:to="'/create/'">
          <b-button variant="outline-primary">Create Blogs</b-button>
        </router-link>
      </b-card>
    </b-container>
    <!-- <p v-if="email">Logged in as {{email}}</p> -->
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
    // this.$bvToast.toast("Signin success", {
    //   title: `Signin`,
    //   variant: "success",
    //   solid: true
    // });
  }
};
</script>

<style scoped>
/*p{
  text-align: right;
  font-style: italic;
}*/
</style>