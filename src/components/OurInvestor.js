import React from 'react';
import sosvLogo from '../images/about/investors/sosv-logo-pnv4by5ul663tpbzc5coq1fyd6cg57ju623mo4f6se.png'; // Replace with your image paths
import karavanLogo from '../images/about/investors/karavan-final-pnv4bvcc0o28uvg2sm4t0k5kl0qci48n5o568ajdb2.png'; // Replace with your image paths
import raynLogo from '../images/about/investors/rayn-logo-pnv4bwa67i3j6hepn4jfl1x16elpptcdhssnpkhz1s.png'; // Replace with your image paths
import gfcLogo from '../images/about/investors/gfc-logo-psgy2ugvg4zihx9hn2e3uiuqefvy2dx008metzw402.png'; // Replace with your image paths

const OurInvestor = () => {
  return (
    <section className="container-fluid px-0 WhereWe investors">
      <div className="custom-container">
        <h1 className="text-center">Our Investors</h1>
        <div className="row mt-lg-5 mb-lg-4">
          <div className="col-lg-3">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="cardImg">
                <img src={sosvLogo} className="img-fluid" alt="SOSV Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="cardImg">
                <img src={karavanLogo} className="img-fluid" alt="Karavan Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="cardImg">
                <img src={raynLogo} className="img-fluid" alt="Rayn Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="cardImg">
                <img src={gfcLogo} className="img-fluid" alt="GFC Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInvestor;
