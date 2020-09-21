<template>
  <div>
    <v-icon class="primary--text">mdi-cash-usd-outline</v-icon>
    <span class="subtitle-1 primary--text pl-2">Price</span>

    <!-- @change="log" -->
    <!-- :value.sync="selection" -->
    <!-- v-model.lazy="selection" -->

    <!-- listen to @change event not @input as default of v-model  -->
    <!-- the watcher will get the value one time after mouse up -->
    <!-- not every value slider move through -->
    <v-range-slider
      :value="selection"
      :max="max"
      :min="min"
      step="50"
      :thumb-size="38"
      thumb-label="always"
      @change="selection = $event"
    >
      >
      <template #thumb-label="props">
        {{ sliderValue(props.value) }}
      </template>
    </v-range-slider>
  </div>
</template>

<script>
  import { TRN_FILTER_MAX_PRICE } from '@/common/config.js';
  // import syncPriceWithUrl from './mixins/syncPriceWithUrl';

  import syncSelectionWithUrl from './mixins/syncSelectionWithUrl';
  import { multipleSelection, defaultSelection } from './mixins/selection';

  export default {
    mixins: [
      syncSelectionWithUrl('price'),
      multipleSelection('price'),
      defaultSelection('price'), // need to put in last to override method
    ],
    data: () => ({
      min: 0,
      max: TRN_FILTER_MAX_PRICE,
      selection: [0, TRN_FILTER_MAX_PRICE],
      defaultSelection: [0, TRN_FILTER_MAX_PRICE],
    }),

    methods: {
      sliderValue(value) {
        return value === TRN_FILTER_MAX_PRICE ? 'MAX' : `$${value.toString()}`;
      },
    },
  };
</script>

<style scoped></style>
