const API_KEY = "5e3a210ddf1aa21cb34725b1b838a48d"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
    city.innerText = data.name;
    }); 
}

function onGeoError() {
    alert("can't find you.  no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK ,onGeoError);