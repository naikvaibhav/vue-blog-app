<template>
  <div id="show-blogs">
    <h1>View all the blogs</h1>
    <div v-bind:key="blog" v-for="blog in blogs" class="single-blog">
      <h2 style="border-bottom: 2px solid black">{{ blog.title }}</h2>
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowBlogComponent",
  data() {
    return {
      blogs: []
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
  background: rgba(104, 100, 100, 0.548);
  text-align: left;
}
</style>
