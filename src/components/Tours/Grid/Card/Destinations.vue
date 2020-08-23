<template>
  <v-row no-gutters>
    <v-icon class="primary--text">
      mdi-map-marker-outline
    </v-icon>

    <v-col class="mx-4">
      <v-row>
        <span
          v-for="(destination, j) in destinations"
          :key="j"
          class="text-body-2 pr-3 pb-1"
        >
          {{ destination }}
        </span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      destinations: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped></style>
