import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './UserPage';
import logo from './assets/2133.png'; // Import your logo image

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
          <h1>Welcome</h1>
        </div>
        <Routes>
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
