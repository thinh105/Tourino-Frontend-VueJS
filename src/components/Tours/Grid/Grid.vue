<template>
  <div>
    <div v-if="isLoading" class="text-h5 text-center TrnLoading mb-3">
      <div>Loading tours...</div>
      <v-progress-linear indeterminate color="secondary" />
    </div>
    <div v-else>
      <stack
        ref="stackRef"
        :column-min-width="320"
        :gutter-width="30"
        :gutter-height="40"
        :monitor-images-loaded="true"
      >
        <stack-item
          v-for="(tour, i) in tours"
          :key="i"
          style="transition: transform 1000ms"
        >
          <TrnCard :tour="tour" @reloadGrid="reloadGrid" />
        </stack-item>
      </stack>

      <TrnPagination />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import { Stack, StackItem } from 'vue-stack-grid';

  import TrnPagination from '@/components/Pagination.vue';
  import { FETCH_TOURS } from '@/store/type/actions';
  import TrnCard from './Card/Card';

  export default {
    components: {
      Stack,
      StackItem,
      TrnCard,
      TrnPagination,
    },

    props: {
      destination: {
        type: String,
        required: false,
        default: 'all',
      },
      travelStyle: {
        type: String,
        required: false,
        default: undefined,
      },
      price: {
        type: Array,
        required: false,
        default: undefined,
      },
      rating: {
        type: String,
        required: false,
        default: undefined,
      },
      duration: {
        type: Number,
        required: false,
        default: 10,
      },
      path: {
        type: String,
        required: false,
        default: undefined,
      },
    },

    computed: {
      ...mapGetters(['isLoading', 'tours']),
    },

    watch: {
      tours: 'reloadGrid',

      $route(to, from) {
        this.fetchTours();
      },
    },

    created() {
      this.fetchTours();
    },

    methods: {
      reloadGrid() {
        this.$nextTick(() => {
          this.$refs.stackRef.reflow();
        });
      },

      async fetchTours() {
        await this.$store.dispatch(
          FETCH_TOURS,
          this.$route.fullPath.substring(2) // remove '/?' from fullPath
        );
      },
    },
  };
</script>

<style scoped>
  .TrnLoading {
    margin-top: 180px;
  }
</style>
