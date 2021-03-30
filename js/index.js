const navbarToggle = document.querySelector(".navbar-toggle");
const navbarList = document.querySelector(".navbar-list");
const navbarLink = document.querySelectorAll(".navbar-link");
  navbarToggle.addEventListener("click", () => {
    navbarList.classList.toggle("navbar-open");
});
  navbarLink.forEach(link => {
    link.addEventListener('click', () => {
      navbarList.classList.remove('navbar-open');
  });
});