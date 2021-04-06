var navbarToggle = document.querySelector(".navbar-toggle");
var navbarList = document.querySelector(".navbar-list");
var navbarLink = document.querySelectorAll(".navbar-link");
  navbarToggle.addEventListener("click", function() {
    navbarList.classList.toggle("show");
});
  navbarLink.forEach( function(link) {
    link.addEventListener('click', function() {
      navbarList.classList.remove('show');
  });
});