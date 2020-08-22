<template>
  <v-container id="why" style="height:100%">
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" justify="center" align="center">
        <h2
          data-aos-easing="ease-in-quad"
          data-aos="fade"
          data-aos-delay="50"
          class="text-uppercase primary--text font-weight-bold display-1"
        >
          {{ $t("landing.p1") }}
        </h2>
        <h3 data-aos-easing="ease-in-quad" data-aos="fade" data-aos-delay="250">
          {{ $t("landing.p2") }}
        </h3>

        <p data-aos-easing="ease-in-quad" data-aos="fade" data-aos-delay="450">
          {{ $t("landing.p3") }}
        </p>
      </v-col>
      <v-col cols="12" md="4" justify="center" align="center">
        <v-img
          data-aos-easing="ease-in-quad"
          data-aos="fade"
          data-aos-delay="550"
          class="mx-auto"
          src="../assets/landing/70279a4b-md-27887.gif"
        ></v-img>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col
        data-aos-easing="ease-in-quad"
        data-aos="fade"
        data-aos-delay="50"
        cols="12"
        md="4"
        justify="center"
        align="center"
      >
        <v-img
          class="my-4"
          width="100"
          src="../assets/landing/bd66c083-vp-1_02i01u000000000000001.png"
        ></v-img>
        <h3 class="font-weight-bold accent--text">{{ $t("landing.p4") }}</h3>
        <p>
          {{ $t("landing.p5") }}
        </p>
      </v-col>
      <v-col
        data-aos-easing="ease-in-quad"
        data-aos="fade"
        data-aos-delay="250"
        cols="12"
        md="4"
        justify="center"
        align="center"
      >
        <v-img
          class="my-4"
          width="100"
          src="../assets/landing/b4c9420a-vp-2_02x02z000000000000001.png"
        ></v-img>
        <h3 class="font-weight-bold accent--text">{{ $t("landing.p6") }}</h3>
        <p>
          {{ $t("landing.p7") }}
        </p>
      </v-col>
      <v-col
        data-aos-easing="ease-in-quad"
        data-aos="fade"
        data-aos-delay="450"
        cols="12"
        md="4"
        justify="center"
        align="center"
      >
        <v-img
          class="my-4"
          width="100"
          src="../assets/landing/871daca4-vp-3_02h027000000000000001.png"
        ></v-img>
        <h3 class="font-weight-bold accent--text">{{ $t("landing.p8") }}</h3>
        <p>
          {{ $t("landing.p9") }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
