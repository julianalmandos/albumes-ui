import api from '@/services/index';
import Vue from 'vue';

function getDefaultData() {
  return {
    interviews: [],
    selectedInterviews: [],
    albumName: '',
    qrPosition: 0,
    albumId: 1
  };
}

const album = {
  state: getDefaultData(),
  getters: {
    getAlbumId(state) {
      return state.albumId;
    },
    getAlbumName(state) {
      return state.albumName;
    },
    getQrPosition(state) {
      return state.qrPosition;
    },
    getInterviews(state) {
      return state.interviews;
    },
    getSelectedInterviews(state) {
      return state.selectedInterviews;
    }
  },
  mutations: {
    resetData(state) {
      Object.assign(state, getDefaultData());
    },
    setAlbumName(state, albumName) {
      state.albumName = albumName;
    },
    setQrPosition(state, qrPosition) {
      state.qrPosition = qrPosition;
    },
    setInterviews(state, interviews) {
      state.interviews = interviews;
    },
    toggleSelection(state, interviewId) {
      const interviewIndex = state.selectedInterviews.indexOf(interviewId);
      if (interviewIndex === -1) {
        state.selectedInterviews.push(interviewId);
      } else {
        state.selectedInterviews.splice(interviewIndex, 1);
      }
      console.log(state.selectedInterviews);
    },
    moveInterviewUp(state, index) {
      const selectedInterviews = [...state.selectedInterviews];
      const previous = selectedInterviews[index - 1];
      selectedInterviews[index - 1] = selectedInterviews[index];
      selectedInterviews[index] = previous;
      Vue.set(state, 'selectedInterviews', selectedInterviews);
    },
    moveInterviewDown(state, index) {
      const selectedInterviews = [...state.selectedInterviews];
      const previous = selectedInterviews[index + 1];
      selectedInterviews[index + 1] = selectedInterviews[index];
      selectedInterviews[index] = previous;
      Vue.set(state, 'selectedInterviews', selectedInterviews);
    }
  },
  actions: {
    async getInterviews({ commit, state }) {
      const { interviews } = state;
      if (!interviews.length) {
        const interviews = await api.getInterviews();
        commit('setInterviews', interviews)
      }
    },
  }
}

export default album