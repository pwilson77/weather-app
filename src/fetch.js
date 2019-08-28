import { displayWeatherData, handleError } from "./display";

async function getCityWeather(city, unit) {
  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=99a238e2a89a4068350516ce6a439bec`;
  try {
    const data = await fetch(fetchUrl, { mode: "cors" });
    const response = await data.json();
    displayWeatherData(response, unit);
  } catch {
    handleError();
  }
}

export default getCityWeather;
