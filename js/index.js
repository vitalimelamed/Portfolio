const navbarToggle = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar-list');
const navbarLink = document.querySelectorAll('.navbar-brand, .navbar-link');

  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('navbar-open');
    navbarList.classList.toggle('navbar-show');
});

  navbarLink.forEach( (navbarLink) => {
    navbarLink.addEventListener('click', () => {
      navbarToggle.classList.remove('navbar-open');
      navbarList.classList.remove('navbar-show');
  });
});