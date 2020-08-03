<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col class="zing">
      <v-subheader>Price</v-subheader>

      <v-range-slider
        v-model="range"
        :max="max"
        :min="min"
        step="100"
        ticks
        thumb-label="always"
        class="align-center zing"
      />
    </v-col>

    <v-col>
      <v-col class="d-flex zing">
        <v-select clearable :items="rating" label="Rating" />
      </v-col>
    </v-col>

    <v-col>
      <v-col class="d-flex zing">
        <v-select clearable :items="duration" label="Duration" />
      </v-col>
    </v-col>

    <v-col>
      <v-col class="d-flex zing">
        <v-select
          clearable
          multiple
          :items="travelStyles"
          label="Travel Style"
        />
      </v-col>
    </v-col>

    <v-col>
      <v-col class="d-flex">
        <v-select clearable multiple :items="city" label="Must-see City" />
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      min: 0,
      max: 1000,
      range: [0, 1000],
      rating: ['⭐⭐⭐⭐ & Up', '⭐⭐⭐ & Up', '⭐⭐ & Up', '⭐ & Up'],
      duration: ['1 day', '1 to 3 days', '4 to 7 days', '7+ days'],
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
  };
</script>

<style scoped>
  .zing {
    width: 220px;
  }
</style>
