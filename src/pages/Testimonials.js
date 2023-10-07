import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const testimonialData = [
  {
    author: 'Franz Ferro',
    quote:
      "They are knowledgeable and skilled, I liked that they understood my vision and were very adaptable and versatile following my indications on details.   They've worked fast and for a fair price, it was a good experienced overall and I've already asked them to work on another big project I have lined up. Highly recommended.",
    image:
      'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.png.jpg',
  },
  {
    author: 'IGT-Jewelry Shopping Mall',
    quote:
      "AMAZING SERVICE! We've been working with Kenan and his team for the past 8+ years for all our electrical-related work at our 16k SF Class A retail space in midtown Manhattan. They've always exceeded our expectations. Highly responsive, timely, easy to communicate, and honest with their work. Competitive and fair pricing. They put their client's interest first and get the job done nicely and accurately - and most importantly, in very high quality! Kenan is our #1 go-to guy for all electrical works and will continue to work with him.",
    image:
      'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.pngv.jpg',
  },
  {
    author: 'Amir Afshar',
    quote:
      'I have worked with Kenan and Direct Management Services for over 5 years now. I first used them for my business where Kenan was responsible for all electrical work and he oversaw and installed our security system and cameras. He is professional, reliable and fair. Most recently, for my home, Kenan installed security cameras, light fixtures, Sonos speakers and handled TV/AV needs. I was and still am thrilled with the result. The work is always completed neatly and in a timely manner. I have recommended him to a number of friends who have all been just as happy with his service. If there is ever any issue or anything that is in need of repair, Kenan is my first call — he really can do it all.',
    image:
      'https://e7.pngegg.com/pngimages/442/17/png-clipart-computer-icons-user-profile-male-user-heroes-head-thumbnail.pngv.jpg',
  },
];

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS
    AOS.init();

    // Clean up AOS when the component unmounts
    return () => {
      AOS.refresh();
    };
  }, []);
 

  return (
    <section className="testimonials">
      <div id="parallax">
        <div className="about-img1"></div>
      </div>
      <div>
        <h2 className="about-header">Testimonials</h2>
      </div>
      <div className="testimonial-container">
        {testimonialData.map((testimonial, index) => (
          <div
            className={`testimonial-box testimonial-box-${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} 
            data-aos-delay={`${index * 300}`}
          >
            <div className="testimonial-image-container">
              {testimonial.image && (
                <img
                  className="testimonial-image"
                />
              )}
            </div>
            <div className="testimonial-content">
                <div className='star'></div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
