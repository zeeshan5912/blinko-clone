import React from 'react';
import posImage from '../../../images/pos/pos-home-mockup__graphic-500-w.png'; // Importing the image

const PosExtra = () => {
  return (
    <section className="container-fluid px-0 commerceRestau posRestu">
      <div className="custom_container2">
        <h1 className="text-center">The Most Powerful Restaurant POS in Town</h1>
        <div class="section-title-border mt-0 mb-5"></div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={posImage} alt="" /> {/* Using imported image */}
          </div>
          <div className="col-lg-6 para px-lg-5">
            <p className="pb-4" style={{ fontFamily: 'var(--fontFamily2-3)' }}>
              Blink’s integrated, premium cloud-based POS system is geared for
              modern F&B brands looking to grow their sales, delight their
              customers and streamline their operations.
            </p>
            <a href="/#"
              style={{
                fontFamily: 'var(--fontFamily1)',
                color: 'var(--textWhite)',
                fontSize: '20px',
                borderRadius: '20px',
                padding: '18px 40px',
                background: 'var(--btnBgColor)',
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosExtra;
