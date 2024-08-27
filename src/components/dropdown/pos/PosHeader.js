import React from 'react';
import blinkPosFeaturedImage from '../../../images/pos/banner/blink-pos-featured-image-768x420.png';
import { Helmet } from 'react-helmet-async';
// import cloudImage from '../../../images/cloud-1024x1024.webp';
import ParticlesBg from 'particles-bg';

const PosHeader = () => {
  return (
    <header className='particles'>
                    <ParticlesBg type="circle" bg={true} />
        <Helmet>
                <title>POS</title>
            </Helmet>
      <div className="container-fluid p-0">
        <div className="container restaurant-head posHead">
          <div className="row  pt-1">
            <div className="col-lg-5">
              <h1 className="text-center text-lg-start">Blink POS</h1>
              <img
                className="img-fluid d-block d-lg-none px-4"
                src={blinkPosFeaturedImage}
                alt="Blink POS Featured"
              />
              <p className="mt-5 mt-lg-0">1,000,000s of transactions processed</p>
              <p>An Integrated, Cloud-based Point of Sale for modern restaurants.</p>
              <div className="d-flex mt-lg-5 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start align-items-center">
                <a className="sm" href="/#" style={{ whiteSpace: 'nowrap' }}>
                  Start Punching Orders
                </a>
                <a
                  className="pd mx-0 mx-lg-4 my-3 my-lg-0"
                  href="/#"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Play Video
                </a>
              </div>
            </div>
            <div
              className="col-lg-7 d-flex justify-content-end align-items-center"
              style={{ position: 'relative' }}
            >
              <img
                className="img-fluid d-none d-lg-block"
                width="580px"
                height="317px"
                src={blinkPosFeaturedImage}
                style={{ zIndex: 2 }}
                alt="Blink POS Featured"
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
    </header>
  );
};

export default PosHeader;
