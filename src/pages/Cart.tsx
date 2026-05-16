import React, { useState, useEffect } from 'react';
import './styles/cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveFromCart = (product: any) => {
    setCart(cart.filter((item: any) => item.id !== product.id));
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((product: any) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;