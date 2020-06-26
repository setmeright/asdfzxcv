<script>
export default {
  name: "LoginPage",
  middleware: "no-auth",
  data() {
    return {
      formValid: false,
      login: "",
      password: "",
    };
  },
  computed: {
    generalRules() {
      return [v => !!v || "Field is required"];
    },
  },
  methods: {
    submit() {
      console.log("submit login");
    },
  },
  head: {
    title: "Login",
  },
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-form v-model="formValid" @submit.prevent="submit">
      <v-card class="pa-4" min-width="400">
        <v-text-field
          v-model="login"
          :rules="generalRules"
          prepend-icon="mdi-account"
          label="Login"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="generalRules"
          prepend-icon="mdi-lock"
          type="password"
          label="Password"
        ></v-text-field>
        <v-card-actions>
          <v-spacer />
          <v-btn type="input" color="primary" :disabled="!formValid">
            Proceed
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-row>
</template>
