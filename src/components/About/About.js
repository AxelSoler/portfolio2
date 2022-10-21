import HTMLimg from '../../img/symbols/html.svg';
import CSSimg from '../../img/symbols/css.svg';
import JavaScriptimg from '../../img/symbols/javascript.svg';
import reactimg from '../../img/symbols/react.svg';
import Rubyimg from '../../img/symbols/ruby.svg';
import Railsimg from '../../img/symbols/rails.svg';
import Postgresimg from '../../img/symbols/postgresql.svg';
import RSpecimg from '../../img/symbols/RSpec.svg';
import Githubimg from '../../img/symbols/github.svg';
import Gitlabimg from '../../img/symbols/gitlab.svg';
import Terminalimg from '../../img/symbols/terminal.svg';
import profilePicture from '../../img/profile/profilepic.jpg';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h1 className="myName">AXEL SOLER</h1>
    <h2 className="Developer">Full Stack Developer</h2>
    <div className="aboutDescription">
      <div className="marquee">
        <div className="marqueeblock">
          <ul className="ulmarquee">
            <li>
              <img className="skill" src={HTMLimg} alt="skill logo" />
              HTML
            </li>
            <li>
              <img className="skill" src={CSSimg} alt="skill logo" />
              CSS
            </li>
            <li>
              <img className="skill" src={JavaScriptimg} alt="skill logo" />
              JavaScript
            </li>
            <li>
              <img className="skill" src={reactimg} alt="skill logo" />
              React
            </li>
            <li>
              <img className="skill" src={Rubyimg} alt="skill logo" />
              Ruby
            </li>
            <li>
              <img className="skill railsimg" src={Railsimg} alt="skill logo" />
              Rails
            </li>
            <li>
              <img className="skill" src={Postgresimg} alt="skill logo" />
              Postgres
            </li>
            <li>
              <img className="skill" src={RSpecimg} alt="skill logo" />
              RSpec
            </li>
            <li>
              <img className="skill" src={Githubimg} alt="skill logo" />
              Github
            </li>
            <li>
              <img className="skill" src={Gitlabimg} alt="skill logo" />
              Gitlab
            </li>
            <li>
              <img className="skill" src={Terminalimg} alt="skill logo" />
              Terminal
            </li>
          </ul>
        </div>
      </div>
      <div className="marquee">
        <div className="marqueeblock marqueeblock2">
          <ul className="ulmarquee">
            <li>
              <img className="skill" src={HTMLimg} alt="skill logo" />
              HTML
            </li>
            <li>
              <img className="skill" src={CSSimg} alt="skill logo" />
              CSS
            </li>
            <li>
              <img className="skill" src={JavaScriptimg} alt="skill logo" />
              JavaScript
            </li>
            <li>
              <img className="skill" src={reactimg} alt="skill logo" />
              React
            </li>
            <li>
              <img className="skill" src={Rubyimg} alt="skill logo" />
              Ruby
            </li>
            <li>
              <img className="skill railsimg" src={Railsimg} alt="skill logo" />
              Rails
            </li>
            <li>
              <img className="skill" src={Postgresimg} alt="skill logo" />
              Postgres
            </li>
            <li>
              <img className="skill" src={RSpecimg} alt="skill logo" />
              RSpec
            </li>
            <li>
              <img className="skill" src={Githubimg} alt="skill logo" />
              Github
            </li>
            <li>
              <img className="skill" src={Gitlabimg} alt="skill logo" />
              Gitlab
            </li>
            <li>
              <img className="skill" src={Terminalimg} alt="skill logo" />
              Terminal
            </li>
          </ul>
        </div>
      </div>
      <img className="profilePicture" src={profilePicture} alt="Axel Soler" />
      <p className="description">I am passionate about programming and video games. Learning and working with teammates and friends around the world in a fully remote environment.</p>
      <p className="SkillsDescription">
        <img className="skill" src={JavaScriptimg} alt="JavaScript logo" />
        JavaScript =&gt; React
        <img className="skill" src={reactimg} alt="React logo" />
      </p>
      <p className="SkillsDescription">
        <img className="skill" src={Rubyimg} alt="skill logo" />
        Ruby =&gt; Rails
        <img className="skill railsimg" src={Railsimg} alt="skill logo" />
      </p>
      <p className="description">Patience and friendly.</p>
      <p className="description">English and Spanish(Argentina).</p>
      <p className="description">Look through some of my experience in the Projects section!</p>
      <p className="description">If you like what you see, don’t hesitate to contact me in Contact section.</p>
    </div>
  </section>
);

export default About;
