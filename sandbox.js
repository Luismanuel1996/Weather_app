const city = document.getElementById("city");


function getData(cityname){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=2&appid=${apiKey}`)
    .then((resolve) => {
        return resolve.json()
    })
    .then((data) => {
    city.value = "";
    let weatherData = data[0];
    const lonLat = {lon: weatherData.lon , lat: weatherData.lat};
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lon}&lon=${lonLat.lat}&appid=${apiKey}`)
     })
    .then((resolve) =>{
     return resolve.json();
    }).then((data) =>{
        console.log(data)
        
    })
    .catch((error) => {
        console.error= error.message;
    });
}


function getWeather(lonLat){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lon}&lon=${lonLat.lat}&appid=${apiKey}`)
    .then((resolve)=>{
        return resolve.json();
    }).then((data)=>{
        return console.log(data)

})
}

searchButton.addEventListener("submit", (event) =>{
    event.preventDefault();
    getData(cityname);
})



function getData(cityname){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=2&appid=${apiKey}`)
    .then((resolve) =>{
        return resolve.json();
    })
    .then((data)=> {
        city.value = "";
        let weatherData = data[0];
        const lonLat = {lon: weatherData.lon , lat: weatherData.lat}
        return lonLat;
        
    })
    .catch((error) => {
        console.error= error.message;
    });
}

