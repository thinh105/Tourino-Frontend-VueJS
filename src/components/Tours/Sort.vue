<template>
  <v-row justify="center" align="center" class="my-6">
    <span class="text-body-1">Sort by:</span>
    <v-btn
      v-for="(button, i) in sortBy"
      :key="i"
      color="primary"
      rounded
      depressed
      text
      class="text-body-1"
    >
      <v-icon left>{{ button.icon }}</v-icon>

      {{ button.name }}
    </v-btn>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      sortBy: [
        {
          name: 'Price',
          icon: 'mdi-arrow-down',
        },
        {
          name: 'Price',
          icon: 'mdi-arrow-up',
        },
        {
          name: 'Avg. Rating',
          icon: 'mdi-star-outline',
        },
        {
          name: 'Reviews',
          icon: 'mdi-account-check-outline',
        },
        {
          name: 'New on Tourino',
          icon: 'mdi-clock-check-outline',
        },
        {
          name: 'Duration',
          icon: 'mdi-arrow-down',
        },
        {
          name: 'Duration',
          icon: 'mdi-arrow-up',
        },
      ],
    }),
  };
</script>

<style scoped></style>
