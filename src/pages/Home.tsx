import React, { useState, useEffect } from 'react';
import './styles/home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Mock data for products
    const productsData = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 9.99 },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 12.99 }
    ];
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home">
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;