import React from 'react';
import './NoticeCard.css';

const NoticeCard = ({ title, content }) => {
    return (
        <div className="notice-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <a href="#">See more</a>
        </div>
    );
};

export default NoticeCard;
