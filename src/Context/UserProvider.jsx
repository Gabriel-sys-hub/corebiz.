import React, { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import UserContext from './UserContext';

import getCorebizProducts from '../Services/requestCorebizAPI';

export function UserProvider({ children }) {
  const [productsApi, setProductsApi] = useState([]);
  const [userCart, handlePurchaseUserCart] = useState([]);
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  useEffect(() => {
    const setProductsContext = async () => {
      const products = await getCorebizProducts();
      setProductsApi(products);
    };
    setProductsContext();
  }, []);

  const setCartQuantity = useCallback(
    () => {
      if (localStorage.getItem('userCart')) {
        const userCartSaved = JSON.parse(localStorage.getItem('userCart'));
        handlePurchaseUserCart(userCartSaved)
      }
      setTotalProductsCart(userCart.length);
    },
    [userCart.length],
  )

  useEffect(() => {
    setCartQuantity();
  }, [setCartQuantity]);

  function setProductsCart(newProduct) {
    if (userCart.length === 0) {
      const newCart = {...newProduct, quantity: 1}
      handlePurchaseUserCart([...userCart, newCart]);
      localStorage.setItem('userCart', JSON.stringify(newCart))
      return;
    }
    handlePurchaseUserCart([...userCart, {...newProduct, quantity: 1}]);
    localStorage.setItem('userCart', JSON.stringify([...userCart, {...newProduct, quantity: 1}]))   
  }

  const context = {
    productsApi,
    userCart,
    setProductsCart,
    totalProductsCart,
    setTotalProductsCart,
  };

  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
