let timeText = document.querySelector('#local-time-india');
let weatherIcon = document.querySelector('#weather-icon');
let temperature = document.querySelector('#local-temp-colva');
let temperatureDesc = document.querySelector('#temp-desc');
let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.menu-mobile');
/* Display Local Time */
ticker()
function ticker () {
    var today = new Date();
    var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    console.log(time);
    timeText.innerHTML = time;
}

setInterval(ticker, 60000);

/* Display Weather Forecast*/
const apiKey = "506d538c650a02ad914e9043bbe90fc6";  
const url = `https://api.openweathermap.org/data/2.5/weather?lat=15.269330&lon=73.915963&units=metric&appid=${apiKey}`;
// const url = `api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={apiKey}`

console.log(url)
//api.openweathermap.org/data/2.5/find?lat={15}&lon={73}&cnt={cnt}&appid={apiKey}
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    const { main, name, sys, weather } = data;
    const temp = main.feels_like;
    const weatherDesc = weather[0].description;
    temperatureDesc.innerHTML = `${weatherDesc},`;
    temperature.innerHTML = `${temp} °C`;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
    weatherIcon.src = icon;
})
.catch(() => {
//   msg.textContent = "Please search for a valid city 😩";
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    mobileMenu.classList.toggle('open')
})