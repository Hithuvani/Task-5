
  const addToCartButtons = document.querySelectorAll('.card-footer button');
  const shoppingCart = [];

  
  function addToCart(itemName, itemPrice) {
    const item = {
      name: itemName,
      price: itemPrice,
    };
    shoppingCart.push(item);
    updateCartDisplay();
  }


  function updateCartDisplay() {
    const cartList = document.querySelector('#cart-list');
    cartList.innerHTML = '';

    shoppingCart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price}`;
      cartList.appendChild(listItem);
    });
  }

  
  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const itemName = card.querySelector('.card-header h2').textContent;
      const itemPrice = card.querySelector('.card-body').textContent.trim();

      addToCart(itemName, itemPrice);
    });
  });

