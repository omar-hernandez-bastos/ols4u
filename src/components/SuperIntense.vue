<template>
  <v-card
    :height="height"
    :width="width"
    class="carta d-flex flex-column justify-space-between align-center"
  >
    <v-card-title style="word-break: break-word" class=" title-card ">{{
      $t("landing.p12")
    }}</v-card-title>
    <div class="price d-flex justify-center align-center flex-column">
      <span
        style="text-decoration:line-through; text-decoration-color:black; text-decoration-style: dashed"
        class="display-1"
      >
        {{ $t("landing.p13") }}</span
      >
      {{ $t("landing.p14") }}
    </div>
    <div class="list">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="d-flex justify-center" cols="12">
            {{ $t("landing.p15") }}
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            {{ $t("landing.p16") }}
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            {{ $t("landing.p17") }}
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            {{ $t("landing.p18") }}
          </v-col>
          <v-col class="d-flex justify-center" cols="12">
            {{ $t("landing.p19") }}
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="boton my-12">
      <partial-button></partial-button>
    </div>
  </v-card>
</template>

<script>
import PartialButton from "./PartialButton";
export default {
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "Auto"
    }
  },
  components: {
    PartialButton
  }
};
</script>

<style lang="stylus" scoped>
.carta {
  background: #FFFFFF !important;
  border: 1px solid #F2F2F2 !important;
  border-radius: 18px !important;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .carta {
    background: #FFFFFF !important;
    border: 1px solid #F2F2F2 !important;
    border-radius: 18px !important;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1) !important;
  }
}

.title-card {
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 32px !important;
  line-height: 32px !important;
  /* identical to box height, or 133% */
  text-align: center !important;
  color: #222A41 !important;
}

.price {
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 60px !important;
  line-height: 80px !important;
  /* identical to box height, or 133% */
  color: #fd9917 !important;
  text-align: center !important;
}

.list {
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 18px !important;
  line-height: 27px !important;
  /* identical to box height, or 150% */
  color: #222A41 !important;
}
</style>
