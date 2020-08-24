<template>
  <div v-if="reviewsQuantity" style="width: 23%;" class="text-center">
    <v-chip class="px-1" small color="secondary" text-color="white">
      <h3 class="px-1">{{ ratingsAverage }}</h3>
      <v-icon color="white">mdi-star</v-icon>
    </v-chip>

    <div class="mt-n1">
      <span class="text-caption">{{ reviewsQuantity }} review</span>
      <span v-if="reviewsQuantity > 1" class="text-caption">s</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      ratingsAverage: {
        type: Number,
        required: true,
      },
      reviewsQuantity: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style scoped></style>
