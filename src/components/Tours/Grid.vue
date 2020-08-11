<template>
  <v-container>
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
        <GridCard :tour="tour" />
      </stack-item>
    </stack>
  </v-container>
</template>

<script>
  import { Stack, StackItem } from 'vue-stack-grid';
  import GridCard from './GridCard';

  export default {
    components: {
      GridCard,
      Stack,
      StackItem,
    },
    props: ['tours'],
  };
</script>

<style scoped></style>
