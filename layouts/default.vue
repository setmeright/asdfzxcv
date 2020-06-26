<script>
export default {
  name: "DefaultLayout",
};
</script>

<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="mr-5 text-caption"
        >Logged in as <strong>Admin</strong></v-toolbar-title
      >
      <v-btn depressed color="white">
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
