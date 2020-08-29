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
    :loading="isLoading"
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
  /*
  import { mapGetters, mapActions } from 'vuex';

  import {
    FETCH_DESTINATIONS,
    FETCH_TRAVELSTYLE,
    FETCH_TOURS,
  } from '@/store/type/actions.js';

  export default {
    data: () => ({
      search: null,
      destinationsSelection: [],
    }),
    computed: {
      ...mapGetters(['destinations', 'travelStyle']),
    },
    watch: {
      destinationsSelection() {
        // setTimeout(() => {
        //   this.$refs.select.isMenuActive = false;
        // }, 1000);
        this.getFilteredTours();
      },
    },
    methods: {
      ...mapActions([FETCH_DESTINATIONS, FETCH_TRAVELSTYLE, FETCH_TOURS]),
      getDestinations() {
        if (!this.destinations.length) this[FETCH_DESTINATIONS]();
      },
      getFilteredTours() {
        const filterQuery = this.destinationsSelection.length
          ? {
              destinations: { all: this.destinationsSelection },
            }
          : undefined;

        this[FETCH_TOURS](filterQuery);
      },
      removeFilterItem(removedItem, array) {
        for (let i = 0; i < array.length; i += 1) {
          // eslint-disable-next-line security/detect-object-injection
          if (array[i] === removedItem) {
            array.splice(i, 1);
          }
        }
      },
    },
  };
  */
</script>

<style scoped></style>
