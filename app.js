// menu module
const navLinks = document.getElementById('navLinks')

function hideMenu() {
    navLinks.style.right = '-200px'
}

function showMenu() {
    navLinks.style.right = '0'
}


function slidesPlugin(activeSlide) {
const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  } )
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')  
  })
}
}

slidesPlugin(2)