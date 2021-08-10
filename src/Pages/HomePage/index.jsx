import React from 'react';

import styles from './style.module.scss';

import {Hero} from '../../Components/Hero';
import {CarouselItem} from '../../Components/CarouselItem';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {PromotionForm} from '../../Components/PromotionForm';

export function HomePage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CarouselItem/>
      <PromotionForm/>
      <Footer/>
    </div>
  );
}
