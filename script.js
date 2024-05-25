const apiKey = "eec5f6d9dbd897d8b9bad2d045507916";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function select(elem){
    return document.querySelector(elem)
};
const seachBox = select(".search input");
const seachBtn = select(".search button");
const weather_icon = select(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status === 404){
        select(".error").style.display = "block";
        select(".weather").style.display = "none";
    } else{
        let data = await response.json();
    console.log(data);
    select(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    select(".city").innerHTML = data.name;
    select(".humidity").innerHTML = data.main.humidity + "%";
    select(".wind").innerHTML = data.wind.speed + "km/h";


    //updating images
    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weather_icon.src = "images/mist.png";
    }

    select(".weather").style.display = "block";
    select(".error").style.display = "none";
    }
    


};

seachBtn.addEventListener("click", ()=>{
    checkWeather(seachBox.value);
});