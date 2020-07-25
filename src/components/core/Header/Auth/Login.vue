<template>
  <v-card class="rounded-bl-xl" flat dark color="#003C71CC">
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
          type="text"
          autofocus
          color="secondary"
          clearable
        />

        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          color="secondary"
          clearable
          @click:append="showPass = !showPass"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        fab
        small
        outlined
        class="mt-n5 mb-2"
        color="secondary"
        @click="onSubmit()"
      >
        <v-icon>mdi-key</v-icon>
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { LOGIN } from '@/store/type/actions';

  export default {
    name: 'TrnLogin',

    data: () => ({
      showPass: false,
      email: null,
      password: null,
    }),

    methods: {
      onSubmit() {
        console.log(this.email, this.password);
        this.$store
          .dispatch(LOGIN, {
            email: this.email,
            password: this.password,
          })
          .catch((e) => {
            console.log('Login Component', e);
          });
      },
    },
  };
</script>

<style scoped></style>
