import React from 'react';
import iconAnalytics from '../../../images/delivery/advantage/icon-analytics.png';
import iconSettings from '../../../images/delivery/advantage/icon-settings.png';
import iconRocket from '../../../images/delivery/advantage/icon-rocket.png';

const DeliveryAdvantage = () => {
  return (
    <section className="container-fluid px-0 whyus advantage deliveryAdvantage">
      <div className="custom_container">
        <h1 className="headingTheme headingColor text-center textColor1">
          QCommerce Fleet Management Platform Exclusively Designed For Modern Businesses!
        </h1>
        <div class="section-title-border mt-3"></div>
        <div className="row row-cols-1 row-cols-md-3 pt-4">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div>
                <img
                  src={iconAnalytics}
                  className="img-fluid"
                  alt="Customer Data Ownership"
                />
              </div>
              <h5 className="card-title text-center textColor1">Customer Data Ownership</h5>
              <p className="card-text text-center textColor1">
                Blink’s Quick Commerce Fleet Management Platform gives you complete ownership of your logistics database with user access controls.
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="mt-lg-5">
                <img
                  src={iconSettings}
                  className="img-fluid"
                  alt="Integrated Delivery Management"
                />
              </div>
              <h5 className="card-title text-center textColor1">Integrated Delivery Management</h5>
              <p className="card-text text-center textColor1">
                Our fleet management platform offers a seamless last mile experience with real-time insights through a system integrated with our merchant portal. Leverage our fully automated route planning and optimization capabilities.
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div>
                <img
                  src={iconRocket}
                  className="img-fluid"
                  alt="Rider Location Tracking"
                />
              </div>
              <h5 className="card-title text-center textColor1">Rider Location Tracking</h5>
              <p className="card-text text-center textColor1">
                Know your rider attendance, and detect your riders’ locations in real-time through our geo-fenced fleet management portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAdvantage;
