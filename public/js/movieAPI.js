//fetch The Movie Database(TMDB) API - for all other movie information
const requestMovieAPI = 'https://api.themoviedb.org/3/movie/11?api_key=468d5de192d37cae276cf12303a0be67';
const responseText = document.getElementById('response-text');

function getMovieApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

//fetch Open Movie Database(OMDB) API - for poster link
const requestOpenAPI = 'https http://www.omdbapi.com/?i=tt3896198&apikey=5378bd00://api.themoviedb.org/3/movie/11?api_key=468d5de192d37cae276cf12303a0be67';
const responseOpenText = document.getElementById('response-text');

function getOpenApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseOpenText.textContent = response.status;
    }
    return response.json();
  });
}

getMovieApi(requestMovieAPI);
getOpenApi(requestOpenAPI);