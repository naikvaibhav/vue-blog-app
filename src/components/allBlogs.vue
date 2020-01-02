<template>
  <div id="show-blogs">
    <h1>View all the blogs</h1>
    <input type="text" v-model="search" />
    <button type="submit" v-on:click.prevent="searchBlogs">Search</button>
    <div v-bind:key="blog.blogId" v-for="blog in blogs" class="single-blog">
      <router-link v-bind:to="'/view/'+blog.blogId">
        <h2 style="border-bottom: 2px solid black">{{ blog.title }}</h2>
      </router-link>
      <article>{{ blog.description }}</article>
      <span class="text-muted">{{blog.views}} views</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  //life cycle hook is used to fire when the component is first component to get the data
  created() {
    axios
      .get("http://localhost:3001/api/v1/blogs/view/all")
      .then(res => (this.blogs = res.data.data.blogs))
      .catch(err => window.console.log(err));
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #e0c8d0;
  text-align: left;
}
</style>
