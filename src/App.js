import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/Contact';

const App = () => (
  <div className="App">
    <FormspreeProvider project="2047778179661168386">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <SocialLinks />
      </BrowserRouter>
    </FormspreeProvider>
  </div>
);

export default App;
