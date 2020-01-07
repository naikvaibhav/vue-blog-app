<template>
  <div>
    <userProfile />
    <h1>View all the blogs</h1>
    <!-- <input type="text" v-model="search" />
    <button type="submit" v-on:click.prevent="searchBlogs">Search</button>-->
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="4" lg="3" v-bind:key="blog.blogId" v-for="blog in blogs">
          <b-card-group deck>
            <b-card
              :img-src="blog.blogImage"
              bg-variant="light"
              :header="blog.title"
              class="mb-3 text-center"
            >
              <b-card-text>Author of the blog: {{blog.author}}</b-card-text>
              <b-card-text>{{ blog.description }}</b-card-text>
              <router-link v-bind:to="'/view/'+blog.blogId">
                <b-button variant="outline-primary">View in detail</b-button>
              </router-link>
              <template v-slot:footer>
                <small class="text-muted">{{blog.views}} views</small>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>

    <!-- <div v-bind:key="blog.blogId" v-for="blog in blogs" class="single-blog">
      <router-link v-bind:to="'/view/'+blog.blogId">
        <h2 style="border-bottom: 2px solid black">{{ blog.title }}</h2>
      </router-link>
      <article>{{ blog.description }}</article>
      <span class="text-muted">{{blog.views}} views</span>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import userProfile from "./userProfile";
export default {
  name: "allBlogs",
  components: {
    userProfile
  },
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
/* #show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #e0c8d0;
  text-align: left;
} */
</style>
