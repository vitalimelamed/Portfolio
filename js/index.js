var navbarToggle = document.querySelector('.navbar-toggle');
var navbarMenu = document.querySelector('.navbar-list');
var navbarLink = document.querySelectorAll('.navbar-link');
  navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('hamburger-rotate');
    navbarMenu.classList.toggle('menu-show');
});
  navbarLink.forEach( function(link) {
    link.addEventListener('click', function() {
      navbarToggle.classList.remove('hamburger-rotate');
      navbarMenu.classList.remove('menu-show');
  });
});