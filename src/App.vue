<template>
  <v-app>
    <v-content>
 
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
   // popup:()=>import("./components/Popup")
  },

  data: () => ({
    //
  })
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700,900&display=swap');

.work-sans {
  font-family: 'Work Sans', sans-serif !important;
}

html, body {
  position: relative;
  overflow-x: hidden;
}
</style>
