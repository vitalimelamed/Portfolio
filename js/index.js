// Open navbar and scroll to navbar link
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar__link");
navbarToggle.addEventListener("click", () => {
  document.body.classList.toggle("navbar-open");
});
// Close navbar
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("navbar-open");
  });
});