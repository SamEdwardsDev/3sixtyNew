// const navbar = document.querySelector('.nav');
// window.onscroll = () => {
//   if (window.scrollY > 150) {
//     navbar.classList.add('scrolled');
//     navbar.classList.remove('transparent');
//   } else {
//     navbar.classList.add('transparent');
//     navbar.classList.remove('scrolled');
//   }
// };

// This is a javacsript Comment

// Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger__img');
const mobNav = document.querySelector('.mobile__nav');

hamburger.addEventListener('click', function () {
  mobNav.classList.toggle('active');
  mobNav.classList.contains('active')
    ? (hamburgerImg.src = './assets/img/close_menu.png')
    : (hamburgerImg.src = './assets/img/hamburger.png');
});
