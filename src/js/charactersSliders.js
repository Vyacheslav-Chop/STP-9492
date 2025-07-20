import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let charactersSwiper;

const screenWidthQuery = window.matchMedia('(max-width: 1199.98px)');

function initCharactersSwiper() {
  if (screenWidthQuery.matches && !charactersSwiper) {
    charactersSwiper = new Swiper('[data-action="mySwiper"]', {
      modules: [Pagination],
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        clickable: true,
        el: '[data-action="swiper-pagination"]',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
    });
  } else if (!screenWidthQuery.matches && charactersSwiper) {
    charactersSwiper.destroy(true, true);
    charactersSwiper = null;
  }
}

initCharactersSwiper();
screenWidthQuery.addEventListener('change', initCharactersSwiper);
