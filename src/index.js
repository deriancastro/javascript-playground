const box = document.querySelector('[data-box]')
const input = document.querySelector('[data-input]')
const form = document.querySelector('[data-form]')

console.log(box)
console.log(input)

form.addEventListener('submit', event => {
  event.preventDefault()
  console.log(input.value)
  box.style.backgroundColor = input.value
  input.value = ''
  input.focus()
})
