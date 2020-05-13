<template>
  <v-img
    style="border-radius:18px; margin-top:5"
    class="elevation-12"
    max-width="80%"
    max-height="300"
    src="../assets/pricing/Background (2).png"
  >
    <v-container class="d-flex align-center justify-space-around flex-column">
      <div class="titulo my-4">Free Trial Period</div>
      <div class="lorem mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting dummy
        text
        <br />of the printing and typesetting
      </div>
      <div class="boton">
        <v-btn
          class="text-lowercase"
          rounded
          outlined
          color="white"
        >
          <span class="text-capitalize">S</span>ee open Position
        </v-btn>
      </div>
    </v-container>
  </v-img>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.titulo {
  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 51px;
  /* identical to box height, or 150% */
  text-align: center;
  color: #FFFFFF;
}

.lorem {
  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  text-align: center;
  color: #FFFFFF;
}
</style>
