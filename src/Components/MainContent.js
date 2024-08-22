import React from 'react';
import './MainContent.css';
import FinanceCard from './Card1';
import CourseCard from './Card2';
import NoticeCard from './NoticeCard';
import Header from './Header';
import MainContentContainer from './Main-content-container';
import Profile from './Profile';
import SkillsTechnology from './Skill';
import { useLocation } from 'react-router-dom';
const userAvatar = require("../assets/welcome-image (2).png");

const MainContent = () => {
    const location = useLocation();
    console.log(location.pathname);
   
    return (
        <div className='main-div'>
        <Header/>
        <div className="main-content">
            {/* //when url will be /profile profile will be shown here similarly for all urls; */}
            {location.pathname === '/' && <div className="welcome-banner">
                <div className='welcome-text'>
                <h1>Welcome back, Vishal!</h1>
                <p>Always stay updated in your student portal</p>
                </div>
                <img src={userAvatar} alt="Welcome"/>

            </div> }
            {location.pathname === '/profile' && <Profile/>}
            {location.pathname==='/skills' && <SkillsTechnology/>}
            <MainContentContainer/>
        </div>
        </div>
    );
};

export default MainContent;
