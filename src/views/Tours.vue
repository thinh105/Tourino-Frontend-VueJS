<template>
  <div>
    <div class="TourList">
      <!-- <v-row v-if="!$vuetify.breakpoint.mobile">
          <v-col cols="2">
            <TrnFilter />
          </v-col>
          <v-col cols="10">
            <TrnSort />
            <TrnGrid ref="grid" :tours="tours" />  -->
      <!-- <Grid v-if="(!isLoading)" :tours="tours" /> -->
      <!-- </v-col>
        </v-row> -->

      <TrnGrid />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import { mapGetters } from 'vuex';

  import TrnGrid from '@/components/Tours/Grid.vue';

  export default {
    name: 'Home',
    components: {
      TrnGrid,
    },
    computed: {
      ...mapGetters(['getFeaturedTours']),
    },
  };
</script>

<style scoped>
  .TourList {
    max-width: 1100px !important;
    /* min-height: 800px; */
    margin: auto;
  }
</style>
