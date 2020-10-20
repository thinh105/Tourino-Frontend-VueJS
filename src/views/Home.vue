<template>
  <div>
    <TrnCarousels class="mt-n16" :items="getFeaturedTours" link />

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

  import TrnCarousels from '@/components/Carousels.vue';
  import TrnSkewTextBox from '@/components/base/SkewTextBox.vue';

  import TrnGrid from '@/components/Tours/Grid.vue';

  export default {
    name: 'Home',
    components: {
      TrnCarousels,
      TrnSkewTextBox,
      TrnGrid,
    },
    computed: {
      ...mapGetters(['getFeaturedTours']),
    },
  };
</script>

<style scoped>
  .TourList {
    max-width: 1080px !important;
    /* min-height: 800px; */
    margin: auto;
  }
</style>
