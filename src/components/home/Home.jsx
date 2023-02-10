import React from 'react'
import "./Home.scss";
import BigSwiper from '../bigSwiper/BigSwiper';
import Delivery from './../delivery/Delivery';
import Cartinca from '../cartinca/Cartinca';
import Product from '../product/Product';

function Home() {
  return (
    <>
      <BigSwiper/>
      <Delivery/>
      <Cartinca/>
      <Product/>
      
    </>
  )
}

export default Home