import React from 'react';

import {UserProvider} from '../../Context/UserProvider';

import {Hero} from '../../Components/Hero';
import {CarouselItem} from '../../Components/CarouselItem';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {PromotionForm} from '../../Components/PromotionForm';

export function HomePage() {
  return (
    <UserProvider>
      <Header/>
      <Hero/>
      <CarouselItem/>
      <PromotionForm/>
      <Footer/>
    </UserProvider>
  );
}
