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
      <TrnWishlistHeart />
    </div>

    <v-container class="px-4 py-0">
      <v-row no-gutters>
        <v-icon class="primary--text">
          mdi-map-marker-outline
        </v-icon>

        <v-col class="mx-4">
          <v-row>
            <span
              v-for="(destination, j) in tour.destinations"
              :key="j"
              class="text-body-2 pr-3 pb-1"
            >
              {{ destination }}
            </span>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="!expandHighlights" no-gutters class="py-1">
        <v-col
          v-for="index in 3"
          :key="index"
          cols="12"
          class="text-body-2 secondary--text text--darken-3"
        >
          <span class="ml-1">🌟</span>
          <span class="ml-2">{{ tour.highlights[index - 1] }}</span>
        </v-col>
        <div
          v-if="tour.highlights.length - 3 > 0"
          class="text-body-2 primary--text"
          @click="
            expandHighlights = true;
            $emit('reloadGrid');
          "
        >
          <span class="ml-1">🌟</span>
          <span class="ml-2">+{{ tour.highlights.length - 3 }} more</span>
        </div>
      </v-row>

      <v-row v-if="expandHighlights" no-gutters class="py-1">
        <div
          v-for="(highlight, i) in tour.highlights"
          :key="i"
          class="text-body-2 secondary--text text--darken-3"
        >
          <span class="ml-1">🌟</span>
          <span class="ml-2">{{ highlight }}</span>
        </div>
      </v-row>

      <v-row no-gutters class="py-1">
        <v-col cols="6" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-calendar-clock
          </v-icon>
          <span class="pl-1 text-body-2">{{ tour.duration }} Day </span
          ><span v-if="tour.duration > 1" class="text-body-2">s</span>
        </v-col>

        <v-col cols="6" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-cash-usd-outline
          </v-icon>
          <span class="pl-2 text-body-2"
            >{{ pricePerDay(tour.price, tour.duration) }} $ per day
          </span>
        </v-col>
      </v-row>

      <v-row no-gutters class="py-1">
        <v-icon class="primary--text">
          mdi-hiking
        </v-icon>

        <v-col class="mx-4">
          <v-row v-if="!expandTravelStyle">
            <span v-for="index in 3" :key="index" class="text-body-2 mr-3 mb-1">
              {{ tour.travelStyle[index - 1] }}
            </span>
            <span
              v-if="tour.travelStyle.length - 3 > 0"
              class="text-body-2 secondary--text text--darken-2"
              @click="
                expandTravelStyle = true;
                $emit('reloadGrid');
              "
            >
              +{{ tour.travelStyle.length - 3 }} more
            </span>
          </v-row>

          <v-row v-if="expandTravelStyle">
            <span
              v-for="(style, j) in tour.travelStyle"
              :key="j"
              class="text-body-2 mr-3 mb-1"
            >
              {{ style }}
            </span>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="py-1">
          <v-divider />
        </v-col>

        <v-col cols="5" class="d-flex align-center">
          <div v-if="tour.ratingsQuantity">
            <v-chip class="px-1" small color="orange" text-color="white">
              <h3 class="px-1">{{ tour.ratingsAverage }}</h3>
              <v-icon>mdi-star</v-icon>
            </v-chip>
            <span class="text-caption pl-2"
              >{{ tour.ratingsQuantity }} review</span
            ><span v-if="tour.reviews > 1" class="text-caption">s</span>
          </div>
        </v-col>

        <v-col cols="7" class="d-flex align-center justify-center py-1">
          <span
            v-if="tour.oldPrice"
            class="text-decoration-line-through pr-2 text-body-1 primary--text text--lighten-2"
            >${{ priceFormatted(tour.oldPrice) }}
          </span>
          <span class="text-h6 primary--text">$</span>

          <span class="text-h5 text-md-h4 primary--text">{{
            priceFormatted(tour.price)
          }}</span>
        </v-col>
      </v-row>
    </v-container>
  </TrnBaseCard>
</template>

<script>
  import TrnBaseCard from '@/components/base/Card';

  import TrnCardName from './CardName.vue';
  import TrnSavingRibbon from './SavingRibbon.vue';
  import TrnWishlistHeart from './WishlistHeart.vue';

  export default {
    components: {
      TrnSavingRibbon,
      TrnCardName,
      TrnBaseCard,
      TrnWishlistHeart,
    },

    props: ['tour'],

    data: () => ({
      expandTravelStyle: false,
      expandHighlights: false,
    }),

    methods: {
      pricePerDay: (price, duration) =>
        (price / duration).toFixed(2).toLocaleString(),
      priceFormatted: (num) => num.toLocaleString(),
    },
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
    bottom: 1em;
    font-size: 1.4em;
  }

  .mediumCardName {
    bottom: 0.5em;
    font-size: 1.7em;
  }

  .shortCardName {
    bottom: 0.5em;
    font-size: 1.8em;
  }

  .veryShortCardName {
    bottom: 1.5em;
    font-size: 1.8em;
  }
</style>
