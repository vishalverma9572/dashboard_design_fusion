import React from 'react';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import UserCard from './UserCard';
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
    const location = useLocation();
    
    return (
        <div className="sidebar">
            <UserCard />
            <ul>
                <li><a href="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</a></li>
                <li><a href="/#modules" className={location.pathname === '#modules' ? 'active' : ''}>Modules</a></li>
                <li><a href="/profile" className={location.pathname === '/profiles' ? 'active' : ''}>Profile</a></li>
                <li><a href="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills & Technologies</a></li>
                <li><a href="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Educational Courses</a></li>
                <li><a href="/work_exp" className={location.pathname === '/work_exp' ? 'active' : ''}>Work Experience</a></li>
                <li><a href="/achievements" className={location.pathname === '/achievements' ? 'active' : ''}>Achievements</a></li>
            </ul>
            <div className='logout'>
                <button><span>Logout</span> <IoIosLogOut /> </button>
            </div>
        </div>
    );
};

export default Sidebar;
