import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import inventoryManagementImg from '../images/vendor-portal-inventory-management-300x151.png';

const ActionableIntelligence = () => {
    const features = [
        {
            img: inventoryManagementImg,
            title: 'Inventory Management​',
            text: 'Manage inventory of 100-10000 SKUs with a breeze​'
        },
        {
            img: inventoryManagementImg,
            title: 'Inventory Management​',
            text: 'Manage inventory of 100-10000 SKUs with a breeze​'
        },
        {
            img: inventoryManagementImg,
            title: 'Inventory Management​',
            text: 'Manage inventory of 100-10000 SKUs with a breeze​'
        },
        {
            img: inventoryManagementImg,
            title: 'Inventory Management​',
            text: 'Manage inventory of 100-10000 SKUs with a breeze​'
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000, // Set speed to 1000 milliseconds for slower transition
        cssEase: 'ease-in-out',
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
        <section className="container-fluid px-0 actionable overflow-x-hidden">
            <div className="container sec_headText">
                <h1 className="text-center">Blink Gives You Actionable Intelligence</h1>
                <div class="section-title-border mt-3"></div>
                <h3 className="text-center">
                    Customer Data with Restaurant Delivery Analytics
                </h3>
                <p className="text-center">
                    Get complete access to and ownership of your customer data with
                    Blink’s innovative restaurant analytics software
                </p>
            </div>
            <div className="container featureWrap">
                <Slider {...sliderSettings} className="featureSlide">
                    {features.map((feature, index) => (
                        <div key={index} className="d-flex justify-content-center align-items-center">
                            <div className="card d-flex justify-content-center align-items-center">
                                <div className="cardImg">
                                    <img
                                        src={feature.img}
                                        className="img-fluid"
                                        alt={feature.title}
                                    />
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title text-center">{feature.title}</h5>
                                    <p className="card-text text-center">{feature.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="container sec_headText py-0 pb-3">
                <h3 className="text-center">and much more...</h3>

            </div>
        </section>
    );
};

export default ActionableIntelligence;
