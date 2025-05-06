const burgerBtn = document.querySelector('.burger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close'),
  overlay = document.querySelector('.menu__overlay');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
  values = document.querySelectorAll('.skills__rating-value');

counters.forEach((item, i) => {
  values[i].style.width = item.textContent;
});