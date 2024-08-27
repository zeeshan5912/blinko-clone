import React from 'react';
import baskinRobinsAppMockup from '../images/baskin-robins-app-mockup.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faBriefcase, faChartBar, faBullhorn,  } from '@fortawesome/free-solid-svg-icons';
const data = [
  {
    icon: faTools,
    title: 'Instant Deliveries',
    text: 'Blink’s Online Ordering System provides an end-to-end technology stack built for highly optimized transactional and fulfillment speed'
  },
  {
    icon: faBriefcase,
    title: 'Multi-Location Fulfilment Model',
    text: 'Leverage location-specific product availability, delivery zones, pricing, promotions, and food delivery analytics is now possible with Blink'
  },
  {
    icon: faChartBar,
    title: 'Location-Based Ordering',
    text: 'With our Online Ordering System for restaurants and supermarkets, you can dispatch deliveries from your customers’ nearest outlets to minimize delivery times and costs'
  },
  {
    icon: faBullhorn,
    title: 'Time Optimized Processes',
    text: 'Efficient order fulfillment processes are backed by smart automation, geo-fencing and synchronized sub-systems'
  },
  
];
const BestOrderSystem = () => {
  return (
    <section className="container-fluid px-0 bestOrderSystem overflow-x-hidden">
      <div className="container sec_headText mt-5">
        <h1 className="text-center">
          There’s A Reason Why Blink Is The Best Online Ordering System
        </h1>
        <div class="section-title-border mt-3"></div>
        <p className="text-center">
          Blink’s online ordering system for supermarkets and restaurants
          enables all consumer retail businesses to multiply their business
          growth.<br />
          <span>Here’s what we’ve found:</span> 
        </p>
      </div>
      <div className="container imgpresentation">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-center">Increased User Retentention</h4>
            <p className="text-center">
              50% of our end-users placed repeat orders.
            </p>
            <h4 className="text-center">Fast Order Speed</h4>
            <p className="text-center">
              Order placement on our platform takes only 30 seconds.
            </p>
          </div>
          <div className="col-lg-4 mb-5 d-flex justify-content-center align-items-center">
            <img src={baskinRobinsAppMockup} alt="Baskin Robins App Mockup" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-center">Greater Signup Conversion</h4>
            <p className="text-center">
              60% of end-customers who signed up placed an order.
            </p>
            <h4 className="text-center">Exponential Sales Growth</h4>
            <p className="text-center">Orders scaled 2X in 3 months.</p>
          </div>
        </div>
      </div>
      <div className="container sec_headText mt-5">
        <h1 className="text-center sec_headText1 ">
          Blink’s Online Ordering System Has The Super Powers Your Brand Needs
        </h1>
        <div class="section-title-border mt-3"></div>
        <p className="text-center">
          A ‘new normal’ has emerged for the delivery speeds that customers
          expect when they order online. Blink’s Online Ordering System equips
          brands for this by providing them with:
        </p>
      </div>
      <div className="custom_container">
        <div className="features-container">
      {data.map((feature, index) => (
        <div key={index} className="feature-card mb-5">
          <FontAwesomeIcon icon={feature.icon} size="5x" className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
      </div>
      {/* <div className="container imgpresentation in2">
        <div className="row w-100">
          <div className="col-lg-6 d-flex flex-column">
            <h4 className="text-center text-lg-start">Instant Deliveries</h4>
            <p className="p-lg-0">
              Blink’s Online Ordering System provides an end-to-end technology
              stack built for highly optimized transactional and fulfillment
              speed
            </p>
            <h4 className="">Location-Based Ordering</h4>
            <p className="p-lg-0">
            Location-Based Ordering
              With our Online Ordering System for restaurants and supermarkets,
              you can dispatch deliveries from your customers’ nearest outlets
              to minimize delivery times and costs
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-column">
            <h4 className="">Multi-Location Fulfilment Model</h4>
            <p className="p-lg-0">
               Multi-Location Fulfilment Model Leverage location-specific product availability, delivery zones,
              pricing, promotions, and food delivery analytics is now possible
              with Blink
            </p>
            <h4 className="">Time Optimized Processes</h4>
            <p className="p-lg-0">
           Time Optimized Processes   Efficient order fulfillment processes are backed by smart
              automation, geo-fencing and synchronized sub-systems
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default BestOrderSystem;
