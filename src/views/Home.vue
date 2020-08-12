<template>
  <div>
    <TrnCarousels class="mt-n16" :items="getFeaturedTours" />

    <v-container class="TourList">
      <div v-if="isLoading">
        <div class="text-h5 text-center mt-16 mb-3">Loading tours...</div>
        <v-progress-linear indeterminate color="secondary" />
      </div>
      <div v-else>
        <!-- <v-row v-if="!$vuetify.breakpoint.mobile">
          <v-col cols="2">
            <TrnFilter />
          </v-col>
          <v-col cols="10">
            <TrnSort />
            <TrnGrid ref="grid" :tours="tours" /> -->
        <!-- <Grid v-if="(!isLoading)" :tours="tours" /> -->
        <!-- </v-col>
        </v-row>

        <div v-else> -->

        <TrnSort />
        <TrnFilter />

        <TrnGrid ref="grid" :tours="tours" />
        <TrnPagination />
      </div>
      <!-- </div> -->
    </v-container>
    <TrnSkewText />
  </div>
</template>

<script>
  // @ is an alias to /src
  import { mapGetters } from 'vuex';

  import TrnCarousels from '@/components/Carousels.vue';
  import TrnSkewText from '@/components/base/SkewText.vue';

  import TrnGrid from '@/components/Tours/Grid.vue';
  import TrnSort from '@/components/Tours/Sort.vue';
  import TrnFilter from '@/components/Tours/Filter.vue';
  import TrnPagination from '@/components/Pagination.vue';

  import { FETCH_TOURS } from '../store/type/actions';

  export default {
    name: 'Home',
    components: {
      TrnCarousels,
      TrnSkewText,
      TrnGrid,
      TrnSort,
      TrnFilter,
      TrnPagination,
    },

    computed: {
      ...mapGetters(['isLoading', 'tours', 'getFeaturedTours']),
    },
    mounted() {
      this.fetchTours();
    },
    methods: {
      async fetchTours() {
        await this.$store.dispatch(FETCH_TOURS);
        this.$refs.grid.$refs.stackRef.reflow();
      },
    },
  };
</script>

<style scoped>
  .TourList {
    max-width: 1200px !important;
    /* min-height: 800px; */
    margin: auto;
  }
</style>
