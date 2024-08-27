import React from 'react';
import tanmiahIosMockup from '../../../images/enterprise/tanmiah-ios-mockup.png';
import tanmiahLogo from '../../../images/enterprise/clients/tanmiah-logo-pnddx336tgzosz5meu1wwt0b2visj6jaxs1zdtw5ig.png';
import 'boxicons/css/boxicons.min.css';

const EnterpriseClients = () => {
  return (
    <div>
      {/* What do you get? */}
      <section className="container-fluid px-0 getstart">
        <div className="custom-container">
          <h1 className="text-center headingTheme headingColor" style={{ fontSize: '36px', fontWeight: 600 }}>What do you get?</h1>
          <div class="section-title-border mt-2 mb-3"></div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="p-0 pt-3">
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Dedicated Instance</strong>
                  <p>A dedicated un-shared instance of Blink’s technology deployed on the cloud for your organization.</p></span></li>
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">End-to-End Support</strong>
                  <p>Complete project management and implementation support.</p></span></li>
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Feature Roadmap</strong>
                  <p>A pre-defined roadmap of features to be released in the foreseeable future.</p></span></li>
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Custom Branded UI</strong>
                  <p>Exclusive and brand-driven designs and user experiences - tailored for your brand identity.</p></span></li>
              </ul>
            </div>
            <div className="col-lg-6 px-lg-5">
              <ul className="p-0 pt-3">
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Custom Integrations</strong>
                  <p>Custom integrations with your POS, ERPs, Loyalty Systems, etc.</p></span></li>
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Greater Flexibility</strong>
                  <p>Built on top of Blink’s powerful quick-commerce ordering and customer engagement platform.</p></span></li>
                <li className="d-flex"><i className='bx bxs-circle' style={{ color: '#EB2A8C' }}></i> <span className="d-flex flex-column"><strong className="headingColor">Flexible Pricing</strong>
                  <p>Flexible and custom pricing designed as per your needs.</p></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise Clients */}
      <section className="container-fluid px-0 EnterpriseClients">
        <div className="container">
          <h1 className="text-center headingTheme headingColor pb-5" style={{ fontSize: '36px', fontWeight: 600 }}>Our Enterprise Clients</h1>
          <div class="section-title-border mt-3"></div>
        </div>
        <div className="custom-container pb-5">
          <div className="row">
            <div className="col-lg-6 px-0 d-flex justify-content-center justify-content-lg-end">
              <img src={tanmiahIosMockup} alt="Tanmiah iOS Mockup" />
            </div>
            <div className="col-lg-6 px-0 d-flex justify-content-center justify-content-lg-start align-items-lg-end pb-3 mt-4 mt-lg-0">
              <div>
                <div className="w-100">
                  <img src={tanmiahLogo} alt="Tanmiah Logo" />
                </div>
                <h5 className="headingColor mt-2 px-2" style={{ fontFamily: 'var(--fontFamily3)' }}>Region: Saudi Arabia</h5>
                <h5 className="headingColor px-2" style={{ fontFamily: 'var(--fontFamily3)' }}>Industry: Poultry</h5>
                <h5 className="headingColor px-2" style={{ fontFamily: 'var(--fontFamily3)' }}>Since: June 2021</h5>
                <h5 className="headingColor px-2" style={{ fontFamily: 'var(--fontFamily3)' }}>Transactions: 100,000+</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseClients;
