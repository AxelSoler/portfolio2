import SocialLinks from '../SocialLinks/SocialLinks';

const About = () => (
  <section className="about">
    <h1>Axel Soler</h1>
    <h2>Full Stack Developer</h2>
    <div className="aboutDescription">
      <p className="description">
        I can help you build your desire product or website.
        {' '}
        Look through some of my work and experience!
        {' '}
        If you like what you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <div>
        <ul>
          <li>Language</li>
          <li>Javascript</li>
          <li>Html</li>
          <li>Css</li>
          <li>Ruby</li>
        </ul>
        <ul>
          <li>Frameworks</li>
          <li>Ruby on Rails</li>
          <li>RSPec</li>
          <li>CapyBara</li>
        </ul>
        <ul>
          <li>Skills</li>
          <li>Codekit</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>terminal</li>
        </ul>
      </div>
    </div>
    <SocialLinks />
  </section>
);

export default About;
