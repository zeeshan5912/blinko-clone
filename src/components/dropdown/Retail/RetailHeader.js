import React from 'react';
import retailBannerImage from '../../../images/commerce/banner/retailers-banner-image.png';
import { Helmet } from 'react-helmet-async';
// import cloudImage from '../../../images/cloud-1024x1024.webp';
import ParticlesBg from 'particles-bg';

const RetailHeader = () => {
  return (
    <header className='particles'>
       <ParticlesBg type="circle" bg={true} />
        <Helmet>
        <title>Other Retail</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="custom-container restaurant-head pb-5">
          <div className="row mt-5 pt-1">
            <div className="col-lg-5">
              <h1 className="text-center text-lg-start">
                Quick Commerce Platform For Retail Businesses
              </h1>
              <img
                className="img-fluid px-5 d-block d-lg-none"
                src={retailBannerImage}
                alt=""
              />
              <p className="mt-4 mt-lg-0">
                The backbone of any modern retailer is ensuring timely and accurate delivery of merchandise to customers. Blink for Retail is a
                sophisticated quick commerce direct online ordering platform that ensures optimal efficiency for your back-end staff, inventory operations,
                marketing activities and delivery fleet. Our quick commerce allows you to make smarter and timely decisions with real-time monitoring of
                your orders, fleet, analytics and more. We empower companies to pivot away from conventional online ordering solutions and enable them for
                direct ordering and instant deliveries. A full-service quick commerce online ordering platform designed to keep your business moving!
              </p>
              <p>
                A full-service quick commerce online ordering platform designed to keep your business moving!
              </p>
              <div className="d-flex mt-lg-5">
                <a className="sm" href="/#">See More</a>
                <a className="pd mx-4" href="/#">Play Video</a>
              </div>
            </div>
            <div
              className="col-lg-7 d-flex justify-content-end align-items-center"
              style={{ position: 'relative' }}
            >
              <img
                className="img-fluid d-none d-lg-block"
                width="700"
                height="418"
                src={retailBannerImage}
                alt=""
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="cloud-img fst-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt=""
      />
      <img
        className="cloud-img secnd-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt=""
      />
      <img
        className="cloud-img third-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt=""
      />
      <img
        className="cloud-img frth-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt=""
      />
      <img
        className="cloud-img fvt-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt=""
      /> */}
    </header>
  );
};

export default RetailHeader;
