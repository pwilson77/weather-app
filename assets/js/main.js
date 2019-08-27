"use strict";

var weatherAppModule = (function() {
  const displayWeatherData = (data, unit) => {
    const cityName = document.getElementById("citytitle");
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    const card = document.getElementsByClassName("card")[0];
    let temperatureUnit;

    unit === "metric"
      ? (temperatureUnit = "Celcius")
      : (temperatureUnit = "Fahrenheit");

    const { name, main, weather } = data;

    const text = `
     The temperature is ${Math.floor(main.temp)} 
     ${temperatureUnit} , a humidity of ${Math.floor(main.humidity)} % 
     and a pressure of ${Math.floor(main.pressure)} hPa`;

    const text2 = document.createElement("p");

    cityName.innerText = name;
    content1.innerText = text;
    text2.innerText = weather[0].description;
    content2.innerText = "";

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather[0].icon}.png`
    );

    content2.append(text2, img);

    if (card.style.display === "") {
      card.style.display = "block";
    }
  };
  const handleReset = () => {
    const errorCon = document.getElementById("error-con");
    const card = document.getElementsByClassName("card")[0];

    card.style.display = "";
    errorCon.style.display = "";
  };
  const handleError = () => {
    const errorCon = document.getElementById("error-con");
    if (errorCon.style.display === "") {
      errorCon.style.display = "block";
    }
  };
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
  const getFormData = () => {
    handleReset();
    const temp = document.getElementById("city").value;
    temp.trim();
    const city = temp.charAt(0).toUpperCase() + temp.slice(1);
    const unit = document.getElementById("temp").value;
    getCityWeather(city, unit);
  };

  return {
    getFormData
  };
})();
