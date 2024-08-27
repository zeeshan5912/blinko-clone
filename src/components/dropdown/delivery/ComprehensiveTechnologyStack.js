import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ComprehensiveTechnologyStack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Set speed to 1000 milliseconds for slower transition
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="container-fluid px-0 actionable  Ct pt-5 pb-5">
      <div className="container sec_headText">
        <h1 className="text-center textColor2">
          Improve Rider Performance, Fleet Productivity & Customer Service
        </h1>
        <div class="section-title-border mt-3"></div>
      </div>
      <div className="container featureWrap mt-4">
        <Slider {...settings} className="featureSlide">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body p-0">
                <h5 className="card-title text-center">Online Payments​</h5>
                <p className="card-text text-center">
                  Accept online payments from your customers by debit or credit card with Blink’s secure payment gateway.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body p-0">
                <h5 className="card-title text-center">
                  Business <br />Intelligence
                </h5>
                <p className="card-text text-center">
                  Powerful system-generated business analytics and reports segmented by branch, product, customer and more to enable data-driven decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body p-0">
                <h5 className="card-title text-center">Dynamic Dashboard​</h5>
                <p className="card-text text-center">
                  View real-time data of all your sales, branches, products and customers in one window through a live dashboard backed by business intelligence.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body p-0">
                <h5 className="card-title text-center">Inventory Management​</h5>
                <p className="card-text text-center">
                  Manage inventory of 100-10000 SKUs with a breeze​
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ComprehensiveTechnologyStack;
