import React, { useEffect } from 'react';
import HeaderAbout from '../components/HeaderAbout'
import FirstLayout from '../components/FirstLayout'
import SmallBusiness from '../components/SmallBusiness'
import CardsSection from '../components/CardsSection'
import Founders from '../components/Founders'
import WhereWe from '../components/WhereWe'
import OurInvestor from '../components/OurInvestor'
import IntegrationPartnersAndLastSection from '../components/IntegrationPartnersAndLastSection'
import { Helmet } from 'react-helmet-async'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Helmet>
        <title>About us</title>
      </Helmet>
      <HeaderAbout/>
      <FirstLayout/>
      <SmallBusiness/>
      <CardsSection/>
      <WhereWe/>
      <Founders/>
      <OurInvestor/>
      <Founders/>
      <Founders/>
      <IntegrationPartnersAndLastSection/>
    </div>
  )
}

export default About
