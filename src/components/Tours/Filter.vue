<template>
  <div>
    <v-row class="my-n6" align="center" justify="center">
      <v-col cols="6">
        <v-autocomplete
          v-model="citySelection"
          clearable
          multiple
          :items="city"
          prepend-inner-icon="mdi-map-marker-outline"
          label="Where do you want to go?"
          :search-input.sync="search"
          @change="search = ''"
        >
          <template #selection="{ item }">
            <v-chip
              close
              color="primary"
              @click:close="deleteChip(item, citySelection)"
              >{{ item }}</v-chip
            >
          </template>
        </v-autocomplete>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="styleSelection"
          :menu-props="{ maxHeight: 800 }"
          clearable
          multiple
          :items="travelStyles"
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
  export default {
    data: () => ({
      search: '',
      min: 0,
      max: 6000,
      range: [0, 6000],
      rating: ['⭐⭐⭐⭐ and up', '⭐⭐⭐ and up', '⭐⭐ and up', '⭐ and up'],
      duration: ['1 day', '1 - 3 days', '4 - 7 days', '7+ days'],
      citySelection: [],
      styleSelection: [],
      ratingSelection: '',
      durationSelection: '',
      travelStyles: [
        'Discovery',
        'Family',
        'In-depth Cultural',
        'Historical',
        'Food & Culinary',
        'Adventure',
        'Beach',
        'Hiking & Trekking',
        'Bicycle',
        'Sightseeing',
        'Boat',
        'River Cruise',
        'Ocean Cruise',
      ],
      city: ['Hanoi', 'Da Nang', 'Hue', 'Ha Long', 'Sapa', 'Hoi An'],
    }),
    methods: {
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
