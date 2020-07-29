<template>
  <v-card class="base-card rounded-tr-xl rounded-bl-xl">
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
    background: white;
  }

  .base-card:hover {
    background: linear-gradient(
      145deg,
      #b8e7fa 0%,
      #f9fdfd 30%,
      #cbedfcb7 51%,
      #f3f9fb 76%
    ) !important;
    transition: transform 500ms;
    transform: scale(1.05);
  }

  .base-card:not(:hover) {
    transition: transform 500ms;
    transform: scale(1);
  }
</style>
