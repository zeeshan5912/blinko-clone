import React from 'react';
import Slider from 'react-slick';
import addpay from '../images/integrations-addpay.png';
import applepay from '../images/integrations-applepay.png';
import appsflyer from '../images/integrations-appsflyer.png';
import brandverse from '../images/integrations-brandverse.png';
import ccavenue from '../images/integrations-ccavenue.png';
import checkout from '../images/integrations-checkout.png';
import eocean from '../images/integrations-eocean.png';
import googlepay from '../images/integrations-googlepay.png';
import intellexelsolutions from '../images/integrations-intellexelsolutions.png';
import mailchimp from '../images/integrations-mailchimp.png';
import meta from '../images/integrations-meta.png';
import multisoft from '../images/integrations-multisoft.png';
import odoo from '../images/integrations-odoo.png';
import pay2m from '../images/integrations-pay2m.png';
import sap from '../images/integrations-sap.png';
import savyour from '../images/integrations-savyour.png';
import sendgrid from '../images/integrations-sendgrid.png';
import smsglobal from '../images/integrations-smsglobal.png';
import snapchat from '../images/integrations-snapchat.png';
import tappay from '../images/integrations-tappay.png';
import tiktok from '../images/integrations-tiktok.png';
import twilio from '../images/integrations-twilio.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaymentIntegrationPartner = () => {
    const images = [
        addpay, applepay, appsflyer, brandverse, ccavenue, checkout, eocean, googlepay,
        intellexelsolutions, mailchimp, meta, multisoft, odoo, pay2m, sap, savyour,
        sendgrid, smsglobal, snapchat, tappay, tiktok, twilio
    ];

    const settings = {
        infinite: true,
        speed: 1000, // Set speed to 1000 milliseconds for slower transition
        cssEase: "ease-in-out",
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="container-fluid px-0 payintegPartner overflow-x-hidden">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center">
                    Blink Is Fully Integrated With The Best Tools For A Seamless Online Ordering Platform
                </h1>
                <div class="section-title-border mt-3"></div>
                <p className="text-center">
                    Some of our (but not limited to) payment, logistics and communication channels integration partners
                </p>
            </div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <Slider {...settings} className="payLogoSlider">
                    {images.map((image, index) => (
                        <div key={index} className="d-flex justify-content-center align-items-center">
                            <img src={image} alt={`Integration ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PaymentIntegrationPartner;
