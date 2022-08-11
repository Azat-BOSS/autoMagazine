const dotBtn = document.querySelectorAll('.content__read-dot');
const contentText = document.querySelectorAll('.content__read-paragraph');


dotBtn[0].addEventListener('click', () => {
  contentText[1].classList.add('content__read-paragraph_disabled');
  contentText[0].classList.remove('content__read-paragraph_disabled');
  dotBtn[0].classList.add('content__read-dot_active')
  dotBtn[1].classList.remove('content__read-dot_active')
})

dotBtn[1].addEventListener('click', () => {
  contentText[0].classList.add('content__read-paragraph_disabled');
  contentText[1].classList.remove('content__read-paragraph_disabled');
  dotBtn[1].classList.add('content__read-dot_active')
  dotBtn[0].classList.remove('content__read-dot_active')
})