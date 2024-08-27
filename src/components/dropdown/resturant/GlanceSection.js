import React from 'react';
// import './BlinkAtAGlance.css'; // Import your CSS file

import Slider from 'react-slick';
// Import images
import cheeziousLogo from '../../../images/customersLogo/logo-cheezious-pc02fcozpf7hv011wmt3baqga9wkjp2auf2zsif4m8.png';
import meatoneLogo from '../../../images/customersLogo/meatone-logo-pc036qpp3egkhjvjur6yw3onmxqxkjfvgccdg1wlbc.png';
import cityFlowerLogo from '../../../images/customersLogo/logo-city-flower-pc03cm7dkcqsq7plo0fsjwjp35y6y34c327l713kf4.png';
import burgerKingLogo from '../../../images/customersLogo/logo-burger-king-pc03cunximtod1cjnx1io3p48z7b114vy1wqzgkrng.png';
import background1 from '../../../images/restaurants/customersUi/Copy-of-27.png';
import background2 from '../../../images/restaurants/customersUi/Copy-of-31.png';
import background3 from '../../../images/restaurants/customersUi/Copy-of-33.png';
import background4 from '../../../images/restaurants/customersUi/Copy-of-10.png';


// Slick carousel settings
const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Set speed to 1000 milliseconds for slower transition
    cssEase: "ease-in-out",
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  
  const GlanceSection = () => {
    const cardData = [
      {
        imgSrc: cheeziousLogo,
        title: "Kill your hunger!",
        backgroundImg: background1
      },
      {
        imgSrc: meatoneLogo,
        title: "All the cuts you need.",
        backgroundImg: background2
      },
      {
        imgSrc: cityFlowerLogo,
        title: "Department stores. Hypermarkets.",
        backgroundImg: background3
      },
      {
        imgSrc: burgerKingLogo,
        title: "Have it your way.",
        backgroundImg: background4
      }
    ];
  
    return (
      <section className="container-fluid px-0 glance whyus">
        <div className="custom_container">
          <h1 className="text-center">Blink - At A Glance!</h1>
          <div class="section-title-border mb-3"></div>
          <Slider {...settings} className="glaceSlider">
            {cardData.map((card, index) => (
              <div className="mx-lg-3" key={index}>
                <div className="card d-flex justify-content-center align-items-center w-100">
                  <div className="cardImg">
                    <img
                      src={card.imgSrc}
                      className="img-fluid"
                      alt="Card"
                    />
                  </div>
                  <h5 className="card-title text-center">{card.title}</h5>
                  <div
                    className="custUi"
                    style={{
                      backgroundImage: `url(${card.backgroundImg})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
export default GlanceSection;
