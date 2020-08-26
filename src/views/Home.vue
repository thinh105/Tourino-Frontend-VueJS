<template>
  <div>
    <!-- <TrnCarousels class="mt-n16" :items="getFeaturedTours" /> -->

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

      <TrnSort />
      <TrnFilter />
      <TrnGrid />
    </div>
    <!-- </div> -->
  </div>
  <!-- <TrnSkewTextBox /> -->
</template>

<script>
  // @ is an alias to /src

  import { mapGetters } from 'vuex';

  import TrnCarousels from '@/components/Carousels.vue';
  import TrnSkewTextBox from '@/components/base/SkewTextBox.vue';

  import TrnGrid from '@/components/Tours/Grid/Grid.vue';
  import TrnSort from '@/components/Tours/Sort.vue';
  import TrnFilter from '@/components/Tours/Filter.vue';

  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['getFeaturedTours', 'isLoading']),
    },
    components: {
      TrnCarousels,
      TrnSkewTextBox,
      TrnGrid,
      TrnSort,
      TrnFilter,
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
