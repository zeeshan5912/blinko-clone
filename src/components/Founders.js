import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import vinDieselImage from '../images/about/founders/1-Sair-Ali-BW.jpg'; // Replace with the correct path to your image
import davidCornerImage from '../images/about/founders/3-Hyder-Abbas-BW.jpg'; // Replace with the correct path to your image
import tomCruiseImage from '../images/about/founders/4A-Hassan-Mahmood.jpg'; // Replace with the correct path to your image

const Founders = () => {
  const teamMembers = [
    {
      name: "Syed Sair Ali",
      role: "CEO, Co-founder",
      imgSrc: vinDieselImage,
    },
    {
        name: "Hyder Abbas",
        role: "CTO, Co-founder",
      imgSrc: davidCornerImage,
    },
    {
      name: "Hassan Mahmood",
      role: "General Manager",
      imgSrc: tomCruiseImage,
    },
  ];

  return (
    <div className="main">
      {teamMembers.map((member, index) => (
        <div className="profile-card" key={index}>
          <div className="img">
            <img src={member.imgSrc} alt={member.name} />
          </div>
          <div className="caption">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <a href="/#"><FaFacebook /></a>
              <a href="/#"><FaInstagram /></a>
              <a href="/#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;
