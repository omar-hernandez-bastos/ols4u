<template>
  <v-container fluid px-0 ma-0 id="join">
    <v-container
      class="work-sans d-flex justify-center align-center fondo-howards"
    >
      <v-row justify="center" align="center" style="height:80%">
        <v-col
          justify="center"
          align="center"
          cols="5"
          class="hidden-sm-and-down"
        ></v-col>
        <v-col
          class="mt-lg-2 mt-md-2 mt-sm-12 work-sans d-flex justify-center align-center flex-column"
          cols="11"
          md="7"
          style="background:white;height:100%;border-radius:18px"
        >
          <v-container>
            <div
              data-aos="fade-left"
              style="color:#0b485b;"
              class="text-center texto font-weight-bold"
            >
              {{ $t("join.title") }}
            </div>
            <div
              data-aos="fade-right"
              v-html="$t('join.parrafo')"
              class="mt-4 text-center titulo"
            ></div>
            <div class="d-flex justify-center align-center mt-4">
              <v-btn
                data-aos="fade-left"
                @click="$router.push({ path: '/full-time' })"
                color="primary"
                class="mx-auto"
              >
                {{ $t("join.parrafo2") }}
              </v-btn>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
#join {
  background-color: #F5740A;
  height: auto;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
}

.texto {
  font-size: 2.5rem !important;
}

.titulo {
  text-align: center;
  font-size: 1rem !important;
}

.fondo-howards {
  width: 100%;
  height: 500px;
  background-image: url('../assets/image-asset (1).jpeg');
  background-size: 50vw;
  background-position: center left;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .fondo-howards {
    width: 100% !important;
    height: 500px !important;
    background-image: url('../assets/image-asset (1).jpeg') !important;
    background-size: 80vw !important;
    background-position: center left 20px !important;
  }
}

@media only screen and (max-width: 600px) {
  .texto {
    font-size: 1.5rem !important;
  }

  .titulo {
    font-size: 1rem !important;
  }

  .fondo-howards {
    width: 100% !important;
    height: auto !important;
    background-image: url('../assets/image-asset (1).jpeg') !important;
    background-size: 80vw !important;
    background-position: top 20px left 20px !important;
  }
}
</style>
