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

    <v-row class="mt-n8" align="center" justify="center">
      <v-col cols="4" align="center" class="pt-8">
        <TrnPrice />
      </v-col>

      <v-col cols="4">
        <TrnRating />
      </v-col>

      <v-col cols="4">
        <TrnDuration />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import TrnDestinations from './Destinations';
  import TrnTravelStyle from './TravelStyle';
  import TrnPrice from './Price';
  import TrnRating from './Rating';
  import TrnDuration from './Duration';

  export default {
    components: {
      TrnDestinations,
      TrnTravelStyle,
      TrnPrice,
      TrnRating,
      TrnDuration,
    },
  };
</script>

<style scoped></style>
