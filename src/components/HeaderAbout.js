import React from 'react'
import ParticlesBg from 'particles-bg';

const HeaderAbout = () => {
  return (
    <div>
       <header className='particles'>
       <ParticlesBg type="circle" bg={true} />
      <div className="custom-container about-title">
            <h1>About Us</h1>
        </div>
        
        </header>
    </div>
  )
}

export default HeaderAbout
