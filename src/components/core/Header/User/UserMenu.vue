<template>
  <!-- open-on-hover
    close-delay="700" -->
  <v-menu
    v-model="menu"
    offset-y
    :transition="TRN_GLOBAL_TRANSITION"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-avatar v-bind="attrs" v-on="on">
        <img :src="currentUser.photo" />
      </v-avatar>
    </template>

    <div>
      <v-list
        class="rounded-tr-xl rounded-bl-xl"
        rounded
        flat
        dark
        color="#003C71CC"
      >
        <p class="text-h5 secondary--text text-center mt-2 mx-4">
          {{ currentUser.name }}
        </p>
        <p class="text-body-2 text-center mt-n3">{{ currentUser.email }}</p>
        <v-divider />
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="menuSelection(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content class="ml-n3">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LOGOUT } from '@/store/type/actions';

  import { TRN_GLOBAL_TRANSITION } from '@/common/config.js';

  export default {
    data: () => ({
      menu: false,
      items: [
        { title: 'My Profile', icon: 'mdi-face', route: '' },
        { title: 'My Tours', icon: 'mdi-heart' },
        { title: 'Password', icon: 'mdi-lock' },
        { title: 'Log Out', icon: 'mdi-logout' },
      ],

      TRN_GLOBAL_TRANSITION,
    }),
    computed: {
      ...mapGetters(['currentUser']),
    },

    methods: {
      menuSelection(index) {
        switch (index) {
          case 0:
            this.$router.push('/User/Profile');
            break;
          case 3:
            this.$store.dispatch(LOGOUT);
            if (this.$route.name !== 'Home') this.$router.push('/');
            break;
          default:
        }
        this.menu = false;
      },
    },
  };
</script>

<style scoped>
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0 !important;
  }
  .v-menu__content {
    color: #0000;
    top: 75px !important;
    max-width: 100%;
    box-shadow: none;
  }
</style>
