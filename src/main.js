import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTheMask from "vue-the-mask";
import Vuesax from "vuesax";
import AOS from "aos";
import "aos/dist/aos.css";
import { i18n } from "./plugins/i18n.js";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});
Vue.use(VueTheMask);
Vue.config.productionTip = false;
import Lingallery from "lingallery";
Vue.component("lingallery", Lingallery);

new Vue({
  created() {
    AOS.init();
  },
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
