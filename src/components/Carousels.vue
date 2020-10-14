<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    vertical
    progress
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      eager
      :src="item.src ? item.src : item"
    >
      <router-link v-if="link" :to="item.link" class="image-link" />
      <v-row class="fill-height pb-6" align="end" justify="start">
        <v-col cols="auto" md="1" />
        <v-col cols="auto">
          <!-- <v-sheet color="#FF9800AA" class="rounded-xl pa-2">
            <div
              class="text-h5 text-md-h4 text-sm-center white--text px-2 py-1"
            >
              {{ item.text }}
            </div>
          </v-sheet> -->
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: undefined,
        // required: true,
      },
      link: {
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .image-link {
    /* background-color: green; */
    top: 12%;
    left: 60px;
    right: 60px;
    bottom: 36px;
    position: absolute;
    z-index: 9;
  }
</style>
