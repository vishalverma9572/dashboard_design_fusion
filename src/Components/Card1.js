import React from 'react';
import './Card1.css';

const Card1 = ({ title, amount, icon }) => {
    return (
        <div className="finance-card">
            {icon}
            <div>
                
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card1;
