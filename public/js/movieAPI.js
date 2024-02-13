//fetch The Movie Database(TMDB) API - for all other movie information
const tmdbKey = `468d5de192d37cae276cf12303a0be67`


function getMovieApi(movie) {
  
  const tmdbSearch = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${tmdbKey}`;

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


function getOpenApi(movie) {
  
  const omdbSearch = `https://www.omdbapi.com/?t=${movie}&apikey=${omdbKey}`;

  fetch(omdbSearch)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
}
const formSubmit = (event)=>{
  event.preventDefault();
  const movieTitle = document.getElementById(`movie-input`).value.trim()
  getMovieApi(movieTitle);
  getOpenApi(movieTitle);
}


document.querySelector(`#movie-search`).addEventListener(`submit`, formSubmit)