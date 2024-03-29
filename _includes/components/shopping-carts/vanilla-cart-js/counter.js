'use strict'

let cart = (JSON.parse(localStorage.getItem('cart')) || [])

function updateCounter(count) {
  const icons = document.querySelectorAll('.shopping-cart-icon')

  icons.forEach(icon => {
    const counter = icon.querySelector('span')
    const background = icon.querySelector('.fa-circle')

    if (count > 0) {
      counter.innerHTML = count
      background.classList.remove('d-none')
    } else {
      counter.innerHTML = ''
      background.classList.add('d-none')
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => updateCounter(cart.length), 50)
})
