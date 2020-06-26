<script>
export default {
  name: "UserProfileEdit",
  props: { profile: { type: Object, required: true } },
  data() {
    return {
      name: this.profile.name,
      email: this.profile.email,
    };
  },
  methods: {
    submit() {
      this.profile.name = this.name;
      this.profile.email = this.email;

      this.$router.push({ query: {} });
    },
  },
};
</script>

<template>
  <v-form class="edit-area" @submit.prevent="submit">
    <div class="d-flex">
      <h2 class="mb-5 mr-5">Edit user information</h2>
      <v-btn type="input" depressed color="success">Save</v-btn>
    </div>
    <figure class="profile-picture mb-5">
      <img :src="profile.img" alt="user picture" />
    </figure>
    <!-- <v-file-input
      v-model="img"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input> -->
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
  </v-form>
</template>

<style scoped>
.edit-area {
  max-width: 400px;
}
</style>
