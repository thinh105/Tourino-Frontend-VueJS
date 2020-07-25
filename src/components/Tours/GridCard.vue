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
            tour.name.length > 50
              ? 'longCardName'
              : tour.name.length > 30
              ? 'mediumCardName'
              : 'shortCardName'
          "
        >
          {{ tour.name }}</TrnGridCardName
        >
      </router-link>
    </div>

    <v-chip
      v-for="(tag, j) in tour.tags"
      :key="j"
      color="primary"
      class="ml-4 mt-3 text-body-2"
    >
      Tour {{ tag }}
    </v-chip>

    <v-container class="px-4">
      <v-row>
        <v-col
          v-for="(highlight, i) in tour.highlights"
          :key="i"
          class="text-body-2 py-1 secondary--text text--darken-2 font-weight-medium"
          cols="auto"
        >
          🌟 {{ highlight }}
        </v-col>
      </v-row>

      <v-row no-gutters class="pt-2">
        <v-col cols="6" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-clock
          </v-icon>
          <span class="pl-2 pr-1 text-body-2 justify-center"
            >{{ tour.duration }} Ngày
          </span>
          <span v-if="tour.duration - 1" class="text-body-2 justify-center">
            {{ tour.duration - 1 }} Đêm</span
          >
        </v-col>

        <v-col cols="6" class="d-flex align-center">
          <v-icon class="primary--text">
            mdi-car-child-seat
          </v-icon>
          <span class="px-2 text-body-2"> {{ tour.transportation }} </span>
        </v-col>

        <v-col cols="12" class="py-2">
          <v-divider />
        </v-col>

        <v-col cols="5" class="d-flex align-center">
          <div v-if="tour.rating">
            <v-chip class="px-1" small color="orange" text-color="white">
              <h3 class="px-1">{{ tour.rating }}</h3>
              <v-icon>mdi-star</v-icon>
            </v-chip>
            <span class="text-caption pl-2">{{ tour.reviews }} review</span
            ><span v-if="tour.reviews > 1" class="text-caption">s</span>
          </div>
        </v-col>

        <v-col cols="7" class="d-flex align-center justify-center">
          <span class="text-h5 text-md-h4 primary--text text--lighten-2">{{
            priceFormatted(tour.price)
          }}</span>
          <span class="text-caption pl-2">VND</span>
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
      priceFormatted: (num) => num.toLocaleString('vi-VN'),
    },
  };
</script>

<style scoped>
  .longCardName {
    bottom: -1.7em;
    font-size: 1.4em;
  }

  .mediumCardName {
    bottom: -1.2em;
    font-size: 1.6em;
  }

  .shortCardName {
    bottom: -0.5em;
    font-size: 1.8em;
  }

  .grid-card {
  }

  .v-image {
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  }

  .card-header {
    position: relative;
    margin-bottom: 2em;
  }
</style>
