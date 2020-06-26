<script>
export default {
  name: "IndexPage",
  methods: {
    login() {
      console.log("login");
    },
  },
};
</script>

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="pa-4" min-width="400">
        <!-- <v-card-title class="headline">
          Dashboard
        </v-card-title> -->
        <v-text-field label="Login"></v-text-field>
        <v-text-field type="password" label="Password"></v-text-field>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click.prevent="login">
            Proceed
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
