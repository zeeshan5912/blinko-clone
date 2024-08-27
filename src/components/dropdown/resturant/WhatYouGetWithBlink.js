import React from 'react';
import baskinRobinsAppMockup from '../../../images/baskin-robins-app-mockup.webp';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhatYouGetWithBlink = () => {
  // const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000, // Set speed to 1000 milliseconds for slower transition
//     cssEase: 'ease-in-out',
//     slidesToShow: 3,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

  return (
    <>
      {/* What You Get With start */}
      <section className="container-fluid px-0 gwb">
        <div className="custom_container">
          <h1 className="text-center">What You Get With Blink</h1>
          <div class="section-title-border mb-3"></div>
          <div className="row">
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-center">Facebook And Instagram Ordering</h4>
              <p className="text-center">
                Our quick commerce enablement platform allows your restaurant
                business to take orders through Facebook and Instagram within
                minutes.
              </p>
              <h4 className="text-center">Phone Ordering</h4>
              <p className="text-center">
                Never miss an order from your customer even if they go old school.
              </p>
            </div>
            <div className="col-lg-4 mb-5 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
              <img src={baskinRobinsAppMockup} alt="Baskin Robins App Mockup" />
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-center">Mobile App Ordering</h4>
              <p className="text-center">
                Blink offers you a branded mobile app in Android and iOS versions
                that enables 30-second order placement any time, anywhere.
              </p>
              <h4 className="text-center">Website Ordering</h4>
              <p className="text-center">
                With a branded website, receive orders online directly from your
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default WhatYouGetWithBlink;
