import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initSwiper = ({
    selector,
    modules = [],
    autoHeight = true,
    speed = 600,
    navigationConfig,
    keyboardConfig = { enabled: true, onlyInViewport: true },
    breakpointsConfig,
  }) => {
    const swiper = new Swiper(selector, {
      autoHeight,
      modules: [Navigation, ...modules],
      speed,

      navigation: navigationConfig,

      keyboard: keyboardConfig,

      breakpoints: breakpointsConfig,
    });

    return swiper;
  };

  const swiperTour = ()=> initSwiper({
    selector: '.tours__swiper',
    navigationConfig: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
      disabledClass: 'button--disabled',
    },
    breakpointsConfig: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  swiperTour();
})();
