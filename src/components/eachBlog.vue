<template>
  <div>
    <div id="single-blog" v-if="!deleted">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <router-link v-bind:to="'/edit/' + blog.blogId">
        <b-button class="mr-2" variant="info">Edit</b-button>
      </router-link>
      <!-- <router-link v-bind:to="'/delete/'+blog.blogId"> -->
      <b-button variant="danger" v-on:click="deleteBlog">Delete</b-button>
      <!-- </router-link> -->
    </div>
    <div v-if="deleted">
      <h3>Blog is deleted.....</h3>
    </div>
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
      deleted: false
    };
  },
  created() {
    axios
      .get("http://localhost:3001/api/v1/blogs/view/" + this.blogId)
      .then(result => {
        window.console.log(result.data.data);
        this.blog = result.data.data;
      })
      .catch(err => window.console.log(err));
  },
  methods: {
    deleteBlog() {
      axios
        .delete("http://localhost:3001/api/v1/blogs/delete/" + this.blogId)
        .then(result => {
          window.console.log(result);
          this.deleted = true;
        })
        .catch(err => window.console.log(err));
    }
  }
};
</script>

<style scoped>
#single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgba(104, 100, 100, 0.548);
  text-align: left;
}
</style>
