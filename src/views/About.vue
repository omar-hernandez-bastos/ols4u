<template>
  <v-container
    style=" margin-top:64px; "
    fluid=""
    class="accent"
    mx-0
    pa-0
  >
    <navigation-bar></navigation-bar>
    <v-container>
      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold white--text text-start"
      >
        {{ $t("about.mainTitle") }}
      </h1>
      <p
        data-aos="fade-down"
        class="white--text work-sans text-justify"
        v-html="$t('about.ourMission')"
      ></p>

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
                {{ $t("about.title1") }}
              </div>

              <div
                v-html="$t('about.p1')"
                class="p-2 text-justify mt-4 titulo"
              ></div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <p
        data-aos="fade-down"
        class="white--text work-sans text-justify"
        v-html="$t('about.p2')"
      ></p>
      <p
        data-aos="fade-down"
        class="white--text work-sans text-justify"
        v-html="$t('about.firma')"
      ></p>
      <v-container class="work-sans d-flex justify-center align-center fondo-dos">
        <v-row
          data-aos="fade-right"
          justify="center"
          align="center"
          style="height:80%"
        >
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
                {{ $t("about.title2") }}
              </div>

              <div
                v-html="$t('about.p3')"
                class="p-2 text-justify mt-4 titulo"
              ></div>
            </v-container>
          </v-col>
          <v-col
            justify="center"
            align="center"
            cols="5"
            class="hidden-sm-and-down"
          ></v-col>
        </v-row>
      </v-container>
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
<style lang="stylus" scoped>
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
  background-image: url('../assets/ols-about.jpg');
  background-size: 50vw;
  background-position: center left;
}

.fondo-dos {
  width: 100%;
  height: 500px;
  background-image: url('../assets/ols-about2.jpg');
  background-size: 50vw;
  background-position: center right;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .fondo-howards {
    width: 100% !important;
    height: 500px !important;
    background-image: url('../assets/ols-about.jpg') !important;
    background-size: 80vw !important;
    background-position: center left 20px !important;
  }

  .fondo-dos {
    width: 100%;
    height: 500px;
    background-image: url('../assets/ols-about2.jpg');
    background-size: 80vw !important;
    background-position: center right 20px !important;
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
    background-image: url('../assets/ols-about.jpg') !important;
    background-size: 0vw !important;
    background-position: top 20px left 20px !important;
  }

  .fondo-dos {
    width: 100%;
    height: auto !important;
    background-image: url('../assets/ols-about2.jpg');
    background-size: 0vw !important;
    background-position: top 20px right 20px !important;
  }
}
</style>
