<template>
  <div>
    <v-row class="my-n6" align="center" justify="center">
      <v-col cols="6">
        <TrnDestinations />
      </v-col>

      <v-col cols="6">
        <TrnTravelStyle />
      </v-col>
    </v-row>

    <v-row class="mt-n6" align="center" justify="center">
      <v-col cols="4" align="center" class="pt-8">
        <v-icon class="primary--text">mdi-cash-usd-outline</v-icon>
        <span class="subtitle-1 primary--text">Price</span>

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
  import TrnDestinations from './Destinations';
  import TrnTravelStyle from './TravelStyle';

  export default {
    components: {
      TrnDestinations,
      TrnTravelStyle,
    },
    data: () => ({
      search: null,
      travelStyle: null,
      min: 0,
      max: 6000,
      range: [0, 6000],
      rating: ['⭐⭐⭐⭐ and up', '⭐⭐⭐ and up', '⭐⭐ and up'],
      duration: ['1 day', '1 - 3 days', '4 - 7 days', '7+ days'],

      styleSelection: [],
      ratingSelection: '',
      durationSelection: '',
    }),
  };
</script>

<style scoped></style>
