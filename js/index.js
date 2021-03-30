var navbarToggle = document.querySelector(".navbar-toggle");
var navbarList = document.querySelector(".navbar-list");
var navbarLink = document.querySelectorAll(".navbar-link");
  navbarToggle.addEventListener("click", function() {
    navbarList.classList.toggle("navbar-open");
});
  navbarLink.forEach( function(event) {
    event.addEventListener('click', function() {
      navbarList.classList.remove('navbar-open');
  });
});