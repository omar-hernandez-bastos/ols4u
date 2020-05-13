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
          <pricing-card></pricing-card>
        </v-col>
        <v-col
          cols="4"
          align="center"
          justify="center"
        >
          <growing></growing>
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
        > </v-col>
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
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import PricingCard from "./Card";
import Growing from "./Growing";
export default {
  components: {
    PricingCard,
    Growing
  }
};
</script>
<style scoped>
@media only screen and (max-width: 1000px) {
  .align-md {
    display: flex !important;
    align-items: center !important;
  }
}

#pricing {
  height: auto;
  background-color: #183290;
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
  color: #ffffff;
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
  color: #ffffff;
}

.lorem-2 {
  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  color: #ffffff;
}

.lorem-3 {
  font-family: Livvic;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  color: #ffffff;
}

.autor {
  font-family: Livvic;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  color: #ffffff;
}
</style>
