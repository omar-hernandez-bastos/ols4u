<template>
  <v-container style="height:auto">
    <div
      data-aos="fade-up"
      class="my-12 display-1 text-center justify-center d-flex font-weight-bold text-uppercase primary--text"
    >
      {{ $t("discover.headline") }}
    </div>
    <v-row class="mb-4">
      <!-- Tarjeta 1 -->
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-left"
          class="elevation-12 d-flex flex-column"
          :style="
            $vuetify.breakpoint.mdAndUp
              ? 'min-height: 700px; height: 100%;'
              : ''
          "
        >
          <!-- Contenedor fijo para imagen y título -->
          <div class="card-header">
            <v-img
              height="300"
              src="../assets/discover1.jpeg"
              style="object-fit: cover;"
            ></v-img>
            <v-card-title
              class="font-weight-bold d-flex justify-center text-center accent--text mt-2"
              v-html="$t('discover.title1')"
            ></v-card-title>
          </div>
          <!-- Texto que crece para ocupar espacio -->
          <v-card-text
            class="text-justify black--text flex-grow-1"
            v-html="$t('discover.p1')"
          ></v-card-text>
          <!-- Botón de acción alineado al final -->
          <v-card-actions class="d-flex align-center justify-center mb-4">
            <v-btn to="/full-time" color="primary">
              {{ $t("discover.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Tarjeta 2 -->
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-down"
          class="elevation-12 d-flex flex-column"
          :style="
            $vuetify.breakpoint.mdAndUp
              ? 'min-height: 700px; height: 100%;'
              : ''
          "
        >
          <!-- Contenedor fijo para imagen y título -->
          <div class="card-header">
            <v-img
              height="300"
              src="../assets/discover2.jpeg"
              style="object-fit: cover;"
            ></v-img>
            <v-card-title
              class="font-weight-bold d-flex justify-center text-center accent--text mt-2"
              v-html="$t('discover.title2')"
            ></v-card-title>
          </div>
          <!-- Texto que crece para ocupar espacio -->
          <v-card-text
            class="text-justify black--text flex-grow-1"
            v-html="$t('discover.p2')"
          ></v-card-text>
          <!-- Botón de acción alineado al final -->
          <v-card-actions class="d-flex align-center justify-center mb-4">
            <v-btn to="/visas" color="primary">
              {{ $t("discover.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Tarjeta 3 -->
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-right"
          class="elevation-12 d-flex flex-column"
          :style="
            $vuetify.breakpoint.mdAndUp
              ? 'min-height: 700px; height: 100%;'
              : ''
          "
        >
          <!-- Contenedor fijo para imagen y título -->
          <div class="card-header">
            <v-img
              height="300"
              src="../assets/discover3.jpeg"
              style="object-fit: cover;"
            ></v-img>
            <v-card-title
              class="font-weight-bold d-flex justify-center text-center accent--text mt-2"
              v-html="$t('discover.title3')"
            ></v-card-title>
          </div>
          <!-- Texto que crece para ocupar espacio -->
          <v-card-text
            class="text-justify black--text flex-grow-1"
            v-html="$t('discover.p3')"
          ></v-card-text>
          <!-- Botón de acción alineado al final -->
          <v-card-actions class="d-flex align-center justify-center mb-4">
            <v-btn to="/part-time" color="primary">
              {{ $t("discover.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    learnMore() {
      return { template: `<router-link to="/about">about</router-link>` };
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important */
}

.carta {
  border-radius: 18px;
}
</style>
