<template>
  <div>
    <v-row class="mx-4" align="center" justify="center">
      <v-col cols="6">
        <v-autocomplete
          v-model="citySelection"
          clearable
          multiple
          :items="city"
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

    <v-row class="mx-4" align="center" justify="center">
      <v-col cols="6">
        <p class="subtitle-1 text--secondary text-center">
          Price
        </p>

        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          step="100"
          ticks
          thumb-label="always"
        />
      </v-col>

      <v-col>
        <v-select v-model="ratingSelection" :items="rating" label="Rating">
          <template #selection="{ item }">
            <v-chip color="primary" close @click:close="ratingSelection = ''">{{
              item
            }}</v-chip>
          </template>
        </v-select>
      </v-col>

      <v-col>
        <v-select
          v-model="durationSelection"
          :items="duration"
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
      max: 1000,
      range: [0, 1000],
      rating: ['⭐⭐⭐⭐ & Up', '⭐⭐⭐ & Up', '⭐⭐ & Up', '⭐ & Up'],
      duration: ['1 day', '1 to 3 days', '4 to 7 days', '7+ days'],
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
