import React, { useEffect } from 'react';
import SuperHeader from '../components/dropdown/supermarket/SuperHeader'
// import SliderRes from '../components/dropdown/resturant/SliderRes'
// import CustomerSlider from '../components/CustomerSlider'
import BrandsLogo from '../components/dropdown/resturant/BrandsLogo'
import CommerceSupermarket from '../components/dropdown/supermarket/CommerceSupermarket';
import WhatYouGetWithBlink from '../components/dropdown/resturant/WhatYouGetWithBlink';
import SliderRes from '../components/dropdown/resturant/SliderRes';
import PromotionSection from '../components/dropdown/resturant/PromotionSection';
import PaymentIntegrationPartner from '../components/PaymentIntegrationPartner';
import SmartFeatures from '../components/SmartFeatures';
import LetsConnect from '../components/contact/contact';

const SuperMart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <SuperHeader/>
      <BrandsLogo/>
      <CommerceSupermarket/>
      <WhatYouGetWithBlink/>
      <SliderRes/>
      <PromotionSection/>
      <PaymentIntegrationPartner/>
      <SmartFeatures/>
      <LetsConnect/>
    </div>
  )
}

export default SuperMart
