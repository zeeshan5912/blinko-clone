import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Customers from './pages/Customers';
import ProductsPage from './pages/ProductsPage';
import SuperMart from './pages/SuperMart';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import CloudKitchen from './pages/CloudKitchen';
import LetsConnect from './components/contact/contact';
import OtherRetail from './pages/OtherRetail';
import Delivery from './pages/Delivery';
import Enterprise from './pages/Enterprise';
import Pos from './pages/Pos';
function App() {
  return (
    <HelmetProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} title="Home Page"/>
          <Route path="/about" element={<About />} title="About Us"/>
          <Route path='/customers' element={<Customers />} title="Our Customers"/>
          <Route path='/restaurants' element={<ProductsPage />} title="Products" />
          <Route path='/supermarket' element={<SuperMart/>} title="SuperMArt"/>
          <Route path='/cloud-kitchen' element={<CloudKitchen/>} title="CloudKitchen"/>
          <Route path='/other-retail' element={<OtherRetail/>} title="Retail"/>
          <Route path='/delivery' element={<Delivery/>} title="Delivery"/>
          <Route path='/enterprise' element={<Enterprise/>} title="Enterprise"/>
          <Route path='/pos' element={<Pos/>} title="POS"/>
          <Route path='/contact' element={<LetsConnect/>} title="Contact Us"/>
        
        </Routes>
        <Footer />
        <ScrollToTop />
       
      </Router>
    </HelmetProvider>
  );
}

export default App;
