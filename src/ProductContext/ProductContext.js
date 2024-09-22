import React, { createContext, useState } from 'react';
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };
  const addToCart = (newItem) => {
    // setCartItems((prevItems) => [...prevItems, newItem]);
    const stockKey = `${newItem.selectedColor}_${newItem.selectedSize}`;
    const product = products.find(p => p.productName === newItem.productName);
    if (!product) {
      alert('Product not found.');
      return;
    }
    const availableStock = product.stock[stockKey] || 0;
    const existingItemIndex = cartItems.findIndex(
      item =>
        item.productName === newItem.productName &&
        item.selectedSize === newItem.selectedSize &&
        item.selectedColor === newItem.selectedColor
    );
    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity < availableStock) {
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        alert('Quantity exceeds available stock.');
      }
    } else {
      if (availableStock > 0) {
        setCartItems((prevItems) => [...prevItems, { ...newItem, quantity: 1 }]);
      } else {
        alert('Quantity exceeds available stock.');
      }
    }
  };

  const removeFromCart = (itemToRemove) => {
    // setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    const updatedCartItems = cartItems.filter(item =>
      !(item.productName === itemToRemove.productName &&
        item.selectedSize === itemToRemove.selectedSize &&
        item.selectedColor === itemToRemove.selectedColor)
    );
    setCartItems(updatedCartItems);
  };
  const updateCartItemQuantity = (product, quantity) => {
    const stockKey = `${product.selectedColor}_${product.selectedSize}`;
    const productDetails = products.find(p => p.productName === product.productName);
    const availableStock = productDetails ? productDetails.stock[stockKey] : 0;
    if (quantity > availableStock) {
      alert('Quantity exceeds available stock.');
      return;
    }
    setCartItems(cartItems.map(item =>
      item.productName === product.productName &&
      item.selectedSize === product.selectedSize &&
      item.selectedColor === product.selectedColor
        ? { ...item, quantity }
        : item
    ));
  };
  return (
    <ProductContext.Provider value={{ removeFromCart , setProducts , cartItems , products, addToCart , addProduct , updateCartItemQuantity}}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
