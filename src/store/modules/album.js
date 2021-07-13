import api from '@/services/index';
import Vue from 'vue';

function getDefaultData() {
  return {
    interviews: [],
    selectedInterviews: [],
    albumName: '',
    qrPosition: 'TOP_LEFT',
    albumId: 1,
    isAlbumNotified: false
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
    },
    isAlbumNotified(state) {
      return state.isAlbumNotified;
    }
  },

  mutations: {
    setAlbumToForm(state, album) {
      state.selectedInterviews = album.interviews.map((interview) => interview.id);
      state.albumName = album.name;
      state.qrPosition = album.qr_position;
      state.albumId = album.id;      
    },
    resetData(state) {
      Object.assign(state, getDefaultData());
    },
    albumNotified(state) {
      state.isAlbumNotified = true;
    },
    setAlbumId(state, albumId) {
      state.albumId = albumId;
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
        const interviews = await api.getInterviews( );
        commit('setInterviews', interviews);
      }
    },
    async createAlbum({ commit, state }) {
      const createdAlbumData = await api.createAlbum(state.albumName, state.qrPosition, state.selectedInterviews);
      commit('setAlbumId', createdAlbumData.id);
    },
    async editAlbum({ commit, state }) {
      const editedAlbum = await api.editAlbum(
        state.albumId,
        state.albumName, 
        state.qrPosition, 
        state.selectedInterviews
      );

      commit('setAlbumToForm', editedAlbum);
    }
  }
}

export default album