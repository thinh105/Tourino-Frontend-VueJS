<template>
  <v-row no-gutters>
    <v-icon style="font-size: 2em" class="primary--text pr-2"
      >mdi-map-marker-outline</v-icon
    >

    <!-- <v-col class="mx-4"> -->
    <v-col>
      <span v-for="(destination, j) in destinations" :key="j" class="pr-3 pb-1">
        <router-link
          style="text-decoration: none"
          :to="{ name: 'Tours', query: { destinations: [destination] } }"
        >
          {{ destination }}
        </router-link>
      </span>
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
