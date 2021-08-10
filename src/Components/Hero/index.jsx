import React from 'react';

import Carousel from 'react-elastic-carousel';

import styles from './style.module.scss';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
]


export function Hero() {
  return (
    <div className={ styles.carousel__container }>
      <Carousel breakPoints={ breakPoints }>
          <div className={ styles.carousel__card }>
            <h1 className={ styles.banner__tittle }>
              Olá, o que você está buscando ? <br />
                <p className={ styles.banner__spam }>
                  Criar ou migrar seu e-commerce?
                </p>
            </h1>
            <img src="/images/Banner.png" alt="banner" />
          </div>
          <div className={ styles.carousel__card }>
            <h1 className={ styles.banner__tittle }>
              Olá, o que você está buscando ? <br />
                <p className={ styles.banner__spam }>
                  Criar ou migrar seu e-commerce?
                </p>
            </h1>
            <img src="/images/Banner.png" alt="banner" />
          </div>
        </Carousel>
    </div>
  )
}
