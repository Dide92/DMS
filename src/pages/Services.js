import React, { useEffect, useState } from 'react';
import '../App.css';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: 'Property Management Services for Commercial and Residential Properties',
      details: 'Direct Management Services ensures hassle-free property ownership by taking care of routine repairs, tenant complaints, and essential maintenance tasks. We schedule and oversee mandated annual tests, including elevator, smoke detector, and fire extinguisher inspections. Our property management agreements include weekly visits, and urgent property needs are promptly addressed by our dedicated Superintendent/Handyman.',
    },
    {
      title: 'Design and Installation of Security and Surveillance Systems for Commercial and Residential Properties',
      details: 'We specialize in crafting customized security solutions, integrating state-of-the-art surveillance systems that provide peace of mind, safeguarding your property and loved ones.',
    },
    {
      title: 'Design and Installation of Internet Network Cables',
      details: 'Stay connected seamlessly with our expertly designed and installed internet network cables, guaranteeing high-speed connectivity throughout your property.',
    },
    {
      title: 'Design and Installation of Intercom Systems',
      details: 'Enhance communication and security with our intercom systems, offering convenient access control and intercom functionality for both residential and commercial spaces.',
    },
    {
      title: 'Installation of Smart Lock Systems',
      details: 'Experience the convenience of keyless entry with our smart lock systems. Control and monitor access to your property remotely, providing added security and flexibility.',
    },
    {
      title: 'General Contractor Services for Larger Renovation or Rehab Projects',
      details: 'Our team of skilled contractors specializes in overseeing and executing larger renovation and rehabilitation projects, transforming your space to meet your vision.',
    },
    {
      title: 'Property Development Services (Remodeling)',
      details: "Whether you're looking to remodel a single room or an entire property, our property development services cater to your remodeling needs, enhancing both aesthetics and functionality.",
    },
   
  ];

  useEffect(() => {
    const handleParallaxScroll = () => {
      const parallax = document.getElementById("parallax");
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    };

    window.addEventListener("scroll", handleParallaxScroll);

    return () => {
      window.removeEventListener("scroll", handleParallaxScroll);
    };
  }, []);

  const handleServiceHover = (index) => {
    setExpandedService(index);
  };
  window.scrollTo(0, 0);

  const handleServiceBlur = () => {
    setExpandedService(null);
  };

  return (
    <section className='section1'>
      <div id="parallax">
        <div className='services-img'></div>
      </div>
      <div>
        <h2 className='about-header'>Services</h2>
      </div>
      <ul className="service-list">
        {services.map((service, index) => (
          <li
            key={index}
            className={`service-item ${expandedService === index ? 'expanded' : ''}`}
            onMouseEnter={() => handleServiceHover(index)}
            onMouseLeave={handleServiceBlur}
          >
            <h3 className='services-title'>{service.title}</h3>
            {expandedService === index && <p className='service-details'>{service.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
