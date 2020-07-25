<template>
  <v-menu v-model="menu" offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small outlined fab color="secondary" v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card flat class="TrnAuthCard">
      <v-tabs background-color="#003C71CC" color="secondary" center grow dark>
        <v-tab href="#login" class="text-capitalize">
          Login
        </v-tab>
        <v-tab-item value="login">
          <TrnLogin />
        </v-tab-item>

        <v-tab href="#signup" class="text-capitalize">
          Sign Up
        </v-tab>
        <v-tab-item value="signup">
          <TrnSignUp />
        </v-tab-item>

        <v-tab href="#forgotPassword" class="text-capitalize">
          Forgot Password
        </v-tab>
        <v-tab-item value="forgotPassword">
          <TrnForgetPass />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-menu>
</template>

<script>
  import TrnLogin from './Login.vue';
  import TrnSignUp from './Signup.vue';
  import TrnForgetPass from './ForgetPass.vue';

  export default {
    components: {
      TrnLogin,
      TrnSignUp,
      TrnForgetPass,
    },
    data: () => ({ menu: false }),
  };
</script>

<style>
  .TrnAuthCard {
    max-width: 400px;
    background-color: #0000 !important;
  }

  .theme--light.v-tabs-items,
  .theme--light.v-card {
    background-color: #0000 !important;
    color: #0000;
  }

  .v-sheet.v-card {
    border-radius: 0;
  }
</style>
