let nav = document.querySelectorAll('.header_nav__item');

for (i = 0; i < nav.length; i++) {
  nav[i].onclick = function () {
    this.classList.toggle('header_nav__item__active');
  }
}

let item = document.querySelectorAll('.nav_item');
for (i = 0; i < item.length; i++) {
  this.style.color = 'white';
}