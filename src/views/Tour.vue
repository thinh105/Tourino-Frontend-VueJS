<template>
  <div style="max-width: 1200px; margin: auto" class="primary--text">
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <!-- class="mt-n16" -->
        <div style="position: relative">
          <!-- class="tourino-clip-path-bottom" -->
          <!-- height="80vh" -->
          <!-- class="white--text align-end" -->
          <!-- <div>
            <v-carousel
              :key="i"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
            >
              <v-carousel-item v-for="(item, i) in tour.images" :key="i" eager>
                <v-img :src="item" eager />
              </v-carousel-item>
            </v-carousel>
          </div> -->

          <TrnCarousels :items="tour.images" />

          <!-- <TrnTourTitle>{{ tour.name }}</TrnTourTitle> -->
          <!-- <v-img
        height="80vh"
        class="white--text align-end tourino-clip-path-bottom"
        :src="tour.imageCover"
      /> -->
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <TrnTitle class="text-h4">{{ tour.name }}</TrnTitle>

        <TrnQuickFacts :tour="tour" style="font-size: 16px" v-on="$listeners" />
      </v-col>
    </v-row>

    <v-container class="mt-6">
      <v-row>
        <v-col cols="12" md="8">
          <div class="text-h4">Book With Extra Flexibility</div>
          <TrnBookFlexibility />

          <div class="text-h4">Introduction</div>
          <!-- <div class="my-2" style="white-space: pre-line; line-height: 1.4em" /> -->
          <div
            v-for="(line, i) in splitedSummary"
            :key="i"
            class="text-body-1 py-1"
          >
            {{ line }}.
          </div>

          <div class="text-h4">Your Travel, Your Tour</div>
          <TrnPrivateTourBlock />

          <div class="text-h4">Itinerary</div>
          <TrnTimeline :timeline="tour.timeline" />
        </v-col>
        <v-col cols="12" md="4"
          ><TrnCheckAvailability :duration="tour.duration" :price="tour.price"
        /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import store from '@/store';
  import TrnCarousels from '@/components/Carousels.vue';
  import TrnTimeline from '@/components/Timeline.vue';
  import TrnBookFlexibility from '@/components/Tour/BookFlexibilityBlock.vue';
  import TrnPrivateTourBlock from '@/components/Tour/PrivateTourBlock.vue';
  import TrnCheckAvailability from '@/components/Tour/CheckAvailability.vue';

  import TrnTitle from '@/components/Tour/Title.vue';

  import { mapGetters } from 'vuex';
  import TrnQuickFacts from '@/components/Tours/Card/quickFacts.vue';

  import { FETCH_TOUR, FETCH_REVIEWS } from '../store/type/actions.js';

  export default {
    name: 'Tour',
    components: {
      TrnBookFlexibility,
      TrnPrivateTourBlock,
      TrnCarousels,
      TrnCheckAvailability,
      TrnTimeline,
      TrnQuickFacts,
      TrnTitle,
    },

    props: {
      slug: {
        type: String,
        required: true,
      },
    },

    beforeRouteEnter(to, from, next) {
      Promise.all([
        store.dispatch(FETCH_TOUR, to.params.slug),
        // store.dispatch(FETCH_REVIEWS, to.params.slug),
      ]).then(() => {
        next();
      });
    },

    computed: {
      ...mapGetters(['tour']),
      splitedSummary() {
        return (
          this.tour.summary
            .trim()
            // .substring(0, this.tour.summary.length - 1)
            .split(/\. |\. |! |\n/)
        );
      },
    },
  };
</script>

<style scoped>
  .tourino-clip-path {
    clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
  }

  .tourino-clip-path-bottom {
    clip-path: polygon(0 0, 100% 0%, 100% 75%, 0% 100%);
  }

  .tour-page {
    max-width: 800px;
    /* max-height: 800px; */
    /* margin: auto; */
  }
</style>
