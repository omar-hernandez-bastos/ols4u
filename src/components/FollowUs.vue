<template>
  <v-container>
    <div
      data-aos="fade-up"
      class="display-1 d-flex justify-center text-center primary--text font-weight-bold text-uppercase my-4"
    >
      {{ $t("followUs") }}
    </div>
    <div class="d-flex justify-center align-center">
      <a
        data-aos="fade-left"
        target="_blank"
        href="https://www.facebook.com/OrlandoLanguageSchool/"
      >
        <img height="52" class="mr-4" width="52" src="../assets/facebook.svg" />
      </a>

      <a
        data-aos="fade-down"
        target="_blank"
        href="https://www.instagram.com/orlandolanguageschool/"
      >
        <img
          height="52"
          class="mr-4"
          width="52"
          src="../assets/instagram.svg"
        />
      </a>

      <a data-aos="fade-right" href="mailto:info@ols4u.com">
        <img height="52" class="mr-4" width="52" src="../assets/mails.svg" />
      </a>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
