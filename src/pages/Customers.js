import React, { useEffect } from 'react';
import CustomerHeader from '../components/CustomerHeader'
import CustomerSlider from '../components/CustomerSlider'
import { Helmet } from 'react-helmet-async'
import DirectQuickCommerce from '../components/DirectQuickCommerce';
import CustomerFocus from '../components/CustomerFocus';
import CapterraReviews from '../components/CapterraReviews';
import LetsConnect from '../components/contact/contact';

const Customers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <CustomerHeader/>
      <CustomerSlider/>
      <DirectQuickCommerce/>
      <CustomerFocus/>
      <CapterraReviews/>
      <LetsConnect/>
    </div>
  )
}

export default Customers
