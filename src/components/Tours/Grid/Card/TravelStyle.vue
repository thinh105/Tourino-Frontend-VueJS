<template>
  <v-row no-gutters class="py-1">
    <v-icon class="primary--text">
      mdi-hiking
    </v-icon>

    <v-col class="mx-4">
      <v-row v-if="!expand">
        <span v-for="index in 3" :key="index" class="text-body-2 mr-3 mb-1">
          {{ travelStyle[index - 1] }}
        </span>
        <span
          v-if="travelStyle.length - 3 > 0"
          class="text-body-2 secondary--text text--darken-2"
          @click="
            expand = true;
            $emit('reloadGrid');
          "
        >
          +{{ travelStyle.length - 3 }} more
        </span>
      </v-row>

      <v-row v-if="expand">
        <span
          v-for="(style, j) in travelStyle"
          :key="j"
          class="text-body-2 mr-3 mb-1"
        >
          {{ style }}
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
