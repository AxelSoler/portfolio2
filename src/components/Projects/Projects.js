import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projects from './AllProjects';
import './Projects.css';

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="work">
      <h2>MY PROJECTS</h2>
      <Carousel
        responsive={responsive}
        className="carousel-container"
        infinite
        centerMode={false}
        autoPlay
        autoPlaySpeed={3000}
        additionalTransfrom={0}
        draggable={false}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        {projects.map((project) => (
          <div key={project.name} className="project">
            <h3 className="post">{project.name}</h3>
            <img className="picture" src={project.image} alt={project.name} />
            <p className="postDescription">{project.description}</p>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projectLink">
              See Live
              {' '}
              {project.name}
            </a>
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="projectLink">
              See Repository
              {' '}
              {project.name}
            </a>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
