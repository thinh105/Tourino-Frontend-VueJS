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
        <TrnTourCard :tour="tour" @reloadGrid="reloadGrid" />
      </stack-item>
    </stack>
  </div>
</template>

<script>
  import { Stack, StackItem } from 'vue-stack-grid';
  import TrnTourCard from './TourCard/TourCard';

  export default {
    components: {
      TrnTourCard,
      Stack,
      StackItem,
    },
    props: ['tours'],
    methods: {
      reloadGrid() {
        this.$nextTick(() => {
          this.$refs.stackRef.reflow();
        });
      },
    },
  };
</script>

<style scoped></style>
