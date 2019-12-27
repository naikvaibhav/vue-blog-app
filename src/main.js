import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import axios from "axios";
// import VueAxios from "vue-axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(VueAxios, axios);
import routes from "./routes";

// new VueRouter({
//   routes: [{ path: "/", component: Home }]
// });

// // Redirect to the home route if any routes are unmatched
// router.redirect({
//   "*": "/home"
// });

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({ mode: "history", routes });
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
