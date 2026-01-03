import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LoginRegister from './pages/LoginRegister';
import '../src/styles/loginRegister.css';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
         
       
        
        {/* Fallback route for 404 can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
