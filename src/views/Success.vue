<template>
  <v-container pa-0 ma-0 fluid id="home">
    <v-img
      style="height:100%"
      gradient="to top right, rgba(12,32,92,.7), rgba(12,32,92,.7)"
      src="../assets/landing/OLS-Day1-124.jpg"
    >
      <v-container style="height:100%">
        <v-row style="height:100%" justify="center" align="center">
          <v-col
            justify="center"
            align="center"
            cols="
            12"
            md="6"
          >
            <div
              class="hidden-md-and-up font-weight-bold white--text display-1"
            >
              {{ $t("success.t1") }}
            </div>
            <div
              class=" hidden-sm-and-down font-weight-bold white--text display-3"
            >
              {{ $t("success.t1") }}
            </div>
            <div
              class=" hidden-md-and-up font-weight-bold mt-4 white--text title"
            >
              {{ $t("success.t2") }}
            </div>
            <div
              class=" hidden-sm-and-down font-weight-bold mt-4 white--text display-1"
            >
              {{ $t("success.t2") }}
            </div>
            <v-btn
              @click="$router.push({ name: 'LandingPage' })"
              class="mt-12"
              x-large=""
              color="primary"
              dark
            >
              <v-img
                width="50"
                class="ml-n10 mr-4"
                src="../assets/landing/comenzarbtn.svg"
              ></v-img>
              {{ $t("success.t3") }}
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="hidden-sm-and-down"
            justify="center"
            align="end"
          >
            <v-img
              class="mx-auto"
              width="50%"
              src="../assets/success.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100%;
}
</style>
