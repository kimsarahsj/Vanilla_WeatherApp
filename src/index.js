let now = new Date();

let todayDay = document.querySelector("#day");
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let day = days[now.getDay()];
todayDay.innerHTML = `${day}`;

let todayHour = document.querySelector("#hour");
let hours = now.getHours();
let ampm = "am";
if (hours > 12) {
  ampm = "pm";
  hours = hours - 12;
}
todayHour.innerHTML = `${hours}`;

let todayMinute = document.querySelector("#minute");
let minutes = now.getMinutes();
todayMinute.innerHTML = `${minutes} ${ampm}`;

function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");

  cityElement.innerHTML = response.data.city;
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `Humidity ${Math.round(
    response.data.temperature.humidity
  )}%`;
  windSpeedElement.innerHTML = `Wind Speed ${Math.round(
    response.data.wind.speed
  )} km/h`;
}
let apiKey = "fc1b832b8095ff408d9652d0tb44f7oa";
//let query = document.querySelector("#city");
//query.innerHTML = `${city}`;
let query = "Atlanta";
let encoded = encodeURI(query);
let url = `https://api.shecodes.io/weather/v1/current?query=${encoded}&key=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);
//let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}`;
