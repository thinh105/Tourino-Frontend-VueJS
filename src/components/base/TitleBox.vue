<template>
  <div class="title-box white--text">
    <span><slot /></span>
  </div>
</template>

<script>
  export default {};
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
    font-weight: bold;
    padding: 0.3em;
    box-decoration-break: clone;
    /* background-image: linear-gradient(to bottom, #0084ff, #65b5f694); */
    /* background-image: linear-gradient(
       160deg,
       rgb(0, 98, 211) 0%,
       rgba(4, 136, 151, 0.65) 51%,
       rgb(0, 132, 255) 75%
     ); */
    /* background-color: #03e5b898; */

    /* background-color: #03e5b7; */
    background-image: linear-gradient(
      to bottom right,
      #0056c7 0%,
      #00a597af 84%
    );
  }
</style>
