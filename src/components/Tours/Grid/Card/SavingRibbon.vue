<template>
  <div class="savingRibbon">
    <span class="savingValue white--text text-h6">-{{ sale }}%</span>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: Number,
        required: true,
      },
      oldPrice: {
        type: Number,
        required: true,
      },
    },
    computed: {
      sale() {
        return (1 - this.price / this.oldPrice).toFixed(2) * 100;
      },
    },
  };
</script>

<style scoped>
  .savingRibbon {
    /* border-top-color: transparent;
    border-left-color: rgb(255, 255, 255);
    border-bottom-color: transparent;
    border-right-color: transparent; */

    position: absolute;

    width: 0px;
    height: 0px;

    left: 0px;
    top: 0px;

    border-color: #0000 #0000 #0000 #e74c3c;
    border-style: solid;
    border-width: 0px 0px 60px 60px;
  }

  .savingValue {
    position: relative;
    display: block;

    right: 62px;
    width: 60px;

    transform: rotate(315deg);
  }
</style>
