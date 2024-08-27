import React from 'react';
import trackingImg from '../../../images/delivery/Qcommerce/tracking.webp';
import riderAppImg1 from '../../../images/delivery/Qcommerce/tracking/rider-app-1.webp';
import riderAppImg2 from '../../../images/delivery/Qcommerce/tracking/rider-app-2.webp';
import riderAppImg3 from '../../../images/delivery/Qcommerce/tracking/rider-app-3.webp';
import 'boxicons/css/boxicons.min.css';

const FleetManagement = () => {
  return (
    <section className="container-fluid px-0 QCommerceFleet">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="headingTheme textColor1 mb-5 text-center text-lg-start">
              Blink Is The QCommerce Fleet Management Platform Of Choice For Businesses
            </h1>
            <p className="textColor1">
              Blink For Delivery Is A Comprehensive Fleet Management And Tracking Solution. With Our Fleet Management Platform, Your Enterprise
              Can:
            </p>
            <ul className="p-0 pt-3">
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Manage deliveries through a geo-fenced rider portal</span>
              </li>
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Plan routes through routes optimized within your defined delivery zones without any manual processes.</span>
              </li>
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Assign deliveries to riders directly from the fleet management portal to your rider’s Blink Delivery App account.</span>
              </li>
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Track all routes and riders. Our platform shows where your riders are at any given time, who is on time, and which of your riders are behind their targets.</span>
              </li>
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Send status updates of picked orders to your customers.</span>
              </li>
              <li className="d-flex">
                <i className="bx bxs-circle" style={{ color: '#ffffff' }}></i> 
                <span>Analytics are generated automatically on the rider portal’s dashboard on which you can track high performers with easy to compare results.</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="img-fluid" src={trackingImg} alt="QCommerce Tracking" />
          </div>
        </div>
      </div>

      <div className="custom-container driverTrack">
        <div className="custom_container2">
          <h1 className="text-center headingTheme textColor1">
            Our Rider App Is Built For Fleet Tracking And Quick Deliveries
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <img src={riderAppImg1} alt="Rider App 1" />
          </div>
          <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <img src={riderAppImg2} alt="Rider App 2" />
          </div>
          <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <img src={riderAppImg3} alt="Rider App 3" />
          </div>
        </div>
      </div>

      <div className="custom-container mt-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <ul className="pt-3">
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Performance Dashboard</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Rider Profile Management</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Agent Roster and Scheduling</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Compensation Module</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="pt-3">
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Clients Reporting and Performance</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Users, Roles and Permissions</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Complete Location Trail of each Rider</span>
              </li>
              <li className="d-flex m-0">
                <i className="bx bxs-circle m-0 pt-2" style={{ color: '#ffffff' }}></i>
                <span>Embedded Analytic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetManagement;
