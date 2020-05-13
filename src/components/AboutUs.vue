<template>
  <v-container
    fluid
    px-0
    ma-0
    id="join"
  >
    <v-container class="work-sans d-flex justify-center align-center fondo-howards">
      <v-row
        data-aos="fade-right"
        justify="center"
        align="center"
        style="height:80%"
      >
        <v-col
          justify="center"
          align="center"
          cols="5"
          class="hidden-sm-and-down"
        ></v-col>
        <v-col
          class="mt-2 work-sans d-flex justify-center align-center flex-column"
          cols="11"
          md="7"
          style="background:white;height:100%;border-radius:18px"
        >
          <v-container>
            <div
              style="color:#0b485b;"
              class="titulo-1 text-center texto font-weight-bold"
            >
              {{ $t("aboutUs.title1") }}
            </div>
            <div
              v-html="$t('aboutUs.title2')"
              class="titulo-2 font-weight-bold mt-4 primary--text text-center d-flex justify-center"
            ></div>
            <div
              v-html="$t('aboutUs.p2')"
              class="p-2 text-justify mt-4 titulo"
            ></div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <div
      data-aos="fade-down"
      class="my-12 d-flex justify-center"
    >
      <v-btn
        to="/about"
        x-large
        color="primary"
      >{{
        $t("discover.button")
      }}</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
#join {
  background-color: #183290;
  height: auto;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
}

.titulo-1 {
  text-align: center;
  font-size: 3.5rem !important;
}

.titulo-2 {
  text-align: center;
  font-size: 2.5rem !important;
}

.p-2 {
  text-align: center;
  font-size: 1rem !important;
}

.fondo-howards {
  width: 100%;
  height: 500px;
  background-image: url('../assets/about.us.jpg');
  background-size: 50vw;
  background-position: center left;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .fondo-howards {
    width: 100% !important;
    height: 500px !important;
    background-image: url('../assets/about.us.jpg') !important;
    background-size: 80vw !important;
    background-position: center left 20px !important;
  }
}

@media only screen and (max-width: 600px) {
  .titulo-1 {
    text-align: center;
    font-size: 2.5rem !important;
  }

  .titulo-2 {
    text-align: center;
    font-size: 2rem !important;
  }

  .p-2 {
    text-align: center;
    font-size: 1rem !important;
  }

  .fondo-howards {
    width: 100% !important;
    height: auto !important;
    background-image: url('../assets/image-asset (1).jpeg') !important;
    background-size: 0vw !important;
    background-position: top left 20px !important;
  }
}
</style>
