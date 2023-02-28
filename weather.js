const api_key = "48fcd44bf33b160f79fc6827a225a0c7";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((response) => response.json)
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerHTML = data.name;
      city.innerHTML = data.weather[0].main;
    });
}
function geoError() {
  alert("Can't load geo Location");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
