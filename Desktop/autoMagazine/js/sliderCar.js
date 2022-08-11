const btnNext = document.querySelector('.content__gallery-button_forward');
const btnBack = document.querySelector('.content__gallery-button_back');
const galleryLine = document.querySelector('.content__gallery-line')
let images = document.querySelector('.content__gallery-image').offsetWidth;
let sliceWidth = 0;

window.addEventListener('resize', () => {
  images = document.querySelector('.content__gallery-image'); 
})

btnNext.addEventListener('click', () => {
  sliceWidth++
  galleryLine.style.transform = `translateX(-${sliceWidth * images}px)`;
  if(sliceWidth > 2) {
    sliceWidth = 0
   galleryLine.style.transform = `translateX(-${sliceWidth * images}px)`;
  }
})

btnBack.addEventListener('click', () => {
  sliceWidth --
  galleryLine.style.transform = `translateX(-${sliceWidth * images}px)`;
  if(sliceWidth < 0) {
    sliceWidth = 2
    galleryLine.style.transform = `translateX(-${sliceWidth * images}px)`;
  }
})
