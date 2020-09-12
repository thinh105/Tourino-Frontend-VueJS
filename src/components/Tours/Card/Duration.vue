<template>
  <v-row no-gutters>
    <v-col class="d-flex align-center">
      <v-icon class="primary--text"> mdi-calendar-clock </v-icon>
      <span class="pl-1 text-body-2">{{ dayQuantity }}</span>
    </v-col>
  </v-row>
</template>

<script>
  import pluralize from '@/common/pluralize.js';

  export default {
    props: {
      duration: {
        type: Number,
        required: true,
      },
    },
    computed: {
      dayQuantity() {
        return pluralize(this.duration, 'Day');
      },
    },
    methods: {
      pricePerDay: (price, duration) =>
        (price / duration).toFixed(2).toLocaleString(),
      priceFormatted: (num) => num.toLocaleString(),
    },
  };
</script>

<style scoped></style>
