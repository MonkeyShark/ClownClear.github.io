document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-img.zoomable-image');
  const modals = document.querySelectorAll('.zoomable-image-modal');
  const modalImages = document.querySelectorAll('.zoomable-image-modal img');
  const closeButtons = document.querySelectorAll('.close-modal');

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      modals[index].classList.add('active');
      modalImages[index].src = img.src;
    });
  });

  closeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].classList.remove('active');
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});