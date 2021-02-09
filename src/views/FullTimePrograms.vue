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
        {{ $t("programs.fulltime") }} <br> <span class="title black--text">{{$t('underline')}}</span>
      </h1>
      <p
        data-aos="fade-down"
        class="work-sans text-justify"
        v-html="$t('programs.ftP1')"
      ></p>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.ftTitle1") }}
          </h2>
          <p
            class="work-sans text-justify"
            v-html="$t('programs.ftP2')"
          ></p>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.ftTitle2") }}
          </h2>
          <p
            class="work-sans text-start"
            v-html="$t('programs.ftPricingList')"
          ></p>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.ftTitle3") }}
          </h2>
          <p
            class="work-sans text-justify"
            v-html="$t('programs.ftP3')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-right"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <v-img
            max-width="90%"
            style="border-radius:18px !important"
            class="mb-4"
            src="../assets/Programs/fulltime.jpg"
          ></v-img>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.fTScheduleTitle") }}
          </h2>
          <h3 class="work-sans accent--text">{{ $t("programs.ftMorning") }}</h3>
          <p
            class="work-sans"
            v-html="$t('programs.ftMorningP')"
          ></p>
          <h3 class="work-sans accent--text">
            {{ $t("programs.ftAfternoon") }}
          </h3>
          <p
            class="work-sans"
            v-html="$t('programs.ftAfternoonP')"
          ></p>
          <h3 class="work-sans accent--text">{{ $t("programs.ftEvening") }}</h3>
          <p
            class="work-sans"
            v-html="$t('programs.ftEveningP')"
          ></p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
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
            src="../assets/Programs/c2.jpg"
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
            src="../assets/Programs/c3.jpg"
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
            src="../assets/Programs/c4.jpg"
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
            src="../assets/Programs/c6.jpg"
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
