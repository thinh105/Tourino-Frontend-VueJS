<template>
  <v-alert
    v-if="!!getError"
    :type="getError.type"
    transition="scroll-x-transition"
    :dismissible="$vuetify.breakpoint.mdAndUp"
    dense
    :prominent="$vuetify.breakpoint.mdAndUp"
    class="TrnAlert rounded-tr-xl rounded-bl-xl text-center text-caption text-md-body-1"
    @input="[CLEAR_ERROR]"
  >
    {{ getError.message }}
  </v-alert>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import { CLEAR_ERROR } from '../../store/type/actions';

  export default {
    computed: {
      ...mapGetters(['getError']),
    },

    methods: {
      ...mapActions([CLEAR_ERROR]),
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
