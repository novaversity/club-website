
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;

function showSlide(index) {
  const offset = -index * items[0].offsetWidth; // Calculate offset based on item width
  carousel.style.transform = `translateX(${offset}px)`; // Move the carousel
}

// Click Event for Next Button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % itemCount;
  showSlide(currentIndex);
});

// Click Event for Previous Button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  showSlide(currentIndex);
});

// Initialize first slide
showSlide(currentIndex);




      document.addEventListener("DOMContentLoaded", function () {
          const toggleButton = document.getElementById('navbarToggleBtn');
          const navbarContent = document.getElementById('navbarSupportedContent');

          // Function to toggle navbar open and close
          function toggleNavbar() {
              if (navbarContent.classList.contains('show')) {
                  navbarContent.classList.remove('show');
                  toggleButton.setAttribute('aria-expanded', 'false');
              } else {
                  navbarContent.classList.add('show');
                  toggleButton.setAttribute('aria-expanded', 'true');
              }
          }

          // Event listener for the toggle button click
          toggleButton.addEventListener('click', function () {
              toggleNavbar();
          });

          // Close navbar when a link is clicked (optional)
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
              link.addEventListener('click', function () {
                  if (navbarContent.classList.contains('show')) {
                      toggleNavbar();
                  }
              });
          });
      });


     



