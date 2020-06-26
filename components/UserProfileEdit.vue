<script>
import { validationRules } from "@/utils";

export default {
  name: "UserProfileEdit",
  data() {
    const { name, email, img } = this.$store.state.user.profile;

    return { name, email, img, isValidForm: true };
  },
  computed: {
    rules() {
      return validationRules;
    },
  },
  methods: {
    submit() {
      this.$store.commit("user/updateProfile", this.$data);

      this.$router.push({ query: {} });
    },
  },
};
</script>

<template>
  <v-form v-model="isValidForm" class="edit-area" @submit.prevent="submit">
    <div class="d-flex">
      <h2 class="mb-5 mr-5">Edit user information</h2>
      <v-btn :disabled="!isValidForm" type="input" depressed color="success"
        >Save</v-btn
      >
    </div>
    <figure class="profile-picture mb-5">
      <img :src="img" alt="user picture" />
    </figure>
    <!-- <v-file-input
      v-model="img"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input> -->
    <v-text-field
      v-model="name"
      :rules="[rules.required]"
      label="Name"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="Email"
    ></v-text-field>
  </v-form>
</template>

<style scoped>
.edit-area {
  max-width: 400px;
}
</style>
