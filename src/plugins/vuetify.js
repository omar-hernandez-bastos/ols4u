import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#f5740a",
        secondary: "#6c6e6b ",
        accent: "#183290",
        error: "#ffffff",
        success: "#57AD68",
        warning: "#FFC72E",
        info: "#5576D6",
        background: "#131419",
      },
    },
    light: true,
  },
});
