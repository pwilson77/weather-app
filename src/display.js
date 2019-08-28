import {
  divFactory,
  buttonFactory,
  headerFactory,
  paragraphFactory
} from "./elementfactory";

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

  if (!card.classList.contains("active")) {
    card.classList.add("active");
  }
};
const handleReset = () => {
  const current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace("active", "");
  }
};
const handleError = () => {
  const errorCon = document.getElementById("error-con");
  if (!errorCon.classList.contains("active")) {
    errorCon.classList.add("active");
  }
};

const createErrorContainer = () => {
  const el = document.createElement("div");
  el.setAttribute("id", "error-con");
  el.innerText = "Enter the city name correctly";
  return el;
};

const createCardContainer = () => {
  const el = divFactory("card");
  const header3 = headerFactory("h3", "City name :");
  const span = document.createElement("span");
  span.setAttribute("id", "citytitle");
  header3.append(span);

  const paragraph1 = paragraphFactory("content1");
  const header4 = headerFactory("h4", "Current Weather Conditions");
  const paragraph2 = paragraphFactory("content2");

  el.append(header3, paragraph1, header4, paragraph2);
  return el;
};

const initialize = () => {
  const element = document.getElementsByClassName("container")[0];

  const formcon = divFactory("form");
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter the name of your city");
  input.setAttribute("id", "city");

  const label = document.createElement("label");
  label.setAttribute("for", "temp");
  label.innerText = "Choose which unit you prefer";

  const select = document.createElement("select");
  select.setAttribute("id", "temp");

  const option1 = document.createElement("option");
  option1.setAttribute("value", "metric");
  option1.innerText = "Celcius";

  const option2 = document.createElement("option");
  option2.setAttribute("value", "imperial");
  option2.innerText = "Fahrenheit";

  const button = buttonFactory("Submit", "submit");

  select.append(option1, option2);
  form.append(input, label, select);
  formcon.append(form, button);

  const error = createErrorContainer();
  const card = createCardContainer();

  element.append(error, formcon, card);

  return element;
};

export { displayWeatherData, handleReset, handleError, initialize };
