import axios from "axios";

export function getTrendingMovie(page) {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
}

export function getMovies(page) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  );
}
export function getSeries(page) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  );
}

export function getDetailMovie(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getCredits(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getTrailer(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}
