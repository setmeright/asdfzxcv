<script>
import UserProfile from "@/components/UserProfile";
import UserProfileEdit from "@/components/UserProfileEdit";

export default {
  name: "IndexPage",
  components: {
    UserProfile,
    UserProfileEdit,
  },
  middleware: "auth",
  data() {
    return {
      isEditing: !!this.$route.query.edit,
    };
  },
  watchQuery(newQuery) {
    this.isEditing = !!newQuery.edit;
  },
  methods: {
    saveProfile() {},
  },
  head() {
    return {
      title: this.isEditing ? "Edit profile" : "User profile",
    };
  },
};
</script>

<template>
  <v-row class="fill-height pa-4">
    <v-col cols="12" class="pa-0">
      <component
        :is="isEditing ? 'UserProfileEdit' : 'UserProfile'"
      ></component>
    </v-col>
  </v-row>
</template>

<style>
.profile-picture {
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
}

.profile-picture img {
  width: 100%;
}
</style>
