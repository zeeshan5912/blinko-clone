import React, { useEffect } from 'react';
import CloudKitchenHeader from '../components/dropdown/cloudkitchen/CloudKitchenHeader';
import OurClients from '../components/dropdown/cloudkitchen/OurClients';
import MultiBrandCloud from '../components/dropdown/cloudkitchen/MultiBrandCloud';
import SmartFeatures from '../components/SmartFeatures';
import LetsConnect from '../components/contact/contact';


const CloudKitchen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        
      <CloudKitchenHeader/>
      <OurClients/>
      <MultiBrandCloud/>
      <SmartFeatures/>
      <LetsConnect/>
    </div>
  )
}

export default CloudKitchen
