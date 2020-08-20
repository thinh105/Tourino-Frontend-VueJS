<template>
  <v-row no-gutters>
    <v-col cols="2">
      <TrnWishlistHeart class="ml-n2" />
    </v-col>

    <v-col cols="5" class="text-right">
      <div
        v-if="oldPrice"
        class="text-decoration-line-through text-h6 primary--text text--lighten-2 mt-n1"
      >
        ${{ priceFormatted(oldPrice) }}
      </div>
      <div
        v-if="oldPrice"
        class="text-body-2 secondary--text text--darken-2 mt-n1"
      >
        You save: ${{ oldPrice - price }}
      </div>
    </v-col>

    <v-col cols="5" class="text-center">
      <span class="text-h5 primary--text">$</span>
      <span class="text-h5 text-md-h4 primary--text">{{
        priceFormatted(price)
      }}</span>
    </v-col>
  </v-row>
</template>

<script>
  import TrnWishlistHeart from './WishlistHeart.vue';

  export default {
    components: {
      TrnWishlistHeart,
    },
    props: {
      price: {
        type: Number,
        required: true,
      },
      oldPrice: {
        type: Number,
        default: undefined,
      },
    },
    methods: {
      priceFormatted: (num) => num.toLocaleString(),
    },
  };
</script>

<style scoped></style>
