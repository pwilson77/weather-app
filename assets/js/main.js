'use strict';

var WeatherAppModule = (function () {
    const toggleShowAndHide = () => {

    };
    const getCityWeather = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99a238e2a89a4068350516ce6a439bec`, { mode: 'cors' })
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                console.log(response)
            });
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
