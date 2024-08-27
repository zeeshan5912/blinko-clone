import React, { useEffect } from 'react';

import PosHeader from '../components/dropdown/pos/PosHeader'
import PosExtra from '../components/dropdown/pos/PosExtra'
import OurClients from '../components/dropdown/cloudkitchen/OurClients'
import HowPosDifferent from '../components/dropdown/pos/HowPosDifferent'
import AutomateRestaurant from '../components/dropdown/pos/AutomateRestaurant';
import IntegratedPartners from '../components/dropdown/pos/IntegratedPartners';
import RevenueReconciliation from '../components/dropdown/pos/RevenueReconciliation';
import AdvancedPosSystem from '../components/dropdown/pos/AdvancedPosSystem';
import LetsConnect from '../components/contact/contact';

const Pos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <div>
      <PosHeader/>
      <PosExtra/>
      <OurClients/>
      <HowPosDifferent/>
      <AutomateRestaurant/>
      <IntegratedPartners/>
      <RevenueReconciliation/>
      <AdvancedPosSystem/>
      <LetsConnect/>
    </div>
  )
}

export default Pos
