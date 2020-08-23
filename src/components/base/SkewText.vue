<template>
  <div class="title-box">
    <!-- <span :class="{ background }"><slot /></span> -->
    <span v-if="background" class="background"><slot /></span>
    <div v-else class="d-flex align-center justify-end"><slot /></div>
  </div>
</template>

<script>
  export default {
    props: {
      background: {
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .title-box {
    transform: rotate(-6deg) skew(-6deg);
  }

  /*   text-align: right;
     position: absolute;
     bottom: 0.3em;
     line-height: 1.5em;
     right: 1em;
     width: 70%;
   } */

  .title-box span {
    font-weight: 500;
    padding: 0.35em;
    box-decoration-break: clone;
  }

  .background {
    background-image: linear-gradient(
      to bottom right,
      #0056c7 0%,
      #00a597af 84%
    );
    color: white;
  }
</style>
