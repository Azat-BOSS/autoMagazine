const btnNext = document.querySelector('.content__gallery-button_forward');
const btnBack = document.querySelector('.content__gallery-button_back');
const galleryLine = document.querySelector('.content__gallery-line')
let images = document.querySelector('.content__gallery-image').offsetWidth;
let count = 0;

window.addEventListener('resize', () => {
  images = document.querySelector('.content__gallery-image'); 
})

btnNext.addEventListener('click', () => {
  count++
  galleryLine.style.transform = `translateX(-${count * images}px)`;
  if(count > 2) {
   count = 0
   galleryLine.style.transform = `translateX(-${count * images}px)`;
  }
})

btnBack.addEventListener('click', () => {
  count --
  galleryLine.style.transform = `translateX(-${count * images}px)`;
  if(count < 0) {
    count = 2
    galleryLine.style.transform = `translateX(-${count * images}px)`;
  }
})
