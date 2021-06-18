import axios from 'axios'
import store from '@/store/index'

const api = axios.create({
	baseURL: 'https://albumes-api.herokuapp.com/',
})

api.getAlbums = async () => {
	const response = await api.get('albums/')
	return response.data
}

api.getAlbumById = async (id) => {
	const response = await api.get(`albums/${id}/`)
	return response.data
}

api.interceptors.request.use(config => {
    store.commit('loading')
    return config
  }, error => {
    store.commit('error')
})

api.interceptors.response.use(response => {
		if (response.data.length === 0) {
			store.commit('empty')
		} else {
			store.commit('success')
		}

    return response
  }, error => {
    store.commit('error')
})

export default api