import React, { useEffect } from 'react';
import DeliveryHeader from '../components/dropdown/delivery/DeliveryHeader'
import DeliveryClientSlider from '../components/dropdown/delivery/DeliveryClientSlider';
import DeliveryAdvantage from '../components/dropdown/delivery/DeliveryAdvantage';
import ComprehensiveTechnologyStack from '../components/dropdown/delivery/ComprehensiveTechnologyStack';
import FleetManagement from '../components/dropdown/delivery/FleetManagement';
import PaymentIntegrationPartner from '../components/PaymentIntegrationPartner';
import LetsConnect from '../components/contact/contact';

const Delivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <DeliveryHeader/>
      <DeliveryClientSlider/>
      <DeliveryAdvantage/>
      <ComprehensiveTechnologyStack/>
      <FleetManagement/>
      <PaymentIntegrationPartner/>
      <LetsConnect/>
    </div>
  )
}

export default Delivery
