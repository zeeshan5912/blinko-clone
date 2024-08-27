// src/pages/HomePage.js
import React, { useEffect } from 'react';
// import react {useEffect}
import ActionableIntelligence from '../components/ActionableIntelligence';
import BestOrderSystem from '../components/BestOrderSystem';
import ChooseUs from '../components/ChooseUs';
import LetsConnect from '../components/contact/contact';
// import LetsConnect from '../components/contact/contactInfo/contactInfo';
import Header from '../components/Header';
import LatestPosts from '../components/LatestPosts';
// import LetsConnect from '../components/Let\'sConnect';
import OurCustomers from '../components/OurCustomers';
import PaymentIntegrationPartner from '../components/PaymentIntegrationPartner';
import SmartFeatures from '../components/SmartFeatures';
import Subscribe from '../components/Subscribe';
import VideoSection from '../components/VideoSection';
import { Helmet } from 'react-helmet-async';
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
   <Header />
      <ChooseUs />
      <VideoSection />
       <SmartFeatures />
      <OurCustomers />
      <ActionableIntelligence/>
      <BestOrderSystem/>
      <PaymentIntegrationPartner/>
      <Subscribe/>
      <LatestPosts/>
      <LetsConnect/>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
