import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nyc from '../images/nyc.jpeg';
import '../App.css';
import Logo from '../images/logo.png';
import Introabout from '../images/introabout.jpeg';
import 'aos/dist/aos.css'; 
import Home2 from '../images/home2.jpeg'
import AOS from 'aos'; 

const Home = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const items = document.querySelectorAll('.scroll-box');
      const triggerBottom = window.innerHeight * 0.8;

      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    window.scrollTo(0, 0);

    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out',
      once: true, 
    });

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section className='home-section'>
  <div className="parallax-background">
  <div className='img-section'></div>
  <div className='title' data-aos="fade-down">
    <h1 className='name'>DIRECT MANAGEMENT <span className='underline'>SERVICES LLC.</span></h1>
  </div>
  <div className='brick-quote' data-aos="fade-up">"Building Dreams, One Brick at a Time"</div>
  <div className='project-button'>
    <button className='view-projects'>
      <a href="#section06">  <h6>Scroll Down Button #6</h6>
  <a href="#section07"><span></span>Scroll</a>
      </a>
    </button>
  </div>
</div>

      <div className="parallax-item1">
        <div className='about1' >
        <h2 className='about-title' data-aos="fade-up">ABOUT US</h2><br></br><br></br>
        <p className='about-intro' data-aos="fade-up">Direct Management Services LLC. was incorporated on February 2021 in New York to operate in the real estate industry as a property management company while also offering contracting services.</p>
        <a href="your-link-here" data-aos="fade-up" className='read-more-button' id='read-more-button'>Read More</a>
        </div>
        <div className='div2'>
          <div className='back-img' data-aos="fade-right">
            <img src={Introabout} className='about-img' alt="About" />
          </div>
        </div>
      </div>

<div className="parallax-background2">
  <div className="parallax-item2">
    <br></br><br></br><br></br><br></br>
    <h2 className='services-title'>Our Services</h2>
    <div className="services-grid">
      <div className="service service1" data-aos="fade-down">
        <i className="ti-bar-chart"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
      </div>

      <div className="service service2" data-aos="fade-down">
        <i className="ti-light-bulb"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
      </div>

      <div className="service service3" data-aos="fade-down">
        <i className="ti-money"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a>
      </div>
    </div>
  </div>
</div>

<div className="parallax-background3">
<div className="parallax-item3">
  <ul className='list' data-aos="fade-up">
    <li className='item'></li>
    <li className='item'></li>
    <li className='item'></li>
    <li className='item'></li>
    <li className='item'></li>
  </ul>
</div>
      </div>
      <div className="parallax-background4">
        <div className="parallax-item4">
          <h2 className="contact-title" data-aos="fade-up">
            Get Free Quote
          </h2>
          <form className="contact-form" data-aos="fade-up">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="6" column="15" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
