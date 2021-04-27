console.clear()
const box = document.querySelector('.box')
const buttonRot = document.querySelector('.button-rotation')
const buttonBack = document.querySelector('.button-background')
const buttonRad = document.querySelector('.button-radius')

buttonRot.addEventListener('click', () => {
  box.classList.add('rotation')
})

buttonBack.addEventListener('click', () => {
  box.classList.toggle('blue')
})

buttonRad.addEventListener('click', () => {
  box.classList.add('radius')
})
