export default async function ({ store, redirect }) {
  if (!store.getters["user/isLoggedIn"]) {
    await store.dispatch("user/fetchUser");

    if (!store.getters["user/isLoggedIn"]) {
      redirect("/login");
    }
  }
}
