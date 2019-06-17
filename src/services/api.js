import axios from 'axios'
import queryString from 'query-string'

let auth = queryString.parse(window.location.search)
let accessToken = auth.access_token
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: { Authorization: 'Bearer ' + accessToken }
})

export default {
  api
}
