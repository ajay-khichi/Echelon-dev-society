const themeToggle = document.getElementById("theme-toggle");
let darkMode = false;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.documentElement.style.setProperty(
    "--primary-color",
    darkMode ? "#ecf0f1" : "#2c3e50"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    darkMode ? "#2c3e50" : "#ecf0f1"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    darkMode ? "#fff" : "#333"
  );
  document.documentElement.style.setProperty(
    "--background-color",
    darkMode ? "#333" : "#fff"
  );
  themeToggle.textContent = darkMode ? "🌙" : "🌞";
});

// Image Carousel

const images = document.querySelector(".carousel-images");
const bullets = document.querySelectorAll(".bullet");

let currentIndex = 0;
const totalImages = bullets.length;
let interval;

function updateCarousel(index) {
  images.style.transform = `translateX(-${index * 100}vw)`;

  bullets.forEach((bullet, i) => {
    bullet.classList.toggle("filled", i === index);
  });
}

function autoScroll() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel(currentIndex);
  }, 3000); // Scroll every 3 seconds
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    clearInterval(interval); // Stop auto-scroll on manual interaction
    currentIndex = parseInt(bullet.dataset.index, 10);
    updateCarousel(currentIndex);
    autoScroll(); // Restart auto-scroll
  });
});

// Initialize carousel
updateCarousel(currentIndex);
autoScroll();
