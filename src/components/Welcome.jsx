import React, { useState, useEffect } from 'react';

const Welcome = ({ setPage, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        // Simulating more products by duplicating data
        const moreProducts = [...data, ...data];
        setProducts(moreProducts);
      });
  }, []);

  return (
    <div className="welcome">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
