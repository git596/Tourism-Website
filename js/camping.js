// Interactive Title Animation
const title = document.getElementById("interactive-title");
title.addEventListener("mouseover", () => {
  title.style.transform = "rotate(-2deg)";
});
title.addEventListener("mouseleave", () => {
  title.style.transform = "rotate(0)";
});

// Back Home Button Click
const backButton = document.getElementById("back-home");
backButton.addEventListener("click", () => {
  window.location.href = "index.html"; // Replace with your home page URL
});
