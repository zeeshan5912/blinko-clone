import React from 'react';
import baskinRobinsAppMockup from '../../../images/restaurants/baskin-robins-app-mockup.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faBriefcase, faChartBar, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    icon: faTools,
    title: 'Customer Data Ownership',
    text: 'With Blink, you own your customer data stored in a secure and encrypted system. Communicate directly with your customers without third-party masking.'
  },
  {
    icon: faBriefcase,
    title: 'Speed To Market',
    text: 'Go blink with our all-in-one quick commerce stack in a blink. Our revolutionary technology is developed for your restaurant business to go live in only 7 days- with tech on us!'
  },
  {
    icon: faChartBar,
    title: 'No Heavy Commissions',
    text: 'Unlike third-party aggregators, we’ll never charge hefty commissions or hidden fees. With Blink, you own your revenue, and only pay for what you use.'
  },
  {
    icon: faBullhorn,
    title: 'Digital Marketing',
    text: 'We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.'
  },
  
];
const CommercePlatform = () => (
  <div>
    <section className="container-fluid px-0 layered-background whyus">
      <div className="custom_container2">
        <h1 className="text-center mb-5 mb-lg-5">
          No.1 Quick Commerce Platform For Restaurants
        </h1>
        <div className="section-title-border mb-3"></div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img
              className="px-4 px-lg-0"
              src={baskinRobinsAppMockup}
              alt="Baskin Robins App Mockup"
            />
          </div>
          <div className="col-lg-6 para mt-3 mt-lg-0">
            <p>
              With Blink, it is easy to start your digital journey, whether your
              business is in its early stages of operations or an established
              one. We do the heavy lifting while you focus on what is important
              to you – managing and growing your business. Blink gives you your
              own branded online restaurant ordering mobile app, website,
              comprehensive merchant portal, and fleet management solution all
              in one. Conveniently access and manage orders, items, menus,
              promotions, payments, customer data, delivery fleets, and much
              more.
            </p>
            <p>
              Blink is a branded, unified, affordable, plug-and-play and always
              ready-to-scale restaurant ordering system!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid px-0 whyus advantage">
      <div className="custom_container">
        <h1 className="headingTheme headingColor text-center">
          The Blink Advantage
        </h1>
        <div className="section-title-border mb-3"></div>
        <div className="features-container">
      {data.map((feature, index) => (
        <div key={index} className="feature-card">
          <FontAwesomeIcon icon={feature.icon} size="5x" className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
      </div>

    </section>
   
  </div>
);

export default CommercePlatform;

    // {/* <section className="container-fluid px-0 whyus advantage">
    //   <div className="custom_container">
    //     <h1 className="headingTheme headingColor text-center">
    //       The Blink Advantage
    //     </h1>
    //     <div className="row row-cols-1 row-cols-md-3">
    //       <div className="col d-flex justify-content-center align-items-center cart-mt">
    //         <div className="card d-flex justify-content-center align-items-center">
    //           <div>
    //             <img
    //               src={iconContactBook}
    //               className="img-fluid"
    //               alt="Customer Data Ownership"
    //             />
    //           </div>
    //           <h5 className="card-title text-center">Customer Data Ownership</h5>
    //           <p className="card-text text-center">
    //             With Blink, you own your customer data stored in a secure and
    //             encrypted system. Communicate directly with your customers
    //             without third-party masking.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col d-flex justify-content-center align-items-center cart-mt">
    //         <div className="card d-flex justify-content-center align-items-center">
    //           <div className="mt-lg-4">
    //             <img
    //               src={iconRocket}
    //               className="img-fluid"
    //               alt="Speed To Market"
    //             />
    //           </div>
    //           <h5 className="card-title text-center">Speed To Market</h5>
    //           <p className="card-text text-center">
    //            Speed To Market Go blink with our all-in-one quick commerce stack in a blink. Our
    //             revolutionary technology is developed for your restaurant
    //             business to go live in only 7 days- with tech on us!
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col d-flex justify-content-center align-items-center cart-mt">
    //         <div className="card d-flex justify-content-center align-items-center">
    //           <div>
    //             <img
    //               src={iconCoin}
    //               className="img-fluid"
    //               alt="No Heavy Commissions"
    //             />
    //           </div>
    //           <h5 className="card-title text-center">No Heavy Commissions</h5>
    //           <p className="card-text text-center">
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </section> */}