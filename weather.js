let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


    function getData(){
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);})
        .catch((error) => {
            console.error(error)
        });
    }