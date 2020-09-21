<template>
  <TrnBaseCard class="grid-card" style="max-width: 400px">
    <div class="card-header">
      <router-link :to="'/tours/' + tour.slug">
        <v-img
          aspect-ratio="1.4"
          class="white--text align-end rounded-tr-xl"
          :src="tour['imageCover']"
        >
          <TrnSavingRibbon :price="tour.price" :old-price="tour.oldPrice"
        /></v-img>

        <TrnCardName
          :class="
            tour.name.length > 60
              ? 'longCardName'
              : tour.name.length > 30
              ? 'mediumCardName'
              : tour.name.length > 17
              ? 'shortCardName'
              : 'veryShortCardName'
          "
        >
          {{ tour.name }}</TrnCardName
        >
      </router-link>
    </div>

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
  </TrnBaseCard>
</template>

<script>
  import TrnBaseCard from '@/components/base/Card';
  import TrnCardName from './CardName.vue';
  import TrnSavingRibbon from './SavingRibbon.vue';

  import TrnRating from './Rating.vue';
  import TrnHighlights from './Highlights.vue';
  import TrnDestinations from './Destinations.vue';
  import TrnTravelStyle from './TravelStyle.vue';
  import TrnDuration from './Duration.vue';
  import TrnPrice from './Price.vue';

  export default {
    components: {
      TrnSavingRibbon,
      TrnCardName,
      TrnBaseCard,

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

<style scoped>
  .v-image {
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  }

  .card-header {
    position: relative;
    margin-bottom: 2em;
  }

  .longCardName {
    bottom: -1.7em;
    font-size: 1.45em;
  }

  .mediumCardName {
    bottom: -1.2em;
    font-size: 1.6em;
  }

  .shortCardName {
    bottom: -1.3em;
    font-size: 1.8em;
  }

  .veryShortCardName {
    bottom: -0.7em;
    font-size: 1.8em;
  }
</style>
