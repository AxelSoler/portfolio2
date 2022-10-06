import logo from '../../img/logo/cover.png';
import './About.css';

const About = () => (
  <section className="about">
    <img className="logo" src={logo} alt="Axel Soler" />
    <div className="aboutDescription">
      <p className="description">I can help you build your desire product or website.</p>
      <p className="description">Look through some of my work and experience!</p>
      <p className="description">If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
      <p className="description">Check the links below</p>
      <div className="technologies">
        <ul className="ulTechnology">
          <li className="technologyTitle">Language</li>
          <li className="liTechnology">Javascript</li>
          <li className="liTechnology">Html</li>
          <li className="liTechnology">Css</li>
          <li className="liTechnology">Ruby</li>
        </ul>
        <ul className="ulTechnology">
          <li className="technologyTitle">Frameworks</li>
          <li className="liTechnology">React</li>
          <li className="liTechnology">Ruby on Rails</li>
          <li className="liTechnology">RSpec</li>
          <li className="liTechnology">CapyBara</li>
        </ul>
        <ul className="ulTechnology">
          <li className="technologyTitle">Skills</li>
          <li className="liTechnology">Codekit</li>
          <li className="liTechnology">Github</li>
          <li className="liTechnology">Gitlab</li>
          <li className="liTechnology">terminal</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
