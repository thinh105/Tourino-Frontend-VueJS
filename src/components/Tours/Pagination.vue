<template>
  <v-pagination
    v-model="page"
    :total-visible="visible"
    :length="length"
    :page="page"
    class="mb-4"
  />
</template>

<script>
  export default {
    data: () => ({
      page: 1,
      visible: 10,
      length: 16,
    }),
  };
</script>

<style scoped>
  .v-pagination__more,
  .v-pagination__navigation,
  button {
    outline: none !important;
  }
</style>
