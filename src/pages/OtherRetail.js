import React, { useEffect } from 'react';
import RetailHeader from '../components/dropdown/Retail/RetailHeader'
import RetailClientSlider from '../components/dropdown/Retail/RetailClientSlider'
import RetailBlinkAdv from '../components/dropdown/Retail/RetailBlinkAdv';
import WhatYouGetWithBlink from '../components/dropdown/resturant/WhatYouGetWithBlink';
import SliderRes from '../components/dropdown/resturant/SliderRes';
import PromotionSection from '../components/dropdown/resturant/PromotionSection';
import RetailChoice from '../components/dropdown/Retail/RetailChoice';
import PaymentIntegrationPartner from '../components/PaymentIntegrationPartner';
import SmartFeatures from '../components/SmartFeatures';
import LetsConnect from '../components/contact/contact';

const OtherRetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <RetailHeader/>
      <RetailClientSlider/>
      <RetailBlinkAdv/>
      <WhatYouGetWithBlink/>
      <SliderRes/>
      <PromotionSection/>
      <RetailChoice/>
      <PaymentIntegrationPartner/>
      <SmartFeatures/>
      <LetsConnect/>
    </div>
  )
}

export default OtherRetail
