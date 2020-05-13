<template>
  <v-card
    :height="hight"
    :width="width"
    class="carta d-flex flex-column justify-space-between align-center"
  >
    <v-card-title class="title-card">Tiempo Parcial</v-card-title>
    <div class="price">$485</div>
    <div class="list">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <img
            width="33"
            height="29"
            class="mx-2"
            src="../assets/pricing/checklist.svg"
          />Lorem Ipsun
        </v-col>
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <img
            width="33"
            height="29"
            class="mx-2"
            src="../assets/pricing/checklist.svg"
          />Lorem Ipsun
        </v-col>
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <img
            width="33"
            height="29"
            class="mx-2"
            src="../assets/pricing/uncheck.svg"
          />Lorem Ipsun
        </v-col>
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <img
            width="33"
            height="29"
            class="mx-2"
            src="../assets/pricing/uncheck.svg"
          />Lorem Ipsun
        </v-col>
        <v-col
          class="d-flex justify-center"
          cols="12"
        >
          <img
            width="33"
            height="29"
            class="mx-2"
            src="../assets/pricing/uncheck.svg"
          />Lorem Ipsun
        </v-col>
      </v-row>
    </div>
    <div class="boton my-12">
      <v-btn
        dark
        rounded
        x-large
        color="primary"
        class="text-capitalize"
      >Inscribirse Hoy</v-btn>
    </div>
  </v-card>
</template>

<script>
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
