'use strict'

const isCartEnabled = document.querySelector('.shopping-cart-icon') ? true : false
const addToCartButton = document.querySelector('[data-action="addToCart"]')

function disableCartButton(button) {
  button.innerText = 'In Cart'
  button.classList.add('disabled')
}

function updateButtonState(button) {
  if (cart.length > 0) {
    cart.forEach(cartItem => {
      if (cartItem.model === document.querySelector('.product-model strong').innerText) {
        disableCartButton(button)
      }
    })
  }
}

function enableCartButton(button) {
  button.classList.remove('d-none')

  button.addEventListener('click', () => {
    const product = {
      model: document.querySelector('.product-model strong').innerText,
      brand: document.querySelector('.product-brand strong').innerText,
      image: document.querySelectorAll('.product-images img')[1].getAttribute('src'),
      price: parseFloat(document.querySelector('.product-price').innerText.substring(1)),
      description: document.querySelector('.product-description').innerText,
      url: window.location.href,
      quantity: 1
    }
  
    const isInCart = (cart.filter(cartItem => (cartItem.model === product.model)).length > 0)
  
    if (!isInCart) {
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart))
      updateCounter(cart.length)
      disableCartButton(button)
    }
  })
}

if (isCartEnabled) {
  updateButtonState(addToCartButton)
  enableCartButton(addToCartButton)
} else {
  addToCartButton.remove()
}
