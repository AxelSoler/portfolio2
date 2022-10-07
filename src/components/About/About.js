import './About.css';

const About = () => (
  <section className="about">
    <h1 className="myName">AXEL SOLER</h1>
    <h2 className="Developer">Full Stack Developer</h2>
    <div className="aboutDescription">
      <p className="marquee">
        <span className="marqueeStyle">
          -Html -Css -Javascript -Ruby -Rails -Postgres -React
          {' '}
        </span>
      </p>
      <p className="marquee marquee2">
        <span>
          -RSpec -CapyBara -Codekit -Github -Gitlab -terminal
          {' '}
        </span>
      </p>
      <p className="description" id="firstText">I can help you build your desire product or website.</p>
      <p className="description">Look through some of my work and experience in the Projects page!</p>
      <p className="description">If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
      <p className="description">Check the links below</p>
    </div>
  </section>
);

export default About;
