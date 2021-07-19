import axios from "axios";

export function getSeries(page) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  );
}

export function getDetailMovie(id) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getCredits(id) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getTrailer(id) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}
