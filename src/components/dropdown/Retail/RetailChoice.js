import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const RetailChoice = () => {
    return (
        <section className="container-fluid px-0 QuickCommerce">
          <div className="custom_container2">
            <h1 className="headingColor headingTheme text-center pb-5">
              Blink Is The Quick Commerce Online Ordering Platform Of Choice
            </h1>
            <div class="section-title-border mt-3"></div>
            <p>
              Blink for Retail is a comprehensive direct online ordering solution for retail businesses. With our quick commerce enablement platform, you can:
            </p>
            <div className="w-100 scrolllist">
              <ul className="p-0 pt-3">
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Acquire an all-in-one Quick Commerce Online Ordering Platform for your business with a supercharged front along with your own branded website and mobile app.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    A user-friendly, comprehensive merchant portal that allows you to conveniently manage orders, accept online payments, gather customer feedback, and much more with zero downtime.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Leverage auto-generated business analytics using an advanced business intelligence tool to gain valuable performance insights.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Have complete ownership of your customer data without third-party interferences or the hassle of manual record keeping.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Upload thousands of products in bulk, and create multi-leveled subcategories through Product Catalog Management on the merchant portal without relying on technical expertise.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Optimize delivery routes in the Blink Delivery App for quicker, more cost-effective last-mile journeys.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Track your riders’ live locations at any given time.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Share estimated order processing times with your customers.
                  </span>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faCircle} className="icon" />
                  <span>
                    Send your customers system-generated order status updates via SMS and push notifications.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    };

export default RetailChoice;
