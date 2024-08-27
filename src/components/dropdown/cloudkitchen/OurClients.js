import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import logoMeatOne from '../../../images/customersLogo/logo-meatone-pc02xag44lrhf3z25vxse9s4dzhqfr9wb79khltnvk.png';

const OurClients = () => {
    
        useEffect(() => {
          const initializeSlick = () => {
            if ($('.ourcustomerLogo').length) {
              $('.ourcustomerLogo').slick({
                infinite: true,
                speed: 1000, // Set speed to 1000 milliseconds for slower transition
                cssEase: 'ease-in-out',
                slidesToShow: 4,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
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
              });
            }
          };
      
          // Wait for the component to be fully mounted and the DOM to be ready
          initializeSlick();
      
          // Cleanup to destroy Slick on unmount
          return () => {
            if ($('.ourcustomerLogo').hasClass('slick-initialized')) {
              $('.ourcustomerLogo').slick('unslick');
            }
          };
        }, []);
      

  return (
    <section className="container-fluid px-0 customerSlider kitchSecClients">
      <h1 className="text-center">Our Clients</h1>
      <div className="section-title-border mb-3"></div>
      <div className="container letsCont">
        <div className="ourcustomerLogo">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoAcaixpress} alt="Acaixpress" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoBakely} alt="Bakely" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoBaskinRobbins} alt="Baskin Robbins" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoBurgerKing} alt="Burger King" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoBurgerLab} alt="Burger Lab" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoChatterboxCafe} alt="Chatterbox Cafe" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoCheezious} alt="Cheezious" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoCityFlower} alt="City Flower" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoDelishPizzaBar} alt="Delish Pizza Bar" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoIhop} alt="IHOP" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoKababjees} alt="Kababjees" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoLayers} alt="Layers" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="card">
              <img className="img-fluid" src={logoMeatOne} alt="Meat One" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
