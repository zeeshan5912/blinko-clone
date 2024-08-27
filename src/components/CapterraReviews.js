import React from 'react'; //import//
import colorArrow from '../images/customers/capteriaReview/colorArrow.svg';
import 'boxicons';

const CapterraReviews = () => {
    const reviews = [
        {
            name: "Muhammad Ahsan A.",
            date: "September 3, 2021",
            rating: 4,
            review: "A great facilitator. I am a happy customer who has been facilitated big time by Blink",
            pros: "It is easy to setup and has a good technical team that ensures the tech stack works without major bugs",
            cons: "The customer service element suffers from the general lethargy that Pakistani companies have. Fortunately, I have connections with the [SENSITIVE CONTENT] who is extremely helpful but if the solution wants to do well internationally, the DNA of the [SENSITIVE CONTENT] needs to get cloned into the CX team too"
        },
        {
            name: "Ali Akram",
            date: "June 4, 2021",
            rating: 5,
            review: "Very good experience and surely recommend",
            pros: "They have a very efficient delivery system and overall process. Orders can be placed easily and the menu can be managed in a very easy way",
            cons: "Delivery time needs to be reduced and they need to hire more delivery riders to overcome time delays"
        },
        {
            name: "Umair Khalid",
            date: "May 15, 2021",
            rating: 4,
            review: "Good software for food delivery and e-commerce business",
            pros: "Blink's customer support is very helpful and they provide a comprehensive onboarding session. It was very easy to understand and start using the software",
            cons: "Customization options are limited and sometimes the software experiences glitches during peak hours"
        },
        {
            name: "Zara Ali",
            date: "April 21, 2021",
            rating: 5,
            review: "Satisfied with Blink's services",
            pros: "It is very easy to use and navigate through the application. The features are user-friendly and the technical team is very supportive",
            cons: "The only issue I have faced is with the integration of third-party apps. It would be better if they improve this aspect"
        },
        {
            name: "Hamza Ahmed",
            date: "March 11, 2021",
            rating: 5,
            review: "Blink is a great platform for new businesses",
            pros: "Easy to setup and manage. The customer support is very responsive and they provide solutions promptly",
            cons: "The cost is a bit high for startups but considering the features, it is worth it"
        },
        {
            name: "Sarah Khan",
            date: "February 2, 2021",
            rating: 4,
            review: "Overall a good experience",
            pros: "The platform is very robust and stable. It is easy to manage orders and customer data",
            cons: "The user interface can be improved to be more intuitive and visually appealing"
        },
        {
            name: "Ahmed Raza",
            date: "January 19, 2021",
            rating: 4,
            review: "Good solution for online businesses",
            pros: "The software has a lot of features that are very useful for managing an online business. Customer support is very good",
            cons: "The initial setup was a bit complicated and took some time to get used to"
        },
        {
            name: "Maria Faisal",
            date: "December 28, 2020",
            rating: 5,
            review: "Highly recommend Blink",
            pros: "Blink provides a very comprehensive solution for e-commerce businesses. The features are very useful and easy to use",
            cons: "Sometimes the software can be slow, especially during peak hours"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className='bx bxs-star' style={{ color: i < rating ? '#ff9d28' : '#cccccc' }}></i>
            );
        }
        return stars;
    };

    return (
        <section className="container-fluid px-0 CapterraReviews">
            <div className="custom-container">
                <h1 className="headingColor headingTheme fs48 text-center mb-5">Capterra Reviews</h1>
                <div class="section-title-border mt-3"></div>
                <div className="row row-cols-lg-4 g-4">
                    {reviews.map((review, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <div className="w-100 mt-3 d-flex justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h4 className="textColor2 mb-1 fw-bold">{review.name}</h4>
                                        <h4 className="textColor2" style={{ fontSize: '12px', opacity: 0.5 }}>{review.date}</h4>
                                    </div>
                                    <div>
                                        <a href="/#"><img width="20px" src={colorArrow} alt="Arrow Icon" /></a>
                                    </div>
                                </div>
                                <div className="w-100 d-flex my-2">
                                    {renderStars(review.rating)}
                                </div>
                                <div className="w-100 reviewPara">
                                    <p>{review.review}</p>
                                    <p><i className='bx bx-happy' style={{ color: '#0ab21b', fontSize: '16px' }}></i> &#183; {review.pros}</p>
                                    <p><i className='bx bx-sad' style={{ color: '#cccccc', fontSize: '16px' }}></i> &#183; {review.cons}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 className="text-center my-4"><b className="textColor2">Capterra</b> rating score: <b className="textColor2">4.9</b> of 5, based on <b className="textColor2">8 reviews.</b></h4>
            </div>
        </section>
    );
};

export default CapterraReviews;
