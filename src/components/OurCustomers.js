import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoAcaixpress from '../images/logo-acaixpress-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBakely from '../images/logo-bakely-pc02feko33a2i7yblnmcga9dh1naz39riodyr2cc9s.png';
import logoBaskinRobbins from '../images/logo-baskinrobbins-pc02fdmtw98s6lzor57pvshwvnrxre616jqh9sdqg0.png';
import logoBurgerLab from '../images/logo-burgerlab-pc02x7mlk3nmga35mcpwoshqltvmsnypatb41rxue8.png';
import logoChatterboxCafe from '../images/logo-chatterbox-cafe-pc02xcbsi9u22bwbuwr1j9b1kr8gv5hczgkjg5qvj4.png';
import logoCheezious from '../images/logo-cheezious-pc02fcozpf7hv011wmt3baqga9wkjp2auf2zsif4m8.png';
import logoCityFlower from '../images/logo-city-flower-pc03cm7dkcqsq7plo0fsjwjp35y6y34c327l713kf4.png';
import logoDelishPizzaBar from '../images/logo-delishpizzabar-pc02fbr5il67je2f24egqsyzow17bzykiafib8gisg.png';
import logoIHop from '../images/logo-ihop-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import logoKababjees from '../images/logo-kababjees-pc02xd9mp3vcdxuypf5o3r2i653u2ul3bl80xfphcw.png';
import logoLayers from '../images/logo-layers-pc02fhe6nldxh1u856u85rjr979em6kyj2cf6w85r4.png';
import logoMeatOne from '../images/logo-meatone-pc02xag44lrhf3z25vxse9s4dzhqfr9wb79khltnvk.png';
import logoMoosNClucks from '../images/logo-moosnclucks-pc02xcbsi9u22bwbuwr1j9b1kr8gv5hczgkjg5qvj4.png';
import logoNandos from '../images/logo-nandos-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import logoPieInTheSky from '../images/logo-pieinthesky-pc02xf5b2rxx15s8efyx8qlfcwuki8sjzuizvzmp0g.png';
import logoRoyalTaj from '../images/logo-royal-taj-pc039pvahqryxhx5l9c7d4vj5e8g7om4opsoxbe9ls.png';
import logoSprings from '../images/logo-springs-pc02xbdybfsrqpxp0eceyrjkzdd3ngdmnbx1yvs9pc.png';
import logoWhatAParatha from '../images/logo-whataparatha-pc02fggcgrcn5fvlaofll9sante1ehh86xoxpm9jxc.png';
import logoDairyQueen from '../images/dairyqueen-logo-p531obbpsiqwb6v9hv7egunj1041pk7p438cxcy3og.png';
const OurCustomers = () => {
  const customers = [ logoAcaixpress, logoBakely, logoBaskinRobbins, logoBurgerLab, logoChatterboxCafe, logoCheezious, logoCityFlower, logoDelishPizzaBar, logoIHop, logoKababjees, logoLayers, logoMeatOne, logoMoosNClucks, logoNandos, logoPieInTheSky, logoRoyalTaj, logoSprings, logoWhatAParatha, logoDairyQueen,
  ];

  const reviews = [
    {
      img: logoBurgerLab,
      title: "We were able to see an increase of 20% in our sales within the first few months",
      name: "KHIZER BAIG",
      role: "FOUNDER"
    },
    {
      img: logoCheezious,
      title: "We were able to see an increase of 20% in our sales within the first few months",
      name: "KHIZER BAIG",
      role: "FOUNDER"
    },
    {
      img: logoChatterboxCafe,
      title: "We were able to see an increase of 20% in our sales within the first few months",
      name: "KHIZER BAIG",
      role: "FOUNDER"
    },
    {
      img: logoChatterboxCafe,
      title: "We were able to see an increase of 20% in our sales within the first few months",
      name: "KHIZER BAIG",
      role: "FOUNDER"
    },
  ];
   
  const customerSliderSettings = {
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 11,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 11,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const reviewSliderSettings = {
    infinite: true,
    speed: 1000,
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <section className="container-fluid px-0 meetCustomers overflow-x-hidden">
    
      <div className="container">
        <h1 className="text-center">Meet Our Customers</h1>
        <div class="section-title-border mt-3"></div>
      </div>
      <div className="container-fluid customerLogo">
        <Slider {...customerSliderSettings} className="customersLogo">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{ width: '166.3px', height: '80px' }}
              
            >
              <img
                style={{ width: '80px', height: '80px' }}
                src={customer}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container-fluid customersReview">
        <Slider {...reviewSliderSettings} className="customersReviews">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center cart-mt"
            >
              <div className="card d-flex justify-content-center align-items-center">
                <div className="cardImg w-100">
                  <img
                    src={review.img}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body p-0">
                  <h5 className="card-title">{review.title}</h5>
                  <p className="card-text">
                    {review.name}
                    <br />
                    <span className="card-text">{review.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </section>
  );
};

export default OurCustomers;
