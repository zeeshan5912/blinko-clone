import React from 'react';

const PromotionSection = () => {
  return (
    <section className="container-fluid px-0 smFeatures overflow-x-hidden promotions mt-5">
      <div className="container">
        <h1 className="text-center" style={{color:'white'}}>Promotion, Engagement & Loyalty</h1>
        <div class="section-title-border mt-3"></div>
        <div className="row row-cols-1 row-cols-lg-2 mt-5 px-3 px-lg-5 gx-3 gy-4">
          {/* Card 1: Discounts & Promotions */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100">
              <div className="card-body">
                <h4 className="mt-0">Discounts & Promotions</h4>
                <p className="card-text">
                  Offer time-bound discounts and promo codes with automatic
                  enabling and disabling capabilities.
                </p>
              </div>
            </div>
          </div>
               
          {/* Card 2: Loyalty Program */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100">
              <div className="card-body">
                <h4 className="mt-0">Loyalty Program</h4>
                <p className="card-text">
                  Retain your customers with your very own built-in loyalty
                  program in just a few clicks.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Data Filtering */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100 h-100">
              <div className="card-body">
                <h4 className="mt-0">Data Filtering</h4>
                <p className="card-text">
                  Filter customer data by order date, branch, location, device
                  and more so that you can work with the data you need.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Targeted Facebook Advertising */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100">
              <div className="card-body">
                <h4 className="mt-0">Targeted Facebook Advertising</h4>
                <p className="card-text mb-4">
                  Now you can choose which customers to advertise to on Facebook
                  and Instagram by creating custom audiences from your customer
                  database.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: SMS Marketing Integration */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100">
              <div className="card-body">
                <h4 className="mt-0">SMS Marketing Integration</h4>
                <p className="card-text">
                  SMS marketing integration with affordable packages and
                  attribute filters for targeted, end-to-end SMS marketing all
                  in one place
                </p>
              </div>
            </div>
          </div>

          {/* Card 6: Push Notifications */}
          <div className="col d-flex justify-content-center align-items-center cart-mt">
            <div className="card d-flex w-100">
              <div className="card-body">
                <h4 className="mt-0">Push Notifications</h4>
                <p className="card-text">
                  Communicate with your customers for no additional cost using
                  unlimited, free-of-cost push notifications sent via Firebase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
