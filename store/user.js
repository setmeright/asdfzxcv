function initialState() {
  return {
    id: 0,
    profile: {
      name: "",
      email: "",
      img: "",
    },
  };
}

export const state = initialState();

export const getters = {
  isLoggedIn: state => !!state.id,
};

export const mutations = {
  updateProfile(state, payload) {
    state.profile = { ...state.profile, ...payload };
  },
  setUser(state, { id, profile }) {
    state.id = id;
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
    } catch (error) {
      console.error(error);
    }
  },
  async logout({ commit }) {
    try {
      await this.$api.logout();
      commit("setUser", initialState());
    } catch (error) {
      console.error(error);
    }
  },
  updateProfile(_ctx, _payload) {},
};
