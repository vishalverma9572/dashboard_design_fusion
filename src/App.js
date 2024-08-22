import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Courses from './Components/Courses';
import WorkExperience from './Components/WorkExperience';
import Achievements from './Components/Achievements';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/profiles" element={<Profile />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/work_exp" element={<WorkExperience />} />
                        <Route path="/achievements" element={<Achievements />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
