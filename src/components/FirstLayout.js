import React from 'react';
import moneyImage from '../images/about/money.png';
import aggregatorsImage from '../images/about/aggregators-pnuarwuzyhqtyr4qogyck06163hjuo98t13dmm08hw.png';
import ratingStarsImage from '../images/about/rating-stars-pnuwqd92nodwll8p73i8enq2uvkfjvru0oljx51yxo.png';


const FirstLayout = () => {
  return (
    <section className="container-fluid fstLay">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-6 mb-lg-4">
            <h2>Where It All Started</h2>
            <p className="mb-0">
              In 2018, we set out on a journey to empower restaurants, to sell and scale online.
            </p>
            <p className="mb-lg-4">
              We scaled fast for our first two years, hitting 3000+ restaurants, 150,000 monthly transactions,
              and 500 daily active riders. Along the way, our team realized that there was a problem that no
              aggregator could solve – the aggregator business model itself. Here’s what we learned:
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={moneyImage} alt="Money" />
          </div>
          <div className="col-lg-6 mb-lg-5 mt-5 mt-lg-0">
            <h2>Aggregators Are Too Expensive</h2>
            <p className="mb-0">Aggregators Are Too Expensive</p>
            <p className="mb-lg-4">
              The commissions we, like all other food aggregators, charged our merchants was far too costly for them
              to scale their businesses. On average, an alarming 30% of merchant revenue was consumed by commissions.
              Our merchants needed a profitable online ordering platform, one which we were not
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-4 mt-5 mt-lg-5">
            <h2>Customers Want Direct Engagement</h2>
            <p className="mb-lg-4">
              Our customer feedback revealed a surprising fact – most of our customers preferred ordering meals
              directly from restaurants instead of relying on third-party online ordering platforms such as ours
              to fulfill orders for them. Equally surprising was the fact that our customers wanted to communicate
              directly with our merchants, be it for placing inquiries, lodging complaints, or submitting feedback.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-5 mb-lg-0">
            <img className="img-fluid" src={aggregatorsImage} alt="Aggregators" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0 mb-5 mb-lg-0">
            <img className="img-fluid" src={ratingStarsImage} alt="Rating Stars" />
          </div>
          <div className="col-lg-6 mb-lg-5 mt-4 mt-lg-0">
            <h2>Speed Drives Customer Satisfaction</h2>
            <p className="mb-lg-4">
              We believe that the quicker orders are fulfilled, the happier customers are. Our merchants needed
              an online ordering system that would enable them to process and deliver orders to their customers
              much quicker than conventional eCommerce platforms could. We couldn’t fulfill a single order in thirty
              minutes because we were the ‘middleman’. Many of our customers were unhappy with the inertia of aggregators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstLayout;
