import React, { useEffect } from 'react';
import Resturant from '../components/dropdown/resturant/Resturant';
import BrandsLogo from '../components/dropdown/resturant/BrandsLogo';
import CommercePlatform from '../components/dropdown/resturant/CommercePlatform';
import WhatYouGetWithBlink from '../components/dropdown/resturant/WhatYouGetWithBlink';
import SliderRes from '../components/dropdown/resturant/SliderRes';
import PromotionSection from '../components/dropdown/resturant/PromotionSection';
import GlanceSection from '../components/dropdown/resturant/GlanceSection';
import OrderSection from '../components/dropdown/resturant/OrderSection';
import PaymentIntegrationPartner from '../components/PaymentIntegrationPartner';
import CustomerFocus from '../components/dropdown/resturant/CustomerFocus';
import SmartFeatures from '../components/SmartFeatures';
import LetsConnect from '../components/contact/contact';


const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Resturant/>
      <BrandsLogo/>
      <CommercePlatform/>
      <WhatYouGetWithBlink/>
      <SliderRes/>
      <PromotionSection/>
      <GlanceSection/>
      <OrderSection/>
      <PaymentIntegrationPartner/>
      <CustomerFocus/>
      <SmartFeatures/>
      <LetsConnect/>
    </div>
  )
}

export default ProductsPage;
