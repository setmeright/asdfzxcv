function initialState() {
  return {
    id: 0,
    account: "",
    profile: {
      name: "",
      email: "",
      img: "",
    },
  };
}

export const state = () => initialState();

export const getters = {
  isLoggedIn: state => !!state.id,
};

export const mutations = {
  updateProfile(state, payload) {
    state.profile = { ...state.profile, ...payload };
  },
  setUser(state, { id, account, profile }) {
    state.id = id;
    state.account = account;
    state.profile = profile;
  },
};

export const actions = {
  async fetchUser({ commit }) {
    try {
      const userData = await this.$api.fetchUser();
      commit("setUser", userData);
    } catch (error) {
      console.error(error);
    }
  },
  async login({ commit }, payload) {
    try {
      const userData = await this.$api.login(payload);
      commit("setUser", userData);
      this.$router.push("/profile");
    } catch (error) {
      console.error(error);
    }
  },
  async updateProfile({ commit }, payload) {
    try {
      await this.$api.updateProfile(payload);
      commit("updateProfile", payload);
    } catch (error) {
      console.error(error);
    }
  },
  async logout({ commit }) {
    try {
      await this.$api.logout();
      commit("setUser", initialState());
      this.$router.push("/login");
    } catch (error) {
      console.error(error);
    }
  },
};
