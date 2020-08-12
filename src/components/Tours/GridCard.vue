<template>
  <TrnBaseCard class="grid-card" style="max-width: 400px;">
    <div class="card-header">
      <router-link :to="'/tours/' + tour.slug">
        <v-img
          aspect-ratio="1.333333"
          class="white--text align-end rounded-tr-xl"
          :src="tour['imageCover']"
        >
          <Ribbon
            v-if="tour.rank"
            position="left-top"
            :text="tour.rank"
            color="#db6600"
            class="text-uppercase"
          />
        </v-img>

        <TrnGridCardName
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
          {{ tour.name }}</TrnGridCardName
        >
      </router-link>
    </div>

    <v-container class="px-4 py-0">
      <!-- <v-col cols="12" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-calendar-clock
          </v-icon>
          <span class="pl-2 text-body-2">{{ tour.duration }} Day </span
          ><span v-if="tour.duration > 1" class="text-body-2">s</span>
        </v-col>

        <v-col cols="12" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-hiking
          </v-icon>
          <span class="pl-2 text-body-2">{{ tour.duration }} Day </span>
        </v-col> -->

      <v-row no-gutters class="pt-4">
        <v-icon class="primary--text">
          mdi-map-marker-outline
        </v-icon>

        <v-col class="mx-4">
          <v-row>
            <span
              v-for="(destination, j) in tour.destinations"
              :key="j"
              class="text-body-2 mr-3 mb-1"
            >
              {{ destination }}
            </span>
          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters class="py-2">
        <v-col
          v-for="(highlight, i) in tour.highlights"
          :key="i"
          class="text-caption secondary--text text--darken-3"
          cols="auto"
        >
          🌟 {{ highlight }}
        </v-col>
      </v-row>

      <v-row no-gutters class="py-2">
        <v-col cols="6" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-calendar-clock
          </v-icon>
          <span class="pl-2 text-body-2">{{ tour.duration }} Day </span
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

      <v-row no-gutters class="pt-2">
        <v-icon class="primary--text">
          mdi-hiking
        </v-icon>

        <v-col class="mx-4">
          <v-row>
            <span
              v-for="(style, j) in tour.travelStyle"
              :key="j"
              class="text-body-2 mr-3 mb-1"
            >
              {{ style }}
            </span>
          </v-row>
        </v-col>

        <!-- <v-chip
          v-for="(tag, j) in tour.travelStyle"
          :key="j"
          small
          color="primary"
          class="ml-2 mt-1 text-body-2"
        >
          {{ tag }}
        </v-chip> -->
      </v-row>

      <v-row>
        <v-col cols="12" class="pb-1">
          <v-divider />
        </v-col>

        <v-col cols="5" class="d-flex align-center py-1">
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
          <span class="text-h6 pr-1 primary--text">$</span>

          <span class="text-h5 text-md-h4 primary--text">{{
            priceFormatted(tour.price)
          }}</span>
        </v-col>
      </v-row>
    </v-container>
  </TrnBaseCard>
</template>

<script>
  import Ribbon from 'vue-ribbon';
  import TrnGridCardName from './GirdCardName.vue';
  import TrnBaseCard from '../../components/base/Card';

  export default {
    components: {
      Ribbon,
      TrnGridCardName,
      TrnBaseCard,
    },
    props: ['tour'],
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
    margin-bottom: 2.5em;
  }

  .longCardName {
    bottom: -1.8em;
    font-size: 1.4em;
  }

  .mediumCardName {
    bottom: -1.3em;
    font-size: 1.7em;
  }

  .shortCardName {
    bottom: -1.3em;
    font-size: 1.8em;
  }

  .veryShortCardName {
    bottom: -0.5em;
    font-size: 1.8em;
  }
</style>
