<template>
  <v-pagination
    v-model="page"
    circle
    :length="length"
    :page="page"
    :total-visible="visible"
    class="mb-4"
  />
</template>

<script>
  export default {
    data: () => ({
      length: 16,
      page: 1,
      visible: 10,
    }),
  };
</script>

<style scoped></style>
