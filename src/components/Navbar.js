// export default Navbar;
// navbar.js
// import React, { useEffect } from 'react';
// import $ from 'jquery'; // Import jQuery
// import { Link } from 'react-router-dom';
// import { menuItems } from '../menuItems'; // Import the menuItems array
// import image6 from '../images/blink-logo.png';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// const Navbar = () => {
//   useEffect(() => {
//     $(document).ready(function () {
//       var movementStrength = 80;
//       var height = movementStrength / $(window).height();
//       var width = movementStrength / $(window).width();
//       $("body").mousemove(function (e) {
//         var pageX = e.pageX - $(window).width() / 2;
//         var pageY = e.pageY - $(window).height() / 2;
//         var newvalueX = width * pageX * -1 - 25;
//         var newvalueY = height * pageY * -1 - 70;
//         $(".cloud-img").each(function () {
//           $(this).css({
//             transform: "translate(" + newvalueX + "px, " + newvalueY + "px)",
//           });
//         });
//       });
//     });

//     window.addEventListener('scroll', () => {
//       const navbar = document.querySelector('nav');
//       navbar.classList.toggle('sticky', window.scrollY > 0);
//     });
//   }, []);

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg py-3">
//         <div className="container-fluid">
//           <div className="row w-100 h-auto nav-row">
//             <div className="col-lg-2 d-flex justify-content-between justify-content-lg-end logo-sm">
//               <a className="navbar-brand" href="/#">
//                 <img className='logo2' src={image6} alt="" style={{ width: '140px', height: 'auto' }} />
//               </a>
//               <div className="d-flex d-lg-none nav-toggle">
//                 <button
//                   className="navbar-toggler m-0 p-0"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarTogglerDemo01"
//                   aria-controls="navbarTogglerDemo01"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-8 col-sm-12 d-flex align-content-center">
//               <div
//                 className="collapse navbar-collapse justify-content-sm-end"
//                 id="navbarTogglerDemo01"
//               >
//                 <ul className="navbar-nav">
//                   {menuItems.map((item) => (
//                     <li key={item.title} className="nav-item mx-3 d-flex align-items-center">
//                       {item.submenu ? (
//                         <div className="dropdown-center">
//                           <button
//                             className="btn dropdown-toggle"
//                             type="button"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             data-bs-offset="10,20"
//                           >
//                             {item.title}
//                           </button>
//                           <ul className="dropdown-menu">
//                             {item.submenu.map((subItem) => (
//                               <li key={subItem.title} className="dropdown-item">
//                                 <Link to={`/${subItem.url}`} className="nav-link">
//                                 <i className={`fas ${subItem.icon}`} style={{ fontSize: '1.50rem', marginRight: '10px' }}></i>
//                                 <span style={{ fontSize: '1.50rem' }}>{subItem.title}</span>
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ) : (
//                         <Link to={item.url} className="nav-link">
//                           {item.title}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-2 d-none d-lg-flex align-items-center nav-3 BOOK">
//               <div>
//                 <a href="/contact" className="btn" style={{ fontWeight: '900' }}>Contact Us</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../menuItems'; // Import the menuItems array
import image6 from '../images/blink-logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  useEffect(() => {
    $(document).ready(function () {
      var movementStrength = 80;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      $("body").mousemove(function (e) {
        var pageX = e.pageX - $(window).width() / 2;
        var pageY = e.pageY - $(window).height() / 2;
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 70;
        $(".cloud-img").each(function () {
          $(this).css({
            transform: "translate(" + newvalueX + "px, " + newvalueY + "px)",
          });
        });
      });
    });

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      navbar.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <div className="row w-100 h-auto nav-row">
            <div className="col-lg-2 d-flex justify-content-between justify-content-lg-end logo-sm">
              <a className="navbar-brand" href="/#">
                <img className='logo2' src={image6} alt="" style={{ width: '140px', height: 'auto' }} />
              </a>
              <div className="d-flex d-lg-none nav-toggle">
                <button
                  className="navbar-toggler m-0 p-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 d-flex align-content-center">
              <div
                className="collapse navbar-collapse justify-content-sm-end"
                id="navbarTogglerDemo01"
              >
                <ul className="navbar-nav">
                  {menuItems.map((item) => (
                    <li
                      key={item.title}
                      className={`nav-item mx-3 d-flex align-items-center ${activeItem === item.url ? 'active' : ''} ${item.submenu ? 'dropdown' : ''}`}
                    >
                      {item.submenu ? (
                        <div className="dropdown-center">
                          <button
                            className="btn nav-link dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="10,20"
                          >
                            {item.title}
                          </button>
                          <ul className="dropdown-menu">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.title} className="dropdown-item">
                                <Link
                                  to={`/${subItem.url}`}
                                  className="nav-link"
                                  onClick={() => setActiveItem(`/${subItem.url}`)}
                                >
                                  <i className={`fas ${subItem.icon}`} style={{ fontSize: '1.50rem', marginRight: '10px' }}></i>
                                  <span style={{ fontSize: '1.50rem' }}>{subItem.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={item.url}
                          className="nav-link"
                          onClick={() => setActiveItem(item.url)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-flex align-items-center nav-3 BOOK">
              <div>
              <Link to="/contact" className="btn" style={{ fontWeight: '900' }}>
        Contact Us
      </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
