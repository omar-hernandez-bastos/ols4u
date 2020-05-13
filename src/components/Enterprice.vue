<template>
  <v-card
    dark
    :height="height"
    :width="width"
    color="transparent"
    class="carta"
  >
    <v-img
      max-width="100%"
      src="../assets/pricing/Rectangle 2.png"
    >
      <v-container
        style="height:100%"
        class="d-flex flex-column justify-space-between align-center"
      >
        <v-card-title class="title-card">Growing Team</v-card-title>
        <div class="price">$99</div>
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
                src="../assets/pricing/checklist_white.svg"
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
                src="../assets/pricing/checklist_white.svg"
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
                src="../assets/pricing/checklist_white.svg"
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
                src="../assets/pricing/checklist_white.svg"
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
                src="../assets/pricing/checklist_white.svg"
              />Lorem Ipsun
            </v-col>
          </v-row>
        </div>
        <div class="boton my-12">
          <v-btn
            dark
            rounded
            x-large
            color="#81bbd8"
            class="text-capitalize"
          >Choose Plan</v-btn>
        </div>
      </v-container>
    </v-img>
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
  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  text-align: center;
  color: #FFFFFF;
}

.price {
  font-family: Livvic;
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 80px;
  /* identical to box height, or 133% */
  text-align: center;
  letter-spacing: -1.76471px;
  color: #FFFFFF;
}

.list {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  color: #FFFFFF;
}
</style>
