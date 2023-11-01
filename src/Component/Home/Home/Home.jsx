import React from 'react';
import Banner from '../Banner/Banner';
import Funnel from '../../Funnel/Funnel';
import ChoseHero from '../../ChoseHero/ChoseHero';
import Gallery from '../../Gallery/Gallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <ShopByCategory></ShopByCategory>
         <Funnel></Funnel>
         <ChoseHero></ChoseHero>
      </div>
   );
};

export default Home;