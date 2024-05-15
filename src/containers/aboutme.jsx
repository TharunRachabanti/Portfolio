import React, { useState } from 'react';
import profileImage from '/assets/dispersionmine4.png';
import '../styles/aboutme.css';

const Aboutme = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1 className="aboutme-heading">About me</h1>
      <div className={`aboutme-container ${isHovered ? 'hovered' : ''}`}>
        <div
          className="aboutme-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="card-image-container">
            <img src={profileImage} alt="Irene Mmassy" className="profile-image" />
          </div>
          <div className="card-content">
            <h1 className="name">Tharun Rachabanti</h1>
            <p className="title">Full Stack Dveloper & Author</p>
            <p className="description">
            I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of Internet Technology. I create successful websites that are fast, easy to use, and built with best practices. I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> tharunrachabanti@gmail.com</p>
              <p><strong>Phone:</strong> +91 9347644178</p>
              
            </div>
            <div className="freelance-status">
              <p>Freelance: Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
