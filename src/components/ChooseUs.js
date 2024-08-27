import React from 'react';
import serviceImage from '../images/service.jpg'; 

const ChooseUs = () => {
    return (
        <section id="two" className="services">
          <div className="container pt-5 whyus" >
          <h6 className="text-center">Why Blink?</h6>
                <h1 className="text-center">What You Get With Blink</h1>
                <div class="section-title-border mt-3"></div>
            <div className="row services-content">
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="service-text">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <h4>Digital Ordering Channels</h4>
                  <p>Retain and grow your loyal customers with your own website and mobile apps.</p>
                </div>
                <div className="service-text">
                  <i className="fa fa-link" aria-hidden="true"></i>
                  <h4>Engagement Tools</h4>
                  <p>Promotional codes, whatsapp integrations and several other tools to communicate with your customers directly.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="service-text">
                  <i className="fa fa-sliders" aria-hidden="true"></i>
                  <h4>Analytics & Intelligence Dashboards</h4>
                  <p> Get visibility of your business through basic and advance BI reporting.</p>
                </div>
                <div className="service-text">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                  <h4>Fleet Management & Tracking</h4>
                  <p> Dispatch, track and optimize your delivery operations.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 service-img-container">
                <div className="service-img">
                  <img src={serviceImage} alt="Service" />
                  <div className="shape"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    


export default ChooseUs;
