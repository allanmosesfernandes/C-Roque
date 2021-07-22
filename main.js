/* Swiper Initialization */
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import './assets/css/app.scss';
import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);


// init Swiper:

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: 'fade',
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
const swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
          breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }
  });   
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
    timeText.innerHTML = time;
}

setInterval(ticker, 60000);

/* Display Weather Forecast*/
const apiKey = "506d538c650a02ad914e9043bbe90fc6";  
const url = `https://api.openweathermap.org/data/2.5/weather?lat=15.269330&lon=73.915963&units=metric&appid=${apiKey}`;
// const url = `api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={apiKey}`

//api.openweathermap.org/data/2.5/find?lat={15}&lon={73}&cnt={cnt}&appid={apiKey}
fetch(url)
.then(response => response.json())
.then(data => {
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