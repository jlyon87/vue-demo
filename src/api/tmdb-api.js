import axios from 'axios'
import { baseURL, apikey } from './tmdb.config'

const popular = '/movie/popular'
const tmdb = axios.create({
  params: { api_key: apikey },
  baseURL
})

export const getPopularMovies = () => {
  return tmdb.get(popular)
    .then(res => res.data.results)
}
