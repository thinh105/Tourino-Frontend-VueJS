<template>
  <div>
    <div v-if="highlights.length > 0">
      <v-row v-if="!expand" no-gutters>
        <v-col
          v-for="index in 3"
          :key="index"
          cols="12"
          class="secondary--text text--darken-2"
        >
          <span style="font-size: 1.3em" class="ml-1">🌟</span>
          <span class="ml-2">{{ highlights[index - 1] }}</span>
        </v-col>
        <div
          v-if="highlights.length - 3 > 0"
          class="primary--text"
          @click="
            expand = true;
            $emit('reload-grid');
          "
        >
          <span style="font-size: 1.3em" class="ml-1">🌟</span>
          <span class="ml-2" style="font-size: 0.8em"
            >+{{ highlights.length - 3 }} more</span
          >
        </div>
      </v-row>
      <v-row v-if="expand" no-gutters>
        <div>
          <div
            v-for="(highlight, i) in highlights"
            :key="i"
            class="secondary--text text--darken-3"
          >
            <span style="font-size: 1.3em" class="ml-1">🌟</span>
            <span class="ml-2">{{ highlight }}</span>
          </div>
        </div>
      </v-row>
    </div>
    <div v-else />
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
