<template>
  <div>
    <TrnSort />
    <TrnFilter />

    <div v-if="isToursLoading" class="text-center TrnLoading mb-3">
      <TrnLoadingAnimation style="" />
    </div>
    <div v-else>
      <div v-if="returned === 0" class="text-center text-h5 TrnLoading">
        <TrnCompass style="font-size: 6em" />
        <br />
        No results for your search criteria!!!
        <br />
        Try clearing your filters to get more results!!!
      </div>
      <div v-else>
        <div class="text-center mx-auto mt-n8 mb-4 text-body-1 primary--text">
          We found
          <span class="text-h6 secondary--text text--darken-1">{{
            tourQuantity
          }}</span>
          for you!
        </div>
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
            :class="$vuetify.breakpoint.xs ? 'TrnGridMobile' : ''"
          >
            <TrnCard :tour="tour" @reloadGrid="reloadGrid" />
          </stack-item>
        </stack>

        <TrnPagination />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import { FETCH_TOURS } from '@/store/type/actions';

  import TrnCompass from '@/components/base/Compass';

  import TrnSort from '@/components/Tours/Sort.vue';
  import TrnFilter from '@/components/Tours/Filter/Filter.vue';

  import TrnPagination from '@/components/Pagination.vue';
  import TrnLoadingAnimation from '@/components/core/LoadingAnimation.vue';
  import TrnCard from '@/components/Tours/Card/Card.vue';

  import { Stack, StackItem } from 'vue-stack-grid';
  import pluralize from '@/common/pluralize.js';

  export default {
    components: {
      TrnSort,
      TrnFilter,
      Stack,
      StackItem,
      TrnCard,
      TrnPagination,
      TrnLoadingAnimation,
      TrnCompass,
    },

    computed: {
      ...mapGetters(['isToursLoading', 'tours', 'total', 'returned']),
      tourQuantity() {
        return pluralize(this.total, 'tour');
      },
    },

    watch: {
      // tours: 'reloadGrid',

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
        await this.$store.dispatch(FETCH_TOURS, this.$route.query);
      },
    },
  };
</script>

<style scoped>
  .TrnLoading {
    /* margin-top: 1vh; */
    height: 500px;
  }
  .TrnGridMobile {
    max-width: 350px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
</style>
