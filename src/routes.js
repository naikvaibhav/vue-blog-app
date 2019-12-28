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
export default routes;
