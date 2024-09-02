import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initGallerySwiper = () => {
    const swiperGallery = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      speed: 600,
      loop: true,
      watchSlidesProgress: true,
      spaceBetween: 5,
      slidesPerView: 'auto',
      slidesPerGroup: 1,

      breakpoints: {
        1440: {
          loop: false,
        },
        768: {
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
    });

    const updateSwiper = () => {
      if (window.innerWidth > 1439 && swiperGallery.enabled) {
        swiperGallery.destroy(true, true);
      } else if (window.innerWidth <= 1439 && !swiperGallery.enabled) {
        swiperGallery.enable();
      }
    };

    window.addEventListener('resize', updateSwiper);
    updateSwiper();

    return swiperGallery;
  };

  initGallerySwiper();
})();
