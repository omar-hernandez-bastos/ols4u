<template>
  <v-footer dark padless class="primary ">
    <v-row class="mx-auto" justify="center" align="center">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center align-center flex-column"
      >
        <v-btn text to="/">{{ $t("footer.home") }}</v-btn>
        <v-btn text to="/programs">{{ $t("footer.programs") }}</v-btn>
        <v-btn text to="/about">{{ $t("footer.about") }}</v-btn>

        <v-btn text to="/galleries">{{ $t("footer.galleries") }}</v-btn>

        <v-btn text to="/promo">{{ $t("footer.enrollment") }}</v-btn>
        <v-btn text to="/contact">{{ $t("footer.contact") }}</v-btn>
      </v-col>
      <v-col cols="12" md="4" justify="center" align="center">
        <span class="font-weight-bold">ORLANDO LANGUAGE SCHOOL</span>
        <br />
        <a
          target="_blank"
          style="color:white"
          href="https://g.page/OrlandoLanguageSchool?share"
          >7680 Universal Blvd #410, Orlando, FL 32819</a
        >
        <br />
        {{ $t("footer.callus") }}:
        <a style="color:white" href="tel:+14073700639">1 (407) 370-0639</a>
        <br />
        <a style="color:white" href="mailto:info@ols4u.com"
          >{{ $t("footer.emailus") }}: info@ols4u.com</a
        >
      </v-col>
      <v-col cols="12" md="4" justify="center" align="center">
        <v-img max-width="300" src="../../assets/CEA.png"></v-img>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
