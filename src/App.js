import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './Components/Dashboard';

import './App.css';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';

function App() {
    return (
      <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* <Route path="/profiles" element={<Profile />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
    );
}

export default App;
