import React from 'react';
import posImage from '../../../images/pos/banner/blink-pos-featured-image-768x420.png';

const AdvancedPosSystem = () => {
    return (
      <section className="container-fluid px-0 AdvancedPOS">
        <div className="custom_container2">
          <h1 className="headingColor headingTheme fs48 text-center mb-5">Achieve Greater Results With Blink’s Advanced POS System</h1>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={posImage} alt="" />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <p className="text-center m-0 textColor1">Better efficiency</p>
            </div>
            <div className="col-lg-4">
              <p className="text-center m-0 textColor1">Revenue transparency</p>
            </div>
            <div className="col-lg-4">
              <p className="text-center m-0 textColor1">Optimized operations</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AdvancedPosSystem;
  