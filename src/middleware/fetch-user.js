export default async function ({ store }) {
  if (!store.getters["user/isLoggedIn"]) {
    await store.dispatch("user/fetchUser");
  }
}
