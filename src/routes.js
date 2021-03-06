import Vue from "vue";
import Router from "vue-router";
import user from "./components/user.vue";
import userProfile from "./components/userProfile.vue";
// import UserpostComponent from "./components/UserpostComponent.vue";
import postBlog from "./components/postBlog.vue";
import allBlogs from "./components/allBlogs.vue";
import signin from "./components/signin.vue";
import signup from "./components/signup.vue";
import signout from "./components/signOut.vue";
import eachBlog from "./components/eachBlog.vue";
import editBlog from "./components/editBlog.vue";
import Redirect from "./components/Redirect.vue";
import restricted from "./components/restricted.vue";
Vue.use(Router);

const routes = [
  { path: "/signup", component: signup },
  { path: "/", component: signin },
  { path: "/signout", component: signout },
  {
    path: "/user",
    component: user,
    children: [{ path: "profile", component: userProfile }]
  },
  {
    path: "/restricted",
    component: restricted,
    children: [
      { path: "/create", component: postBlog },
      { path: "/view", component: allBlogs },
      { path: "/view/:blogId", component: eachBlog },
      {
        path: "/edit/:blogId",
        component: editBlog,
        meta: { requiresAuth: true }
      },
      {
        path: "/user",
        component: user
        //   children: [{ path: "profile", component: userProfile }]
      }
    ]
  },
  // { path: "/create", component: postBlog },
  // { path: "/view", component: allBlogs },
  // { path: "/view/:blogId", component: eachBlog },
  // { path: "/edit/:blogId", component: editBlog },
  { path: "/redirect", component: Redirect }
  // {
  //   path: "/user/:id",
  //   component: user,
  //   children: [{ path: "profile", component: userProfile }]
  // }
];

const router = new Router({ mode: "history", routes });

// router.beforeEach((to, from, next) => {
//   var authenticatedUser = localStorage.getItem("token");
//   window.console.log(authenticatedUser);
//   var user = !authenticatedUser ? {} : JSON.parse(authenticatedUser);

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!user) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

// const router = new VueRouter({
//   mode: "history",
//   routes: [
//     // { path: "/", component: HomeComponent },
//     {
//       path: "/create",
//       component: BlogComponent,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     // { path: "/delete/:blogId", component: DeleteblogComponent }
//   ]
// });

// router.beforeEach((to, from, next) => {
//   var a_user = localStorage.getItem("user");
//   var user = !a_user ? {} : JSON.parse(a_user);

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // console.log("REQUIRES AUTH");
//     if (!user) {
//       // if not, redirect to login page.
//       // console.log("Not Logged in");
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       // console.log("No Access");
//       next({
//         path: "/noaccess",
//         query: { redirect: to.fullPath }
//       });
//     }
//   } else {
//     // console.log("Does not require auth");
//     next();
//   }
// });
export default router;
