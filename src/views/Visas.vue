<template>
  <v-container
    fluid
    mx-0
    pa-0
    style=" margin-top:64px; "
  >
    <navigation-bar></navigation-bar>
    <v-container>
      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
      >
        {{ $t("visas.mainTitle") }}
      </h1>
      <p
        data-aos="fade-down"
        class="work-sans text-justify"
        v-html="$t('visas.stepByStep')"
      ></p>
      <h1
        data-aos="fade-right"
        class="work-sans font-weight-bold text-center primary--text"
        v-html="$t('visas.contact')"
      ></h1>

      <v-row
        align="center"
        justify="center"
      >
        <v-col
          data-aos="fade-left"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/visas/1.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-down"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/visas/2.jpg"
          ></v-img>
        </v-col>

        <v-col
          data-aos="fade-up"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/visas/3.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-right"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/visas/4.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </v-container>
</template>

<script>
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
export default {
  components: {
    NavigationBar,
    Footer
  }
};
</script>

<style>
ol {
  list-style: none;
  counter-reset: li;
}
ol > li::before {
  content: counter(li);
  color: #183290;
  display: inline-block;
  width: 1em;
  font-weight: bold;
  margin-left: -1em;
}
ol > li {
  counter-increment: li;
}
</style>
