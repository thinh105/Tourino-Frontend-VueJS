<template>
  <div>
    <v-row class="my-n6" align="center" justify="center">
      <v-col cols="6">
        <v-autocomplete
          ref="select"
          v-model="destinationsSelection"
          clearable
          multiple
          :items="destinations"
          :loading="isDestinationsLoading"
          item-text="value"
          prepend-inner-icon="mdi-map-marker-outline"
          label="What places do you want to travel?"
          :search-input.sync="search"
          @change="search = ''"
          @click="getDes"
        >
          <template #selection="{ item }">
            <v-chip
              close
              color="primary"
              @click:close="deleteChip(item.value, destinationsSelection)"
              >{{ item.value }}</v-chip
            >
          </template>

          <template #item="{ item }">
            <v-list-item-content>
              <span>{{ item.value }} - ( {{ item.count }} tours)</span>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="styleSelection"
          :menu-props="{ maxHeight: 800 }"
          clearable
          multiple
          :items="travelStyle"
          prepend-inner-icon="mdi-hiking"
          label="Travel Style"
        >
          <template #selection="{ item }">
            <v-chip
              close
              color="primary"
              @click:close="deleteChip(item, styleSelection)"
              >{{ item }}</v-chip
            >
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-row class="mt-n6" align="center" justify="center">
      <v-col cols="4" align="center" class="pt-8">
        <v-icon class="primary--text">
          mdi-cash-usd-outline
        </v-icon>
        <span class="subtitle-1 primary--text">
          Price
        </span>

        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          step="100"
          ticks
          thumb-label="always"
        />
      </v-col>

      <v-col cols="4">
        <v-select
          v-model="ratingSelection"
          :items="rating"
          prepend-inner-icon="mdi-star-outline"
          label="Rating"
        >
          <template #selection="{ item }">
            <v-chip color="primary" close @click:close="ratingSelection = ''">{{
              item
            }}</v-chip>
          </template>
        </v-select>
      </v-col>

      <v-col cols="4">
        <v-select
          v-model="durationSelection"
          :items="duration"
          prepend-inner-icon="mdi-calendar-clock"
          label="Duration"
        >
          <template #selection="{ item }">
            <v-chip
              color="primary"
              close
              @click:close="durationSelection = ''"
              >{{ item }}</v-chip
            >
          </template>
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import {
    FETCH_DESTINATIONS,
    FETCH_TRAVELSTYLE,
  } from '../../store/type/actions.js';

  export default {
    data: () => ({
      search: null,
      min: 0,
      max: 6000,
      range: [0, 6000],
      rating: ['⭐⭐⭐⭐ and up', '⭐⭐⭐ and up', '⭐⭐ and up'],
      duration: ['1 day', '1 - 3 days', '4 - 7 days', '7+ days'],
      destinationsSelection: [],
      styleSelection: [],
      ratingSelection: '',
      durationSelection: '',
      isDestinationsLoading: false,
    }),
    computed: {
      ...mapGetters(['destinations', 'travelStyle']),
    },

    watch: {
      //   destinationsSelection() {
      //     // setTimeout(() => {
      //     //   this.$refs.select.isMenuActive = false;
      //     // }, 2000);
      //   },
      // async search() {
      //   // Items have already been loaded
      //   if (this.destinations.length > 0) return;
      //   this.isDestinationsLoading = true;
      //   // Lazily load input items
      //   // FETCH_DESTINATIONS();
      //   await store.dispatch(FETCH_DESTINATIONS);
      //   this.isDestinationsLoading = false;
      // },
    },

    mounted() {
      this.$watch('$refs.select.isMenuActive', () => {
        if (this.destinationsSelection.length > 0);
      });
    },
    methods: {
      ...mapActions([FETCH_DESTINATIONS, FETCH_TRAVELSTYLE]),
      getDes() {
        console.log('heng');
        return this.FETCH_DESTINATIONS;
      },
      deleteChip(removedItem, array) {
        for (let i = 0; i < array.length; i += 1) {
          // eslint-disable-next-line security/detect-object-injection
          if (array[i] === removedItem) {
            array.splice(i, 1);
          }
        }
      },
    },
  };
</script>

<style scoped></style>
