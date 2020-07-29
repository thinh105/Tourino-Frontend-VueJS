<template>
  <v-menu
    v-model="menu"
    open-on-hover
    close-delay="700"
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-avatar v-bind="attrs" v-on="on">
        <img :src="currentUser.photo" />
      </v-avatar>
    </template>

    <div>
      <v-list rounded flat dark color="#003C71CC">
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

  export default {
    data: () => ({
      menu: false,
      items: [
        { title: 'My Profile', icon: 'mdi-heart', route: '' },
        { title: 'My Tours', icon: 'mdi-star' },
        { title: 'Password', icon: 'mdi-lock' },
        { title: 'Log Out', icon: 'mdi-logout' },
      ],
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

<style scoped></style>
