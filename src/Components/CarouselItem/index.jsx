import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";

import './style.css';

import Carousel from "react-elastic-carousel";

import StarRatings from 'react-star-ratings';

import styles from './style.module.scss';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function CarouselItem() {
  const { productsApi, setProductsCart } = useContext(UserContext);

  const cardItemCreator = (productsApi) => {
    const cartList = productsApi.map((product) => (
      <div className={ styles.card__container } key={product.productId}>
        {product.listPrice > product.price ? (
          <p className={ styles.off__card } />
        ) : null}
        <img alt={`foto ${product.productName}`} src={product.imageUrl} />
        <StarRatings
          rating={product.stars}
          starRatedColor="red"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="1px"
        />
        <div className={ styles.detail__container }>
          <p className={ styles.product__name }>
            {product.productName}
          </p>

          {product.listPrice !== null ? (
            <p className={ styles.product__discount__price }>
              {`de R$ ${Number(product.listPrice / 100).toFixed(2)}`}
            </p>
          ) : null}
          <p className={ styles.product__price }>
            {`por R$ ${Number(product.price / 100).toFixed(2)}`}
          </p>

          {product.installments.length > 0 ? (
            <p className={ styles.product__price__multiply }>
              {`ou em ${product.installments[0].quantity}x de R$ ${Number(
                product.installments[0].value / 100
              ).toFixed(2)}`}
            </p>
          ) : null}
          <button
            type="button"
            className={ styles.product__buy__btn }
            onClick={() => setProductsCart(product)}
          >
            Comprar
          </button>
        </div>
      </div>
    ));
    return (
      <Carousel breakPoints={breakPoints}>
        {cartList.map((item) => (
          <div key={item.productID}> {item} </div>
        ))}
      </Carousel>
    );
  };
  
  return (
    <section className={ styles.carousel__section__container }>
      <h3 className={ styles.carousel__title }>
        Mais Vendidos
        <hr />
      </h3>
      {cardItemCreator(productsApi)}
    </section>
  );
}
