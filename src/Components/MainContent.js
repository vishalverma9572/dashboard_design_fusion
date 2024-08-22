import React from "react";
import "./MainContent.css";
const userAvatar = require("../assets/welcome-image (2).png");

const MainContent = ({ children }) => {
    return (
        <div className='main-div'>
            <div className="main-content">
                <div className="welcome-banner">
                    <div className='welcome-text'>
                        <h1>Welcome back, John!</h1>
                        <p>Always stay updated in your student portal</p>
                    </div>
                    <img src={userAvatar} alt="Welcome" />
                </div>
                {/* Render the section content below the welcome banner */}
                {children}
            </div>
        </div>
    );
};

export default MainContent;

