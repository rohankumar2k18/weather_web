const apiKey = "2b107e606cd6bb636dad87d6fce3723b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");






async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png"
                break;


            default:
                break;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value == "") {
        window.alert("Please Enter a city name first!")
    }
    else {
        
        checkWeather(searchBox.value)
    }
})

