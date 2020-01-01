import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import routes from "./routes";
import store from "./store/store";

// Redirect to the home route if any routes are unmatched
// router.redirect({
//   "*": "/home"
// });

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
const router = routes;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
