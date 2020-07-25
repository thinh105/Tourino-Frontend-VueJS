<template>
  <div v-if="!!getErrors">
    <v-alert
      :type="getErrors.type"
      transition="scale-transition"
      :dismissible="$vuetify.breakpoint.mdAndUp"
      dense
      :prominent="$vuetify.breakpoint.mdAndUp"
      class="TrnAlert rounded-tr-xl rounded-bl-xl text-center text-caption text-md-body-1"
      @input="closeAlert"
    >
      {{ getErrors.message }}
    </v-alert>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        alert: true,
      };
    },
    computed: {
      ...mapGetters(['getErrors']),
    },

    methods: {
      ...mapActions(['clearError']),
      closeAlert() {
        this.clearError();
      },
    },
  };
</script>

<style scoped>
  .TrnAlert {
    position: fixed;
    top: 0%;
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%);

    z-index: 4;
  }
</style>
