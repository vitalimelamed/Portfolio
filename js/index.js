const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.menu-link');
  menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});
  menuLinks.forEach(link => {
  link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  });
});