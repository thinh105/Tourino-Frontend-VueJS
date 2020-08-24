<template>
  <div class="TrnAlert">
    <v-alert
      :value="!!getError.message"
      :type="getError.type"
      :transition="TRN_GLOBAL_TRANSITION"
      :dismissible="$vuetify.breakpoint.mdAndUp"
      dense
      :prominent="$vuetify.breakpoint.mdAndUp"
      class="rounded-tr-xl rounded-bl-xl text-center text-caption text-md-body-1"
      min-width="400px"
      @input="[CLEAR_ERROR]"
    >
      {{ getError.message }}
    </v-alert>
  </div>

  <!-- <div class="TrnAlert">
    <v-alert
      :type="getError.type"
      class="rounded-tr-xl rounded-bl-xl text-center text-caption text-md-body-1"
      transition="scroll-y-transition"
      min-width="320px"
      :value="!!getError.message"
      >{{ getError.message }}</v-alert
    >
  </div> -->
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { TRN_GLOBAL_TRANSITION } from '@/common/config.js';
  import { CLEAR_ERROR } from '../../store/type/actions';

  export default {
    data: () => ({
      TRN_GLOBAL_TRANSITION,
    }),
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
    position: absolute;
    top: 0%;
    left: 50%;
    z-index: 4;
    transform: translate(-50%);

    /* position the left edge of the element at the middle of the parent */
  }
</style>
