<template>
  <v-img
    src="../assets/OLS-Day1-263.jpg"
    style="height:100vh;margin-top:20px"
    gradient="to top right, rgba(245,116,10,.2), rgba(245,116,10,.2)"
    class="work-sans d-flex justify-center align-center"
  >
    <v-row justify="center" align="center">
      <v-col
        cols="6"
        class="hidden-sm-and-down"
        justify="center"
        align="center"
      ></v-col>
      <v-col cols="12" md="6" justify="center" align="center">
        <v-container
          style="height:100%"
          class="d-flex flex-column align-center justify-center"
        >
          <div
            data-aos="fade-right"
            class="titulo work font-weight-bold white--text"
          >
            {{ $t("header.mainMessage") }}
          </div>
          <v-btn
            to="/programs"
            class="my-6 font-weight-bold hidden-md-and-up"
            color="primary"
            >{{ $t("header.button") }}</v-btn
          >
          <v-btn
            to="/programs"
            data-aos="fade-left"
            class="hidden-sm-and-down my-6 font-weight-bold"
            x-large
            color="primary"
            >{{ $t("header.button") }}</v-btn
          >
        </v-container>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.titulo {
  font-size: 6rem !important;
  text-transform: capitalize;
  line-height: 5.5rem;
}

@media only screen and (max-width: 600px) {
  .titulo {
    font-size: 3.5rem !important;
    text-transform: capitalize;
    line-height: 3.5rem;
  }
}
</style>
