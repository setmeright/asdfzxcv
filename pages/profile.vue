<script>
import UserProfile from "@/components/UserProfile";
import UserProfileEdit from "@/components/UserProfileEdit";

export default {
  name: "IndexPage",
  components: {
    UserProfile,
    UserProfileEdit,
  },
  data() {
    return {
      isEditing: !!this.$route.query.edit,
    };
  },
  watchQuery(newQuery) {
    this.isEditing = !!newQuery.edit;
  },
  computed: {
    profile: {
      get() {
        return {
          name: "John Doe",
          email: "johnny@doe.com",
          img:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&h=250&q=80",
        };
      },
      set() {},
    },
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
        :profile="profile"
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
