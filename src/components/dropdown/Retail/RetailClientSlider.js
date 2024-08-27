import React from 'react';
import Slider from 'react-slick';

// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images with relative paths
import logoAcaixpress from '../../../images/customersLogo/logo-acaixpress-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBakely from '../../../images/customersLogo/logo-bakely-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBaskinRobbins from '../../../images/customersLogo/logo-baskinrobbins-pc02fdmtw98s6lzor57pvshwvnrxre616jqh9sdqg0.png';
import logoBurgerKing from '../../../images/customersLogo/logo-burger-king-pc03cunximtod1cjnx1io3p48z7b114vy1wqzgkrng.png';
import logoBurgerLab from '../../../images/customersLogo/logo-burgerlab-pc02x7mlk3nmga35mcpwoshqltvmsnypatb41rxue8.png';
import logoChatterboxCafe from '../../../images/customersLogo/logo-chatterbox-cafe-pc02xcbsi9u22bwbuwr1j9b1kr8gv5hczgkjg5qvj4.png';
import logoCheezious from '../../../images/customersLogo/logo-cheezious-pc02fcozpf7hv011wmt3baqga9wkjp2auf2zsif4m8.png';
import logoCityFlower from '../../../images/customersLogo/logo-city-flower-pc03cm7dkcqsq7plo0fsjwjp35y6y34c327l713kf4.png';
import logoDelishPizzaBar from '../../../images/customersLogo/logo-delishpizzabar-pc02fbr5il67je2f24egqsyzow17bzykiafib8gisg.png';
import logoIhop from '../../../images/customersLogo/logo-ihop-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import logoKababjees from '../../../images/customersLogo/logo-kababjees-pc02xd9mp3vcdxuypf5o3r2i653u2ul3bl80xfphcw.png';
import logoLayers from '../../../images/customersLogo/logo-layers-pc02fhe6nldxh1u856u85rjr979em6kyj2cf6w85r4.png';
import logoMeatone from '../../../images/customersLogo/logo-meatone-pc02xag44lrhf3z25vxse9s4dzhqfr9wb79khltnvk.png';

import retailersAppMockup from '../../../images/commerce/retailers-app-mockup.webp';

const customerLogos = [
  logoAcaixpress,
  logoBakely,
  logoBaskinRobbins,
  logoBurgerKing,
  logoBurgerLab,
  logoChatterboxCafe,
  logoCheezious,
  logoCityFlower,
  logoDelishPizzaBar,
  logoIhop,
  logoKababjees,
  logoLayers,
  logoMeatone,
];

const RetailClientSlider = () => {
  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 1000, // Set speed to 1000 milliseconds for slower transition
    cssEase: "ease-in-out",
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container-fluid px-0 customerSlider kitchSecClients pt-0 ">
        <div className="container letsCont">
          <div className="ourcustomerLogo">
            <Slider {...settings}>
              {customerLogos.map((logo, index) => (
                <div className="d-flex justify-content-center align-items-center" key={index}>
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={logo}
                      alt={`Customer logo ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="container-fluid px-0 commerceRestau layered-background">
        <div className="custom_container2">
          <h1 className="text-center pb-5">
            A Quick Commerce Online Ordering Platform That Amplifies Growth!
          </h1>
          <div class="section-title-border mt-3"></div> 
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                className=""
                src={retailersAppMockup}
                alt="Retailers App Mockup"
              />
            </div>
            <div className="col-lg-6 para mt-5 mt-lg-0">
              <p>
                Blink for Retail is built on research and innovation in online retail management. Ours is a full-fledged qCommerce Online Ordering Platform
                that enables efficient order fulfilment, rapid response business analytics and direct customer engagement that keeps your business up to
                speed with customer demands. We are trusted by Pharmacies, Supermarkets, Food and Beverage brands, CPG Companies and other retail businesses
                to organize, control, and scale their businesses through a direct-to- consumer e-tail channel.
              </p>
              <p>
                Some of the world’s leading consumer brands are currently using our quick commerce direct ordering platform, enabling them to expand quickly
                and profitably.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RetailClientSlider;
