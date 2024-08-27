import React from 'react';
import restaurantBanner from '../../../images/restaurants/banner/restaurant-banner-image.png';
import dishMobile from '../../../images/kitchen/banner/dish-mobile.png';
// import cloudImage from '../../../images/cloud-1024x1024.webp'; // Assuming all cloud images are the same
import { Helmet } from 'react-helmet-async';
import ParticlesBg from 'particles-bg';

const CloudKitchenHeader = () => {
  return (
    <header className='particles'>
        <ParticlesBg type="circle" bg={true} />
        
         <Helmet>
        <title>Cloud Kitchen</title>
      </Helmet>
      <div className="container-fluid p-0 pb-lg-5">
        <div className="custom-container restaurant-head">
          <div className="row  pt-1">
            <div className="col-lg-5">
              <h1 className="text-center text-lg-start">
                A Direct Online Cloud Kitchen Ordering And Management System
              </h1>
              <img className="img-fluid d-block d-lg-none" src={restaurantBanner} alt="" />
              <p className="mt-4 mt-lg-0">
                With Blink, you get a cloud-based online Cloud Kitchen ordering and management system with a branded mobile app, a website, and built-in
                fleet management technology, along with end-to-end CRM and business intelligence tools that help you manage brands, orders, menus, items,
                payments, promotions, and more quickly and easily in one place. The number one reason cloud kitchens fail is due to aggregators. Own your
                customers with Blink and watch your cloud kitchen grow.
              </p>
              <div className="d-flex mt-lg-5 mb-5 mb-lg-0">
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
                width="600"
                height="418"
                src={dishMobile}
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

export default CloudKitchenHeader;
