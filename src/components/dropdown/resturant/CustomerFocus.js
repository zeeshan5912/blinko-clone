import React from 'react';
import burgerKingLogo from '../../../images/customersLogo/logo-burger-king-pc03cunximtod1cjnx1io3p48z7b114vy1wqzgkrng.png';
import nandosLogo from '../../../images/customersLogo/logo-nandos-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import androidIcon from '../../../images/restaurants/cutomerFocusIcons/android-35.svg';
import appleIcon from '../../../images/restaurants/cutomerFocusIcons/apple.svg';
import globeIcon from '../../../images/restaurants/cutomerFocusIcons/globe-35.svg';
const CustomerFocus = () => {
  return (
    <section className="container-fluid px-0 customerFocus">
      <div className="custom_container2">
        <h1 className="text-center">Customers In Focus</h1>
        <div class="section-title-border mb-3" bis_skin_checked="1"></div>
        <div className="row">
          <div className="col-lg-6 d-flex flex-column">
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img
                src={burgerKingLogo}
                alt="Burger King logo"
              />
            </div>
            <div className="w-100 mt-4">
              <iframe
                title="Burger King Video"
                width="100%"
                height="264"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
                 frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row mt-3">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={androidIcon} alt="Android icon" />
                </a>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={appleIcon} style={{ width: '30px', height: '30px' }} alt="Apple icon" />
                </a>
              </div>
              
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={globeIcon} style={{ width: '30px', height: '30px' }} alt="Globe icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img
                src={nandosLogo}
                style={{ width: '100px', height: '100px' }}
                alt="Nando's logo"
              />
            </div>
            <div className="w-100 mt-4">
              <iframe
                title="Nando's Video"
                width="100%"
                height="264"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row mt-3">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={androidIcon} alt="Android icon" />
                </a>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={appleIcon} style={{ width: '30px', height: '30px' }} alt="Apple icon" />
                </a>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <a href="/#">
                  <img src={globeIcon} style={{ width: '30px', height: '30px' }} alt="Globe icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="viewM w-100 d-flex justify-content-center align-items-center mt-5">
          <a href="/#">View more</a>
        </div>
      </div>
      <div className="custom_container2 mt-5">
        <h1 className="text-center">Blink For Restaurants - Supporting Food Businesses During The COVID-19 Pandemic</h1>
        <div class="section-title-border mb-3" bis_skin_checked="1"></div>
        <p>Restaurants have pivoted towards delivery and take-out-only operations like cloud kitchens have since COVID-19 hit them in 2020. </p>
        <p>To widen your customer reach and meet your customers at the touchpoints they are at, Blink offers you the most purpose-built, cost-friendly
           quick-commerce enablement platform for your restaurant with built-in customer engagement and business intelligence tools. Leverage the 
           all-inclusive feature set of Blink’s online restaurant ordering system stack to earn greater profits.</p>
      </div>
    </section>
    
  );
};

export default CustomerFocus;
