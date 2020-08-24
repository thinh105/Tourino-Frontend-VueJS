<template>
  <div>
    <v-row v-if="!expand" no-gutters>
      <v-col
        v-for="index in 3"
        :key="index"
        cols="12"
        class="text-body-2 secondary--text text--darken-1"
      >
        <span class="ml-1">🌟</span>
        <span class="ml-2">{{ highlights[index - 1] }}</span>
      </v-col>
      <div
        v-if="highlights.length - 3 > 0"
        class="text-caption primary--text"
        @click="
          expand = true;
          $emit('reloadGrid');
        "
      >
        <span class="ml-1">🌟</span>
        <span class="ml-2">+{{ highlights.length - 3 }} more</span>
      </div>
    </v-row>
    <v-row v-if="expand" no-gutters>
      <div
        v-for="(highlight, i) in highlights"
        :key="i"
        class="text-body-2 secondary--text text--darken-3"
      >
        <span class="ml-1">🌟</span>
        <span class="ml-2">{{ highlight }}</span>
      </div>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      highlights: {
        type: Array,
        required: true,
      },
    },
    data: () => ({
      expand: false,
    }),
  };
</script>

<style scoped></style>
