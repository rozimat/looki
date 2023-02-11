import React from 'react'
import "./Home.scss";
import BigSwiper from '../bigSwiper/BigSwiper';
import Delivery from './../delivery/Delivery';
import Cartinca from '../cartinca/Cartinca';
import Product from '../product/Product';
import Products from '../products/Products';
import CardBlogs from '../cardBlogs/CardBlogs';



function Home() {
  return (
    <>
      <BigSwiper/>
      <Delivery/>
      <Cartinca/>
      <Product/>
      <Cartinca/>
      <Products/>
      <CardBlogs/>
    </>
  )
}

export default Home