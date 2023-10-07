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
