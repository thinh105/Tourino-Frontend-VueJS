<template>
  <div>
    <template>
      <!-- :dense="$vuetify.breakpoint.mdAndDown" -->
      <v-timeline class="ma-8" :dense="$vuetify.breakpoint.mdAndDown">
        <v-timeline-item
          v-for="(day, i) in tours[0].timeline"
          :key="i"
          color="secondary"
        >
          <template v-slot:opposite>
            <span class="text-h6" style="max-width: 20px !important;">{{
              day.title
            }}</span>
          </template>
          <BaseCard>
            <div class="py-4">
              <v-card-title class="text-h6">
                {{ day.title }}
              </v-card-title>
              <v-card-text
                v-for="(action, j) in day.description"
                :key="j"
                class="text-body-1"
                v-text="action"
              />
            </div>
          </BaseCard>
        </v-timeline-item>
      </v-timeline>
    </template>
  </div>
</template>

<script>
  import BaseCard from '../components/base/Card';

  export default {
    components: {
      BaseCard,
    },
    data: () => ({
      tours: require('@/data/tour.json'), // eslint-disable-line global-require
    }),
  };
</script>

<style scoped>
  /* .v-timeline--dense {
    max-width: 80vh;
    margin: auto !important;
  } */
</style>
v
