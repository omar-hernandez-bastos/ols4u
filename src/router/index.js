import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Programs from "../views/Programs.vue";
import FullTimePrograms from "../views/FullTimePrograms.vue";
import PartTimePrograms from "../views/PartTimePrograms.vue";
import LandingPage from "../views/LandingPage.vue";

import Rejected from "../views/Rejected.vue";
import Success from "../views/Success.vue";
import Visas from "../views/Visas.vue";
import Galleries from "../views/Galleries.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import store from "../store";
import { i18n } from "../plugins/i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/promo",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/programs",
    name: "Programs",

    component: Programs,
  },
  {
    path: "/full-time",
    name: "full-time",

    component: FullTimePrograms,
  },
  {
    path: "/part-time",
    name: "part-time",

    component: PartTimePrograms,
  },
  {
    path: "/contact",
    name: "contact",

    component: Contact,
  },
  {
    path: "/visas",
    name: "visas",

    component: Visas,
  },
  {
    path: "/galleries",
    name: "galleries",

    component: Galleries,
  },
  {
    path: "/about",
    name: "about",

    component: About,
  },
  {
    path: "/success",
    name: "success",

    component: Success,
  },
  {
    path: "/rejected",
    name: "rejected",

    component: Rejected,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  if (
    store.state.language.language &&
    store.state.language.language !== i18n.locale
  ) {
    i18n.locale = store.state.language.language;
    next();
  } else if (!store.state.language.language) {
    store.dispatch("language/setLanguage", navigator.languages).then(() => {
      i18n.locale = store.state.language.language;
      next();
    });
  } else {
    next();
  }
});

export default router;
