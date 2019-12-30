import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import routes from "./routes";

// new VueRouter({
//   routes: [{ path: "/", component: Home }]
// });

// // Redirect to the home route if any routes are unmatched
// router.redirect({
//   "*": "/home"
// });

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
// Vue.use(VueRouter);
Vue.use(BootstrapVue);
const router = routes;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
