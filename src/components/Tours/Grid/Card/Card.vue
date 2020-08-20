<template>
  <TrnBaseCard class="grid-card" style="max-width: 400px;">
    <div class="card-header">
      <router-link :to="'/tours/' + tour.slug">
        <v-img
          aspect-ratio="1.4"
          class="white--text align-end rounded-tr-xl"
          :src="tour['imageCover']"
        >
          <TrnSavingRibbon
            v-if="tour.oldPrice && tour.oldPrice > tour.price"
            :price="tour.price"
            :old-price="tour.oldPrice"
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
        :ratings-average="tour.ratingsAverage"
        :reviews-quantity="tour.reviewsQuantity"
      />

      <TrnHighlights :highlights="tour.highlights" v-on="$listeners" />

      <TrnDestinations :destinations="tour.destinations" />

      <TrnTravelStyle :travel-style="tour.travelStyle" v-on="$listeners" />

      <TrnDuration :duration="tour.duration" :price="tour.price" />

      <v-row no-gutters>
        <v-col cols="12" class="py-1">
          <v-divider />
        </v-col>
      </v-row>

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
  import TrnDuration from './DurationAndPriceperDay.vue';
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

    props: ['tour'],
  };
</script>

<style scoped>
  .v-image {
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  }

  .card-header {
    position: relative;
    /* margin-bottom: 2em; */
  }

  .longCardName {
    bottom: -1em;
    font-size: 1.45em;
  }

  .mediumCardName {
    bottom: -1em;
    font-size: 1.6em;
  }

  .shortCardName {
    bottom: -0.6em;
    font-size: 1.8em;
  }

  .veryShortCardName {
    bottom: -0.4em;
    font-size: 1.8em;
  }

  .test {
    /* display: flex; */
    width: 30%;
    margin: 0px;
    text-align: center;
    border: 3px solid green;
  }
</style>
