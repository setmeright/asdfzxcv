<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "DefaultLayout",
  computed: {
    ...mapState("user", ["account"]),
    ...mapGetters("user", ["isLoggedIn"]),
  },
  methods: mapActions("user", ["logout"]),
};
</script>

<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn" app flat>
      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="mr-5 text-caption"
        >Logged in as <strong>{{ account }}</strong></v-toolbar-title
      >
      <v-btn depressed color="white" @click="logout">
        <v-icon>mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
