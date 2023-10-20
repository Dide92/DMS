import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      imageSrc: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageSrc: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageSrc: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4',
      imageSrc: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5',
      imageSrc: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of Project 6',
      imageSrc: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Description of Project 7',
      imageSrc: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Description of Project 8',
      imageSrc: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      hoverImageSrc: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
  ]);

  useEffect(() => {
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

  const handleMouseOver = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? { ...project, isHovered: true }
          : { ...project, isHovered: false }
      )
    );
  };
  window.scrollTo(0, 0);

  const handleMouseOut = () => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({ ...project, isHovered: false }))
    );
  };

  return (
    <section className='section1'>
      <div id="parallax">
        <div className="about-img1"></div>
      </div>
      <div>
        <h2 className="project-header">Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onMouseOver={() => handleMouseOver(project.id)}
            onMouseOut={handleMouseOut}
          >
            <img
              src={project.isHovered ? project.hoverImageSrc : project.imageSrc}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
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
