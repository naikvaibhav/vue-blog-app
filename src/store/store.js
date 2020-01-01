import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

new Vuex.Store({
  //here state is equivalent to data() in components
  state: {
    // products: [] //make this array available to all the components
  },
  //here computed is equivalent to computed()
  getters: {
    // productsCount() {}
  },
  //equiv of methods
  actions: {
    // fetchProducts(){
    //     //make the call
    // }
  },
  //responsible for setting and updating the state
  mutations: {
    //if we want to set the products array we have to call the mutation
    // setProducts() {
    //   //update products
    // }
  }
});
