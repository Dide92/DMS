import React, { useEffect, useState } from 'react';

const Contact = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <section className='contact-container'>
      <div id="parallax" className='parallax-section'>
        <div className='contact-img1'></div>
      </div>
    
      <div className="contact-info">
      <h2 className='getquote'>Contact Us</h2>

        <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
        <ul>
          <li>Email: directmanagement@example.com</li>
          <li>Phone: (917) 565-0623</li>
          <li>Address: 45-15 Barnett Ave, Queens, NY, 11104</li>
        </ul>
      </div>
      <div className='contact-form2'>
        <h2 className='getquote2'>Get A Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
            placeholder='Name'
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
            placeholder='E-mail'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
            placeholder='Your message here'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};


export default Contact;
