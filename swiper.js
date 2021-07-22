import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
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