<template>
  <TitleBox class="card-name text-h4">
    <slot />
  </TitleBox>
</template>

<script>
  import TitleBox from '../base/TitleBox.vue';

  export default {
    components: { TitleBox },
  };
</script>

<style scoped>
  .card-name {
    text-align: center;
    margin: auto;
    max-width: 300px;
    bottom: 0.3em;
    line-height: 1.5em;
    width: 70%;
  }
</style>
