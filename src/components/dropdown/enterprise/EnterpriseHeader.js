import React from 'react'
import { Helmet } from 'react-helmet-async'
import ParticlesBg from 'particles-bg';

const EnterpriseHeader = () => {
    return (
        <header className=" particles">
              <ParticlesBg type="circle" bg={true} />
            <Helmet>
                <title>Enterprise</title>
            </Helmet>
            <div className="custom-container about-title flex-column flex-lg-row">
                <h1 className="text-center text-lg-start textColor1 mb-0 mb-lg-5">
                    Blink - Enterprise Practice
                </h1>
            </div>
        </header>

    )
}

export default EnterpriseHeader
