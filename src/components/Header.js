// import React from 'react';
// import image from '../images/home-banner-text.png';
// import image2 from '../images/rocket-pk.webp';
// import image3 from '../images/cloud-1024x1024.webp';
// import image4 from '../images/cloud-1024x1024.webp';
// import image5 from '../images/cloud-1024x1024.webp';
// // import Navbar from './Navbar'; // Import Navbar component

// const Header = () => {
//   return (
//     <div className="background-container">
//       <header>
     
//         <div className="container-fluid p-0 nav-downSec">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <img className="bannerImg" src={image} alt="Home Banner" />
//               </div>
//               <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
//                 <img className="img-fluid rocket" src={image2} alt="Rocket" />
//                 <div className="rocket-shadow"></div>
//               </div>
//             </div>
//             <div className="container hedp">
//               <p>
//                 The best online ordering system for restaurants and supermarkets
//               </p>
//             </div>
//           </div>
//         </div>
//         <img className="cloud-img fst-cloud d-none d-sm-none d-md-flex" src={image3} alt="First Cloud" />
//         <img className="cloud-img secnd-cloud d-none d-sm-none d-md-flex" src={image4} alt="Second Cloud" />
//         <img className="cloud-img third-cloud d-none d-sm-none d-md-flex" src={image5} alt="Third Cloud" />
//       </header>
//     </div>
//   );
// };

// export default Header;
// export default Header;
import React from 'react';
import ParticlesBg from 'particles-bg'; // Import ParticlesBg
import image from '../images/home-banner-text.png';
import image2 from '../images/rocket-pk.webp';
import image3 from '../images/cloud-1024x1024.webp';
import image4 from '../images/cloud-1024x1024.webp';
import image5 from '../images/cloud-1024x1024.webp';

const Header = () => {
  return (
    <div className="background-container">
      <header className='particles'>
        <div className="container-fluid p-0 nav-downSec">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img className="bannerImg" src={image} alt="Home Banner" />
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
                <img className="img-fluid rocket" src={image2} alt="Rocket" />
                <div className="rocket-shadow"></div>
              </div>
            </div>
            <div className="container hedp">
              <p>
                The best online ordering system for restaurants and supermarkets
              </p>
            </div>
          </div>
        </div>
        <img className="cloud-img fst-cloud d-none d-sm-none d-md-flex" src={image3} alt="First Cloud" />
        <img className="cloud-img secnd-cloud d-none d-sm-none d-md-flex" src={image4} alt="Second Cloud" />
        <img className="cloud-img third-cloud d-none d-sm-none d-md-flex" src={image5} alt="Third Cloud" />
        
        {/* Integrate ParticlesBg component */}
        <ParticlesBg type="circle" bg={true} />
      </header>
    </div>
  );
};

export default Header;
