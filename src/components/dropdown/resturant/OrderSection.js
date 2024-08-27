import React from 'react';

const OrderSection = () => {
  return (
    <>
      {/* Getting direct orders starts */}
      <section className="container-fluid px-0 gdoc">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                Getting direct orders with your own online ordering system could
                save you thousands!
              </h1>
              <p>
                Use our simple calculator to find out how much your food business
                can save with your own website or app, powered by Blink. We
                calculate this by comparing with the average fee of 30% charged on
                marketplaces.
              </p>
              <div className="inputContainer">
                <label>Orders per month*</label>
                <input type="number" name="orderMnth" placeholder="Enter value" />
              </div>
              <div className="inputContainer">
                <label>Average Order Value*</label>
                <input type="number" name="avgValue" placeholder="Enter value" />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
              <div className="totalWrap d-flex align-items-center flex-column">
                <div className="mnth d-flex flex-column align-items-center">
                  <h2>Savings/Month</h2>
                  <h3>0</h3>
                </div>
                <div className="yr d-flex flex-column align-items-center">
                  <h2>Savings/Year</h2>
                  <h3>0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Getting direct orders ends */}

      {/* Sneak-Peek start */}
      <section className="container-fluid px-0 sneekpeek">
        <div className="custom_container2">
          <h1 className="text-center">
            A Sneak-Peek Into Our Online Restaurant Ordering System
          </h1>
          <p>
            Are you on the lookout for an online restaurant ordering system with
            centralized order fulfilment and fleet management processes so that
            you are in full control of your business?
          </p>
          <p>
            Find out how Blink’s online quick commerce platform can help you scale
            your business, and transform how you interact with your customers.
          </p>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <a href="/#" className="mt-3">See all features</a>
          </div>
        </div>
      </section>
      {/* Sneak-Peek end */}
    </>
  );
};

export default OrderSection;
