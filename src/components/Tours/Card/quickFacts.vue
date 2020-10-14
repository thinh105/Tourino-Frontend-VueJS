<template>
  <v-container class="px-4 mt-6 pb-0">
    <TrnRating
      class="mt-n8 pb-0"
      :rating="tour.rating"
      :reviews-quantity="tour.reviewsQuantity"
    />

    <TrnHighlights
      class="py-1"
      :highlights="tour.highlights"
      v-on="$listeners"
    />

    <TrnDestinations class="py-1" :destinations="tour.destinations" />

    <TrnTravelStyle
      class="py-1"
      :travel-style="tour.travelStyle"
      v-on="$listeners"
    />

    <TrnDuration class="py-2" :duration="tour.duration" />

    <!-- <v-row no-gutters>
        <v-col cols="12" class="py-1 px-1">
          <v-divider />
        </v-col>
      </v-row> -->
    <TrnPrice :old-price="tour.oldPrice" :price="tour.price" />
  </v-container>
</template>

<script>
  import TrnRating from './Rating.vue';
  import TrnHighlights from './Highlights.vue';
  import TrnDestinations from './Destinations.vue';
  import TrnTravelStyle from './TravelStyle.vue';
  import TrnDuration from './Duration.vue';
  import TrnPrice from './Price.vue';

  export default {
    components: {
      TrnRating,
      TrnHighlights,
      TrnDestinations,
      TrnTravelStyle,
      TrnDuration,

      TrnPrice,
    },

    props: {
      tour: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped></style>
