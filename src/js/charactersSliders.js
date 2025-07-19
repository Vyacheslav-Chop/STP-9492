import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('[data-action="mySwiper"]', {
  modules: [Pagination],
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  breakpoints: {
    1200: {
      enabled: false,
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
