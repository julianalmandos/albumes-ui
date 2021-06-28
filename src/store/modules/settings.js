import * as Settings from '@/utils/SettingsUtils'
import Vue from 'vue';
import api from '@/services/index';
import { getField, updateField } from 'vuex-map-fields';

const settings = {
	state: {
    settings: {}
	},

  mutations: {
    setSettings(state, settings) {
      state.settings = settings
    },
    updateField
  },

  getters: {
    getField
  },

  actions: {
    async getSettingsById({ commit }, id) {
      const settings = await api.getSettingsById(id)
      commit('setSettings', settings)
    },

    async updateSettings({ commit, state }) {
      const newSettings = await api.updateSettings(state.settings)
      commit('setSettings', newSettings)
    }
  }
}

export default settings