const header = document.querySelector('.header');
const headerLinks = header.querySelector('.header__links');
const brgButton = header.querySelector('.brg-menu');
const headerLogo = header.querySelector('.header__logo')
const footerBtn = document.querySelector('.footer__button');

brgButton.onclick = () => {
  header.classList.toggle('header_active')
  headerLinks.classList.toggle('header__links_active');
  headerLogo.classList.toggle('header__logo_disabled');
  brgButton.classList.toggle('brg-menu_active')
}

let rotation = 0
headerLogo.onclick = () => {
  rotation -=90;
  headerLogo.style.transform = `rotate(${rotation}deg)`;
}

footerBtn.onclick = (event) => {
  event.preventDefault()
  footerBtn.textContent = "Спасибо!"
}



