import React, { useContext } from 'react';

import UserContext from '../../Context/UserContext';

import styles from './style.module.scss';

import hamburgerImg from '../../images/hamburger.svg';
import coreBizLogo from '../../images/logo.svg';
import profileIcon from '../../images/profileicon.svg';
import cartItem from '../../images/carticon.svg';
import searchIcon from '../../images/search.svg';

export function Header() {
  const { totalProductsCart } = useContext(UserContext);

  return (
    <header className={ styles.header__container }>
      <img className={ styles.menu__hamburger } src={ hamburgerImg } alt="menu" />
      <img className={ styles.corebiz__logo } src={ coreBizLogo } alt="logoimage" />
      <div className={ styles.search__input__container }>
        <input className={ styles.search__input } type="text" placeholder="O que está procurando?"/>
        <img className={ styles.search__icon } src={ searchIcon } alt="search icon" />
      </div>
      <nav className={ styles.nav__container }>
        <nav className={ styles.my__account__container }>
          <img className={ styles.profile__icon } src={ profileIcon } alt="profile-icon" />
          <p className={ styles.my__acount__title }>  
            Minha Conta
          </p>
        </nav>
        <button
          type="button"
          className={ styles.cart__container }
        >
          <img className={ styles.cart__icon } src={ cartItem } alt="cart-icon" />
          <span className={ styles.cart__count }>
            {totalProductsCart}
          </span>
        </button>
      </nav>
    </header>
  );
}
