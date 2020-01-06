import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import routes from "./routes";
import store from "./store/store";

import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

// Redirect to the home route if any routes are unmatched
// router.redirect({
//   "*": "/home"
// });

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

Vue.use(VueSweetalert2);
const router = routes;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
