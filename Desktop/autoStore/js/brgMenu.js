const btnBurger = document.querySelector('.header__brg-menu');
const headerLinks = document.querySelector('.header__links');
const headerLogo = document.querySelector('.header__logo');

btnBurger.addEventListener('click', () => {
  headerLogo.classList.toggle('header__logo_disabled');
  headerLinks.classList.toggle('header__links_active');
  btnBurger.classList.toggle('header__brg-menu_active');
})

