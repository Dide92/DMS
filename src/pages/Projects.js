import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      images: [
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        // Add more image URLs here
      ],
      currentIndex: 0,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      images: [
        'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        // Add more image URLs here
      ],
      currentIndex: 0,
    },
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      images: [
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        // Add more image URLs here
      ],
      currentIndex: 0,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      images: [
        'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnS0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        // Add more image URLs here
      ],
      currentIndex: 0,
    },
    // Add more project objects here
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleParallaxScroll = () => {
      const parallax = document.getElementById('parallax');
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    };

    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prevProjects) =>
        prevProjects.map((project) => {
          const newIndex = (project.currentIndex + 1) % project.images.length;
          return { ...project, currentIndex: newIndex };
        })
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);



  const handleDotClick = (project, index) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === project.id ? { ...p, currentIndex: index } : p
      )
    );
  };

  return (
    <section className="section1">
      <div id="parallax">
        {/* <div className="about-img1"></div> */}
      </div>
      <div>
        <h2 className="project-header">Projects</h2>
      </div>
      <div className="project-grid-container">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ gridColumn: `span ${index % 3 === 0 ? 2 : 1}` }}
            >
              <div className="project-content">
                <div className="project-image">
                  <img
                    src={project.images[project.currentIndex]}
                    alt={project.title}
                  />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
               <div className="dot-container">
          {projects.map((project) => (
            <div key={project.id} className="dots">
              {project.images.map((image, index) => (
                <span
                  key={index}
                  className={`dot ${
                    index === project.currentIndex ? 'active' : ''
                  }`}
                  onClick={() => handleDotClick(project, index)}
                ></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



// import React from 'react';

// function Projects() {
//   return (
//     <section className='project-page'>
//     <div className="project-container">
//       <h1>Project Component</h1>
//       <div className="g-container">
//         <div className="section-one">
//           <img src="https://picsum.photos/800/800?random=100" alt="" />
//         </div>
//         <div className="section-two">
//           <img src="https://picsum.photos/800/800?random=200" alt="" />
//         </div>
//         <div className="section-three">
//           <img src="https://picsum.photos/800/800?random=300" alt="" />
//         </div>
//         <div className="section-four">
//           <img src="https://picsum.photos/800/800?random=400" alt="" />
//         </div>
//         <div className="section-five">
//           <img src="https://picsum.photos/800/800?random=500" alt="" />
//         </div>
//         <div className="section-six">
//           <img src="https://picsum.photos/800/800?random=600" alt="" />
//         </div>
//         <div className="section-seven">
//           <img src="https://picsum.photos/800/800?random=650" alt="" />
//         </div>
//         <div className="section-eight">
//           <img src="https://picsum.photos/800/800?random=700" alt="" />
//         </div>
//         <div className="section-night">
//           <img src="https://picsum.photos/800/800?random=750" alt="" />
//         </div>
//         <div className="section-ten">
//           <img src="https://picsum.photos/800/800?random=800" alt="" />
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }

// export default Projects;


// import React, { useEffect, useState } from 'react';
// import gsap from 'gsap';

// const Projects = () => {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   useEffect(() => {
//     const activateCursor = (title) => {
//       const cursor = document.querySelector(".cursor__circle");
//       const cursorText = cursor.querySelector(".cursor__text p");
//       const width = Math.ceil(title.offsetWidth * 1.1);
//       cursor.style.setProperty("--width", `${width}px`);
//       cursor.classList.add("cursor__circle--active");
//       cursorText.innerText = title.innerText;
//     };

//     const handleProjectHover = (title) => {
//       setHoveredProject(title);
//       activateCursor(title);
//     };

//     const handleProjectLeave = () => {
//       setHoveredProject(null);
//       const cursor = document.querySelector(".cursor__circle");
//       cursor.classList.remove("cursor__circle--active");
//       cursor.querySelector(".cursor__text p").innerText = "";
//     };

//     // GSAP animations and other code
//     gsap.set(".project__image", { yPercent: 100 });

//     window.onload = () => {
//       gsap.to(".project__image", 0.3, {
//         yPercent: 0,
//         opacity: 1,
//         delay: 0.5,
//         stagger: 0.3,
//         ease: "power3.inOut",
//         clearProps: "transform",
//       });
//     };
//   }, []);

//   return (
//     <section className="projects">
//       {projectData.map((project, index) => (
//         <a
//           href="#"
//           className={`project ${hoveredProject === project.title ? 'project--hovered' : ''}`}
//           key={index}
//           onMouseEnter={() => handleProjectHover(project.title)}
//           onMouseLeave={handleProjectLeave}
//         >
//           <figure className="project__image">
//             <img src={project.imageSrc} alt={project.title} />
//           </figure>
//           <div className="project__details">
//             <div className="project__title">
//               <p>{project.title}</p>
//             </div>
//             <div className="project__description">
//               <p>{project.description}</p>
//             </div>
//           </div>
//         </a>
//       ))}
//     </section>
//   );
// };

// // Sample project data (you can replace this with your data)
// const projectData = [
//   {
//     title: "Project X",
//     imageSrc: "URL_TO_IMAGE_1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   {
//     title: "Project Y",
//     imageSrc: "URL_TO_IMAGE_2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   },
//   // Add more projects here
// ];

// export default Projects;
