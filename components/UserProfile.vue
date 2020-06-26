<script>
import { mapState } from "vuex";

export default {
  name: "UserProfile",
  computed: mapState("user", ["profile"]),
};
</script>

<template>
  <div>
    <div class="d-flex">
      <h2 class="mb-5 mr-5">User information</h2>
      <v-btn nuxt depressed color="primary" :to="{ query: { edit: 1 } }"
        >Edit</v-btn
      >
    </div>
    <figure class="profile-picture mb-5">
      <img :src="profile.img" alt="user picture" />
    </figure>
    <p class="ma-0">
      Name: <strong>{{ profile.name }}</strong>
    </p>
    <p class="ma-0">
      Email: <strong>{{ profile.email }}</strong>
    </p>
  </div>
</template>
