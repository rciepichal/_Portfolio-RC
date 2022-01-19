let navBar = document.getElementById('navigation');
let toggler = document.getElementById('toggler');

toggler.addEventListener('click', () => toggleFunction());

function toggleFunction() {
  navBar.classList.toggle('mobile-nav-active');
  toggler.classList.toggle('fa-list');
  toggler.classList.toggle('fa-times');
}
