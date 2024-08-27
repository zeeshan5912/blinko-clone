import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faChartBar, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';

const cardsData = [
  {
    icon: faDashboard,
    title: "Say It How It Is",
    text: "Transparency is a winner in our linkages. Our customers know what’s on offer for them. Our teammates know where what’s in store for them and our business. Our investors know the directions we take."
  },
  {
    icon: faChartBar,
    title: "Grow Bigger And Better",
    text: "We foster growth in everything we do. We enable our customers to scale, invest in learning and development for our people, and strive to benefit our investors. For our teammates, if ‘growth’ means taking a day off, we’ll encourage them to do so."
  },
  {
    icon: faHeart,
    title: "Have Goodwill For All",
    text: "We have the best intentions for everyone we are connected with and everything we do. We wish well and do good for our customers, people, investors, partners, end-users, and even the wider communities we impact."
  },
  {
    icon: faUsers,
    title: "Data Is Our Best Friend",
    text: "You can only do what you can prove. Our decisions and actions, whether big or small, are informed by data. The advice we give our customers is informed by their business analytics. We conduct thorough research in new markets before entering them. We’ll even announce a work-from-home day when the weather gets too tough."
  },
  {
    icon: faHeart,
    title: "It’s All About The Customer",
    text: "We are what and where we are because of our customers. Blink is a product for our customers, and so, all our efforts are made to benefit them. We make customer-centered decisions, act on customer feedback, support customers who need a hand, and check in with customers often to see how they’re doing."
  },
];

const CardsSection = () => {
  return (
    <section className="container-fluid px-0 aboutCards">
      <div className="custom-container aboutCardSec1">
        <div className="custom_container">
          <div className="row row-cols-1 row-cols-lg-3">
            {cardsData.slice(0, 3).map((card, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card d-flex justify-content-center align-items-center">
                  <div className="cardImg" style={{ width: '100px', height: '100px' }}>
                    <FontAwesomeIcon icon={card.icon} size="4x" />
                  </div>
                  <div className="card-body p-0">
                    <h2 className="card-title text-center" style={{ fontWeight: 900 }}>{card.title}</h2>
                    <p className="card-text text-center">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-container aboutCardSec2">
        <div className="custom_containerMd">
          <div className="row row-cols-lg-2">
            {cardsData.slice(3).map((card, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card d-flex justify-content-center align-items-center">
                  <div className="cardImg" style={{ width: '100px', height: '100px' }}>
                    <FontAwesomeIcon icon={card.icon} size="4x" />
                  </div>
                  <div className="card-body p-0">
                    <h2 className="card-title text-center" style={{ fontWeight: 900 }}>{card.title}</h2>
                    <p className="card-text text-center">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
