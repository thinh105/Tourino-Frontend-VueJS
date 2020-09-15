<template>
  <v-row no-gutters>
    <v-icon class="primary--text"> mdi-hiking </v-icon>

    <v-col class="mx-4" align="center">
      <v-row v-if="!expand">
        <span v-for="index in 2" :key="index" class="text-body-2 mr-3 mb-1">
          <router-link
            style="text-decoration: none"
            :to="{
              path: 'tours',
              query: { travelStyle: [travelStyle[index - 1]] },
            }"
          >
            {{ travelStyle[index - 1] }}
          </router-link>
        </span>
        <span
          v-if="travelStyle.length - 2 > 0"
          class="text-caption secondary--text text--darken-2"
          @click="
            expand = true;
            $emit('reload-grid');
          "
        >
          +{{ travelStyle.length - 2 }} more
        </span>
      </v-row>

      <v-row v-if="expand">
        <span
          v-for="(style, j) in travelStyle"
          :key="j"
          class="text-body-2 mr-3 mb-1"
        >
          <router-link
            style="text-decoration: none"
            :to="{
              path: 'tours',
              query: { travelStyle: [style] },
            }"
          >
            {{ style }}
          </router-link>
        </span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      travelStyle: {
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
