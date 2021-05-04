'use strict'

let cart = (JSON.parse(localStorage.getItem('cart')) || [])
const cartDOM = document.querySelector('.cart')

if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem

    cartDOM.insertAdjacentHTML('beforeend', `
      <div class="cart-item-${product.model}">
        <img class="cart-item-image" src="${product.image}" alt="${product.model}">
        <h3 class="cart-item-model">${product.model}</h3>
        <h3 class="cart-item-brand">${product.brand}</h3>
        <h3 class="cart-item-description">${product.description}</h3>
        <h3 class="cart-item-price">${product.price}</h3>
        <button class="btn btn-primary btn-small" data-action="decreaseItem">&minus;</button>
        <h3 class="cart-item-quantity">${product.quantity}</h3>
        <button class="btn btn-primary btn-small" data-action="increaseItem">&plus;</button>
        <button class="btn btn-danger btn-small" data-action="removeItem">&times;</button>
      </div>
    `)

    const cartItemDOM = cartDOM.querySelector(`.cart-item-${product.model}`)
    cartItemDOM.querySelector('[data-action="increaseItem"]').addEventListener('click', () => {
      cart.forEach(cartItem => {
        if (cartItem.model === product.model) {
          cartItemDOM.querySelector('.cart-item-quantity').innerText = ++cartItem.quantity
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      })
    })

  })
}
