import Swiper from 'swiper';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

let featuresSwiper;

const screenWidthQuery = window.matchMedia('(max-width: 1199.98px)');

function initFeaturesSwiper() {
  if (screenWidthQuery.matches && !featuresSwiper) {
    featuresSwiper = new Swiper('[data-swiper="customization"]', {
      modules: [EffectCards, Autoplay, Pagination],
      effect: 'cards',
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '[data-swiper="pagination"]',
        clickable: true,
      },
    });
  } else if (!screenWidthQuery.matches && featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }
}

initFeaturesSwiper();
screenWidthQuery.addEventListener('change', initFeaturesSwiper);
