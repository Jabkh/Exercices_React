import React, { useContext } from 'react';
import CartContext from './context/CartContext';
import './styles/styles.css'
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Prix: {product.price} €</p>
      <p>Quantité: {product.quantity || 0}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default Product;
