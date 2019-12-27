<template>
  <div>
    <form method="POST">
      <ul class="flex-outer">
        <li>
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Enter the email" v-model="user.email" />
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" v-model="user.password" />
        </li>
        <button type="submit" style="margin-right:16px;" v-on:click.prevent="signin">SignIn</button>
      </ul>
    </form>
    <h2 v-if="result">{{msg}}</h2>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "SigninComponent",
  data() {
    return {
      user: {
        email: " ",
        password: " "
      },
      result: false,
      msg: ""
    };
  },
  created() {},
  methods: {
    signin() {
      axios
        .post("http://localhost:3001/api/v1/users/signin", {
          email: this.user.email,
          password: this.user.password
        })
        .then(data => {
          window.console.log(data);
          this.msg = data.data.message;
          window.console.log("msg", this.msg);
          this.result = true;
        })
        .catch(err => window.console.log(err));
    }
  }
};
</script>

<style scoped>
body {
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  /* background: #3aafab; */
  color: #fff;
  padding: 50px 0;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.container * {
  box-sizing: border-box;
}

.flex-outer,
.flex-inner {
  list-style-type: none;
  padding: 0;
}

.flex-outer {
  max-width: 800px;
  margin: 0 auto;
}

.flex-outer li,
.flex-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-inner {
  padding: 0 8px;
  justify-content: space-between;
}

.flex-outer > li:not(:last-child) {
  margin-bottom: 20px;
}

.flex-outer li label,
.flex-outer li p {
  padding: 8px;
  font-weight: 300;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.flex-outer > li > label,
.flex-outer li p {
  flex: 1 0 120px;
  max-width: 220px;
}

.flex-outer > li > label + *,
.flex-inner {
  flex: 1 0 220px;
}

.flex-outer li p {
  margin: 0;
}

.flex-outer li input:not([type="checkbox"]),
.flex-outer li textarea {
  padding: 15px;
  border: none;
}

.flex-outer li button {
  margin-left: auto;
  padding: 8px 16px;
  border: none;
  background: #333;
  color: #f2f2f2;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
}

.flex-inner li {
  width: 100px;
}

button {
  margin-left: auto;
  padding: 8px 16px;
  border: none;
  background: #333;
  color: #f2f2f2;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
}
</style>