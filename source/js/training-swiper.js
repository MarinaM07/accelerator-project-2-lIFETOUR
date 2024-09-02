import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initSwiper = (selector, options) => {
    const defaultOptions = {
      autoHeight: false,
      modules: [Navigation],
      speed: 600,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'button--disabled',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
          initialSlide: 3,
          spaceBetween: 10,
        },
        768: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    };

    const swiperOptions = { ...defaultOptions, ...options };

    return new Swiper(selector, swiperOptions);
  };

  const trainingSwiperOptions = {
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  initSwiper('.training__swiper', trainingSwiperOptions);
})();
