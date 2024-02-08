//fetch API
const requestAPI = 'https://api.themoviedb.org/3/movie/11?api_key=468d5de192d37cae276cf12303a0be67';

const responseText = document.getElementById('response-text');

function getApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

getApi(requestAPI);