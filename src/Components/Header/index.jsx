import React, { useContext } from 'react';

import UserContext from '../../Context/UserContext';

import { Link } from 'react-router-dom';

import styles from './style.module.scss';

export function Header() {
  const { totalProductsCart } = useContext(UserContext);

  return (
    <header className={ styles.header__container }>
      <img className={ styles.menu__hamburger } src="/images/hamburger.svg" alt="menu" />
      <img className={ styles.corebiz__logo } src="/images/logo.svg" alt="logoimage" />
      <div className={ styles.search__input__container }>
        <input className={ styles.search__input } type="text" placeholder="O que está procurando?"/>
        <img className={ styles.search__icon } src="/images/search.svg" alt="search icon" />
      </div>
      <nav className={ styles.nav__container }>
        <Link to="/myAcount">
          <nav className={ styles.my__account__container }>
            <img className={ styles.profile__icon } src="/images/profileicon.svg" alt="profile-icon" />
            <p className={ styles.my__acount__title }>  
              Minha Conta
            </p>
          </nav>
        </Link>
        <Link to="/cart">
          <button
            type="button"
            className={ styles.cart__container }
          >
            <img className={ styles.cart__icon } src="/images/carticon.svg" alt="cart-icon" />
            <span className={ styles.cart__count }>
              {totalProductsCart}
            </span>
          </button>
        </Link>
      </nav>
    </header>
  );
}
