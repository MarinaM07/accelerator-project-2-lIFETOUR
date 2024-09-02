import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';

const breakpoints = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1439px)'),
  desktop: window.matchMedia('(min-width: 1440px)')
};

const swiperElements = {
  container: document.querySelector('.advantages__swiper'),
  wrapper: document.querySelector('.advantages__swiper-wrapper'),
  slides: document.querySelectorAll('.advantages__swiper-slide')
};

const clones = [];

const toggleClassArray = (elems, className, action) => {
  elems.forEach((elem) => {
    elem.classList[action](className);
  });
};

const cloneSlides = (parent, elems, array) => {
  elems.forEach((elem) => {
    const clone = elem.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    array.push(clone);
    parent.appendChild(clone);
  });
};

cloneSlides(swiperElements.wrapper, swiperElements.slides, clones);

const swiper = new Swiper('.advantages__swiper', {
  modules: [Navigation, Manipulation],
  init: false,
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  speed: 600,
  centeredSlides: true,

  navigation: {
    nextEl: '.advantages__button--next',
    prevEl: '.advantages__button--prev',
  },
  breakpoints: {
    1440: {
      initialSlide: 2,
      spaceBetween: 30,
      autoHeight: false,
      simulateTouch: false,
    },
  },
});

const handleScreenChange = () => {
  if (breakpoints.mobile.matches || breakpoints.tablet.matches) {
    swiper.disable();
    toggleClassArray(clones, 'advantages__swiper-slide--hidden', 'add');
  } else if (breakpoints.desktop.matches) {
    if (clones.length === 0) { // Клонируем только один раз
      cloneSlides(swiperElements.wrapper, swiperElements.slides, clones);
    }
    toggleClassArray(clones, 'advantages__swiper-slide--hidden', 'remove');
    swiper.enable();
    swiper.init();
  }
};

window.addEventListener('load', handleScreenChange);
window.addEventListener('resize', handleScreenChange);
