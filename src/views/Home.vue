<template>
  <div class="home">
    <navigation-bar></navigation-bar>

    <Header></Header>
    <Join></Join>
    <Discovery></Discovery>
    <AboutUs></AboutUs>
    <FollowUs></FollowUs>
    <Footer></Footer>
  </div>
</template>

<script>
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Header from "../components/Header";
import Join from "../components/Join";
import Discovery from "../components/Discovery";
import AboutUs from "../components/AboutUs";
import FollowUs from "../components/FollowUs";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    NavigationBar,
    Footer,
    Header,
    Join,
    Discovery,
    AboutUs,
    FollowUs
  },
  computed: {
    displayLocale () {
      let other = "es";
      if (this.$i18n.locale === "es") {
        other = "en";
      }
      return other;
    }
  },
  methods: {}
};
</script>
