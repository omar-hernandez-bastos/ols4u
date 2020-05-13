<template>
  <v-container style="height:auto">
    <div
      data-aos="fade-up"
      class="my-12 display-1 text-center justify-center d-flex font-weight-bold text-uppercase primary--text"
    >
      {{ $t("discover.headline") }}
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-left"
          class="elevation-12"
          :min-height="$vuetify.breakpoint.mdAndUp ? '700' : 'auto'"
        >
          <v-img height="300" src="../assets/discover1.jpeg"></v-img>
          <v-card-title
            class="font-weight-bold d-flex justify-center text-center accent--text"
            v-html="$t('discover.title1')"
          ></v-card-title>
          <v-card-text
            class="text-justify black--text"
            v-html="$t('discover.p1')"
          ></v-card-text>
          <v-card-actions>
            <v-btn to="/full-time" color="primary" class="mx-auto">
              {{ $t("discover.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-down"
          class="elevation-12"
          :min-height="$vuetify.breakpoint.mdAndUp ? '700' : 'auto'"
        >
          <v-img height="300" src="../assets/discover2.jpeg"></v-img>
          <v-card-title
            v-html="$t('discover.title2')"
            class="my-4 font-weight-bold d-flex justify-center text-center accent--text"
          ></v-card-title>

          <v-card-text
            class="text-justify black--text"
            v-html="$t('discover.p2')"
          ></v-card-text>
          <v-card-actions>
            <v-btn to="/visas" color="primary" class="mx-auto">
              {{ $t("discover.button") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          data-aos="fade-right"
          class="elevation-12"
          :min-height="$vuetify.breakpoint.mdAndUp ? '700' : 'auto'"
        >
          <v-img height="300" src="../assets/discover3.jpeg"></v-img>
          <v-card-title
            v-html="$t('discover.title3')"
            class="font-weight-bold d-flex justify-center text-center accent--text"
          ></v-card-title>
          <v-card-text
            class="text-justify black--text"
            v-html="$t('discover.p3')"
          ></v-card-text>
          <v-card-actions class>
            <v-btn to="/part-time" color="primary" class="mx-auto">
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
    }
  }
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
