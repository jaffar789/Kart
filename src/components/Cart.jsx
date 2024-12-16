import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart, setPage }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('');

  const handleCheckout = () => {
    if (address && phone && payment) {
      alert('Order Placed Successfully!');
      setPage('welcome');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <button className="home-btn" onClick={() => setPage('welcome')}>
        Go to Home
      </button>
      <div>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Checkout</h3>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option value="">Select Payment Method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="cod">Cash on Delivery</option>
      </select>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Cart;
