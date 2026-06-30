document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var closeBtn = document.getElementById('closeMenu');
  var nav = document.getElementById('mobileNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.add('open');
    });
  }
  if (closeBtn && nav) {
    closeBtn.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  }
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }
});
