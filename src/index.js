import { handleReset, initialize } from "./display";
import getCityWeather from "./fetch";

function component() {
  initialize();
  const getFormData = () => {
    handleReset();
    const temp = document.getElementById("city").value;
    temp.trim();
    const city = temp.charAt(0).toUpperCase() + temp.slice(1);
    const unit = document.getElementById("temp").value;
    getCityWeather(city, unit);
  };
  document.getElementById("submit").addEventListener("click", getFormData);
}

component();
