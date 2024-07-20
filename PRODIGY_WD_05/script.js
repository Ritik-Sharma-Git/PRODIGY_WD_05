const apiKey='38e72708358fd8fca41a64e6906efae8';
const city="Pune";

async function fettchWeatherData(){
	const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}');
	const data = await response.json();
	console.log(data);
}

fettchWeatherData();