'use strict';

var weatherAppModule = (function () {
    const displayWeatherData = (data) => {
        const cityName = document.getElementById('citytitle');
        const content1 = document.getElementById('content1');
        const content2 = document.getElementById('content2');

        const text = ` The temperature is ${Math.floor(data.main.temp)} Kelvin , a humidity of ${Math.floor(data.main.humidity)} % 
        and a pressure of ${Math.floor(data.main.pressure)} hPa`;

        const text2 = document.createElement('p');

        cityName.innerText = data.name;
        content1.innerText = text;
        text2.innerText = data.weather[0].description;
        content2.innerText = '';

        const img = document.createElement('img');
        img.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);

        content2.append(text2, img);

    };
    const getCityWeather = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99a238e2a89a4068350516ce6a439bec`, { mode: 'cors' })
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                displayWeatherData(response);
                console.log(response);
            }).catch(alert('Enter a valid city name'));
    };
    const getFormData = () => {
        const temp = document.getElementById('city').value;
        temp.trim(); // remove whitespace
        const city = temp.charAt(0).toUpperCase() + temp.slice(1); //Capitalise firstletter
        getCityWeather(city);
    };

    return {
        getFormData
    };
})();
