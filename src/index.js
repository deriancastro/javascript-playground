const box = document.querySelector('[data-box]')
const rotate = document.querySelector('[name="rotation"]')

rotate.addEventListener('input', event => {
  box.style.transform = 'rotate(' + rotate.value + 'deg)'
})
