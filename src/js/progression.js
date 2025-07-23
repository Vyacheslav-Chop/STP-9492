function playVideo() {
  const video = document.querySelector('video[data-src]');

  if (video) {
    // create observing
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        video.src = video.dataset.src;

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
