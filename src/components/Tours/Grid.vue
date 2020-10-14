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
        <v-row align="center" justify="center">
          <v-col>
            <TrnSort class="pb-2 pt-0" />
          </v-col>

          <v-col class="text-center text-body-1 primary--text">
            We found
            <span class="font-weight-medium secondary--text text--darken-1">{{
              tourQuantity
            }}</span>
            for you!
          </v-col>
          <v-col class="text-right">
            <TrnPagination
              v-if="total"
              no-button
              :length="pageQuantity"
              :returned="returned"
              :total="total"
            />
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

        <TrnPagination
          v-if="total"
          class="text-center"
          :length="pageQuantity"
          :returned="returned"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { FETCH_TOURS } from '@/store/type/actions';

  import TrnSort from '@/components/Tours/Sort.vue';
  import TrnFilter from '@/components/Tours/Filter/Filter.vue';
  import TrnPagination from '@/components/Tours/Pagination.vue';
  import TrnCard from '@/components/Tours/Card/Card.vue';
  import { Stack, StackItem } from 'vue-stack-grid';

  import TrnLoadingAnimation from '@/components/core/LoadingAnimation.vue';
  import TrnCompass from '@/components/base/Compass';

  import pluralize from '@/common/pluralize.js';
  import { TRN_ITEMS_PER_PAGE } from '@/common/config.js';

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
      pageQuantity() {
        return Math.ceil(this.total / TRN_ITEMS_PER_PAGE);
      },
    },

    watch: {
      // tours() {
      //   if (this.tours) {
      //     this.reloadGrid();
      //   } else {
      //     console.log('teng');
      //   }
      // },

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
  /* .trn-chip-center {
    left: 50%;
    z-index: 4;
    transform: translate(-50%);
  } */
</style>
