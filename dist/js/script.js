const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const hamburger2 = document.querySelector('.hamburger'),
      menu2 = document.querySelector('.menu'),
      closeElem2 = document.querySelector('.menu__list');

hamburger2.addEventListener('click', () => {
    menu2.classList.add('active');
});

closeElem2.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-rectangle span');

percent.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
});