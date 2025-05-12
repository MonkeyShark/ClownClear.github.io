document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const galleryTabs = document.querySelectorAll('.gallery-tab');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      galleryTabs.forEach(tab => tab.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });

  // Image Zoom and Tooltip Setup
  const galleryImages = document.querySelectorAll('.gallery-img');
  const modals = document.querySelectorAll('.zoomable-image-modal');
  const modalImages = document.querySelectorAll('.zoomable-image-modal img');
  const closeButtons = document.querySelectorAll('.close-modal');

  galleryImages.forEach((img, index) => {
    // Set tooltip text
    const tooltip = img.parentElement.querySelector('.tooltip');
    tooltip.textContent = img.dataset.description || img.alt;

    // Zoom functionality
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