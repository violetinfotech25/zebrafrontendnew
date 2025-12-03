import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Service from './components/Service.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton.jsx'; // Your custom component

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>

      <Footer />
      <FloatingWhatsAppButton /> {/* Floating WhatsApp button */}
    </BrowserRouter>
  );
}

export default App;
