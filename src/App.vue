<template>
  <v-app>
    <TrnAlert />
    <TrnHeader />
    <v-main>
      <!-- <router-view /> -->
      <!-- <v-scroll-y-transition mode="in" hide-on-leave="true"> -->
      <TrnTransition>
        <router-view />
      </TrnTransition>
      <!-- </v-scroll-y-transition> -->
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
        172deg,
        #29f8ff 0%,
        #f0feff 8%,
        #9aebffde 42%,
        #d5f4f6 50%,
        #c1ebf8 66%,
        #adf3ff 72%,
        #ddf4ff 83%,
        #65faff 100%
      )
      no-repeat center center fixed !important;
    background-size: cover !important;
  }
</style>
