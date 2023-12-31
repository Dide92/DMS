import React from 'react';

const Footer = () => {
  return (
    <footer className="hero">
            <div className="line__separate"></div>

      <div className="container flex">
        <div className="container__about">

          {/* <h2 className='footer-h2'>Address</h2> */}
          <p>45-15 Barnett Ave</p>
          <p>Queens, NY 11104</p>
          <p>(917) 565 0623</p>
          <p>directmanagement@example.com</p>
        </div>
        <div className="container-pages flex">
          <div className="container__recentpages">
            {/* <h2 className='footer-h2'>Content</h2> */}
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line__separate"></div>
      <div className="by flex">
        <div className="icons">
          <a href="#" className="icon1 icon--instagram">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="icon1 icon--twitter">
            <i className="ri-twitter-line"></i>
          </a>
          <a href="#" className="icon1 icon--linkedin">
            <i className="ri-linkedin-line"></i>
          </a>
        
        </div>
      </div>
      <p className="footer-designer-ad">Designed by <a href="https://portfolio-dide92.vercel.app/" target="_blank" rel="noopener noreferrer">Dide Aydogan</a></p>
      <p className='copyright'>Copyright © 2023 All Rights Reserved by Direct Management Services LLC.</p>

    </footer>
  );
};

export default Footer;
