import axios from 'axios'

const api = axios.create({
	baseURL: 'https://albumes-api.herokuapp.com/',
	timeout: 4000
})

api.getAlbums = async () => {
	const response = await api.get('albums/')
	return response.data
}

export default api