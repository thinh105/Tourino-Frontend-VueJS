<template>
  <!-- open-on-hover
    close-delay="700" -->
  <v-menu v-model="menu" offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined small fab color="secondary" v-bind="attrs" v-on="on">
        <v-icon large>mdi-account</v-icon>
      </v-btn>
    </template>
    <TrnAuthTab />
  </v-menu>
</template>

<script>
  import TrnAuthTab from './AuthTab.vue';

  export default {
    components: {
      TrnAuthTab,
    },
    data: () => ({ menu: false }),
  };
</script>

<style></style>
