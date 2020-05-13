<template>
  <div>
    <landing-home></landing-home>
    <landing-why></landing-why>
    <landing-contact></landing-contact>
    <landing-price></landing-price>
  </div>
</template>

<script>
import LandingHome from "../components/LandingHome";
import LandingWhy from "../components/LandingWhy";
import LandingPrice from "../components/LandingPrice";
import LandingContact from "../components/Contact";
export default {
  components: {
    LandingHome,
    LandingWhy,
    LandingPrice,
    LandingContact
  }
};
</script>

<style></style>
