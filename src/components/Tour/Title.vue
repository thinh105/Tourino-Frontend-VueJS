<template>
  <SkewText class="card-name text-h4 text-sm-h3 text-md-h2">
    <slot />
  </SkewText>
</template>

<script>
  import SkewText from '../base/SkewText.vue';

  export default {
    components: { SkewText },
  };
</script>

<style scoped>
  .card-name {
    text-align: right;
    position: absolute;
    max-width: 800px;
    bottom: 0.3em;
    line-height: 1.5em;
    right: 1em;
    width: 70%;
  }
</style>
