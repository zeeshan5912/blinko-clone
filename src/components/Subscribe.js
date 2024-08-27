import React from 'react';
// import './Subscribe.css'; // Assuming you have custom CSS

const Subscribe = () => {
  return (
    <section className="container-fluid px-0 subscribeUs overflow-x-hidden">
      <div className="triangle-down"></div>
      <div className="container d-flex flex-column justify-content-center align-items-center pt-5">
        <h1 className="text-center pt-3">Subscribe to our Newsletter</h1>
        <div class="section-title-border mt-3 mb-2"></div>
        <p className="text-center">
          The latest news, articles and resources sent to your inbox
        </p>
      </div>

      <form className="container d-flex justify-content-center align-items-center" action="">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text d-flex justify-content-center align-items-center" id="basic-addon2">
            Subscribe
          </span>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the envelope icon from Font Awesome
// import styled from 'styled-components';

// // Define your variables as JavaScript objects
// const white = '#FFF';
// const black = '#000';
// const textColor = '#444';
// const borderRadius = '4px';
// const brandColor = '#e55039';
// const Main = styled.main`
//   margin: auto;
// `;

// const ModalContainer = styled.div`
//   background: ${brandColor};
//   color: ${white};
//   width: 60rem;
//   border-radius: ${borderRadius};
//   text-align: center;
//   padding: 10rem 4rem 4rem 4rem;
//   position: relative;

//   .modal__icon {
//     position: absolute;
//     top: -3rem;
//     left: 50%;
//     margin-left: -165px;
//     background: ${brandColor};
//     padding: 3rem 12rem 0 12rem;
//     border-radius: 50%;
//   }

//   .modal__heading {
//     text-transform: uppercase;
//     font-size: 2.6rem;
//   }

//   p {
//     font-size: 1.5rem;
//   }

//   @media only screen and (max-width: 600px) {
//     width: 30rem;

//     .modal__icon {
//       margin-left: -105px;
//       padding: 3rem 6rem 0 6rem;
//       border-radius: 50%;
//     }
//   }
// `;

// const EmailBox = styled.div`
//   position: absolute;
//   bottom: -2rem;
//   left: 50%;
//   margin-left: -20rem;
//   width: 40rem;

//   .email-box__input {
//     color: ${textColor};
//     display: block;
//     width: 100%;
//     height: 4rem;
//     border-radius: ${borderRadius};
//     border: 1px solid ${white};
//     font-size: 1.4rem;
//     padding: 1rem;
//   }

//   .email-box__button {
//     appearance: none;
//     border: none;
//     background: transparent;
//     font-size: 2rem;
//     position: absolute;
//     color: ${brandColor};
//     right: .8rem;
//     top: .8rem;
//     padding: 0;

//     &:hover,
//     &:focus {
//       color: darken(${brandColor}, 20%);
//     }
//   }

//   @media only screen and (max-width: 600px) {
//     margin-left: -12.5rem;
//     width: 25rem;
//   }
// `;

// const Subscribe = () => {
//   return (
//     <Main>
//       <ModalContainer className="modal">
//         <div className="modal__icon">
//           {/* Using FontAwesomeIcon as a component */}
//           <FontAwesomeIcon icon={faEnvelope} size="3x" />
//         </div>
//         <h1 className="modal__heading">Subscribe Today</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aliquid molestias voluptatum fugiat provident tenetur saepe hic consec tetur.
//         </p>
//         <EmailBox className="email-box">
//           <input type="text" className="email-box__input" placeholder="Email Address" />
//           <button type="button" className="email-box__button">
//             <FontAwesomeIcon icon={faEnvelope} />
//           </button>
//         </EmailBox>
//       </ModalContainer>
//     </Main>
//   );
// }

// export default Subscribe;
