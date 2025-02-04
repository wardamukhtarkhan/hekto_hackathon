"use client"
import React from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProduct from './components/LatestProduct';
import ShopexOffer from './components/ShopexOffer';
import Unique from './components/Unique';
import Products from './components/Products';
import Thfu from './components/Thfu';
import Discount from './components/Discount';
import TopCategory from './components/TopCategory';
import Offers from './components/Offers';
import LastestBlog from './components/LastestBlog';
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Hero/>
      <FeaturedProducts/>
      <LatestProduct/>
      <ShopexOffer/>
      <Unique/>
      <Products/>
      <Thfu/>
      <Discount/>
      <TopCategory/>
      <Offers/>
      <LastestBlog/>
      <Footer /> 
    </div>
  );
};

export default Home;