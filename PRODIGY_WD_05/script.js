const apiKey = "5d192e3236212389498723e49b66a4ab";
const city = "Kerala";

const fetchWeatherData = async (city) => {
    try{const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
	if (!response.ok) {
		throw new Error("Unable to fetch weather data");
	}
    const data = await response.json();
    console.log(data);
    // console.log(data.main.temp);
    // console.log(data.main.humidity);
    // console.log(data.name);
    // console.log(data.wind.speed);
    // console.log(data.visibility);
	updateWeatherUI(data);}
	catch(error){
		console.error(error);
	}
}

// fetchWeatherData();

const cityElement=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const Windspeed=document.querySelector(".wind-speed");
const humidityElement=document.querySelector(".humidity");
const visibilityElement=document.querySelector(".visibility-distance");
const descriptionText=document.querySelector(".description-text");
const date = document.querySelector(".date");
const description=document.querySelector(".description i");

function updateWeatherUI(data){
	cityElement.textContent=data.name;
	temperature.textContent=`${Math.round(data.main.temp)}°`;
	Windspeed.textContent=`${data.wind.speed}KM/H`;
	humidityElement.textContent=`${data.main.humidity}%`;
	visibilityElement.textContent=`${data.visibility/1000}KM/H`;
	descriptionText.textContent=data.weather[0].description;

	const currentDate=new Date();
	date.textContent=currentDate.toDateString();
	const weatherIconName=getWeatherIconName(data.weather[0].main)
	description.innerHTML=`<i class="material-icons">${weatherIconName}</i>`

}

const formElement=document.querySelector(".search-form");
const inputElement=document.querySelector(".city-input");

formElement.addEventListener("submit",function(e){
	e.preventDefault();

	const city=inputElement.value;
	if (city!='') {
		fetchWeatherData(city);
		inputElement.value="";
	}
});

function getWeatherIconName(weatherCondtion){
	const iconMap={
		Clear:"wb_sunny",
		Clouds:"wb_cloudy",
		Rain:"umbrella",
		Thunderstorm:"flash_on",
		Drizzle:"grain",
		Snow:"ac_unit",
		Mist:"cloud",
		Smoke:"cloud",
		Haze:"cloud",
		Fog:"cloud",
	}

	return iconMap[weatherCondtion] || "help"

}