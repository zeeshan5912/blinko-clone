import React from 'react';
// import './CommerceRestaurant.scss';

import sparAppMockup from '../../../images/supermarket/spar-app-mockup.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faBriefcase, faChartBar } from '@fortawesome/free-solid-svg-icons';
const data = [
  {
    icon: faTools,
    title: 'Digital Enablement',
    text: 'Blink offers you a branded mobile app and website with seamless user experiences and an in-house technical support team to help your Supermarket business go digital with ease.'
  },
  {
    icon: faBriefcase,
    title: 'Inventory Management',
    text: 'Never worry about receiving orders for sold-out SKUs. Blink’s built-in inventory management system automatically updates your online stock quantities in real-time, and only displays in-stock items on your store front. Avail of it for a low, one-time cost.'
  },
  {
    icon: faChartBar,
    title: 'Speed To Market',
    text: 'Our revolutionary technology is designed for your Supermarket business to go live in only 7 days! Deliver your customers whatever they want, wherever they are with Blink as your digital transformation partner.'
  },
];
const featureCardStyle = {
  flex: '1',
  margin: '20px',
  padding: '20px',
  // border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
};
const CommerceSupermarket = () => {
  return (
    <>
      <section className="container-fluid px-0 commerceRestau layered-background">
        <div className="custom_container2">
          <h1 className="text-center">
            Blink Is The Best Online Ordering System For Grocery Stores For Supermarkets!
          </h1>
          <div className="section-title-border mb-3"></div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center my-4 my-lg-0">
              <img src={sparAppMockup} alt="Spar App Mockup" />
            </div>
            <div className="col-lg-6 para">
              <p>
                Blink is an all-in-one online grocery ordering solution optimized for supermarkets with built-in order management, customer engagement,
                and business analytics tools along with a fleet management system. Blink enables you to conveniently manage orders, items, promotions,
                payments, customer data, and more in one quick commerce stack.
              </p>
              <p>
                Delight more shoppers by processing orders faster and more efficiently – all through a fully integrated grocery quick commerce platform
                for supermarkets.
              </p>
              <p>Blink is branded, comprehensive, affordable, and always ready to scale!</p>
            </div>
          </div>
        </div>
      </section>
       <section className="container-fluid px-0 whyus advantage">
      <div className="custom_container">
        <h1 className="headingTheme headingColor text-center">
          The Blink Advantage
        </h1>
        <div className="section-title-border mb-3"></div>
        <div className="features-container">
      {data.map((feature, index) => (
        <div key={index} style={featureCardStyle} className="feature-card">
          <FontAwesomeIcon icon={feature.icon} size="5x" className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
      </div>

    </section>
    </>
  );
};

export default CommerceSupermarket;
