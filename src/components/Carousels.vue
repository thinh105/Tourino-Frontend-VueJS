<template>
  <v-carousel
    cycle
    hide-delimiter-background
    delimiter-icon="mdi-star"
    show-arrows-on-hover
    height="80vh"
    transition="scroll-y-transition"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <router-link v-if="item.link" :to="item.link" class="image-link" />
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
    props: ['items'],
  };
</script>

<style scoped>
  /* clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%); */
  .v-carousel {
  }

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
