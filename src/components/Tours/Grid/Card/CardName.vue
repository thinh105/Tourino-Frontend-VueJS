<template>
  <TitleBox class="card-name">
    <slot />
  </TitleBox>
</template>

<script>
  import TitleBox from '@/components/base/TitleBox.vue';

  export default {
    components: { TitleBox },
  };
</script>

<style scoped>
  .card-name {
    text-align: right;
    position: absolute;
    line-height: 1.5em;
    right: 1em;
    width: 70%;
    /* font-size: 1.5em; */
  }

  .title-box span {
    font-weight: light;
  }
</style>
