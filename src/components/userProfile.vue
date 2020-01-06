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
  }
};
</script>

<style scoped>
p {
  text-align: right;
  font-style: italic;
}
</style>