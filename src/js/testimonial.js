import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('[data-swiper="swiper"]', {
  modules: [Pagination, Autoplay, Navigation],
  spaceBetween: 40,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: '[data-swiper="pagination"]',
    clickable: true,
  },
  navigation: {
    nextEl: '[data-swiper="btn-next"]',
    prevEl: '[data-swiper="btn-prev"]',
  },
});
