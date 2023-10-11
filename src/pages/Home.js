// import React, { useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Nyc from '../images/nyc.jpeg';
// import '../App.css';
// import Logo from '../images/logo.png';
// import Introabout from '../images/introabout.jpeg'
// import 'aos/dist/aos.css'; 
// import AOS from 'aos'; 


// const Home = () => {
//   useEffect(() => {
//     const handleScrollAnimation = () => {
//       const items = document.querySelectorAll('.scroll-box');
//       const triggerBottom = window.innerHeight * 0.8;

//       items.forEach(item => {
//         const itemTop = item.getBoundingClientRect().top;

//         if (itemTop < triggerBottom) {
//           item.classList.add('active');
//         } else {
//           item.classList.remove('active');
//         }
//       });
//     };
 
//     window.scrollTo(0, 0);

//     const handleParallaxScroll = () => {
//       const parallax = document.getElementById('parallax');
//       let offset = window.pageYOffset;
//       parallax.style.backgroundPositionY = offset * 0.7 + 'px';
//     };

//     window.addEventListener('scroll', handleScrollAnimation);
//     window.addEventListener('scroll', handleParallaxScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//       window.removeEventListener('scroll', handleParallaxScroll);
//     };
//      }, []);
//     AOS.init({
//       duration: 2000, 
//       easing: 'ease-in-out',
//       once: true, 
     
//     });

  
//   return (
//     <section className='home-section'>
//       <div id="parallax" className="parallax-item">
//         <div className='img-section'></div>
//         <div className='title' data-aos="fade-down">
//           <h1 className='name'>DIRECT <img src={Logo} className='logo1' alt="Logo" /> MANAGEMENT <span className='underline'>SERVICES LLC.</span></h1></div>
//         <div className='brick-quote' data-aos="fade-right">"Building Dreams, One Brick at a Time"</div>
//       </div>
//       <div className="parallax-item">
//         <div className='about1' >
//         <h2 className='about-title' data-aos="fade-up">ABOUT US</h2><br></br><br></br>
//         <p className='about-intro' data-aos="fade-up">Direct Management Services LLC. was incorporated on February 2021 in New York to operate in real estate industry as a property management company while also offering contracting services.</p>
//         <button className='button-86' data-aos="fade-up" role='button'><a className='button-a' href="/about">Read More</a></button>
//         </div>
//         <div className='div2'>
//         <div className='back-img' data-aos="fade-right">
//         <img src={Introabout} className='about-img' />
//         </div>
//         </div>
//       </div>
//       <div className="parallax-item">
//         <h2 className='services-title'>SERVICES</h2>
//         <ul className="scroll-list">
//           <li className="animate-scroll">
//             <div className="scroll-box">
//               <button className='service-button'><a href='/services'><h3>Property Management Services for Commercial and Residential Properties</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>Design and Installation of Security and Surveillance Systems for Commercial and Residential Properties</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>Design and Installation of Internet Network Cables</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>Design and Installation of Intercom Systems</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>Installation of Smart Lock Systems</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>General Contractor Services for Larger Renovation or Rehab Projects</h3></a></button>
//             </div>
//           </li>
//           <li className="animate-scroll">
//             <div className="scroll-box">
//             <button className='service-button'><a href='/services'><h3>Property Development Services (Remodeling)</h3></a></button>
//             </div>
//           </li>
//         </ul>
//       </div>
     
//       <div className="parallax-item">
//         <h2 className='projects-title'>PROJECTS</h2>
//         <Carousel showArrows={true} showStatus={false} showThumbs={false}>
//           <div>
//             <img src={Nyc} alt="Project 1" />
//             <p className="legend" style={{backgroundColor:"#557C79"}}>Project 1, Long Island, NY</p>
//           </div>
//           <div>
//             <img src={Nyc} alt="Project 2" />
//             <p className="legend" style={{backgroundColor:"#557C79"}}>Project 2, Fort Lee, NJ</p>
//           </div>
//           <div>
//             <img src={Nyc} alt="Project 3" />
//             <p className="legend" style={{backgroundColor:"#557C79"}}>Project 3, Brooklyn, NY</p>
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Home;


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
        <div className='brick-quote' data-aos="fade-right">"Building Dreams, One Brick at a Time"</div>
      </div>
      <div className="parallax-item1">
        <div className='about1' >
        <h2 className='about-title' data-aos="fade-up">ABOUT US</h2><br></br><br></br>
        <p className='about-intro' data-aos="fade-up">Direct Management Services LLC. was incorporated on February 2021 in New York to operate in the real estate industry as a property management company while also offering contracting services.</p>
        <button className='button-86' data-aos="fade-up" role='button'><a className='button-a' href="/about">Read More</a></button>
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
      <div className="service service1">
        <i className="ti-bar-chart"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
      </div>

      <div className="service service2">
        <i className="ti-light-bulb"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
      </div>

      <div className="service service3">
        <i className="ti-money"></i>
        <h4>Lorem Ipsum</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a>
      </div>
    </div>
  </div>
</div>

      <div className="parallax-item">
        {/* Your projects section */}
      </div>
    </section>
  );
};

export default Home;
