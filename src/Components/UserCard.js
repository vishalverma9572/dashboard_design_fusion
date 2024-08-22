import React from "react";
import "./UserCard.css"; // Ensure you have this CSS file in place
const userAvatar = require("../assets/user-avatar.png");

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card-image">
        <img src={userAvatar} alt="User Avatar" />
      </div>
      <div className="user-card-details">
        <div className="user-card-name">VISHAL KUMAR</div>
        <div className="user-card-info">CSE - 22BEC132</div>
        <div className="user-card-info">B.Tech 2022</div>
        <div className="user-card-info">Sem - 4</div>
      </div>
    </div>
  );
};

export default UserCard;
