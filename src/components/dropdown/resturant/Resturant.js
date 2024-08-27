import React from 'react';
import bannerImage from '../../../images/restaurants/banner/restaurant-banner-image.png';
// import cloudImage from '../../../images/cloud-1024x1024.webp';
// import { Helmet } from 'react-helmet-async';
import ParticlesBg from 'particles-bg';
import { Helmet } from 'react-helmet-async';

const Resturant = () => {
  return (
    <header className='particles'>
      <Helmet>
        <title>Blink for Resturants</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="custom-container restaurant-head">
          <div className="row  pt-1">
            <div className="col-lg-5">
              <h1 className="text-center text-lg-start">A Direct Online Restaurant Ordering System</h1>
              <img className="img-fluid px-4 d-block d-lg-none" src={bannerImage} alt="" />
              <p className="mt-4 mt-lg-0">
                With Blink, you get a cloud-based online restaurant ordering
                system with a branded mobile app, a website, and built-in fleet
                management technology, along with end-to-end CRM and business
                intelligence tools that help you manage orders, menus, items,
                payments, promotions, and more quickly and easily in one place.
              </p>
              <p>
                Stop paying heavy commissions, and grow your restaurant business
                with Blink!
              </p>
              <div className="d-flex mt-lg-5 mb-4 mb-lg-5">
                <a className="sm" href="/#">See More</a>
                <a className="pd mx-4" href="/#">Play Video</a>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end align-items-center" style={{ position: 'relative' }}>
              <img
                className="img-fluid d-none d-lg-block"
                width="700"
                height="418"
                src={bannerImage}
                style={{ zIndex: 2 }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Cloud Images */}
      {/* <img className="cloud-img fst-cloud d-none d-sm-none d-md-flex" src={cloudImage} alt="" />
      <img className="cloud-img secnd-cloud d-none d-sm-none d-md-flex" src={cloudImage} alt="" />
      <img className="cloud-img third-cloud d-none d-sm-none d-md-flex" src={cloudImage} alt="" />
      <img className="cloud-img frth-cloud d-none d-sm-none d-md-flex" src={cloudImage} alt="" />
      <img className="cloud-img fvt-cloud d-none d-sm-none d-md-flex" src={cloudImage} alt="" /> */}
      <ParticlesBg type="circle" bg={true} />
    </header>
    
  );
};

export default Resturant;
