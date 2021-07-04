import api from '@/services/index';
import Vue from 'vue';
import { getField, updateField } from 'vuex-map-fields';

const session = {
  state: {
    token: localStorage.token,
    user: {
      id: localStorage.userId,
      settings: {}
    }
  },

  getters: {
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    },
    getSettings(state) {
      return state.user.settings;
    },
    isUserLoaded(state, getters) {
      const { getSettings: settings } = getters;
      return Object.keys(settings).length === 0;
    },
    isUserLoggedIn(state, getters) {
      // FIXME - e.g.: If someone modify the user token from the local storage
      return !!getters.getToken;
    },
    getField
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.userId = user.id;
    },
    updateField
  },

  actions: {
    async loginWithGoogle({ commit }, authCode) {
      const session = await api.loginWithGoogle(authCode);
      const {token, ...user} = session;

      commit('setToken', token);
      commit('setUser', user);
    },

    async getUser({ commit, getters }) {
      const { getUser: user, isUserLoaded } = getters;

      if (isUserLoaded) {
        const newUser = await api.getUser(user.id);
        commit('setUser', newUser);
      }
    },

    async updateUser({ commit, getters }) {
      const { getUser: user } = getters;
      const userModified = await api.updateUser(user);

      commit('setUser', userModified);
    },
  }
}

export default session