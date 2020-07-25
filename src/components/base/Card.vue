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

  /* .base-card:active {
    background: linear-gradient(
      145deg,
      #aee7ff 0%,
      #f0f8ffd5 40%,
      #aee7ff 64%,
      #daf6fb 72%,
      #aee7ff 95%
    ) !important;
    } */

  /* background-size: cover !important; */

  /* .card-header {
    position: relative;
    margin-bottom: 1.5em;
  } */
</style>
