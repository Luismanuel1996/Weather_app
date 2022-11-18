const apiKey = `c33ac7f507cb7cfdacc8ab0e441d0c2d`;
const feedBack = document.getElementById("feedBack");
const searchButton = document.getElementById("button");
const city = document.getElementById("city");
const card = document.getElementById("card");
console.log("w.e");

card.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("something");
  const cityname = city.value;
  getData(cityname);
});

function getData(cityname) {
  console.log("w.e");
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=2&appid=${apiKey}`
  )
    .then((resolve) => resolve.json())
    .then((data) => {
      city.value = "";
      let wData = data[0];
      const lonLat = { lat: wData.lat, lon: wData.lon };
      console.log(lonLat);
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lat}&lon=${lonLat.lon}&appid=${apiKey}`
      );
    })
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error = error.message;
    });
}
