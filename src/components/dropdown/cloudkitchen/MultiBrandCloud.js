import React from 'react';
import searchImage  from '../../../images/kitchen/search-bar.png';
import contactBookIcon  from '../../../images/kitchen/advantage/icon-contact-book.png';
import devicesIcon  from '../../../images/kitchen/advantage/icon-devices.png';
import coinIcon  from '../../../images/kitchen/advantage/icon-coin.png';


const MultiBrandCloud = () => {
    return (
        <div>
            {/* Multi-Brand Cloud section */}
            <section className="container-fluid px-0 MultiBrandCloud mt-4 mt-lg-0 pb-4 pb-lg-0 layered-background">
                <div className="container px-4 px-lg-0">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-end">
                            <img className="img-fluid px-3 " src={searchImage} alt="" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h1 className="headingTheme headingColor mb-5">A Multi-Brand Cloud Kitchen Order Management System</h1>
                            <div class="section-title-border mt-3 mb-2"></div>
                            <p className="mb-4">With Blink, it is easy to start your digital journey, whether your business is in its early stages of operations or an established one.
                                Blink gives you your own branded online restaurant ordering mobile app, website, comprehensive merchant portal, and fleet management
                                solution all in one.</p>
                            <p className="pt-2">Blink is a branded, unified, affordable, plug-and-play and always ready-to-scale restaurant ordering system!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantage section */}
            <section className="container-fluid px-0 whyus advantage pt-0">
                <div className="custom_container">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col d-flex justify-content-center align-items-center cart-mt">
                            <div className="card d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={contactBookIcon} className="img-fluid" alt="Customer Data Ownership" />
                                </div>
                                <h5 className="card-title text-center">Customer Data Ownership</h5>
                                <p className="card-text text-center">
                                    With Blink, you own your customer data stored in a secure and encrypted system. Communicate directly with your customers without third-party masking.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center cart-mt">
                            <div className="card d-flex justify-content-center align-items-center">
                                <div className="mt-lg-4">
                                    <img src={devicesIcon} className="img-fluid" alt="Speed To Market" />
                                </div>
                                <h5 className="card-title text-center">Speed To Market</h5>
                                <p className="card-text text-center">
                                    Blink offers you a branded mobile app and website with seamless user experiences and an in-house technical support team help your Supermarket business go digital with ease.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center cart-mt">
                            <div className="card d-flex justify-content-center align-items-center">
                                <div>
                                    <img src={coinIcon} className="img-fluid" alt="No Heavy Commissions" />
                                </div>
                                <h5 className="card-title text-center">No Heavy Commissions</h5>
                                <p className="card-text text-center">
                                    Unlike third-party aggregators, we’ll never charge hefty commissions or hidden fees. With Blink, you own your revenue, and only pay for what you use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MultiBrandCloud;