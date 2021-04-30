'use strict'

const addToCartButton = document.querySelector('[data-action="addToCart"]')
addToCartButton.addEventListener('click', () => {
  const product = {
    model: document.querySelector('.product-model strong').innerText,
    brand: document.querySelector('.product-brand strong').innerText,
    image: document.querySelectorAll('.product-images img')[1].getAttribute('src'),
    price: parseFloat(document.querySelector('.product-price').innerText.substring(1)),
    description: document.querySelector('.product-description').innerText
  }
  console.table(product)
})
