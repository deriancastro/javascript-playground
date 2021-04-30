import getAllElements from './utils/getAllElements'

const boxes = getAllElements('.box')

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('blue')
  })
})
