<template>
  <div>
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
        style="transition: transform 1000ms;"
      >
        <TrnCard :tour="tour" @reloadGrid="reloadGrid" />
      </stack-item>
    </stack>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import { Stack, StackItem } from 'vue-stack-grid';
  import { FETCH_TOURS } from '@/store/type/actions';

  import TrnCard from './Card/Card';

  export default {
    components: {
      TrnCard,
      Stack,
      StackItem,
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
    },

    computed: {
      ...mapGetters(['isLoading', 'tours']),
    },

    watch: {
      $route: 'fetchTours',
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
        await this.$store.dispatch(FETCH_TOURS);
        this.reloadGrid();
      },
    },
  };
</script>

<style scoped></style>
