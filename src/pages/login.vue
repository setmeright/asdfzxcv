<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LoginPage",
  middleware: "no-auth",
  data() {
    return {
      formValid: false,
      account: "",
      password: "",
    };
  },
  computed: {
    ...mapState("user", { loginError: "fetchError" }),
    hasError: {
      get() {
        return !!this.$store.state.user.fetchError;
      },
      set() {
        this.$store.commit("user/setError", "");
      },
    },

    generalRules() {
      return [v => !!v || "Field is required"];
    },
  },
  methods: mapActions("user", ["login"]),
  head: {
    title: "Login",
  },
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-form v-model="formValid" @submit.prevent="login({ account, password })">
      <v-alert
        v-if="hasError"
        v-model="hasError"
        text
        color="red"
        dismissible
        >{{ loginError }}</v-alert
      >
      <v-card outlined class="pa-4" min-width="400">
        <v-text-field
          v-model="account"
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
