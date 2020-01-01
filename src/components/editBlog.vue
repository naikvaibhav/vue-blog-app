<template>
  <div id="add-blog">
    <form v-if="!submitted">
      <h2>Add a new blog post</h2>
      <label>Blog Title:</label>
      <input type="text" required v-model.lazy="blog.title" />
      <label>Blog Description:</label>
      <input type="text" required v-model.lazy="blog.description" />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <label>Author name:</label>
      <input type="text" required v-model.lazy="blog.author" />
      <label style="display:inline-block">Category of blog:</label>
      <!-- <select v-model="blog.category">
        <option v-bind:key="category" v-for="category in categories">
          {{
          category
          }}
        </option>
      </select>-->
      <br />
      <b-button class="mt-2" v-on:click.prevent="post" variant="primary">Add blog</b-button>
    </form>
    <div v-if="submitted">
      <h3>Blog is edited.....</h3>
    </div>
    <div v-else>
      <h3>{{ msg }}</h3>
    </div>

    <div id="preview">
      <h3>Preview Blogs</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Description: {{ blog.description }}</p>
      <p>Blog Content:{{ blog.content }}</p>
      <p>Blog Author:{{ blog.author }}</p>
      <p>Category of blog: {{ blog.category }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editBlog",
  data() {
    return {
      blog: {},
      submitted: false,
      msg: "",
      token: JSON.parse(localStorage.getItem("token"))
    };
  },
  methods: {
    post() {
      axios
        .put(
          "http://localhost:3001/api/v1/blogs/edit/" + this.blog.blogId,
          {
            title: this.blog.title,
            description: this.blog.description,
            author: this.blog.author,
            content: this.blog.content,
            category: this.blog.category
          },
          {
            headers: {
              authToken: this.token
            }
          }
        )
        .then(data => {
          if (this.token) {
            window.console.log(data);
            this.submitted = true;
            this.msg = "Blog edited";
          } else {
            this.submitted = false;
            this.msg = "Please signin to edit a blog...";
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  created() {
    axios
      .get(
        "http://localhost:3001/api/v1/blogs/view/" + this.$route.params.blogId
      )
      .then(data => {
        window.console.log(data.data.data);
        this.blog = data.data.data;
        window.console.log(this.blog);
      })
      .catch(err => window.console.log(err));
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  /* margin: 30px 0px 0px 0px 0px; */
  margin-top: 7%;
}
#preview p {
  text-align: left;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-right: 10px;
}
</style>
