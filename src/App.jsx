import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState('register');
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar setPage={setPage} cartCount={cart.length} />
      {page === 'register' && <Register setPage={setPage} />}
      {page === 'login' && <Login setPage={setPage} setUser={setUser} />}
      {page === 'welcome' && (
        <Welcome setPage={setPage} addToCart={addToCart} />
      )}
      {page === 'cart' && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          setPage={setPage}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
