import React from 'react';
import './Card2.css';

const Card2 = ({ title, icon }) => {
    return (
        <div className="course-card">
            <img src={icon} alt={title} />
            <p>{title}</p>
            <button>View</button>
        </div>
    );
};

export default Card2;
