<template>
  <v-app-bar
    class="work-sans font-weight-bold"
    fixed
    color="primary"
    dark
    scroll-target="#scrolling-techniques-2"
  >
    <v-toolbar-title
      @click="$router.push({ path: '/' })"
      class="text-center text-uppercase titulo"
    >
      ORLANDO
      <br />LANGUAGE SCHOOL
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      text
      to="/programs"
      class="font-weight-bold text-uppercase hidden-sm-and-down"
      color="white"
      >{{ $t("header.programs") }}</v-btn
    >

    <v-spacer></v-spacer>
    <v-select
      background-color="primary"
      ref="dropdown"
      class="mt-3"
      :single-line="true"
      style="max-width:60px"
      name="lang"
      :items="languages"
      v-model="lang"
      @change="changeLanguage(lang)"
      :label="$t('header.language_picker_helper')"
      item-text="title"
    ></v-select>
    <img
      @click="openSelect"
      class="hidden-sm-and-down mx-2"
      style="width:46px"
      :src="$t('header.icon')"
      alt
    />

    <img
      @click="openSelect"
      class="mx-2 hidden-md-and-up"
      style="width:24px"
      :src="$t('header.icon')"
      alt
    />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$store.state.language,
      languages: [
        {
          title: this.$t("header.languages.english"),
          value: "en"
        },
        {
          title: this.$t("header.languages.spanish"),
          value: "es"
        },
        {
          title: this.$t("header.languages.portuguese"),
          value: "pt"
        }
      ]
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("language/setLanguage", lang);
    },
    openSelect() {
      this.$refs.dropdown.click();
    }
  }
};
</script>
<style lang="stylus" scoped>
.titulo {
  font-size: 1.5rem !important;
}

@media only screen and (max-width: 1200px) {
  .titulo {
    font-size: 1rem !important;
    text-transform: capitalize;
    line-height: 1rem;
  }
}
</style>
