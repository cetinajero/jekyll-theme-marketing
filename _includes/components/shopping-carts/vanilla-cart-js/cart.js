'use strict'

const cartDOM = document.querySelector('.cart')

function increaseItem(product, cartItemDOM) {
  cart.forEach(cartItem => {
    if (cartItem.model === product.model) {
      cartItemDOM.querySelector('.cart-item-quantity').innerText = ++cartItem.quantity
      cartItemDOM.querySelector('[data-action="decreaseItem"]').classList.remove('btn-danger')
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  })
}

function decreaseItem(product, cartItemDOM) {
  cart.forEach(cartItem => {
    if (cartItem.model === product.model) {
      if (cartItem.quantity > 1) {
        cartItemDOM.querySelector('.cart-item-quantity').innerText = --cartItem.quantity
        localStorage.setItem('cart', JSON.stringify(cart))
      } else {
        removeItem(product, cartItemDOM)
      }
  
      if (cartItem.quantity === 1) {
        cartItemDOM.querySelector('[data-action="decreaseItem"]').classList.add('btn-danger')
      }
    }
  })
}

function removeItem(product, cartItemDOM) {
  setTimeout(() => cartItemDOM.remove(), 250)
  cart = cart.filter(cartItem => cartItem.model !== product.model)
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCounter(cart.length)
}

function handleActionButtons(cartItemDOM, product) {
  cartItemDOM.querySelector('[data-action="increaseItem"]').addEventListener('click', () => {
    increaseItem(product, cartItemDOM)
  })

  cartItemDOM.querySelector('[data-action="decreaseItem"]').addEventListener('click', () => {
    decreaseItem(product, cartItemDOM)
  })

  cartItemDOM.querySelector('[data-action="removeItem"]').addEventListener('click', () => {
    cart.forEach(cartItem => {
      if (cartItem.model === product.model) {
        removeItem(product, cartItemDOM)
      }
    })
  })
}

if (cart.length > 0) {
  cart.forEach(cartItem => {
    const product = cartItem
    cartDOM.insertAdjacentHTML('beforeend', `
      {% include components/info-cards/cart-item.html %}
    `)

    const cartItemDOM = cartDOM.querySelector(`.cart-item-${product.model}`)
    handleActionButtons(cartItemDOM, product)
  })
}
