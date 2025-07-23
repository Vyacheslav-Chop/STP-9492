import promoVideo from '../img/video/design-preview-unsl.mp4';

function playVideo() {
  const video = document.querySelector('video[data-lazi-video]');

  if (video) {
    // create observing
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        video.src = promoVideo;

        // starts loading the video
        video.load();
        // // stop observing the video
        observer.unobserve(video);
      }
    });
    // start observing the video
    observer.observe(video);
  }
}

playVideo();
