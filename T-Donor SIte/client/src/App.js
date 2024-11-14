import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn'; // Import the SignIn component
import MyDonations from './pages/MyDonations';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/my-donations" element={<MyDonations />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;
