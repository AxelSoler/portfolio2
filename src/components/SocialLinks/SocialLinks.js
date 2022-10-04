import './SocialLinks.css';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="social-media">
    <ul>
      <li className="social">
        <a href="https://github.com/AxelSoler" target="_blank" rel="noopener noreferrer" aria-label="Github"><BsGithub /></a>
      </li>
      <li className="social">
        <a href="https://www.linkedin.com/in/axel-soler-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
      </li>
      <li className="social">
        <a href="https://angel.co/u/axel-soler" target="_blank" rel="noopener noreferrer" aria-label="Angellist"><FaAngellist /></a>
      </li>
      <li className="social">
        <a href="https://twitter.com/AxelSoler18" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><BsTwitter /></a>
      </li>
    </ul>
  </div>
);

export default SocialLinks;
