import React from 'react';

// Import your images
import cafeImage from '../../../images/pos/automate/cafe.png';
import mobileAppImage from '../../../images/pos/automate/branded-mobile-app__graphic-500-w.png';
import computerImage from '../../../images/pos/automate/computer.png';
import analyticsImage from '../../../images/pos/automate/analytics-and-insights__graphic-500-w-puypktewemcuykq45ntdfzdjpgyi0ut4bpcaz48f10.png';
import integrationImage from '../../../images/pos/automate/switch-ppl55e49s78nu7uhd2diyzsdzcujldeg517h6jxmce.png';
import customersImage from '../../../images/pos/automate/get-more-customers.png';

const AutomateRestaurant = () => {
  return (
    <section className="container-fluid fstLay automateRestur">
      <div className="custom-container">
        <h1 className="headingColor headingTheme textColor1 text-center">
          Everything you need to automate your restaurant operations under one platform
        </h1>
        <div class="section-title-border mt-0 mb-5"></div>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={cafeImage} style={{ maxWidth: '300px' }} alt="" />
          </div>
          <div className="col-lg-6 mb-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Inventory & Recipe Management</h2>
              <p className="mb-lg-4 textColor1">
                Consolidate inventory and standardize product recipes across all channels
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 mb-lg-4 mt-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Menu Management</h2>
              <p className="mb-lg-4 textColor1">
                Enhance your customer experience by boosting revenues and operational efficiency
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={mobileAppImage} alt="" style={{ maxWidth: '300px' }} />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={computerImage} style={{ maxWidth: '300px' }} alt="" />
          </div>
          <div className="col-lg-6 mb-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Order Management</h2>
              <p className="mb-lg-4 textColor1">
                Centralize the process of order capturing, tracking, and fulfilment
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 mb-lg-4 mt-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Advanced Analytics & Reporting</h2>
              <p className="mb-lg-4 textColor1">
                Get real-time data on your food cost, profitability and other key metrics
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={analyticsImage} alt="" style={{ maxWidth: '300px' }} />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={integrationImage} alt="" />
          </div>
          <div className="col-lg-6 mb-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Integration Partners Marketplace</h2>
              <p className="mb-lg-4 textColor1">
                No more running after your partners for integrations. Get Foodpanda, Bykea, PandaGo and multiple payment gateways pre-integrated with our POS
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 mb-lg-4 mt-lg-5 d-flex justify-content-center align-items-center">
            <div>
              <h2 className="textColor1">Customer Engagement & Growth</h2>
              <p className="mb-lg-4 textColor1">
                Grow brand stickiness by offering cross-platform discounts and vouchers to your loyal customers
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={customersImage} alt="" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomateRestaurant;
