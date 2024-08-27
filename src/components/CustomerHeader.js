import React from 'react'
import ParticlesBg from 'particles-bg';

const CustomerHeader = () => {
  return (
    <div>
       <header className='particles'>
        <ParticlesBg type="circle" bg={true} />
       <div className="custom-container about-title">
            <h1>Meet Our Customers</h1>
        </div>
    </header>
    </div>
  )
}

export default CustomerHeader
