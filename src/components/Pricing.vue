<template>
  <v-container
    id="pricing"
    fluid
    class="align-md"
  >
    <v-container class="hidden-sm-and-down">
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          cols="4"
          align="center"
          justify="center"
        >
          <pricing-card style="margin-top:-20%"></pricing-card>
        </v-col>
        <v-col
          cols="4"
          align="center"
          justify="center"
        >
          <growing style="margin-top:-20%"></growing>
        </v-col>
        <v-col
          cols="4"
          align="center"
          justify="center"
        >
          <enterprice style="margin-top:-20%"></enterprice>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="hidden-sm-and-down">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="4"
          lg="6"
        >
          <img
            style="width:90%; height:auto"
            src="../../assets/pricing/Group 1419.svg"
          />
        </v-col>
        <v-col
          cols="8"
          lg="6"
          class="d-flex flex-column justify-center"
        >
          <div class="about">About Pricing</div>
          <div class="lorem-1 mb-lg-12">
            Lorem Ipsum Lorem Ipsum is simply text.
          </div>
          <div class="lorem-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div class="lorem-3 my-lg-8">
            Lorem Ipsum is simply dummy text of
            <br />the printing and typesetting industry.
          </div>
          <div class="autor">Silvia Natalia, Owner Tanahcon</div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="hidden-md-and-up">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          xs="6"
          md="4"
          sm="4"
          align="center"
          justify="center"
        >
          <pricing-card></pricing-card>
        </v-col>
        <v-col
          cols="12"
          xs="6"
          md="4"
          sm="4"
          align="center"
          justify="center"
        >
          <growing></growing>
        </v-col>
        <v-col
          cols="12"
          xs="6"
          md="4"
          sm="4"
          align="center"
          justify="center"
        >
          <enterprice></enterprice>
        </v-col>
      </v-row>
    </v-container>

    <trial class="mx-auto hidden-sm-and-down"></trial>
  </v-container>
</template>

<script>
import PricingCard from "./Card";
import Growing from "./Growing";
import Enterprice from "./Enterprice";
import Trial from "./Trial";
export default {
  components: {
    PricingCard,
    Growing,
    Enterprice,
    Trial
  }
};
</script>
<style lang="stylus" scoped>
@media only screen and (max-width: 1000px) {
  .align-md {
    display: flex !important;
    align-items: center !important;
  }
}

#pricing {
  height: auto;
  background-image: url('../../assets/pricing/Background.png');
  background-position: center center;
  background-size: 100%;
}

@media only screen and (min-width: 1600px) {
  #pricing {
    background-size: 100%;
  }
}

@media only screen and (min-width: 1800px) {
  #pricing {
    background-size: 90%;
  }
}

@media only screen and (max-width: 1200px) {
  .about {
  }

  .lorem-1 {
  }
}

.about {
  font-family: Livvic;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  color: #FFFFFF;
}

@media only screen and (max-width: 600px) {
  #pricing {
    background-size: cover;
    padding-bottom: 100px !important;
    height: auto;
  }
}

.lorem-1 {
  font-family: Livvic;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 51px;
  /* or 150% */
  color: #FFFFFF;
}

.lorem-2 {
  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  color: #FFFFFF;
}

.lorem-3 {
  font-family: Livvic;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  color: #FFFFFF;
}

.autor {
  font-family: Livvic;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  color: #FFFFFF;
}
</style>
