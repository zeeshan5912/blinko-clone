import React from 'react';
// import './DeliveryHeader.css'; // Assuming existing CSS file with class names
import ParticlesBg from 'particles-bg';

// Import images
import deliveryBanner from '../../../images/delivery/banner/delivery-banner-image.png';
import { Helmet } from 'react-helmet-async';
// import cloudImage from '../../../images/cloud-1024x1024.webp';

const DeliveryHeader = () => {
  return (
   
    <header className=" particles container-fluid p-0">
       <ParticlesBg type="circle" bg={true} />
         <Helmet>
    <title>Delivery</title>
  </Helmet>
      <div className="custom-container restaurant-head">
        <div className="row mt-5 pt-1">
          <div className="col-lg-5">
            <h1 className="text-center text-lg-start">
              Route Planning And Last-Mile Optimization For Your Business
            </h1>
            <img
              className="img-fluid px-5 d-block d-lg-none"
              src={deliveryBanner}
              alt="Delivery Banner"
            />
            <p className="mt-5 mt-lg-0">
              Managing a company’s logistics is not an easy job – orders keep pouring in every hour, and timely deliveries are the end-customers’ biggest demand. Blink’s qCommerce fleet management platform allows you to make smarter and more timely delivery decisions. We equip businesses to plan and track deliveries with or without their own rider fleets.
            </p>
            <p>
              A Full-Service Quick Commerce Fleet Management Platform Designed To Scale Your Business With Speed!
            </p>
            <div className="d-flex mt-lg-5">
              <a className="sm" href="/#">See More</a>
              <a className="pd mx-4" href="/#">Play Video</a>
            </div>
          </div>
          <div className="col-lg-7 d-flex justify-content-end align-items-center" style={{ position: 'relative' }}>
            <img
              className="img-fluid d-none d-lg-block"
              width="700"
              height="418"
              src={deliveryBanner}
              alt="Delivery Banner"
            />
          </div>
        </div>
      </div>
      {/* <img
        className="cloud-img fst-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt="Cloud"
      />
      <img
        className="cloud-img secnd-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt="Cloud"
      />
      <img
        className="cloud-img third-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt="Cloud"
      />
      <img
        className="cloud-img frth-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt="Cloud"
      />
      <img
        className="cloud-img fvt-cloud d-none d-sm-none d-md-flex"
        src={cloudImage}
        alt="Cloud"
      /> */}
    </header>
  );
};

export default DeliveryHeader;
