<template>
  <v-container style=" margin-top:64px; " fluid="" class="" mx-0 pa-0>
    <navigation-bar></navigation-bar>
    <v-container>
      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-3 font-weight-bold primary--text text-center"
      >
        {{ $t("galleries.mainTitle") }}
      </h1>
      <h2
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 font-weight-bold accent--text text-start"
      >
        {{ $t("galleries.subMainTitle") }}
      </h2>
      <v-img
        style="border-radius:18px !important"
        src="../assets/Galleries/1.jpg"
      ></v-img>
      <h2
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 font-weight-bold accent--text text-start"
      >
        {{ $t("galleries.title1") }}
      </h2>
      <p
        data-aos="fade-down"
        class=" work-sans text-justify"
        v-html="$t('galleries.p1')"
      ></p>
      <h2
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 font-weight-bold accent--text text-center"
        v-html="$t('galleries.title2')"
      ></h2>
      <div class="d-flex justify-space-around">
        <v-btn color="primary" class="mr-4" x-large="" to="/full-time">
          {{ $t("galleries.buttonFull") }}</v-btn
        >

        <v-btn color="primary" x-large="" to="/contact">
          {{ $t("galleries.contact") }}</v-btn
        >
      </div>

      <v-row class="my-12" align="center" justify="center">
        <v-col
          data-aos="fade-left"
          align="center"
          justify="center"
          cols="12"
          sm="6"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Galleries/2.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-right"
          align="center"
          justify="center"
          cols="12"
          sm="6"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Galleries/3.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" justify="center" align="center">
          <p
            data-aos="fade-down"
            class=" work-sans text-justify"
            v-html="$t('galleries.p2')"
          ></p>
        </v-col>
      </v-row>
    </v-container>
    <v-container pa-0 ma-0 fluid class="accent">
      <v-container>
        <p
          data-aos="fade-down"
          class="mt-12 white--text work-sans text-justify"
          v-html="$t('galleries.testimonies1')"
        ></p>
        <v-container class="d-flex justify-center align-center my-12">
          <lingallery
            class=""
            :width="$vuetify.breakpoint.smAndUp ? '600' : '300'"
            :height="400"
            :items="[
              {
                src: require('../assets/Galleries/c1.jpg'),
                thumbnail: require('../assets/Galleries/c1_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c2.jpg'),
                thumbnail: require('../assets/Galleries/c2_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c3.jpg'),
                thumbnail: require('../assets/Galleries/c3_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c4.jpg'),
                thumbnail: require('../assets/Galleries/c4_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c5.jpg'),
                thumbnail: require('../assets/Galleries/c5_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c6.jpg'),
                thumbnail: require('../assets/Galleries/c6_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c7.jpg'),
                thumbnail: require('../assets/Galleries/c7_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c8.jpg'),
                thumbnail: require('../assets/Galleries/c8_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c9.jpg'),
                thumbnail: require('../assets/Galleries/c9_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c10.jpg'),
                thumbnail: require('../assets/Galleries/c10_tn.jpg')
              },
              {
                src: require('../assets/Galleries/c11.jpg'),
                thumbnail: require('../assets/Galleries/c11_tn.jpg')
              },

              {
                src: require('../assets/Galleries/c12.jpg'),
                thumbnail: require('../assets/Galleries/c12_tn.jpg')
              }
            ]"
          />
        </v-container>
        <v-container
          class="work-sans d-flex justify-center align-center fondo-dos"
        >
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
                  {{ $t("galleries.fieldTitle") }}
                </div>

                <div
                  v-html="$t('galleries.fieldP')"
                  class="p-2 text-center mt-4 titulo"
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
        <p
          data-aos="fade-down"
          class="mt-12 white--text work-sans text-justify"
          v-html="$t('galleries.testimonies2')"
        ></p>
        <v-container class="d-flex justify-center align-center my-12">
          <lingallery
            :width="$vuetify.breakpoint.smAndUp ? '600' : '300'"
            :height="400"
            :items="galleries"
          />
        </v-container>
        <p
          data-aos="fade-down"
          class="mt-12 white--text work-sans text-justify"
          v-html="$t('galleries.testimonies3')"
        ></p>

        <v-container
          class="work-sans d-flex justify-center align-center fondo-howards"
        >
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
                  {{ $t("galleries.celebrationsTitle") }}
                </div>

                <div
                  v-html="$t('galleries.celebrationsP')"
                  class="p-2 text-center mt-4 titulo"
                ></div>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
        <p
          data-aos="fade-down"
          class="mt-12 white--text work-sans text-justify"
          v-html="$t('galleries.testimonies4')"
        ></p>
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
  },
  data: () => ({
    picture: null,
    dialog: false,
    galleries: [
      {
        src: require("../assets/Galleries/f1.jpg"),
        thumbnail: require("../assets/Galleries/f1_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f2.jpeg"),
        thumbnail: require("../assets/Galleries/f2_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f3.jpeg"),
        thumbnail: require("../assets/Galleries/f3_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f4.jpg"),
        thumbnail: require("../assets/Galleries/f4_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f5.jpeg"),
        thumbnail: require("../assets/Galleries/f5_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f6.jpg"),
        thumbnail: require("../assets/Galleries/f6_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f7.jpg"),
        thumbnail: require("../assets/Galleries/f7_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f8.jpg"),
        thumbnail: require("../assets/Galleries/f8_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f9.jpg"),
        thumbnail: require("../assets/Galleries/f9_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f10.jpg"),
        thumbnail: require("../assets/Galleries/f10_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f11.jpg"),
        thumbnail: require("../assets/Galleries/f11_tn.jpg")
      },
      {
        src: require("../assets/Galleries/f12.jpg"),
        thumbnail: require("../assets/Galleries/f12_tn.jpg")
      }
    ]
  }),
  methods: {
    openDialog(item) {
      this.dialog = true;
      this.picture = item.src;
    },
    closeDialog() {
      this.dialog = false;
      this.piture = null;
    }
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
  background-image: url('../assets/Galleries/howards.jpg');
  background-size: 50vw;
  background-position: center left;
}

.fondo-dos {
  width: 100%;
  height: 500px;
  background-image: url('../assets/Galleries/field.jpg');
  background-size: 50vw;
  background-position: center right;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .fondo-howards {
    width: 100% !important;
    height: 500px !important;
    background-image: url('../assets/Galleries/howards.jpg') !important;
    background-size: 80vw !important;
    background-position: center left 20px !important;
  }

  .fondo-dos {
    width: 100%;
    height: 500px;
    background-image: url('../assets/Galleries/field.jpg');
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
    background-image: url('../assets/Galleries/howards.jpg') !important;
    background-size: 0vw !important;
    background-position: top 20px left 20px !important;
  }

  .fondo-dos {
    width: 100%;
    height: auto !important;
    background-image: url('../assets/Galleries/field.jpg');
    background-size: 0vw !important;
    background-position: top 20px right 20px !important;
  }
}
</style>
