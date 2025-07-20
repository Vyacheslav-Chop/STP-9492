import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const swiper = new Swiper('[data-swiper="gallery"]', {
  modules: [Autoplay, EffectCoverflow],
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 12,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000,
});
