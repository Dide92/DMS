import React, { useEffect } from 'react';
import '../App.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 


const About = () => {
  useEffect(() => {
    const handleParallaxScroll = () => {
      const parallax = document.getElementById("parallax");
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    };

    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleParallaxScroll);

    return () => {
      window.removeEventListener("scroll", handleParallaxScroll);
    };
  }, []);
  AOS.init({
    duration: 2000, 
    easing: 'ease-in-out',
    once: true, 
   
  });


  return (
    <section className='section1'>
      <div id="parallax">
        <div className='about-img1'>

        </div>
      </div>
      <div >
        <h2 className='about-header'>About Us</h2>
      </div>
      <div>
<p className='about'>At Direct Management Services, we are more than just a general contractor company – we are your trusted partner in property management and renovation. With a commitment to excellence, innovation, and community, we have positioned ourselves as a leader in the industry, providing comprehensive solutions for property owners and small business entrepreneurs alike.
<br></br><br></br>
<h3 data-aos="fade-right">Our Vision</h3>
<p data-aos="fade-right">Our vision is clear: to transform properties into thriving assets and to create employment opportunities for U.S. workers. We believe that every property has untapped potential, and it's our mission to unlock that potential through a range of services tailored to meet your needs.</p>
<br></br><br></br>
<h3 data-aos="fade-right">What Sets Us Apart</h3>
<p data-aos="fade-right">Complete Maintenance Services
We offer a wide spectrum of maintenance services, including plumbing, security, carpentry, landscaping, painting, electrical work, carpet cleaning, and more. Our dedicated team ensures that your property is always in top condition, providing a hassle-free experience for property owners and business entrepreneurs.</p>
<br></br><br></br>
<h3 data-aos="fade-right">Security and Surveillance Solutions</h3>
<p data-aos="fade-right">Safety is a priority, and we specialize in designing, installing, relocating, and renewing security and surveillance systems, along with internet network cable installations. We provide peace of mind through cutting-edge technology.</p>
<br></br><br></br>
<h3 data-aos="fade-right">General Contracting Excellence</h3>
<p data-aos="fade-right">For larger renovation or rehabilitation projects, our general contracting services stand out. We have the expertise and resources to bring your vision to life, enhancing the value and functionality of your property.</p>
<br></br><br></br>
<h3 data-aos="fade-right">Real Estate Transformation</h3>
<p data-aos="fade-right">We invest in distressed real estate, turning neglected properties into attractive assets. Through meticulous remodeling and renovation, we breathe new life into these properties, increasing their value and potential.</p>
<br></br><br></br>
<h3 data-aos="fade-right">Professional Photography Services</h3>
<p data-aos="fade-right">We understand the importance of visual appeal in the real estate industry. That's why we offer professional photography services to showcase your properties in the best light. Your listings will stand out with our captivating photographs.</p>
<br></br><br></br>
<h3 data-aos="fade-right">Our Commitment</h3>
<p data-aos="fade-right">Direct Management Services is dedicated to creating employment opportunities for U.S. workers while actively contributing to the growth of our communities. We specialize in property management and maintenance services in Manhattan, Brooklyn, and Queens, the heart of New York City.</p>
<br data-aos="fade-right"></br><br></br>
<p data-aos="fade-right">Our comprehensive managerial services include routine repairs, arrangement of external mechanics, tenant issue resolution, and compliance with essential inspections required by regulatory bodies. We handle the details, so you can focus on your property's success.</p>
<br></br><br></br>
<h3 data-aos="fade-right">Join Us in Transforming Properties</h3>
<p data-aos="fade-right">We invite you to join us on our journey of property transformation and community enhancement. Whether you're a property owner looking to maximize your investment or a small business entrepreneur seeking reliable maintenance services, Direct Management Services is here to exceed your expectations.</p>
<br></br><br></br>
<p data-aos="fade-right">Contact us today to learn more about how we can partner with you to create value, provide security, and transform your properties into thriving assets.</p></p>
      </div>
 
    </section>
  );         
};

export default About;
