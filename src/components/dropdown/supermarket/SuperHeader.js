import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import supermarketBannerImage from '../../../images/supermarket/banner/supermarket-banner-image.webp';
// import cloudImage from '../../../images/cloud-1024x1024.webp';
import { Helmet } from 'react-helmet-async';
import ParticlesBg from 'particles-bg';

const SuperHeader = () => {
  return (
    <header className='particles'>
        <Helmet>
        <title>Blink for SuperMarket</title>
      </Helmet>
      <div className="container-fluid p-0">
        <div className="custom-container restaurant-head">
          <div className="row pt-1">
            <div className="col-lg-5">
              <h1 className="text-center text-lg-start">A Next-Gen Supermarket Quick Commerce Platform</h1>
              <img className="img-fluid px-4 d-block d-lg-none" src={supermarketBannerImage} alt="Supermarket Banner" />
              <p className="mt-4 mt-lg-0">
                Blink gives you the freedom to run and grow your business online without the hassle of managing your orders manually. Subscribe to our
                supermarket quick commerce platform to digitize your business with a revolutionary online ordering system for grocery stores. Get a
                comprehensive online grocery shop management system with an end-to-end direct online ordering and fleet management solution.
              </p>
              <p>
                A full-service supermarket quick commerce platform designed to scale your business with speed!
              </p>
              <div className="d-flex mt-lg-5 mb-4 mb-lg-5">
                <a className="sm" href="/">See More</a>
                <a className="pd mx-4" href="/">Play Video</a>
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
                src={supermarketBannerImage}
                alt="Supermarket Banner"
              />
            </div>
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
      <ParticlesBg type="circle" bg={true} />
    </header>
  );
};

export default SuperHeader;
