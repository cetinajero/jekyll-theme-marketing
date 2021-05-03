'use strict'

let cart = (JSON.parse(localStorage.getItem('cart')) || [])
const cartDOM = document.querySelector('.cart')

if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem

    cartDOM.insertAdjacentHTML('beforeend', `
      <div class="cart-item">
        <img class="cart-item-image" src="${product.image}" alt="${product.model}">
        <h3 class="cart-item-model">${product.model}</h3>
        <h3 class="cart-item-brand">${product.brand}</h3>
        <h3 class="cart-item-description">${product.description}</h3>
        <h3 class="cart-item-price">${product.price}</h3>
      </div>
    `)

  })
}
