const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
// Open navbar
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
// Close navbar
navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
});