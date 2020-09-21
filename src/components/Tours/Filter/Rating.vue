<template>
  <v-select
    v-model="selection"
    item-text="label"
    :items="rating"
    prepend-inner-icon="mdi-star-outline"
    label="Rating"
  >
    <template #selection="{ item }">
      <v-chip color="primary" close @click:close="selection = ''">
        {{ item.label }}</v-chip
      >
    </template>
  </v-select>
</template>

<script>
  import syncSelectionWithUrl from './mixins/syncSelectionWithUrl';
  import { singleSelection } from './mixins/selection';

  export default {
    mixins: [syncSelectionWithUrl('rating'), singleSelection('rating')],
    data: () => ({
      rating: [
        { value: '4', label: '⭐⭐⭐⭐ and up' },
        { value: '3', label: '⭐⭐⭐ and up' },
        { value: '2', label: '⭐⭐ and up' },
      ],
    }),
  };
</script>

<style scoped></style>
