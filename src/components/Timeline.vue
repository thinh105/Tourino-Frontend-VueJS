<template>
  <!-- :dense="$vuetify.breakpoint.mdAndDown" -->
  <v-timeline dense class="ml-n11 mr-10">
    <v-timeline-item
      v-for="(day, i) in timeline"
      :key="i"
      color="secondary"
      fill-dot
    >
      <template v-slot:icon>
        <span class="white--text">{{ i + 1 }}</span>
      </template>
      <BaseCard class="my-4 mx-auto">
        <div class="py-4">
          <v-card-title class="text-h6 primary--text text-capitalize">{{
            capitalizeFristLetter(day.title)
          }}</v-card-title>

          <!--  -->
          <v-card-text>
            <!-- <div
                  v-for="(line, i) in splitedSummary(day.description)"
                  :key="i"
                  class="text-body-1"
                >
                  {{ line }}.
                </div> -->

            <div style="white-space: pre-line; line-height: 1.6em">
              {{ day.description }}
            </div>
          </v-card-text>
        </div>
      </BaseCard>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  import BaseCard from '../components/base/Card';

  export default {
    components: {
      BaseCard,
    },
    props: {
      timeline: {
        type: Array,
        required: true,
      },
    },
    methods: {
      splitedSummary(string) {
        // return string.substring(0, string.length - 1).split(/\. |\. |! |\n/);
        return string.trim().split(/\. |\. |! /);
      },
      capitalizeFristLetter(string) {
        return string.toLowerCase();
      },
    },
    // data: () => ({
    //   tours: require('@/data/tour.json'), // eslint-disable-line global-require
    // }),
  };
</script>

<style scoped>
  /* .v-timeline--dense {
      max-width: 80vh;
      margin: auto !important;
    } */

  .trn-capital::first-letter {
    text-transform: uppercase;
  }
</style>
v
