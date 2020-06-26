<script>
import { validationRules, toBase64 } from "@/utils";
import PlaceholderPicture from "@/static/profile-picture-placeholder.png";

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
    async submit() {
      const { name, email, img } = this;
      await this.$store.dispatch("user/updateProfile", { name, email, img });

      this.$router.push({ query: {} });
    },
    async changePicture($e) {
      this.img = await toBase64($e.target.files[0]);
    },
    removePicture() {
      this.img = PlaceholderPicture;
    },
  },
};
</script>

<template>
  <v-form v-model="isValidForm" class="edit-area" @submit.prevent="submit">
    <div class="d-flex">
      <h2 class="mb-5 mr-5">Edit user information</h2>
      <v-btn
        :disabled="!isValidForm"
        type="input"
        depressed
        color="success"
        class="mr-2"
        >Save</v-btn
      >
      <v-btn nuxt depressed color="white" :to="{ query: {} }">Cancel</v-btn>
    </div>
    <div class="profile-picture mb-5">
      <v-btn
        icon
        color="black"
        class="profile-picture-delete"
        @click="removePicture"
      >
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
      <label for="picture-upload" class="profile-picture-uploader"></label>
      <input id="picture-upload" type="file" hidden @change="changePicture" />

      <img :src="img" alt="user picture" />
    </div>

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
.profile-picture-uploader {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  cursor: pointer;
}

.profile-picture-delete {
  position: absolute;
  right: 5px;
  z-index: 2;
}

.profile-picture {
  position: relative;
  padding: 5px;
  border: 2px dashed black;
}

.profile-picture img {
  opacity: 0.8;
  user-select: none;
  pointer-events: none;
}

.edit-area {
  max-width: 450px;
}
</style>
