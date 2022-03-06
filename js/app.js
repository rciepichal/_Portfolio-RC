const navBar = document.getElementById('navigation');
const toggler = document.getElementById('toggler');

// const filterItem = document.querySelector('.work__list').children;

toggler.addEventListener('click', () => toggleFunction());

function toggleFunction() {
  navBar.classList.toggle('mobile-nav-active');
  toggler.classList.toggle('fa-list');
  toggler.classList.toggle('fa-times');
}

// for (let i = 0; i < filterButtons.length; i++) {
//   filterButtons[i].addEventListener('click', () => {
//     for (let j = 0; j < filterButtons.length; j++) {
//       filterButtons[j].classList.remove('active');
//     }
//     filterButtons[i].classList.add('active');
//     const target = filterButtons[i].getAttribute('data-target');
//     for (let k = 0; k < filterItem.length; k++) {
//       filterItem[k].style.display = 'none';
//       filterItem[k].classList.add('delete');
//       if (target == filterItem[k].getAttribute('data-id')) {
//         filterItem[k].style.display = 'block';
//       }
//       if (target == 'all') {
//         filterItem[k].style.display = 'block';
//       }
//     }
//   });
// }

// FILTER

const filterItems = document.querySelectorAll('.work__list-element');
const filterButtons = document.querySelector('#filter-btns').children;

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
        filterButtons[j].classList.remove('active');
      }
      filterButtons[i].classList.add('active');
    });
  }
};
buttonActive();

//Poprawne sortowanie Funkcja:
// const filteringFunction = (category) => {
//   for (const el of filterItems) {
//     el.classList.remove('show');
//     el.classList.add('hidden');
//     if ('all' == category) {
//       el.classList.remove('hidden');
//       el.classList.add('show');
//     }
//     if (el.getAttribute('data-id') == category) {
//       el.classList.remove('hidden');
//       el.classList.add('show');
//     }
//   }
// };

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
