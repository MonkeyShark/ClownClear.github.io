$(document).ready(function() {
  // Handle click event on zoomable images
  $('.zoomable-image').click(function() {
    var imageUrl = $(this).attr('src');
    showImageModal(imageUrl);
  });

  // Handle click event on modal close button
  $('.close-modal').click(function() {
    hideImageModal();
  });

  // Handle click event on modal overlay (outside the zoomed image)
  $('.zoomable-image-modal').click(function(event) {
    if ($(event.target).hasClass('zoomable-image-modal')) {
      hideImageModal();
    }
  });

  // Function to show the image modal
  function showImageModal(imageUrl) {
    var modal = $('.zoomable-image-modal');
    var modalImage = modal.find('img');

    modalImage.attr('src', imageUrl);
    modalImage.addClass('zoomed-in-image'); // Add the specific class
    modal.addClass('active');
  }

  // Function to hide the image modal
  function hideImageModal() {
    var modal = $('.zoomable-image-modal');
    var modalImage = modal.find('img');

    modalImage.removeClass('zoomed-in-image'); // Remove the specific class
    modal.removeClass('active');
  }
});