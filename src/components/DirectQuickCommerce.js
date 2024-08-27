import React from 'react';
import caseStudyHeader from '../images/customers/commercePlatform/Case-study-Headers.png';
import caseStudy2030 from '../images/customers/commercePlatform/2030kitchen-case-study-cover.png';
import caseStudyDunkin from '../images/customers/commercePlatform/dunkin-donuts-case-study-cover.png';
import caseStudyNandos from '../images/customers/commercePlatform/nandos.jpg';
import caseStudyIlForno from '../images/customers/commercePlatform/ilforno-cover.png';
import caseStudySpar from '../images/customers/commercePlatform/spar-cover.png';

const DirectQuickCommerce = () => {
    return (
        <section className="container-fluid px-0 DirectQuickCommerce">
            <div className="custom-container">
                <div className="row">
                    <div className="col-5 px-0 textside">
                        <h1 className="headingColor headingTheme fs-2 w-75">The Direct Quick Commerce Platform that transformed the F&B and Retail Landscape</h1>
                        <p className="w-75">Blink has created a platform to empower restaurants, supermarkets, and retail businesses – giving them direct access to the end consumer. Our direct online ordering system has provided our customers with 2x order growth, 30 sec faster order speed, 50% increased user retention, and 60% greater sign-up conversions, making their lives so much easier. Hear from our customers themselves what they have to say about their experience with Blink!</p>
                        <div className="mt-5">
                        <a href="/#" style={{ color: 'var(--btnBgColor)' }}>Contact Us</a>

                            <a href="/#" style={{ background: 'var(--btnBgColor)', color: 'var(--textblack)' }}>See All Stories</a>
                        </div>
                    </div>
                    <div className="col-7 px-0 linkSide">
                        <div className="row row-cols-lg-3">
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudyHeader} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudy2030} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudyDunkin} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudyNandos} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudyIlForno} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                            <div className="col">
                                <a href="/#" className="d-flex flex-column align-items-end">
                                    <img width="250px" src={caseStudySpar} alt="" />
                                    <p className="text-end mt-3">READ CASE STUDY</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectQuickCommerce;
