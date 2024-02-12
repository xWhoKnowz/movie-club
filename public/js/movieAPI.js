//fetch The Movie Database(TMDB) API - for all other movie information
const tmdbKey = `468d5de192d37cae276cf12303a0be67`
const tmdbSearch = `https://api.themoviedb.org/3/movie/11?api_key=${tmdbKey}`;


function getMovieApi(event) {
  fetch(tmdbSearch)
  .then(function (res) {
    return res.json();
  })
  .then(function (data){
console.log(data);
  })
}

//fetch Open Movie Database(OMDB) API - for poster link
const omdbKey = `5378bd00`
const omdbSearch = `https://www.omdbapi.com/?i=tt3896198&apikey=${omdbKey}`;


function getOpenApi(event) {
  fetch(omdbSearch)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
}

getMovieApi();
getOpenApi();