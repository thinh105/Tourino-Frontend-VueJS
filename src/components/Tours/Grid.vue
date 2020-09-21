<template>
  <div>
    <TrnFilter />

    <div v-if="isToursLoading" class="text-center TrnLoading mb-3">
      <TrnLoadingAnimation />
    </div>
    <div v-else>
      <div v-if="returned === 0" class="text-center text-h5 TrnLoading">
        <TrnCompass style="font-size: 6em" />
        <br />
        No results for your search criteria!
        <br />
        Try clearing your filters to get more!
      </div>
      <div v-else>
        <v-row align="center" class="mb-4">
          <v-col cols="3">
            <TrnSort class="pt-0 pb-1" />
          </v-col>
          <!-- <v-spacer /> -->
          <v-col class="text-center text-h6 font-weight-light primary--text">
            We found
            <span class="font-weight-medium secondary--text text--darken-1">{{
              tourQuantity
            }}</span>
            for you!
          </v-col>
        </v-row>

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
            <TrnCard :tour="tour" @reload-grid="reloadGrid" />
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

  import TrnPagination from '@/components/Tours/Pagination.vue';
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
      tours: 'reloadGrid',

      $route: {
        handler: 'fetchTours',
        immediate: true,
      },
    },

    methods: {
      reloadGrid() {
        this.$nextTick(() => {
          if (this.$refs.stackRef) this.$refs.stackRef.reflow();
        });
      },

      async fetchTours() {
        await this.$store.dispatch(FETCH_TOURS, this.$route.query);
      },
    },
  };
</script>

<style>
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

  .trn-no-border.v-text-field > .v-input__control > .v-input__slot:before {
    border-style: none;
  }
  .trn-no-border.v-text-field > .v-input__control > .v-input__slot:after {
    border-style: none;
  }
  .trn-chip-center {
    left: 50%;
    z-index: 4;
    transform: translate(-50%);
  }
</style>
