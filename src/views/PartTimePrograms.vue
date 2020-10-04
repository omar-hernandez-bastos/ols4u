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
        {{ $t("programs.parttime") }}  <br> <span class="title black--text">{{$t('underline')}}</span>
      </h1>
    
      <p
        data-aos="fade-down"
        class="work-sans text-justify"
        v-html="$t('programs.ptP1')"
      ></p>
      <v-row
        class="mb-12"
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
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c6.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-right"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.ptTitle2") }}
          </h2>
          <p
            class="work-sans text-start"
            v-html="$t('programs.ptPricingList')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t("programs.ptScheduleTitle") }}
          </h2>
          <h3 class="work-sans accent--text">{{ $t("programs.ptMorning") }}</h3>
          <p
            class="work-sans"
            v-html="$t('programs.ptMorningP')"
          ></p>
          <h3 class="work-sans accent--text">
            {{ $t("programs.ptAfternoon") }}
          </h3>
          <p
            class="work-sans"
            v-html="$t('programs.ptAfternoonP')"
          ></p>
          <h3 class="work-sans accent--text">{{ $t("programs.ptEvening") }}</h3>
          <p
            class="work-sans"
            v-html="$t('programs.ptEveningP')"
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
            style="border-radius:18px !important"
            src="../assets/Programs/c1.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row
        class="my-12"
        justify="center"
        align="center"
      >
        <v-col
          data-aos="fade-left"
          cols="12"
          md="4"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/ipg.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t("programs.ipgTitle1") }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.ipgPricingList')"
            ></p>
          </v-container>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t("programs.ipgTitle2") }}
          </h2>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.ipgMorning") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgMorningP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.ptAfternoon") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgAfternoonP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.ipgEvening") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgEveningP')"
          ></p>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row
        class="my-12"
        justify="center"
        align="center"
      >
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t("programs.icpTitle1") }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.icpPricingList')"
            ></p>
          </v-container>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t("programs.icpTitle2") }}
          </h2>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.icpMorning") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpMorningP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.ptAfternoon") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpAfternoonP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t("programs.icpEvening") }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpEveningP')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="4"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/ICP.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-container class="my-12">
        <h2 class="text-start work-sans font-weight-bold accent--text">
          {{ $t("programs.privateTitle") }}
        </h2>
        <v-container>
          <p
            class="work-sans text-start"
            v-html="$t('programs.privateList')"
          ></p>
        </v-container>
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

<style></style>
