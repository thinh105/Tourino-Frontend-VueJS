<template>
  <div class="tour">
    <div style="position: relative;" class="mt-n16">
      <v-img
        height="70vh"
        class="white--text align-end tourino-clip-path-bottom"
        :src="tour['image-thumbnail']"
      />
      <TrnTourTitle> {{ tour.name }}</TrnTourTitle>
    </div>

    <v-container style="max-width: 1280px; margin: auto;">
      <TrnTourSubtitle> Những điểm đến bạn sẽ ghé thăm</TrnTourSubtitle>

      <p>
        - Đà Nẵng - Hội An - Huế
      </p>

      <v-divider />

      <TrnSubtitle
        class="text-h4"
        style="position: relative; max-width: 200px; text-align: center;"
      >
        Tour này có gì hay</TrnSubtitle
      >
      <p>
        - Chiêm ngưỡng sự phát triển hưng thịnh của thành phố Đà Nẵng – mệnh
        danh là thành phố đáng sống nhất Việt Nam. - Tham quan Phố cổ Hội An với
        nét đẹp cổ kính bên dòng sông Hoài. - Viếng chùa Linh Ứng Bãi Bụt -
        chiêm bái tượng Phật Quan Thế Âm cao nhất Việt Nam. - Khám phá Bà Nà
        Hills - bằng hệ thống cáp treo đạt 2 kỷ lục Guinness, ngắm toàn cảnh núi
        non hùng vỹ và tận hưởng khí hậu trong lành.
      </p>

      <!-- max-width: 70%; -->
      <TrnCarousels
        style="max-width: 70%; margin: auto;"
        class="tourino-clip-path my-16"
        :items="items"
      />
      <TrnTourSubtitle> Bạn sẽ đi đâu?</TrnTourSubtitle>
      <TrnTimeline />
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src

  import TrnCarousels from '@/components/Carousels.vue';
  import TrnTimeline from '@/components/Timeline.vue';
  import TrnTourTitle from '../components/Tour/Title.vue';
  import TrnTourSubtitle from '../components/Tour/Subtitle.vue';

  export default {
    name: 'Tour',
    components: {
      TrnTourTitle,
      TrnTourSubtitle,
      TrnCarousels,
      TrnTimeline,
    },
    data: () => ({
      tour: require('@/data/tour.json')[1], // eslint-disable-line global-require,
      items: [
        {
          src:
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/11/nha-trag-10.jpg',
          text: 'Bãi Tắm Nha Trang',
        },
        {
          src: 'https://cdn2.ivivu.com/2018/03/20/15/ivivu-bai-dai.jpg',
          text: 'Bãi Dài Nha Trang',
        },
        {
          src: 'https://cdn2.ivivu.com/2018/03/13/16/ivivu-i-resort.jpg',
          text: 'I Resort',
        },
        {
          src: 'https://cdn2.ivivu.com/2018/03/20/15/ivivu-vinpearl-land.jpg',
          text: 'Vinperland Nha Trang',
        },
        {
          src: 'https://cdn2.ivivu.com/2019/09/23/15/ivivu-nha-trang4.jpg',
          text: 'Vịnh Nha Trang',
        },
        {
          src:
            'https://cdn2.ivivu.com/2019/03/01/16/ivivu-tour-nha-trang-dao-bich-dam.jpg',
          text: 'Đảo Bích Đầm',
        },
      ],
    }),
  };
</script>

<style scoped>
  .tourino-clip-path {
    clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
  }

  .tourino-clip-path-bottom {
    clip-path: polygon(0 0, 100% 0%, 100% 70%, 0% 100%);
  }
</style>
