import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Sidebar.css';
import UserCard from './UserCard';
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
    const location = useLocation();
    
    return (
        <div className="sidebar">
            <UserCard />
            <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link></li>
                <li><Link to="/profiles" className={location.pathname === '/profiles' ? 'active' : ''}>Profile</Link></li>
                <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills & Technologies</Link></li>
                <li><Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Educational Courses</Link></li>
                <li><Link to="/work_exp" className={location.pathname === '/work_exp' ? 'active' : ''}>Work Experience</Link></li>
                <li><Link to="/achievements" className={location.pathname === '/achievements' ? 'active' : ''}>Achievements</Link></li>
            </ul>
            <div className='logout'>
                <button><span>Logout</span> <IoIosLogOut /> </button>
            </div>
        </div>
    );
};

export default Sidebar;
