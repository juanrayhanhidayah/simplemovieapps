import axios from "axios";

// export function getSearch(page) {
//   return axios.get(
//     `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
//       process.env.REACT_APP_API_KEY
//     }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
//   );
// }
export function getDetailMovie(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getCredits(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

export function getTrailer(id, media_type) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}
