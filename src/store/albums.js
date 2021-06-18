import api from '@/services/index'

const albumsStore = {
  state: {
    albums: [],
    album: {}
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums
    },
    setAlbum(state, album) {
      state.album = album
    }
  },
  actions: {
    async getAlbums({ commit, state }) {
      const { albums } = state

      if (albums.length === 0) {
        commit('setAlbums', await api.getAlbums())
      }
    },

    async getAlbumById({ commit, state }, id) {
      const { albums } = state
      let album = {}

      if (albums.length === 0) {
        album = await api.getAlbumById(id)
      } else {
        album = albums.find(album => album.id === id)
      }

      commit('setAlbum', album)
    }
  }
}

export default albumsStore