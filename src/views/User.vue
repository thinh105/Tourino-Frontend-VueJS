<template>
  <v-tabs vertical background-color="#003C71CC" color="secondary" grow dark>
    <v-tab href="#profile">
      My Profile
    </v-tab>
    <v-tab-item value="profile">
      <TrnProfile />
    </v-tab-item>

    <v-tab href="#tours">
      My Tours
    </v-tab>
    <v-tab-item value="tours">
      <TrnMyTours />
    </v-tab-item>

    <v-tab href="#password">
      Change Password
    </v-tab>
    <v-tab-item value="password">
      <TrnChangePass />
    </v-tab-item>
  </v-tabs>
</template>

<script>
  export default {};
</script>

<style scoped></style>
