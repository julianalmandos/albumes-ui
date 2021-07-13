import api from '@/services/index'

const albumsStore = {
  state: {
    albums: [],
    album: {}
  },
  getters: {
    getAlbum(state) {
      return state.album;
    }
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums
    },
    setAlbum(state, album) {
      state.album = album
    },
    deleteAlbum(state, id) {
      state.albums = state.albums.filter(album => album.id !== id)
    },
  },
  actions: {
    async getAlbums({ commit }) {
      commit('setAlbums', await api.getAlbums())
    },

    async getAlbumById({ commit, state }, id) {
      const { albums } = state
      let album = albums.find(album => album.id === Number(id))
      if (!album) {
        album = await api.getAlbumById(id)
      }
      commit('setAlbum', album)
    },

    async deleteAlbum({ commit }, id) {
      await api.deleteAlbum(id)
      commit('deleteAlbum', id)
    }
  }
}

export default albumsStore