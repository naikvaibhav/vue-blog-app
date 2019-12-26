import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

new VueRouter({
  routes: [{ path: "/", component: Home }]
});

// // Redirect to the home route if any routes are unmatched
// router.redirect({
//   "*": "/home"
// });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
