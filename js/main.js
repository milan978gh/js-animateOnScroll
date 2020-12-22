// date in the footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// animate when in position
const leftImg = document.querySelector('.left-container');
const rightImg = document.querySelector('.right-container');


window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const viewHeight = document.documentElement.clientHeight;

  if (scrollHeight > viewHeight * 0.4) {
    leftImg.classList.add('ani-mation');
    rightImg.classList.add('ani-mation');
  } else {
    leftImg.classList.remove('ani-mation');
    rightImg.classList.remove('ani-mation');
  }
});


