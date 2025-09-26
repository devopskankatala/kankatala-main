document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  // Get all slide elements as array
  let slides = Array.from(carousel.querySelectorAll('.slide'));

  // Find first video and image slides
  const videoSlide = slides.find(slide => slide.dataset.type === 'video');
  const imageSlide = slides.find(slide => slide.dataset.type === 'image');

  // Reorder slides: video first, image second, then rest
  let orderedSlides = [];
  if (videoSlide) orderedSlides.push(videoSlide);
  if (imageSlide && imageSlide !== videoSlide) orderedSlides.push(imageSlide);
  slides.forEach(slide => {
    if (slide !== videoSlide && slide !== imageSlide) orderedSlides.push(slide);
  });

  // Clear current slides and append reordered slides to carousel
  carousel.innerHTML = '';
  orderedSlides.forEach(slide => carousel.appendChild(slide));

  // Show/Hide logic
  let currentIndex = 0;
  function showSlide(index) {
    orderedSlides.forEach((slide, i) => {
      slide.style.display = (i === index ? 'block' : 'none');
    });
  }

  // Show first slide initially
  showSlide(currentIndex);

  // Optional: Add navigation or automatic sliding here
  // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});



