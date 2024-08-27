import React from 'react';
import DevicesImage from '../images/about/Devices.png'; // Replace with the actual path to your image

const SmallBusiness = () => {
  return (
    <section className="container-fluid px-0 layered-background">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column p-0 px-3 px-lg-0">
            <h2 style={{fontWeight:900}}>From A Small Business To Market Leaders</h2>
            <p>
              We were certain that we couldn’t be an aggregator anymore. Deeply
              concerned by our discoveries, we deep-dove. The idea of developing
              a quick commerce platform struck us, and not just any platform –
              plug-and-play technology that comes with a branded mobile app and
              web store built to solve the problems that our customers and
              merchants faced.
            </p>
            <p>
              In mid-2020, we bid goodbye to Eat Mubarak, and welcomed Blink.
              Initially, Blink’s mission was to enable brick-and-mortar
              restaurants and supermarkets for direct online ordering and
              instant deliveries. All of that in just a blink of the eye.
            </p>
            <p>
              What was initially a direct online ordering platform evolved into
              something much, much bigger and more versatile than our
              co-founders had ever imagined – an all-in-one quick commerce stack
              with built-in customer engagement and business intelligence tools
              that revolutionizes the way brick-and-mortar businesses interact
              with their customers.
            </p>
            <p>
              We have conversations with our customers to drive innovation. In
              doing so, we realized that Blink would be good for businesses
              across industries – restaurants, supermarkets, pharmacies, fashion
              brands, and any other brick-and-mortar retailer that needs a
              direct online retail channel.
            </p>
          </div>
          <div className="col-lg-7 d-flex justify-content-center align-items-center">
            <img 
            className="img-fluid"
             src={DevicesImage} 
             alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBusiness;
