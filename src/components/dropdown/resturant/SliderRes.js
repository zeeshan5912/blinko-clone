import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SliderRes = () => {
  return (
    <div className="section_our_solution whyus ">
       <div className="container sec_headText">
        <h1 className="text-center sec_text mt-5">
          Comprehensive Technology Stack To Cater To Different Stakeholders
        </h1>
        <div class="section-title-border mt-3"></div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon">
                  <i className="fa-solid fa-handshake fas" style={{ fontSize: '40px' }}></i>
                </div>
                <div className="solu_title">
                <h5 >Online Payments​</h5>
                </div>
                <div className="solu_description">
                  <p>
                  Accept online payments from your customers by debit or credit
                  card with Blink’s secure payment gateway.
                  </p>
                  <button type="button" className="read_more_btn">Read More</button>
                </div>
              </div>
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon">
                <i className="fas fa-rocket" style={{ fontSize: '40px' }}></i>
                 
                </div>
                <div className="solu_title">
                  <h5> Business Intelligence</h5>
                </div>
                <div className="solu_description">
                  <p>
                  Powerful system-generated business analytics and reports
                  segmented by branch, product, customer and more to enable
                  data-driven decision-making.
                  </p>
                  <button type="button" className="read_more_btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="solution_cards_box sol_card_top_3">
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon">
                <i className="fas fa-chart-line" style={{ fontSize: '40px' }}></i>
                </div>
                <div className="solu_title">
                <h5>Dynamic Dashboard​</h5>
                </div>
                <div className="solu_description">
                  <p>
                  View real-time data of all your sales, branches, products and
                  customers in one window through a live dashboard backed by
                  business intelligence.
                  </p>
                  <button type="button" className="read_more_btn mb-5">Read More</button>
                </div>
              </div>
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon">
                  <i className="fas fa-book" style={{ fontSize: '40px' }}></i>
                </div>
                <div className="solu_title">
                  <h5>Inventory <br /> Management​</h5>
                </div>
                <div className="solu_description">
                  <p>
                  Manage inventory of 100-10000 SKUs with a breeze​
                  </p>
                  <button type="button" className="read_more_btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderRes;
