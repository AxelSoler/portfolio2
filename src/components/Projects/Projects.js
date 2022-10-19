import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projects from './AllProjects';
import Project from './Project';
import './Projects.css';

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="work" id="work">
      <h2 className="title">MY PROJECTS</h2>
      <Carousel
        responsive={responsive}
        className="carousel-container"
        infinite
        centerMode={false}
        autoPlay
        autoPlaySpeed={5000}
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
        transitionDuration={500}
      >
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
