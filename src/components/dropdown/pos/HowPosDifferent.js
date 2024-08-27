import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSignal, faCog, faDatabase } from '@fortawesome/free-solid-svg-icons';

// Import your images
import cloudExperienceImage from '../../../images/pos/posFeatures/blink-pos-cloud-experience__graphic-w-300.png';
import offlineOnlineImage from '../../../images/pos/posFeatures/blink-pos-offline-online-experience__graphic-w-300.png';
import integratedExperienceImage from '../../../images/pos/posFeatures/blink-pos-integrated-experience__grapihc-w-300.png';
import dataDrivenImage from '../../../images/pos/posFeatures/blink-pos-data-drivenexperience__graphic-w-300.png';
const HowPosDifferent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
  
    // Define slides
    const slides = [
      {
        image: cloudExperienceImage,
        title: 'Cloud-based experience',
        subtitle: 'Leading to real-time updates',
      },
      {
        image: offlineOnlineImage,
        title: 'Offline-Online experience',
        subtitle: 'for smoother operations',
      },
      {
        image: integratedExperienceImage,
        title: 'Integrated experience',
        subtitle: 'leading to minimum human intervention & maximum automation',
      },
      {
        image: dataDrivenImage,
        title: 'Data-driven experience',
        subtitle: 'to make sure all your necessary data & insights are available at a single click',
      },
    ];
  
    // Settings for react-slick slider
    const sliderSettings = {
      centerMode: true,
      centerPadding: '300px',
      speed: 1000,
      cssEase: 'ease-in-out',
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '100px',
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    // Function to handle button click and change active slide
    const handleSlideChange = (index) => {
      setActiveSlide(index);
    };
  
    return (
      <section className="container-fluid px-0 howpos">
        <h1 className="headingColor headingTheme text-center">
          How is Blink’s POS different?
        </h1>
        <div class="section-title-border mt-0 mb-5"></div>
        <Slider {...sliderSettings} className="posHowSlider">
          {slides.map((slide, index) => (
            <div className="possilderin" key={index}>
              <div className="card w-100">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <div>
                    <img className="img-fluid" style={{ maxWidth: '147px' }} src={slide.image} alt="" />
                  </div>
                  <div className="d-block justify-content-center align-content-center px-4">
                    <h1 className="headingColor headingTheme fs-2 fw-bold">
                      {slide.title}
                    </h1>
                    <p className="fs-6">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container postab">
          <div className="row">
            <div className="col-3">
              <button
                className={activeSlide === 0 ? 'active' : ''}
                onClick={() => handleSlideChange(0)}
              >
                <FontAwesomeIcon icon={faCloud} />
                <span className="headingColor mx-2">Cloud-based experience</span>
              </button>
            </div>
            <div className="col-3">
              <button
                className={activeSlide === 1 ? 'active' : ''}
                onClick={() => handleSlideChange(1)}
              >
                <FontAwesomeIcon icon={faSignal} />
                <span className="headingColor mx-2">Offline-Online experience</span>
              </button>
            </div>
            <div className="col-3">
              <button
                className={activeSlide === 2 ? 'active' : ''}
                onClick={() => handleSlideChange(2)}
              >
                <FontAwesomeIcon icon={faCog} />
                <span className="headingColor mx-2">Integrated experience</span>
              </button>
            </div>
            <div className="col-3">
              <button
                className={activeSlide === 3 ? 'active' : ''}
                onClick={() => handleSlideChange(3)}
              >
                <FontAwesomeIcon icon={faDatabase} />
                <span className="headingColor mx-2">Data-driven experience</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowPosDifferent;