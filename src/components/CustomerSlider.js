import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoAcaixpress from '../images/customersLogo/logo-acaixpress-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBakely from '../images/customersLogo/logo-bakely-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBaskinRobbins from '../images/customersLogo/logo-baskinrobbins-pc02fdmtw98s6lzor57pvshwvnrxre616jqh9sdqg0.png';
import logoBurgerKing from '../images/customersLogo/logo-burger-king-pc03cunximtod1cjnx1io3p48z7b114vy1wqzgkrng.png';
import logoBurgerLab from '../images/customersLogo/logo-burgerlab-pc02x7mlk3nmga35mcpwoshqltvmsnypatb41rxue8.png';
import logoChatterboxCafe from '../images/customersLogo/logo-chatterbox-cafe-pc02xcbsi9u22bwbuwr1j9b1kr8gv5hczgkjg5qvj4.png';
import logoCheezious from '../images/customersLogo/logo-cheezious-pc02fcozpf7hv011wmt3baqga9wkjp2auf2zsif4m8.png';
import logoCityFlower from '../images/customersLogo/logo-city-flower-pc03cm7dkcqsq7plo0fsjwjp35y6y34c327l713kf4.png';
import logoDelishPizzaBar from '../images/customersLogo/logo-delishpizzabar-pc02fbr5il67je2f24egqsyzow17bzykiafib8gisg.png';
import logoIhop from '../images/customersLogo/logo-ihop-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import logoKababjees from '../images/customersLogo/logo-kababjees-pc02xd9mp3vcdxuypf5o3r2i653u2ul3bl80xfphcw.png';
import logoLayers from '../images/customersLogo/logo-layers-pc02fhe6nldxh1u856u85rjr979em6kyj2cf6w85r4.png';
import logoMeatOne from '../images/customersLogo/logo-meatone-pc02xag44lrhf3z25vxse9s4dzhqfr9wb79khltnvk.png';

const CustomerSlider = () => {
  const logos = [
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
    logoMeatOne
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="container-fluid px-0 customerSlider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img className="img-fluid" src={logo} alt={`Logo ${index}`} style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px' }} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerSlider;
