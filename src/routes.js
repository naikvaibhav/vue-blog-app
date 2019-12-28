import VueRouter from "vue-router";
import UserComponent from "./components/UserComponent.vue";
import UserprofileComponent from "./components/UserprofileComponent.vue";
import UserpostComponent from "./components/UserpostComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import ShowBlogComponent from "./components/ShowBlogComponent.vue";
import SigninComponent from "./components/SigninComponent.vue";
import SignupComponent from "./components/SignupComponent.vue";
import SingleblogComponent from "./components/SingleblogComponent.vue";
import EditblogComponent from "./components/EditblogComponent.vue";
import Redirect from "./components/Redirect.vue";
// import DeleteblogComponent from "./components/DeleteblogComponent.vue";
// import HomeComponent from "./components/HomeComponent.vue";
Vue.use(Router);
const routes = [
  // { path: "/", component: HomeComponent },
  { path: "/signup", component: SignupComponent },
  { path: "/signin", component: SigninComponent },
  {
    path: "/user/:id",
    component: UserComponent,
    children: [
      { path: "profile", component: UserprofileComponent },
      { path: "posts", component: UserpostComponent }
    ]
  },
  {
    path: "/create",
    component: BlogComponent,
    meta: {
      requiresAuth: true
    }
  },
  { path: "/view", component: ShowBlogComponent },
  { path: "/view/:blogId", component: SingleblogComponent },
  { path: "/edit/:blogId", component: EditblogComponent },
  { path: "/redirect", component: Redirect }
  // { path: "/delete/:blogId", component: DeleteblogComponent }
];
const router = new VueRouter({ mode: "history", routes });

router.beforeEach((to, from, next) => {
  var a_user = localStorage.getItem("user");
  var user = !a_user ? {} : JSON.parse(a_user);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    console.log("REQUIRES AUTH");
    if (!user) {
      // if not, redirect to login page.
      console.log("Not Logged in");
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }  else {
      console.log("No Access");
      next({
        path: "/noaccess",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    console.log("Does not require auth");
    next();
  }
});

export default router;
