let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  updateCartCount(cartCount);
}

function updateCartCount(count) {
  const cartLink = document.getElementById('cartLink');
  cartLink.textContent = `Shopping Cart (${count})`;
}

function goToCart() {
  // Redirect to cart page
  window.location.href = 'cart.html';
}

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = { name: productName, price: price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart.length);
  }

  function updateCartCount(count) {
    const cartLink = document.getElementById('cartLink');
    cartLink.textContent = `Shopping Cart (${count})`;
  }