// FETCH API DATA WITH FETCH API

fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(data => {
    // all clever code
    console.log(data)
  })
  .catch(error => {
    console.error(error);
  });

async function getCountries() {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  console.log(data);
}
getCountries();



// GET DATA WITH AXIOS

axios.get("https://restcountries.eu/rest/v2/all")
  .then(response => console.log(response.data));

async function getCountriesAxios() {
  const response = await axios.get("https://restcountries.eu/rest/v2/all");
  console.log(response.data);
}
getCountriesAxios();

// GET https://api.nasa.gov/planetary/apod
// oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4

async function getNasaImage() {
  const params = {
    api_key: "oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4"
  }
  const response = await axios.get("https://api.nasa.gov/planetary/apod", { params });
  console.log(response.data);
  // Put the image onto the page.
  const img = document.createElement('img')
  img.src = response.data.url
  document.getElementById('nasa').appendChild(img);
}
getNasaImage();








// http://samswatches.com

// WATCHES Collection - /watches

// Verbs:
//  - Get
//  - Post
//  - Put
//  - Patch
//  - Delete

// RESTful actions - JSON API
// ---------------------
// INDEX : GET /watches
// - Get all the watches

// SHOW : GET /watches/{id}
// - Get one watch

// CREATE : POST /watches
// - Create one watch

// UPDATE : PUT/PATCH /watches/{id}
// - Updates one watch

// DESTROY : DELETE /watches/{id}
// - Deletes one watch