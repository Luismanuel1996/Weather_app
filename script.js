const apiKey = `c33ac7f507cb7cfdacc8ab0e441d0c2d`;
const feedBack = document.getElementById("feedBack");
const currentCity = document.getElementById("cityName");
const currentTemp = document.getElementById("currentTemp");
const searchButton = document.getElementById("button");
const city = document.getElementById("city");
const card = document.getElementById("card");
const feelsLike = document.getElementById("feelsLike");
const image = document.getElementById("image");


card.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityname = city.value;
  getData(cityname);
});



function getData(cityname) {
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=2&appid=${apiKey}&units=imperial`
  )
    .then((resolve) => resolve.json())
    .then((data) => {
      city.value = "";
      let wData = data[0];
      const lonLat = { lat: wData.lat, lon: wData.lon };
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lat}&lon=${lonLat.lon}&appid=${apiKey}&units=imperial`
      );
    })
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
      currentCity.textContent = `Currently in ${data.name}`;
      feedBack.textContent = `Visibilty: ${data.weather[0].description}`;
      currentTemp.textContent = `The current temp is ${data.main.temp} °Degrees `;
      feelsLike.textContent = `Feels like ${data.main.feels_like} °Degrees`;
      const searchTerm = `${data.weather[0].description} sky`;
      return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=TD1NlYWlPVjsW9o6OosI5S1avSEuISUX&s=${searchTerm}`)
    })
    .then((resolve) => {
      return resolve.json()
  }).then((res) => {
    image.src = res.data.images.original.url;
  })
    .catch((error) => {
      console.error = error.message;
    });
}
