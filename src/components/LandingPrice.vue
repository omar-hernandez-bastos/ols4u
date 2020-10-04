<template>
  <v-container
    id="pricing"
    fluid
    class="d-flex justify-center align-center flex-column align-md"
  >
    <div class="my-12 display-1 white--text d-flex justify-center text-center">
      {{ $t("landing.p11") }}
    </div>
    <v-container>
      <v-row align="start" justify="center">
         <v-col
          data-aos-easing="ease-in-quad"
          data-aos="fade-right"
          data-aos-delay="250"
          cols="12"
          xs=6
          md=3
          align="center"
          justify="center"
        >
          <growing height="800"></growing>
        </v-col>  
        <v-col
          data-aos-easing="ease-in-quad"
          data-aos="fade-left"
          data-aos-delay="50"
          cols="12"
          xs=6
          md=3
          align="center"
          justify="center"
        >
          <super-intense height="800"></super-intense>
        </v-col>
             <v-col
          data-aos-easing="ease-in-quad"
          data-aos="fade-left"
          data-aos-delay="50"
          cols="12"
          xs=6
          md=3
          align="center"
          justify="center"
        >
          <grammar height="800"> </grammar>
        </v-col>
        <v-col
          data-aos-easing="ease-in-quad"
          data-aos="fade-right"
          data-aos-delay="250"
          cols="12"
          xs=6
          md=3
          align="center"
          justify="center"
        >
           <conversation height="800"></conversation>
        </v-col>
      </v-row>
    </v-container>

  
    <div
      class="caption white--text d-flex justify-center text-center font-italic"
    >
      {{ $t("landing.p20") }}
    </div>
  </v-container>
</template>

<script>
import SuperIntense from "./SuperIntense";
import Growing from "./Growing";
export default {
  components: {
    SuperIntense,
    Growing,
    grammar:()=>import('./Grammar.vue'),
    conversation:()=>import('./Conversation.vue')
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
