function goToHome() {
    window.location.href = "index.html"; // Replace with your actual home page URL
  }
  
  // Auto-scroll carousel
  let carousel = document.querySelector(".carousel");
  let scrollAmount = 0;
  
  setInterval(() => {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += carousel.clientWidth;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }, 3000);
  