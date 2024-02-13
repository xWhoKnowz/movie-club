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

    

    var container = document.getElementById(`movies`)
    var card = document.createElement(`section`)
    card.setAttribute(`class`, `card col-6`)
    var cardHeader = document.createElement(`div`)
    cardHeader.setAttribute(`class`, `card-header`)
    var poster = document.createElement(`img`)
    poster.setAttribute(`class`, `card-img-top`)
    poster.src = data.poster
    var movieData = document.createElement(`ul`)
    movieData.setAttribute(`class`, `list-group list-group-flush`)
    var rating = document.createElement(`li`)
    rating.setAttribute(`class`, `list-group-item`)
    var runTime = document.createElement(`li`)
    runTime.setAttribute(`class`, `list-group-item`)
    var summary = document.createElement(`li`)
    summary.setAttribute(`class`, `list-group-item`)
    var save = document.createElement(`button`)
    save.setAttribute(`class`, `btn-primary col-1`)
    save.setAttribute(`id`, `add`)

    cardHeader.textContent = data.Title 
    rating.textContent = `Rating: ${data.Ratings[1].Source} - ${data.Ratings[1].Value}`
    runTime.textContent = `Run Time: ${data.Runtime}`
    summary.textContent = `Synopsis: ${data.Plot}`
    save.textContent = `Add`

    card.appendChild(cardHeader)
    card.appendChild(poster)
    card.appendChild(movieData)
    card.appendChild(save)
    movieData.appendChild(rating)
    movieData.appendChild(runTime)
    movieData.appendChild(summary)
    container.appendChild(card)
    

    document.querySelector(`#add`).addEventListener(`click`, addMovie)
  })
};

const formSubmit = (event)=>{
  event.preventDefault();
  const movieTitle = document.getElementById(`movie-input`).value.trim()
  getMovieApi(movieTitle);
  getOpenApi(movieTitle);
};

const listCreator = function() {
  
var search = document.getElementById(`form`)
var form = document.createElement(`form`)
form.setAttribute(`id`, `movie-search`)
var input = document.createElement(`input`)
input.setAttribute(`type`, `text`)
input.setAttribute(`id`, `movie-input`)
input.setAttribute(`placeholder`, `Search for Movies...`)
var button = document.createElement(`button`)
button.setAttribute(`type`, `submit`)
button.setAttribute(`class`, `btn`)

button.textContent = `Search`

search.appendChild(form)
form.appendChild(input)
form.appendChild(button)

document.querySelector(`#movie-search`).addEventListener(`submit`, formSubmit)
}  

const addMovie = async function() {

const archive = await fetch(`/movie/`, {
  method: `POST`,
  body: JSON.stringify({}),
  headers: { 'Content-Type': 'application/json' },
})

}

document.querySelector(`#newList`).addEventListener(`click`, listCreator)