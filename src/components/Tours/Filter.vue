<template>
  <v-container id="dropdown-example-1">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="Overflow Btn"
      target="#dropdown-example-1"
    />
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dropdownfont: ['Arial', 'Calibri', 'Courier', 'Verdana'],
    }),
  };
</script>
