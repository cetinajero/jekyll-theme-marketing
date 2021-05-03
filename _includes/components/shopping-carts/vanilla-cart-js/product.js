'use strict'

let cart = (JSON.parse(localStorage.getItem('cart')) || [])
const addToCartButton = document.querySelector('[data-action="addToCart"]')

addToCartButton.addEventListener('click', () => {
  const product = {
    model: document.querySelector('.product-model strong').innerText,
    brand: document.querySelector('.product-brand strong').innerText,
    image: document.querySelectorAll('.product-images img')[1].getAttribute('src'),
    price: parseFloat(document.querySelector('.product-price').innerText.substring(1)),
    description: document.querySelector('.product-description').innerText,
    quantity: 1
  }

  const isInCart = (cart.filter(cartItem => (cartItem.model === product.model)).length > 0);

  if (!isInCart) {
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    addToCartButton.innerText = 'In Cart'
    addToCartButton.classList.add('disabled')
  }
})
