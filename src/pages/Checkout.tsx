import React, { useState, useEffect } from 'react';
import './styles/checkout.css';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handlePayment = () => {
    console.log(cart, paymentMethod);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button onClick={handlePayment}>Pay</button>
      </form>
    </div>
  );
}
export default Checkout;