let cart = [];
let total = 0;

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  total = cart.reduce((acc, item) => acc + item.price, 0);
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(name, price);
  });
});

document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty');
  } else {
    alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}`);
    cart = [];
    updateCart();
  }
});
