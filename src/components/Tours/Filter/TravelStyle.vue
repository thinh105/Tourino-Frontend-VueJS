<template>
  <v-autocomplete
    v-model="selection"
    clearable
    multiple
    :items="travelStyle"
    item-text="value"
    prepend-inner-icon="mdi-hiking"
    label="Travel Style"
    :search-input.sync="search"
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
  import { FETCH_TRAVELSTYLE } from '@/store/type/actions.js';
  import filterMixin from './mixin';

  export default {
    mixins: [filterMixin('travelStyle', FETCH_TRAVELSTYLE)],
  };
</script>

<style scoped></style>
