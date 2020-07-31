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
  import TrnFooter from '@/components/core/Footer';
  import TrnHeader from '@/components/core/Header/Header';
  import TrnAlert from '@/components/core/Alert.vue';
  import CallHotline from '@/components/core/CallHotline';

  export default {
    components: {
      TrnHeader,
      TrnFooter,
      CallHotline,
      TrnAlert,
    },
  };
</script>

<style scope>
  .v-card__text,
  .v-card__title {
    word-break: normal !important;
  }

  .v-application {
    background: linear-gradient(
        30deg,
        #b4eaff 0%,
        #f0feff 25%,
        #a0e0fbb7 71%,
        #edfaff 92%
      )
      no-repeat center center fixed !important;
    background-size: cover !important;
  }
</style>
