<template>
  <div v-if="currentUser" style="max-width: 960px; margin: auto;">
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      dark
      :mini-variant="mini"
      mobile-breakpoint="960"
    >
      <template v-slot:img>
        <v-img
          src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg"
          gradient="360deg,rgba(25,32,72,.2), rgba(25,32,72,0.9)"
          height="100%"
        />
      </template>

      <v-row>
        <v-col align="center">
          <div v-if="!mini">
            <v-avatar class="my-4" size="150">
              <img :src="currentUser.photo" alt="" />
            </v-avatar>
            <p class="white--text text-h5">{{ currentUser.name }}</p>
            <p class="white--text">{{ currentUser.email }}</p>
          </div>
          <v-avatar v-else>
            <img :src="currentUser.photo" alt="" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-divider class="mb-2" />

      <v-list nav flat shaped>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data: () => ({
      drawer: true,
      mini: false,
      item: 1,
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
  };
</script>

<style scoped></style>
