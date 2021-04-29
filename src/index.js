const box = document.querySelector('[data-box]')
const rotate = document.querySelector('[name="rotation"]')
const size = document.querySelector('[name="size"]')
const radius = document.querySelector('[name="radius"]')
const color = document.querySelector('[name="color"]')

function getRandom(input) {
  return Math.floor(Math.random() * input)
}

rotate.addEventListener('input', event => {
  box.style.transform = 'rotate(' + rotate.value + 'deg)'
})

size.addEventListener('input', event => {
  box.style.width = size.value + 'px'
  box.style.height = size.value + 'px'
  console.log(size.value)
})

radius.addEventListener('input', event => {
  box.style.borderRadius = radius.value + 'px'
})

color.addEventListener('input', event => {
  const input = color.value

  const A = getRandom(input)
  const B = getRandom(input)
  const C = getRandom(input)

  box.style.background = 'rgb(' + A + ',' + B + ',' + C + ')'
})
