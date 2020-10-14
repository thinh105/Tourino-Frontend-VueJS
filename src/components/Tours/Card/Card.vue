<template>
  <TrnBaseCard class="grid-card" style="max-width: 400px">
    <div class="card-header">
      <router-link :to="'/tour/' + tour.slug">
        <v-img
          aspect-ratio="1.4"
          class="white--text align-end rounded-tr-xl"
          :src="tour['imageCover']"
        >
          <TrnSavingRibbon :price="tour.price" :old-price="tour.oldPrice"
        /></v-img>

        <!-- :class="
            tour.name.length > 60
              ? 'longCardName'
              : tour.name.length > 30
              ? 'mediumCardName'
              : tour.name.length > 17
              ? 'shortCardName'
              : 'veryShortCardName'
          " -->

        <TrnCardName :name="tour.name" />
      </router-link>
    </div>

    <TrnQuickFacts :tour="tour" style="font-size: 14px" v-on="$listeners" />
  </TrnBaseCard>
</template>

<script>
  import TrnBaseCard from '@/components/base/Card';
  import TrnCardName from './CardName.vue';
  import TrnSavingRibbon from './SavingRibbon.vue';

  import TrnQuickFacts from './quickFacts.vue';

  export default {
    components: {
      TrnSavingRibbon,
      TrnCardName,
      TrnBaseCard,

      TrnQuickFacts,
    },

    props: {
      tour: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .v-image {
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  }

  .card-header {
    position: relative;
    margin-bottom: 2em;
  }
</style>
