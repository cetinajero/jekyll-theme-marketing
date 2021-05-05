'use strict'

const productModel = document.querySelector('.product-model strong').innerText
const isCartEnabled = document.querySelector('.shopping-cart-icon') ? true : false
const isProductInCart = (cart.filter(i => (i.model === productModel)).length > 0)
const addToCartButton = document.querySelector('[data-action="addToCart"]')

function showCartButton(button) {
  button.classList.remove('d-none')
}

function disableCartButton(button) {
  button.innerText = 'In Cart'
  button.classList.add('disabled')
}

function enableCartButton(button) {
  button.addEventListener('click', () => {
    const product = {
      model: productModel,
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
  if (isProductInCart)
    disableCartButton(addToCartButton)
  else
    enableCartButton(addToCartButton)

  showCartButton(addToCartButton)
} else {
  addToCartButton.remove()
}
