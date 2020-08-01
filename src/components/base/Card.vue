<template>
  <v-card outlined class="base-card rounded-tr-xl rounded-bl-xl">
    <slot />
  </v-card>
</template>

<script>
  export default {};
</script>

<style scoped>
  .base-card {
    margin: auto;
    height: 100%;
    width: 100%;
    background: #0000;
  }

  .base-card:hover {
    background: rgb(241, 252, 255);
    transition: transform 500ms;
    transform: scale(1.05);
  }

  .base-card:not(:hover) {
    transition: transform 500ms;
    transform: scale(1);
  }
</style>
