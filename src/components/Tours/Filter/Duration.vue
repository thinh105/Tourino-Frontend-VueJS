<template>
  <v-select
    v-model="selection"
    hide-details
    item-text="label"
    :items="duration"
    prepend-icon="mdi-calendar-clock"
    label="Duration"
    :class="{ 'trn-no-border': hasSelectionValue() }"
  >
    <template #selection="{ item }">
      <v-chip
        class="trn-chip-center"
        color="primary"
        close
        @click:close="selection = ''"
        >{{ item.label }}</v-chip
      >
    </template>
  </v-select>
</template>

<script>
  import syncSelectionWithUrl from './mixins/syncSelectionWithUrl';
  import { multipleSelection } from './mixins/selection';

  export default {
    mixins: [syncSelectionWithUrl('duration'), multipleSelection('duration')],

    data: () => ({
      duration: [
        { value: ['1', '4'], label: '1 - 4 days' },
        { value: ['5', '7'], label: '5 - 7 days' },
        { value: ['8', '10'], label: '8 - 10 days' },
        { value: ['11', '14'], label: '11 - 14 days' },
        { value: ['15'], label: '14+ days' },
      ],
      selection: '',
    }),
  };
</script>
