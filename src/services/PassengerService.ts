import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1/passenger',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassengers(perPage: Number, page: Number) {
    return apiClient.get('/?_limit=' + perPage + '&_page=' + page)
  },
  getPassenger(id: string) {
    return apiClient.get('/' + id)
  }
}
