import React from 'react';
import visaLogo from '../images/about/paymentsIntegrations/visa-logo-resized-300x144.png'; // Replace with your image paths
import mastercardLogo from '../images/about/paymentsIntegrations/mastercard-resized-300x144.png'; // Replace with your image paths
import bankAlfalahLogo from '../images/about/paymentsIntegrations/bank-alfalah-resized-300x144.png'; // Replace with your image paths
import stripeLogo from '../images/about/paymentsIntegrations/stripe-logo-resized-300x144.png'; // Replace with your image paths
import pay2mLogo from '../images/about/paymentsIntegrations/pay2m-e1634282838106-273x300.jpg'; // Replace with your image paths
import eoceanLogo from '../images/about/paymentsIntegrations/eocean-logo-resized-300x144.png'; // Replace with your image paths
import twilioLogo from '../images/about/paymentsIntegrations/twilio-logo-resized-300x144.png'; // Replace with your image paths
import firebaseLogo from '../images/about/paymentsIntegrations/firebase-logo-resized-300x144.png'; // Replace with your image paths
import bykeaLogo from '../images/about/paymentsIntegrations/bykea-resized-300x144.png'; // Replace with your image paths

const IntegrationPartnersAndLastSection = () => {
  return (
    <div>
      {/* Integration Partners Section */}
      <section className="container-fluid px-0 WhereWe payInte">
        <div className="custom-container">
          <h1 className="text-center">Our Integration Partners</h1>
          <div className="custom_container mt-5 mb-4">
            <div className="row row-cols-lg-3">
              {/* Payment Partners */}
              <div className="col d-flex justify-content-center align-items-center cart-mt mt-5 mt-lg-0">
                <div className="card d-flex w-100">
                  <h4 className="text-start">Payment Partners</h4>
                  <div className="row row-cols-3">
                    <div className="col mt-2">
                      <img className="img-fluid" src={visaLogo} alt="Visa Logo" />
                    </div>
                    <div className="col mt-2">
                      <img className="img-fluid" src={mastercardLogo} alt="Mastercard Logo" />
                    </div>
                    <div className="col mt-2">
                      <img className="img-fluid" src={bankAlfalahLogo} alt="Bank Alfalah Logo" />
                    </div>
                    <div className="col mt-4">
                      <img className="img-fluid" src={stripeLogo} alt="Stripe Logo" />
                    </div>
                    <div className="col mt-4">
                      <img className="img-fluid" src={pay2mLogo} alt="Pay2M Logo" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Partners */}
              <div className="col d-flex justify-content-center align-items-center cart-mt mt-5 mt-lg-0">
                <div className="card d-flex w-100">
                  <h4>Communication Partners</h4>
                  <div className="row row-cols-2">
                    <div className="col mt-2">
                      <img className="img-fluid" src={eoceanLogo} alt="EOcean Logo" />
                    </div>
                    <div className="col mt-2">
                      <img className="img-fluid" src={twilioLogo} alt="Twilio Logo" />
                    </div>
                    <div className="col mt-2">
                      <img className="img-fluid" src={firebaseLogo} alt="Firebase Logo" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Logistics Partners */}
              <div className="col d-flex justify-content-center align-items-center cart-mt mt-5 mt-lg-0">
                <div className="card d-flex w-100">
                  <h4>Logistics Partners</h4>
                  <div className="row row-cols-3">
                    <div className="col mt-2">
                      <img className="img-fluid" src={bykeaLogo} alt="Bykea Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="container-fluid px-0 lstSec">
        <div className="custom_container">
          <p className="text-center">
            We envision a world empowered by digitization – a world where consumers can order<br />
            online directly from brands that will deliver to them instantly wherever they are, all of that in a blink.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntegrationPartnersAndLastSection;
