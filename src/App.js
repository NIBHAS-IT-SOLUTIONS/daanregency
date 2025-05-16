import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Services from './Pages/Services/Services';
import ScrollToTop from './utils/ScrollToTop';

import FloatingContactIcons from './utils/FloatingContactIcons';
import FloatingFABMenu from './utils/Floating/FloatingFABMenu';
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <HeroSection/> */}
      <Router>
      <FloatingContactIcons/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/Facilities" element={ <Services/> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
