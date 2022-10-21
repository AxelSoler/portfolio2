import { FormspreeProvider } from '@formspree/react';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/Contact';

const App = () => (
  <div className="App">
    <FormspreeProvider project="2047778179661168386">
      <Navbar />
      <About />
      <Projects />
      <ContactForm />
      <SocialLinks />
    </FormspreeProvider>
  </div>
);

export default App;
