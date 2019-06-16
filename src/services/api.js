import axios from 'axios'

const apiUrl = axios.create({
  baseURL: `https://api.spotify.com/v1/`,
  access_token: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getArtists (searched) {
    return apiUrl.get(
      'search?query=' + searched + '&type=artist&market=US&offset=0&limit=20'
    )
  },
  getAlbum (searched) {
    return apiUrl.get(
      'search?query=' + searched + '&type=album&market=US&limit=20&offset=5'
    )
  },
  getSongs (searched) {
    return apiUrl.get(
      'search?query=' + searched + '&type=track&market=BR&offset=0&limit=20'
    )
  }
}
