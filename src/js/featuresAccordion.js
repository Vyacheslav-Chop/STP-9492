const accordionList = document.querySelector('[data-action="accordion-list"]');

accordionList.addEventListener('mouseover', handleChangeImage);
accordionList.addEventListener('click', handleChangeImage);

function handleChangeImage(e) {
  const clickedButton = e.target.closest('[data-action="accordion-button"]');

  if (clickedButton) {
    const currentActiveButton = accordionList.querySelector(
      '[data-active="button"]'
    );

    if (currentActiveButton) {
      currentActiveButton.removeAttribute('data-active');
    }

    clickedButton.setAttribute('data-active', 'button');

    const currentActiveImage = document.querySelector('[data-active="image"]');

    if (currentActiveImage) {
      currentActiveImage.removeAttribute('data-active');
    }

    const targetImageId = clickedButton.dataset.image;
    const targetImage = document.getElementById(targetImageId);

    if (targetImage) {
      targetImage.setAttribute('data-active', 'image');
    }
  }
}
