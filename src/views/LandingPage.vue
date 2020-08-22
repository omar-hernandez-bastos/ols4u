<template>
  <div>
    <navigation-bar></navigation-bar>

    <landing-home></landing-home>
    <landing-why></landing-why>
    <landing-price></landing-price>
  </div>
</template>

<script>
import NavigationBar from "../components/layout/LandingHeader";
import LandingHome from "../components/LandingHome";
import LandingWhy from "../components/LandingWhy";
import LandingPrice from "../components/LandingPrice";
export default {
  components: {
    NavigationBar,
    LandingHome,
    LandingWhy,
    LandingPrice
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home", text: false },
      { title: "English", icon: "mdi-account", text: true, lang: "EN" },
      {
        title: "Spanish",
        icon: "mdi-account-group-outline",
        text: true,
        lang: "ES"
      },
      {
        title: "Portuguese",
        icon: "mdi-account-group-outline",
        text: true,
        lang: "PT"
      }
    ],
    mini: true
  })
};
</script>

<style></style>
