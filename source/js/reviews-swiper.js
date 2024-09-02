import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initSwiper = (selector, config) => {
    const defaultConfig = {
      autoHeight: true,
      modules: [Navigation],
      speed: 600,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      watchSlidesProgress: true,
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
          width: 290,
          spaceBetween: 40,
        },
        768: {
          allowTouchMove: true,
          width: 575,
          spaceBetween: 30,
        },
        1440: {
          width: 700,
          allowTouchMove: false,
          spaceBetween: 120,
        },
      },
    };

    const swiperConfig = { ...defaultConfig, ...config };
    const swiperInstance = new Swiper(selector, swiperConfig);

    const firstSlide = document.querySelector(`${selector} .swiper-slide`);
    if (firstSlide) {
      const firstSlideHeight = firstSlide.offsetHeight;

      const swiperContainer = document.querySelector(selector);
      if (swiperContainer) {
        swiperContainer.style.height = `${firstSlideHeight}px`;
      }
    }

    return swiperInstance;
  };

  const reviewsSwiperConfig = {
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        width: 290,
        spaceBetween: 40,
      },
      768: {
        allowTouchMove: true,
        width: 575,
        spaceBetween: 30,
      },
      1440: {
        width: 700,
        allowTouchMove: false,
        spaceBetween: 120,
      },
    },
  };

  initSwiper('.reviews__swiper', reviewsSwiperConfig);
})();
