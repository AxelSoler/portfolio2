import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';

const Project = (props) => {
  const { project } = props;
  return (
    <div id={project.name} className="project">
      <img className="picture" src={project.image} alt={project.name} />
      <h3 className="projectName">{project.name}</h3>
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="projectLink">
        Web Page
        {' '}
        <FiExternalLink size="24px" color="#fff" />
      </a>
      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="projectLink">
        Repository
        {' '}
        <FiExternalLink size="24px" color="#fff" />
      </a>
      <p className="cardDescription">{project.description}</p>
      <ul className="ulTech">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    technologies: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};
