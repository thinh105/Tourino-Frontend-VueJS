<template>
  <v-row no-gutters class="py-1">
    <v-col cols="6" class="d-flex align-center">
      <v-icon class="primary--text">
        mdi-calendar-clock
      </v-icon>
      <span class="pl-1 text-body-2">{{ duration }} Day </span
      ><span v-if="duration > 1" class="text-body-2">s</span>
    </v-col>

    <v-col cols="6" class="d-flex align-center">
      <v-icon class="primary--text">
        mdi-cash-usd-outline
      </v-icon>
      <span class="pl-2 text-body-2"
        >${{ pricePerDay(price, duration) }} per day
      </span>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      price: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
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
