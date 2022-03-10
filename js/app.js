const navBar = document.getElementById('navigation');
const toggler = document.getElementById('toggler');
const overlay = document.getElementById('overlay');
const filterItems = document.querySelectorAll('.work__list-element');
const filterButtons = document.querySelector('#filter-btns').children;

// NAV TOGGLER
toggler.addEventListener('click', () => toggleFunction());
overlay.addEventListener('click', () => toggleFunction());

function toggleFunction() {
  navBar.classList.toggle('mobile-nav-active');
  overlay.classList.toggle('ovActive');
  toggler.classList.toggle('fa-list');
  toggler.classList.toggle('fa-times');
}

//FILTER
const showAll = () => {
  for (const element of filterItems) {
    element.classList.add('show');
  }
};
showAll();

const buttonActive = () => {
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', () => {
      for (let j = 0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove('active-filter');
      }
      filterButtons[i].classList.add('active-filter');
    });
  }
};
buttonActive();

const filteringFunction = (category) => {
  for (const el of filterItems) {
    el.style.width = '0px';
    el.style.margin = '10px 0';
    if ('all' == category) {
      el.style.width = '200px';
      el.style.margin = '10px';
    }
    if (el.getAttribute('data-id') == category) {
      el.style.width = '200px';
      el.style.margin = '10px';
    }
  }
};

for (const el of filterButtons) {
  el.addEventListener('click', () => {
    filteringFunction(el.getAttribute('data-target'));
  });
}
