import projects from './AllProjects';

const Projects = () => (
  <section className="work">
    <h2>MY PROJECTS</h2>
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
  </section>
);

export default Projects;
