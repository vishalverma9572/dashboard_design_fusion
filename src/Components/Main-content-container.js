//don't write code in this files Vishal is working on it
import React, { useState, useEffect } from 'react';
import './Main-content-container.css'; // Include your CSS file here
const announcements=[
    {
        id: 1,
        title: 'Announcement 1',
        description: 'Description of Announcement 1',
    },
    {
        id: 2,
        title: 'Announcement 2',
        description: 'Description of Announcement 2',
    },
    {
        id: 3,
        title: 'Announcement 3',
        description: 'Description of Announcement 3',
    },
];
const notifications = [
    {
        id: 1,
        title: 'Notification 1',
        description: 'Description of Notification 1',
    },
    {
        id: 2,
        title: 'Notification 2',
        description: 'Description of Notification 2',
    },
    {
        id: 3,
        title: 'Notification 3',
        description: 'Description of Notification 3',
    },
];

const MainPagecontainer = () => {
    const [data, setData] = useState({ announcements:announcements , notifications: notifications });
    const [selectedMode, setSelectedMode] = useState('announcement');

    

    const handleModeChange = (event) => {
        setSelectedMode(event.target.value);
    };

    return (
        <div className="main-page-container">
            <div className="left-side">
                <div className="card-container">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div className="card" key={index}>
                            <h3>Module {index + 1}</h3>
                            <p>Details about Module {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-side">
                <div className="dropdown-container">
                    
                    <select id="dropdown" value={selectedMode} onChange={handleModeChange}>
                        <option value="announcement">Announcement</option>
                        <option value="notification">Notification</option>
                    </select>
                    <div className="indicator">
                        {data.announcements.length > 0 && (
                            <span className="dot" id="announcement-dot"></span>
                        )}
                        {data.notifications.length > 0 && (
                            <span className="dot" id="notification-dot"></span>
                        )}
                    </div>
                </div>
                <div className="content">
                    {selectedMode === 'announcement' && data.announcements.map((item) => (
                        <div key={item.id} className="content-item">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    {selectedMode === 'notification' && data.notifications.map((item) => (
                        <div key={item.id} className="content-item">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPagecontainer;
