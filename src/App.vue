<template>
  <v-app>
    <TrnAlert />
    <TrnHeader />
    <v-main>
      <router-view />
    </v-main>
    <TrnFooter />
    <CallHotline />
  </v-app>
</template>

<script>
  import TrnHeader from '@/components/core/Header/Header';
  import TrnAlert from '@/components/core/Alert.vue';

  import CallHotline from '@/components/core/CallHotline';
  import TrnFooter from '@/components/core/Footer';

  export default {
    components: {
      TrnHeader,
      TrnFooter,
      CallHotline,
      TrnAlert,
    },
  };
</script>

<style scoped>
  .v-card__text,
  .v-card__title {
    word-break: normal !important;
  }

  .v-application {
    background: linear-gradient(
        30deg,
        #12bcff 0%,
        #f0feff 25%,
        #85daffb7 51%,
        #f6fcff 82%,
        #4cccff 95%
      )
      no-repeat center center fixed !important;
    background-size: cover !important;
  }
</style>
