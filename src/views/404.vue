<template>
  <div class="text-center mt-10">
    <p
      :class="$vuetify.breakpoint.mdAndUp ? 'big-font' : 'text-h1'"
      class="font-weight-thin error--text"
    >
      4
      <span
        ><v-icon
          :class="$vuetify.breakpoint.mdAndUp ? 'mx-n12' : 'mx-n6'"
          class="primary--text spin mb-7"
          size="1.4em"
          >mdi-compass</v-icon
        ></span
      >
      4
    </p>
    <p
      :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5'"
      class="mt-n6 font-weight-light primary--text"
    >
      looks like you got lost...
    </p>
    <v-btn large depressed class="mt-6" rounded color="error">
      <router-link
        style="text-decoration: none;"
        class="white--text text-h6"
        :to="'/'"
      >
        go back HOME
      </router-link>
    </v-btn>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .big-font {
    font-size: 12rem;
  }
  .spin {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(60deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
