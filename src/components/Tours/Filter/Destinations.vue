<template>
  <v-autocomplete
    v-model="selection"
    clearable
    multiple
    :items="destinations"
    item-text="value"
    prepend-inner-icon="mdi-map-marker-outline"
    label="What places do you want to travel?"
    :search-input.sync="search"
    :loading="isFieldLoading"
    no-data-text=""
    @change="search = ''"
    @click="getFieldList"
  >
    <template #selection="{ item }">
      <v-chip
        close
        color="primary"
        @click:close="removeFilterItem(item.value, selection)"
        >{{ item.value }}</v-chip
      >
    </template>

    <template #item="{ item }">
      <v-list-item-content>
        <span>{{ item.value }} - ( {{ item.count }} tours)</span>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
  import { FETCH_DESTINATIONS } from '@/store/type/actions.js';
  import filterMixin from './mixin';

  export default {
    mixins: [filterMixin('destinations', FETCH_DESTINATIONS)],
  };
</script>

<style scoped></style>
