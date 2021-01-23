// Call to action on open navbar and click navbar link
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar__link");
// Click event to open menu
navbarToggle.addEventListener("click", () => {
  document.body.classList.toggle("navbar-open");
});
// jQuery prevent scroll while menu is open
$(".navbar__list").on("scroll touchmove mousewheel", function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});
// Click on a navbar link and close menu
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("navbar-open");
  });
});
// jQuery smooth Scroll
$(document).ready(function () {
  const scrollLink = $(".navbar__link, .btn, .bottom-link");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });
});
// Top button smooth scroll with fade in and fade out animation on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".btn-top").fadeIn();
    } else {
      $(".btn-top").fadeOut();
    }
  });
  $(".btn-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
