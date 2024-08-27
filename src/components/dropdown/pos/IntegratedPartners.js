import React from 'react';
import Slider from 'react-slick';
import addPayLogo from '../../../images/integrations-addpay.png';
import applePayLogo from '../../../images/integrations-applepay.png';
import appsflyerLogo from '../../../images/integrations-appsflyer.png';
import brandverseLogo from '../../../images/integrations-brandverse.png';
import ccavenueLogo from '../../../images/integrations-ccavenue.png';
import checkoutLogo from '../../../images/integrations-checkout.png';
import eoceanLogo from '../../../images/integrations-eocean.png';
import googlePayLogo from '../../../images/integrations-googlepay.png';
import intellexelLogo from '../../../images/integrations-intellexelsolutions.png';
import mailchimpLogo from '../../../images/integrations-mailchimp.png';
import metaLogo from '../../../images/integrations-meta.png';
import multisoftLogo from '../../../images/integrations-multisoft.png';
import odooLogo from '../../../images/integrations-odoo.png';
import pay2mLogo from '../../../images/integrations-pay2m.png';
import sapLogo from '../../../images/integrations-sap.png';
import savyourLogo from '../../../images/integrations-savyour.png';
import sendgridLogo from '../../../images/integrations-sendgrid.png';
import smsglobalLogo from '../../../images/integrations-smsglobal.png';
import snapchatLogo from '../../../images/integrations-snapchat.png';
import tapPayLogo from '../../../images/integrations-tappay.png';
import tiktokLogo from '../../../images/integrations-tiktok.png';
import twilioLogo from '../../../images/integrations-twilio.png';
import flowchartImage from '../../../images/pos/flowchart/blink-pos-slide-deck.png';


const IntegratedPartners = () => {
    // Slick slider settings
    const sliderSettings = {
      infinite: true,
      speed: 1000,
      cssEase: 'ease-in-out',
      slidesToShow: 6,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <>
        <section className="container-fluid px-0 py-5">
          <h1 className="headingColor headingTheme text-center pb-3">
            Integrated with all your ecosystem partners
          </h1>
          <Slider {...sliderSettings} className="payLogoSlider my-5">
            <div className="d-flex justify-content-center align-items-center">
              <img src={addPayLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={applePayLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={appsflyerLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={brandverseLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={ccavenueLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={checkoutLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={eoceanLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={googlePayLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={intellexelLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={mailchimpLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={metaLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={multisoftLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={odooLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={pay2mLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={sapLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={savyourLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={sendgridLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={smsglobalLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={snapchatLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={tapPayLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={tiktokLogo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={twilioLogo} alt="" />
            </div>
          </Slider>
        </section>
  
        <section className="container-fluid px-0 py-5">
          <div className="container">
            <h1 className="headingColor headingTheme text-center fs-2">
              Bringing It All Together
            </h1>
          </div>
          <img className="img-fluid" src={flowchartImage} alt="" />
        </section>
      </>
    );
  };
  
  export default IntegratedPartners;
  