import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';
import productsData from './data/products.json';
import './styles/styles.css';
import './styles/ecommerce.css';


const EcommerceApp = () => {

  return (
    <CartProvider>
      <div className="container">
        <h1 className="mt-4 mb-4">Simple E-Commerce</h1>
        <div className="ecommerce-grid">
          <div className="product-grid">
            {productsData.map((product) => (
              <div key={product.id} className="product-card">
                <Product product={product} />
              </div>
            ))}
          </div>
          <div className="cart-section">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default EcommerceApp;
