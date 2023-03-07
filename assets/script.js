let weather = {
    apiKey: "ea6ba5fa642884db9814a65d18097681",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerText = "Wind Speed: " + speed + "mph";
    }, 
    search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }   
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})








// Begin Local Storage
function addCityToLocalStorage() {
    localStorage.setItem('key', JSON.stringify());
}    

function getCityFromLocalStorage() {
    return JSON.parse(localStorage.getItem('key'));
}    

function addCity (city) {
    let currentBookList = getCityFromLocalStorage();
    currentCityList.push(city);
    addCityToLocalStorage(currentCityList);
}

if(storageInput) {
    text.textContent = storedCities;
}

const myCities = ["Denver", "Cleveland", "London", "Paris"];
  addCitiesToLocalStorage(myFavoriteCities);
  addCity("Next City"); 

button.addEventListener('click', cityAddClick)

function cityAddClick(event) {
    let title = event.target.parentNode.querySelector('h3').textContent;
    let author = event.target.parentNode.querySelector('h4').textContent;
    let newEntry = {
        Title: title,
        author: author
    }
    addBook(JSON.stringify(newEntry));
}

// End Local Storage 
