<template>
  <TrnSkewText background class="card-name">
    <slot />
  </TrnSkewText>
</template>

<script>
  import TrnSkewText from '@/components/base/SkewText.vue';

  export default {
    components: { TrnSkewText },
  };
</script>

<style scoped>
  .card-name {
    text-align: right;
    position: absolute;
    line-height: 1.5em;
    right: 0.8em;
    width: 70%;
    /* font-size: 1.5em; */
  }

  .title-box span {
    font-weight: light;
  }
</style>
