import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import CartModal from './CartModal';
import CartDetailModal from './CartDetailModal';
import { CartProvider } from './context/CartContext';
import productsData from './data/products.json';
import './styles/styles.css';
import './styles/ecommerce.css'


const EcommerceApp = () => {
  const [cart, setCart] = useState([]);
  const [cartModalShow, setCartModalShow] = useState(false);
  const [cartDetailModalShow, setCartDetailModalShow] = useState(false);

  const openCartModal = () => {
    setCartModalShow(true);
  };

  const closeCartModal = () => {
    setCartModalShow(false);
  };

  const openCartDetailModal = () => {
    setCartDetailModalShow(true);
  };

  const closeCartDetailModal = () => {
    setCartDetailModalShow(false);
  };

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
            <button className="btn btn-primary bootstrap-button" onClick={openCartModal}>
              Voir le Panier
            </button>
          </div>
        </div>
      </div>
      <CartModal show={cartModalShow} onClose={closeCartModal} />
      <CartDetailModal cart={cart} show={cartDetailModalShow} handleClose={closeCartDetailModal} />
    </CartProvider>
  );
};

export default EcommerceApp;
