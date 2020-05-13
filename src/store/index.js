import Vue from "vue";
import Vuex from "vuex";

//Modules
import language from "./modules/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    language
  }
});

export default store;
