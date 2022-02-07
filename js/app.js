const navBar = document.getElementById('navigation');
const toggler = document.getElementById('toggler');
const filterButtons = document.querySelector('#filter-btns').children;
const filterItem = document.querySelector('.work__list').children;

toggler.addEventListener('click', () => toggleFunction());

function toggleFunction() {
  navBar.classList.toggle('mobile-nav-active');
  toggler.classList.toggle('fa-list');
  toggler.classList.toggle('fa-times');
}

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', () => {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove('active');
    }
    filterButtons[i].classList.add('active');
    const target = filterButtons[i].getAttribute('data-target');
    for (let k = 0; k < filterItem.length; k++) {
      filterItem[k].style.display = 'none';
      if (target == filterItem[k].getAttribute('data-id')) {
        filterItem[k].style.display = 'block';
      }
      if (target == 'all') {
        filterItem[k].style.display = 'block';
      }
    }
  });
}
