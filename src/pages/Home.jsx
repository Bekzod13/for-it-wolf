import React from 'react';
import Client from '../components/client/Client';

// import components
import Hero from '../components/hero/Hero';
import Offer from '../components/offer/Offer';
import Products from '../components/products/Products';

const Home = () => {
  return (
    <div className='container home'>
      <Hero />
      <Offer />
      <Products />
      <Client />
    </div>
  )
}

export default Home