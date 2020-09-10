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
      :thumb-size="35"
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
  import syncSelectionWithUrl from './mixins/syncSelectionWithUrl';

  export default {
    mixins: [syncSelectionWithUrl('price')],
    data: () => ({
      min: 0,
      max: 1000,
      // selection: undefined,
    }),

    methods: {
      sliderValue(value) {
        return value === 1000 ? '$999+' : `$${value.toString()}`;
      },
    },
  };
</script>

<style scoped></style>
