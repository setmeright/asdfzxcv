<script>
import UserProfile from "@/components/UserProfile";
import UserProfileEdit from "@/components/UserProfileEdit";

export default {
  name: "ProfilePage",
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
