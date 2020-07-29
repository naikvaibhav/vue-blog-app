<template>
  <div>
    <!-- <div id="single-blog" v-if="!deleted">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <router-link v-bind:to="'/edit/' + blog.blogId">
        <b-button class="mr-2" variant="info">Edit</b-button>
      </router-link>
      <router-link v-bind:to="'/delete/'+blog.blogId">
      <b-button variant="danger" v-on:click="deleteBlog">Delete</b-button>
      </router-link>
    </div>-->
    <b-button id="previousPage" @click="$router.go(-1)">&#8592; Back</b-button>
    <b-button-group id="actions">
      <router-link v-bind:to="'/edit/' + blog.blogId">
        <b-button variant="info">Edit</b-button>
      </router-link>
      <b-button variant="danger" v-on:click="deleteBlog">Delete</b-button>
    </b-button-group>
    <div v-if="deleted">
      <h3>{{ msg }}</h3>
      <router-link to="/view">Go here</router-link>
    </div>
    <div v-else>
      <h3>{{ msg }}</h3>
    </div>
    <!-- <router-link v-bind:to="'/edit/' + blog.blogId">
      <b-button class="mr-2" variant="info">Edit</b-button>
    </router-link>
    <router-link v-bind:to="'/delete/'+blog.blogId">
      <b-button variant="danger" v-on:click="deleteBlog">Delete</b-button>
    </router-link>-->
    <b-container style="margin-top: 5%;">
      <b-row>
        <b-col>
          <b-card bg-variant="light" :title="blog.title" class="text-center">
            <b-card-text>{{ blog.content }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "eachBlog",
  data() {
    return {
      blogId: this.$route.params.blogId,
      blog: {},
      deleted: false,
      msg: "",
      token: JSON.parse(localStorage.getItem("token")),
    };
  },
  created() {
    axios
      .get(
        "https://apivueblog.naikvaibhav.online/api/v1/blogs/view/" + this.blogId
      )
      .then((result) => {
        window.console.log(result.data.data);
        this.blog = result.data.data;
      })
      .catch((err) => window.console.log(err));
  },
  methods: {
    // deleteBlog() {
    //   axios
    //     .delete("http://localhost:3001/api/v1/blogs/delete/" + this.blogId, {
    //       headers: {
    //         authToken: this.token
    //       }
    //     })
    //     .then(result => {
    //       if (this.token) {
    //         window.console.log(result);
    //         this.deleted = true;
    //         this.msg = result.data.message;
    //       } else {
    //         this.deleted = false;
    //         this.msg = result.data.message;
    //       }
    //     })
    //     .catch(err => window.console.log(err));
    // }

    deleteBlog() {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
      }).then((result) => {
        if (result.value) {
          // window.console.log("Result of sweetalert button", result);
          axios
            .delete(
              "https://apivueblog.naikvaibhav.online/api/v1/blogs/delete/" +
                this.blogId,
              {
                headers: {
                  authToken: this.token,
                },
              }
            )
            .then((data) => {
              if (this.token) {
                window.console.log(data);
                this.deleted = true;
                this.msg = data.data.message;
                if (this.msg === "Blog delted successfully") {
                  this.$swal("Deleted", this.msg, "success");
                  this.$router.push("/view");
                } else {
                  this.$swal("Deleted", this.msg, "error");
                }
              } else {
                this.deleted = false;
                // window.console.log(data);
                // this.msg = data.data;
                this.$swal("Acess Denied", this.msg, "warning");
              }
            })
            .catch((err) => window.console.log(err));
          // this.$swal("Deleted", "You successfully deleted this", "success");
        } else {
          // window.console.log("Result of sweetalert button", result);
          this.$swal("Cancelled", "Your blog is still intact", "info");
        }
      });
    },
  },
};
</script>

<style scoped>
/* #single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgba(104, 100, 100, 0.548);
  text-align: left;
} */

#previousPage {
  float: left;
  margin-top: -4%;
  margin-left: 1%;
}
#actions {
  float: right;
  margin-top: -4%;
  margin-right: 1%;
}
</style>
