import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SocialLinks />
    </BrowserRouter>
  </div>
);

export default App;
