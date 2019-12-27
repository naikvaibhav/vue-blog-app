import BlogComponent from "./components/BlogComponent.vue";
import ShowBlogComponent from "./components/ShowBlogComponent.vue";
import SigninComponent from "./components/SigninComponent.vue";
import SignupComponent from "./components/SignupComponent.vue";
// import HomeComponent from "./components/HomeComponent.vue";

const routes = [
  //   { path: "/", component: HomeComponent },
  { path: "/create", component: BlogComponent },
  { path: "/view", component: ShowBlogComponent },
  { path: "/signin", component: SigninComponent },
  { path: "/signup", component: SignupComponent }
];
export default routes;
