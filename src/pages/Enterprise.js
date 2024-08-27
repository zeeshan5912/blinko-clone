import React, { useEffect } from 'react';
import EnterpriseHeader from '../components/dropdown/enterprise/EnterpriseHeader'
import SuitableFor from '../components/dropdown/enterprise/SuitableFor';
import EnterpriseClients from '../components/dropdown/enterprise/EnterpriseClients';
import LetsConnect from '../components/contact/contact';

const Enterprise = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <EnterpriseHeader/>
      <SuitableFor/>
      <EnterpriseClients/>
      <LetsConnect/>
    </div>
  )
}

export default Enterprise
