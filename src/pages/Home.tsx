import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Entrepreneurs from '../components/Entrepreneurs';
import Impact from '../components/Impact';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Entrepreneurs />
      <Impact />
      <Testimonials />
    </div>
  );
};

export default Home;