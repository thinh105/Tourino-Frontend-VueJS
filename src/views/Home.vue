<template>
  <div class="home">
    <TrnCoreCarousels class="mt-n16" :items="items" />
    <!-- <TrnSkewText /> -->
    <div class="TrnGird">
      <div v-if="isLoading">
        <div class="text-h5 text-center mt-16 mb-3">Loading tours...</div>
        <v-progress-linear indeterminate color="secondary" />
      </div>
      <div v-else>
        <TrnGrid ref="grid" :tours="tours" />
        <!-- <Grid v-if="(!isLoading)" :tours="tours" /> -->
      </div>
    </div>
    <TrnSkewText />
  </div>
</template>

<script>
  // @ is an alias to /src

  import TrnCoreCarousels from '@/components/Carousels.vue';
  import TrnSkewText from '@/components/base/SkewText.vue';
  import TrnGrid from '@/components/Tours/Grid.vue';
  import { mapGetters } from 'vuex';
  import { FETCH_TOURS } from '../store/type/actions';

  export default {
    name: 'Home',
    components: {
      TrnCoreCarousels,
      TrnSkewText,
      TrnGrid,
    },

    data: () => ({
      items: [
        {
          src:
            'https://cdn1.ivivu.com/iVivu/2020/05/05/10/t-the-anam-nha-trang.png',
          text: 'Nghỉ Dưỡng Nha Trang',
          link: 'nhatrang',
        },
        {
          src: 'https://saigontourist.net/uploads/sliders/Slider-Phong-KS.jpg',
          text: 'Escape for a weekend from Las Vegas',
          link: 'phong-ks',
        },
        {
          src:
            'https://saigontourist.net/uploads/sliders/ThueXe_1030925341.jpg',
          text: 'Breathe in fresh mountain air this spring',
          link: 'Thuexe',
        },
        {
          src:
            'https://saigontourist.net/uploads/sliders/Slider-Maldives_389529229.jpg',
          text: 'Find hidden gems in your own city',
          link: 'Maldives',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          text: 'Hold your spot for Keukenhof Gardens',
          link: 'planet',
        },
      ],
    }),
    computed: {
      ...mapGetters(['isLoading', 'tours']),
    },
    mounted() {
      this.fetchTours();
    },
    methods: {
      async fetchTours() {
        await this.$store.dispatch(FETCH_TOURS);
        this.$refs.grid.$refs.stackRef.reflow();
      },
    },
  };
</script>

<style scoped>
  .TrnGird {
    max-width: 1280px;
    min-height: 800px;
    margin: auto;
  }
</style>
