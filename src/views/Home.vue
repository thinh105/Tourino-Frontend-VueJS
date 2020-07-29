<template>
  <div class="home">
    <TrnCoreCarousels class="mt-n16" :items="getFeaturedTours" />
    <!-- <TrnSkewText /> -->
    <div class="TrnGird">
      <div v-if="isLoading">
        <div class="text-h5 text-center mt-16 mb-3">Loading tours...</div>
        <v-progress-linear indeterminate color="secondary" />
      </div>
      <div v-else>
        <TrnGrid ref="grid" :tours="tours" />
        <!-- <Grid v-if="(!isLoading)" :tours="tours" /> -->
      </div>
    </div>
    <TrnSkewText />
  </div>
</template>

<script>
  // @ is an alias to /src

  import TrnCoreCarousels from '@/components/Carousels.vue';
  import TrnSkewText from '@/components/base/SkewText.vue';
  import TrnGrid from '@/components/Tours/Grid.vue';
  import { mapGetters } from 'vuex';
  import { FETCH_TOURS } from '../store/type/actions';

  export default {
    name: 'Home',
    components: {
      TrnCoreCarousels,
      TrnSkewText,
      TrnGrid,
    },

    data: () => ({}),
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
  .TrnGird {
    max-width: 1280px;
    min-height: 800px;
    margin: auto;
  }
</style>
